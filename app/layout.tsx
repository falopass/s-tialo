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
    'Estudio de diseño web para pymes chilenas. Páginas listas en 7 días, desde $199.000. Mobile-first, sin agencias grandes.',
  metadataBase: new URL('https://sitiazo.cl'),
  openGraph: {
    title: 'Sitiazo.cl — Páginas web que sí venden',
    description:
      'Estudio de diseño web para pymes chilenas. Páginas listas en 7 días, desde $199.000.',
    url: 'https://sitiazo.cl',
    siteName: 'Sitiazo.cl',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitiazo.cl — Páginas web que sí venden',
    description:
      'Estudio de diseño web para pymes chilenas. Páginas listas en 7 días, desde $199.000.',
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
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
