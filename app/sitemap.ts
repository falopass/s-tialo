import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/config'
import { posts } from '@/content/posts'

// Required for `output: 'export'` static builds.
export const dynamic = 'force-static'

/**
 * Dynamic sitemap.
 *
 * IMPORTANTE: este sitio usa `trailingSlash: true` en next.config.ts,
 * así que la canónica de toda URL termina con "/". Todas las URLs
 * acá incluyen el slash final para que matcheen con la canónica real
 * y Google no las trate como redirecciones.
 *
 * Con `output: 'export'`, Next genera /sitemap.xml estático en build.
 */

type Route = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const STATIC_ROUTES: Route[] = [
  { path: '/',                      changeFrequency: 'weekly',  priority: 1.0 },
  { path: '/planes/',               changeFrequency: 'monthly', priority: 0.9 },
  { path: '/casos/',                changeFrequency: 'monthly', priority: 0.8 },
  { path: '/casos/roma-crochet/',   changeFrequency: 'monthly', priority: 0.7 },
  { path: '/como-funciona/',        changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog/',                 changeFrequency: 'weekly',  priority: 0.8 },
  { path: '/contacto/',             changeFrequency: 'yearly',  priority: 0.7 },
  { path: '/sobre/',                changeFrequency: 'yearly',  priority: 0.6 },
  { path: '/preguntas-frecuentes/', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/terminos/',             changeFrequency: 'yearly',  priority: 0.4 },
  { path: '/privacidad/',           changeFrequency: 'yearly',  priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, '')
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ path, changeFrequency, priority }) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    }),
  )

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}/`,
    lastModified: post.dateISO ? new Date(post.dateISO) : now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}
