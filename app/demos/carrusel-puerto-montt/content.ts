/**
 * app/demos/carrusel-puerto-montt/content.ts
 *
 * Datos del mockup. REALES (verificados el 10-11-2026 en la ficha de
 * Google Maps «CARRUSEL PUERTO MONTT», categoría Boutique):
 * - Nombre «Carrusel Puerto Montt»; su logo dice «CARRUSEL · PRIMERA
 *   COMUNIÓN · BAUTIZO Y NOVIOS» con una carpa de carrusel de colores.
 * - Dirección Av. Diego Portales 1000, 5º piso, oficina 506, Edificio
 *   España, Puerto Montt.
 * - Horario: martes a viernes 11:00 a 18:00, sábado 11:00 a 15:00,
 *   domingo y lunes cerrado.
 * - WhatsApp +56 9 6785 1956.
 * - 4,8 con 67 opiniones en Google; las cuatro citas de la sección de
 *   opiniones son textuales de esa ficha.
 * - Qué ofrece (de su logo, sus fotos y las reseñas): vestidos de
 *   fiesta y de quinceañera, vestidos de novia, trajes de novio y de
 *   hombre con chaleco, primera comunión y bautizo, accesorios y
 *   atención personalizada con asesoría.
 * - Redes sociales: no confirmadas; no se enlazan.
 * DE MUESTRA: titulares de sección, bajadas, nombres de las ocasiones
 * y textos de apoyo.
 */

export const BIZ = {
  name: 'Carrusel Puerto Montt',
  nameCorto: 'Carrusel',
  rubro: 'Boutique · ropa de fiesta',
  address: 'Av. Diego Portales 1000, 5º piso, oficina 506',
  edificio: 'Edificio España',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 6785 1956',
  whatsapp: '56967851956',
  rating: '4,8',
  ratingValue: 4.8,
  reviews: 67,
} as const

export const WA_LINK =
  'https://wa.me/56967851956?text=Hola%20Carrusel%2C%20quiero%20consultar%20por%20un%20vestido'

export const waTema = (tema: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola Carrusel, quiero consultar por ${tema}`,
  )}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Carrusel Puerto Montt, Av. Diego Portales 1000, Edificio España, Puerto Montt',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. Diego Portales 1000, Edificio España, Puerto Montt',
)}&output=embed`

export const IMG = '/demos/carrusel-puerto-montt'

export const HORARIO = [
  { d: 'Martes a viernes', h: '11:00 a 18:00' },
  { d: 'Sábado', h: '11:00 a 15:00' },
  { d: 'Domingo y lunes', h: 'Cerrado' },
] as const

export const REVIEWS = [
  {
    text: 'El trato es excepcional, uno se puede probar las cosas con calma y en caso de no estar seguro, tienes una muy buena profesional y con mucha experiencia que te puede recomendar vestidos y accesorios.',
    author: 'Guillermo C.',
    fuente: 'Reseña de Google',
  },
  {
    text: 'Excelente atención, agradable y personalizada. De sus trajes nada que decir diseños y costuras impecables. Completamente recomendado.',
    author: 'Fernanda M.',
    fuente: 'Reseña de Google',
  },
  {
    text: 'Son la mejor opción para tus pequeñas, este hermoso vestido lo compramos allí y le quedó hermoso. La tela súper bonita y cómoda para mi princesa y además la atención impecable.',
    author: 'Leidy R.',
    fuente: 'Reseña de Google',
  },
  {
    text: 'Muy buena atención, disposición y sugerencias. Totalmente recomendable.',
    author: 'Constanza V.',
    fuente: 'Reseña de Google',
  },
] as const
