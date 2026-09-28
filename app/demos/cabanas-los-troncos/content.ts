/**
 * app/demos/cabanas-los-troncos/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + sitio oficial
 * lostroncosdevilches.cl): nombre «Cabañas Los Troncos», comuna San
 * Clemente (sector Vilches), teléfono/WhatsApp +56 9 7430 6540,
 * check-in 14:00 / check-out 11:00, abierto todo el año, ~1 h de Talca,
 * nota 5,0 con 80 reseñas y las reseñas citadas (nombres y texto de la
 * ficha). Servicios: los publicados en su sitio y descritos en reseñas
 * (piscina, tinajas, quincho, parrilla, horno de barro, pan amasado,
 * almacén, sendero propio al río, juegos, cabalgatas por coordinación).
 * Fotos reales de la ficha y su sitio en public/demos/cabanas-los-troncos/
 * + logo real (rodaja de tronco). Textos de apoyo son de muestra.
 */

export const BIZ = {
  name: 'Cabañas Los Troncos',
  full: 'Cabañas Los Troncos de Vilches',
  rubro: 'Cabañas y descanso en la montaña',
  sector: 'Vilches',
  city: 'San Clemente',
  region: 'Región del Maule',
  address: 'Paradero La Campana, Loteo don Arcadio, Vilches Centro',
  phoneDisplay: '+56 9 7430 6540',
  phoneTel: '+56974306540',
  whatsapp: '56974306540',
  web: 'lostroncosdevilches.cl',
  rating: '5,0',
  reviewCount: '80',
  checkin: '14:00',
  checkout: '11:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cabañas Los Troncos y quiero consultar disponibilidad',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Caba%C3%B1as+Los+Troncos/@-35.5735887,-71.1520143,17z/data=!4m6!3m5!1s0x96657783e22e7e33:0x812fac9a294d67a8!8m2!3d-35.5735887!4d-71.1520143!16s%2Fg%2F11sjlf18vp'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cabañas Los Troncos, Vilches, San Clemente, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/cabanas-los-troncos'

/** Paradas del recorrido: lo que se ve en sus fotos y servicios. */
export const RECORRIDO = [
  {
    parada: 'Primera parada',
    nombre: 'La cabaña entre los árboles',
    desc: 'Cabañas equipadas en medio de un pequeño bosque, apartadas del camino. En invierno, la bosca queda encendida para recibirte.',
    foto: 'cabana',
    alt: 'Cabaña de madera de Los Troncos rodeada de árboles en Vilches',
  },
  {
    parada: 'Segunda parada',
    nombre: 'La tinaja de leña caliente',
    desc: 'Tinajas de agua caliente al aire libre, para remojarse mirando el cerro con frío o de noche.',
    foto: 'tinaja',
    alt: 'Tinaja de leña con agua caliente al aire libre en Cabañas Los Troncos',
  },
  {
    parada: 'Tercera parada',
    nombre: 'El sendero propio al río',
    desc: 'Un sendero que les pertenece y baja hasta el río: precioso de recorrer con buen zapato, dicen los que lo hicieron.',
    foto: 'rio',
    alt: 'Sendero de tierra y vegetación que baja hacia el río en Vilches',
  },
  {
    parada: 'Cuarta parada',
    nombre: 'La piscina y el quincho',
    desc: 'Piscina para los días de calor y quincho con parrilla y horno de barro para las sobremesas largas.',
    foto: 'piscina',
    alt: 'Piscina al aire libre de Cabañas Los Troncos',
  },
] as const

/** Servicios confirmados por su sitio oficial y sus reseñas. */
export const SERVICIOS = [
  'Cabañas equipadas con bosca',
  'Tinajas de leña al aire libre',
  'Piscina',
  'Quincho para reuniones',
  'Parrilla y horno de barro',
  'Pan amasado y empanadas',
  'Almacén',
  'Sendero propio al río',
  'Ping pong y taca taca',
  'Columpios y juegos',
  'Contacto con cabalgatas',
] as const

/** Reseñas reales de la ficha de Google (texto y autoría tal cual). */
export const REVIEWS = [
  {
    nombre: 'Constanza Orellana',
    texto:
      'Le avisamos cuando íbamos cerca y nos esperó con la estufa encendida y la cabaña calientita; muy acogedora, cómoda, inmersa en un pequeño bosque.',
    fecha: 'Hace 4 meses',
  },
  {
    nombre: 'Victoria Hernandez',
    texto:
      'La cabaña impecable, baño con secador de pelo. Pedimos el servicio de tinajas y full recomendado. Cuentan con un pequeño sendero al río y wow es realmente precioso recorrerlo.',
    fecha: 'Hace 3 meses',
  },
  {
    nombre: 'Carlos A.',
    texto:
      'Excelente lugar para descansar. Las cabañas bien equipadas y muy acogedoras, sobretodo cuando llegas y tienen la Bosca encendida. Hay tinajas, una maravilla.',
    fecha: 'Hace 2 meses',
  },
] as const
