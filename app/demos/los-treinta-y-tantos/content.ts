/**
 * app/demos/los-treinta-y-tantos/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps):
 * nombre, dirección (Av. Balmaceda 135, Maule), teléfono/WhatsApp
 * (+56 9 4472 6920), rating 4,1 con 126 reseñas, horario publicado
 * (10:00 a 23:00) y los platos destacados de su ficha (Pastel de
 * Choclo, Puré, Ceviche de Camarón, Chorrillana, Ensalada Mixta).
 * Las reseñas citadas son textos reales de su ficha de Google.
 * Las fotos son reales, de su propia ficha de Google Maps.
 */

export const BIZ = {
  name: 'Los Treinta Y Tantos',
  short: 'Treinta Y Tantos',
  rubro: 'Restaurante',
  address: 'Av. Balmaceda 135',
  city: 'Maule',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4472 6920',
  whatsapp: '56944726920',
  rating: '4,1',
  reviews: 126,
  horario: 'Todos los días, de 10:00 a 23:00',
  plusCode: 'F8G6+MH Maule',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Los Treinta Y Tantos, vi su página y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar mesa en Los Treinta Y Tantos, Maule',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Los Treinta Y Tantos, Av. Balmaceda 135, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Los Treinta Y Tantos, Av. Balmaceda 135, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/los-treinta-y-tantos'
