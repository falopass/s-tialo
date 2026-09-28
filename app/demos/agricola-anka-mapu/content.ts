/**
 * app/demos/agricola-anka-mapu/content.ts
 *
 * Datos REALES verificados (2026-09-28):
 * - Ficha de Google Maps «Agrícola Anka Mapu Ltda»: Granja orgánica,
 *   Camino a Santa María, parcela 46, San Clemente (Talca, Maule) ·
 *   +56 9 9359 2381 · 4,6 de 5 en 83 reseñas.
 * - Horario publicado en la ficha: lun–vie 8:00–16:00, sáb–dom 16:00–18:30.
 * - Las fotos son reales, bajadas de la galería pública de la ficha.
 * - Mermeladas, helados y café a la venta: lo confirma la reseña de
 *   María Valdivia y su web «Anka Mapu — Vivir Orgánico» (granja
 *   agroecológica abierta a paseos de colegios, grupos y empresas,
 *   en pie desde 2012 entre Talca y San Clemente).
 * - Las citas son reseñas reales de la ficha (nombre de pila).
 */

export const BIZ = {
  name: 'Agrícola Anka Mapu',
  full: 'Agrícola Anka Mapu Ltda',
  rubro: 'Granja orgánica',
  address: 'Camino a Santa María, parcela 46',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9359 2381',
  whatsapp: '56993592381',
  rating: 4.6,
  ratingLabel: '4,6',
  reviews: 83,
  semana: 'Lunes a viernes · 8:00 a 16:00',
  finDe: 'Sábado y domingo · 16:00 a 18:30',
} as const

/**
 * El recorrido: las paradas que hace una visita en la granja, cada una con
 * foto real de la ficha de Google.
 */
export const PARADAS = [
  {
    n: '01',
    stop: 'El huerto',
    title: 'Señas de acelga y lechuga en cada cama',
    desc: 'Camas de cultivo rotuladas a mano, trabajadas en agroecología desde 2012. Lo que se cosecha acá termina en la mesa y en los frascos.',
    src: '/demos/agricola-anka-mapu/huerto.webp',
    alt: 'Camas de cultivo del huerto de Anka Mapu con el rótulo de madera «ACELGA» y hortalizas creciendo',
  },
  {
    n: '02',
    stop: 'Los animales',
    title: 'Cabras, burros, patos y alpacas a la mano',
    desc: 'La granja se recorre a pie y los animales se acercan solos: los niños pueden darles de comer en los corrales.',
    src: '/demos/agricola-anka-mapu/cabra.webp',
    alt: 'Niña alimentando a una cabra a través de la cerca del corral en la granja Anka Mapu',
  },
  {
    n: '03',
    stop: 'La pradera',
    title: 'Campo abierto entre Talca y San Clemente',
    desc: 'Praderas con alpacas, ovejas y burros pastando sueltos — «hay mucha naturaleza y árboles frutales», dicen las reseñas.',
    src: '/demos/agricola-anka-mapu/burros.webp',
    alt: 'Niño junto a dos burros en la pradera de la granja orgánica Anka Mapu',
  },
  {
    n: '04',
    stop: 'La cosecha del día',
    title: 'Del huerto a la canasta',
    desc: 'Acelgas, betarragas, zanahorias y lechugas recién cortadas: la verdura de la temporada se vende en la misma granja.',
    src: '/demos/agricola-anka-mapu/canasta.webp',
    alt: 'Canasta de mimbre con verduras recién cosechadas del huerto de Anka Mapu',
  },
  {
    n: '05',
    stop: 'La feria de la granja',
    title: 'Mermeladas, helados y café del huerto',
    desc: 'En la visita se pueden probar y comprar las mermeladas, los helados y el café que preparan con lo que cosechan.',
    src: '/demos/agricola-anka-mapu/feria.webp',
    alt: 'Stand de la granja Anka Mapu con carpas y mesas de productos en día de feria',
  },
] as const

export const RESENAS = [
  {
    text: 'Pasamos un día fenomenal en familia. Muy recomendado si te gusta la naturaleza, los animales de granja y comer lo que preparan de lo que cosechan en su propio huerto.',
    author: 'Ilich Rosendo Lugo',
    cuando: 'hace 5 meses',
  },
  {
    text: 'Es muy lindo, cuidan muy bien a los animalitos, hay mucha naturaleza y árboles frutales, es muy buen panorama para ir con niños.',
    author: 'Mary Duarte',
    cuando: 'hace 4 meses',
  },
  {
    text: 'Visitamos el lugar en un paseo del colegio, mi hija de 5 años estaba encantada con la granja y las actividades, también tienen mermeladas, helados y café a la venta, lo disfrutamos.',
    author: 'María Valdivia',
    cuando: 'hace 2 años',
  },
  {
    text: 'Es ideal para pasar un día diferente conectado con la naturaleza.',
    author: 'Isabel Rincón',
    cuando: 'hace 2 meses',
  },
  {
    text: 'Lindo lugar, muy tranquilo. Ideal para desconectarse un rato.',
    author: 'Nadia Ramos',
    cuando: 'hace 4 años',
  },
] as const

export const VISITAS = [
  'Paseos de colegios y jardines infantiles',
  'Salidas familiares los fines de semana',
  'Visitas de grupos y empresas',
  'Celebraciones de la Chilenidad en septiembre',
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero coordinar una visita a la granja Anka Mapu en San Clemente',
)}`

const MAPS_QUERY = 'Agrícola Anka Mapu Ltda, Camino a Santa María parcela 46, San Clemente, Maule, Chile'
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=-35.4924103,-71.5445494&z=15&output=embed`

export const IMG = '/demos/agricola-anka-mapu'
