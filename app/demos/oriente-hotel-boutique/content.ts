/**
 * app/demos/oriente-hotel-boutique/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + SERNATUR):
 * nombre "ORIENTE HOTEL BOUTIQUE" (razón social Hostal Oriente EIRL),
 * 2 Ote. 906, Talca; teléfono +56 9 9887 2409; rating 4,0 con 39
 * opiniones; Google anuncia "desde USD 43 por noche".
 * Amenidades confirmadas por reseñas y fichas turísticas: desayuno
 * incluido, estacionamiento, wifi, TV cable, baño privado, aire
 * acondicionado. Las reseñas citadas son textos reales de Google.
 * No tiene sitio web ni redes propias confirmadas.
 */

export const BIZ = {
  name: 'Oriente Hotel Boutique',
  short: 'Oriente',
  rubro: 'Hostal y alojamiento',
  address: '2 Oriente 906',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9887 2409',
  phoneTel: '+56998872409',
  whatsapp: '56998872409',
  rating: 4.0,
  ratingLabel: '4,0',
  reviews: 39,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Oriente Hotel Boutique y quiero consultar por una reserva',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Oriente Hotel Boutique, 2 Oriente 906, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Oriente Hotel Boutique, 2 Oriente 906, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/oriente-hotel-boutique'

/** Confirmados en reseñas de Google y fichas turísticas */
export const INCLUYE = [
  'Desayuno incluido',
  'Estacionamiento',
  'Wifi',
  'Aire acondicionado',
  'Baño privado',
  'TV cable',
] as const

/** Precio referencial publicado por Google (Booking.com) */
export const TARIFA_REF = 'desde USD 43 la noche, según Google'

/** Reseñas reales de Google (nombre y texto de la ficha) */
export const RESENAS = [
  {
    nombre: 'Marco Toledo',
    estrellas: 5,
    texto:
      'Un lugar acogedor, cómodo y limpio. Hay que destacar a su personal, muy amable y atento a las necesidades de los pasajeros. Las habitaciones cuentan con baño privado, aire acondicionado y WiFi. Excelente ubicación y precios asequibles.',
    sello: '10/10',
  },
  {
    nombre: 'Rodrigo Cabrera',
    estrellas: 4,
    texto:
      'Buena opción para alojamiento de pasada. Habitaciones grandes y cama cómoda. Queda cerca del centro así que hay opciones para comer. Además cuenta con estacionamiento. Grata sorpresa el desayuno incluido: tostadas, jamón, queso, jugo, queques, café, té.',
    sello: 'Al paso',
  },
  {
    nombre: 'Jose Torrez',
    estrellas: 5,
    texto:
      'Muy buena atención. Excelente ubicación. Habitación amplia y cómoda. Desayuno incluido.',
    sello: 'De negocios',
  },
  {
    nombre: 'Gabriel Sáez Mosquera',
    estrellas: 4,
    texto:
      'En relación precio calidad cumple: hay TV, cable, wifi y estacionamiento. Su mayor fortaleza además de su ubicación es el personal; cualquier cosa que no te deje conforme en infraestructura ellos lo compensan con un excelente trato, siempre con la mejor disposición.',
    sello: 'Buen trato',
  },
] as const

export const HABITACIONES = [
  {
    src: `${IMG}/habitacion-matrimonial.webp`,
    alt: 'Habitación matrimonial del hostal con cama de dos plazas',
    tag: 'Matrimonial',
    nota: 'Cama de dos plazas, baño privado y aire acondicionado',
  },
  {
    src: `${IMG}/habitacion-twin.webp`,
    alt: 'Habitación con dos camas de una plaza y ventanal turquesa',
    tag: 'Twin',
    nota: 'Dos camas, ideal para viajeros que comparten paso por Talca',
  },
  {
    src: `${IMG}/habitacion-doble.webp`,
    alt: 'Habitación doble decorada con macramé',
    tag: 'Doble',
    nota: 'Pieza amplia con escritorio y wifi',
  },
] as const
