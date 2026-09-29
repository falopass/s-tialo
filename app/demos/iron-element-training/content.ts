/**
 * app/demos/iron-element-training/content.ts
 *
 * Datos del mockup. REALES y verificados (28-09-2026):
 * - Ficha de Google Maps «Iron element talca» (Gimnasio): dirección
 *   Calle 6 Oriente 820, Talca; teléfono/WhatsApp +56 9 7277 1791;
 *   horario Lun–Vie 7:00–23:00, Sáb 11:30–16:00, Dom 11:00–17:00;
 *   nota 4,9 con 26 opiniones.
 * - Instagram @ironelement_talca («IRON ELEMENT TRAINING® TALCA»):
 *   9.902 seguidores, 191 posts. De un post de marzo 2026 salen los
 *   planes reales «desde $24.990 hasta $44.990».
 * - Reseñas: texto real de la ficha de Google (autor, fecha y nota).
 * - Fotos: descargadas de la ficha de Maps del gimnasio; el logo es el
 *   casco espartano real del perfil. Sin imágenes generadas.
 */

export const BIZ = {
  name: 'Iron Element Training',
  legal: 'Iron Element Training Talca',
  short: 'Iron Element',
  rubro: 'Gimnasio',
  address: 'Calle 6 Oriente 820',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7277 1791',
  phoneTel: '+56972771791',
  whatsapp: '56972771791',
  instagram: 'https://www.instagram.com/ironelement_talca/',
  igUser: '@ironelement_talca',
  igFollowers: '9.902',
  rating: 4.9,
  reviews: 26,
  planDesde: '$24.990',
  planHasta: '$44.990',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Iron Element y quiero consultar por los planes',
)}`

export const WA_LINK_CLASE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Iron Element y quiero ir a probar una clase',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Iron element talca, Calle 6 Oriente 820, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Calle 6 Oriente 820, Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/iron-element-training'
