import Link from 'next/link'
import type { Metadata } from 'next'
import SitioLayout from './(sitio)/layout'

export const metadata: Metadata = {
  title: 'Página no encontrada',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <SitioLayout>
      <section className="s-wrap flex min-h-[80dvh] flex-col justify-center pt-(--s-nav-h) pb-16">
        <h1 className="s-display s-h1 max-w-[14ch]">Esta página no existe.</h1>
        <p className="s-lead mt-6">Pero la de tu negocio sí puede existir. Vuelve al inicio o pide tu demo.</p>
        <div className="mt-10">
          <Link href="/" className="s-btn s-btn-primario">
            Volver al inicio
          </Link>
        </div>
      </section>
    </SitioLayout>
  )
}
