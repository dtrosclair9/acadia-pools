import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/seo'

// Static ISO date so the sitemap route stays statically cacheable and
// deterministic (no Date.now() at request time).
const lastModified = '2026-07-10'

type Entry = {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
}

const entries: Entry[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/gunite-pool-construction-thibodaux', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/pool-renovation-thibodaux', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/water-features-thibodaux', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/outdoor-living-thibodaux', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/gallery', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
