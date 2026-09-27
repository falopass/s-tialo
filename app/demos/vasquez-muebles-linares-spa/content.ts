/**
 * app/demos/vasquez-muebles-linares-spa/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro, comuna, dirección
 * (Callejón Los Zárate, parcela 2, Linares), WhatsApp, página de
 * Facebook (2.749 seguidores) y que hoy no tiene reseñas en Google.
 * Todo lo demás (productos, precios, horarios, reseñas, fotos) es
 * contenido de ejemplo para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Vasquez Muebles Linares',
  legal: 'Vasquez Muebles Linares SpA',
  short: 'Vasquez Muebles',
  rubro: 'Fábrica de muebles a medida',
  address: 'Callejón Los Zárate, parcela 2',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5405 4149',
  phoneTel: '+56954054149',
  whatsapp: '56954054149',
  reviews: 0,
  facebook: 'https://www.facebook.com/VasquezDisenoYConfeccionDeMueblesAMedida',
  facebookFollowers: '2.749',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Vasquez Muebles y quiero cotizar un mueble',
)}`

export const WA_LINK_ENCARGO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Vasquez Muebles y tengo una idea para un mueble a medida',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Callejón Los Zárate parcela 2, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Callejón Los Zárate, Linares, Chile',
)}&output=embed`

export const IMG = '/demos/vasquez-muebles-linares-spa'
