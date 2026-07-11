import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'The Acadia Pools accessibility statement: our commitment to WCAG 2.2 Level AA, the measures we take, known limitations, and how to report an accessibility issue.',
  alternates: {
    canonical: 'https://www.acadiapools.com/accessibility',
  },
}

export default function AccessibilityPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-3">Accessibility Statement</h1>
        <p className="text-sm text-gray-600 font-sans mb-10">Last updated: July 11, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed font-sans">

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-3">Our Commitment</h2>
            <p>
              Acadia Pools is committed to making <strong>acadiapools.com</strong> accessible to everyone,
              including people with disabilities. We want every visitor in Thibodaux, Lafourche Parish, and
              beyond to be able to browse our work, learn about our pools, and reach us with ease.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-3">Conformance Target</h2>
            <p>
              We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.2, Level AA</strong>,
              published by the World Wide Web Consortium (W3C). These guidelines explain how to make web content
              more accessible for people with a wide range of disabilities, including visual, auditory, physical,
              speech, cognitive, and neurological differences.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-3">Measures We Take</h2>
            <p className="mb-3">Steps we have taken to keep this site accessible include:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Text and background colors chosen to meet WCAG AA contrast ratios</li>
              <li>A &ldquo;Skip to main content&rdquo; link for keyboard and screen-reader users</li>
              <li>Clear, visible keyboard focus indicators on every interactive element</li>
              <li>Descriptive alternative text on meaningful images</li>
              <li>Labeled form fields on our contact and quote-request form</li>
              <li>Semantic headings, landmarks, and navigation structure</li>
              <li>Responsive layouts that work on phones, tablets, and desktops</li>
              <li>Support for the browser&rsquo;s reduced-motion preference</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-3">Known Limitations</h2>
            <p>
              Despite our efforts, some content may not yet be fully accessible. Accessibility is an ongoing
              process, and we continue to review and improve the site over time. If you encounter a barrier that
              is not listed here, please let us know so we can address it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-3">How to Report an Issue</h2>
            <p>
              If you have trouble accessing any part of this website, or you would like content in a different
              format, please contact us. We welcome your feedback and will do our best to respond and provide the
              information you need.
            </p>
            <address className="not-italic mt-3 space-y-1">
              <p><strong>Acadia Pools</strong></p>
              <p>Thibodaux, Louisiana</p>
              <p>
                Email: <a href="mailto:acadiapools@gmail.com" className="underline" style={{ color: 'var(--color-maroon)' }}>acadiapools@gmail.com</a>
              </p>
              <p>
                Phone: <a href="tel:+19854132954" className="underline" style={{ color: 'var(--color-maroon)' }}>(985) 413-2954</a>
              </p>
            </address>
            <p className="mt-3">
              Please include the web address (URL) of the page and a short description of the problem so we can
              help as quickly as possible. We aim to respond within a reasonable timeframe.
            </p>
          </div>

        </div>

        <div className="mt-14 pt-8 border-t border-gray-100">
          <Link href="/" className="btn-maroon">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
