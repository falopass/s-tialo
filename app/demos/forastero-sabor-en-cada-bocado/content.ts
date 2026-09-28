/**
 * app/demos/forastero-sabor-en-cada-bocado/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps y página de Facebook
 * Forastero Pencahue): nombre, dirección (Francisco de Villagra 704,
 * Pencahue), WhatsApp (9 4731 1047), 5,0 estrellas con 4 reseñas en
 * Google, 3,8 mil seguidores en Facebook y los platos que publican
 * (Salchi Forastera, Salchi Golosa, Salchi Glotona, pizzas, ass
 * forasteros, completos, empanadas, churrascos y delivery). Las promos
 * mostradas son las gráficas reales que el local publica en Facebook;
 * su vigencia se confirma por WhatsApp.
 */

export const BIZ = {
  name: 'FORASTERO sabor en cada bocado',
  short: 'FORASTERO',
  rubro: 'Restaurante y delivery',
  tagline: 'sabor en cada bocado',
  address: 'Francisco de Villagra 704',
  city: 'Pencahue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4731 1047',
  phoneTel: '+56947311047',
  whatsapp: '56947311047',
  rating: '5,0',
  reviews: 4,
  fbFollowers: '3,8 mil',
  facebook: 'https://www.facebook.com/share/1E1vQCNkSR/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de FORASTERO y quiero reservar una mesa',
)}`

export const WA_LINK_LLEVAR = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de FORASTERO y quiero pedir para llevar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'FORASTERO sabor en cada bocado, Francisco de Villagra 704, Pencahue, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'FORASTERO, Francisco de Villagra 704, Pencahue, Chile',
)}&output=embed`

export const IMG = '/demos/forastero-sabor-en-cada-bocado'
