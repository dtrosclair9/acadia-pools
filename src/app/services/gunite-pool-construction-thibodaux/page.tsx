import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Gunite Pool Construction in Thibodaux, LA',
  description:
    'Acadia Pools builds fully custom gunite pools in Thibodaux, LA and Lafourche Parish. Over 10 years of experience. Steel rebar construction, any shape or size. Free quotes — call (985) 413-2954.',
  keywords: [
    'gunite pool construction Thibodaux',
    'custom pool builder Thibodaux LA',
    'inground pool contractor Thibodaux',
    'gunite pool Lafourche Parish',
    'new pool construction South Louisiana',
    'swimming pool builder Thibodaux',
    'custom gunite pool Louisiana',
  ],
  openGraph: {
    title: 'Custom Gunite Pool Construction in Thibodaux, LA | Acadia Pools',
    description:
      'Acadia Pools builds fully custom gunite pools in Thibodaux, LA. Over 10 years of experience. Free quotes available.',
    url: 'https://acadiapools.com/services/gunite-pool-construction-thibodaux',
    images: [
      {
        url: '/images/pool-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom gunite pool construction in Thibodaux, LA by Acadia Pools',
      },
    ],
  },
  alternates: {
    canonical: 'https://acadiapools.com/services/gunite-pool-construction-thibodaux',
  },
}

const faqs = [
  {
    q: 'How long does it take to build a gunite pool in Thibodaux?',
    a: 'Most custom gunite pool projects in the Thibodaux area take between 8 and 14 weeks from excavation to final water fill, depending on the complexity of the design, weather, and permit timelines. Matt will walk you through a realistic project schedule during your free consultation.',
  },
  {
    q: 'How much does a custom gunite pool cost in Thibodaux, LA?',
    a: 'Every pool is custom-built, so pricing varies based on size, shape, features, and finish selections. Most residential gunite pools in South Louisiana start in the $60,000–$80,000 range and go up from there depending on add-ons like spas, water features, and outdoor living. We offer free, no-pressure quotes.',
  },
  {
    q: 'Why is gunite better than fiberglass or vinyl liner?',
    a: 'Gunite pools are built on-site from a steel rebar framework and sprayed concrete shell, giving you complete design freedom — any shape, any depth, any feature. Fiberglass pools are limited to pre-made molds, and vinyl liners need periodic replacement. A gunite pool, when properly maintained, lasts for generations.',
  },
  {
    q: 'Do you build pools outside of Thibodaux?',
    a: 'Yes. While Thibodaux is our home base, Acadia Pools serves all of Lafourche Parish and the surrounding South Louisiana area including Houma, Raceland, Lockport, and beyond. Call us to discuss your location.',
  },
  {
    q: 'Do I need a permit to build a pool in Thibodaux?',
    a: 'Yes, permits are required for pool construction in Louisiana. Acadia Pools handles the permit process on your behalf — we know exactly what Lafourche Parish requires and take care of it so you don\'t have to.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://acadiapools.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://acadiapools.com/services' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Gunite Pool Construction in Thibodaux, LA',
          item: 'https://acadiapools.com/services/gunite-pool-construction-thibodaux',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://acadiapools.com/#business',
      name: 'Acadia Pools',
      url: 'https://acadiapools.com',
      telephone: '+19854132954',
      image: 'https://acadiapools.com/images/pool-hero.jpg',
      priceRange: '$$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Thibodaux',
        addressRegion: 'LA',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Thibodaux' },
        { '@type': 'County', name: 'Lafourche Parish' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Custom Gunite Pool Construction',
      description:
        'Fully custom inground gunite pool design and construction in Thibodaux, LA and Lafourche Parish. Any shape, size, or feature — built to last a lifetime.',
      provider: { '@id': 'https://acadiapools.com/#business' },
      areaServed: { '@type': 'City', name: 'Thibodaux' },
      url: 'https://acadiapools.com/services/gunite-pool-construction-thibodaux',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function GunitePoolConstructionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/pool-hero.jpg"
          alt="Custom gunite pool construction in Thibodaux, LA"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(61,13,24,0.80)' }} />
        <div className="relative z-10 container-wide text-center text-white">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center justify-center gap-2 text-sm font-sans" style={{ color: 'var(--color-gold-light)' }}>
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-white" aria-current="page">Gunite Pool Construction</li>
            </ol>
          </nav>
          <p className="section-label-light mb-3">Thibodaux, Louisiana</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
            Custom Gunite Pool Construction in Thibodaux, LA
          </h1>
        </div>
      </section>

      {/* ── Intro ───────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label mb-3">The Gold Standard in Pool Building</p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            What Makes Gunite the Right Choice for Your Thibodaux Pool?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            When you build a gunite pool, you&apos;re not choosing from a catalog. You&apos;re building something that doesn&apos;t exist yet — sized and shaped exactly for your yard, your family, and your vision. Unlike fiberglass shells or vinyl liners, a gunite pool is constructed on-site from a steel rebar skeleton and a sprayed concrete shell, giving it the structural integrity to last for decades in South Louisiana&apos;s soil and climate.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Acadia Pools has been building custom gunite pools in Thibodaux and across Lafourche Parish for over 10 years. Owner Matt Glover manages every project personally — from the first design consultation to the final water fill. You won&apos;t deal with a salesman who disappears after the contract is signed. You get Matt.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you want a sleek geometric pool with a sun shelf, a freeform lagoon with a rock waterfall, or something in between — if you can dream it, we can build it.
          </p>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Our Gunite Pool Building Process in Thibodaux
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
              Every Acadia pool goes through the same proven process — no shortcuts, no subs we don&apos;t trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Design Consultation',
                body: 'Matt meets with you at your property to understand your yard, your lifestyle, and your budget. You&apos;ll leave with a clear design direction and realistic numbers — no vague estimates.',
              },
              {
                step: '02',
                title: 'Permits & Layout',
                body: 'We handle all permit applications with Lafourche Parish on your behalf. Once approved, we stake out the pool footprint so you can visualize exactly where it will be.',
              },
              {
                step: '03',
                title: 'Excavation',
                body: 'Our crew excavates the pool footprint to the engineered depth. We work efficiently and minimize disruption to the rest of your yard.',
              },
              {
                step: '04',
                title: 'Steel Framework',
                body: 'A grid of steel rebar is tied and shaped to match your pool design. This is the backbone of your gunite pool — it&apos;s what gives it structural strength for decades.',
              },
              {
                step: '05',
                title: 'Gunite Shell',
                body: 'High-pressure gunite is applied over the steel framework, forming the rigid concrete shell of your pool. This layer is what separates gunite from every other pool type.',
              },
              {
                step: '06',
                title: 'Tile, Coping & Plaster',
                body: 'You select your waterline tile, coping material, and interior finish. This is where your pool gets its final look — pebble, plaster, quartz, or aggregate.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-8 shadow-sm">
                <p className="text-5xl font-serif font-bold mb-4" style={{ color: 'var(--color-maroon)' }}>
                  {item.step}
                </p>
                <h3 className="text-xl font-serif text-gray-900 mb-3">{item.title}</h3>
                <p
                  className="text-gray-600 leading-relaxed text-sm"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/images/pool-sun-shelf.jpg"
                alt="Custom gunite pool with sun shelf and spa in Thibodaux"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="section-label mb-3">Endless Options</p>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                Custom Pool Features & Add-Ons
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                One of the biggest advantages of building a gunite pool is that you&apos;re not limited to what&apos;s on a showroom floor. Every feature is designed and built to fit your specific pool and yard.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Sun shelves & tanning ledges',
                  'Integrated spas & hot tubs',
                  'Beach entries',
                  'Custom depths and shapes',
                  'LED color lighting packages',
                  'Automation-ready equipment',
                  'Pebble, plaster & quartz finishes',
                  'Travertine & paver coping',
                  'Rock waterfalls & grottos',
                  'Fire features',
                  'Deck jets & bubblers',
                  'Smart pool controls',
                ].map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-gray-600 font-sans text-sm">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--color-maroon)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Acadia ──────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Why Thibodaux Chooses Us</p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Why Choose Acadia Pools for Your Gunite Pool?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Expertise',
                body: 'We know South Louisiana — the soil conditions, the climate, the parish permitting process. That local knowledge shows up in every pool we build.',
              },
              {
                title: 'Owner-Operated',
                body: 'Matt Glover is on every job. Not a project manager. Not a crew foreman you\'ve never met. Matt — the guy you shook hands with at your kitchen table.',
              },
              {
                title: 'Built to Last',
                body: 'Our gunite pools are engineered to handle Louisiana\'s high water table and shifting soils. We don\'t cut corners on rebar density or shell thickness.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 shadow-sm text-center">
                <h3 className="text-xl font-serif mb-3" style={{ color: 'var(--color-maroon)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Frequently Asked Questions About Gunite Pool Construction in Thibodaux
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

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-20 text-white text-center"
        style={{ backgroundColor: 'var(--color-maroon-deeper)' }}
      >
        <div className="container-wide">
          <h2 className="text-4xl md:text-5xl font-serif mb-5">
            Ready to Build Your Dream Pool in Thibodaux?
          </h2>
          <p className="text-gray-300 text-xl mb-8 max-w-xl mx-auto">
            Call Matt directly or fill out our quick form. No pressure — just a straight conversation about what you want to build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base px-8 py-4">
              Get a Free Quote
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
