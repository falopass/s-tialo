/**
 * app/demos/barraca-de-madera-maderex/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps): nombre «Barraca de
 * Madera Maderex», categoría, dirección (Bajo Perquín, Ruta 115 SN,
 * San Clemente), teléfono +56 9 4147 1837, nota 4.9 con 58 reseñas,
 * horario y los textos de las reseñas. Los productos salen de los
 * letreros del propio local (fascia del galpón y cartel del portón,
 * visibles en las fotos de su ficha): palo bruto, tabla tapa, tabla
 * cielo, forro cabaña, vigas, pilares, molduras, tapacanes, tinglado,
 * OSB, terciado, tableros y revestimientos. No publica precios: se
 * cotiza por teléfono/WhatsApp.
 */

export const BIZ = {
  name: 'Barraca de Madera Maderex',
  short: 'Maderex',
  slogan: 'Madera de calidad al mejor precio',
  rubro: 'Barraca de madera',
  address: 'Bajo Perquín, Ruta 115 SN',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4147 1837',
  phoneTel: '+56941471837',
  whatsapp: '56941471837',
  rating: 4.9,
  reviews: 58,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Maderex y quiero cotizar una lista de materiales',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Barraca de Madera Maderex, Bajo Perquín, San Clemente',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Bajo Perquín, Ruta 115, San Clemente, Chile',
)}&output=embed`

/** Horario publicado en su ficha de Google */
export const HORARIO = [
  { dia: 'Lunes a viernes', hora: 'desde 9:00' },
  { dia: 'Sábado', hora: '9:00 a 16:00' },
  { dia: 'Domingo', hora: 'cerrado' },
]

/** Listado real, tal como sale en el rótulo del galpón y el cartel del portón */
export const PRODUCTOS = [
  {
    grupo: 'Madera gruesa',
    items: ['Palo bruto', 'Vigas', 'Pilares', 'Tabla tapa'],
  },
  {
    grupo: 'Forros y terminaciones',
    items: ['Forro cabaña', 'Tabla cielo', 'Molduras', 'Tapacanes'],
  },
  {
    grupo: 'Tableros',
    items: ['OSB', 'Terciado', 'Tinglado', 'Revestimientos'],
  },
]

/** Cadena del rótulo del galpón, para la franja corrida */
export const FASCIA = [
  'Palo bruto', 'Tabla tapa', 'Tabla cielo', 'Forro cabaña', 'Vigas',
  'Pilares', 'Molduras', 'Tapacanes', 'Tinglado', 'OSB', 'Terciado',
]

/** Reseñas reales de su ficha de Google (5 estrellas cada una) */
export const RESENAS = [
  {
    texto:
      'Excelente servicio y despachos muy eficientes. Compré madera con esta empresa y la experiencia fue impecable de principio a fin. La calidad de la madera es muy buena, bien seleccionada y en excelente estado.',
    autor: 'Colomba Caro',
    cuando: 'hace 7 meses',
  },
  {
    texto:
      'Muy buen servicio, variedad en madera, 100% recomendable. Muy amables en la atención y disposición para orientar en lo que es más recomendable comprar cuando uno tiene dudas.',
    autor: 'Elizabeth Hernandez Roca',
    cuando: 'hace 7 meses',
  },
  {
    texto:
      'El chico atiende muy bien, es muy amable y tienen buenos precios. Lo que no tienen, lo traen.',
    autor: 'Miguel Palavecinos',
    cuando: 'hace 7 meses',
  },
  {
    texto:
      'Excelentes productos y muy buena la atención, rápida y eficiente.',
    autor: 'César Godoy',
    cuando: 'hace 7 meses',
  },
  {
    texto: 'Excelente atención y buenos precios, recomendable.',
    autor: 'Diego Orellana Castillo',
    cuando: 'hace 5 meses',
  },
]

export const IMG = '/demos/barraca-de-madera-maderex'
