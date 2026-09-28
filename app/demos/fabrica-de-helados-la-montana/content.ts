/**
 * app/demos/fabrica-de-helados-la-montana/content.ts
 *
 * Datos del mockup. REALES: nombre (Fábrica de helados La Montaña,
 * su cartel dice «La Montaña»), rubro (heladería), dirección
 * (Av. Huamachuco 865, San Clemente), WhatsApp +56 9 4164 7710,
 * horario lun a sáb 11:30 a 21:00 y dom 11:30 a 20:30, nota 4,6
 * con 33 reseñas (ficha de Google Maps). Las fotos vienen de su
 * ficha de Maps: la terraza con sombrilla, la vitrina de sabores
 * y los conos son de su propio local. Productos citados por sus
 * propias reseñas y su pizarra: helados artesanales, soft,
 * barquillos, granizados, café, confites y campeones. Los textos
 * de apoyo (titulares, FAQ) son de muestra.
 */

export const BIZ = {
  name: 'Fábrica de Helados La Montaña',
  short: 'La Montaña',
  rubro: 'Heladería artesanal',
  address: 'Av. Huamachuco 865',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4164 7710',
  phoneTel: '+56941647710',
  whatsapp: '56941647710',
  reviews: 33,
  rating: '4,6',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Fábrica de Helados La Montaña y quiero hacer un pedido',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Fábrica de helados la montaña, Av. Huamachuco 865, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Fábrica de helados la montaña, Av. Huamachuco 865, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/fabrica-de-helados-la-montana'
