import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pool Renovation & Remodeling in Thibodaux, LA',
  description:
    'Transform your old or tired pool with Acadia Pools in Thibodaux, LA. Resurfacing, tile replacement, equipment upgrades, full redesigns, and more. Free quotes — call (985) 413-2954.',
  keywords: [
    'pool renovation Thibodaux',
    'pool remodeling Thibodaux LA',
    'pool resurfacing Lafourche Parish',
    'pool replastering Thibodaux',
    'pool coping replacement Louisiana',
    'pool equipment upgrade Thibodaux',
    'swimming pool renovation South Louisiana',
  ],
  openGraph: {
    title: 'Pool Renovation & Remodeling in Thibodaux, LA | Acadia Pools',
    description:
      'Transform your tired pool with Acadia Pools in Thibodaux, LA. Resurfacing, tile, equipment upgrades, full redesigns. Free quotes.',
    url: 'https://acadiapools.com/services/pool-renovation-thibodaux',
    images: [
      {
        url: '/images/pool-sun-shelf.jpg',
        width: 1200,
        height: 630,
        alt: 'Renovated pool with sun shelf in Thibodaux, LA by Acadia Pools',
      },
    ],
  },
  alternates: {
    canonical: 'https://acadiapools.com/services/pool-renovation-thibodaux',
  },
}

const faqs = [
  {
    q: 'How long does a pool renovation take in Thibodaux?',
    a: 'It depends on the scope of work. A plaster resurfacing can be completed in 1–2 weeks. A full renovation involving coping replacement, tile, and equipment upgrades typically takes 3–6 weeks. A complete redesign may take 8–12 weeks. Matt will give you a realistic timeline during your consultation.',
  },
  {
    q: 'How often does a gunite pool need to be resurfaced?',
    a: 'Most gunite pool interiors need resurfacing every 10–15 years depending on water chemistry maintenance, usage, and the type of finish. Pebble and aggregate finishes tend to last longer than standard white plaster. If you\'re seeing rough surfaces, staining that won\'t clean, or visible cracks, it\'s likely time.',
  },
  {
    q: 'Can you add features like a sun shelf or spa during a renovation?',
    a: 'Yes — renovations are a great opportunity to add features you didn\'t have before. We can add sun shelves, tanning ledges, spa sections, water features, and new lighting as part of a renovation project. Some additions require partial demolition and reconstruction, which we handle in-house.',
  },
  {
    q: 'How much does a pool renovation cost in Thibodaux, LA?',
    a: 'Costs vary widely based on scope. A basic replastering might run $8,000–$15,000. A full renovation with new coping, tile, equipment, and a feature addition could be $25,000–$60,000+. We provide itemized, transparent quotes so you know exactly what you\'re paying for.',
  },
  {
    q: 'Can you renovate any pool, or only gunite?',
    a: 'Acadia Pools specializes in gunite pool renovation. We can renovate most existing concrete and gunite pools. For fiberglass or vinyl liner pools, we evaluate on a case-by-case basis — sometimes the best option is converting to a full gunite shell.',
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
          name: 'Pool Renovation in Thibodaux, LA',
          item: 'https://acadiapools.com/services/pool-renovation-thibodaux',
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
      name: 'Pool Renovation & Remodeling',
      description:
        'Complete pool renovation and remodeling services in Thibodaux, LA. Resurfacing, tile replacement, coping, equipment upgrades, and full pool redesigns.',
      provider: { '@id': 'https://acadiapools.com/#business' },
      areaServed: { '@type': 'City', name: 'Thibodaux' },
      url: 'https://acadiapools.com/services/pool-renovation-thibodaux',
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

export default function PoolRenovationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/pool-sun-shelf.jpg"
          alt="Pool renovation and remodeling in Thibodaux, LA by Acadia Pools"
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
              <li className="text-white" aria-current="page">Pool Renovation</li>
            </ol>
          </nav>
          <p className="section-label-light mb-3">Thibodaux, Louisiana</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
            Pool Renovation & Remodeling in Thibodaux, LA
          </h1>
        </div>
      </section>

      {/* ── Intro ───────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label mb-3">Give Your Pool a Second Life</p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            Is Your Pool Ready for a Makeover?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            A pool that&apos;s 10 or 15 years old doesn&apos;t have to look or feel like it. Rough plaster that scratches your feet, faded tile, cracked coping, noisy pumps running on outdated equipment — these aren&apos;t signs you need a new pool. They&apos;re signs you need Acadia Pools.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            We handle pool renovations of every scale right here in Thibodaux and across Lafourche Parish. From a targeted resurfacing to a full tear-down-and-redesign, Matt Glover brings the same hands-on approach to renovation work that he does to new construction. You&apos;ll be surprised what&apos;s possible — and how different your backyard can feel when we&apos;re done.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Many renovation clients tell us they wish they&apos;d done it sooner. There&apos;s no reason to spend another Louisiana summer avoiding your own pool.
          </p>
        </div>
      </section>

      {/* ── Services Grid ───────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Pool Renovation Services in Thibodaux
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Resurfacing & Replastering',
                body: 'The most common renovation we perform. We chip out the old interior finish, prep the shell, and apply your choice of new plaster, pebble aggregate, or quartz finish. Your pool looks — and feels — brand new.',
                features: ['White plaster', 'Pebble Tec & aggregate', 'Quartz finishes', 'Color tinting options'],
              },
              {
                title: 'Tile & Coping Replacement',
                body: 'Waterline tile and coping set the tone for your entire pool area. We remove old, dated materials and install beautiful new travertine, concrete, or paver coping and updated waterline tile that completely changes the look.',
                features: ['Travertine coping', 'Concrete & paver coping', 'Waterline tile', 'Step & bench tile'],
              },
              {
                title: 'Equipment Upgrades',
                body: 'Old equipment costs you money every month in electricity and maintenance. We upgrade your pump, filter, heater, and control system to modern, energy-efficient equipment — often with smart automation included.',
                features: ['Variable-speed pumps', 'Cartridge & sand filters', 'Heat pumps & gas heaters', 'Smart automation systems'],
              },
              {
                title: 'Pool Expansion & Redesign',
                body: 'Want to add a sun shelf, expand the swimming area, or reconfigure the entire layout? We can rebuild portions of your pool or start fresh — whichever gets you to the backyard you actually want.',
                features: ['Sun shelf additions', 'Spa additions', 'Pool enlargements', 'Full pool redesigns'],
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-serif mb-3" style={{ color: 'var(--color-maroon)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{item.body}</p>
                <ul className="space-y-2">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600 font-sans">
                      <svg className="w-4 h-4 shrink-0" style={{ color: 'var(--color-maroon)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-3">Our Approach</p>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                The Acadia Pools Renovation Process
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Every renovation starts with an honest assessment. Matt will walk your pool with you, identify what&apos;s actually causing the problems, and give you a straight recommendation — not just a list of everything he can upsell you on. From there, we scope the project, pull any required permits, and get to work.
              </p>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'On-Site Assessment', body: 'Matt evaluates your pool\'s current condition and discusses your goals.' },
                  { step: '2', title: 'Detailed Proposal', body: 'You receive a written, itemized quote with no hidden costs or vague line items.' },
                  { step: '3', title: 'Demolition & Prep', body: 'Old materials are carefully removed and the pool is prepped for new work.' },
                  { step: '4', title: 'Renovation & Install', body: 'New finishes, tile, coping, or features are installed by our experienced crew.' },
                  { step: '5', title: 'Final Inspection & Fill', body: 'Matt walks the finished renovation with you and supervises the startup process.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5 items-start">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold font-sans text-sm shrink-0"
                      style={{ backgroundColor: 'var(--color-maroon)' }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/images/pool-travertine-waterfront.jpg"
                alt="Renovated pool with travertine coping in Thibodaux, LA"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Frequently Asked Questions About Pool Renovation in Thibodaux
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-6">
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
            Let&apos;s Bring Your Pool Back to Life
          </h2>
          <p className="text-gray-300 text-xl mb-8 max-w-xl mx-auto">
            Don&apos;t spend another summer with a pool you&apos;re embarrassed by. Give Matt a call and let&apos;s talk about what&apos;s possible.
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
