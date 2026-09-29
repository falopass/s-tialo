/**
 * app/demos/restaurante-neuquen/content.ts
 *
 * Datos REALES verificados:
 * - Ficha de Google Maps: "Neuquen", Bar restaurante, Av. Huamachuco 712,
 *   San Clemente, Maule. Rating 3,6 con 8 reseñas. Horario: lunes a sábado
 *   9:00–17:00, domingo cerrado.
 * - Registro SERNATUR (serviciosturisticos.sernatur.cl/1434): teléfono
 *   +56 9 9927 1076, correo eventos_neuquen@hotmail.com.
 * - Municipalidad de San Clemente (sanclemente.cl/turismo/servicios):
 *   "Neuquen Restaurante", teléfono fijo 71-2622582.
 * - Reseña citada: Antonela Sabaté, 5 estrellas en Google.
 * - Fotos: reales, de la ficha de Google Maps.
 * No se publican precios (la ficha no los muestra).
 */

export const BIZ = {
  name: 'Restaurante Neuquén',
  short: 'Neuquén',
  rubro: 'Bar restaurante',
  address: 'Av. Huamachuco 712',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9927 1076',
  phoneTel: '+56999271076',
  whatsapp: '56999271076',
  email: 'eventos_neuquen@hotmail.com',
  rating: '3,6',
  reviews: 8,
  mapsPlaceUrl:
    'https://www.google.com/maps/place/Neuquen/@-35.5387331,-71.4863493,17z/data=!3m1!4b1!4m6!3m5!1s0x966595005832eb73:0x99793ac720220044!8m2!3d-35.5387331!4d-71.4863493!16s%2Fg%2F11lc_w9nf9',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurante Neuquén y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurante Neuquén y quiero reservar una mesa',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. Huamachuco 712, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/restaurante-neuquen'

export const HORARIO = [
  { d: 'Lunes a sábado', h: '9:00 a 17:00' },
  { d: 'Domingo', h: 'Cerrado' },
]

export const RESENA = {
  autor: 'Antonela Sabaté',
  estrellas: 5,
  cuando: 'hace unas semanas',
  texto:
    'Excelente servicio, comida abundante y sabores caseros, muy buen ambiente.',
}
