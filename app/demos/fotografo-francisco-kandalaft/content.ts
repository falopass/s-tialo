/**
 * app/demos/fotografo-francisco-kandalaft/content.ts
 *
 * Datos del mockup. REALES y verificados (28-09-2026):
 * - Ficha de Google Maps «Fotógrafo Francisco Kandalaft» (Fotógrafo):
 *   Talca, Región del Maule; teléfono/WhatsApp +56 9 6142 7884;
 *   horario Lun–Dom 8:00–22:00; nota 5.0 (1 reseña, Ana Seña).
 * - Perfil en matrimonios.cl / haymatrimonio.cl: 5.0 con 15 opiniones
 *   reales, precio «desde $200.000», servicios (foto preboda, video,
 *   postboda, dron, álbumes, entrega digital) y trayectoria (15+ años,
 *   Wedding Awards 2022 y 2023, Mister Chile, Miss Mundo Chile y Miss
 *   Venezuela 2022, producciones en EEUU, jurado Miss Belleza Marina
 *   Talca 2025). Correo: franciscokandalaft@gmail.com.
 * - Instagram @fotografofranciscokandalaft: 1.803 seguidores.
 * - Fotos: su propio trabajo, bajadas de su ficha de Maps y de su
 *   Instagram. Sin imágenes generadas en este demo.
 */

export const BIZ = {
  name: 'Francisco Kandalaft',
  legal: 'Fotógrafo Francisco Kandalaft',
  short: 'F. Kandalaft',
  rubro: 'Fotografía y video de matrimonios',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6142 7884',
  phoneTel: '+56961427884',
  whatsapp: '56961427884',
  email: 'franciscokandalaft@gmail.com',
  instagram: 'https://www.instagram.com/fotografofranciscokandalaft/',
  igUser: '@fotografofranciscokandalaft',
  igFollowers: '1.803',
  ratingGoogle: 5.0,
  ratingMatri: 5.0,
  resenasMatri: 15,
  precioDesde: '$200.000',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Francisco, vi tu página y quiero consultar fecha para fotografía',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Fotógrafo Francisco Kandalaft, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Fotógrafo Francisco Kandalaft, Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/fotografo-francisco-kandalaft'
