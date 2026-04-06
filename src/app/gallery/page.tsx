import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse Acadia Pools\' portfolio of custom gunite pools, outdoor living spaces, water features, and turf installations in Thibodaux, LA and surrounding areas.',
}

const allPhotos = [
  { src: '/images/pool-hero.jpg', alt: 'Elegant rectangular gunite pool with stone coping and landscaping', category: 'Pools' },
  { src: '/images/pool-water-wall.jpg', alt: 'Modern pool with spillover water wall feature', category: 'Water Features' },
  { src: '/images/pool-sun-shelf.jpg', alt: 'Custom gunite pool with sun shelf and chaise lounges', category: 'Pools' },
  { src: '/images/pool-aerial-turf.jpg', alt: 'Aerial view of pool with artificial turf', category: 'Outdoor Living' },
  { src: '/images/outdoor-putting-green.jpg', alt: 'Outdoor putting green and pool with full outdoor living space', category: 'Outdoor Living' },
  { src: '/images/pool-travertine-waterfront.jpg', alt: 'Beautiful travertine pool with waterfront view', category: 'Pools' },
  { src: '/images/pool-with-spa.jpg', alt: 'Gunite pool with integrated spa', category: 'Pools' },
  { src: '/images/pool-turf-geometric.jpg', alt: 'Geometric turf and pool design', category: 'Outdoor Living' },
  { src: '/images/pool-bayou-view.jpg', alt: 'Family pool with Louisiana bayou backdrop', category: 'Pools' },
  { src: '/images/matt-peoples-choice.jpg', alt: 'Acadia Pools — People\'s Choice Award', category: 'Team' },
  { src: '/images/team-excavation.jpg', alt: 'Acadia Pools team at excavation site', category: 'Team' },
  { src: '/images/gallery-01.jpg', alt: 'Custom gunite pool project', category: 'Pools' },
  { src: '/images/gallery-02.jpg', alt: 'Custom gunite pool project', category: 'Pools' },
  { src: '/images/gallery-03.jpg', alt: 'Pool construction and design', category: 'Pools' },
  { src: '/images/gallery-04.jpg', alt: 'Pool construction and design', category: 'Pools' },
  { src: '/images/gallery-05.jpg', alt: 'Finished pool project', category: 'Pools' },
  { src: '/images/gallery-06.jpg', alt: 'Finished pool project', category: 'Pools' },
  { src: '/images/gallery-07.jpg', alt: 'Custom pool design', category: 'Pools' },
  { src: '/images/gallery-08.jpg', alt: 'Custom pool design', category: 'Pools' },
  { src: '/images/gallery-09.jpg', alt: 'Pool with coping and landscaping', category: 'Pools' },
  { src: '/images/gallery-10.jpg', alt: 'Pool with coping and landscaping', category: 'Pools' },
  { src: '/images/gallery-11.jpg', alt: 'Custom pool project', category: 'Pools' },
  { src: '/images/gallery-12.jpg', alt: 'Custom pool project', category: 'Pools' },
  { src: '/images/gallery-13.jpg', alt: 'Pool construction project', category: 'Pools' },
  { src: '/images/gallery-14.jpg', alt: 'Pool construction project', category: 'Pools' },
  { src: '/images/gallery-15.jpg', alt: 'Finished gunite pool', category: 'Pools' },
  { src: '/images/gallery-16.jpg', alt: 'Finished gunite pool', category: 'Pools' },
  { src: '/images/gallery-17.jpg', alt: 'Pool and outdoor living', category: 'Outdoor Living' },
  { src: '/images/gallery-18.jpg', alt: 'Pool and outdoor living', category: 'Outdoor Living' },
  { src: '/images/gallery-19.jpg', alt: 'Pool renovation project', category: 'Pools' },
  { src: '/images/gallery-20.jpg', alt: 'Pool renovation project', category: 'Pools' },
  { src: '/images/gallery-21.jpg', alt: 'Custom pool build', category: 'Pools' },
  { src: '/images/gallery-22.jpg', alt: 'Custom pool build', category: 'Pools' },
  { src: '/images/gallery-23.jpg', alt: 'Pool with water features', category: 'Water Features' },
  { src: '/images/gallery-24.jpg', alt: 'Pool with water features', category: 'Water Features' },
  { src: '/images/gallery-25.jpg', alt: 'Acadia Pools project', category: 'Pools' },
  { src: '/images/gallery-26.jpg', alt: 'Acadia Pools project', category: 'Pools' },
  { src: '/images/gallery-27.jpg', alt: 'Acadia Pools project', category: 'Pools' },
]

export default function GalleryPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/pool-water-wall.jpg"
          alt="Acadia Pools gallery"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(61,13,24,0.78)' }} />
        <div className="relative z-10 container-wide text-center text-white">
          <p className="section-label-light mb-3">Our Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold">Project Gallery</h1>
          <p className="text-gray-300 mt-4 text-lg max-w-xl mx-auto">
            Every pool, every patio, every backyard — built with pride right here in South Louisiana.
          </p>
        </div>
      </section>

      {/* ── Gallery grid ────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {allPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative overflow-hidden rounded-xl break-inside-avoid"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-20 text-white text-center"
        style={{ backgroundColor: 'var(--color-maroon)' }}
      >
        <div className="container-wide">
          <h2 className="text-4xl md:text-5xl font-serif mb-5">Ready for Your Own Masterpiece?</h2>
          <p className="text-gray-200 text-xl mb-8 max-w-xl mx-auto">
            Your dream pool is closer than you think. Let&apos;s talk about making it happen.
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
