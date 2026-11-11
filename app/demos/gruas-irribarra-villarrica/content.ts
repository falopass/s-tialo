/**
 * app/demos/gruas-irribarra-villarrica/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps, 11-11-2026): nombre,
 * categoría (taller mecánico), dirección (Sector Putúe Alto, camino a
 * Rinconada, Villarrica), teléfono, horario (todos los días de 9:00 a
 * 19:00), rating 4,8 con 6 opiniones y los textos de las opiniones citadas.
 * Fotos: todas de la ficha de Maps del negocio. No hay lista de servicios
 * ni precios públicos: el sitio solo nombra grúa y mecánica, como el
 * nombre del negocio, y deriva todo lo demás a WhatsApp o llamada.
 */

export const BIZ = {
  name: 'Grúas Irribarra y mecánico automotriz',
  short: 'Grúas Irribarra',
  rubro: 'Grúa y taller mecánico',
  address: 'Sector Putúe Alto, camino a Rinconada',
  city: 'Villarrica',
  region: 'Región de La Araucanía',
  phoneDisplay: '+56 9 9798 2037',
  phoneTel: '+56997982037',
  whatsapp: '56997982037',
  rating: '4,8',
  ratingValue: 4.8,
  reviews: 6,
  horario: 'Todos los días, de 9:00 a 19:00',
} as const

export const OPINIONES = [
  { autor: 'Amado Riquelme', texto: 'Excelente servicio. Siempre está muy dispuesto a ayudar. Muy buen trato.' },
  { autor: 'Diego Soto', texto: 'Excelente trato y mecánico consciente.' },
  { autor: 'Lidia Antio', texto: 'Un muy buen mecánico, un 7,0.' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Grúas Irribarra y necesito una consulta',
)}`

export const WA_GRUA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Grúas Irribarra y necesito una grúa. Estoy en: ',
)}`

export const WA_TALLER = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Grúas Irribarra y quiero agendar una revisión de mi auto',
)}`

// URL real de la ficha (leída el 11-11-2026).
export const MAPS_URL =
  'https://www.google.com/maps/place/Gr%C3%BAas+Irribarra+y+mec%C3%A1nico+automotriz/@-39.2408166,-72.3164186,17z/data=!4m6!3m5!1s0x96148bdb8f7ff92f:0x1352754d5a932c60!8m2!3d-39.2408166!4d-72.3164186'

export const MAPS_EMBED = 'https://www.google.com/maps?q=-39.2408166,-72.3164186&z=15&output=embed'

export const IMG = '/demos/gruas-irribarra-villarrica'
