/**
 * app/demos/hosteria-la-huerta/content.ts
 *
 * Datos verificados en la ficha de Google Maps (29-09-2026):
 * nombre, categoría (restaurante), dirección (Av. Chiripilco 289,
 * Hualañé), teléfono, rating 4,2 con 450 opiniones, las ofertas del
 * letrero a mano del local y las reseñas citadas. El hospedaje lo
 * declara el propio letrero ("HOSTERIA - HOSPEDAJE") y lo mencionan
 * las reseñas. No hay horario publicado: se deriva a WhatsApp.
 */

export const BIZ = {
  name: 'Hostería La Huerta',
  short: 'La Huerta',
  rubro: 'Hostería y restaurante',
  address: 'Av. Chiripilco 289',
  city: 'Hualañé',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9824 6528',
  phoneTel: '+56998246528',
  whatsapp: '56998246528',
  rating: '4,2',
  reviews: 450,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Hostería La Huerta y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Hostería La Huerta y quiero consultar por mesa u hospedaje',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Hostería La Huerta, Av. Chiripilco 289, Hualañé, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Hostería La Huerta, Av. Chiripilco 289, Hualañé, Chile',
)}&output=embed`

export const IMG = '/demos/hosteria-la-huerta'
