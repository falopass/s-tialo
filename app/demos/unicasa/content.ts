// Datos confirmados de UNICASA, minimarket y librería de San Clemente.
//
// Fuentes:
// - Google Maps ficha "UNICASA" (place 11hcfqm4qq): Supermarket, 4.7
//   (58 reseñas: 50x5, 4x4, 2x3, 0x2, 2x1), San Clemente, Maule,
//   tel +56 71 243 5240, plus code FG97+C7. Ofrece delivery.
//   Abre a las 8:00. La ficha no publica dirección de calle.
// - Letrero real de la fachada (foto): "MINIMARKET LIBRERIA Unicasa"
//   con el logo PF celeste.
// - mundochileno lista "Unicasa Librería fotocopias" en San Clemente
//   (misma casa comercial: minimarket + librería).
// - Reseñas citadas: textos originales en español de Google Maps
//   (vía chilopina): Bayron 5★, Luis Guillermo Olivares 5★, J. L. 5★.
// - Fotos: 5 de la ficha de Google (fachada, interior, góndolas,
//   pasillo, mesón). Logo: recorte del letrero celeste de la fachada.
// - No se confirmó dirección de calle ni redes sociales; no se usa.

export const BIZ = {
  name: 'Unicasa',
  long: 'Minimarket Librería Unicasa',
  rubro: 'Minimarket y librería',
  address: 'San Clemente',
  city: 'San Clemente',
  region: 'Maule',
  phoneDisplay: '71 243 5240',
  phoneTel: '+56712435240',
  rating: 4.7,
  reviews: '58',
  hours: 'Abre a las 8:00',
  plusCode: 'FG97+C7 San Clemente',
}

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=UNICASA+San+Clemente'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=UNICASA,+San+Clemente&z=16&output=embed'

export const IMG = '/demos/unicasa'

export const GONDOLA = [
  {
    t: 'Abarrotes y snacks',
    d: 'La góndola clásica del almacén: dulces, galletas, conservas y lo de siempre.',
    foto: `${IMG}/gondolas.webp`,
    alt: 'Góndola de abarrotes y snacks en Minimarket Unicasa',
  },
  {
    t: 'Carnes y verduras frescas',
    d: 'Carnes y verduras frescas todos los días, lo que más destacan las reseñas.',
    foto: `${IMG}/interior.webp`,
    alt: 'Pasillo interior del Minimarket Unicasa con refrigerador',
  },
  {
    t: 'Librería y fotocopias',
    d: 'Útiles, papelera y fotocopias en el mismo local: el otro rubro del letrero.',
    foto: `${IMG}/meson.webp`,
    alt: 'Mesón de Minimarket Unicasa con mercadería',
  },
]

export const RESENAS = [
  {
    nombre: 'Bayron',
    estrellas: 5,
    texto:
      'Gran variedad de productos y excelente atención, siempre carnes y verduras frescas con los mejores precios. 10/10.',
  },
  {
    nombre: 'Luis Guillermo Olivares',
    estrellas: 5,
    texto: 'Buena atención y muy surtido.',
  },
  {
    nombre: 'J. L.',
    estrellas: 5,
    texto: 'Muy buena atención, accesible y surtido.',
  },
]
