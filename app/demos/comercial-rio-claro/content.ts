/**
 * app/demos/comercial-rio-claro/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * rubro, dirección (Av. Ignacio Carrera Pinto 088, Talca), WhatsApp,
 * Instagram @comercial.rioclaro, horario (L–V 9:00–18:00, sábado
 * 9:00–13:00, domingo cerrado), 5,0 estrellas con 3 reseñas y los
 * textos de esas reseñas. Los productos citados corresponden a lo
 * que se ve en las fotos del propio negocio (Winkler, CleanCarrier,
 * Ovella). Precios: se cotizan por WhatsApp.
 */

export const BIZ = {
  name: 'Comercial Río Claro',
  rubro: 'Mayorista de artículos para la higiene',
  address: 'Av. Ignacio Carrera Pinto 088',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8833 2424',
  whatsapp: '56988332424',
  instagram: 'comercial.rioclaro',
  rating: '5,0',
  reviewsCount: 3,
} as const

export const HORARIO = [
  { days: 'Lunes a viernes', time: '9:00 a 18:00' },
  { days: 'Sábado', time: '9:00 a 13:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

export const REVIEWS = [
  {
    name: 'José Leiva Cortez',
    when: 'Hace 5 meses',
    stars: 5,
    text: 'Encontré todo lo que necesitaba y con un excelente precio, recomendado.',
  },
  {
    name: 'Javier Rebolledo Izeta',
    when: '',
    stars: 5,
    text: 'Buenos productos y muy buena atención, recomendable.',
  },
  {
    name: 'Pía Loreto Peña Esparza',
    when: '',
    stars: 5,
    text: '',
  },
]

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Comercial Río Claro y quiero cotizar',
)}`

export const waLinkLinea = (linea: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola, vi la página de Comercial Río Claro y quiero cotizar: ${linea}`,
  )}`

export const IG_URL = 'https://www.instagram.com/comercial.rioclaro'

// Link por CID: resuelve siempre a esta ficha.
export const MAPS_URL = 'https://www.google.com/maps?cid=0x911d9b05e4a41e5a'

// Por nombre: abre la ficha del negocio con su pin en Carrera Pinto.
export const MAPS_EMBED =
  'https://www.google.com/maps?q=Comercial%20R%C3%ADo%20Claro%20Talca&z=16&hl=es&output=embed'

export const IMG = '/demos/comercial-rio-claro'

export const C = {
  forest: '#1E3D2F',
  deep: '#132318',
  crema: '#F6F1E7',
  brass: '#C8A24B',
  brassSoft: '#E9D9AE',
  brassInk: '#7A5E1E',
  ink: '#26282C',
  muted: '#5E5A4F',
  line: 'rgba(38,40,44,0.16)',
  card: '#FCF9F1',
} as const
