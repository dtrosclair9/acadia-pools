import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acadia Pools | Custom Gunite Pool Builder in Thibodaux, LA',
  description:
    'Acadia Pools builds stunning custom gunite pools in Thibodaux, LA. Dream it. We build it. Call (985) 413-2954 for a free quote.',
}

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7c3-3 6-3 9 0s6 3 9 0M3 12c3-3 6-3 9 0s6 3 9 0M3 17c3-3 6-3 9 0s6 3 9 0" />
      </svg>
    ),
    title: 'Custom Gunite Pools',
    desc: 'Every pool we build is one-of-a-kind. From classic rectangles to freeform lagoons, we design and construct pools built to last a lifetime.',
    href: '/services#gunite',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Pool Renovation',
    desc: 'Breathe new life into an aging pool. We resurface, retile, remodel, and modernize — making your old pool feel brand new again.',
    href: '/services#renovation',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
    title: 'Water Features',
    desc: 'Waterfalls, spillover spas, bubblers, and fountains — we add the finishing touches that make your pool a true backyard paradise.',
    href: '/services#water-features',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Outdoor Living',
    desc: 'Patios, decks, outdoor kitchens, pergolas — we build the full outdoor experience so you never have to leave your backyard.',
    href: '/services#outdoor-living',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22V12m0 0C12 7 8 4 4 5m8 7c0-5 4-8 8-7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 22V16m0 0C8 12 5 10 2 11m6 5c0-4 3-6 6-5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 22V16m0 0c0-4 3-6 6-5" />
      </svg>
    ),
    title: 'Turf Installation',
    desc: 'Low-maintenance, always-green artificial turf that looks beautiful year-round and pairs perfectly with any pool design.',
    href: '/services#turf',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Pool Maintenance',
    desc: 'Keep your pool pristine all year. Our maintenance programs keep the chemistry balanced and your equipment running right.',
    href: '/services#maintenance',
  },
]

const galleryImages = [
  { src: '/images/pool-hero.jpg', alt: 'Elegant rectangular gunite pool with stone coping' },
  { src: '/images/pool-water-wall.jpg', alt: 'Pool with modern spillover water wall feature' },
  { src: '/images/pool-sun-shelf.jpg', alt: 'Custom pool with sun shelf and chaise lounges' },
  { src: '/images/pool-aerial-turf.jpg', alt: 'Aerial view of pool with artificial turf' },
  { src: '/images/outdoor-putting-green.jpg', alt: 'Outdoor living with putting green and pool' },
  { src: '/images/pool-travertine-waterfront.jpg', alt: 'Beautiful pool with travertine coping and water view' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/pool-hero.jpg"
          alt="Stunning custom gunite pool by Acadia Pools in Thibodaux LA"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay with maroon tint */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(61,13,24,0.65) 0%, rgba(0,0,0,0.38) 100%)' }}
        />

        <div className="relative z-10 container-wide text-center text-white">
          <p className="section-label-light mb-4">Thibodaux, Louisiana</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 drop-shadow-lg">
            Dream It.<br />
            <span style={{ color: 'var(--color-gold)' }}>We Build It.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Thibodaux&apos;s premier custom gunite pool builder — crafting stunning backyard retreats across Lafourche Parish and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base px-8 py-4">
              Get a Free Quote
            </Link>
            <Link href="/gallery" className="btn-outline-white text-base px-8 py-4">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Trust bar ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--color-maroon)' }} className="py-5">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center md:justify-between gap-6 text-white text-sm font-medium font-sans">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              People&apos;s Choice Award Winner
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Licensed &amp; Insured
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Born &amp; Raised in Thibodaux
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Open 7 Days a Week
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (985) 413-2954
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Everything Your Backyard Needs</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              From breaking ground to the final stone — we handle every detail so you can focus on what matters: enjoying your new oasis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-maroon-light"
                  style={{ backgroundColor: 'var(--color-maroon)', color: 'white' }}
                >
                  {s.icon}
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium font-sans" style={{ color: 'var(--color-maroon)' }}>
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery preview ──────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Built With Pride in South Louisiana</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Every pool tells a story. Take a look at some of the dream backyards we&apos;ve brought to life.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 md:col-span-1 row-span-2' : ''}`}
                style={{ aspectRatio: i === 0 ? '1/1.2' : '4/3' }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-maroon">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── About / Matt ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/matt-peoples-choice.jpg"
                  alt="Matt Glover, owner of Acadia Pools, with People's Choice Award"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Award badge */}
              <div
                className="absolute -bottom-5 -right-5 rounded-xl px-5 py-4 shadow-xl text-white text-center"
                style={{ backgroundColor: 'var(--color-maroon)' }}
              >
                <p className="text-gold font-bold text-lg font-sans">People&apos;s</p>
                <p className="text-gold font-bold text-lg font-sans">Choice</p>
                <p className="text-xs text-gray-300 font-sans">Award Winner</p>
              </div>
            </div>

            <div>
              <p className="section-label mb-3">Meet the Man Behind the Magic</p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Matt Glover</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Born and raised right here in Thibodaux, Matt Glover is the kind of guy who never met a stranger. His personality is contagious — you&apos;ll be belly laughing five minutes into the conversation.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                A true good ole boy living the Cajun lifestyle — running crab traps on the weekends, cooking something delicious every day — Matt brings that same heart and authenticity to every single pool he builds.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                When you hire Acadia Pools, you&apos;re not just hiring a contractor. You&apos;re getting a neighbor who&apos;s going to treat your backyard like it&apos;s his own.
              </p>
              <Link href="/about" className="btn-maroon">
                More About Matt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/pool-travertine-waterfront.jpg"
          alt="Beautiful custom pool background"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(61,13,24,0.85)' }} />
        <div className="relative z-10 container-wide text-center text-white">
          <p className="section-label-light mb-3">Ready to Dive In?</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-5">Your Dream Pool Starts with One Call</h2>
          <p className="text-gray-300 text-xl mb-8 max-w-xl mx-auto">
            Free consultations, no pressure. Let&apos;s sit down, talk about your vision, and build something you&apos;ll love for decades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base px-8 py-4">
              Request a Free Quote
            </Link>
            <a href="tel:+19854132954" className="btn-outline-white text-base px-8 py-4">
              Call (985) 413-2954
            </a>
          </div>
        </div>
      </section>

      {/* ── Second gallery row ───────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="section-label mb-3">More Recent Projects</p>
            <h2 className="text-4xl font-serif text-gray-900">Fresh Out of the Ground</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: '/images/pool-with-spa.jpg', alt: 'Pool with spa and wide deck' },
              { src: '/images/pool-turf-geometric.jpg', alt: 'Geometric turf and pool design' },
              { src: '/images/pool-bayou-view.jpg', alt: 'Family pool with Louisiana bayou backdrop' },
              { src: '/images/outdoor-putting-green.jpg', alt: 'Outdoor putting green with pool' },
            ].map((img) => (
              <div key={img.src} className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
