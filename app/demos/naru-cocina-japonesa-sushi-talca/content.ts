/**
 * app/demos/naru-cocina-japonesa-sushi-talca/content.ts
 *
 * Datos REALES verificados el 2026-09-28:
 * - Ficha de Google Maps "NARU - Cocina Japonesa & Sushi Talca": teléfono
 *   +56 9 8306 1557, Calle 32 Oriente 1470, Local 116, Talca; nota 4,8
 *   con 253 opiniones; horario Dom-Jue 12:30-21:30, vie y sáb cerrado.
 * - Instagram oficial: @naru.talca.
 * - Carta: precios publicados en su propia carta/ficha (Kimbap roll
 *   Veggie, Crispy roll veggie, Naru roll, Naru sin arroz, Gohan
 *   Karaage, Gohan Veggie). El Gyu ramen y el tiradito spicy se
 *   mencionan en reseñas de clientes.
 * - Reseñas citadas: textos reales de la ficha (nombre + antigüedad).
 * - Fotos: bajadas de la ficha de Maps (gps-cs). Logo: avatar oficial
 *   de la ficha (círculo ensō rojo con なる / NARU).
 */

export const BIZ = {
  name: 'NARU Cocina Japonesa & Sushi',
  short: 'NARU',
  rubro: 'Cocina japonesa y sushi',
  address: 'Calle 32 Oriente 1470, Local 116',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8306 1557',
  whatsapp: '56983061557',
  instagram: 'naru.talca',
  rating: '4,8',
  reviews: 253,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de NARU y quiero reservar una mesa',
)}`

export const IG_LINK = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'NARU Cocina Japonesa Sushi Talca, Calle 32 Oriente 1470, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'NARU Cocina Japonesa Sushi Talca, Calle 32 Oriente 1470, Talca',
)}&output=embed`

export const IMG = '/demos/naru-cocina-japonesa-sushi-talca'

/** Carta real publicada por el local (precios de la ficha). */
export const CARTA = [
  {
    grupo: 'Rolls',
    items: [
      { nombre: 'Naru roll', precio: '$9.490' },
      { nombre: 'Naru sin arroz', precio: '$9.490' },
      { nombre: 'Kimbap roll Veggie', precio: '$8.490' },
      { nombre: 'Crispy roll veggie', precio: '$8.050' },
    ],
  },
  {
    grupo: 'Gohan',
    items: [
      { nombre: 'Gohan Karaage', precio: '$9.890' },
      { nombre: 'Gohan Veggie', precio: '$8.490' },
    ],
  },
  {
    grupo: 'Los que más recomiendan',
    items: [
      { nombre: 'Gyu ramen', desc: 'El favorito de las reseñas' },
      { nombre: 'Tiradito spicy', desc: 'Otro de los más pedidos' },
    ],
  },
] as const

export const HORARIO = [
  ['Domingo a jueves', '12:30 – 21:30'],
  ['Viernes y sábado', 'Cerrado'],
] as const

/** Reseñas reales de la ficha de Google (nombre + antigüedad). */
export const RESENAS = [
  {
    texto:
      'La atención es excelente. Se agradece la rapidez con que atienden y la amabilidad. La comida es exquisita, recomendamos mucho el Gyu ramen y el tiradito spicy. Los precios están acorde al lugar y las porciones son contundentes. Todo 10/10.',
    autor: 'Andrea Sierra',
    detalle: 'hace 5 meses',
  },
  {
    texto:
      'Muy buena comida, excelente servicio. Es mi primera vez consumiendo comida japonesa y no la cambio por nada 10/10.',
    autor: 'Tamara',
    detalle: 'hace 5 meses',
  },
  {
    texto:
      'Sinceramente todo rico para salir de la rutina, sabores nuevos, ambiente lindo y el servicio super.',
    autor: 'Jihyo Spant',
    detalle: 'hace 4 meses',
  },
  {
    texto:
      'La atención, la comida y el ambiente fue excelente; la atención del mesero Fabián Colmenares fue muy agradable, todo muy bien.',
    autor: 'Francisca Carrasco Saavedra',
    detalle: 'hace 6 meses',
  },
] as const
