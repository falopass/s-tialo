/**
 * app/demos/jardin-y-vivero-el-canelo/content.ts
 *
 * Datos reales verificados (sept 2026):
 * - Ficha Google Maps: «Jardín y Vivero El Canelo», centro de jardinería,
 *   Talca (coord -35.3997,-71.6269, entrada norte pasando la UTalca),
 *   tel +56 9 8990 2539, rating 4,9 con 46 opiniones, lun–dom 8:00–18:00,
 *   web listada: facebook.com.
 * - Outdooractive (descripción del lugar): la señora Norma Espinoza,
 *   "la reina de las plantas", hace injertos y cultiva plantas de
 *   interior, exterior, cactus, frutales, medicinales, de temporada y
 *   exóticas; estacionamiento en el vivero; micros 1, 2 y 5 dejan en la
 *   entrada del callejón del Canelo.
 * - Reseñas reales tomadas de la ficha de Google (suculentas, cactus,
 *   tierra de hojas, maceteros, precios).
 *
 * Fotos: todas reales, bajadas de la ficha de Google Maps del negocio
 * (fachada con la placa, invernaderos, plantas, suculentas). No se
 * encontró logo usable: el nombre y las fotos mandan.
 */

export const BIZ = {
  name: 'Jardín y Vivero El Canelo',
  short: 'Vivero El Canelo',
  rubro: 'Centro de jardinería',
  address: 'Entrada norte de Talca, pasando la Universidad de Talca',
  addressShort: 'El Canelo, entrada norte',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8990 2539',
  phoneTel: '56989902539',
  rating: 4.9,
  ratingDisplay: '4,9',
  reviews: 46,
  hours: 'Todos los días · 8:00–18:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Jardín y Vivero El Canelo, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Jardín y Vivero El Canelo, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/jardin-y-vivero-el-canelo'

export const CINTA = [
  'Suculentas',
  'Cactus',
  'Frutales',
  'Medicinales',
  'Injertos',
  'Plantas de interior',
  'Tierra de hojas',
  'Maceteros',
  'Temporada',
  'Exóticas',
]

export const RESENAS = [
  {
    stars: 5,
    text: 'Muy amable y amorosa Norma, dispuesta a atender muy bien a sus clientes. Gran variedad de suculentas y cactus que fue lo que andábamos buscando. Buenos precios.',
    author: 'Juan Flores',
  },
  {
    stars: 5,
    text: 'Hermoso lugar, buena atención, precios convenientes, una variedad impresionante, lo mejor de la zona. 100% recomendado.',
    author: 'Priscila Lara',
  },
  {
    stars: 4,
    text: 'Gran variedad de plantas, venta de tierra de hojas y maceteros, precios razonables. Buena atención y estacionamiento.',
    author: 'Carlos Santverg',
  },
]
