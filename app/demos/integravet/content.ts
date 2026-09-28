/**
 * app/demos/integravet/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + Facebook
 * oficial @clinicaveterinariaintegravet): nombre, dirección, WhatsApp,
 * horario 24 h, rating/reseñas, servicios (FB: consultas, cirugías,
 * urgencias, artículos de mascotas; esterilización confirmada en
 * reseñas) y las reseñas citadas son textos reales de Google.
 */

export const BIZ = {
  name: 'Clínica Veterinaria Integravet',
  short: 'Integravet',
  rubro: 'Clínica veterinaria',
  address: '32 Sur 787, Villa Pucará',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7832 8303',
  phoneTel: '+56978328303',
  whatsapp: '56978328303',
  rating: 4.3,
  ratingLabel: '4,3',
  reviews: 1056,
  reviewsLabel: '1.056',
  facebook: 'clinicaveterinariaintegravet',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Clínica Veterinaria Integravet y quiero agendar una consulta',
)}`

export const WA_LINK_URGENCIA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, tengo una urgencia con mi mascota en Talca, ¿pueden atender ahora?',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica Veterinaria Integravet, 32 Sur 787, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Clínica Veterinaria Integravet, 32 Sur 787, Talca, Chile',
)}&output=embed`

export const FACEBOOK_URL = 'https://www.facebook.com/clinicaveterinariaintegravet/'

export const IMG = '/demos/integravet'
