/**
 * app/demos/comercializadora-oriente-talca/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps
 * "Comercializadora Oriente Talca", verificada 2026-09-28):
 * - Nombre, categoría (mayorista), dirección (Ocho Sur 2068,
 *   Talca), teléfono (+56 9 4271 0800), horario (todos los días
 *   10:00–19:00) y rating 4,6 con 25 reseñas.
 * - Segundo local "Comercializadora Oriente Talca Centro"
 *   (ficha propia en Maps): 2 Sur 1480, +56 9 7163 2139.
 * - Categorías y frase tomadas del letrero de su fachada:
 *   juguetes, electrónica, artículos del hogar, deporte;
 *   "importadores directos — líderes en el mercado mayorista".
 * - Instagram visible en su letrero: @comercializadoraorientetalca.
 * - No publica sitio web ni WhatsApp: el contacto es el teléfono.
 * - Las reseñas citadas son textuales de la ficha. Las fotos y
 *   el logo son los publicados por el negocio en su ficha.
 */

export const BIZ = {
  name: 'Comercializadora Oriente Talca',
  short: 'Comercializadora Oriente',
  rubro: 'Mayorista · importadores directos',
  address: 'Ocho Sur 2068',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4271 0800',
  phoneTel: '+56942710800',
  rating: '4,6',
  reviews: 25,
  instagram: 'comercializadoraorientetalca',
  instagramUrl: 'https://www.instagram.com/comercializadoraorientetalca/',
} as const

export const LOCAL_CENTRO = {
  name: 'Comercializadora Oriente Talca Centro',
  address: '2 Sur 1480',
  phoneDisplay: '+56 9 7163 2139',
  phoneTel: '+56971632139',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`
export const CALL_LINK_CENTRO = `tel:${LOCAL_CENTRO.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Comercializadora Oriente Talca, Ocho Sur 2068, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Comercializadora Oriente Talca, Ocho Sur 2068, Talca, Chile',
)}&output=embed`

export const HOURS = 'Todos los días · 10:00–19:00'

export const IMG = '/demos/comercializadora-oriente-talca'
