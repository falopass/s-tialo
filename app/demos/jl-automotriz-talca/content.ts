export const BIZ = {
  name: 'JL Automotriz',
  short: 'JL',
  rubro: 'Taller mecánico y pintura',
  address: '5 Norte 1175',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 9 5699 2425',
  whatsapp: '56956992425',
  reviews: '31',
  rating: '5,0',
  dueno: 'Luis',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola JL Automotriz, quiero agendar una hora para mi auto.',
)}`
export const WA_PINTURA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola JL Automotriz, quiero cotizar un trabajo de pintura.',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'JL automotriz, 5 Norte 1175, Talca',
)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '5 Norte 1175, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/jl-automotriz-talca'

export const SERVICIOS = [
  {
    n: '01',
    titulo: 'Diagnóstico y mecánica general',
    texto:
      'Llegas, describes el síntoma y Luis revisa el auto contigo: motor, frenos, suspensión y mantenciones.',
    tags: ['Motor', 'Frenos', 'Suspensión', 'Mantención'],
  },
  {
    n: '02',
    titulo: 'Pintura automotriz',
    texto:
      'Enmascarado, preparación y pintura de piezas o del auto completo, con acabado de taller.',
    tags: ['Enmascarado', 'Retoque', 'Piezas', 'Completo'],
  },
  {
    n: '03',
    titulo: 'Motos y camionetas',
    texto:
      'El taller también recibe motos y camionetas de trabajo: diagnóstico, mecánica y pintura.',
    tags: ['Motos', 'Camionetas', 'Utilitarios'],
  },
  {
    n: '04',
    titulo: 'Gestión de repuestos',
    texto:
      'Cotiza y te apoya en la compra de repuestos para que no pagues de más ni compres la pieza equivocada.',
    tags: ['Cotización', 'Repuestos', 'Asesoría'],
  },
] as const

// Horario publicado en Google Maps
export const HORARIO = [
  { dias: 'Lunes', horas: '9:00 – 24:00' },
  { dias: 'Martes', horas: '0:00 – 7:00 y 9:00 – 19:00' },
  { dias: 'Miércoles a viernes', horas: '9:30 – 19:00' },
  { dias: 'Sábado', horas: '9:30 – 14:00' },
  { dias: 'Domingo', horas: 'Cerrado' },
] as const

export const RESEÑAS = [
  {
    texto:
      'Excelente servicio! Profesional y objetivo. Llevé la camioneta y el diagnóstico fue exacto, solución inmediata y el mejor precio.',
    autor: 'Yannini Seijas',
    detalle: 'reseña de Google',
  },
  {
    texto:
      'Muy profesional Luis!! De verdad muy sincero al momento de diagnosticar, me cotizó y apoyó para la compra de repuestos, comunicación fluida y entrega a tiempo!!',
    autor: 'Javiera Hernández',
    detalle: 'reseña de Google',
  },
  {
    texto: 'Excelente servicio. Rápida y buena atención.',
    autor: 'Mario Faúndez Morales',
    detalle: 'reseña de Google',
  },
] as const
