import { NextResponse } from 'next/server'
import { validateLead, leadSummary } from '@/lib/lead'
import { alertOwner, emailCustomer, emailOwner } from '@/lib/notify'

/**
 * Quote form endpoint.
 *
 * Replaces Formspree, for two reasons. Formspree cannot call a push service,
 * and its spam classifier was silently filing legitimate leads (see
 * BUDGET_BRACKETS in ContactForm for the full story) while still returning
 * {"ok":true} — so the site cheerfully told people their enquiry had been
 * received when it had been discarded. Owning the endpoint is what makes
 * honest reporting possible.
 */
export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Malformed request.' }, { status: 400 })
  }

  const result = validateLead(body)
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 400 })
  }
  const { lead } = result

  /*
   * All three fire concurrently and independently.
   *
   * allSettled, not all: `all` rejects on the first rejection and discards the
   * other results, which would throw away an email that had already been
   * delivered because Telegram happened to fail. The notify functions catch
   * their own errors today, so `all` would not actually reject — but that makes
   * the guarantee depend on the internals of another module, and a future
   * channel that throws would silently turn a delivered lead into a 500.
   */
  const [alerted, ownerMailed, customerMailed] = (
    await Promise.allSettled([alertOwner(lead), emailOwner(lead), emailCustomer(lead)])
  ).map((r) => r.status === 'fulfilled' && r.value === true)

  /*
   * THE FAILURE RULE.
   *
   * Success requires at least one OWNER-facing channel to have worked. The
   * customer's confirmation is explicitly excluded — failing to send a courtesy
   * email is not a reason to tell someone their enquiry was lost, and it is
   * also not evidence that anybody received it.
   *
   * This site has already shipped the opposite behaviour once: a success screen
   * displayed over a lead nobody ever saw. A visitor must never be told they
   * got through when they did not.
   */
  const delivered = alerted || ownerMailed

  if (!delivered) {
    /*
     * This log line is now THE ONLY SURVIVING COPY OF THE LEAD, so it has to
     * carry enough to ring them back. It previously logged name, city and
     * service — which identifies the lead without providing any way to contact
     * it, the worst of both worlds: personal data recorded, lead still lost.
     *
     * Yes, this puts a name, phone and email in Vercel's function logs. That is
     * a deliberate trade. The logs are access-controlled, and the alternative is
     * a customer who filled in fourteen fields vanishing without trace.
     */
    console.error(
      `[contact] DELIVERY FAILED — LEAD AT RISK. telegram=${alerted} ownerEmail=${ownerMailed} customerEmail=${customerMailed}\n` +
        `  ${leadSummary(lead)}\n` +
        `  phone: ${lead.phone}\n` +
        `  email: ${lead.email}\n` +
        `  address: ${lead.address}\n` +
        `  budget: ${lead.budget} · timeline: ${lead.timeline}`,
    )
    return NextResponse.json(
      {
        ok: false,
        error:
          'We could not get your request through just now. Please call Matt directly at (985) 413-2954 — we do not want to lose your project.',
      },
      { status: 502 },
    )
  }

  if (!alerted || !ownerMailed || !customerMailed) {
    // Degraded but delivered. Worth knowing about before it becomes total.
    console.warn(
      `[contact] partial delivery for ${leadSummary(lead)} — telegram=${alerted} ownerEmail=${ownerMailed} customerEmail=${customerMailed}`,
    )
  }

  return NextResponse.json({ ok: true })
}
