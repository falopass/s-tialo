/**
 * app/demos/pisco-lima-restaurant/content.ts
 *
 * Datos del mockup. REALES (verificados 2026-09-29 en ficha de Google
 * Maps y gráfica propia del restaurante): nombre, dirección
 * (Cruz 370, Constitución), teléfono/WhatsApp, Instagram
 * (@piscolima.constitucion), rubro y reseñas de la ficha. La cadena
 * tiene además locales en Sector Las Rastras, Av. 4 Norte (Talca) y
 * La Casona Grill (Echeverría 495, Constitución). La carta y los
 * precios son de muestra para mostrar cómo se vería el sitio.
 */

export const BIZ = {
  name: 'Pisco & Lima Restaurant',
  short: 'Pisco & Lima',
  rubro: 'Restaurante peruano',
  address: 'Cruz 370',
  city: 'Constitución',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7706 5812',
  phoneTel: '+56977065812',
  whatsapp: '56977065812',
  instagram: 'https://www.instagram.com/piscolima.constitucion',
  igUser: '@piscolima.constitucion',
  rating: '4,5',
  reviews: 338,
  // otros locales de la marca (de su propia gráfica)
  casas: ['Sector Las Rastras', 'Av. 4 Norte, Talca', 'Cruz 370, Constitución'],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Pisco & Lima y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Pisco & Lima y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Pisco & Lima Restaurant, Cruz 370, Constitución, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Pisco & Lima Restaurant, Cruz 370, Constitución, Chile',
)}&output=embed`

export const IMG = '/demos/pisco-lima-restaurant'
