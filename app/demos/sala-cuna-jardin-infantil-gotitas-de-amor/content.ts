/**
 * app/demos/sala-cuna-jardin-infantil-gotitas-de-amor/content.ts
 *
 * Datos del mockup. REALES y verificados en su ficha pública de Google Maps
 * (Sala Cuna y Jardín Infantil Gotitas de Amor):
 * - Nombre, rubro (jardín de infancia), comuna (San Clemente, sector
 *   Vilches), teléfono/WhatsApp +56 9 6304 0752, nota 5,0★.
 *   La ficha está sin reclamar y NO publica fotos ni horario.
 * - La Municipalidad de San Clemente licita su mantención (registro
 *   público): se describe como jardín de la comuna.
 * - IMÁGENES: la ficha no tiene fotos y no se encontró página de
 *   Instagram/Facebook propia. Las ilustraciones de
 *   /demos/sala-cuna-jardin-infantil-gotitas-de-amor son BOSQUEJOS
 *   generados para el mockup — van marcados en la página.
 * - Sin dirección exacta publicada → se muestra el sector (Vilches) y
 *   el mapa de la ficha. Sin horario → consulta por WhatsApp.
 */

export const BIZ = {
  name: 'Sala Cuna y Jardín Infantil Gotitas de Amor',
  short: 'Gotitas de Amor',
  rubro: 'Sala cuna y jardín infantil',
  address: 'Sector Vilches',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6304 0752',
  phoneTel: '+56963040752',
  whatsapp: '56963040752',
  rating: '5,0',
  reviews: 1,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Jardín Gotitas de Amor y quiero consultar por un cupo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Sala Cuna y Jardín Infantil Gotitas de Amor, San Clemente',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sala Cuna y Jardín Infantil Gotitas de Amor, Vilches, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/sala-cuna-jardin-infantil-gotitas-de-amor'
