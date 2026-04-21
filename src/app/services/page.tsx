import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Acadia Pools offers custom gunite pool construction, pool renovation, water features, outdoor living, turf installation, and pool maintenance in Thibodaux, LA.',
}

const services = [
  {
    id: 'gunite',
    title: 'Custom Gunite Pools',
    learnMoreHref: '/services/gunite-pool-construction-thibodaux',
    image: '/images/pool-hero.jpg',
    imageAlt: 'Custom gunite pool with stone coping',
    description: [
      'Gunite is the gold standard in pool construction — and it\'s all we do. Unlike vinyl liner or fiberglass pools, a gunite pool is built on-site from a steel rebar framework and sprayed concrete shell, giving you complete design freedom and a pool that will last for generations.',
      'Every project starts with a one-on-one design consultation with Matt. We\'ll talk through your vision, your budget, your yard, and your lifestyle — then bring it all together into a plan that\'s uniquely yours. No two Acadia pools are the same.',
      'From classic rectangular pools to freeform lagoon designs with rock features and beach entries, we have the skill and experience to build exactly what you\'re dreaming of.',
    ],
    features: [
      'Fully custom shapes and sizes',
      'Steel rebar framework construction',
      'Full-depth gunite shell',
      'Variety of plaster and pebble finishes',
      'Sun shelves, tanning ledges, beach entries',
      'Integrated spa / hot tub options',
      'LED lighting packages',
      'Automation-ready equipment',
    ],
  },
  {
    id: 'renovation',
    title: 'Pool Renovation & Remodeling',
    learnMoreHref: '/services/pool-renovation-thibodaux',
    image: '/images/pool-sun-shelf.jpg',
    imageAlt: 'Renovated pool with modern sun shelf',
    description: [
      'Got an old pool that\'s looking tired? We can transform it. Whether you need a simple resurfacing or a complete tear-down-and-redesign, Acadia Pools handles pool renovations of every scale.',
      'Cracked plaster, dated tile, outdated equipment, or a shape you\'ve never loved — we fix it all. Many of our renovation clients are blown away by how a few targeted upgrades completely change the feel of their backyard.',
    ],
    features: [
      'Plaster and pebble resurfacing',
      'Tile replacement and waterline tile',
      'Coping replacement (travertine, concrete, pavers)',
      'Equipment upgrades (pumps, filters, heaters)',
      'LED lighting retrofit',
      'Sun shelf and spa additions',
      'Deck removal and replacement',
      'Full pool redesign and expansion',
    ],
  },
  {
    id: 'water-features',
    title: 'Water Features',
    learnMoreHref: '/services/water-features-thibodaux',
    image: '/images/pool-water-wall.jpg',
    imageAlt: 'Pool with elegant spillover water wall',
    description: [
      'Water features take a pool from nice to extraordinary. The sound of flowing water, the visual drama of a waterfall — these elements transform your backyard into a true resort-style retreat.',
      'We design and install water features that integrate seamlessly with your pool, creating a cohesive look that\'s as beautiful still as it is when the water is moving.',
    ],
    features: [
      'Spillover spas and raised walls',
      'Natural rock waterfalls',
      'Sheer descent water sheets',
      'Deck jets and bubblers',
      'Rain curtains',
      'Grottos and caves',
      'Fire and water combinations',
      'Custom fountain designs',
    ],
  },
  {
    id: 'outdoor-living',
    title: 'Outdoor Living',
    learnMoreHref: '/services/outdoor-living-thibodaux',
    image: '/images/outdoor-putting-green.jpg',
    imageAlt: 'Outdoor living space with putting green and pool',
    description: [
      'The pool is the centerpiece — but the outdoor living space is where the memories are made. We design and build complete outdoor environments that extend your home beyond four walls.',
      'From covered patios and outdoor kitchens to fire pits and pergolas, Acadia Pools creates spaces that are as functional as they are beautiful. We coordinate everything so the design flows naturally from pool to patio.',
    ],
    features: [
      'Custom concrete and paver patios',
      'Covered patio structures and pergolas',
      'Outdoor kitchens and grilling stations',
      'Fire pits and fire bowls',
      'Putting greens',
      'Privacy fencing and screening',
      'Landscape lighting',
      'Retaining walls',
    ],
  },
  {
    id: 'turf',
    title: 'Turf Installation',
    image: '/images/pool-turf-geometric.jpg',
    imageAlt: 'Pool surrounded by lush artificial turf',
    description: [
      'Artificial turf is one of the most popular upgrades we offer — and once you see it next to a finished pool, you\'ll understand why. Always green, never muddy, and zero maintenance. It\'s the perfect complement to any pool project.',
      'We install premium artificial turf that looks and feels realistic. South Louisiana summers are no joke, and our turf is designed to handle the heat while staying comfortable underfoot.',
    ],
    features: [
      'Premium synthetic grass installation',
      'Drainage system integration',
      'Seamless pool deck transitions',
      'Pet-friendly and kid-friendly options',
      'UV-resistant, fade-proof fibers',
      'Putting green turf available',
      'Low maintenance — no mowing, no watering',
      'Pairs beautifully with pavers and concrete',
    ],
  },
  {
    id: 'maintenance',
    title: 'Pool Maintenance',
    image: '/images/pool-with-spa.jpg',
    imageAlt: 'Beautiful maintained pool with spa',
    description: [
      'A great pool is only great if it\'s clean, balanced, and working right. Our maintenance services keep your pool in peak condition all year long — so all you have to do is jump in.',
      'We offer weekly and bi-weekly service plans, as well as one-time cleanings, equipment inspections, and seasonal openings and closings. When something isn\'t right, we fix it fast.',
    ],
    features: [
      'Weekly and bi-weekly service plans',
      'Water chemistry testing and balancing',
      'Skimming, brushing, and vacuuming',
      'Filter cleaning and backwashing',
      'Equipment inspection and repair',
      'Algae treatment and shock treatments',
      'Seasonal opening and closing',
      'Green-to-clean recovery service',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero ───────────────────────────────────────────── */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/pool-sun-shelf.jpg"
          alt="Acadia Pools services"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(61,13,24,0.80)' }} />
        <div className="relative z-10 container-wide text-center text-white">
          <p className="section-label-light mb-3">What We Offer</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold">Our Services</h1>
        </div>
      </section>

      {/* ── Intro ───────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="container-wide max-w-3xl text-center">
          <p className="text-gray-600 text-xl leading-relaxed">
            At Acadia Pools, we handle everything from the first shovel in the ground to the last piece of coping. Whether you&apos;re building new, renovating old, or adding the finishing touches — we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* ── Service Sections ────────────────────────────────────── */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : ''}`}
          style={index % 2 !== 0 ? { backgroundColor: 'var(--color-cream)' } : undefined}
        >
          <div className="container-wide">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <h2 className="text-4xl font-serif text-gray-900 mb-6">{service.title}</h2>
                {service.description.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4 text-lg">
                    {para}
                  </p>
                ))}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-gray-600 font-sans">
                      <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--color-maroon)' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                {service.learnMoreHref && (
                  <div className="mt-8">
                    <Link
                      href={service.learnMoreHref}
                      className="btn-maroon text-sm px-6 py-3"
                    >
                      Learn More →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/pool-aerial-turf.jpg"
          alt="Aerial view of completed pool project"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(61,13,24,0.85)' }} />
        <div className="relative z-10 container-wide text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif mb-5">Let&apos;s Build Something Beautiful</h2>
          <p className="text-gray-300 text-xl mb-8 max-w-xl mx-auto">
            Ready to get started? Give Matt a call or fill out our quick quote form — no pressure, just good conversation.
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
