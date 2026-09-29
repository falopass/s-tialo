export const BIZ = {
  name: 'Gimnasio Body Fitness Talca',
  address: 'Pje. Cuatro Sur 1565, 3461617 Talca, Maule, Chile',
  phone: '+56 9 9226 8717',
  hours: [
    { days: 'Lunes a viernes', time: '07:00–23:00' },
    { days: 'Sábado', time: '09:00–14:00 y 16:00–20:00' },
    { days: 'Domingo', time: 'Cerrado' },
  ],
  equipment: ['Máquinas de entrenamiento', 'Pesas'],
  rating: 4.7,
  reviewCount: 269,
  photoAlt: 'Interior de Gimnasio Body Fitness Talca, foto de su ficha de Google Maps',
}

/** Reseñas textuales publicadas en la ficha de Google Maps del gimnasio. */
export const RESENAS = [
  {
    text: 'El mejor y clásico gimnasio de Talca… buen ambiente hoy. Uno va a entrenar y ya! Céntrico.',
    author: 'Paola Muñoz Parada',
  },
  {
    text: 'Este GYM cuenta con excelentes máquinas para aumentar masa muscular. Se nota que son bien mantenidas. El ambiente es grato y cordial.',
    author: 'Gustavo A.',
  },
  {
    text: 'Excelentes máquinas y atención, muy limpio y bien atendido, no te amarran con planes como los otros.',
    author: 'D.',
  },
] as const

const IMG = '/demos/gimnasio-body-fitness-talca'

/** Fotos reales publicadas por el gimnasio en su ficha de Google Maps. */
export const PHOTOS = [
  { src: `${IMG}/sala.webp`, alt: 'Sala de máquinas y bicicletas de Body Fitness Talca', caption: 'Sala de máquinas' },
  { src: `${IMG}/pasillo.webp`, alt: 'Pasillo del gimnasio con pesas y clientes entrenando', caption: 'Sala en horario punta' },
  { src: `${IMG}/polea.webp`, alt: 'Cliente entrenando en máquina de poleas en Body Fitness', caption: 'Zona de poleas' },
  { src: `${IMG}/maquina-amarilla.webp`, alt: 'Máquina amarilla de espalda en Body Fitness Talca', caption: 'Máquina de espalda' },
  { src: `${IMG}/arcos.webp`, alt: 'Rack de barras y arcos naranjos del gimnasio Body Fitness', caption: 'Rack de barras' },
] as const

export const WA_LINK = 'https://wa.me/56992268717?text=Hola%2C%20quiero%20consultar%20por%20el%20gimnasio.'
export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Gimnasio+Body+Fitness+Talca,+Pje.+Cuatro+Sur+1565,+Talca'
export const PHOTO = PHOTOS[0].src

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BIZ.name}, ${BIZ.address}`,
)}&output=embed`

// Fuentes consultadas: ficha de Google Maps (nombre, dirección, teléfono, horario,
// rating 4.7 de 269 reseñas y 5 fotos reales de la sala); reseñas citadas verbatim
// de la ficha de Google. La página de Facebook enlazada desde Maps solicita inicio
// de sesión, así que no hay logo descargable; no se encontró un Instagram verificable.
