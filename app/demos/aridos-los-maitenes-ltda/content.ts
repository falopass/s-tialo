/**
 * app/demos/aridos-los-maitenes-ltda/content.ts
 *
 * Datos verificados en la ficha de Google Maps «ARIDOS LOS MAITENES LTDA.»
 * (San Clemente, sector Queri): teléfono, nota 3.8 con 5 reseñas y
 * horario de oficina. La reseña citada es real de la ficha. La segunda
 * ficha «planta de aridos los maitenes» confirma el sector.
 */

export const BIZ = {
  name: 'Áridos Los Maitenes Ltda.',
  short: 'Los Maitenes',
  rubro: 'Extracción y venta de áridos',
  address: 'Sector Queri, San Clemente',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3574 8295',
  phoneTel: '+56935748295',
  whatsapp: '56935748295',
  rating: 3.8,
  reviews: 5,
  hours: [
    ['Lun a vie', '8:00 - 12:00 · 13:30 - 17:30'],
    ['Sábado', '8:00 - 13:00'],
    ['Domingo', 'Cerrado'],
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Áridos Los Maitenes y quiero cotizar material',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'ARIDOS LOS MAITENES LTDA., San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'ARIDOS LOS MAITENES LTDA., San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/aridos-los-maitenes-ltda'
