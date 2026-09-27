/**
 * app/demos/ferreteria-don-jack/content.ts
 *
 * Datos del mockup. REALES: nombre, rubro, dirección (Alejandro Cruz
 * Vergara, K-260, Pencahue), las 44 reseñas de la ficha de Google, el
 * WhatsApp y la página de Facebook (1334 seguidores). Todo lo demás
 * (surtido, precios, textos) es contenido de ejemplo para mostrar cómo
 * se vería el sitio. Las fotos son referenciales.
 */

export const BIZ = {
  name: 'Ferretería Don Jack',
  rubro: 'Ferretería',
  address: 'Alejandro Cruz Vergara, K-260',
  city: 'Pencahue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9283 4096',
  phoneTel: '+56992834096',
  whatsapp: '56992834096',
  reviews: 44,
  facebook: 'https://es-la.facebook.com/people/Ferreteria-Don-Jack/100076345678002/',
  followers: 1334,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Ferretería Don Jack y quiero consultar por un producto',
)}`

const MAPS_QUERY = 'Ferretería Don Jack, Alejandro Cruz Vergara K-260, Pencahue, Maule, Chile'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`

export const IMG = '/demos/ferreteria-don-jack'

export const CARTA = [
  {
    num: 'I',
    title: 'Gasfitería y agua',
    note: 'Para la casa, el baño y la cocina',
    img: 'detalle3',
    alt: 'Estantes de madera con fitting de PVC, llaves de bronce y cajones de tornillería',
    items: ['Fitting PVC y cobre', 'Llaves de paso y bronce', 'Flexibles y sellos', 'Tuberías por tira'],
  },
  {
    num: 'II',
    title: 'Riego y campo',
    note: 'Para la parcela, el huerto y los animales',
    img: 'ambiente',
    alt: 'Rollos de manguera, llaves de riego y carretilla junto a la puerta que da a un huerto',
    items: ['Mangueras y rollos de polietileno', 'Llaves y válvulas de riego', 'Palas, horquetas y carretillas', 'Alambre y fijaciones'],
  },
  {
    num: 'III',
    title: 'Herramientas y fijaciones',
    note: 'Lo de todos los días, al detalle',
    img: 'detalle2',
    alt: 'Martillo, huincha y alicate sobre un mesón de madera junto a cajones con tornillos y bisagras',
    items: ['Herramientas de mano', 'Tornillos y clavos al detalle', 'Bisagras y quincallería', 'Huinchas y niveles'],
  },
  {
    num: 'IV',
    title: 'Obra y pintura',
    note: 'Para arreglar, levantar y dejar bonito',
    img: 'hero',
    alt: 'Pasillo con sacos de cemento, bloques y tarros de pintura de colores',
    items: ['Cemento y áridos ensacados', 'Bloques', 'Pinturas y esmaltes', 'Brochas y rodillos'],
  },
] as const

export const PRECIOS = [
  { group: 'Gasfitería', rows: ['Codo PVC', 'Llave de paso', 'Flexible de agua'] },
  { group: 'Riego', rows: ['Manguera de jardín (rollo)', 'Llave de jardín', 'Conector rápido'] },
  { group: 'Herramientas', rows: ['Martillo carpintero', 'Huincha de medir', 'Alicate universal'] },
  { group: 'Obra', rows: ['Saco de cemento', 'Galón de pintura', 'Kilo de clavos'] },
] as const
