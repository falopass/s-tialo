/**
 * app/demos/peluqueria-barberia-byc-puerto-montt/content.ts
 *
 * REAL (ficha de Google Maps, revisada el 11-11-2026): nombre
 * "Peluquería y Barbería B&C" (el dueño firma "Somos Salones B&C"),
 * dirección Las Loicas 2134 esquina Av. Vicuña Mackenna, junto al
 * parque, Puerto Montt; horario lunes a sábado 10:00 a 20:00, domingo
 * cerrado; WhatsApp +56 9 8934 3274; 127 opiniones en Google (la ficha
 * no muestra nota en el brief: no se publican estrellas); el enlace de
 * Maps y el embed; las tres citas de OPINIONES son textuales de la
 * ficha. REAL (fotos de la misma ficha): equipo con camisa del local,
 * dueños frente al muro a cuadros con el logo, sillón de barbero,
 * cortes con degradado y raya, alisado platinado, ondas y mechas.
 * REAL (de las opiniones): se puede reservar hora, cumplen el horario,
 * local ordenado y limpio, atienden a hombres y mujeres.
 * DE MUESTRA: titulares, textos de apoyo y nombres de sección. Sin
 * precios ni lista de servicios inventada.
 */

export const BIZ = {
  name: 'Peluquería y Barbería B&C',
  short: 'Salones B&C',
  rubro: 'Peluquería y barbería',
  address: 'Las Loicas 2134',
  addressFull: 'Las Loicas 2134, esquina Av. Vicuña Mackenna',
  landmark: 'junto al parque',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 8934 3274',
  whatsapp: '56989343274',
  reviews: 127,
  horarioSemana: 'Lunes a sábado · 10:00 a 20:00',
  horarioDomingo: 'Domingo · cerrado',
} as const

export const WA_LINK =
  'https://wa.me/56989343274?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20B%26C%20y%20quiero%20reservar%20una%20hora'

export const MAPS_URL =
  'https://www.google.com/maps/place/Peluquer%C3%ADa+y+Barber%C3%ADa+B%26C/@-41.4777946,-72.9906012,17z/data=!4m6!3m5!1s0x96183ba0e5ad2fe9:0x230e33b337906f3c!8m2!3d-41.4777946!4d-72.9906012'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-41.4777946,-72.9906012&z=16&output=embed'

/** Citas textuales de las opiniones de Google de la ficha. */
export const OPINIONES = [
  {
    text: 'Excelente atención. He reservado en varias ocasiones y siempre cumplen con el horario. El lugar está ordenado y limpio.',
    author: 'Nicolás S.',
  },
  {
    text: 'Excelente servicio, muy amables y una atención de calidad. 100% recomendable.',
    author: 'Juan T.',
  },
  {
    text: 'Excelente atención, me fui muy contenta del lugar, se logró sin dudas lo que yo quería.',
    author: 'J&M S.',
  },
] as const

export const IMG = '/demos/peluqueria-barberia-byc-puerto-montt'
