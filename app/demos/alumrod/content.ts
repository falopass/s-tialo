/**
 * app/demos/alumrod/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Nombre, dirección, teléfono/WhatsApp, horario (Lun–Vie 9–19),
 *   nota 4,6★ y 10 reseñas: ficha pública de Google Maps.
 * - Reseñas citadas: textos originales en español de su ficha de Google.
 * - Fotos en /demos/alumrod: subidas por el negocio a su ficha de
 *   Google y a su Instagram público @alumrodaluminios.
 * - Instagram: instagram.com/alumrodaluminios (bio: «Alumrod
 *   72220193 - 995374432» — coincide con el WhatsApp).
 * Textos de secciones (servicios descritos, pasos) son de muestra,
 * basados en lo que muestran sus fotos y publicaciones.
 */

export const BIZ = {
  name: 'Aluminios Alumrod',
  short: 'Alumrod',
  rubro: 'Aluminio, vidrios y termopanel',
  address: 'Diez Oriente 1712, esq. Calle 6 Norte',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9537 4432',
  phoneTel: '+56995374432',
  whatsapp: '56995374432',
  rating: '4,6',
  reviews: 10,
  instagram: 'https://www.instagram.com/alumrodaluminios/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Aluminios Alumrod y quiero cotizar un trabajo de aluminio o vidrio',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Aluminios alumrod, Diez Oriente 1712, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Diez Oriente 1712, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/alumrod'
