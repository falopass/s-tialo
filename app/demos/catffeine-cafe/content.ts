/**
 * app/demos/catffeine-cafe/content.ts
 *
 * Datos del demo. REALES (ficha de Google Maps + Instagram @catffeine.cafe):
 * nombre, dirección (Domingo Alvarado 1209, Copiapó, dentro de Espacio
 * Sinergia), WhatsApp, rating 5.0/9 reseñas, horario, rango de precios
 * ($5.000–10.000 por persona) y la carta completa de la pizarra del local
 * (foto real: amiauricano, esprruueso, catpuccino, mokat, gato chocolatoso,
 * garra V60, prrruensa francesa, té ronroneo, té ronronegro). Las reseñas
 * citadas son textos reales de Google Maps. Lo que no está confirmado, se omite.
 */

export const BIZ = {
  name: 'Catffeine Café',
  short: 'Catffeine',
  rubro: 'Espresso bar · cafetería de autor',
  city: 'Copiapó',
  region: 'Región de Atacama',
  address: 'Domingo Alvarado 1209',
  entre: 'entre Copayapu y San Román',
  dentro: 'Espacio Sinergia',
  phoneDisplay: '+56 9 7656 8494',
  whatsapp: '56976568494',
  instagram: 'catffeine.cafe',
  instagramFollowers: '1.065',
  tiktok: 'catffeinecafe',
  rating: '5,0',
  reviewsCount: '9',
  priceRange: '$5.000–10.000 por persona',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Catffeine, vi su página y quiero consultar por la carta de hoy',
)}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Catffeine Café, Domingo Alvarado 1209, Copiapó, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Domingo Alvarado 1209, Copiapó, Chile',
)}&output=embed`

export const IMG = '/demos/catffeine-cafe'

/** Carta real de la pizarra del local (foto en public/demos/catffeine-cafe/pizarra.webp). */
export const PIZARRA = [
  { name: 'Amiauricano', ml: '220 ml', price: '$2.800' },
  { name: 'Esprruueso', ml: '45 ml', price: '$2.300' },
  { name: 'Catpuccino', ml: '250 ml', price: '$3.500' },
  { name: 'Mokat', ml: '230 ml', price: '$4.500' },
  { name: 'Gato Chocolatoso', ml: '250 ml', price: '$3.500' },
  { name: 'Garra V60', ml: '220 ml', price: '$4.000' },
  { name: 'Prrruensa Francesa', ml: '220 ml', price: '$4.000' },
  { name: 'Té Ronroneo', ml: '200 ml', price: '$2.500' },
  { name: 'Té Ronronegro', ml: '220 ml', price: '$2.000' },
] as const

export const HORARIO = [
  { dia: 'Lunes a viernes', horas: '9:30–13:30 · 15:30–19:30' },
  { dia: 'Sábado', horas: '9:30–13:30' },
  { dia: 'Domingo', horas: 'Cerrado' },
] as const

/** Citas reales de reseñas de Google Maps (5,0 sobre 9 reseñas). */
export const RESENAS = [
  {
    nombre: 'Paula Karime Nazer Avalos',
    cuando: 'hace 5 meses',
    texto:
      'Uno de los mejores cafés que vas a encontrar. Usan solo técnicas manuales para la preparación y tienen opciones para agregar adaptógenos a las bebidas. Cuentan con repostería y panadería sin gluten, vegana y sin azúcar.',
  },
  {
    nombre: 'Cristián Gallardo',
    cuando: 'hace 6 meses',
    texto:
      'Tienen varias opciones de cafetería y preparaciones para cuidado personal. Si te estás cuidando, es un buen lugar para ir.',
  },
  {
    nombre: 'Joaquín Orellana',
    cuando: 'hace una semana',
    texto: 'Café con técnicas manuales únicas en Copiapó.',
  },
] as const
