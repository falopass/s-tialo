/**
 * app/demos/acai-city/content.ts
 *
 * Datos REALES verificados el 2026-09-28 en Google Maps
 * ("Acai City", Av. Lircay 2455, Loc 10, Talca): nombre,
 * dirección, teléfono (+56 9 4010 0250), rating 5,0 con 8
 * reseñas, horario (lun-sáb 10:30 a 20:30, dom 11:00 a 20:30)
 * y categoría "Heladería". Sin sitio web ni redes publicadas
 * en la ficha.
 * Fotos: las de la propia ficha de Maps (local, vaso, mural
 * de palma de açaí y barra de toppings).
 */

export const BIZ = {
  name: 'Acai City',
  short: 'Acai City',
  rubro: 'Açaí, pitaya y heladería',
  address: 'Av. Lircay 2455, Local 10',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4010 0250',
  phoneTel: '+56940100250',
  whatsapp: '56940100250',
  rating: 5.0,
  reviews: 8,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Acai City y quiero hacer un pedido',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Acai City, Av. Lircay 2455, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. Lircay 2455, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/acai-city'
