/**
 * app/demos/el-paraiso-mascotas-valdivia/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps, 11-11-2026): nombre,
 * categoría (tienda de productos para mascotas), dirección (Av. Argentina
 * 2557, Valdivia), teléfono, horario (lun a vie 10:00 a 21:00, sáb 10:00 a
 * 20:00, dom 11:00 a 17:00), 4 opiniones y los textos citados. "Venta de
 * alimentos por mayor y al detalle" sale de su letrero y su mural (fotos de
 * la ficha). Fotos y logo: todos de la ficha de Maps. Las marcas de ESTANTE
 * son las que aparecen en esas fotos; no hay precios ni stock publicados.
 * Maps no muestra el número del rating en la vista leída: el sitio no lo usa.
 */

export const BIZ = {
  name: 'El Paraíso Mascotas',
  short: 'El Paraíso Mascotas',
  rubro: 'Tienda de mascotas',
  address: 'Av. Argentina 2557',
  city: 'Valdivia',
  region: 'Región de Los Ríos',
  phoneDisplay: '+56 9 7874 6694',
  phoneTel: '+56978746694',
  whatsapp: '56978746694',
  reviews: 4,
} as const

export const HORARIO = [
  { dia: 'Lunes a viernes', hora: '10:00 a 21:00' },
  { dia: 'Sábado', hora: '10:00 a 20:00' },
  { dia: 'Domingo', hora: '11:00 a 17:00' },
] as const

// Lo que se ve en las fotos de la tienda.
export const ESTANTE = [
  { img: 'maxine', titulo: 'Alimento para perros', detalle: 'Sacos grandes, como Maxine', alt: 'Saco de alimento para perro Maxine de 21 kg' },
  { img: 'doko', titulo: 'Perros de todos los tamaños', detalle: 'Doko de Purina, entre otros', alt: 'Saco de alimento Doko de Purina para perros adultos' },
  { img: 'fit-formula', titulo: 'Alimento para gatos', detalle: 'Fit Formula y más', alt: 'Saco de alimento Fit Formula para gato adulto' },
  { img: 'churu', titulo: 'Premios y snacks', detalle: 'Churu para gatos', alt: 'Frascos de snacks Churu para gatos' },
  { img: 'higiene', titulo: 'Higiene', detalle: 'Shampoo en seco y talco repelente', alt: 'Frascos de shampoo en seco y talco repelente para mascotas' },
] as const

export const OPINIONES = [
  { autor: 'Claudio Sepúlveda', texto: 'Tienen de todo y muy buenos precios.' },
  { autor: 'Claudio Araneda', texto: 'Buena atención y calidad en productos.' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de El Paraíso Mascotas y quiero hacer una consulta',
)}`

export const WA_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de El Paraíso Mascotas y quiero consultar por este alimento: ',
)}`

export const WA_MAYOR = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de El Paraíso Mascotas y quiero consultar por compras al por mayor',
)}`

// URL real de la ficha (leída el 11-11-2026).
export const MAPS_URL =
  'https://www.google.com/maps/place/El+Paraiso+Mascotas/@-39.8258067,-73.2094809,17z/data=!4m6!3m5!1s0x9615ef8e2152baeb:0x594be5781828527c!8m2!3d-39.8258067!4d-73.2094809'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'El Paraíso Mascotas, Av. Argentina 2557, Valdivia, Chile',
)}&output=embed`

export const IMG = '/demos/el-paraiso-mascotas-valdivia'
