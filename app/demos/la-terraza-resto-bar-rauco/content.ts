/**
 * app/demos/la-terraza-resto-bar-rauco/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + carta e
 * imágenes publicadas por el propio local, verificados 2026-09-29):
 * nombre, rubro (pub/karaoke/restobar), dirección Av. Diego Portales 2814
 * en el km 9,3 antes de Rauco, teléfono, nota 4.2 con 99 reseñas, los
 * precios de la carta y el IG (@laterraza.restobar, estampado en su
 * propia carta). Las fotos de public/demos/la-terraza-resto-bar-rauco/
 * salen de su ficha de Google Maps.
 * OJO: existe otro demo `la-terraza` de un negocio homónimo de Río Claro;
 * no tienen relación. Maps reporta "24 horas": dato dudoso, se omite y
 * solo se afirma música en vivo viernes y sábado (según sus reseñas).
 */

export const BIZ = {
  name: 'La Terraza',
  nameFull: 'La Terraza Restobar Rauco',
  rubro: 'Pub · Karaoke · Restobar',
  address: 'Av. Diego Portales 2814, km 9,3',
  city: 'Rauco',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5987 6429',
  whatsapp: '56959876429',
  instagram: 'laterraza.restobar',
  googleRating: 4.2,
  googleReviews: 99,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Terraza y quiero consultar',
)}`

export const INSTAGRAM_URL = `https://instagram.com/${BIZ.instagram}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'La Terraza Restobar, Av. Diego Portales 2814, Rauco, Maule',
)}`

// Coordenadas exactas de la ficha: el pin cae sobre el local.
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-34.9262723,-71.3139088&z=15&output=embed'

export const IMG = '/demos/la-terraza-resto-bar-rauco'

// Precios tal cual salen en su carta publicada.
export const CARTA: { name: string; price: string; note?: string }[] = [
  { name: 'Ceviche de salmón', price: '$10.990' },
  { name: 'Ceviche mixto camarón y salmón', price: '$12.000' },
  { name: 'Arrollado primavera · 4 uni', price: '$2.000' },
  { name: 'Empanada pollo mandarín · 4 uni', price: '$2.500' },
  { name: 'Salchipapas', price: '$3.800' },
  { name: 'Nuggets · 12 uni', price: '$3.500' },
  { name: 'Alitas crispy · 10 uni', price: '$8.500' },
  { name: 'Tabla Chicken Wings', price: '$10.000', note: '5 piezas de pollo, 5 empanadas, porción de papas y salsa' },
  { name: 'Tabla Mix La Terraza', price: '$12.000', note: 'Papas, empanadas de queso, aros de cebolla, arrollados y más' },
]
