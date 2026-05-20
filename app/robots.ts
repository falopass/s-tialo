import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/config'

// Required for `output: 'export'` static builds.
export const dynamic = 'force-static'

/**
 * Dynamic robots.txt.
 * Con `output: 'export'`, Next genera /robots.txt estático en build.
 */
export default function robots(): MetadataRoute.Robots {
  const base = SITE.url.replace(/\/$/, '')

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
