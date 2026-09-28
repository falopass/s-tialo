export const BIZ = {
  name: 'Atenea Salón Spa',
  short: 'Atenea',
  tagline: 'El rincón de regaloneo de Molina',
  rubro: 'Centro de estética',
  address: 'Av. Sur 1426',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5003 7906',
  phoneTel: '+56950037906',
  whatsapp: '56950037906',
  instagram: 'marcia_cavieres',
  facebook: 'AteneaSalon',
  rating: '5,0',
  reviews: 6,
  duena: 'Marcia Cavieres',
  horario: [
    { dias: 'Lunes a sábado', horas: '11:00 – 20:00' },
    { dias: 'Domingo', horas: '9:00 – 15:00' },
  ],
  sellos: ['Atendido por su dueña', '5,0 en Google', 'LGBTQ+ friendly'],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Atenea Salón y quiero agendar una hora'
)}`

export const waServicio = (servicio: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola, vi la página de Atenea Salón y quiero consultar por ${servicio}`
  )}`

export const IG_URL = `https://www.instagram.com/${BIZ.instagram}`
export const FB_URL = `https://www.facebook.com/${BIZ.facebook}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}, ${BIZ.city}`
)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BIZ.address}, ${BIZ.city}, Chile`
)}&output=embed`

export const IMG = '/demos/atenea-salon'

// Precios reales publicados por el salón en su ficha de Google Maps
export const CARTA = [
  {
    grupo: 'Uñas',
    items: [
      { servicio: 'Esmalte', precio: '$8.000', nota: 'manos' },
      { servicio: 'Polygel', precio: '$15.000', nota: 'set completo' },
      { servicio: 'Acrílicas', precio: '$20.000', nota: 'set completo' },
    ],
  },
  {
    grupo: 'Cabello',
    items: [
      { servicio: 'Extensiones', precio: '$180.000', nota: '100% naturales, antes $250.000' },
      { servicio: 'Decoloración', precio: 'desde $20.000', nota: 'cabello hasta el hombro' },
      { servicio: 'Alisado', precio: 'a consultar', nota: 'según largo' },
    ],
  },
  {
    grupo: 'Cuerpo & spa',
    items: [
      { servicio: 'Parafinoterapia', precio: '$5.000', nota: 'por zona' },
      { servicio: 'Lipo láser', precio: '$199.990', nota: '10 sesiones · 1 zona a elección' },
      { servicio: 'Masajes', precio: 'a consultar', nota: 'agenda por WhatsApp' },
    ],
  },
] as const

export const RESENAS = [
  {
    texto:
      'Cuando he ido me atiende su propia dueña, muy amable, súper profesional y muy carismática con mis niños. 100% recomendable.',
    autor: 'Lorena Díaz',
    detalle: 'Reseña de Google',
  },
  {
    texto:
      'Maravillosa atención, me encantan sus servicios de spa, masajes, uñas, extensiones y sobre todo la atención de su personal, muy profesional.',
    autor: 'Claudia Cavieres',
    detalle: 'Reseña de Google',
  },
  {
    texto:
      '¡Excelente servicio! Salí encantada, todos súper amables y profesionales. ¡Totalmente recomendado!',
    autor: 'Daniela Scarleth Peredo',
    detalle: 'Reseña de Google',
  },
  {
    texto:
      'El mejor lugar de Molina para regalonearnos, se agradece la buena atención, un 10/10. Aquí encuentro todo lo necesario.',
    autor: 'Ester Leiva',
    detalle: 'Reseña de Google',
  },
] as const
