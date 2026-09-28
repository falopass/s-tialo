/**
 * app/demos/style-kids/content.ts
 *
 * Datos del mockup. REALES: ficha de Google Maps ("Style kids",
 * peluquería, Calle 9 Oriente 918, Talca; teléfono +56 9 4542 8038;
 * rating 5,0 con 419 opiniones; horario lun–vie 11:00–19:00, sábado
 * 10:00–19:00, domingo cerrado; se identifica como mujer empresaria;
 * sitio: su Facebook peluqueriastylekids). Las fotos son las de su
 * ficha: sillas-auto rojas, capas estampadas y el salón amarillo con
 * bandera de carrera. Las reseñas citadas son textos reales de Google.
 */

export const BIZ = {
  name: 'Style Kids',
  rubro: 'Peluquería infantil',
  address: 'Calle 9 Oriente 918',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4542 8038',
  phoneTel: '+56945428038',
  whatsapp: '56945428038',
  rating: 5.0,
  ratingLabel: '5,0',
  reviews: 419,
  facebook: 'https://www.facebook.com/peluqueriastylekids/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Style Kids, quiero agendar un corte para mi hijo/a',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Style kids, Calle 9 Oriente 918, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Style kids, Calle 9 Oriente 918, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/style-kids'

/** Confirmado por sus fotos y reseñas: el local está pensado para niños */
export const PARA_ELLOS = [
  {
    nombre: 'Se corta en un auto',
    detalle: 'Sillas de peluquero con forma de auto de carrera. Llegar ya es un juego.',
  },
  {
    nombre: 'Dibujos y capas de colores',
    detalle: 'Pantallas con sus dibujos favoritos y capas estampadas para distraerlos.',
  },
  {
    nombre: 'Paciencia de verdad',
    detalle: 'Las mamás repiten lo mismo en las reseñas: atienden con calma y cariño.',
  },
  {
    nombre: 'Dulce al terminar',
    detalle: 'Cada corte termina con un premio, para que quieran volver.',
  },
] as const

export const GALERIA = [
  {
    src: `${IMG}/auto.webp`,
    alt: 'Niño sentado en una silla-auto roja mientras le cortan el pelo',
  },
  {
    src: `${IMG}/corte1.webp`,
    alt: 'Estilista cortando el pelo a un pequeño con capa de camiones',
  },
  {
    src: `${IMG}/corte2.webp`,
    alt: 'Niño en silla-auto roja mirando sus dibujos en la pantalla',
  },
  {
    src: `${IMG}/salon.webp`,
    alt: 'Interior del salón amarillo con bandera de carrera en la pared',
  },
] as const

export const VISITA = [
  {
    paso: '1',
    nombre: 'Llegan y juegan',
    detalle: 'El peque elige su auto y se acomoda. Sin apuro ni presión.',
  },
  {
    paso: '2',
    nombre: 'Corte tranquilo',
    detalle: 'Con dibujos y juegos de por medio, el corte pasa casi sin que se den cuenta.',
  },
  {
    paso: '3',
    nombre: 'Peinado y premio',
    detalle: 'Sale peinado, con dulce en mano y pidiendo volver.',
  },
] as const

export const HORARIO = [
  { dia: 'Lunes a viernes', horas: '11:00 a 19:00' },
  { dia: 'Sábado', horas: '10:00 a 19:00' },
  { dia: 'Domingo', horas: 'Cerrado' },
] as const

/** Reseñas reales de Google, todas 5 estrellas */
export const RESENAS = [
  {
    nombre: 'Marlen Monsalve',
    texto:
      'A mi hijo le encantó. Son un encanto de personas las que trabajan en la peluquería y tienen una paciencia aparte que dejan lindo. Sin lugar a duda es muy recomendable, además son detallistas.',
    hace: 'hace 3 semanas',
  },
  {
    nombre: 'Bárbara Figueroa',
    texto:
      'Llevé a mi hijo por su primer corte y fue una hermosa experiencia. Atienden con mucha paciencia y delicadeza; el lugar está totalmente ambientado para que los niños se diviertan y se sientan cómodos.',
    hace: 'hace 9 meses',
  },
  {
    nombre: 'Jessay Uriarte',
    texto:
      'Excelente atención. Tienen muchas cosas para distraer a los pequeños, el corte me encanta y le entregan un dulce al terminar para que desee volver.',
    hace: 'hace 3 años',
  },
  {
    nombre: 'Oriana Cotua',
    texto:
      'Maravillosa primera vez que asistíamos y quedamos encantados. El abordaje y la atención a los niños muy amena; mi hijo se la pasó muy bien.',
    hace: 'hace un año',
  },
] as const
