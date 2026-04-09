import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Matt Glover, owner of Acadia Pools. Born and raised in Thibodaux, LA — a good ole boy living the Cajun lifestyle and building the finest custom gunite pools in South Louisiana.',
}

const values = [
  {
    title: 'Craftsmanship',
    desc: 'We build pools the right way — quality materials, attention to detail, and work we\'re genuinely proud of. Every project gets the same care whether it\'s a small renovation or a full custom build.',
  },
  {
    title: 'Honesty',
    desc: 'No games, no runaround. We tell you what it costs, what it takes, and what to expect. When there\'s a problem, we talk about it. When we say we\'ll be there, we show up.',
  },
  {
    title: 'Community',
    desc: 'This is home. We\'re building pools for our neighbors, our friends, our community. That matters to us — and it shows in every project we complete.',
  },
  {
    title: 'Good Times',
    desc: 'A pool should bring joy. We love seeing the look on a family\'s face when they jump in for the first time. Building memories — that\'s what keeps us going.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/pool-travertine-waterfront.jpg"
          alt="Acadia Pools — About Us"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(61,13,24,0.80)' }} />
        <div className="relative z-10 container-wide text-center text-white">
          <p className="section-label-light mb-3">The People Behind the Pools</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold">About Acadia Pools</h1>
        </div>
      </section>

      {/* ── Matt's Story ────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-3">The Man Behind the Magic</p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Meet Matt Glover</h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Born and raised right here in Thibodaux, Matt Glover is the kind of guy who never met a stranger. With over 10 years of experience in the Gunite pool construction industry, he brings both expertise and a personal touch to every project.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                A true good ole boy living the Cajun lifestyle — running crab traps on the weekends, cooking something delicious every day — Matt brings that same heart and authenticity to every single pool he builds.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                When you hire Acadia Pools, you&apos;re not just hiring a contractor. You&apos;re getting a neighbor who&apos;s going to treat your backyard like it&apos;s his own.
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl font-sans"
                  style={{ backgroundColor: 'var(--color-maroon)' }}
                >
                  MG
                </div>
                <div>
                  <p className="font-semibold text-gray-900 font-sans">Matt Glover</p>
                  <p className="text-gray-500 text-sm font-sans">Owner &amp; Founder, Acadia Pools</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '3/4' }}>
                <Image
                  src="/images/team-excavation.jpg"
                  alt="Matt Glover and the Acadia Pools team on-site"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Award overlay */}
              <div
                className="absolute -bottom-6 -left-6 rounded-2xl px-6 py-5 shadow-2xl text-white"
                style={{ backgroundColor: 'var(--color-maroon)' }}
              >
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div>
                    <p className="font-bold text-gold font-sans">People&apos;s Choice</p>
                    <p className="text-xs text-gray-300 font-sans">Award Winner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-serif mb-3" style={{ color: 'var(--color-maroon)' }}>
                  {v.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo ───────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Louisiana Built</p>
            <h2 className="text-4xl font-serif text-gray-900">Proud to Call Thibodaux Home</h2>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
              We&apos;re not a big-box company. We&apos;re your neighbors — and building beautiful pools for this community is something we take personally.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/pool-bayou-view.jpg', alt: 'Louisiana bayou pool' },
              { src: '/images/pool-aerial-turf.jpg', alt: 'Aerial pool view' },
              { src: '/images/matt-peoples-choice.jpg', alt: 'Matt with award' },
            ].map((img) => (
              <div key={img.src} className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-20 text-white text-center"
        style={{ backgroundColor: 'var(--color-maroon-deeper)' }}
      >
        <div className="container-wide">
          <h2 className="text-4xl md:text-5xl font-serif mb-5">Come Talk to Matt</h2>
          <p className="text-gray-300 text-xl mb-8 max-w-xl mx-auto">
            No fancy sales pitch. Just a straight conversation about your backyard, your vision, and what it takes to get there.
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
    </>
  )
}
