/**
 * app/demos/peluqueria-fran-wartemberg/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro, dirección (Matilde Pérez
 * 2268, Curicó) y WhatsApp +56 9 7332 8096 (ficha de Google Maps),
 * 30 reseñas con nota 4.7 en Google, la página de Facebook
 * (/peluqueriafranwartemberg) e Instagram (@pelu_franwartemberg,
 * confirmado en la foto de perfil de Facebook). Las fotos y el logo
 * son de la ficha de Google Maps del local; los precios vienen de su
 * página de reservas en AgendaPro. Los textos de apoyo (titulares,
 * FAQ) son de muestra.
 */

export const BIZ = {
  name: 'Peluquería Fran Wartemberg',
  short: 'Fran Wartemberg',
  rubro: 'Peluquería',
  address: 'Matilde Pérez 2268',
  city: 'Curicó',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7332 8096',
  phoneTel: '+56973328096',
  whatsapp: '56973328096',
  reviews: 30,
  rating: '4,7',
  followers: '1.474',
  facebook: 'https://www.facebook.com/peluqueriafranwartemberg/',
  instagram: 'https://www.instagram.com/pelu_franwartemberg/',
  agendapro: 'https://agendapro.com/mp/cl/pl/peluqueria-fran-wartemberg-curico/34837',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Peluquería Fran Wartemberg y quiero agendar una hora',
)}`

export const WA_LINK_SERVICIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Peluquería Fran Wartemberg y quiero consultar por un servicio',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Peluquería Fran Wartemberg, Matilde Pérez 2268, Curicó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Peluquería Fran Wartemberg, Matilde Pérez 2268, Curicó, Chile',
)}&output=embed`

export const IMG = '/demos/peluqueria-fran-wartemberg'
