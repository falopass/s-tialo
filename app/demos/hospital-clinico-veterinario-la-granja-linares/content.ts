/**
 * app/demos/hospital-clinico-veterinario-la-granja-linares/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram):
 * nombre, rubro, dirección en Colo Colo 1634 (Linares), WhatsApp, las
 * 143 reseñas de Google y los 1.913 seguidores de Instagram. Todo lo
 * demás (servicios, precios, horarios, reseñas citadas, fotos) es
 * contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Hospital Clínico Veterinario La Granja Linares',
  short: 'La Granja',
  rubro: 'Hospital clínico veterinario',
  address: 'Colo Colo 1634',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5050 6713',
  phoneTel: '+56950506713',
  whatsapp: '56950506713',
  reviews: 143,
  instagram: 'https://instagram.com/hcvlagranja',
  igFollowers: '1.913',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Hospital Veterinario La Granja y quiero agendar una hora',
)}`

export const WA_LINK_URGENCIA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, tengo una urgencia con mi mascota y necesito atención en La Granja',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Hospital Clínico Veterinario La Granja, Colo Colo 1634, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Colo Colo 1634, Linares, Chile',
)}&output=embed`

export const IMG = '/demos/hospital-clinico-veterinario-la-granja-linares'
