import type { Metadata } from 'next'
import PoolBuilderCityPage, { type PoolCity } from '@/components/PoolBuilderCityPage'

const page: PoolCity = {
  slug: 'pool-builder-houma-la',
  city: 'Houma',
  parish: 'Terrebonne Parish',
  faqHeading: 'Houma Pool Questions',
  links: 'build-first',
  closing: { heading: 'Talk to Matt About a Pool in Houma', body: 'To set up a yard visit, call Matt or fill out the form.' },
  hero: { src: '/images/pool-bayou-view.jpg', alt: 'Gunite pool with a sun shelf and lounge chairs in the water, built by Acadia Pools' },
  intro: [
    'Acadia Pools builds custom gunite pools in Houma and nearby parts of Terrebonne Parish. We build the pool to fit your yard, and you pick the shape, how deep it goes and what you want in it.',
    'Matt Glover owns Acadia Pools. He comes out for the first visit and stays with the job until the pool is filled. We are based in Thibodaux, close to Houma.',
  ],
  local: {
    heading: 'Building a Pool in Houma',
    paragraphs: [
      'A lot of Houma sits low, and plenty of yards hold water after a hard rain. Acadia builds each gunite pool to handle Louisiana’s high water table and shifting soil, and the pool is formed right there in your yard around a steel rebar frame.',
      'Before we draw up the pool, Matt walks your yard with you. Since we form the pool by hand, we work out the shape and depth around your yard.',
    ],
    image: { src: '/images/team-excavation.jpg', alt: 'Matt Glover and a crew member standing in a pool excavation' },
  },
  faqs: [
    { q: 'Do you build outside Houma too?', a: 'We build custom gunite pools in Houma and the towns around it, and we work across Lafourche Parish too.' },
    { q: 'What is the starting price for a custom pool in Houma?', a: 'For a small custom gunite pool with a basic design, you’re looking at $50,000 to start. If you want to go bigger or add a spa, water features or an outdoor kitchen, we can give you a free quote.' },
    { q: 'How long does it take to build a pool?', a: 'Most pools take 8 to 14 weeks from digging to filling. A more involved design takes longer, and weather and permit timing can move the schedule too.' },
    { q: 'How do pool permits work in Terrebonne Parish?', a: 'Every pool in Louisiana needs a permit. On the first visit, Matt can explain what is required at your address.' },
  ],
}

export const metadata: Metadata = {
  title: 'Custom Pool Builder in Houma, LA',
  description: 'Acadia Pools builds custom gunite pools for Houma and Terrebonne Parish homeowners. Owner Matt Glover is on every job. Call (985) 413-2954 for a free quote.',
  alternates: { canonical: 'https://www.acadiapools.com/services/pool-builder-houma-la' },
  openGraph: {
    title: 'Custom Pool Builder in Houma, LA | Acadia Pools',
    description: 'Custom gunite pools for Houma and Terrebonne Parish homeowners, built by Acadia Pools of Thibodaux.',
    url: 'https://www.acadiapools.com/services/pool-builder-houma-la',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Acadia Pools, custom gunite pool builder' }],
  },
}

export default function Page() {
  return <PoolBuilderCityPage p={page} />
}
