/**
 * app/demos/sal-n-de-belleza-fran-serras-diaz-ma/content.ts
 *
 * Datos del mockup. REALES y verificados el 28-09-2026 en la ficha de
 * Google Maps "Salón de Belleza Fran Serras Diaz✨️" (categoría
 * estilista, 5.0 estrellas con 48 reseñas, teléfono 9 9741 5916,
 * abierto hasta las 19:00) y en el listado público masajess.cl
 * ("Salón Estilista Máster Alisados Profesional Fran Serras", mismo
 * teléfono, Talca). La ficha no publica calle — solo comuna de Talca —
 * así que la ubicación se muestra como Talca y el mapa apunta a la
 * ficha. No se encontró Instagram/Facebook oficial confirmado: las
 * fotos usadas son las que la propia ficha de Google publica del salón
 * (interior, alisados, manicure, pedicure y lifting de pestañas). Sin
 * precios publicados: solo agenda por WhatsApp.
 */

export const BIZ = {
  name: 'Salón de Belleza Fran Serras Díaz',
  short: 'Fran Serras',
  tagline: 'estilismo, uñas y pestañas',
  rubro: 'Salón de belleza',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9741 5916',
  phoneTel: '+56997415916',
  whatsapp: '56997415916',
  rating: '5.0',
  reviews: 48,
  horario: 'Lun 8:30-19:00 según Google · confirma tu hora por WhatsApp',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Fran, vi la página del salón y quiero agendar una hora',
)}`

export const waServicio = (servicio: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola Fran, vi la página del salón y quiero consultar por ${servicio}`,
  )}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Salón de Belleza Fran Serras Diaz, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Salón de Belleza Fran Serras Diaz, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/sal-n-de-belleza-fran-serras-diaz-ma'
