/**
 * Email presentation, kept apart from the code that talks to the network
 * (`notify.ts`) so a template change never touches transport.
 *
 * WRITTEN ONCE, RENDERED TWICE. Each email is a list of blocks that becomes both
 * the HTML and the plain text. Two hand-kept copies drift, and the text version
 * is the one that shows in a preview pane, the one a text-only client falls back
 * to, and the one that keeps a young sending domain out of spam folders — an
 * HTML-only email from a domain with no sending history is a pattern filters
 * recognise.
 */

import { FIELD_LABELS, displayValue, resolveCity, type Lead } from './lead'

const MAROON = '#7B1C2A'
const CREAM = '#F7F4EF'
const SITE = 'https://www.acadiapools.com'
const PHONE_DISPLAY = '(985) 413-2954'
const PHONE_TEL = '+19854132954'

/**
 * The header bar is WHITE, not maroon.
 *
 * logo.png has a baked white background and no alpha channel at all (verified:
 * every corner is #FFFFFF, min alpha 255). On a maroon bar it would render as a
 * white rectangle pasted onto the brand colour. The bar has to match the image's
 * own background exactly.
 */
const HEADER_BG = '#FFFFFF'

/** Telegram rejects messages longer than this. */
const TELEGRAM_MAX = 4096

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function shell(body: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM};padding:24px 0;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #ece7df;">
      <tr>
        <td align="center" style="background:${HEADER_BG};padding:24px;border-bottom:3px solid ${MAROON};">
          <img src="${SITE}/images/logo.png" width="150" alt="Acadia Pools" style="display:block;max-width:150px;height:auto;" />
        </td>
      </tr>
${body}
      <tr>
        <td style="padding:20px 40px;border-top:1px solid #f3f4f6;">
          <p style="margin:0;font-size:12px;color:#6b7280;line-height:1.6;">
            Acadia Pools · Custom gunite pools · Thibodaux, LA<br />
            <a href="tel:${PHONE_TEL}" style="color:${MAROON};font-weight:600;">${PHONE_DISPLAY}</a> ·
            <a href="${SITE}" style="color:${MAROON};">acadiapools.com</a>
          </p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>`
}

function heading(text: string): string {
  return `      <tr>
        <td style="padding:32px 40px 0;">
          <h1 style="margin:0 0 14px;font-size:22px;color:${MAROON};">${escapeHtml(text)}</h1>
        </td>
      </tr>`
}

function para(html: string, opts: { muted?: boolean } = {}): string {
  const color = opts.muted ? '#6b7280' : '#374151'
  const size = opts.muted ? '13px' : '15px'
  return `      <tr>
        <td style="padding:0 40px 8px;">
          <p style="margin:0 0 16px;font-size:${size};line-height:1.65;color:${color};">${html}</p>
        </td>
      </tr>`
}

/**
 * The lead's answers as a table. Rows with no answer are omitted entirely.
 *
 * Values go through displayValue so the reader sees what the visitor saw —
 * a budget stored as "75k-100k" renders as "$75,000 – $100,000". Quoting the
 * machine value back at the customer reads as a broken confirmation.
 *
 * Newlines become <br>: `message` is the one field anyone types freely, and
 * without this a customer's carefully paragraphed description arrives as a
 * single run-on line.
 */
function detailTable(lead: Lead): string {
  const rows = FIELD_LABELS.map(([key, label]) => {
    const value = displayValue(key, lead)
    if (!value) return ''
    return `<tr>
              <td style="padding:7px 0;font-size:13px;color:#6b7280;width:38%;vertical-align:top;">${label}</td>
              <td style="padding:7px 0;font-size:14px;color:#111827;font-weight:600;">${escapeHtml(value).replace(/\n/g, '<br />')}</td>
            </tr>`
  })
    .filter(Boolean)
    .join('\n            ')

  return `      <tr>
        <td style="padding:4px 40px 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM};border-radius:8px;padding:8px 18px;">
            ${rows}
          </table>
        </td>
      </tr>`
}

function callButton(): string {
  return `      <tr>
        <td align="center" style="padding:8px 40px 24px;">
          <a href="tel:${PHONE_TEL}" style="display:inline-block;background:${MAROON};color:#ffffff;font-size:16px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:8px;">Call ${PHONE_DISPLAY}</a>
        </td>
      </tr>`
}

/** Wrap to 78 columns so no mail client re-wraps the text part into something ragged. */
function wrap(s: string, width = 78): string {
  return s
    .split('\n')
    .map((line) => {
      const out: string[] = []
      let cur = ''
      for (const word of line.split(' ')) {
        if (cur && (cur + ' ' + word).length > width) {
          out.push(cur)
          cur = word
        } else cur = cur ? cur + ' ' + word : word
      }
      if (cur) out.push(cur)
      return out.join('\n')
    })
    .join('\n')
}

function detailText(lead: Lead): string {
  return FIELD_LABELS.map(([key, label]) => {
    const value = displayValue(key, lead)
    return value ? `${label}: ${value}` : ''
  })
    .filter(Boolean)
    .join('\n')
}

/* ────────────────────────────────────────────────────────────────────────── */

/** To the owner. Complete and scannable — this is the record that outlives the alert. */
export function ownerEmail(lead: Lead): { subject: string; html: string; text: string } {
  const city = resolveCity(lead)
  return {
    subject: `New Quote: ${lead.name}, ${city} — ${lead.service || 'General Inquiry'}`,
    html: shell(
      heading('New quote request') +
        para(
          `<a href="tel:${escapeHtml(lead.phone)}" style="color:${MAROON};font-weight:700;">${escapeHtml(lead.phone)}</a> — ${escapeHtml(lead.name)}, ${escapeHtml(city)}`,
        ) +
        detailTable(lead) +
        para('Reply to this email to reach them directly.', { muted: true }),
    ),
    text: `New quote request\n\n${detailText(lead)}\n\n${wrap('Reply to this email to reach them directly.')}`,
  }
}

/**
 * To the customer.
 *
 * Carries the owner's phone number on purpose. If a follow-up is slow, somebody
 * spending this kind of money should not be sitting waiting on a callback with
 * no way to chase it — give them the number and let them close the loop.
 */
export function customerEmail(lead: Lead): { subject: string; html: string; text: string } {
  const firstName = lead.name.split(' ')[0] || lead.name
  const lines = [
    `Thanks ${firstName} — we've got your request and Matt will be in touch about your project.`,
    `Here's what you sent us. If any of it looks wrong, just reply to this email and we'll fix it.`,
  ]
  const closing = `In a hurry, or thought of something else? Call Matt directly at ${PHONE_DISPLAY}.`

  return {
    subject: 'We got your request — Acadia Pools',
    html: shell(
      heading('Thanks for reaching out') +
        para(escapeHtml(lines[0])) +
        para(escapeHtml(lines[1])) +
        detailTable(lead) +
        para(escapeHtml(closing), { muted: true }) +
        callButton(),
    ),
    text:
      `Thanks for reaching out\n\n` +
      `${wrap(lines[0])}\n\n${wrap(lines[1])}\n\n` +
      `${detailText(lead)}\n\n${wrap(closing)}\n\n` +
      `Acadia Pools\n${PHONE_DISPLAY}\n${SITE}`,
  }
}

/**
 * The Telegram alert.
 *
 * MUST BE SELF-SUFFICIENT. It used to end with "Full details are in your email"
 * — which is a lie in exactly the situation this alert exists for. Email is the
 * known-unreliable channel here; the two most likely degraded states are
 * "Telegram delivered, email did not" and "email sat unread for two days". In
 * either one, pointing at an email is worse than saying nothing, because it
 * sends the owner looking for something that is not there.
 *
 * So it carries everything needed to act: phone AND email address, every answer
 * given, and the customer's full message. Phone first and tappable — alert to
 * callback in one tap is the entire point.
 */
export function telegramMessage(lead: Lead): string {
  const city = resolveCity(lead)
  const specs = [lead.dimensions, lead.poolSpa, lead.waterSystem, lead.decking, lead.controls]
    .filter(Boolean)
    .join(' · ')
  const parts = [
    `🏊 <b>New Pool Lead — ${escapeHtml(city)}</b>`,
    '',
    `<b>${escapeHtml(lead.name)}</b>`,
    `📞 <a href="tel:${escapeHtml(lead.phone)}">${escapeHtml(lead.phone)}</a>`,
    `✉️ ${escapeHtml(lead.email)}`,
    '',
    `Budget: <b>${escapeHtml(displayValue('budget', lead))}</b>`,
    `Timeline: ${escapeHtml(lead.timeline)}`,
    `Service: ${escapeHtml(lead.service || 'General Inquiry')}`,
    '',
    `📍 ${escapeHtml(lead.address)}, ${escapeHtml(city)}`,
  ]
  if (specs) parts.push(escapeHtml(specs))
  if (lead.gateAccess) parts.push(`Gate access: ${escapeHtml(lead.gateAccess)}`)
  if (lead.message) parts.push('', `<i>"${escapeHtml(lead.message)}"</i>`)

  /*
   * Telegram rejects any message over 4096 characters, and `message` alone can
   * be 5000. Left unchecked, a customer who writes at length would cause the
   * whole sendMessage call to fail — killing the PRIMARY alert for precisely
   * the most engaged lead. Truncate rather than risk the send.
   */
  const text = parts.join('\n')
  return text.length <= TELEGRAM_MAX
    ? text
    : text.slice(0, TELEGRAM_MAX - 20).trimEnd() + '…\n<i>(truncated)</i>'
}
