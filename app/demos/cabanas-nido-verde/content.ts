/**
 * app/demos/cabanas-nido-verde/content.ts
 *
 * Datos verificados en la ficha de Google Maps y el flyer oficial del
 * negocio (@nidoverdetalca): nombre, dirección K-511 (camino a Alto
 * Lircay), WhatsApp, nota 5.0 con 1 reseña y las amenidades que el flyer
 * publica (piscina, quincho, salón de eventos, área infantil, camas con
 * cuarzo). No hay tarifas públicas: se omite precio.
 */

export const BIZ = {
  name: 'Cabañas Nido Verde',
  short: 'Nido Verde',
  rubro: 'Cabañas equipadas',
  address: 'Ruta K-511, camino a Alto Lircay, Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9784 0948',
  phoneTel: '+56997840948',
  whatsapp: '56997840948',
  rating: 5.0,
  reviews: 1,
  igHandle: '@nidoverdetalca',
  fbHandle: 'nidoverde',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas Nido Verde y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cabaña en Nido Verde, camino a Alto Lircay',
)}`

export const IG_URL = 'https://instagram.com/nidoverdetalca'
export const FB_URL = 'https://facebook.com/nidoverde'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Nido Verde, Talca, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Nido Verde, K-511, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanas-nido-verde'
