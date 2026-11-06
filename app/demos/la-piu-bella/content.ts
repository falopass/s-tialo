/**
 * app/demos/la-piu-bella/content.ts
 *
 * Datos del mockup. REALES (verificados el 6-11-2026 en la ficha de
 * Google Maps «La Piú Bella», Los Ángeles, y en Instagram @piubella_la):
 * - Nombre «La Piú Bella by Luis Ranieri», tal como aparece en su logo
 *   y en el letrero luminoso del salón.
 * - Dirección San Martín 596, Los Ángeles, y horario (lunes a viernes
 *   9:30-19:00, sábado 10:00-17:00, domingo cerrado): ficha de Maps.
 * - WhatsApp +56 9 7977 0095 e Instagram @piubella_la (más de 13 mil
 *   seguidores): perfil de Instagram del salón.
 * - 5,0 con 197 opiniones en Google; las citas de Ximena M. y Rosita L.
 *   de la sección de opiniones son textuales de esa ficha.
 * - Especialidades (balayage, color, rubios con Redken Shades EQ,
 *   canas luminosas, morenas iluminadas, cortes, peinados, maquillaje,
 *   masajes capilares, tratamientos Kérastase y Fusio-Dose, uñas), las
 *   marcas Redken, L'Oréal Professionnel y Kérastase, el manifiesto
 *   «Tú como cliente eres más que un pelo bonito», las frases del salón,
 *   el concepto ecológico junto a L'Oréal (#ForTheFuture) y el punto de
 *   recolección de cabello para pelucas de niños con cáncer: publicaciones
 *   del propio salón en Instagram.
 * DE MUESTRA: titulares de sección, bajadas y textos de apoyo.
 */

export const BIZ = {
  name: 'La Piú Bella',
  by: 'by Luis Ranieri',
  rubro: 'Peluquería',
  address: 'San Martín 596',
  city: 'Los Ángeles',
  region: 'Región del Biobío',
  phoneDisplay: '+56 9 7977 0095',
  phoneTel: '+56979770095',
  whatsapp: '56979770095',
  rating: '5,0',
  ratingValue: 5,
  reviews: 197,
  instagram: 'https://www.instagram.com/piubella_la/',
  igHandle: '@piubella_la',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola La Piú Bella, quiero reservar una hora',
)}`

export const waServicio = (servicio: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola La Piú Bella, quiero reservar una hora para ${servicio}`,
  )}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'La Piú Bella, San Martín 596, Los Ángeles, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'La Piú Bella, San Martín 596, Los Ángeles, Chile',
)}&output=embed`

export const IMG = '/demos/la-piu-bella'

export const HORARIO = [
  { d: 'Lunes a viernes', h: '9:30–19:00' },
  { d: 'Sábado', h: '10:00–17:00' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

export const REVIEWS = [
  {
    text: '¡Excelente salón! Sin duda, La Piu Bella es el mejor lugar para todo tipo de trabajos. Se nota la dedicación, el profesionalismo y el cariño en cada detalle. Siempre quedo feliz con el resultado y la atención es maravillosa.',
    author: 'Ximena M.',
    fuente: 'Local Guide en Google',
  },
  {
    text: 'Feliz con Piu Bella. Wolgfang es el mejor peluquero, seco y muy profesional. Estoy fascinada con el resultado. ¡Totalmente recomendado!',
    author: 'Rosita L.',
    fuente: 'Reseña de Google',
  },
] as const
