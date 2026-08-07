/**
 * The shape of a quote request, shared by the form and the API route.
 *
 * The client posts JSON now rather than going straight to a third party, so the
 * endpoint cannot trust the shape of what arrives — everything here is
 * re-validated server-side regardless of what the form enforces.
 */

export type Lead = {
  name: string
  phone: string
  email: string
  address: string
  city: string
  /** Only present when city === 'Other / Not listed'. */
  cityOther?: string
  service?: string
  timeline: string
  budget: string
  // Build details — optional, and absent entirely for non-build enquiries.
  dimensions?: string
  decking?: string
  poolSpa?: string
  waterSystem?: string
  controls?: string
  gateAccess?: string
  /** Free text. Present for non-build enquiries, absent for build ones. */
  message?: string
}

/** Always required, whatever the enquiry type. */
const REQUIRED = ['name', 'phone', 'email', 'address', 'city', 'timeline', 'budget'] as const

export const CITY_OTHER = 'Other / Not listed'

/**
 * Budget brackets. `label` is what the visitor reads, `value` is what is stored
 * and transmitted — they differ deliberately, and both live here so the form and
 * the emails cannot disagree about what a value means.
 *
 * The split exists because a "$75,000 - $100,000" string in a payload reads as
 * advance-fee fraud to spam classifiers; it got every lead filed as spam on the
 * previous form provider. Keep values free of the $NN,NNN pattern.
 */
export const BUDGET_BRACKETS = [
  { value: 'under 50k (renovation, maintenance, or smaller project)', label: 'Under $50,000 — renovation, maintenance, or smaller project' },
  { value: '50k-75k', label: '$50,000 – $75,000' },
  { value: '75k-100k', label: '$75,000 – $100,000' },
  { value: '100k-150k', label: '$100,000 – $150,000' },
  { value: '150k-250k', label: '$150,000 – $250,000' },
  { value: '250k+', label: '$250,000+' },
  { value: 'not sure yet - would like guidance', label: "Not sure yet — I'd like guidance" },
]

/**
 * Turn a stored budget value back into what the visitor actually saw.
 *
 * Without this the confirmation email quotes their own budget back at them as
 * "75k-100k", which reads as a glitch to someone who selected
 * "$75,000 – $100,000". Falls through to the raw value so an unrecognised
 * bracket still shows something rather than vanishing.
 */
export function budgetLabel(value: string): string {
  return BUDGET_BRACKETS.find((b) => b.value === value)?.label ?? value
}

/**
 * Per-field caps. Generous enough never to truncate a real person, tight enough
 * that the endpoint cannot be used to post a novel. `message` is the only field
 * anyone types freely, so it gets the room.
 */
const MAX_LENGTH: Record<string, number> = {
  name: 120,
  phone: 40,
  email: 200,
  address: 200,
  city: 80,
  cityOther: 80,
  message: 5000,
}
const DEFAULT_MAX = 200

/** Display order and labels for the owner's email. */
export const FIELD_LABELS: Array<[keyof Lead, string]> = [
  ['name', 'Name'],
  ['phone', 'Phone'],
  ['email', 'Email'],
  ['address', 'Address'],
  ['city', 'City'],
  ['service', 'Service'],
  ['timeline', 'Timeline'],
  ['budget', 'Budget'],
  ['dimensions', 'Pool dimensions'],
  ['decking', 'Decking'],
  ['poolSpa', 'Pool / spa'],
  ['waterSystem', 'Water system'],
  ['controls', 'Controls'],
  ['gateAccess', 'Gate access'],
  ['message', 'Message'],
]

/** The city they actually named, collapsing the "Other" escape hatch. */
export function resolveCity(lead: Lead): string {
  const other = lead.cityOther?.trim()
  return lead.city === CITY_OTHER && other ? other : lead.city
}

/** A field's value as a human should read it. */
export function displayValue(key: keyof Lead, lead: Lead): string {
  if (key === 'city') return resolveCity(lead)
  if (key === 'budget') return budgetLabel(lead.budget)
  return lead[key] ?? ''
}

/** One line for a subject line or a push alert. */
export function leadSummary(lead: Lead): string {
  return `${lead.name}, ${resolveCity(lead)} — ${lead.service || 'General Inquiry'}`
}

/**
 * Spam signals.
 *
 * Formspree came with reCAPTCHA and its own filtering; owning the endpoint
 * means owning that too. These two catch drive-by bots cheaply. Volume abuse is
 * handled separately at the edge by a Vercel Firewall rate limit, which is the
 * right layer for it — a serverless function has no reliable shared memory to
 * count requests in.
 */

/** Nobody completes fourteen fields in three seconds. Bots submit instantly. */
const MIN_ELAPSED_MS = 3000

/** Six hours. Beyond this the page has been open so long the timing means nothing. */
const MAX_ELAPSED_MS = 6 * 60 * 60 * 1000

/**
 * The honeypot field name. Deliberately plausible — bots fill anything that
 * looks like a real field, and "website" is a common one they auto-complete.
 */
export const HONEYPOT_FIELD = 'website'

/** How long the form was on screen before submit, in ms. */
export const ELAPSED_FIELD = 'elapsed'

export type ValidationResult =
  | { ok: true; lead: Lead }
  | { ok: false; error: string; spam?: true }

export function validateLead(raw: unknown): ValidationResult {
  if (typeof raw !== 'object' || raw === null) return { ok: false, error: 'Malformed request.' }
  const input = raw as Record<string, unknown>

  /*
   * Honeypot. The field is hidden from sight and skipped by the tab order, so a
   * human never fills it.
   *
   * We REJECT and log rather than silently discarding. Silently swallowing is
   * the conventional advice — it avoids teaching a bot that the trap exists —
   * but it is exactly the behaviour that lost leads on the previous provider.
   * If a password manager ever autofills this on a real person, they get an
   * error telling them to phone, and it shows up in the logs. A lead is worth
   * more than denying a bot one bit of information.
   */
  const honeypot = input[HONEYPOT_FIELD]
  if (typeof honeypot === 'string' && honeypot.trim() !== '') {
    return { ok: false, error: 'Your request could not be sent.', spam: true }
  }

  /*
   * Timing. The client stamps how long the form was on screen. A bot posting
   * directly submits in milliseconds, or omits the field entirely — and since
   * the form only submits via JavaScript, a real visitor always has it.
   *
   * A determined attacker can forge the number. This is a cheap filter for
   * drive-by automation, not a defence against someone targeting this site.
   */
  const elapsed = Number(input[ELAPSED_FIELD])
  if (!Number.isFinite(elapsed) || elapsed < MIN_ELAPSED_MS || elapsed > MAX_ELAPSED_MS) {
    return { ok: false, error: 'Your request could not be sent.', spam: true }
  }

  const lead: Record<string, string> = {}

  for (const [key] of FIELD_LABELS.concat([['cityOther', 'City (other)']])) {
    const value = input[key]
    if (value === undefined || value === null) continue
    if (typeof value !== 'string') return { ok: false, error: `Invalid value for ${key}.` }
    const trimmed = value.trim()
    if (!trimmed) continue
    if (trimmed.length > (MAX_LENGTH[key] ?? DEFAULT_MAX)) {
      return { ok: false, error: `That ${key} is too long.` }
    }
    lead[key] = trimmed
  }

  for (const key of REQUIRED) {
    if (!lead[key]) return { ok: false, error: 'Please fill in all required fields.' }
  }

  /*
   * "Other / Not listed" is a placeholder, not a city. The form reveals a text
   * input when it is picked, but the endpoint cannot assume the form ran — a
   * payload without cityOther would otherwise hand the owner the literal string
   * "Other / Not listed" as the customer's location, which is worse than useless
   * on a lead whose whole value is knowing where the property is.
   */
  if (lead.city === CITY_OTHER && !lead.cityOther) {
    return { ok: false, error: 'Please tell us which city.' }
  }

  // Deliberately permissive: the point is to catch a typo, not to adjudicate
  // RFC 5322. Rejecting a real customer's unusual address is far worse than
  // accepting one that bounces.
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(lead.email)) {
    return { ok: false, error: 'That email address does not look right.' }
  }

  return { ok: true, lead: lead as unknown as Lead }
}
