import type { Metadata } from 'next'
import PoolBuilderCityPage, { type PoolCity } from '@/components/PoolBuilderCityPage'

const page: PoolCity = {
  slug: 'pool-builder-raceland-la',
  city: 'Raceland',
  parish: 'Lafourche Parish',
  faqHeading: 'Planning a Pool in Raceland',
  links: 'gallery-first',
  closing: { heading: 'Set Up a Yard Visit in Raceland', body: 'You can call Matt directly. If you fill out the form, he’ll get in touch to set up a visit.' },
  hero: { src: '/images/pool-water-wall.jpg', alt: 'Pool with a raised water wall pouring into it, built by Acadia Pools' },
  intro: [
    'We build custom gunite pools in Raceland pretty often. Our shop is just up the road in Thibodaux.',
    'You sit down with Matt Glover, the owner, to plan the pool. He runs every job himself, so if a question comes up during construction, you call him.',
  ],
  local: {
    heading: 'Pool Permits in Lafourche Parish',
    paragraphs: [
      'Raceland and Thibodaux are both in Lafourche Parish, and Acadia Pools handles the permit paperwork for you.',
      'Matt will look at your yard to see where a sun shelf, spa or rock waterfall could fit. Some yards near the bayou in Raceland are tight, and the bigger lots off LA-1 and LA-308 give him more room to work with.',
    ],
    image: { src: '/images/pool-turf-geometric.jpg', alt: 'Rectangular pool with an attached spa and turf strips between the pavers' },
  },
  faqs: [
    { q: 'Do you build pools in Raceland often?', a: 'Yes, we build in Raceland regularly.' },
    { q: 'Do you handle the pool permit in Raceland?', a: 'Yes, we’ll handle the Lafourche Parish pool permit for you.' },
    { q: 'What affects the price of a gunite pool in Raceland?', a: 'How big you want the pool matters most. The finish and anything you add, like a spa or water features, raise the price too. Pools start at $50,000, and the quote is free.' },
    { q: 'What can I add to a gunite pool?', a: 'Popular add-ons include a sun shelf, a beach entry, a spa, LED lighting, deck jets, rock waterfalls and fire features. For the inside of the pool, you can choose a pebble or quartz finish.' },
  ],
}

export const metadata: Metadata = {
  title: 'Custom Pool Builder in Raceland, LA',
  description: 'Acadia Pools builds custom gunite pools in Raceland and handles the Lafourche Parish permit. Owner Matt Glover runs every job. Call (985) 413-2954.',
  alternates: { canonical: 'https://www.acadiapools.com/services/pool-builder-raceland-la' },
  openGraph: {
    title: 'Custom Pool Builder in Raceland, LA | Acadia Pools',
    description: 'Custom gunite pools for Raceland families, built by Acadia Pools of Thibodaux.',
    url: 'https://www.acadiapools.com/services/pool-builder-raceland-la',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Acadia Pools, custom gunite pool builder' }],
  },
}

export default function Page() {
  return <PoolBuilderCityPage p={page} />
}
