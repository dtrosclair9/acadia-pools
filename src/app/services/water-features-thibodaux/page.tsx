import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Pool Water Features in Thibodaux, LA',
  description:
    'Acadia Pools designs and installs custom water features in Thibodaux, LA — rock waterfalls, spillover spas, sheer descents, fire & water features, and more. Call (985) 413-2954.',
  keywords: [
    'pool water features Thibodaux',
    'rock waterfall pool Thibodaux LA',
    'spillover spa Lafourche Parish',
    'sheer descent pool Louisiana',
    'fire and water feature Thibodaux',
    'custom water feature pool builder',
    'deck jets bubblers Thibodaux',
  ],
  openGraph: {
    title: 'Custom Pool Water Features in Thibodaux, LA | Acadia Pools',
    description:
      'Acadia Pools designs and installs stunning water features in Thibodaux, LA. Rock waterfalls, spillover spas, sheer descents, and more.',
    url: 'https://acadiapools.com/services/water-features-thibodaux',
    images: [
      {
        url: '/images/pool-water-wall.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom pool water wall feature in Thibodaux, LA by Acadia Pools',
      },
    ],
  },
  alternates: {
    canonical: 'https://acadiapools.com/services/water-features-thibodaux',
  },
}

const faqs = [
  {
    q: 'Can water features be added to an existing pool in Thibodaux?',
    a: 'Yes. Many of our water feature installations are retrofits to existing pools. Depending on the feature, we may need to tie into existing equipment or add a dedicated pump and plumbing run. Matt will assess your current setup and give you a clear picture of what\'s involved.',
  },
  {
    q: 'Do water features increase my energy or maintenance costs?',
    a: 'Water features do add some operating cost since they run off your pool\'s pump or a dedicated booster pump. However, modern variable-speed pumps and programmable timers keep costs minimal. Most homeowners run their features a few hours in the evening and the impact on energy bills is modest.',
  },
  {
    q: 'What is the most popular water feature in South Louisiana?',
    a: 'Rock waterfalls and spillover spas are consistently the most requested features we build. The sound and motion of water creates a natural, resort-style atmosphere that pairs perfectly with the outdoor lifestyle here in Thibodaux and Lafourche Parish.',
  },
  {
    q: 'Can you combine fire and water features?',
    a: 'Absolutely — fire and water combinations are one of the most dramatic effects we offer. Fire bowls or fire pits integrated with sheer descents or spillover walls create a striking visual that transforms an outdoor space at night. We design these to be safe, durable, and easy to control.',
  },
  {
    q: 'How long does it take to install a water feature?',
    a: 'A standalone water feature addition typically takes 1–3 weeks depending on complexity and whether new plumbing or equipment is required. Features built during new pool construction are incorporated into the overall project timeline.',
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
          name: 'Pool Water Features in Thibodaux, LA',
          item: 'https://acadiapools.com/services/water-features-thibodaux',
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
      name: 'Custom Pool Water Features',
      description:
        'Design and installation of custom pool water features in Thibodaux, LA — rock waterfalls, spillover spas, sheer descents, deck jets, fire and water combinations, and more.',
      provider: { '@id': 'https://acadiapools.com/#business' },
      areaServed: { '@type': 'City', name: 'Thibodaux' },
      url: 'https://acadiapools.com/services/water-features-thibodaux',
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

const features = [
  {
    title: 'Rock Waterfalls & Grottos',
    image: '/images/pool-bayou-view.jpg',
    imageAlt: 'Custom rock waterfall pool feature in Thibodaux',
    body: 'Nothing makes a pool feel more like a natural retreat than a custom rock waterfall. We design and build natural-looking formations using real and manufactured stone, sized and shaped to fit your pool and yard. Grottos can be added for a dramatic cave-like effect — perfect for kids and adults alike.',
    features: ['Natural and manufactured stone', 'Custom shapes and scales', 'Grotto and cave add-ons', 'LED lighting integration'],
  },
  {
    title: 'Spillover Spas & Raised Walls',
    image: '/images/pool-with-spa.jpg',
    imageAlt: 'Spillover spa next to pool in Thibodaux',
    body: 'A spillover spa elevated above the pool creates a beautiful sheet of water that cascades into the pool below. It\'s one of the most elegant and functional water features available — you get a therapeutic spa and a stunning visual in one package.',
    features: ['Raised spa construction', 'Infinity edge options', 'Custom spillway widths', 'Heated spa integration'],
  },
  {
    title: 'Sheer Descents & Water Sheets',
    image: '/images/pool-water-wall.jpg',
    imageAlt: 'Sheer descent water feature on pool wall in Thibodaux',
    body: 'Sheer descents produce a clean, glass-like curtain of water that falls from a raised wall into the pool. They\'re architectural, dramatic, and endlessly calming. Multiple units can be installed across a wall to create a full water curtain effect.',
    features: ['Single and multi-unit installations', 'LED illuminated options', 'Adjustable flow rates', 'Pairs with raised bond beams'],
  },
  {
    title: 'Deck Jets & Bubblers',
    image: '/images/pool-aerial-turf.jpg',
    imageAlt: 'Pool with deck jets in Thibodaux backyard',
    body: 'Deck jets shoot arching streams of water from the deck into the pool — beautiful at night when lit with LEDs. Bubblers installed on sun shelves or tanning ledges create a fun, interactive water play element that kids absolutely love.',
    features: ['Deck jet arcs up to 8 feet', 'LED color lighting', 'Sun shelf bubblers', 'Programmable controls'],
  },
  {
    title: 'Fire & Water Combinations',
    image: '/images/pool-travertine-waterfront.jpg',
    imageAlt: 'Fire and water feature combination at poolside in Thibodaux',
    body: 'The contrast of fire and water is one of the most striking effects in outdoor design. We integrate fire bowls, fire pits, and gas fire torches alongside water features to create an outdoor environment that is unforgettable — especially after dark.',
    features: ['Gas fire bowls', 'Fire and water walls', 'Fire pit integration', 'Safe, code-compliant gas lines'],
  },
]

export default function WaterFeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/pool-water-wall.jpg"
          alt="Custom pool water features in Thibodaux, LA"
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
              <li className="text-white" aria-current="page">Water Features</li>
            </ol>
          </nav>
          <p className="section-label-light mb-3">Thibodaux, Louisiana</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
            Custom Pool Water Features in Thibodaux, LA
          </h1>
        </div>
      </section>

      {/* ── Intro ───────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label mb-3">Beyond the Basic Pool</p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            The Difference a Water Feature Makes
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            There&apos;s a moment when a pool stops being a pool and becomes an experience. Water features are what create that moment. The sound of cascading water, the visual drama of a sheer descent illuminated at night, the therapeutic rush of a spillover spa — these elements turn a backyard into a true resort-style retreat.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Acadia Pools designs and installs water features that integrate seamlessly with your pool and the landscape around it. We don&apos;t bolt on generic components — we engineer features that look like they were always meant to be there. Whether you&apos;re building a new pool or upgrading an existing one, water features are one of the best investments you can make in your outdoor space.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Matt will walk you through every option and recommend what makes the most sense for your yard, your budget, and the way you use your pool.
          </p>
        </div>
      </section>

      {/* ── Feature Types ───────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Install</p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Water Features We Design & Build in Thibodaux
            </h2>
          </div>

          <div className="space-y-16">
            {features.map((feat, index) => (
              <div
                key={feat.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? '' : ''}`}
              >
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={feat.image}
                      alt={feat.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl md:text-3xl font-serif mb-4" style={{ color: 'var(--color-maroon)' }}>
                    {feat.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-5">{feat.body}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {feat.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600 font-sans">
                        <svg className="w-4 h-4 shrink-0" style={{ color: 'var(--color-maroon)' }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
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
              Frequently Asked Questions About Pool Water Features in Thibodaux
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
            Add Something Extraordinary to Your Pool
          </h2>
          <p className="text-gray-300 text-xl mb-8 max-w-xl mx-auto">
            Let&apos;s talk about what kind of water feature would look best in your backyard. Matt will give you an honest recommendation and a real number.
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
