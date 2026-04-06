import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Acadia Pools — how we collect, use, and protect your information.',
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-3">Privacy Policy</h1>
        <p className="text-sm text-gray-400 font-sans mb-10">Last updated: April 6, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed font-sans">

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-3">1. Who We Are</h2>
            <p>
              This Privacy Policy applies to Acadia Pools ("we," "us," or "our"), a custom gunite pool builder based in Thibodaux, Louisiana. Our website address is <strong>acadiapools.com</strong>. You can reach us at <a href="mailto:acadiapools@gmail.com" className="underline" style={{ color: 'var(--color-maroon)' }}>acadiapools@gmail.com</a> or by phone at <a href="tel:+19854132954" className="underline" style={{ color: 'var(--color-maroon)' }}>(985) 413-2954</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="mb-3">We only collect information you voluntarily provide to us. This may include:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number</li>
              <li>Details about your project or inquiry submitted through our contact form</li>
            </ul>
            <p className="mt-3">
              We do not collect payment information, and we do not use cookies or tracking technologies beyond basic analytics that may be provided by our hosting platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information you provide solely to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Respond to your inquiry or quote request</li>
              <li>Schedule consultations or follow-up calls</li>
              <li>Communicate with you about your project</li>
            </ul>
            <p className="mt-3">
              We will never sell, rent, or trade your personal information to any third party. We will not add you to any marketing list without your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-3">4. How We Store Your Information</h2>
            <p>
              Form submissions are processed through a third-party form service (Formspree) and delivered directly to our email inbox. We do not maintain a separate database of customer information beyond normal email correspondence. We retain communications only as long as necessary to complete your project or respond to your inquiry.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-3">5. Third-Party Services</h2>
            <p className="mb-3">Our website may use the following third-party services, each with their own privacy practices:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>Formspree</strong> — processes contact form submissions</li>
              <li><strong>Vercel</strong> — hosts our website</li>
              <li><strong>Google Fonts</strong> — serves web fonts</li>
            </ul>
            <p className="mt-3">
              We are not responsible for the privacy practices of these third-party services. We encourage you to review their respective privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-3">6. Children&apos;s Privacy</h2>
            <p>
              Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted information through our site, please contact us and we will promptly delete it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-3">7. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal information you have submitted to us. To make such a request, contact us at <a href="mailto:acadiapools@gmail.com" className="underline" style={{ color: 'var(--color-maroon)' }}>acadiapools@gmail.com</a>. We will respond within a reasonable timeframe.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-3">8. External Links</h2>
            <p>
              Our website may contain links to external websites such as our Facebook page. We are not responsible for the content or privacy practices of those sites and encourage you to review their privacy policies independently.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Your continued use of the site after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-3">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please reach out:</p>
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
