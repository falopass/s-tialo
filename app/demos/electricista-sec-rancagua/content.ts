/**
 * app/demos/electricista-sec-rancagua/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y Facebook):
 * - Nombre «Electricista certificado SEC Rancagua», rubro electricista.
 * - WhatsApp +56 9 6214 4947, el teléfono publicado en su ficha.
 * - Rating 5,0 con 5 opiniones en Google.
 * - Horario publicado en Maps: abierto 24 horas.
 * - Facebook público: enlace share/1BTmAAf7DP.
 * - No publica dirección: el sitio dice «Rancagua» y que la visita se
 *   coordina por WhatsApp. No hay fotos utilizables, toda la escena es
 *   CSS y SVG.
 * Todo lo demás (servicios y textos) es contenido de muestra para
 * mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Electricista certificado SEC Rancagua',
  short: 'SEC Rancagua',
  rubro: 'Electricista · instalaciones y certificaciones SEC',
  city: 'Rancagua',
  region: "Región de O'Higgins",
  phoneDisplay: '+56 9 6214 4947',
  phoneTel: '+56962144947',
  whatsapp: '56962144947',
  rating: 5.0,
  reviews: 5,
  hours: 'Abierto 24 horas',
} as const

export const waLink = (msg: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(msg)}`

export const WA_LINK = waLink(
  'Hola, vi la página de Electricista certificado SEC Rancagua y quiero cotizar un trabajo eléctrico',
)

export const WA_EMERGENCIA = waLink(
  'Hola, tengo una emergencia eléctrica en Rancagua y necesito un electricista',
)

export const FACEBOOK_URL = 'https://www.facebook.com/share/1BTmAAf7DP/'
