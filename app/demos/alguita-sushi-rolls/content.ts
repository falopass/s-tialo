/**
 * app/demos/alguita-sushi-rolls/content.ts
 *
 * Datos REALES verificados:
 * - Ficha de Google Maps: "Alguita Sushi Rolls", categoría Restaurante de
 *   sushi, Paso Chile Chico 160, Teno, Maule. Rating 3,9 con 62 reseñas en la
 *   ficha en vivo. Plus code 4RHJ+HX Teno. La ficha indica apertura a las
 *   18:00.
 * - Teléfono/WhatsApp +56 9 5474 4246 (Maps y restaurantess.cl).
 * - Facebook oficial (link publicado en su ficha de Maps):
 *   facebook.com/AlguitaSushiRolls — 1.745 seguidores. Su propia descripción:
 *   "te ofrece sabrosas piezas de Sushi, disfruta de una experiencia de sabor
 *   inolvidable. Reparto gratis a toda la comuna de Teno."
 * - Fotos: foto real de su ficha de Maps (rolls en tempura sobre tabla de
 *   bambú, con su logo de letra verde) y logo/mascota real de su Facebook
 *   (maki y trozo de pizza con carita). Los platos dibujados van marcados
 *   como bosquejo.
 * - Sin carta pública con precios: no se publican precios.
 */

export const BIZ = {
  name: 'Alguita Sushi Rolls',
  rubro: 'Restaurante de sushi',
  slogan: 'Sabrosas piezas de sushi',
  address: 'Paso Chile Chico 160',
  city: 'Teno',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5474 4246',
  whatsapp: '56954744246',
  rating: '3,9',
  reviews: '62',
  seguidoresFb: '1.745',
  facebookUrl: 'https://www.facebook.com/AlguitaSushiRolls',
  reparto: 'Reparto gratis a toda la comuna de Teno',
  apertura: 'Desde las 18:00',
  mapsPlaceUrl:
    'https://www.google.com/maps/place/Alguita+Sushi+Rolls/@-34.8711166,-71.1675363,17z/data=!3m1!1e1!4m6!3m5!1s0x9664f66d2754a8ff:0x751af87ae00ff238!8m2!3d-34.8711166!4d-71.1675363!16s%2Fg%2F11c1n8b9v1',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Alguita, quiero pedir sushi rolls con reparto',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Alguita Sushi Rolls Paso Chile Chico 160 Teno Maule Chile',
)}&output=embed`

export const IMG = '/demos/alguita-sushi-rolls'
