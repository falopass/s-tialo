/**
 * app/demos/bajon-de-la-alameda/content.ts
 *
 * Datos del demo. REALES:
 * - Ficha de Google Maps: "Bajón De La Alameda", puesto de perros
 *   calientes en Valentín Letelier 518, Linares; rating 4,4; teléfono
 *   fijo (73) 262 2780; la ficha muestra martes 9:00–24:00.
 * - restaurantess.cl (directorio de fichas de Google): ~597 opiniones.
 * - SERNATUR (serviciosturisticos.cl, ficha "EL BAJON DE LA ALAMEDA"):
 *   Valentín Letelier Nº518, Linares; teléfono móvil +56 9 4981 3206.
 * - Fotos reales de la ficha (solo hay 2 publicadas): el completo
 *   italiano y los dueños en su stand de la Expo del Buen Mote con
 *   Huesillo de Linares (Plaza de Armas). No hay logo ni redes sociales
 *   confirmadas: el logo tipográfico se dibuja con texto.
 * - Reseñas citadas: textos reales de sus opiniones de Google
 *   (recogidas vía directorios que republican la ficha).
 * No publica precios en su ficha: la carta va sin valores.
 */

export const BIZ = {
  name: 'Bajón De La Alameda',
  short: 'El Bajón',
  rubro: 'Puesto de perros calientes',
  address: 'Valentín Letelier 518',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '(73) 262 2780',
  phoneTel: '+56732622780',
  whatsapp: '56949813206',
  rating: '4,4',
  reviews: 'casi 600',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Bajón de la Alameda y quiero hacer un pedido',
)}`

export const WA_LINK_RICO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, se me antojó un completo — ¿qué tienen hoy?',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Bajón De La Alameda, Valentín Letelier 518, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Bajón De La Alameda, Valentín Letelier 518, Linares, Chile',
)}&output=embed`

export const IMG = '/demos/bajon-de-la-alameda'

export const CARTA = [
  {
    n: '01',
    name: 'Completo italiano',
    desc: 'El de la foto: vienesa, palta, tomate y mayo — en pan levemente tostado. El clásico que pide todo Linares.',
    tag: 'el más pedido',
  },
  {
    n: '02',
    name: 'Completo vienesa Llanquihue',
    desc: 'La vienesa que sus clientes nombran por nombre en las reseñas: sabor intenso, palta y tomate frescos.',
    tag: 'favorito de la casa',
  },
  {
    n: '03',
    name: 'Churrasco con mayo casera',
    desc: 'Carne sabrosa y la mayo casera que se repite en los comentarios — la marca registrada del local.',
    tag: 'con mayo casera',
  },
  {
    n: '04',
    name: 'Para el bajón post carrete',
    desc: 'Abiertos hasta medianoche según su ficha: la parada de siempre cuando salen las ganas de completos.',
    tag: 'hasta las 24:00',
  },
] as const

export const RESENAS = [
  {
    name: 'C. M.',
    stars: 5,
    text: 'Muy ricos completos y churrascos con carne mechada, ambos con mayonesa casera. Rápida atención. Una deliciosa parada en Linares cerca de áreas verdes.',
  },
  {
    name: 'Cliente de Google',
    stars: 5,
    text: 'Nunca falla en tus bajones post carretes, siempre atendido por un excelente personal. Me encanta el completo con vienesa Llanquihue: pan levemente tostado, palta fresca y tomate fresco.',
  },
  {
    name: 'J. B.',
    stars: 5,
    text: 'Los más ricos completos y churrascos de Linares a mi gusto.',
  },
] as const
