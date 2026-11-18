import Image from 'next/image'
import Link from 'next/link'

type Img = { src: string; alt: string }
export type PoolCity = {
  faqHeading: string
  closing: { heading: string; body: string }
  links: 'build-first' | 'gallery-first'
  slug: string
  city: string
  parish: string
  intro: string[]
  local: { heading: string; paragraphs: string[]; image: Img }
  faqs: { q: string; a: string }[]
  hero: Img
}

const BASE = 'https://www.acadiapools.com'

/** A "pool builder in [town]" page. Layout is shared; every paragraph and FAQ comes from the page itself. */
export default function PoolBuilderCityPage({ p }: { p: PoolCity }) {
  const url = `${BASE}/services/${p.slug}`
  const title = `Custom Pool Builder in ${p.city}, LA`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
          { '@type': 'ListItem', position: 3, name: title, item: url },
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${BASE}/#business`,
        name: 'Acadia Pools',
        url: BASE,
        telephone: '+19854132954',
        image: `${BASE}/images/pool-hero.jpg`,
        priceRange: '$$$',
        address: { '@type': 'PostalAddress', addressLocality: 'Thibodaux', addressRegion: 'LA', addressCountry: 'US' },
        areaServed: [{ '@type': 'City', name: 'Thibodaux' }, { '@type': 'City', name: p.city }, { '@type': 'AdministrativeArea', name: p.parish }],
      },
      {
        '@type': 'Service',
        name: `Custom Gunite Pool Construction in ${p.city}, LA`,
        serviceType: 'Swimming pool construction',
        provider: { '@id': `${BASE}/#business` },
        areaServed: [
          { '@type': 'City', name: p.city },
          { '@type': 'AdministrativeArea', name: p.parish },
        ],
        url,
      },
      {
        '@type': 'FAQPage',
        mainEntity: p.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <Image src={p.hero.src} alt={p.hero.alt} fill className="object-cover object-center" priority sizes="100vw" />
        <div className="absolute inset-0" style={{ background: 'rgba(61,13,24,0.80)' }} />
        <div className="relative z-10 container-wide text-center text-white">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center justify-center gap-2 text-sm font-sans" style={{ color: 'var(--color-gold-light)' }}>
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-white" aria-current="page">Pool Builder in {p.city}</li>
            </ol>
          </nav>
          <p className="section-label-light mb-3">{p.city}, Louisiana</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">{title}</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          {p.intro.map((t) => (
            <p key={t.slice(0, 24)} className="text-gray-600 text-lg leading-relaxed mb-5 last:mb-0">{t}</p>
          ))}
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">{p.local.heading}</h2>
              {p.local.paragraphs.map((t) => (
                <p key={t.slice(0, 24)} className="text-gray-600 text-lg leading-relaxed mb-5">{t}</p>
              ))}
              {p.links === 'build-first' ? (
                <p className="text-gray-600 text-lg leading-relaxed">
                  You can read{' '}<Link href="/services/gunite-pool-construction-thibodaux" className="underline" style={{ color: 'var(--color-maroon)' }}>how we build a gunite pool</Link>, from the first dig through plaster.
                </p>
              ) : (
                <p className="text-gray-600 text-lg leading-relaxed">
                  We{'’'}ve got{' '}<Link href="/gallery" className="underline" style={{ color: 'var(--color-maroon)' }}>finished pools you can look through</Link> in the gallery.
                </p>
              )}
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
              <Image src={p.local.image.src} alt={p.local.image.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">{p.faqHeading}</h2>
          </div>
          <div className="space-y-6">
            {p.faqs.map((f) => (
              <div key={f.q} className="border-b border-gray-100 pb-6">
                <h3 className="text-xl font-serif text-gray-900 mb-3">{f.q}</h3>
                <p className="text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-white text-center" style={{ backgroundColor: 'var(--color-maroon-deeper)' }}>
        <div className="container-wide">
          <h2 className="text-4xl md:text-5xl font-serif mb-5">{p.closing.heading}</h2>
          <p className="text-gray-300 text-xl mb-8 max-w-xl mx-auto">{p.closing.body}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base px-8 py-4">Get a Free Quote</Link>
            <a href="tel:+19854132954" className="btn-outline-white text-base px-8 py-4">Call (985) 413-2954</a>
          </div>
        </div>
      </section>
    </>
  )
}
