/**
 * app/demos/cabanas-lomas-de-sol/content.ts
 *
 * Datos del mockup. REALES (de lomasdesolpelluhue.cl, SERNATUR y prensa):
 * nombre, dirección (Sector El Torreón, camino a Curanipe, a 2 km de la
 * plaza de Pelluhue), WhatsApp/teléfono (+56 9 7668 6728), correo,
 * tarifas publicadas por cabaña, jacuzzi $50.000/sesión de 2 horas,
 * terapias $15.000–$25.000, piscina incluida, regla de música tras
 * medianoche y la historia de los paneles solares de Jaime Beltrán.
 * Las reseñas del bloque final son de muestra (marcadas): no se pudo
 * verificar un conteo de Google.
 */

export const BIZ = {
  name: 'Cabañas Lomas de Sol',
  short: 'Lomas de Sol',
  rubro: 'Cabañas y hospedaje',
  address: 'Sector El Torreón, camino a Curanipe',
  addressNote: 'A 2 km de la plaza de Pelluhue',
  city: 'Pelluhue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7668 6728',
  phoneTel: '+56976686728',
  whatsapp: '56976686728',
  email: 'jaimeytere@gmail.com',
  site: 'lomasdesolpelluhue.cl',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas Lomas de Sol y quiero consultar disponibilidad',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una cabaña en Lomas de Sol, Pelluhue',
)}`

export const SITE_URL = `https://www.${BIZ.site}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cabañas Lomas de Sol, El Torreón, Pelluhue, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Lomas de Sol, Pelluhue, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanas-lomas-de-sol'
