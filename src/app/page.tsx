import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acadia Pools | Custom Gunite Pool Builder in Thibodaux, LA',
  description:
    'Acadia Pools designs and builds custom gunite pools in Thibodaux, LA and across Lafourche Parish. Free, no-pressure quotes. Call (985) 413-2954 today.',
  alternates: {
    canonical: 'https://www.acadiapools.com',
  },
}

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7c3-3 6-3 9 0s6 3 9 0M3 12c3-3 6-3 9 0s6 3 9 0M3 17c3-3 6-3 9 0s6 3 9 0" />
      </svg>
    ),
    title: 'Custom Gunite Pools',
    desc: 'Every pool we build is custom and shaped to fit your yard. You can add a sun shelf, a spa or both.',
    href: '/services#gunite',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Pool Renovation',
    desc: 'Got an older pool that needs work? We resurface it, replace the tile or remodel it so it looks new again.',
    href: '/services#renovation',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
    title: 'Water Features',
    desc: 'We add waterfalls, spillover spas, bubblers and fountains, on a new pool or one that is already in the ground.',
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
    desc: 'We build patios and decks around pools, plus outdoor kitchens and pergolas.',
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
    desc: 'Artificial turf stays green all year with no mowing, and it works well between pavers and around the pool deck.',
    href: '/services#turf',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Pool Maintenance',
    desc: 'Our maintenance service keeps your water balanced and your pump, filter and other equipment running.',
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

// Timeline (8 to 14 weeks) and the $50,000 starting price match the confirmed copy on the gunite page.
// Financing options are still unconfirmed with the owner.
const faqs = [
  {
    q: 'How long does it take to build a custom gunite pool near Thibodaux?',
    a: 'Most custom gunite pools take 8 to 14 weeks. The work goes in stages: design and permits, digging, steel and plumbing, the gunite shell, tile and decking, then the interior finish. The design and the weather can move that, and Matt will give you a timeline for your pool when you meet.',
  },
  {
    q: 'Why choose a gunite pool over vinyl or fiberglass?',
    a: 'Gunite is concrete sprayed over a steel frame, so we can build it in almost any shape, size or depth, and it holds up in South Louisiana\'s climate. It also lets us build in spas, tanning ledges and water features. Fiberglass pools come in set shapes, and vinyl liners have to be replaced over time.',
  },
  {
    q: 'What areas around Thibodaux does Acadia Pools build in?',
    a: 'Acadia Pools is based in Thibodaux and builds across Lafourche and Terrebonne parishes. If you are not sure whether we cover your area, call and ask.',
  },
  {
    q: 'How much does a custom pool cost?',
    a: 'A custom gunite pool starts at $50,000. The size, finishes, decking and extras like a spa change the price, and Matt will give you a free quote after he sees your yard.',
  },
  {
    q: 'Does Acadia handle the whole project, from design to finish?',
    a: 'Yes. Acadia handles the design and the build, so you have one team to call. Matt is part of it from the first meeting until the pool is done.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero (Option A "Cream Split", 2026-11-17) ─────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-[48%_52%] lg:grid-cols-[44%_56%] md:min-h-[560px] lg:min-h-[600px]" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="flex items-center justify-center px-5 py-7 md:px-8 md:py-10">
          <div className="w-full max-w-[470px]">
            <h1 className="font-sans font-semibold text-[17px] leading-[23px] md:text-[19px] md:leading-[26px] lg:text-[22px] lg:leading-[29px]" style={{ color: 'var(--color-maroon)' }}>
              Custom Gunite Pool Builder in Thibodaux, LA
            </h1>
            <p className="font-serif font-bold mt-3 text-[43px] leading-[46px] md:text-[52px] md:leading-[55px] lg:text-[68px] lg:leading-[70px]" style={{ color: 'var(--color-maroon-deeper)' }}>
              Dream It.<br />We Build It.
            </p>
            <p className="font-sans mt-4 text-base leading-6 lg:text-lg lg:leading-7" style={{ color: 'var(--color-maroon-deeper)' }}>
              Owner Matt Glover builds custom gunite pools for families in Thibodaux and across Lafourche Parish.
            </p>
            <div className="mt-6 flex flex-col lg:flex-row gap-2.5 lg:gap-3">
              <Link href="/contact" className="btn-maroon text-[15px] text-center">
                Get a Free Quote
              </Link>
              <Link href="/gallery" className="btn-outline-maroon text-[15px] text-center">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-[225px] md:h-auto">
          <Image
            src="/images/gallery-20.jpg"
            alt="Pool with a sun shelf and two in-water loungers, built by Acadia Pools"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: '50% 55%' }}
            sizes="(max-width: 767px) 100vw, 56vw"
          />
        </div>
      </section>

      {/* ── Trust bar ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--color-maroon)' }} className="py-5">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center md:justify-between gap-6 text-white text-sm font-medium font-sans">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              People&apos;s Choice Award Winner
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Insured
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
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">What We Build</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Acadia Pools handles the whole job, from digging the pool to finishing the deck around it.
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
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Pools We&apos;ve Built</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Here are a few of the pools Acadia has built for families in South Louisiana.
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
              <p className="section-label mb-3">Meet the Owner</p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Matt Glover</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Matt Glover was born and raised right here in Thibodaux, and he has never met a stranger. Five minutes into talking pools with him, you will probably be laughing.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                He is a good ole boy who runs crab traps on the weekends and cooks something every day.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                When you hire Acadia Pools, you work with Matt directly, from the first visit until the pool is done.
              </p>
              <Link href="/about" className="btn-maroon">
                More About Matt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Questions About Building a Custom Pool in Thibodaux
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6">
                <h3 className="text-xl font-serif text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
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
          <p className="section-label-light mb-3">Free Quotes</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-5">Talk to Matt About Your Pool</h2>
          <p className="text-gray-300 text-xl mb-8 max-w-xl mx-auto">
            Quotes are free. Tell Matt what you have in mind, and he will come look at your yard.
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
            <h2 className="text-4xl font-serif text-gray-900">Latest Pools</h2>
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
