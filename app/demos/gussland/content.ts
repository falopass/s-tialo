/**
 * app/demos/gussland/content.ts
 *
 * Datos verificados en la ficha de Google Maps (29-09-2026):
 * nombre, categoría (restaurante), dirección (Av. Lautaro 414, Licantén),
 * teléfono, rating 4,5 con 308 reseñas y horario publicado por día.
 * La sangría como sello sale de una reseña real; el wordmark "GUSS LAND"
 * entre corchetes está en el vaso y la fachada del local.
 */

export const BIZ = {
  name: 'Gussland',
  rubro: 'Restaurante y terraza',
  address: 'Av. Lautaro 414',
  city: 'Licantén',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8205 6094',
  phoneTel: '+56982056094',
  whatsapp: '56982056094',
  rating: '4,5',
  reviews: 308,
} as const

export const HORARIO: { dia: string; horas: string }[] = [
  { dia: 'Martes', horas: '9:00–15:30 y 17:30–22:00' },
  { dia: 'Miércoles', horas: '9:00–15:30 y 17:30–23:30' },
  { dia: 'Jueves', horas: '9:00–15:30 y 17:30–22:00' },
  { dia: 'Viernes', horas: '10:00–15:30 y 17:30–23:30' },
  { dia: 'Sábado', horas: '17:30–23:30' },
  { dia: 'Domingo', horas: 'Cerrado' },
  { dia: 'Lunes', horas: 'Cerrado' },
]

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Gussland y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Gussland y quiero reservar mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Gussland, Av. Lautaro 414, Licantén, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Gussland, Av. Lautaro 414, Licantén, Chile',
)}&output=embed`

export const IMG = '/demos/gussland'
