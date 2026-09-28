/**
 * app/demos/la-rosa-chilena/content.ts
 *
 * Datos verificados de Panadería La Rosa Chilena (Talca, Maule).
 *
 * Fuentes:
 *  - Ficha Google Maps "La Rosa Chilena Mejor marraqueta 2023"
 *    (place 11_qrdfql): categoría Panadería, Once Ote. 1405, Talca;
 *    tel. +56 9 8313 4260; rating 4,5 (56 reseñas); horario L–V 7–20,
 *    sábado 7–16, domingo 7–15.
 *  - Prensa: Diario Talca / La Prensa / La Noticia / 24 Horas — ganadora
 *    "mejor pan francés del Maule" 2023 (FECHIPAN + INDUPAN); dueño
 *    Miguel Ramírez; vende 800–1.000 kg de pan al día, sobre todo
 *    marraqueta.
 *  - Reseñas reales citadas de la ficha (español): Felipe Caro,
 *    Elizabeth Cáceres, Brando Gómez, Hernan Burgos.
 *  - Logo recortado de su foto de amasado (pendón marrón con la
 *    marraqueta blanca).
 *
 * Ojo: existe otra "La Rosa Chilena" en Putaendo — sin relación; no se
 * usó nada de esa ficha. Su web (larosachilena.cl) no responde.
 */

export const BIZ = {
  name: 'La Rosa Chilena',
  short: 'La Rosa Chilena',
  rubro: 'Panadería artesanal',
  address: '11 Oriente 1405',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '+56 9 8313 4260',
  phoneTel: '+56983134260',
  whatsapp: '56983134260',
  rating: 4.5,
  reviews: 56,
  hours: [
    ['Lunes a viernes', '7:00 a 20:00'],
    ['Sábado', '7:00 a 16:00'],
    ['Domingo', '7:00 a 15:00'],
  ],
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  `Hola, quiero encargar pan en ${BIZ.name}, ${BIZ.address}, ${BIZ.city}.`,
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/La+Rosa+Chilena+Mejor+marraqueta+2023/@-35.4248263,-71.6502317,17z'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'La Rosa Chilena, Once Oriente 1405, Talca',
)}&output=embed`

const IMG_DIR = '/demos/la-rosa-chilena'

export const IMG = {
  logo: `${IMG_DIR}/logo.png`,
  amasado: `${IMG_DIR}/amasado.webp`,
  fachada: `${IMG_DIR}/fachada.webp`,
  marraqueta: `${IMG_DIR}/marraqueta.webp`,
  premio: `${IMG_DIR}/premio.webp`,
  hallullas: `${IMG_DIR}/hallullas.webp`,
  empanada: `${IMG_DIR}/empanada.webp`,
  completo: `${IMG_DIR}/completo.webp`,
  bolsa: `${IMG_DIR}/pan-bolsa.webp`,
}

export const RESENAS = [
  {
    nombre: 'Felipe Caro',
    estrellas: 5,
    texto:
      'La pistoleta siempre fresca; nunca me ha salido un pan pasado de levadura o añejo.',
  },
  {
    nombre: 'Elizabeth Cáceres',
    estrellas: 5,
    texto: 'Muy rico el pan, el mejor de Talca.',
  },
  {
    nombre: 'Brando Gómez',
    estrellas: 5,
    texto: 'Sus filas parecieran interminables.',
  },
]
