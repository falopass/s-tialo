/**
 * app/demos/clinica-dental-bilbao-urgencias-dentales-curico-/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, sep 2026):
 * nombre, dirección (Manuel Montt 357, oficina 718, Edificio Montt),
 * WhatsApp, 5.0 estrellas con 45 reseñas, abierto 24 horas los 7 días
 * e Instagram @bilbaoclinicadental (965 seguidores). Servicios,
 * precios y textos de secciones son de muestra; las reseñas citadas
 * son reales de la ficha de Google.
 */

export const BIZ = {
  name: 'Clínica Dental Bilbao',
  short: 'Dental Bilbao',
  rubro: 'Dentista y urgencias dentales',
  address: 'Manuel Montt 357, oficina 718',
  building: 'Edificio Montt',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 2029 9944',
  phoneTel: '+56920299944',
  whatsapp: '56920299944',
  rating: '5,0',
  reviews: 45,
  hours: 'Abierto 24 horas, todos los días',
  instagram: 'bilbaoclinicadental',
  instagramFollowers: 965,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Clínica Dental Bilbao y quiero agendar una hora',
)}`

export const WA_LINK_URGENCIA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, tengo una urgencia dental y necesito atención',
)}`

export const IG_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica Dental Bilbao, Manuel Montt 357, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Manuel Montt 357, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/clinica-dental-bilbao-urgencias-dentales-curico-'
