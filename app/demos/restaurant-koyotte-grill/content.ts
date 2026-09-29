/**
 * app/demos/restaurant-koyotte-grill/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): el local figura
 * como "Restaurant Koyotte Grill", restaurante en O'Higgins 313, Colbún,
 * Maule. Teléfono publicado en la ficha +56 9 3186 3799, 4,5 estrellas con
 * 111 opiniones, abre 12:30. El letrero circular de la fachada dice
 * "Restaurant Koyotte Grill · Cocina casera · Hospedaje" y el muro pintado
 * a mano anuncia salmón a la plancha, parrilladas, pollo mariscal,
 * caldillo con grio frito y pastas. Fotos del perfil: mesas de eventos y
 * banquetería. Reseñas citadas textualmente (autor + fecha).
 *
 * Nota: el número del prospecto (+56 9 3957 0154) también aparece publicado
 * para este local en directorios (restaurantess.cl, misma dirección); la
 * ficha de Maps lista +56 9 3186 3799, que es el que usa este mockup.
 */

export const BIZ = {
  name: 'Restaurant Koyotte Grill',
  mapsName: 'Restaurant Koyotte Grill',
  short: 'Koyotte',
  rubro: 'Restaurant y parrilla',
  address: "O'Higgins 313",
  city: 'Colbún',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3186 3799',
  phoneTel: '+56931863799',
  whatsapp: '56931863799',
  rating: '4,5',
  reviews: 111,
  opens: '12:30',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Koyotte Grill y quiero reservar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurant Koyotte Grill, Colbún, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurant Koyotte Grill, Colbún, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/restaurant-koyotte-grill'

/** Reseñas reales de la ficha de Google (autor + fecha, texto citado). */
export const REVIEWS = [
  {
    author: 'Katiuska Caquilpan',
    when: 'hace 6 meses',
    text: 'La comida estaba muy buena, pedimos salmon camarón y risotto de camarones y los platos eran super contundentes, la atención muy amable y el lugar también se ve muy limpio.',
    stars: 5,
  },
  {
    author: 'Stephy Cruz',
    when: 'hace 2 años',
    text: 'Un lugar muy bello y acogedor, desde que llegamos el Garzón Guillermo nos atendió súper bien. Jugos naturales y pisco sour exquisitos, dan un consomé de entrada maravilloso. Sin duda cuando vuelva a Colbún regresaré.',
    stars: 5,
  },
  {
    author: 'Pablo Vergara',
    when: 'hace 2 meses',
    text: 'Un lugar superlimpio, la comida exquisita, las meseras supercariñosas, atentas, amorosas y serviciales. Los baños limpios, los aires acondicionados crean el ambiente, mas la música le da un toque tranquilo y energizante.',
    stars: 5,
  },
] as const
