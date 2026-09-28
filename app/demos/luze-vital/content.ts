/**
 * app/demos/luze-vital/content.ts
 *
 * Datos del demo. REALES (ficha de Google Maps + Instagram @luzevital_arica):
 * nombre, dirección (Marcos Maturana 2484, Arica), WhatsApp, rating 5.0/21
 * reseñas, horario completo (mar–sáb 9:00–19:30; dom y lun cerrado), giro
 * "Centro de estética integral" (así dice el letrero). Servicios citados en
 * reseñas reales: manicura (Angélica) y podología (Luz). Las reseñas citadas
 * son textos reales de Google Maps. Lo no confirmado, se omite.
 */

export const BIZ = {
  name: 'LUZE VITAL',
  short: 'Luze Vital',
  rubro: 'Centro de estética integral',
  city: 'Arica',
  region: 'Región de Arica y Parinacota',
  address: 'Marcos Maturana 2484',
  phoneDisplay: '+56 9 6371 5897',
  whatsapp: '56963715897',
  instagram: 'luzevital_arica',
  rating: '5,0',
  reviewsCount: '21',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Luze Vital, vi su página y quiero agendar una hora',
)}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'LUZE VITAL, Marcos Maturana 2484, Arica, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Marcos Maturana 2484, Arica, Chile',
)}&output=embed`

export const IMG = '/demos/luze-vital'

export const HORARIO = [
  { dia: 'Martes a sábado', horas: '9:00–19:30' },
  { dia: 'Domingo y lunes', horas: 'Cerrado' },
] as const

/** Lo que el negocio sí comunica: letrero + reseñas que nombran el servicio. */
export const SERVICIOS = [
  {
    name: 'Manicura',
    desc: 'Cuidado de manos y uñas. En las reseñas nombran a Angélica por su manicura.',
    img: 'manicura',
    alt: 'Manicura terminada de Luze Vital: uñas francesas junto a flores rosadas',
  },
  {
    name: 'Podología',
    desc: 'Atención podológica: la podóloga Luz es descrita como muy cuidadosa y minuciosa.',
    img: 'sillon',
    alt: 'Sillón de atención dentro del centro de estética Luze Vital',
  },
  {
    name: 'Estética integral',
    desc: 'Así dice el letrero del local: un centro pensado para la relajación completa.',
    img: 'sala',
    alt: 'Sala de espera de Luze Vital con sofás y luz natural',
  },
] as const

/** Citas reales de reseñas de Google Maps (5,0 sobre 21 reseñas). */
export const RESENAS = [
  {
    nombre: 'Catalina Peláez Martínez',
    cuando: 'hace 8 meses',
    texto: 'Excelente atención, lugar acogedor y bueno para la relajación.',
  },
  {
    nombre: 'Vania Ramírez',
    cuando: 'hace 4 años',
    texto:
      'Excelente servicio de manicura con Angélica y la podóloga Luz, muy cuidadosa y minuciosa con su trabajo.',
  },
  {
    nombre: 'Marcela Gutiérrez',
    cuando: 'hace 2 años',
    texto:
      'Me encanta. Lugar de relajamiento: es un spa muy completo y una atención muy buena. Lo recomiendo.',
  },
  {
    nombre: 'Sandra Armijo',
    cuando: 'hace 2 años',
    texto: 'Excelente atención, profesional de primera.',
  },
] as const
