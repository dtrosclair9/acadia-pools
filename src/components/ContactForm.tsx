'use client'

import { useEffect, useRef, useState } from 'react'

/*
 * Brackets live in src/lib/lead.ts, shared with the server.
 *
 * `label` is what the visitor reads, `value` is what gets transmitted, and they
 * differ deliberately — a "$75,000 - $100,000" payload reads as advance-fee
 * fraud to spam classifiers and got every lead filed as spam on the previous
 * provider. Keeping the pair in one module is what stops the confirmation email
 * quoting a raw "75k-100k" back at the customer.
 */
import { BUDGET_BRACKETS, CITY_OTHER } from '@/lib/lead'

type FormState = 'idle' | 'loading' | 'success' | 'error'

/**
 * Our own endpoint, not Formspree.
 *
 * Formspree cannot notify anything but email, and email is the channel that was
 * failing — leads sat unread. It was also silently spam-filing submissions while
 * returning success. See src/app/api/contact/route.ts.
 */
const CONTACT_ENDPOINT = '/api/contact'

// CITY_OTHER is imported from lib/lead — the form's conditional and the
// server's validation must agree on this exact string or a valid submission
// gets rejected for a field the visitor was never shown.

/** Mirrors the service-area list rendered on the contact page. */
const CITIES = [
  'Thibodaux',
  'Houma',
  'Raceland',
  'Lockport',
  'Cut Off',
  'Golden Meadow',
  'Larose',
  'Mathews',
  'Gray',
  'Schriever',
  'Morgan City',
  'Napoleonville',
  CITY_OTHER,
]

const SERVICES = [
  'Custom Gunite Pool',
  'Pool Renovation / Remodel',
  'Water Features',
  'Outdoor Living (Patio, Deck, Outdoor Kitchen)',
  'Turf Installation',
  'Pool Maintenance',
  'Other / General Inquiry',
]

/**
 * Services where pool build specs are meaningless. For these — and before any
 * service is picked — the Build Details block is hidden and the free-text
 * message field is shown and required instead, since it is then the only place
 * the visitor can describe anything.
 */
const SERVICES_WITHOUT_BUILD_DETAILS = [
  'Turf Installation',
  'Pool Maintenance',
  'Other / General Inquiry',
]

const TIMELINES = ['ASAP', '1–3 months', '3–6 months', 'Next year', 'Just exploring']

const BUDGET_FLOOR_NOTE =
  'New custom gunite pool builds start at $50,000. Renovations, water features, and maintenance vary.'

const DECKING_OPTIONS = [
  'Concrete',
  'Spray deck',
  'Natural stone (travertine, flagstone)',
  'Not sure yet',
]
const POOL_SPA_OPTIONS = ['Pool only', 'Pool + attached spa', 'Not sure yet']
const WATER_SYSTEM_OPTIONS = ['Saltwater', 'Chlorine', 'Not sure yet']
const CONTROL_OPTIONS = ['Manual', 'Automated (phone/app control)', 'Not sure yet']

/**
 * Gunite needs an excavator and a shotcrete rig in the back yard, so a blocked
 * side yard changes the job entirely. This used to be prompted for in the
 * free-text field; now that the structured questions replace that field for
 * build enquiries, it has to be asked directly or it stops being captured.
 */
const GATE_ACCESS_OPTIONS = [
  'Wider than 10 ft',
  '8–10 ft',
  'Under 8 ft',
  'No side access',
  'Not sure yet',
]

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [service, setService] = useState('')
  const [city, setCity] = useState('')
  const successHeadingRef = useRef<HTMLParagraphElement>(null)

  // Build enquiries answer the structured questions instead of writing an
  // essay; everyone else gets the free-text field, which is then their only
  // way to describe the job. Requires an explicit pick, so the message field
  // is present on first load rather than appearing after a selection.
  const showBuildDetails = service !== '' && !SERVICES_WITHOUT_BUILD_DETAILS.includes(service)
  const showMessage = !showBuildDetails
  const showCityOther = city === CITY_OTHER

  // The submit button is gone once the success panel replaces the form — move focus so
  // keyboard and screen reader users aren't stranded on a removed control.
  useEffect(() => {
    if (status === 'success') successHeadingRef.current?.focus()
  }, [status])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => null)

      // The endpoint reports honestly: ok is true only when the owner was
      // actually reached. Never show success on anything else.
      if (res.ok && json?.ok) {
        setStatus('success')
        form.reset()
      } else {
        setErrorMessage(
          json?.error ??
            'Something went wrong sending your request. Please call Matt at (985) 413-2954.',
        )
        setStatus('error')
      }
    } catch {
      // Careful with the wording: the request may have reached the server and
      // been delivered before the connection dropped. Claiming it "did not
      // send" would push someone into submitting twice, or worse, into assuming
      // it failed when Matt already has it.
      setErrorMessage(
        "Network error — we couldn't confirm your request went through. Please call Matt at (985) 413-2954 to be sure.",
      )
      setStatus('error')
    }
  }

  const inputClass =
    'w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition'
  const selectClass = `${inputClass} bg-white`
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5'
  const legendClass =
    'text-xs font-semibold uppercase tracking-widest text-gray-600 font-sans mb-4'
  const ringStyle = { '--tw-ring-color': 'var(--color-maroon)' } as React.CSSProperties

  const requiredMark = (
    <span className="text-red-500" aria-hidden="true">
      *
    </span>
  )

  if (status === 'success') {
    return (
      <div role="status" className="text-center">
        <p
          ref={successHeadingRef}
          tabIndex={-1}
          className="text-2xl font-serif text-gray-900 mb-2 focus:outline-none"
        >
          Got it — Matt has your details.
        </p>
        <p className="text-gray-600 text-sm mb-6 font-sans">
          A confirmation is on its way to your inbox. Matt will be in touch about your project, and
          he may have a few questions to make sure Acadia is the right fit before breaking ground.
        </p>

        {/*
         * The success screen ends in an action rather than a dead end. Someone
         * who just filled in fourteen fields is at their most motivated right
         * here, and making them hunt the header for a phone number wastes that.
         */}
        <a href="tel:+19854132954" className="btn-maroon w-full text-center block">
          Rather talk now? Call (985) 413-2954
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* ── Contact ─────────────────────────────────────────────── */}
      <fieldset>
        <legend className={legendClass}>Contact</legend>
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className={labelClass}>
                Full Name {requiredMark}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
                style={ringStyle}
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number {requiredMark}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className={inputClass}
                style={ringStyle}
                placeholder="(985) 000-0000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address {requiredMark}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
              style={ringStyle}
              placeholder="you@example.com"
            />
          </div>
        </div>
      </fieldset>

      {/* ── Property ────────────────────────────────────────────── */}
      <fieldset>
        <legend className={legendClass}>Property</legend>
        <div className="space-y-5">
          <div>
            <label htmlFor="address" className={labelClass}>
              Street Address {requiredMark}
            </label>
            <input
              id="address"
              name="address"
              type="text"
              required
              autoComplete="street-address"
              className={inputClass}
              style={ringStyle}
              placeholder="123 Ridgefield Rd"
              aria-describedby="address-help"
            />
            <p id="address-help" className="text-xs text-gray-600 mt-1.5 font-sans">
              Lets Matt look at your lot before you talk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="city" className={labelClass}>
                City {requiredMark}
              </label>
              <select
                id="city"
                name="city"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={selectClass}
                style={ringStyle}
              >
                <option value="">Select your city...</option>
                {CITIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {showCityOther && (
              <div>
                <label htmlFor="cityOther" className={labelClass}>
                  Which city? {requiredMark}
                </label>
                <input
                  id="cityOther"
                  name="cityOther"
                  type="text"
                  required
                  autoComplete="address-level2"
                  className={inputClass}
                  style={ringStyle}
                  placeholder="Your city or town"
                />
              </div>
            )}
          </div>
        </div>
      </fieldset>

      {/* ── Project ─────────────────────────────────────────────── */}
      <fieldset>
        <legend className={legendClass}>Project</legend>
        <div className="space-y-5">
          <div>
            <label htmlFor="service" className={labelClass}>
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={selectClass}
              style={ringStyle}
            >
              <option value="">Select a service...</option>
              {SERVICES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className={labelClass}>
              Timeline {requiredMark}
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              className={selectClass}
              style={ringStyle}
            >
              <option value="">When are you hoping to start?</option>
              {TIMELINES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className={labelClass}>
              Budget Range {requiredMark}
            </label>
            <select
              id="budget"
              name="budget"
              required
              className={selectClass}
              style={ringStyle}
              aria-describedby="budget-help"
            >
              <option value="">Select a range...</option>
              {BUDGET_BRACKETS.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
            <p id="budget-help" className="text-xs text-gray-600 mt-1.5 font-sans">
              {BUDGET_FLOOR_NOTE}
            </p>
          </div>
        </div>
      </fieldset>

      {/* ── Build Details (optional) ────────────────────────────── */}
      {showBuildDetails && (
        <fieldset className="rounded-xl bg-white border border-gray-200 p-6">
          <legend className="px-2 text-sm font-semibold text-gray-900 font-sans">
            Build Details — optional, but worth it
          </legend>
          <p className="text-xs text-gray-600 mb-5 font-sans leading-relaxed">
            The more you can answer here, the closer Matt can get to a real number before your
            consultation. Not sure on something? Leave it blank or pick &quot;Not sure yet&quot; —
            that tells him what to walk you through.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label htmlFor="dimensions" className={labelClass}>
                Rough Pool Dimensions
              </label>
              <input
                id="dimensions"
                name="dimensions"
                type="text"
                className={inputClass}
                style={ringStyle}
                placeholder="e.g. 16x32, or about 400 sq ft"
              />
            </div>

            <div>
              <label htmlFor="decking" className={labelClass}>
                Decking Material
              </label>
              <select id="decking" name="decking" className={selectClass} style={ringStyle}>
                <option value="">Select...</option>
                {DECKING_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="poolSpa" className={labelClass}>
                Pool Only or Pool + Spa
              </label>
              <select id="poolSpa" name="poolSpa" className={selectClass} style={ringStyle}>
                <option value="">Select...</option>
                {POOL_SPA_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="waterSystem" className={labelClass}>
                Water System
              </label>
              <select id="waterSystem" name="waterSystem" className={selectClass} style={ringStyle}>
                <option value="">Select...</option>
                {WATER_SYSTEM_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="controls" className={labelClass}>
                Pool Controls
              </label>
              <select id="controls" name="controls" className={selectClass} style={ringStyle}>
                <option value="">Select...</option>
                {CONTROL_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="gateAccess" className={labelClass}>
                Gate / Side-Yard Access
              </label>
              <select
                id="gateAccess"
                name="gateAccess"
                className={selectClass}
                style={ringStyle}
                aria-describedby="gate-help"
              >
                <option value="">Select...</option>
                {GATE_ACCESS_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <p id="gate-help" className="text-xs text-gray-600 mt-1.5 font-sans">
                How wide is the path into the back yard? Equipment has to fit through it.
              </p>
            </div>
          </div>
        </fieldset>
      )}

      {/* ── Message — only when the structured questions don't apply ── */}
      {showMessage && (
        <div>
          <label htmlFor="message" className={labelClass}>
            Tell Us About Your Project {requiredMark}
          </label>
          <p id="message-help" className="text-xs text-gray-600 mb-2 font-sans leading-relaxed">
            Helpful: the condition of any existing pool, how wide your gate or side-yard access is,
            and anything you already know you want.
          </p>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${inputClass} resize-y`}
            style={ringStyle}
            aria-describedby="message-help"
            placeholder="Example: Our plaster is chalking and the tile line needs work. Backyard has a 10-ft gate. Hoping to get it done before summer."
          />
        </div>
      )}

      {status === 'error' && (
        <p
          role="alert"
          className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-4 py-3"
        >
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-maroon text-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send My Message'}
      </button>
    </form>
  )
}
