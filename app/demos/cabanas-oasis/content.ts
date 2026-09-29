/**
 * app/demos/cabanas-oasis/content.ts
 *
 * Datos REALES de la ficha de Google Maps de Cabañas Oasis
 * (Río Claro, Molina, Maule — km 14,2 del camino a Radal Siete Tazas):
 * nombre, dirección, WhatsApp (+56 9 8800 6222), rating 4,9 con 60
 * reseñas, amenidades mencionadas por las visitas (bajada al río,
 * piscina en verano, tinajas, pool/ping pong, quincho, jardín) y las
 * reseñas citadas (nombre + fecha + texto en español original).
 * El perfil no publica tarifas ni horario: se omiten. Tampoco tiene
 * logo: el nombre y las fotos reales hacen de marca.
 * Las frases descriptivas de cada hito son de muestra para mostrar el
 * formato; se reemplazan por las del negocio al activar.
 */

export const BIZ = {
  name: 'Cabañas Oasis',
  short: 'Oasis',
  rubro: 'Cabañas y hospedaje',
  address: 'Camino a Radal, km 14,2',
  city: 'Río Claro, Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8800 6222',
  phoneTel: '+56988006222',
  whatsapp: '56988006222',
  rating: 4.9,
  reviews: 60,
  fbUrl: 'https://www.facebook.com/profile.php?id=100088903127046',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas Oasis y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cabaña en Cabañas Oasis, Río Claro',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Oasis, Río Claro, Molina, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Oasis, Río Claro, Molina, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanas-oasis'
