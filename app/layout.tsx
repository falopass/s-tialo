import type { Metadata } from 'next'
import { displaySerif, bodySans, monoText } from '@/lib/fonts'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Sitiazo.cl — Páginas web que sí venden',
    template: '%s | Sitiazo.cl',
  },
  description:
    'Estudio de diseño web para pymes chilenas. Páginas listas en 7 días, desde $79.990. Mobile-first, sin agencias grandes.',
  metadataBase: new URL('https://sitiazo.cl'),
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
    openGraph: {
      title: 'Sitiazo.cl — Páginas web que sí venden',
      description:
        'Estudio de diseño web para pymes chilenas. Páginas listas en 7 días, desde $79.990.',
      url: 'https://sitiazo.cl',
      siteName: 'Sitiazo.cl',
      locale: 'es_CL',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Sitiazo.cl — Páginas web que sí venden',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sitiazo.cl — Páginas web que sí venden',
      description:
        'Estudio de diseño web para pymes chilenas. Páginas listas en 7 días, desde $79.990.',
      images: ['/og-image.png'],
    },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sitiazo.cl',
  description:
    'Estudio de diseño web para pymes chilenas. Páginas listas en 7 días, desde $79.990.',
  url: 'https://sitiazo.cl',
  telephone: '+56 9 4544 6575',
  email: 'hola@sitiazo.cl',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Curicó',
    addressRegion: 'Maule',
    addressCountry: 'CL',
  },
  priceRange: '$$$',
  logo: 'https://sitiazo.cl/images/logo/logo-blackfondo.png',
  image: [
    'https://sitiazo.cl/og-image.png',
    'https://sitiazo.cl/images/logo/logo-blackfondo.png',
    'https://sitiazo.cl/images/logo/logo-realwhite.png',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sitiazo.cl',
  url: 'https://sitiazo.cl',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es-CL"
      className={`${displaySerif.variable} ${bodySans.variable} ${monoText.variable}`}
    >
      <body className="font-body text-body text-ink leading-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-yellow focus:text-ink focus:px-4 focus:py-2 focus:font-medium"
        >
          Saltar al contenido
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
