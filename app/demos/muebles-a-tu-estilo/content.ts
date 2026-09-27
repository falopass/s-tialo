/**
 * app/demos/muebles-a-tu-estilo/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro, comuna, dirección
 * (Teniente Berguño 1369, Molina), WhatsApp, 531 seguidores en Facebook
 * y que hoy no tiene reseñas en Google. El enlace de Facebook recibido
 * apunta a una página de configuración, así que no se enlaza.
 * Todo lo demás (productos, precios, plazos, fotos) es contenido de
 * ejemplo para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'muebles a tu estilo',
  rubro: 'Fábrica de muebles',
  address: 'Teniente Berguño 1369',
  postal: '3380000',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9933 5199',
  phoneTel: '+56999335199',
  whatsapp: '56999335199',
  reviews: 0,
  facebookFollowers: '531',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de muebles a tu estilo y quiero cotizar un mueble',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Teniente Berguño 1369, 3380000 Molina, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Teniente Berguño 1369, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/muebles-a-tu-estilo'
