'use client'

import { usePathname } from 'next/navigation'

/**
 * Oculta el chrome de Sitiazo (Nav, Footer, CookieConsent) en las páginas
 * bajo /demos/, que deben verse como sitios independientes de cada negocio
 * de ejemplo. El índice /demos/ también lo oculta (lleva su propio header).
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname === '/demos' || pathname.startsWith('/demos/')) return null
  return <>{children}</>
}
