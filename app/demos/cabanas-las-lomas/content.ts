/**
 * app/demos/cabanas-las-lomas/content.ts
 *
 * Datos del mockup. REALES (de cabanaslaslomas.cl): nombre, dirección
 * (Parcelación 31 A 6, Las Lomas Norte, San Clemente), WhatsApp
 * (+56 9 9776 1672), correo, cabañas Don Gustavo (3p) y Doña Ángela
 * (4p) con sus tarifas publicadas, check-in 15:00 / check-out 12:00,
 * restobar Café al Paso, Pub La Taverna (vie/sáb/festivos desde las
 * 19:00), piscina familiar, políticas (sin mascotas, no fumar) y la
 * ruta de acceso por Ruta 5/Camarico. De las reseñas de Google citadas
 * por directorios: “sus dueños son un 10” y “excelente anfitriona”.
 * Instagram y Facebook: @cabanas.laslomas.
 */

export const BIZ = {
  name: 'Cabañas Las Lomas',
  short: 'Las Lomas',
  rubro: 'Cabañas, restobar y pub',
  address: 'Parcelación 31 A 6, Las Lomas Norte',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9776 1672',
  phoneTel: '+56997761672',
  whatsapp: '56997761672',
  email: 'info@cabanaslaslomas.cl',
  site: 'cabanaslaslomas.cl',
  igHandle: '@cabanas.laslomas',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas Las Lomas y quiero consultar',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cabaña en Las Lomas, San Clemente',
)}`

export const IG_URL = 'https://www.instagram.com/cabanas.laslomas/'
export const FB_URL = 'https://www.facebook.com/cabanas.laslomas'
export const SITE_URL = `https://${BIZ.site}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Las Lomas, Las Lomas Norte, San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Las Lomas, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanas-las-lomas'
