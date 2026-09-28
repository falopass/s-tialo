import type { Metadata } from 'next'
import { SITE } from '@/lib/config'

const BASE = SITE.url.replace(/\/$/, '')

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
