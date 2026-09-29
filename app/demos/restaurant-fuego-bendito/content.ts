/**
 * app/demos/restaurant-fuego-bendito/content.ts
 *
 * Datos verificados de Restaurante Fuego Bendito (Curicó, Maule).
 *
 * Fuentes:
 *  - Ficha Google Maps (place 11c1xj9rk_): categoría Restaurante,
 *    Av. España 280, Curicó; tel. +56 9 5000 7470; rating 4,5;
 *    horario semana completa (Lun–Mié 13:00–24:00, Jue 13:00–00:30,
 *    Vie–Sáb 13:00–01:00, Dom 13:00–16:30); web restaurantefuegobendito.cl.
 *  - Sitio oficial: cocina de carnes y mariscos, parrilla a la vista,
 *    local rústico de piedra y madera, terraza, bar, vinos y espumantes;
 *    platos nombrados en su carta (riñones al jerez, corvina a la manière,
 *    pasta en tinta de calamar con curry de mariscos, plateada rústica,
 *    crème brûlée y postres de la casa).
 *  - Fotos: ficha de Maps + galería del sitio oficial (platos con marca
 *    FB). Logo real: monograma FB grabado del sitio oficial.
 *
 * Omisos: número de reseñas no visible en la ficha; citas de reseñas no
 * accesibles en vista limitada — solo se muestra el rating.
 */

export const BIZ = {
  name: 'Restaurante Fuego Bendito',
  short: 'Fuego Bendito',
  rubro: 'Restaurante · parrilla y mariscos',
  address: 'Av. España 280',
  city: 'Curicó',
  region: 'Maule',
  phoneDisplay: '+56 9 5000 7470',
  phoneTel: '+56950007470',
  whatsapp: '56950007470',
  rating: 4.5,
  website: 'restaurantefuegobendito.cl',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  `Hola, quiero reservar una mesa en ${BIZ.name}, ${BIZ.address}, Curicó.`,
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Restaurante+Fuego+Bendito/@-34.9863974,-71.2301915,17z'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurante Fuego Bendito, Av. España 280, Curicó',
)}&output=embed`

const IMG_DIR = '/demos/restaurant-fuego-bendito'

export const IMG = {
  logo: `${IMG_DIR}/logo.webp`,
  fachada: `${IMG_DIR}/fachada.webp`,
  muro: `${IMG_DIR}/muro.webp`,
  parrilla: `${IMG_DIR}/parrilla.webp`,
  pescado: `${IMG_DIR}/pescado.webp`,
  postre: `${IMG_DIR}/postre.webp`,
  bar: `${IMG_DIR}/bar.webp`,
  comedor: `${IMG_DIR}/comedor.webp`,
  terraza: `${IMG_DIR}/terraza-noche.webp`,
}

/** Horario completo, verificado en la ficha de Maps. */
export const HORARIO = [
  ['Lunes a miércoles', '13:00 – 24:00'],
  ['Jueves', '13:00 – 00:30'],
  ['Viernes y sábado', '13:00 – 01:00'],
  ['Domingo', '13:00 – 16:30'],
]

/** Platos nombrados en su propia carta y sitio oficial. */
export const PLATOS = [
  {
    img: IMG.parrilla,
    alt: 'Corte de carne a la parrilla servido en plato negro, foto de la carta de Fuego Bendito',
    tag: 'De la parrilla',
    nombre: 'Cortes a la parrilla a la vista',
  },
  {
    img: IMG.pescado,
    alt: 'Filete de salmón a la plancha con flores comestibles, foto de la carta de Fuego Bendito',
    tag: 'Del mar',
    nombre: 'Corvina a la manière y salmón',
  },
  {
    img: IMG.postre,
    alt: 'Crème brûlée con merengues y frutos, postre de la casa en Fuego Bendito',
    tag: 'Postre',
    nombre: 'Crème brûlée y dulces de la casa',
  },
]

export const SABORES = [
  'Riñones al jerez',
  'Empanaditas de la casa',
  'Pasta en tinta de calamar con curry de mariscos',
  'Plateada rústica',
  'Pil pil y sopas',
  'Ensaladas especiales',
]
