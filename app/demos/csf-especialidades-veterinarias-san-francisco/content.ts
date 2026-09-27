/**
 * app/demos/csf-especialidades-veterinarias-san-francisco/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram):
 * nombre, dirección, comuna, WhatsApp, las 170 reseñas de Google y los
 * 5.206 seguidores de Instagram. Todo lo demás (servicios, precios,
 * horarios y reseñas citadas) es contenido de muestra para mostrar
 * cómo se vería el sitio publicado.
 */

export const BIZ = {
  name: 'CSF Especialidades Veterinarias',
  short: 'CSF Veterinaria',
  rubro: 'Clínica veterinaria',
  sector: 'San Francisco',
  address: '4 Oriente 10, Calle 11 Nte. 2154',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6660 7772',
  phoneTel: '+56966607772',
  whatsapp: '56966607772',
  reviews: 170,
  followers: '5.206',
  instagram: 'https://www.instagram.com/clinicaveterinariacsf/?hl=es',
  instagramHandle: '@clinicaveterinariacsf',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de CSF Especialidades Veterinarias y quiero agendar una hora para mi mascota',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'CSF Especialidades Veterinarias, Calle 11 Norte 2154, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Calle 11 Norte 2154, Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/csf-especialidades-veterinarias-san-francisco'
