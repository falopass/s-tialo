import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { displaySerif, bodySans, monoText } from '@/lib/fonts'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { CookieConsent } from '@/components/ui/CookieConsent'
import { SITE, SEO_DEFAULTS, SCHEMA } from '@/lib/config'
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
    siteName: `${SITE.name}.${SITE.domain.split('.')[1]}`,
    locale: SITE.ogLocale,
    type: 'website',
    images: [SEO_DEFAULTS.ogImage],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SCHEMA.localBusiness),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SCHEMA.website),
          }}
        />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
