/**
 * app/demos/komo-a-lo-pobre-putu/content.ts
 *
 * Datos verificados del negocio:
 * - Google Maps: «Komo A Lo Pobre» — Aldea 450, Putú, Constitución.
 *   Restaurant · 4,8 (112 reseñas) · CLP 5–10K · +56 9 4292 0688.
 *   Horario: ma–ju 13:00–21:30, vi–sá 13:00–00:00, do cerrado.
 * - Instagram: instagram.com/komo_alo_pobre · Facebook: /komoalopobreputu
 * - El letrero colgante de la fachada dice «Comida al paso / asados,
 *   almuerzos, completos, masas, bebestibles» (foto real).
 * - Reseñas: textos reales de la ficha de Google (verificación de
 *   nombres y estrellas al momento de la captura).
 */

export const BIZ = {
  name: 'Komo a lo Pobre',
  full: 'Komo a lo Pobre Putú',
  rubro: 'Restaurant · comida casera',
  address: 'Aldea 450, Putú, Constitución',
  city: 'Putú',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4292 0688',
  phoneTel: '+56942920688',
  whatsapp: '56942920688',
  instagram: 'https://www.instagram.com/komo_alo_pobre/',
  igUser: '@komo_alo_pobre',
  facebook: 'https://www.facebook.com/komoalopobreputu/',
  rating: 4.8,
  reviews: 112,
  price: '$5.000–10.000 por persona',
  hours: [
    ['Lun a jue', '13:00 – 21:30'],
    ['Vie y sáb', '13:00 – 00:00'],
    ['Domingo', 'Cerrado'],
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Komo a lo Pobre y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Komo a lo Pobre y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Komo A Lo Pobre, Aldea 450, Putu, Constitución, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Komo A Lo Pobre, Aldea 450, Putu, Constitución, Chile',
)}&output=embed`

export const IMG = '/demos/komo-a-lo-pobre-putu'
