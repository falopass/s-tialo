'use client'

import { usePathname } from 'next/navigation'

/**
 * Oculta el chrome de Sitiazo (Nav, Footer, CookieConsent) en las páginas
 * bajo /demos/, que deben verse como sitios independientes de cada negocio
 * de ejemplo, y en /rancho-itahue/, el sitio final de ese cliente.
 * El índice /demos/ también lo oculta (lleva su propio header).
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname === '/demos' || pathname.startsWith('/demos/')) return null
  if (pathname === '/rancho-itahue' || pathname.startsWith('/rancho-itahue/')) return null
  return <>{children}</>
}
