export const BIZ = {
  name: 'Luna Plena Hostal',
  rubro: 'Alojamiento con servicio',
  address: 'Camino a Aguas Frías K-175, Buena Unión 655, 3380000 Molina, Maule, Chile',
  addressCorto: 'Buena Unión 655, camino a Aguas Frías, Molina',
  phone: '+56 9 7396 3849',
  rating: 4.7,
  resenasCount: 85,
  // La ficha de Google Maps no publica horario de recepción.
}

export const WA_LINK =
  'https://wa.me/56973963849?text=Hola%2C%20quiero%20consultar%20por%20alojamiento%20en%20Luna%20Plena%20Hostal.'

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Luna+Plena+Hostal,+Buena+Uni%C3%B3n+655,+Molina'

// Coordenadas exactas de la ficha de Google Maps del hostal.
export const MAPS_EMBED = 'https://www.google.com/maps?q=-35.1314194,-71.2620737&z=16&output=embed'

export const AMENIDADES = [
  'Piscina',
  'Tinaja',
  'Cancha de fútbol',
  'Quincho con parrilla',
  'Mesones al aire libre',
  'Comida casera',
  'Habitaciones',
  'Cabañas',
]

// Paradas del recorrido: cada una usa foto real publicada en la ficha de
// Google Maps del hostal.
type Parada = {
  num: string
  nombre: string
  texto: string
  foto?: string
  alt?: string
  fotos?: { src: string; alt: string }[]
}

export const PARADAS: Parada[] = [
  {
    num: '01',
    nombre: 'La recepción',
    foto: '/demos/luna-plena-hostal-molina/recepcion.webp',
    alt: 'Puerta de madera de la recepción de Luna Plena Hostal',
    texto:
      'El portón de entrada del fundo. Quienes llegan destacan a la dueña: “muy amable y preocupada de hacernos sentir bien”.',
  },
  {
    num: '02',
    nombre: 'Cabañas y habitaciones',
    fotos: [
      {
        src: '/demos/luna-plena-hostal-molina/cabana.webp',
        alt: 'Cabaña con terraza al jardín en Luna Plena Hostal',
      },
      {
        src: '/demos/luna-plena-hostal-molina/habitacion.webp',
        alt: 'Habitación con camas en Luna Plena Hostal',
      },
    ],
    texto:
      'Cabañas con terraza al jardín y habitaciones para dormir tranquilo. La limpieza y el orden son lo que más repiten las reseñas.',
  },
  {
    num: '03',
    nombre: 'La piscina',
    foto: '/demos/luna-plena-hostal-molina/piscina.webp',
    alt: 'Piscina de Luna Plena Hostal rodeada de pasto',
    texto:
      'Piscina en medio del pasto, con corral seguro para los niños. Al lado funciona la tinaja que las reseñas llaman “espectacular”.',
  },
  {
    num: '04',
    nombre: 'El quincho y los jardines',
    fotos: [
      {
        src: '/demos/luna-plena-hostal-molina/quincho.webp',
        alt: 'Quincho con mesones junto a la piscina del hostal',
      },
      {
        src: '/demos/luna-plena-hostal-molina/jardin.webp',
        alt: 'Jardín con rocalla y estanque en Luna Plena Hostal',
      },
    ],
    texto:
      'Quincho con parrilla y mesones para el asado y el almuerzo al aire libre, cancha de fútbol y un jardín con rocalla para caminar.',
  },
  {
    num: '05',
    nombre: 'La mesa',
    foto: '/demos/luna-plena-hostal-molina/comida.webp',
    alt: 'Humitas, ensaladas y platos caseros servidos en Luna Plena Hostal',
    texto:
      'Humitas, ensaladas y platos caseros: la cocina del hostal también suma puntos en las opiniones.',
  },
]

// Reseñas textuales de la ficha de Google Maps del hostal.
export const RESENAS = [
  {
    texto:
      'Es un lindo lugar para descansar, cómodo, tranquilo y seguro. La atención de su dueña fue muy amable y preocupada. Muy buena ubicación para llegar al pueblo y a las maravillas naturales de la zona, como Parque Inglés y 7 Tazas.',
    autor: 'Carolina Soto',
  },
  {
    texto:
      'Hermoso. Rica piscina, hermosa cancha de fútbol, exquisita tinaja, parrilla para asados y mesones para disfrutar el almuerzo al aire libre, con la tranquilidad necesaria para un buen descanso.',
    autor: 'Daniela Rojas Aguilera',
  },
  {
    texto: 'Muy buena atención. Silencioso. Campestre y relajante.',
    autor: 'Oscar Dominguez Arteaga',
  },
  {
    texto:
      'Excelente lugar. Lo pasamos muy bien en familia: acogedor, todo muy limpio y ordenado. Toda la familia puede disfrutar la piscina, el entorno y la tinaja que tienen, que es espectacular.',
    autor: 'Catalina Campos',
  },
]

export const CERCA_DE = ['Parque Inglés', 'Radal Siete Tazas', 'Camino a Aguas Frías']

// Fuentes: ficha de Google Maps “LUNA PLENA HOSTAL” (nombre, dirección,
// teléfono, rating 4,7 con 85 opiniones, fotos y reseñas). El hostal no
// publica sitio web ni redes verificables; los datos que no aparecen en la
// ficha (horario de recepción, correo) se omiten.
