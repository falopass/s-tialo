/**
 * app/demos/estampa-tu-diseno/content.ts
 *
 * Datos del mockup. REALES (ficha pública + redes): nombre
 * (Estampa Tu Diseño), dirección (8 Oriente 1407, Talca),
 * WhatsApp +56 9 5136 5154, rating 4,3 con 12 reseñas en
 * Google Maps, horarios de la ficha (L-V 10:30-18:00, sábado
 * 10:30-14:00, domingo cerrado), Instagram @estampatudisenotalca
 * (perfil propio: el logo salpicadura y el WhatsApp del post
 * calzan con la ficha), Facebook Estampatupoleratalca.
 * Las fotos bajan de su ficha de Google Maps: fachada, taller
 * con plotter y rollo de vinilos, poleras y polerones
 * estampados.
 */

export const BIZ = {
  name: 'Estampa Tu Diseño',
  short: 'Estampa Tu Diseño',
  rubro: 'Tienda de camisetas personalizadas',
  address: '8 Oriente 1407',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5136 5154',
  phoneTel: '+56951365154',
  whatsapp: '56951365154',
  instagram: 'https://www.instagram.com/estampatudisenotalca',
  igUser: '@estampatudisenotalca',
  logo: '/demos/estampa-tu-diseno/logo.webp',
  rating: 4.3,
  reviews: 12,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Estampa Tu Diseño y quiero cotizar una polera',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Estampa tu diseño, 8 Oriente 1407, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '8 Oriente 1407, Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/estampa-tu-diseno'
