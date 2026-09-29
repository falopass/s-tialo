/**
 * app/demos/cafe-la-francesa/content.ts
 *
 * Datos del mockup. REALES y verificados: ficha de Google Maps (nombre,
 * categoría cafetería, Manuel Rodriguez 552 en Linares, fijo
 * (73) 247 2127 solo para llamadas, 4.2 estrellas con 811 reseñas,
 * horario lun-vie 8:30-22:30, sáb 10:00-23:00 y dom 11:00-21:00),
 * página de Facebook @cafelafrancesa (28.398 seguidores) y ficha
 * SERNATUR que publica el móvil 9 7988 4338 usado como WhatsApp.
 * La relación con la Panadería La Francesa y el concepto "coffee &
 * bar" de la familia Artus sale de la nota de RedBakery (redbakery.cl);
 * la terraza junto a la Plaza de Armas, el pie de limón, el kuchen, el
 * cheesecake, el pisco sour y los tragos de noche salen de las reseñas
 * reales de Google. Fotos: reales, bajadas de la ficha de Maps. Carta:
 * ítems reales vistos en fotos y reseñas, precios por confirmar.
 */

export const BIZ = {
  name: 'Café La Francesa',
  short: 'La Francesa',
  rubro: 'Cafetería',
  address: 'Manuel Rodriguez 552',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7988 4338',
  phoneTel: '+56979884338',
  whatsapp: '56979884338',
  rating: '4.2',
  reviews: 811,
  followers: '28.398',
  facebook: 'https://www.facebook.com/cafelafrancesa',
  horarioSemana: 'Lun a vie 8:30-22:30',
  horarioSab: 'Sáb 10:00-23:00',
  horarioDom: 'Dom 11:00-21:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Café La Francesa y quiero hacer una consulta',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Café La Francesa, Manuel Rodriguez 552, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Manuel Rodriguez 552, 3581385 Linares, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cafe-la-francesa'
