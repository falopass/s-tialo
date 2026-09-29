/**
 * app/demos/cabanaslomasdesol/content.ts
 *
 * Datos del mockup. REALES, verificados en el Registro Nacional de
 * Turismo SERNATUR (inscripción N° 18.656, «Cabañas Lomas de Sol»):
 * ubicación Pasaje Mallicura S/N, localidad Las Lomas, Pelluhue;
 * titular Jaime Beltrán; el conjunto funciona con 9 paneles solares
 * y baterías (más del 90% de ahorro eléctrico, según prensa local) y
 * cuenta con Sello R de SERNATUR (2022). Teléfono/WhatsApp: el
 * entregado por el cliente +56 9 7668 6728 (en SERNATUR figura el
 * 6669 como alternativo). No tiene ficha de Google Maps ni redes
 * verificables: las escenas de la página son bosquejos marcados y
 * se reemplazan por fotos reales al activar el sitio.
 */

export const BIZ = {
  name: 'Cabañas Lomas de Sol',
  short: 'Lomas de Sol',
  rubro: 'Cabañas solares',
  address: 'Pasaje Mallicura S/N, Las Lomas',
  city: 'Pelluhue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7668 6728',
  phoneTel: '+56976686728',
  whatsapp: '56976686728',
  sernatur: '18.656',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Cabañas Lomas de Sol, vi su página y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cabaña en Cabañas Lomas de Sol, Pelluhue',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Lomas de Sol, Las Lomas, Pelluhue, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pasaje Mallicura, Las Lomas, Pelluhue, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanaslomasdesol'
