export const BIZ = {
  name: 'Gimnasio Body Fitness Talca',
  short: 'Body Fitness',
  rubro: 'Polideportivo',
  address: 'Pje. Cuatro Sur 1565, 3461617 Talca, Maule, Chile',
  phone: '+56 9 9226 8717',
  rating: 4.7,
  ratingLabel: '4,7',
  reviews: 269,
  fbUrl: 'https://www.facebook.com/GIMNASIO-BODY-FITNESS-TALCA-57778646087/',
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
  { src: `${IMG}/nave.webp`, alt: 'Nave central del gimnasio con los arcos naranjos al fondo', caption: 'La nave central' },
  { src: `${IMG}/pasillo.webp`, alt: 'Pasillo del gimnasio con pesas y clientes entrenando', caption: 'Sala en horario punta' },
  { src: `${IMG}/polea.webp`, alt: 'Cliente entrenando en máquina de poleas en Body Fitness', caption: 'Zona de poleas' },
  { src: `${IMG}/maquina-amarilla.webp`, alt: 'Máquina amarilla de espalda en Body Fitness Talca', caption: 'Máquina de espalda' },
  { src: `${IMG}/arcos.webp`, alt: 'Rack de barras y arcos naranjos del gimnasio Body Fitness', caption: 'Rack de barras' },
] as const

/** Reseñas reales publicadas en la ficha de Google Maps (texto original). */
export const RESENAS = [
  {
    texto: 'El mejor y clásico gimnasio de Talca… buen ambiente. Uno va a entrenar y ya. Céntrico.',
    autor: 'Paola Muñoz Parada',
    fecha: 'hace 5 meses',
    estrellas: 5,
  },
  {
    texto: 'Excelente lugar para entrenar a la vieja escuela, arto fierro. Recomendadísimo.',
    autor: 'Victor Diaz',
    fecha: 'hace 3 meses',
    estrellas: 5,
  },
  {
    texto: 'Actualmente, uno de los mejores de Talca. Las máquinas son bastante buenas y, a pesar de que en algún momento pueda estar lleno, siempre hay máquinas que poder utilizar.',
    autor: 'Natalia de los Ángeles',
    fecha: 'hace 3 años',
    estrellas: 5,
  },
  {
    texto: 'Cuenta con excelentes máquinas para aumentar masa muscular. Se nota que son bien mantenidas. El ambiente es grato y cordial.',
    autor: 'Gustavo A.',
    fecha: 'hace 7 años',
    estrellas: 5,
  },
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
// Fuentes consultadas: ficha de Google Maps (nombre, categoría «Polideportivo», dirección,
// teléfono, horario, rating 4,7 con 269 reseñas, las 4 reseñas citadas y 6 fotos reales de la
// sala). La página de Facebook enlazada desde la ficha solicita inicio de sesión; no se
// encontró Instagram ni logo verificable: el nombre y las fotos reales hacen de marca.
