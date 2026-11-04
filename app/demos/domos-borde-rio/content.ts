/**
 * app/demos/domos-borde-rio/content.ts
 *
 * Datos del mockup. REALES: nombre, dirección (Parcela 27, Rinconada de
 * Cato, Chillán, Ñuble), WhatsApp (+56 9 9776 3223), Facebook
 * (/domosborderio), el rating de Google (4,6 con 20 opiniones) y las
 * tarifas, que el negocio envió por WhatsApp ($65.000 / $70.000 /
 * $75.000 la noche según cupo, tinaja caliente +$30.000 por uso,
 * incluye acceso a quincho y piscina). No hay horarios de check-in
 * confirmados: no se muestran.
 */

export const BIZ = {
  name: 'Domos Borde Río',
  short: 'Borde Río',
  rubro: 'Domos con tinaja caliente',
  address: 'Parcela 27, Rinconada de Cato',
  city: 'Chillán',
  region: 'Región de Ñuble',
  phoneDisplay: '+56 9 9776 3223',
  phoneTel: '+56997763223',
  whatsapp: '56997763223',
  rating: 4.6,
  ratingDisplay: '4,6',
  reviews: 20,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Domos Borde Río y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar un domo en Domos Borde Río, Chillán',
)}`

export const FB_URL = 'https://www.facebook.com/domosborderio'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Domos Borde Río, Parcela 27, Rinconada de Cato, Chillán, Ñuble, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Domos Borde Río, Parcela 27, Rinconada de Cato, Chillán, Ñuble, Chile',
)}&output=embed`

export const IMG = '/demos/domos-borde-rio'

/** Tarifas reales enviadas por el negocio por WhatsApp. */
export const TARIFAS = [
  { item: 'Domo · 2 personas', price: '$65.000', unit: 'por noche' },
  { item: 'Domo · 4 personas', price: '$70.000', unit: 'por noche' },
  { item: 'Domo · 6 personas', price: '$75.000', unit: 'por noche' },
  { item: 'Tinaja caliente', price: '+$30.000', unit: 'por uso' },
] as const
