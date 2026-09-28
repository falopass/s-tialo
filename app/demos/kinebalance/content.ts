/**
 * app/demos/kinebalance/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Ficha de Google Maps: nombre (KINEBALANCE), categoría (centro médico),
 *   dirección (Av. Circunvalación Ote. 1055, Talca — corresponde al
 *   Mall Plaza Maule), teléfono/WhatsApp, horario (Lu–Vi 8:30–20:00,
 *   sábado 10:00–13:00, domingo cerrado) y nota 5.0 con 130 reseñas.
 * - Facebook oficial (/p/Kinebalance-100063901366248): Kinebalance, Talca,
 *   868 seguidores. El Instagram @kinebalance es un homónimo sin relación.
 * - Servicios: textos del muro de su local y de sus afiches publicados en
 *   la ficha (rehabilitación kinésica, tratamiento estético, entrenamiento
 *   deportivo, criolipólisis, masajes reductivos y de relajación).
 * - Reseñas: citas literales de la ficha de Google.
 */

export const BIZ = {
  name: 'Kinebalance',
  rubro: 'Centro médico · kinesiología',
  address: 'Av. Circunvalación Ote. 1055, Mall Plaza Maule',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3252 7836',
  whatsapp: '56932527836',
  rating: '5.0',
  reviews: '130',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Kinebalance, vi su página y quiero agendar una hora',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/KINEBALANCE/@-35.4328034,-71.6300011,17z/data=!3m1!4b1!4m6!3m5!1s0x9665c6da2e928795:0x8cd0adfab0b60d1d!8m2!3d-35.4328034!4d-71.6300011!16s%2Fg%2F11hyt1zqmz'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'KINEBALANCE, Av. Circunvalación Ote. 1055, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/kinebalance'
