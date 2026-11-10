import type { Metadata } from 'next'
import { SITE } from '@/lib/config'

const BASE = SITE.url.replace(/\/$/, '')

/**
 * Demos con sitio real ya publicado: no deben indexarse para no competir
 * con la página del cliente. Además salen del sitemap (ver app/sitemap.ts).
 */
export const DEMOS_NOINDEX: ReadonlySet<string> = new Set([
  'rancho-itahue',
  'zerok',
])

/**
 * Metadata SEO/Open Graph de una demo. El preview de WhatsApp (título,
 * descripción, imagen) se genera de acá: `image` es la ruta pública de una
 * foto real del demo (p.ej. '/demos/beauty-love/hero.webp'); los demos sin
 * fotos propias (escenas CSS/SVG) usan el og-image del sitio.
 */
export function demoMetadata({
  slug,
  title,
  description,
  image = '/og-image.png',
}: {
  slug: string
  title: string
  description: string
  image?: string
}): Metadata {
  const url = `${BASE}/demos/${slug}/`
  const imageUrl = `${BASE}${image}`
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: DEMOS_NOINDEX.has(slug)
      ? { index: false, follow: false }
      : undefined,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: SITE.name,
      locale: SITE.ogLocale,
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}
