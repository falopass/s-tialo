/**
 * app/demos/mercado-macro-feria-de-talca/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps): nombre,
 * dirección, teléfono, apertura 6 AM, rating 4,2 con 671 opiniones,
 * las palabras que más menciona la gente en las reseñas y las fotos.
 * El gatito regalón es real: está mencionado en las reseñas de Maps.
 */

export const BIZ = {
  name: 'Mercado Macro Feria de Talca',
  short: 'La Macro Feria',
  rubro: 'Feria y mercado',
  address: 'Calle 18 Oriente 1878',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8685 0236',
  phoneTel: '+56986850236',
  whatsapp: '56986850236',
  opens: 'Abre 6:00 AM',
  rating: 4.2,
  reviews: 671,
  lat: -35.4228286,
  lng: -71.6362574,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, consulta sobre la Macro Feria de Talca',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Mercado Macro Feria De Talca 18 Oriente 1878',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${BIZ.lat},${BIZ.lng}&output=embed`

export const IMG = '/demos/mercado-macro-feria-de-talca'

/** Palabras reales que más repite la gente en las reseñas de Maps. */
export const MENCIONAN = [
  ['precios', '55 reseñas'],
  ['verduras', '28 reseñas'],
  ['económico', '9 reseñas'],
  ['tacos', '9 reseñas'],
] as const

export const FOTOS = [
  {
    src: 'interior.webp',
    alt: 'Interior de la Macro Feria: pasillo techado con puestos de frutas y verduras',
    tag: 'el interior',
  },
  {
    src: 'letrero.webp',
    alt: 'Letrero azul en la Macro Feria: Número 1 en mercado hortofrutícola de la Región del Maule',
    tag: 'su letrero real',
  },
  {
    src: 'frutillas.webp',
    alt: 'Manos lavando frutillas en un puesto de la feria',
    tag: 'fruta de temporada',
  },
  {
    src: 'puesto.webp',
    alt: 'Puesto de verduras y frutas ordenado en la entrada de la feria',
    tag: 'los puestos',
  },
  {
    src: 'duraznos.webp',
    alt: 'Duraznos amarillos y rosados en oferta en la feria',
    tag: 'del camión a la mesa',
  },
  {
    src: 'callejon.webp',
    alt: 'Callejón de la Macro Feria con furgones de los puestos',
    tag: 'los callejones',
  },
  {
    src: 'gatito.webp',
    alt: 'El gato regalón de la Macro Feria caminando entre los puestos',
    tag: 'el gatito regalón',
  },
] as const

export const RESENA = {
  autor: 'Margarita Ines M',
  texto: 'Muy surtido y colorido. Con el infaltable gatito regalón.',
  cuando: 'Hace 5 años · Google',
} as const
