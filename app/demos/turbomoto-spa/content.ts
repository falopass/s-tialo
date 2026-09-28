export const BIZ = {
  name: 'TurboMoto',
  rubro: 'Repuestos y accesorios para motos',
  address: '4 Norte 1409',
  esquina: 'Alameda esquina 7 Oriente',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 9 4101 1732',
  whatsapp: '56941011732',
  reviews: '13',
  rating: '5,0',
  instagram: '@turbomoto_',
  instagramUrl: 'https://www.instagram.com/turbomoto_/',
  seguidoresIg: '1.886',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola TurboMoto, consulto por un repuesto para mi moto.',
)}`
export const WA_ENVIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola TurboMoto, quiero consultar por un envío a regiones.',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'TurboMoto, 4 Norte 1409, Talca',
)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '4 Norte 1409, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/turbomoto-spa'

// Categorías reales del letrero de la tienda
export const CATEGORIAS = [
  'Aceites y lubricantes',
  'Kit de transmisión',
  'Neumáticos',
  'Baterías',
  'Guantes',
  'Cascos',
] as const

export const ESTANTE = [
  { foto: 'neumaticos', nombre: 'Neumáticos', detalle: 'Medidas para calle, enduro y moto de trabajo' },
  { foto: 'cascos', nombre: 'Cascos', nombre2: 'y protección', detalle: 'Certificados, varias tallas y diseños' },
  { foto: 'aceites', nombre: 'Aceites', detalle: 'Mobil, Motul, Castrol y Repsol en stock' },
  { foto: 'vitrina', nombre: 'Luces y espejos', detalle: 'Focos LED, intermitentes y espejos' },
  { foto: 'protaper', nombre: 'Manubrios', detalle: 'ProTaper y comandos para tu moto' },
  { foto: 'muro', nombre: 'Indumentaria', detalle: 'Guantes, cascos y accesorios de ruta' },
] as const

export const HORARIO = [
  { dias: 'Lunes a viernes', horas: '9:30 – 19:00' },
  { dias: 'Sábado', horas: '10:00 – 16:00' },
  { dias: 'Domingo', horas: 'Cerrado' },
] as const

export const RESEÑAS = [
  {
    texto: 'Excelente local, muy buenos precios y muy buena atención.',
    autor: 'Cristian Rivas',
    detalle: 'reseña de Google',
  },
  {
    texto:
      'Precios accesibles para todos, gran variedad de productos, trato muy cordial, recomendado!',
    autor: 'Patricio Ávila',
    detalle: 'reseña de Google',
  },
  {
    texto: 'Súper buena disposición, recomendado. Me salvaron el viaje.',
    autor: 'Felipe Sepúlveda',
    detalle: 'reseña de Google',
  },
  {
    texto: 'Muy buena atención, nada que decir, se nota que sabe lo que hace.',
    autor: 'Jorge Orellana',
    detalle: 'reseña de Google',
  },
] as const
