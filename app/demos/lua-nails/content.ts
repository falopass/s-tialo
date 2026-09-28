/**
 * app/demos/lua-nails/content.ts
 *
 * Datos del mockup. REALES: nombre, dirección (Treinta y Medio Ote. 1729,
 * Talca), WhatsApp, las 43 reseñas y el 5.0★ de Google Maps, los
 * servicios y el sello del bio del Instagram @luanailshome
 * («Manicure / Polygel / Soft Gel / Nails Art | Pedicura —
 * manicuristas especializadas en el cuidado de uñas naturales»),
 * y las fotos: trabajos reales publicados por el salón en Google
 * Maps e Instagram. No hay precios: el salón no los publica.
 */

export const BIZ = {
  name: 'Lua Nails Home',
  short: 'LUA Nail’s Home',
  rubro: 'Nail art · manicure',
  address: 'Treinta y Medio Ote. 1729',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8530 9351',
  phoneTel: '+56985309351',
  whatsapp: '56985309351',
  reviews: 43,
  rating: '5.0',
  instagram: '@luanailshome',
  instagramUrl: 'https://www.instagram.com/luanailshome/',
} as const

// Paleta tomada del letrero y logo reales: teal del fondo acuarela,
// lavanda de las letras «LUA» y fucsia de la dalia.
export const C = {
  teal: '#14403C',
  tealDeep: '#0B2926',
  tealMid: '#2E7D74',
  lavanda: '#7E6BB8',
  fucsia: '#C7227E',
  crema: '#F5EFE7',
  blanco: '#FFFDF9',
  tinta: '#12302C',
  gris: '#5C6F6B',
  linea: '#DCD2C4',
  lineOnDark: 'rgba(255,255,255,0.18)',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Lua Nails Home y quiero agendar una hora',
)}`

export const WA_LINK_DISENO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Lua Nails Home y quiero cotizar un diseño para mis uñas',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Lua Nails Home, Treinta y Medio Ote. 1729, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Lua Nails Home, Treinta y Medio Ote. 1729, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/lua-nails'

// Servicios tal como los declara el salón en su Instagram @luanailshome.
export const SERVICIOS = [
  {
    name: 'Manicure',
    desc: 'Cuidado completo de la uña natural: limado, cutícula y esmalte.',
  },
  {
    name: 'Polygel',
    desc: 'Extensión o refuerzo con acabado natural y duradero.',
  },
  {
    name: 'Soft Gel',
    desc: 'Cobertura flexible que protege la uña natural.',
  },
  {
    name: 'Nail Art',
    desc: 'Diseños pintados a mano: trae tu idea y la llevan a tus uñas.',
  },
  {
    name: 'Pedicura',
    desc: 'Cuidado completo para los pies, con la misma calma de siempre.',
  },
] as const

// También aparecen en las destacadas de su Instagram.
export const TAMBIEN = 'Alisados · pestañas y cejas · depilación'

// Diseños reales publicados por el salón (Google Maps e Instagram).
export const TRABAJOS: { img: string; name: string; alt: string }[] = [
  {
    img: 'vangogh',
    name: '«La noche estrellada», pintada a mano',
    alt: 'Uñas largas con la Noche estrellada de Van Gogh pintada a mano en azules y amarillos',
  },
  {
    img: 'puntos',
    name: 'Puntitos en burdeo y crema',
    alt: 'Uñas almendradas burdeo alternadas con crema y puntitos negros',
  },
  {
    img: 'tropical',
    name: 'Tropical multicolor',
    alt: 'Uñas con diseños tropicales de colores vivos sobre base transparente',
  },
  {
    img: 'lavanda',
    name: 'Lavanda con brillos',
    alt: 'Uñas largas en degradé lavanda con acentos de glitter plateado',
  },
  {
    img: 'blanconegro',
    name: 'Blanco y negro de autor',
    alt: 'Uñas con diseños florales y geométricos en blanco y negro',
  },
  {
    img: 'floral',
    name: 'Flores pastel sobre jeans',
    alt: 'Uñas con flores celestes y rosadas pintadas a mano apoyadas sobre jeans',
  },
  {
    img: 'vangogh2',
    name: 'Van Gogh con detalles en dorado',
    alt: 'Uñas con remolinos azules estilo Van Gogh y detalles en dorado y cristales',
  },
]

// Reseñas reales publicadas en Google Maps (nombres y fecha relativa).
export const REVIEWS = [
  {
    name: 'Sthefany Evangelista',
    when: 'hace 1 mes',
    text: 'Excelente servicio, los detalles y diseños de las niñas son muy originales, muy recomendado si buscas algo top. Amando mis uñas!',
  },
  {
    name: 'Natacha Araya',
    when: 'hace 3 semanas',
    text: 'Excelente servicio, muy amables. Son muy hábiles para crear los diseños que quieres. Muy recomendado.',
  },
  {
    name: 'Claudia Valdés',
    when: 'hace 1 mes',
    text: 'Excelente experiencia. Llevo dos años yendo con ellas y siempre recibo una atención de primer nivel.',
  },
] as const
