import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Acadia Pools for a free custom pool quote. Call (985) 413-2954 or send a message. Serving Thibodaux, LA and all of Lafourche Parish.',
}

const contactDetails = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '(985) 413-2954',
    href: 'tel:+19854132954',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'acadiapools@gmail.com',
    href: 'mailto:acadiapools@gmail.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Thibodaux, LA — Serving all of Lafourche Parish & beyond',
    href: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Hours',
    value: 'Monday – Sunday: 7:00 AM – 7:00 PM',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/pool-hero.jpg"
          alt="Contact Acadia Pools"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(61,13,24,0.82)' }} />
        <div className="relative z-10 container-wide text-center text-white">
          <p className="section-label-light mb-3">We&apos;d Love to Hear From You</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold">Get in Touch</h1>
        </div>
      </section>

      {/* ── Main ────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif text-gray-900 mb-4">Let&apos;s Talk Pools</h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Whether you&apos;re ready to build, just exploring options, or need help with an existing pool — reach out. Matt answers the phone personally and there&apos;s never any pressure.
              </p>

              <ul className="space-y-6">
                {contactDetails.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: 'var(--color-maroon)' }}
                    >
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1 font-sans">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-gray-800 hover:text-maroon transition-colors font-medium font-sans"
                          style={{ color: 'inherit' }}
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-sans">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Facebook */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-3 font-sans">Follow our work on Facebook</p>
                <a
                  href="https://www.facebook.com/acadiapools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium font-sans transition-colors"
                  style={{ color: 'var(--color-maroon)' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Acadia Pools on Facebook
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div
                className="rounded-2xl p-8 md:p-10"
                style={{ backgroundColor: 'var(--color-cream)' }}
              >
                <h2 className="text-2xl font-serif text-gray-900 mb-2">Request a Free Quote</h2>
                <p className="text-gray-500 text-sm mb-7 font-sans">
                  Fill out the form below and Matt will get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map / area callout ───────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-wide text-center">
          <p className="section-label mb-3">Service Area</p>
          <h2 className="text-4xl font-serif text-gray-900 mb-5">Proudly Serving South Louisiana</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Based in Thibodaux, we serve all of Lafourche Parish and the surrounding South Louisiana area — including Houma, Raceland, Lockport, Cut Off, Golden Meadow, and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Thibodaux', 'Houma', 'Raceland', 'Lockport',
              'Cut Off', 'Golden Meadow', 'Larose', 'Mathews',
              'Gray', 'Schriever', 'Morgan City', 'Napoleonville',
            ].map((city) => (
              <span
                key={city}
                className="px-4 py-2 rounded-full text-sm font-medium font-sans border"
                style={{ borderColor: 'var(--color-maroon)', color: 'var(--color-maroon)' }}
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
