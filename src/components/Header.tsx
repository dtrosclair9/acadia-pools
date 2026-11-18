'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

/** Cream header with the full vector logo (Option A "Cream Split", 2026-11-17). Full nav from lg; phone + Menu below. */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      style={{ backgroundColor: 'var(--color-cream)' }}
      className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between gap-4 h-[84px] md:h-[94px] lg:h-[116px]">
          <Link href="/" className="shrink-0" aria-label="Acadia Pools home">
            <Image
              src="/images/brand/acadia-pools-logo-maroon.svg"
              alt="Acadia Pools"
              width={132}
              height={96}
              unoptimized
              priority
              className="h-[60px] md:h-[72px] lg:h-24 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className={`text-[15px] font-medium transition-colors duration-200 ${
                  pathname === link.href ? 'text-maroon underline underline-offset-8 decoration-2' : 'hover:text-maroon'
                }`}
                style={{ color: pathname === link.href ? 'var(--color-maroon)' : 'var(--color-maroon-deeper)' }}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+19854132954" className="btn-maroon text-[15px] !py-3 !px-5 inline-flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (985) 413-2954
            </a>
          </nav>

          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:+19854132954"
              className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold"
              style={{ color: 'var(--color-maroon)' }}
              aria-label="Call Acadia Pools at (985) 413-2954"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>(985) 413-2954</span>
            </a>
            <button
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded border"
              style={{ color: 'var(--color-maroon)', borderColor: 'var(--color-maroon)' }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="mobile-nav" className="lg:hidden border-t pb-4 pt-3" style={{ borderColor: 'rgba(123,28,42,0.15)' }} aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className="px-2 py-3 text-base font-medium rounded"
                  style={{ color: pathname === link.href ? 'var(--color-maroon)' : 'var(--color-maroon-deeper)' }}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-maroon text-sm text-center mt-3">
                Get a Free Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
