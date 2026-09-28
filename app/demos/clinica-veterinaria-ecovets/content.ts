/**
 * app/demos/clinica-veterinaria-ecovets/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, Facebook
 * Clinica.Veterinaria.ECOVETS e Instagram @clinica_ecovets):
 * nombre, dirección, teléfonos, atención 24 horas, los servicios de
 * sus propios flyers y las reseñas citadas. El resto del texto es
 * contenido de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Clínica Veterinaria Ecovets',
  short: 'Ecovets',
  rubro: 'Clínica veterinaria',
  address: 'Gamero 151',
  city: 'Rancagua',
  region: "Región de O'Higgins",
  phoneDisplay: '+56 2 2357 7853',
  phoneTel: '+56223577853',
  whatsappDisplay: '+56 9 8313 6732',
  whatsapp: '56983136732',
  rating: 4.2,
  reviews: 206,
  instagram: 'https://www.instagram.com/clinica_ecovets',
  facebook: 'https://www.facebook.com/Clinica.Veterinaria.ECOVETS',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, tengo una urgencia con mi mascota',
)}`

export const WA_LINK_HORA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero agendar una consulta veterinaria',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica Veterinaria Ecovets, Gamero 151, Rancagua, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Clínica Veterinaria Ecovets, Gamero 151, Rancagua, Chile',
)}&output=embed`

export const IMG = '/demos/clinica-veterinaria-ecovets'
