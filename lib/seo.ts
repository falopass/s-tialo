/**
 * lib/seo.ts
 *
 * Helpers para SEO, JSON-LD y URLs canónicas.
 */

import { SITE, siteUrl } from '@/lib/config'

/**
 * Escapa HTML en strings para JSON-LD.
 * Previene inyección de HTML/JS en datos dinámicos.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Genera URL canónica con trailing slash consistente.
 */
export function canonicalUrl(path: string): string {
  const url = siteUrl(path)
  return url.endsWith('/') ? url : `${url}/`
}

/**
 * Genera JSON-LD para LocalBusiness (ProfessionalService).
 */
export function localBusinessJsonLd(data: {
  name: string
  description: string
  url: string
  telephone: string
  email: string
  address: {
    '@type': 'PostalAddress'
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
  priceRange: string
  image: string
  areaServed: string
  founder: {
    '@type': 'Person'
    name: string
  }
  sameAs: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    ...data,
  }
}

/**
 * Genera JSON-LD para WebSite.
 */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${SITE.name}.${SITE.domain.split('.')[1]}`,
    url: SITE.url,
  }
}

/**
 * Genera JSON-LD para BlogPosting.
 */
export function blogPostJsonLd(data: {
  headline: string
  description: string
  image: string
  datePublished: string
  author: {
    '@type': 'Person'
    name: string
  }
  publisher: {
    '@type': 'Organization'
    name: string
    url: string
  }
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url,
    },
    ...data,
  }
}

/**
 * Genera JSON-LD para ContactPage.
 */
export function contactPageJsonLd(data: {
  url: string
  description: string
  mainEntity: {
    '@type': 'ProfessionalService'
    name: string
    description: string
    url: string
    telephone: string
    email: string
    contactPoint: Array<{
      '@type': 'ContactPoint'
      contactType: string
      telephone?: string
      email?: string
      url?: string
    }>
  }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    ...data,
  }
}

/**
 * Genera JSON-LD para BreadcrumbList.
 */
export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Genera JSON-LD para ItemList (planes/servicios).
 */
export function itemListJsonLd(data: {
  name: string
  description: string
  url: string
  itemListElement: Array<{
    '@type': 'ListItem'
    position: number
    item: {
      '@type': 'Service'
      name: string
      description: string
      url: string
      provider: {
        '@type': 'ProfessionalService'
        name: string
        url: string
      }
      offers: {
        '@type': 'Offer'
        price: string
        priceCurrency: string
        availability: string
        description: string
      }
    }
  }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: data.itemListElement.length,
    ...data,
  }
}
