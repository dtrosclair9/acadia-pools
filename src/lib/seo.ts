// Single source of truth for the site's canonical host.
// The apex (acadiapools.com) 307-redirects to www, so www is the serving host.
export const BASE_URL = 'https://www.acadiapools.com'

// Shared Open Graph image. Defined WITHOUT `as const` so its type stays
// assignable to Next's OpenGraph image type. Include this in any page that
// sets its own `openGraph` block, otherwise the page loses the OG image.
export const ogImage = {
  url: `${BASE_URL}/images/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: 'Acadia Pools - Custom Gunite Pool Builder in Thibodaux, LA',
}
