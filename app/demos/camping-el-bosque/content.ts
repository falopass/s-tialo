/**
 * Camping El Bosque — Sector El Radal (Molina, Maule).
 *
 * Ficha Google Maps: «Camping El Bosque- Sector El Radal», categoría
 * «Camping», 4,6★ (53 reseñas), K-275 Molina, +56 9 4424 4215.
 * Instagram oficial: @elbosque_camping (4,4 mil seguidores).
 * Tarifas reales: volante «Temporada 2026» publicado en su Instagram —
 * camping adulto $6.000/noche, niños y +60 $3.000, discapacidad sin costo;
 * picnic $3.000 adulto, $2.000 niños/+60. 40 sitios a orillas del
 * Estero El Toro y Río Claro. No toman reservas: llamar el día anterior.
 * Prohibido fuego (Ley 20.653), no mascotas, no pescar ni cazar.
 * Duchas con agua caliente 07:00-10:00 y 19:00-22:00. Señal limitada
 * (llevar efectivo).
 */

export const BIZ = {
  name: 'Camping El Bosque',
  suffix: 'Sector El Radal',
  short: 'El Bosque',
  rubro: 'Camping de temporada',
  address: 'K-275, camino a El Radal',
  city: 'Molina, Maule',
  phoneDisplay: '+56 9 4424 4215',
  whatsapp: '56944244215',
  rating: 4.6,
  reviews: 53,
  capacity: '40 sitios',
  season: 'Temporada 2026',
  instagram: '@elbosque_camping',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero confirmar disponibilidad para Camping El Bosque (El Radal)',
)}`

export const IG_URL = 'https://www.instagram.com/elbosque_camping'

export const MAPS_URL =
  'https://www.google.com/maps/place/Camping+El+Bosque-+Sector+El+Radal/@-35.4142434,-71.0557057,17z'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Camping+El+Bosque+Sector+El+Radal+Molina&output=embed'

export const IMG = '/demos/camping-el-bosque'
