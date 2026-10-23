import { Nav } from './_components/Nav'
import { Footer } from './_components/Footer'
import { CookieConsent } from './_components/CookieConsent'
import { sFontClasses } from './_lib/fonts'
import './sitio.css'

/**
 * Layout del sitio principal. Todo lo visual del sitio cuelga de [data-sitio] para que nada
 * se filtre a los demos, que comparten el layout raíz (ver DISENO.md, "Límite con los demos").
 */
export default function SitioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-sitio className={sFontClasses}>
      <Nav />
      {children}
      <Footer />
      <CookieConsent />
    </div>
  )
}
