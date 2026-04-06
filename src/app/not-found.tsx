import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/pool-travertine-waterfront.jpg"
        alt="Pool background"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0" style={{ background: 'rgba(61,13,24,0.85)' }} />

      <div className="relative z-10 container-wide text-center text-white px-4">
        <p className="text-gold font-sans font-semibold text-sm uppercase tracking-widest mb-4">404 — Page Not Found</p>
        <h1 className="text-7xl md:text-9xl font-serif font-bold mb-4 opacity-20 select-none">404</h1>
        <h2 className="text-4xl md:text-5xl font-serif font-bold -mt-10 mb-6">
          Looks Like You Dove<br />Into the Deep End
        </h2>
        <p className="text-gray-300 text-xl max-w-md mx-auto mb-10">
          That page doesn&apos;t exist — but your dream pool does. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-gold text-base px-8 py-4">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-outline-white text-base px-8 py-4">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
