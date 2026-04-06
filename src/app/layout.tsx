import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://acadiapools.com'),
  title: {
    default: 'Acadia Pools | Custom Gunite Pool Builder in Thibodaux, LA',
    template: '%s | Acadia Pools',
  },
  description:
    'Acadia Pools builds stunning custom gunite pools in Thibodaux, LA and surrounding areas. Pool construction, renovations, water features, outdoor living, and turf installation. Call (985) 413-2954.',
  keywords: [
    'custom pool builder Thibodaux',
    'gunite pool Louisiana',
    'pool construction Thibodaux LA',
    'swimming pool Lafourche Parish',
    'pool renovation Louisiana',
    'water features pool',
    'outdoor living Thibodaux',
    'turf installation Louisiana',
    'Acadia Pools',
    'Matt Glover pools',
  ],
  authors: [{ name: 'Acadia Pools' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://acadiapools.com',
    siteName: 'Acadia Pools',
    images: [
      {
        url: '/images/pool-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Acadia Pools – Custom Gunite Pool Builder in Thibodaux, LA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans text-gray-800 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
