import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Outdoor Living Spaces in Thibodaux, LA',
  description:
    'Acadia Pools builds complete outdoor living spaces in Thibodaux, LA — custom patios, covered pergolas, outdoor kitchens, fire pits, and putting greens. Call (985) 413-2954.',
  keywords: [
    'outdoor living Thibodaux',
    'outdoor kitchen Thibodaux LA',
    'custom patio builder Thibodaux',
    'pergola Lafourche Parish',
    'fire pit installation Thibodaux',
    'backyard design Thibodaux Louisiana',
    'outdoor living space South Louisiana',
  ],
  openGraph: {
    title: 'Custom Outdoor Living Spaces in Thibodaux, LA | Acadia Pools',
    description:
      'Acadia Pools builds complete custom outdoor living spaces in Thibodaux, LA. Patios, pergolas, outdoor kitchens, fire pits, and more.',
    url: 'https://acadiapools.com/services/outdoor-living-thibodaux',
    images: [
      {
        url: '/images/pool-aerial-turf.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom outdoor living space in Thibodaux, LA by Acadia Pools',
      },
    ],
  },
  alternates: {
    canonical: 'https://acadiapools.com/services/outdoor-living-thibodaux',
  },
}

const faqs = [
  {
    q: 'Does Acadia Pools handle outdoor living even without a pool project?',
    a: 'We do most of our outdoor living work in conjunction with a pool build or renovation, since designing both together creates the best-looking result. However, we evaluate standalone outdoor living projects on a case-by-case basis. Call Matt and tell him what you have in mind.',
  },
  {
    q: 'What materials do you use for patios and decking in Thibodaux?',
    a: 'We work with concrete, pavers, travertine, and natural stone depending on your aesthetic goals and budget. For the South Louisiana climate, we recommend materials that handle heat, humidity, and the occasional freeze well — travertine and concrete pavers are consistently popular for that reason.',
  },
  {
    q: 'Can you build a covered outdoor kitchen that handles Louisiana weather?',
    a: 'Absolutely. Outdoor kitchens in South Louisiana need to handle intense sun, humidity, and heavy rain. We spec weather-resistant materials — stainless steel appliances, waterproof cabinetry, and properly pitched covered structures that keep everything protected.',
  },
  {
    q: 'How long does it take to build an outdoor living space?',
    a: 'When paired with a pool project, the outdoor living work is sequenced into the overall build timeline. Standalone projects vary — a concrete patio with a pergola might take 2–3 weeks, while a full outdoor kitchen and covered structure could take 4–6 weeks depending on materials and permit requirements.',
  },
  {
    q: 'Do outdoor living additions require permits in Lafourche Parish?',
    a: 'Covered structures like pergolas and shade structures typically require permits in Lafourche Parish. Outdoor kitchens with gas lines also require permits. We handle all permitting as part of the project — you don\'t need to navigate that process yourself.',
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
          name: 'Outdoor Living in Thibodaux, LA',
          item: 'https://acadiapools.com/services/outdoor-living-thibodaux',
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
      name: 'Custom Outdoor Living Spaces',
      description:
        'Design and construction of complete outdoor living spaces in Thibodaux, LA — custom patios, pergolas, outdoor kitchens, fire pits, putting greens, and more.',
      provider: { '@id': 'https://acadiapools.com/#business' },
      areaServed: { '@type': 'City', name: 'Thibodaux' },
      url: 'https://acadiapools.com/services/outdoor-living-thibodaux',
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

export default function OutdoorLivingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/pool-aerial-turf.jpg"
          alt="Custom outdoor living space in Thibodaux, LA"
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
              <li className="text-white" aria-current="page">Outdoor Living</li>
            </ol>
          </nav>
          <p className="section-label-light mb-3">Thibodaux, Louisiana</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
            Custom Outdoor Living Spaces in Thibodaux, LA
          </h1>
        </div>
      </section>

      {/* ── Intro ───────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label mb-3">Your Backyard, Reimagined</p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            The Pool Is the Centerpiece — the Outdoor Living Space Is Where Life Happens
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            In South Louisiana, the backyard isn&apos;t just outdoor space — it&apos;s where you host crawfish boils, watch LSU games, celebrate birthdays, and spend lazy Sunday afternoons. A great pool surrounded by a great outdoor living space becomes the place everyone wants to be.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Acadia Pools designs and builds complete outdoor environments that flow naturally from pool to patio to living space. When one company handles everything, the design is cohesive, the timeline is coordinated, and you end up with a backyard that looks intentional — because it was.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            From a simple paver patio to a full outdoor kitchen and covered entertainment area, we build spaces that are as functional as they are beautiful — and built to handle Thibodaux weather for decades to come.
          </p>
        </div>
      </section>

      {/* ── What We Build ───────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Build</p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Outdoor Living Services in Thibodaux
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Patios & Decking',
                body: 'We design and pour concrete patios, lay paver decks, and install travertine that surrounds and connects your pool to the rest of your outdoor space. Material selection, pattern, and edge details are all custom to your project.',
                items: ['Brushed & stamped concrete', 'Travertine pavers', 'Bullnose & coping edges', 'Seamless pool-to-patio transitions'],
              },
              {
                title: 'Covered Patios & Pergolas',
                body: 'Louisiana sun is no joke — and neither is Louisiana rain. A properly designed covered patio structure lets you enjoy your outdoor space year-round. We build open pergolas, shade structures, and fully covered patio roofs.',
                items: ['Wood & aluminum pergolas', 'Insulated patio covers', 'Ceiling fan rough-ins', 'Outdoor lighting integration'],
              },
              {
                title: 'Outdoor Kitchens & Grilling',
                body: 'An outdoor kitchen built right here in Thibodaux should handle Louisiana summers and serve serious food. We build weather-resistant outdoor kitchen setups ranging from a simple built-in grill station to full cooking and bar setups.',
                items: ['Built-in grills & smokers', 'Stainless steel cabinetry', 'Outdoor refrigerators & sinks', 'Gas line installation'],
              },
              {
                title: 'Fire Pits & Fire Bowls',
                body: 'A fire feature adds warmth, ambiance, and a gathering point that extends your outdoor season. We install gas fire pits, fire bowls, and fire tables in styles that complement your pool and patio design.',
                items: ['Gas & propane fire pits', 'Raised fire bowls', 'Fire table installs', 'Safe code-compliant gas lines'],
              },
              {
                title: 'Putting Greens',
                body: 'A backyard putting green is one of the most unique and popular upgrades we offer. We install high-quality synthetic putting surfaces that look great, play true, and require zero maintenance beyond an occasional brush.',
                items: ['Tournament-grade turf', 'Multiple cup layouts', 'Natural contour options', 'Custom sizing & shaping'],
              },
              {
                title: 'Landscape Lighting',
                body: 'The right lighting transforms an outdoor space after dark. We install low-voltage LED landscape lighting that highlights your pool, patio, and plantings — creating a backyard that looks just as good at 10pm as it does at noon.',
                items: ['LED path & uplighting', 'Pool perimeter lighting', 'Pergola & structure lighting', 'Smart timer integration'],
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-serif mb-3" style={{ color: 'var(--color-maroon)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{item.body}</p>
                <ul className="space-y-2">
                  {item.items.map((f) => (
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

      {/* ── Why Coordinate ──────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/images/pool-turf-geometric.jpg"
                alt="Complete backyard with pool and outdoor living space in Thibodaux"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="section-label mb-3">The Whole Picture</p>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                Why Coordinate Your Pool & Outdoor Living with One Team
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                When the same team handles your pool and your outdoor living space, the result looks planned — because it was. Coping transitions seamlessly into the patio deck. The pergola aligns with the pool axis. The outdoor kitchen is positioned where the sight lines make sense. These details don&apos;t happen by accident.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Coordinating everything with Acadia Pools also means one contract, one timeline, and one point of contact — Matt. No waiting on two different contractors to coordinate schedules or blaming each other when the seam doesn&apos;t line up.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                The backyard you always wanted is closer than you think. Let&apos;s build it.
              </p>
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
              Frequently Asked Questions About Outdoor Living in Thibodaux
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
            Let&apos;s Design Your Dream Backyard
          </h2>
          <p className="text-gray-300 text-xl mb-8 max-w-xl mx-auto">
            Tell Matt what you&apos;re imagining. He&apos;ll tell you what it takes to get there — honestly, and without the sales pitch.
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
