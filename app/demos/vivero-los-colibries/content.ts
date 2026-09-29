/**
 * Datos verificados en la ficha pública de Google Maps (29-09-2026):
 * "Vivero los colibríes", jardín/vivero en villa las araucarias -
 * San Diego Norte, calle 1 casa 4, San Clemente; teléfono
 * +56 9 2084 1769; nota 4,8 con 8 opiniones; sitio web enlazado a
 * instagram.com (perfil @vivero.loscolibries). Horario según la ficha:
 * lunes a viernes 8:30-17:30, sábado y domingo 10:30-17:00.
 * Las fotos del demo son de la misma ficha (malla rachel, domo,
 * patio, macetas, araucaria y frambuesa del vivero). No publica
 * precios ni catálogo escrito: las secciones salen de lo que se ve en
 * sus fotos y de lo que dicen las reseñas.
 */
export const BIZ = {
  name: 'Vivero Los Colibríes',
  fullName: 'Vivero los colibríes',
  category: 'Vivero y jardín',
  city: 'San Clemente',
  address: 'Villa Las Araucarias, San Diego Norte, calle 1 casa 4',
  phone: '56920841769',
  phoneDisplay: '+56 9 2084 1769',
  rating: '4,8',
  reviews: 8,
  instagram: '@vivero.loscolibries',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Vivero Los Colibríes, vi su página y quiero consultar por plantas.',
)}`

// Coordenadas exactas de la ficha: el nombre es homónimo de viveros en
// Argentina y México, el pin debe quedar en San Clemente.
export const MAPS_EMBED = 'https://www.google.com/maps?q=-35.5707461,-71.4596483&z=16&output=embed'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vivero los colibríes, Villa Las Araucarias, San Clemente, Chile',
)}`

export const IMG = '/demos/vivero-los-colibries'

export const HORARIO = [
  { days: 'Lunes a viernes', time: '8:30 – 17:30' },
  { days: 'Sábado y domingo', time: '10:30 – 17:00' },
] as const

/** Lo que se ve y se lleva en el vivero, según sus fotos y reseñas. */
export const SECCIONES = [
  {
    n: 'a1',
    etiqueta: 'nativos',
    titulo: 'Araucaria y nativos del Maule',
    foto: 'araucaria',
    alt: 'Plantín de araucaria araucana en bolsa de vivero, con la casa del vivero al fondo — foto de la ficha de Google de Vivero Los Colibríes',
    texto:
      'El orgullo del patio: araucarias chicas en bolsa, listas para plantar. Un árbol para toda la vida, de semillero local.',
  },
  {
    n: 'a2',
    etiqueta: 'frutales',
    titulo: 'Frambuesa y frutales',
    foto: 'frambuesa',
    alt: 'Mano sosteniendo un plantín de frambuesa con su pan de raíz, sobre hileras de frutales — foto de la ficha de Google',
    texto:
      'Frambuesas, berries y frutales de la zona, con raíz sana. Te dicen cómo plantarla y cuándo cortarla.',
  },
  {
    n: 'a3',
    etiqueta: 'florales',
    titulo: 'Flores de temporada',
    foto: 'flores',
    alt: 'Mesa de madera llena de macetas con flores de colores bajo techo de madera — foto de la ficha de Google',
    texto:
      'La mesa de temporada: alegres, petunias y lo que esté floreciendo la semana. El stock cambia con el calendario.',
  },
  {
    n: 'a4',
    etiqueta: 'interior',
    titulo: 'Interior y macetitas',
    foto: 'macetas',
    alt: 'Macetas con violetas, begonias y plantas de interior en el vivero — foto de la ficha de Google',
    texto:
      'Begonias, violetas y macetitas para la casa o para regalar. Buenos precios, como dicen las reseñas.',
  },
] as const

/** Fotos del recorrido, todas de la ficha real de Google Maps. */
export const RECORRIDO = [
  {
    foto: 'malla',
    pie: 'bajo la malla',
    alt: 'Interior del vivero bajo malla rachel rosada, con hileras de plantas en maceta — foto de la ficha de Google',
    texto:
      'La malla que se ve desde la calle. Adentro corre aire y sombra: las plantas crecen protegidas del sol de verano.',
  },
  {
    foto: 'sendero',
    pie: 'el sendero de grava',
    alt: 'Sendero de gravilla entre canteros de plantas y cintas de colores colgadas — foto de la ficha de Google',
    texto:
      'Se entra caminando: la gravilla, los canteros y las cintas de colores que marca cada sector del vivero.',
  },
  {
    foto: 'domo',
    pie: 'el domo',
    alt: 'Domo geodésico cubierto de malla sombra entre hileras de plantas y un letrero pintado a mano — foto de la ficha de Google',
    texto:
      'El domo de malla donde maduran los frutales y los arbustos, al fondo del patio entre sauces y letreros a mano.',
  },
  {
    foto: 'patio',
    pie: 'el patio',
    alt: 'Patio del vivero con césped, palmeras en maceta e invernadero de plástico — foto de la ficha de Google',
    texto:
      'Un patio de casa convertido en vivero: palmeras en maceta, invernadero y banderines entre los árboles.',
  },
] as const

/**
 * Reseñas de la ficha de Google (29-09-2026). Se omiten las de un
 * vivero homónimo de México que Maps mezcla en la ficha.
 */
export const RESENAS = [
  {
    nombre: 'Jimena Martínez',
    texto:
      'Gran variedad de plantas, todas muy bien cuidadas. Buenos precios.',
  },
  {
    nombre: 'Didi R.',
    texto:
      'Muy lindo lugar, mucha variedad y la chica que me atendió sabe mucho de plantas. Compré varias y me encantaron. Muy recomendado.',
  },
  {
    nombre: 'Alan Reyes',
    texto: 'Me gustó mucho, tienen buena variedad.',
  },
] as const
