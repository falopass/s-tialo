/**
 * app/demos/jesica-munoz-peluqueria-puerto-montt/content.ts
 *
 * Datos del mockup. REALES: nombre (ficha de Google Maps: «Jesica
 * Peluquería Centro Estética»; en Instagram «Peluquería Jesica Muñoz»,
 * marca corta «Jesica Peluquería»), «Centro de estética solo para
 * mujeres» (bio de Instagram @jesicamunozpeluqueria), dirección Daitao
 * 470, Puerto Montt (Maps), WhatsApp +56 9 6578 0940 (mismo número en
 * la ficha de Maps y en el link wa.me de la bio de Instagram), nota
 * 4,2 con 50 opiniones en Google y las tres citas textuales con nombre
 * (Google). Servicios reales vistos en sus publicaciones: color y
 * mechas (iluminaciones), tinturas, alisado, peinados y maquillaje para
 * ocasiones especiales, gift card y academia (su asistente de WhatsApp
 * se presenta como «centro estética & academia»). NO hay horario ni
 * precios publicados: no se muestran. Los titulares y textos de apoyo
 * son de muestra.
 */

export const BIZ = {
  name: 'Jesica Peluquería Centro Estética',
  short: 'Jesica Peluquería',
  rubro: 'Peluquería y centro de estética',
  tagline: 'Centro de estética solo para mujeres',
  address: 'Daitao 470',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 6578 0940',
  whatsapp: '56965780940',
  rating: '4,2',
  ratingValue: 4.2,
  reviews: 50,
  instagram: 'https://www.instagram.com/jesicamunozpeluqueria/',
  instagramUser: '@jesicamunozpeluqueria',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Jesica, quiero agendar una hora',
)}`

export const WA_LINK_ACADEMIA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Jesica, quiero consultar por la academia',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Jesica Peluqueria Centro Estetica, Daitao 470, Puerto Montt, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Jesica Peluqueria Centro Estetica, Daitao 470, Puerto Montt, Chile',
)}&output=embed`

export const IMG = '/demos/jesica-munoz-peluqueria-puerto-montt'
