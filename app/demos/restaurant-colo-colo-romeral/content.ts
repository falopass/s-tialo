/**
 * app/demos/restaurant-colo-colo-romeral/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps, la carta
 * fotografiada del local, Instagram @plateadas_colo_colo_oficial y
 * prensa sobre el caso INAPI, 29-09-2026): nombre, dirección
 * (Av. Chile 1332, Romeral), teléfono, horarios, calificación 4,3 con
 * 1.672 reseñas, fundación en 1970, la plateada como plato insignia,
 * los precios de la carta real, la sucursal de Mall Curicó y las
 * reseñas citadas (incluido "pet friendly").
 */

export const BIZ = {
  name: 'Restaurant Colo Colo',
  short: 'Colo Colo',
  rubro: 'Restaurant · Cocina chilena',
  address: 'Av. Chile 1332',
  city: 'Romeral',
  region: 'Región del Maule',
  phoneDisplay: '+56 75 243 1036',
  phoneTel: '+56752431036',
  whatsapp: '56752431036',
  instagram: 'https://www.instagram.com/plateadas_colo_colo_oficial/',
  igUser: '@plateadas_colo_colo_oficial',
  hours: 'Lun a mié 12:00-20:00 · jue a sáb 12:00-22:00 · dom 12:00-18:00',
  since: '1970',
  rating: '4,3',
  reviews: '1.672',
  sucursal: 'También en Mall Curicó desde 2023',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurant Colo Colo y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurant Colo Colo y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurant Colo Colo, Av. Chile 1332, Romeral, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurant Colo Colo, Av. Chile 1332, Romeral, Chile',
)}&output=embed`

export const IMG = '/demos/restaurant-colo-colo-romeral'
