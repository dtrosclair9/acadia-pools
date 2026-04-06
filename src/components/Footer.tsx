import Link from 'next/link'
import Image from 'next/image'

const serviceLinks = [
  { href: '/services#gunite', label: 'Custom Gunite Pools' },
  { href: '/services#renovation', label: 'Pool Renovation' },
  { href: '/services#water-features', label: 'Water Features' },
  { href: '/services#outdoor-living', label: 'Outdoor Living' },
  { href: '/services#turf', label: 'Turf Installation' },
  { href: '/services#maintenance', label: 'Pool Maintenance' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-maroon-deeper)' }} className="text-white" role="contentinfo">
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Acadia Pools"
              width={150}
              height={70}
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Custom gunite pool builder serving Thibodaux, LA and the surrounding Lafourche Parish area.
            </p>
            <a
              href="https://www.facebook.com/acadiapools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-gray-400 hover:text-gold transition-colors text-sm"
              aria-label="Acadia Pools on Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold text-xs uppercase tracking-widest mb-5 font-sans">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/gallery', label: 'Photo Gallery' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold font-semibold text-xs uppercase tracking-widest mb-5 font-sans">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold text-xs uppercase tracking-widest mb-5 font-sans">Contact Us</h3>
            <address className="not-italic space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Thibodaux, LA<br />Serving Lafourche Parish &amp; beyond</span>
              </div>
              <div>
                <a href="tel:+19854132954" className="flex items-center gap-2.5 hover:text-gold transition-colors">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (985) 413-2954
                </a>
              </div>
              <div>
                <a href="mailto:acadiapools@gmail.com" className="flex items-center gap-2.5 hover:text-gold transition-colors break-all">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  acadiapools@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon – Sun: 7:00 AM – 7:00 PM</span>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Acadia Pools. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Thibodaux, LA | Lafourche Parish</span>
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
