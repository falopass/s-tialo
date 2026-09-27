/**
 * app/demos/clinica-veterinaria-docpino/content.ts
 *
 * Datos del mockup. REALES (ficha pública y redes del negocio):
 * nombre, dirección, comuna, las 144 reseñas de Google Maps, el
 * Facebook y el WhatsApp. Todo lo demás (servicios, horarios,
 * precios y reseñas) es contenido de muestra para mostrar cómo
 * se vería el sitio.
 */

export const BIZ = {
  name: 'Clínica Veterinaria Docpino',
  short: 'Vet. Docpino',
  rubro: 'Clínica veterinaria',
  address: 'Diputado Mario Dueñas 698',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6393 6006',
  phoneTel: '+56963936006',
  whatsapp: '56963936006',
  reviews: 144,
  facebook: 'https://www.facebook.com/veterinarioLinare/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Clínica Veterinaria Docpino y quiero agendar una hora',
)}`

export const WA_LINK_URGENCIA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, tengo una urgencia con mi mascota, ¿me pueden atender?',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica Veterinaria Docpino, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Clínica Veterinaria Docpino, Diputado Mario Dueñas 698, Linares, Chile',
)}&output=embed`

export const IMG = '/demos/clinica-veterinaria-docpino'
