/**
 * app/demos/los-campos-de-molina/content.ts
 *
 * Datos verificados del Restaurante Los Campos de Molina (Molina, Maule).
 *
 * Fuentes:
 *  - Ficha Google Maps "Los Campos De Molina" (place 11fx8bpmpp):
 *    categoría Restaurante, Libertad 1481, Molina; tel. +56 9 2007 2876;
 *    rating 4,2 (100 reseñas); horario todos los días 9:00–17:00.
 *  - Foto de la carta del local (en la misma ficha): precios de sándwiches
 *    y ensaladas usados en la sección de carta — ver MENU.
 *  - Reseñas reales citadas: Patricio Villarreal, Carlos Vargas, Cynthia
 *    Parra (5★/5★/5★) — texto original en español de la ficha.
 *  - Logo recortado de la foto de la carta ("El sabor del campo a su mesa").
 *
 * Omisos: sin web ni redes confirmadas; solo WhatsApp.
 */

export const BIZ = {
  name: 'Los Campos de Molina',
  short: 'Los Campos',
  rubro: 'Restaurante · fuente de soda',
  address: 'Libertad 1481',
  city: 'Molina',
  region: 'Maule',
  phoneDisplay: '+56 9 2007 2876',
  phoneTel: '+56920072876',
  whatsapp: '56920072876',
  rating: 4.2,
  reviews: 100,
  hours: 'Todos los días, 9:00 a 17:00',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  `Hola, quiero pedir un lunch en ${BIZ.name}, ${BIZ.address}.`,
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Los+Campos+De+Molina/@-35.1149088,-71.2822066,17z'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Los Campos De Molina, Libertad 1481, Molina',
)}&output=embed`

const IMG_DIR = '/demos/los-campos-de-molina'

export const IMG = {
  logo: `${IMG_DIR}/logo.png`,
  fachada: `${IMG_DIR}/fachada.webp`,
  interior: `${IMG_DIR}/interior.webp`,
  chuleta: `${IMG_DIR}/plato-chuleta.webp`,
  pollo: `${IMG_DIR}/plato-pollo.webp`,
  asado: `${IMG_DIR}/plato-asado.webp`,
  cazuela: `${IMG_DIR}/cazuela.webp`,
  ensalada: `${IMG_DIR}/ensalada.webp`,
  carta: `${IMG_DIR}/carta.webp`,
}

/** Precios reales, leídos de la carta del local (foto de su ficha Maps). */
export const MENU = {
  sandwiches: [
    ['Ave solo', '$4.000'],
    ['Ave mayo', '$4.200'],
    ['Ave tomate', '$4.200'],
    ['Ave palta', '$4.500'],
    ['Ave italiano', '$4.800'],
    ['Ave queso', '$4.500'],
    ['Mechada sola', '$5.000'],
    ['Mechada mayo', '$5.200'],
    ['Mechada tomate', '$5.200'],
    ['Mechada palta', '$5.500'],
    ['Mechada italiano', '$5.800'],
    ['Mechada queso', '$5.500'],
    ['Queso caliente', '$3.000'],
    ['Barros Jarpa', '$3.800'],
    ['Jamón solo', '$3.000'],
    ['Paila de huevo', '$3.000'],
    ['Tostadas margarina', '$2.000'],
    ['Tostadas mermelada', '$2.000'],
  ],
  ensaladas: [
    ['Individual surtida', '$2.000'],
    ['Chilena', '$2.500'],
    ['Tomate', '$2.000'],
    ['Familiar', '$3.990'],
  ],
  nota: 'Todos los sándwiches incluyen de regalo un té o café.',
}

export const RESENAS = [
  {
    nombre: 'Patricio Villarreal',
    estrellas: 5,
    texto:
      'Pedimos merluza con agregado y estaba exquisita; hasta nos llevaron postre de cortesía. Atención rápida y eficiente.',
  },
  {
    nombre: 'Carlos Vargas',
    estrellas: 5,
    texto:
      'Rica comida al estilo de la casa, abundante y por precio económico.',
  },
  {
    nombre: 'Cynthia Parra',
    estrellas: 5,
    texto:
      'Comida fresca, casera, abundante y excelente atención.',
  },
]
