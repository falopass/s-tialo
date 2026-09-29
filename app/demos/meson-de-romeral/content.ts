/**
 * app/demos/meson-de-romeral/content.ts
 *
 * Datos REALES verificados:
 * - Ficha de Google Maps: "Meson de Romeral", categoría Restaurante,
 *   Av. Libertad 1184, 3370000 Romeral, Maule. Rating 4,8 en la ficha en vivo;
 *   restaurantess.cl indexa 15 opiniones.
 * - Teléfono +56 9 5909 0883 (ficha de Maps y restaurantess.cl).
 * - Horario publicado por su ficha: lun–mar 12:00–16:00; mié–vie
 *   12:00–16:00 y 17:30–22:30; sábado 17:30–22:30; domingo cerrado.
 *   Se presenta referencial y se pide confirmar por WhatsApp.
 * - Registro mercantil: Sociedad Gastronómica Mesón de Romeral SpA,
 *   constituida el 24 de septiembre de 2026 (EMIS) — el mesón es nuevo.
 * - Foto: la única imagen real publicada en su ficha de Maps (salón con
 *   lámparas de cobre). El resto de los visuales son bosquejos marcados.
 */

export const BIZ = {
  name: 'Mesón de Romeral',
  rubro: 'Restaurante · cocina chilena',
  address: 'Av. Libertad 1184',
  city: 'Romeral',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5909 0883',
  whatsapp: '56959090883',
  rating: '4,8',
  reviews: 15,
  mapsPlaceUrl:
    'https://www.google.com/maps/place/Meson+de+Romeral/data=!4m2!3m1!1s0x9664f9238b9c921f:0x1d49cac86ab7c512!10m1!1e1',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Mesón de Romeral y quiero consultar',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar mesa en el Mesón de Romeral',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Meson de Romeral Av. Libertad 1184 Romeral Maule Chile',
)}&output=embed`

export const IMG = '/demos/meson-de-romeral'

// Horario publicado en su ficha: mediodía todos los días de semana;
// de miércoles a sábado vuelve a abrir en la tarde.
export const HORARIO = [
  { d: 'Lunes y martes', h: '12:00 – 16:00' },
  { d: 'Miércoles a viernes', h: '12:00 – 16:00 · 17:30 – 22:30' },
  { d: 'Sábado', h: '17:30 – 22:30' },
  { d: 'Domingo', h: 'Cerrado' },
] as const
