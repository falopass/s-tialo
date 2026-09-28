/**
 * app/demos/issa-bella-spa-centro-de-estetica/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps e Instagram
 * @issa_bella.spa): nombre, dirección en Sarajevo 1576, Curicó,
 * WhatsApp, Instagram (667 seguidores), nota 4,5 en 8 reseñas con
 * las citas reales, horario (Lu-Vi 9:00-21:30, Sá 10:00-19:00), logo
 * y fotos (Maps + posts de IG). Servicios tomados de los afiches que
 * el centro publica; los precios siguen siendo de muestra.
 */

export const BIZ = {
  name: 'Issa-bella SpA centro de Estética',
  short: 'Issa·bella',
  rubro: 'Esteticista facial',
  address: 'Sarajevo 1576, 3340001',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7797 4940',
  phoneTel: '+56977974940',
  whatsapp: '56977974940',
  instagram:
    'https://www.instagram.com/issa_bella.spa?igsh=MWNqYmZvejRtdmZzbQ==',
  instagramHandle: '@issa_bella.spa',
  followers: 667,
  reviews: 8,
  rating: 4.5,
  ratingLabel: '4,5',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Issa-bella y quiero agendar una hora',
)}`

export const WA_LINK_FACIAL = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Issa-bella y quiero consultar por una limpieza facial',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Issa-bella SpA centro de Estética, Sarajevo 1576, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Issa-bella SpA centro de Estética, Sarajevo 1576, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/issa-bella-spa-centro-de-estetica'
