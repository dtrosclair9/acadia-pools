/**
 * Sales-pitch filter for the quote form (Dayne 2026-11-18: agencies and vendors keep using the form to pitch Matt).
 *
 * These are real people typing, so the honeypot and timing checks can't catch them. Instead each submission is scored
 * on signals a pool customer never sends. A flagged submission is NOT discarded: it skips the Telegram alert and the
 * customer confirmation, and still reaches Matt's inbox labelled as filtered, so a misjudged real lead is never lost.
 */
type Scorable = { email: string; phone: string; message?: string; name?: string }

/** Phrases vendors use and pool customers don't. Each match counts once; two or more is strong. */
const PITCH_PHRASES: RegExp[] = [
  /\bwe help (businesses|companies|business owners|contractors)\b/i,
  /\b(re)?design(ing)? (and refresh )?(your|their) (web ?site|site)s?\b/i,
  /\bweb ?site (re)?design\b|\bweb design\b|\bnew look and feel\b/i,
  /\bseo\b|\bsearch engine\b|\bfirst page of google\b|\bgoogle (ranking|rankings|maps ranking)\b/i,
  /\b(digital )?marketing (agency|services|campaign)s?\b|\blead generation\b|\bmore leads\b|\bqualified leads\b/i,
  /\bgrow your business\b|\bscale your business\b/i,
  /\bsamples? of our work\b|\bour (portfolio|services|agency|team of)\b|\bcase stud(y|ies)\b/i,
  /\bbook a (time|call|meeting|demo)\b|\bschedule a (quick )?(call|meeting|demo)\b|\b(15|20|30)[- ]min(ute)?\b/i,
  /\b(partner|partnership) with you\b|\bwould love the opportunity to work with you\b/i,
  /\bvirtual assistant\b|\boutsourc(e|ing)\b|\bapp development\b|\bsoftware development\b/i,
  /\b(business|working capital) (loan|funding)\b|\bmerchant services\b|\bcredit card processing\b/i,
  /\bnot relevant\b|\bwon'?t reach out again\b|\bunsubscribe\b|\bopt out\b/i,
]
const SCHEDULER = /\b(calendly\.com|hubspot\.com\/meetings|cal\.com|acuityscheduling\.com|meetings\.hubspot)\b/i
const ANY_LINK = /\bhttps?:\/\/|\bwww\.[a-z0-9-]+\.[a-z]/i
/** Louisiana area codes; anything else is only a weak signal (people move, keep old numbers). */
const LA_AREA_CODES = new Set(['225', '318', '337', '504', '985'])

export type PitchVerdict = { pitch: boolean; score: number; reasons: string[] }

export function scorePitch(lead: Scorable): PitchVerdict {
  const msg = lead.message ?? ''
  const reasons: string[] = []
  let score = 0
  const phraseHits = PITCH_PHRASES.filter((re) => re.test(msg)).length
  if (phraseHits) { score += phraseHits >= 2 ? 3 : 1; reasons.push(`${phraseHits} sales phrase${phraseHits > 1 ? 's' : ''}`) }
  if (SCHEDULER.test(msg)) { score += 2; reasons.push('scheduling link') }
  else if (ANY_LINK.test(msg)) { score += 1; reasons.push('link in message') }
  // "I'm Hannah from Melotto Group" + h.melotto@melottogroup.com: introducing their own company.
  const from = msg.match(/\b(?:from|with|at)\s+([A-Z][A-Za-z0-9&]+(?:\s+[A-Z][A-Za-z0-9&]+){0,3})/)
  const domain = (lead.email.split('@')[1] ?? '').toLowerCase().split('.')[0]
  if (from && domain && from[1].toLowerCase().replace(/[^a-z0-9]/g, '').includes(domain.replace(/[^a-z0-9]/g, '').slice(0, 6))) {
    score += 1; reasons.push(`introduces their company (${from[1]})`)
  }
  const digits = lead.phone.replace(/\D/g, '').replace(/^1(?=\d{10}$)/, '')
  if (digits.length === 10 && !LA_AREA_CODES.has(digits.slice(0, 3))) { score += 1; reasons.push(`out-of-state phone (${digits.slice(0, 3)})`) }
  return { pitch: score >= 3, score, reasons }
}
