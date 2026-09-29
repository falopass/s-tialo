/**
 * app/demos/la-tribu-silva/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps):
 * nombre, comuna (Maule, salida norte junto a la autopista, según
 * su ficha y reseñas), teléfono/WhatsApp (+56 9 8204 5307), rating
 * 4,5 con 43 reseñas, horario (lun-vie 11:30-21:30, sáb 12:00-23:00,
 * dom cerrado) y el menú que ellos mismos publican en la pizarra de
 * la entrada (desayuno y once, almuerzos caseros y extra, sándwich,
 * empanadas, carnes asadas, completos, papas fritas, chorrillanas,
 * mote con huesillo y pizza). Las reseñas citadas son textos reales
 * de su ficha de Google. Las fotos son reales, de su propia ficha.
 */

export const BIZ = {
  name: 'La Tribu Silva',
  short: 'La Tribu Silva',
  rubro: 'Restaurante',
  address: 'Salida norte, junto a la autopista',
  city: 'Maule',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8204 5307',
  whatsapp: '56982045307',
  rating: '4,5',
  reviews: 43,
  horario: 'Lun a vie 11:30 a 21:30 · sáb 12:00 a 23:00 · dom cerrado',
  plusCode: 'F8H9+72 Maule',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola La Tribu Silva, vi su página y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar en La Tribu Silva, Maule',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'La Tribu Silva, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'La Tribu Silva, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/la-tribu-silva'
