/**
 * app/demos/la-pica-de-pato-miza/content.ts
 *
 * Datos REALES verificados:
 * - Ficha de Google Maps: "La picá de pato miza", categoría Restaurante,
 *   Av. Bernardo O'Higgins, Romeral, Maule (restaurantess.cl la ubica en la
 *   misma vía: camino J-55 4704). Rating 4,7 en la ficha en vivo;
 *   restaurantess.cl indexa 12 opiniones.
 * - Atributos de su ficha de Maps: "se identifica como mujer empresaria"
 *   y "amigable con LGBTQ+".
 * - Teléfono +56 9 9864 4105 (ficha de Maps y restaurantess.cl).
 * - Horario publicado: lun–vie desde la mañana (~9:00) hasta las 19:00;
 *   sábado 10:00–18:00; domingo cerrado. Referencial — confirmar por WhatsApp.
 * - Foto: la única imagen real de su ficha de Maps (interior rústico con
 *   vigas, ampolletas colgantes y pizarras sobre el muro de hiedra). El resto
 *   de los visuales son bosquejos marcados.
 */

export const BIZ = {
  name: 'La Picá de Pato Miza',
  rubro: 'Restaurante · picada de campo',
  address: "Av. Bernardo O'Higgins",
  addressAlt: 'Camino J-55 4704',
  city: 'Romeral',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9864 4105',
  whatsapp: '56998644105',
  rating: '4,7',
  reviews: 12,
  mapsPlaceUrl:
    'https://www.google.com/maps/place/La+pic%C3%A1+de+pato+miza/data=!4m2!3m1!1s0x9664f9000ed38639:0x11981506033232cb!10m1!1e1',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Picá de Pato Miza y quiero consultar',
)}`

export const WA_LINK_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero consultar por el almuerzo del día en La Picá de Pato Miza',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "La picá de pato miza Av. Bernardo O'Higgins Romeral Maule Chile",
)}&output=embed`

export const IMG = '/demos/la-pica-de-pato-miza'

export const HORARIO = [
  { d: 'Lunes a viernes', h: '9:00 – 19:00' },
  { d: 'Sábado', h: '10:00 – 18:00' },
  { d: 'Domingo', h: 'Cerrado' },
] as const
