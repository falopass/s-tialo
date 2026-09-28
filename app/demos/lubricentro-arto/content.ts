/**
 * app/demos/lubricentro-arto/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre, rubro,
 * dirección, comuna, WhatsApp, horario, rating y textos de reseñas.
 * El letrero del local (Street View) confirma el branding "arto SERVITECA"
 * con productos Liqui Moly. Lo demás (lista de servicios y textos de
 * apoyo) es contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Lubricentro Arto | Repuestos & Serviteca',
  short: 'Lubricentro Arto',
  rubro: 'Lubricentro y repuestos',
  address: 'Av. Huamachuco 1994',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3439 1113',
  phoneTel: '+56934391113',
  whatsapp: '56934391113',
  googleRating: '4,3',
  googleReviews: '91',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Lubricentro Arto y quiero consultar por un cambio de aceite',
)}`

export const WA_LINK_REPUESTOS = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Lubricentro Arto y quiero consultar por repuestos',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Lubricentro+Arto+%7C+Repuestos+%26+Serviteca/@-35.5277148,-71.5030698,17z/data=!4m6!3m5!1s0x966595bfc74edb19:0xb3b36fba16af1b55'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Lubricentro Arto Repuestos Serviteca, Av. Huamachuco 1994, San Clemente',
)}&output=embed`

export const IMG = '/demos/lubricentro-arto'
