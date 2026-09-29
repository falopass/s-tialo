/**
 * app/demos/calypso-restaurant/content.ts
 *
 * Datos del mockup. REALES: la ficha de Google Maps figura como
 * "Restaurante Calypso" en M-304, Constitución (Av. del Mar 1700 según
 * ASETUR/SERNATUR), restaurante-pizzería con terraza sobre la playa y
 * vista a la Piedra de la Iglesia. Abre 12:00. Teléfono +56 9 6186 1372
 * (publicado por ASETUR turismoconstitucion.cl y SERNATUR). Fotos del
 * perfil: terraza de madera sobre el mar, escaleras azules de la entrada,
 * pizzas, pescados y mariscos, tragos al atardecer.
 *
 * Ojo: el agregado de Google es 3,1 con 259 opiniones — polarizado
 * (88x5★ vs 82x1★). Las reseñas citadas abajo son reales y positivas,
 * con su autor y fecha.
 */

export const BIZ = {
  name: 'Restaurante Calypso',
  mapsName: 'Restaurante Calypso',
  short: 'Calypso',
  rubro: 'Restaurant y pizzería',
  address: 'Av. del Mar 1700 (M-304)',
  city: 'Constitución',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6186 1372',
  phoneTel: '+56961861372',
  whatsapp: '56961861372',
  rating: '3,1',
  reviews: 259,
  opens: '12:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Calypso y quiero reservar una mesa en la terraza',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurante Calypso, Constitución, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurante Calypso, Constitución, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/calypso-restaurant'

/** Reseñas reales de la ficha de Google (autor + fecha, texto citado). */
export const REVIEWS = [
  {
    author: 'Katy Toro',
    when: 'hace 7 meses',
    text: 'Las pizzas son muy deliciosas y sabores más que nada simples, fuimos en 2 ocasiones y si bien el servicio es lento es porque se realiza a pedido cada plato, pero de sabor nada que decir, muy simpáticas las meseras y los tragos deliciosos.',
    stars: 5,
  },
  {
    author: 'Natalia Muñoz',
    when: 'hace 2 años',
    text: 'Un muy buen restaurante, comida deliciosa. El plato Reineta Margarita es exquisito… recomiendo pedirlo con papas rústicas. El cheesecake de maracuyá muy rico.',
    stars: 5,
  },
  {
    author: 'Cristian Loyola Salas',
    when: 'hace 4 años',
    text: 'Bonito lugar con una vista privilegiada. Hay mesas fuera y dentro del local. La atención es buena.',
    stars: 4,
  },
] as const
