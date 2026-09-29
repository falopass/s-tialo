/**
 * app/demos/centro-turistico-rayen/content.ts
 *
 * Datos REALES verificados (sep 2026):
 * - Ficha de Google Maps: "Centro Turístico Rayen", Vilches, San Clemente.
 *   Categoría "estancia en granjas", dirección K-711, tel. 9 9199 6293,
 *   4,8 estrellas en 24 opiniones.
 * - Sitio oficial centroturisticorayen.cl: 4 cabañas hasta 6 personas,
 *   hostería, camping, piscina, 2 tinajas privadas de agua caliente con
 *   hidromasaje (a gas), check-in 12:00 / check-out 14:00, reserva con
 *   50% de anticipo, transferencia o efectivo, ropa de cama y toallas
 *   las facilita la administración, mascotas bienvenidas. La ficha de
 *   Maps marca "Cerrado temporalmente" (verificado sep 2026): la página
 *   pide consultar disponibilidad por WhatsApp, sin prometer fechas.
 *   Propietario: Florentino Vásquez. IG @centroturisticorayen,
 *   FB "Cabañas Rayen". Camino a Vilches km 8 (Ruta K-705).
 * - Fotos: descargadas de su propio sitio (wp-content/uploads) + logo.
 */

export const BIZ = {
  name: 'Centro Turístico Rayen',
  short: 'Rayen',
  rubro: 'Cabañas, camping y hostería',
  address: 'Camino a Vilches km 8 (Ruta K-705)',
  city: 'Vilches, San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9199 6293',
  phoneTel: '+56991996293',
  whatsapp: '56991996293',
  rating: '4,8',
  reviews: 24,
  owner: 'Florentino Vásquez',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Centro Turístico Rayen en Vilches y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cabaña en el Centro Turístico Rayen, Vilches',
)}`

export const IG_URL = 'https://www.instagram.com/centroturisticorayen/'

export const MAPS_URL =
  'https://www.google.com/maps/place/Centro+Tur%C3%ADstico+Rayen/@-35.5660935,-71.2468887,17z/data=!4m6!3m5!1s0x96659d86f6693285:0xc31a92c3ac944ab0!8m2!3d-35.5660935!4d-71.2468887!16s%2Fg%2F11fj9j0v4z'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Centro Turístico Rayen, K-711, Vilches, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/centro-turistico-rayen'
