import type { Metadata } from 'next'

/**
 * Las demos son ejemplos para mostrar a pymes, no contenido del sitio:
 * noindex en todas las páginas bajo /demos/.
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}

export default function DemosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
