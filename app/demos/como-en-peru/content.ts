// Como en Perú — datos verificados.
// Fuentes: ficha de Google Maps (nombre, dirección, teléfono, horario, rating
// 4,4 con 468 reseñas, "se menciona carta en 14 opiniones"), reseñas reales de
// Google vía ficha-todo/res-es y agregador chilopina.com (439 opiniones de la
// misma ficha). Fotos del álbum público de su ficha de Google Maps.
// El IG aparece como sitio web en su ficha; el resto de contactos no se inventa.

export const BIZ = {
  name: 'Como en Perú',
  nameFull: 'Como En Peru',
  rubro: 'Restaurante peruano',
  tagline: 'Ceviche, lomo saltado y pisco sour',
  address: 'Miraflores 1315',
  city: 'San Javier',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7275 4189',
  whatsapp: '56972754189',
  rating: '4,4',
  reviews: 468,
  hours: [
    { d: 'Lunes', h: '13:00–24:00' },
    { d: 'Martes', h: '13:00–24:00' },
    { d: 'Miércoles', h: '13:00–24:00' },
    { d: 'Jueves', h: '13:00–24:00' },
    { d: 'Viernes', h: '13:00–24:00' },
    { d: 'Sábado', h: '13:00–24:00' },
    { d: 'Domingo', h: '13:00–16:00' },
  ],
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Como en Perú, quiero reservar una mesa',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Como+En+Peru/@-35.5936526,-71.7336396,17z'
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Como En Peru, Miraflores 1315, San Javier de Loncomilla',
)}&output=embed`

export const IMG = '/demos/como-en-peru'

// Temas que Google Maps destaca de las reseñas ("se menciona X en N opiniones").
export const PLATOS = [
  {
    nombre: 'Ceviche',
    nota: 'el más nombrado de la casa',
    menciones: 'se menciona en 9 opiniones',
    src: `${IMG}/ceviche.webp`,
    alt: 'Tres copas de ceviche con leche de tigre en la mesa del restaurante',
  },
  {
    nombre: 'Lomo saltado',
    nota: 'salteado al wok, con papas y arroz',
    menciones: 'se menciona en 11 opiniones',
    src: `${IMG}/lomo.webp`,
    alt: 'Lomo saltado con papas fritas y arroz servido en plato cuadrado',
  },
  {
    nombre: 'Ají de gallina',
    nota: 'crema de ají amarillo, de las reseñas',
    menciones: 'lo llaman "fabuloso"',
    src: `${IMG}/plato.webp`,
    alt: 'Plato de la casa con salsa y arroz, montado en plato blanco',
  },
  {
    nombre: 'Arroz chaufa',
    nota: 'el wok también habla chifa',
    menciones: 'de la carta del local',
    src: `${IMG}/chaufa.webp`,
    alt: 'Arroz chaufa con pollo, carne y camarones visto desde arriba',
  },
  {
    nombre: 'Pisco sour',
    nota: 'para brindar antes de la entrada',
    menciones: 'se menciona en 4 opiniones',
    src: `${IMG}/pisco.webp`,
    alt: 'Pisco sour coronado con gotas de amargo en copa',
  },
]

// Reseñas reales: Google Maps (ficha) + chilopina.com que replica la ficha.
export const RESENAS = [
  {
    texto:
      'Lugar excelente, la comida deliciosa los piscos muy ricos. Súper recomendable!',
    nombre: 'Madeleine Guerrero',
    detalle: '5 estrellas en Google',
  },
  {
    texto:
      'Un excelente restaurante peruano con una variada carta, pasamos con mi familia en un viaje al sur, 100% recomendado, buenísima comida peruana y atención.',
    nombre: 'Sebastián Troncoso',
    detalle: '5 estrellas en Google',
  },
  {
    texto:
      'Lo mejor los ceviches, una maravilla delicioso como en ningún lugar, solo en restaurant "Como en Perú".',
    nombre: 'Hugo Jara',
    detalle: 'reseña publicada en Google',
  },
]
