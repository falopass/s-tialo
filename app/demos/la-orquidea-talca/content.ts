/**
 * app/demos/la-orquidea-talca/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Nombre, rubro (cake shop — panadería/pastelería), dirección
 *   (13 Norte #3882, Talca), teléfono (+56 9 6788 8376), nota 4,6★ y
 *   66 reseñas, rango de precio (CLP 1.000–20.000 por persona),
 *   retiro y delivery: ficha pública de Google Maps.
 * - Horario (todos los días 8:00–21:00): ficha de Google; coincide con
 *   lo que publica su propio Instagram (@laorquidea.talca, 4,4 mil
 *   seguidores): «Panadería, Pastelería, Minimarket — 13 norte entre
 *   33 y 34 oriente — abierto de 8:00 a 21:00».
 * - Productos: reseñas y fotos de la ficha y su IG (pan fresco, tortas
 *   frescas y por encargo, cachitos, tequeños, empanadas, dulces,
 *   minimarket con productos venezolanos e importados).
 * - Logo: foto de perfil de su Instagram (orquídea dorada + trigo).
 * - Reseñas citadas: textos originales en español de su ficha de Google.
 * - Fotos en /demos/la-orquidea-talca: ficha de Google e Instagram.
 * Textos de descripción de secciones son de muestra, basados en las
 * fotos, los productos y las reseñas.
 */

export const BIZ = {
  name: 'La Orquídea',
  short: 'La Orquídea',
  rubro: 'Panadería · Pastelería · Minimarket',
  address: '13 Norte #3882, entre 33 y 34 Oriente',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6788 8376',
  phoneTel: '+56967888376',
  whatsapp: '56967888376',
  instagram: 'https://www.instagram.com/laorquidea.talca',
  igHandle: '@laorquidea.talca',
  rating: '4,6',
  reviews: 66,
  horario: 'todos los días 8:00 – 21:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Orquídea y quiero hacer un pedido',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'La Orquidea, 13 Norte 3882, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'La Orquidea, 13 Norte 3882, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/la-orquidea-talca'
