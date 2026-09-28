/**
 * app/demos/cool-service-talca/content.ts
 *
 * Datos del mockup. REALES: nombre (Cool Service Talca, ficha de Google
 * Maps y su Instagram @coolservicetalca), rubro ("Ventas de repuestos e
 * insumos de refrigeración comercial e industrial, electricidad y
 * ferretero", según el letrero del local), dirección (5 Sur 1790, Talca),
 * teléfono/WhatsApp, horario (L–V 9–19, sábado 9–14, domingo cerrado),
 * calificación 5,0 en 7 reseñas y las reseñas citadas. Las marcas son las
 * que se ven en las fotos reales del local y sus publicaciones.
 */

export const BIZ = {
  name: 'Cool Service Talca',
  short: 'Cool Service',
  rubro: 'Repuestos de refrigeración',
  address: '5 Sur 1790, Talca',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5147 0208',
  phoneTel: '+56951470208',
  whatsapp: '56951470208',
  instagram: 'https://www.instagram.com/coolservicetalca/',
  rating: '5,0',
  reviews: 7,
  hours: [
    ['Lunes a viernes', '9:00 – 19:00'],
    ['Sábado', '9:00 – 14:00'],
    ['Domingo', 'Cerrado'],
  ],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cool Service Talca y busco un repuesto de refrigeración',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cool Service Talca, 5 Sur 1790, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cool Service Talca, 5 Sur 1790, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/cool-service-talca'
