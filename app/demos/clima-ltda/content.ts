/**
 * app/demos/clima-ltda/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, verificada
 * 2026-09-28): razón social, dirección Calle 18 Ote. 2429 (Talca),
 * teléfono, rubro "Tienda de aire acondicionado", nota 4.1 con 24
 * reseñas, horario lun-vie 8:30–13:00 / 14:30–18:00 y sáb 9:00–13:00,
 * y las reseñas citadas con nombre y estrellas. Las sucursales de
 * Constitución (Freire 075) y Rancagua (Bombero Villalobos 533) figuran
 * en un artículo del distribuidor en mediabanco.com con el mismo
 * teléfono; las fotos son de las fichas de Maps de la empresa y de su
 * Instagram público @climaltda. No se publican precios ni stock.
 */

export const BIZ = {
  name: 'Clima Ltda.',
  rubro: 'Tienda de aire acondicionado',
  address: 'Calle 18 Ote. 2429',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8606 8069',
  phoneTel: '+56986068069',
  whatsapp: '56986068069',
  rating: 4.1,
  reviews: '24',
  mapPlace: 'Clima Ltda, Calle 18 Oriente 2429, Talca, Chile',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Clima Ltda., vi su página y quiero cotizar un equipo de aire acondicionado',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BIZ.mapPlace,
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Calle 18 Oriente 2429, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/clima-ltda'
