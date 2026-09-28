/**
 * app/demos/automotora-gonzalez/content.ts
 *
 * Datos del mockup. REALES y verificados (28-09-2026):
 * - Ficha de Google Maps «Automotora Gonzalez» (Concesionario de
 *   automóviles): Av. Balmaceda 1971, 3340000 Curicó — teléfono
 *   +56 9 8866 4636, sitio web facebook.com, 4.5 estrellas con 13
 *   reseñas y horario L-V 9-13 y 15-19, sábado 9-13, domingo cerrado.
 * - Instagram @automotora.gonzalez (12.4K seguidores, confirmado por el
 *   mismo teléfono en su bio): compra-venta de usados, consignaciones y
 *   crédito automotriz. Las fotos del patio y de los autos son de ese
 *   perfil; el aviso «EN VENTA» en los parabrisas es su marca en el lote.
 * - Los letreros reales del patio ofrecen consignaciones, crédito
 *   (Tanner / Global) y lavado de tapices + aspirado de vehículos.
 * - El precio publicado solo se muestra donde el post lo declara
 *   (Chevrolet Sail, $4.490.000); el resto queda «a consultar».
 */

export const BIZ = {
  name: 'Automotora González',
  short: 'Automotora González',
  rubro: 'Concesionario de automóviles usados',
  address: 'Av. Balmaceda 1971',
  addressFull: 'Av. Balmaceda 1971, 3340000 Curicó, Maule',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8866 4636',
  whatsapp: '56988664636',
  rating: 4.5,
  reviews: 13,
} as const

export const waLink = (msg: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(msg)}`

export const WA_LINK = waLink(
  'Hola, vi la página de Automotora González y quiero consultar por un auto del patio',
)

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Automotora Gonzalez, Av. Balmaceda 1971, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Automotora Gonzalez, Av. Balmaceda 1971, Curicó, Maule, Chile',
)}&output=embed`

export const FACEBOOK_URL =
  'https://www.facebook.com/AUTOMOTORA-GONZALEZ-770911349611677/'

export const INSTAGRAM_URL = 'https://www.instagram.com/automotora.gonzalez/'

// Horario real de la ficha de Google Maps
export const HOURS = [
  { d: 'Lunes a viernes', h: '9:00 – 13:00 y 15:00 – 19:00' },
  { d: 'Sábado', h: '9:00 – 13:00' },
  { d: 'Domingo', h: 'Cerrado' },
]

export const IMG = '/demos/automotora-gonzalez'
