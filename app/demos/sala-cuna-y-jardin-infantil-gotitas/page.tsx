import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sala Cuna y Jardín Infantil Gotitas — Vilches, San Clemente',
}

/**
 * Alias del lote nuevo-08: la ficha «Sala Cuna y Jardín Infantil Gotitas de
 * Amor» (Vilches, San Clemente) ya tiene su demo en
 * /demos/sala-cuna-jardin-infantil-gotitas-de-amor. Static export no admite
 * redirects de servidor: meta refresh + enlace de respaldo.
 */
export default function SalaCunaYJardinInfantilGotitasPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: '#FFF6E8', color: '#1F4E4A' }}>
      <meta httpEquiv="refresh" content="0; url=/demos/sala-cuna-jardin-infantil-gotitas-de-amor" />
      <p className="text-sm text-center">
        Este demo vive en{' '}
        <Link href="/demos/sala-cuna-jardin-infantil-gotitas-de-amor" className="underline font-bold">
          /demos/sala-cuna-jardin-infantil-gotitas-de-amor
        </Link>
        .
      </p>
    </main>
  )
}
