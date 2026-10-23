import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { displaySerif, bodySans, monoText } from '@/lib/fonts'
import { SITE, SEO_DEFAULTS, SCHEMA, MARCA } from '@/lib/config'
import { JsonLd } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: SEO_DEFAULTS.defaultTitle,
    template: SEO_DEFAULTS.titleTemplate,
  },
  description: SEO_DEFAULTS.defaultDescription,
  metadataBase: new URL(SITE.url),
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: SEO_DEFAULTS.defaultTitle,
    description: SITE.description,
    url: SITE.url,
    siteName: MARCA,
    locale: SITE.ogLocale,
    type: 'website',
    images: [SEO_DEFAULTS.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_DEFAULTS.defaultTitle,
    description: SITE.description,
    images: [SEO_DEFAULTS.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang={SITE.locale}
      className={`${displaySerif.variable} ${bodySans.variable} ${monoText.variable}`}
    >
      <body className="font-body text-body text-ink leading-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-yellow focus:text-ink focus:px-4 focus:py-2 focus:font-medium"
        >
          Saltar al contenido
        </a>
        <JsonLd data={SCHEMA.localBusiness} />
        <JsonLd data={SCHEMA.website} />
        <main id="main-content">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
