import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agrícola Anka Mapu Ltda — Granja orgánica en San Clemente',
}

/**
 * Alias del lote nuevo-15: la ficha «Agrícola Anka Mapu Ltda» ya tiene su
 * demo en /demos/agricola-anka-mapu. Static export no admite redirects de
 * servidor: meta refresh + enlace de respaldo.
 */
export default function AgrColaAnkaMapuLtdaPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8" style={{ backgroundColor: '#F4EFE2', color: '#1E3D2F' }}>
      <meta httpEquiv="refresh" content="0; url=/demos/agricola-anka-mapu" />
      <p className="text-sm text-center">
        Este demo vive en{' '}
        <Link href="/demos/agricola-anka-mapu" className="underline font-bold">
          /demos/agricola-anka-mapu
        </Link>
        .
      </p>
    </main>
  )
}
