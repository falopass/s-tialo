/**
 * app/demos/veterinaria-ramadillas/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + Instagram
 * @cvramadillas): nombre, comuna, dirección en Av. Huamachuco, WhatsApp,
 * rating 4,6 con 27 reseñas, los servicios publicados en la fachada y en su
 * bio (consulta veterinaria, oftalmología clínica, farmacia veterinaria,
 * alimentos medicados), la vacunación antirrábica (reseñas reales), el nombre
 * del veterinario Felipe Valdés (dueño según registro y nombrado en reseñas)
 * y los medios de pago con tarjeta (stickers Transbank/Redcompra en la puerta).
 * El negocio NO publica horario: por eso el mockup invita a confirmarlo por
 * WhatsApp. Las frases de las secciones son de muestra para mostrar cómo se
 * vería el sitio.
 */

export const BIZ = {
  name: 'Clínica y Farmacia Veterinaria Ramadillas',
  short: 'Veterinaria Ramadillas',
  rubro: 'Clínica y farmacia veterinaria',
  city: 'San Clemente',
  region: 'Región del Maule',
  sector: 'Sector Ramadillas',
  address: 'Av. Huamachuco 1751',
  phoneDisplay: '+56 9 8515 5114',
  whatsapp: '56985155114',
  instagram: 'cvramadillas',
  rating: '4,6',
  googleReviews: '27',
  vet: 'Felipe Valdés',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de la Veterinaria Ramadillas y quiero consultar',
)}`

export const WA_LINK_URGENCIA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, tengo una urgencia con mi mascota. ¿Está atendiendo la Veterinaria Ramadillas?',
)}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clinica y farmacia veterinaria Ramadillas, Av. Huamachuco 1751, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Clinica y farmacia veterinaria Ramadillas, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/veterinaria-ramadillas'
