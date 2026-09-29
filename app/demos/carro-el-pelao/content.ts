/**
 * app/demos/carro-el-pelao/content.ts
 *
 * Datos del mockup. REALES y verificados (29-09-2026):
 * - Ficha de Google Maps «Carro el Pelao» (comida rápida): Licanten,
 *   Licantén, Maule; teléfono +56 9 8735 3126; nota 4,7 con 152 reseñas;
 *   horario Lun–Vie 8:00–23:30, Sáb 8:00–14:30, Dom 18:00–00:00.
 * - Carta tomada del letrero pintado del carro (visible en las fotos de
 *   la ficha): completos, churrascos, lomitos, barros luco, mechada,
 *   sandwiches, té y café, bebidas y jugos. No publican precios.
 * - Reseñas: texto real de la ficha de Google (autor, fecha y nota).
 * - Fotos: descargadas de la ficha de Maps del negocio. El logo es el
 *   letrero circular «CARRO EL PELAO» recortado de una foto real.
 *   Sin imágenes generadas en este demo.
 */

export const BIZ = {
  name: 'Carro El Pelao',
  short: 'El Pelao',
  rubro: 'Comida rápida',
  address: 'A la salida de Licantén',
  city: 'Licantén',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8735 3126',
  phoneTel: '+56987353126',
  whatsapp: '56987353126',
  rating: 4.7,
  reviews: 152,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Carro El Pelao y quiero hacer un pedido',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Carro el Pelao, Licantén, Región del Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Carro el Pelao, Licantén, Región del Maule',
)}&output=embed`

export const IMG = '/demos/carro-el-pelao'
