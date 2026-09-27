/**
 * app/demos/forastero-sabor-en-cada-bocado/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y Facebook):
 * nombre, dirección, las 4 reseñas de Google, los 3.852 seguidores de
 * Facebook y el WhatsApp. Todo lo demás (platos, precios, horarios,
 * reseñas citadas) es contenido de muestra para mostrar cómo se
 * vería el sitio.
 */

export const BIZ = {
  name: 'FORASTERO sabor en cada bocado',
  short: 'FORASTERO',
  rubro: 'Restaurante',
  address: 'Francisco de Villagra 704',
  city: 'Pencahue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4731 1047',
  phoneTel: '+56947311047',
  whatsapp: '56947311047',
  reviews: 4,
  fbFollowers: '3.852',
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
