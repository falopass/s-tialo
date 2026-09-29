/**
 * app/demos/blanca-marti/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + SERNATUR + reseñas):
 * nombre, dirección (Av. Ignacio Carrera Pinto, Vichuquén), teléfono,
 * rating 4,9 con 57 opiniones, rango de precios, horario, Instagram
 * @blancamartidelicias (corroborado por la Municipalidad de Vichuquén),
 * correo de SERNATUR, platos y precios mencionados en reseñas reales,
 * y las reseñas citadas con autor y respuesta de la dueña.
 * Las fotos son de la ficha de Google y del Instagram del local.
 */

export const BIZ = {
  name: 'Blanca Marti',
  fullName: 'Restaurante y cafetería Blanca Marti',
  short: 'Blanca Marti',
  rubro: 'Restaurante y cafetería',
  address: 'Av. Ignacio Carrera Pinto',
  city: 'Vichuquén',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9600 6518',
  phoneTel: '+56996006518',
  whatsapp: '56996006518',
  email: 'blancamarti.resto@gmail.com',
  instagram: 'https://www.instagram.com/blancamartidelicias/',
  igUser: '@blancamartidelicias',
  rating: '4,9',
  reviews: 57,
  priceRange: '$10.000 – $15.000 por persona',
  mapsUrl:
    'https://www.google.com/maps/place/Restaurante+y+cafeter%C3%ADa+Blanca+Marti/@-35.8809202,-72.0383304,17z/data=!4m6!3m5!1s0x9666a5211381f89b:0xb9b58b73d7e41374!8m2!3d-35.8809202!4d-72.0383304!16s%2Fg%2F11fhy2np9w',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Blanca, vi la página de su restaurante y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una mesa en Blanca Marti',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurante y cafetería Blanca Marti, Vichuquén, Chile',
)}&output=embed`

export const IMG = '/demos/blanca-marti'

/** Horario real publicado en la ficha de Google. */
export const HOURS = [
  { d: 'Lunes', h: '11:00 – 23:00' },
  { d: 'Martes', h: 'Cerrado' },
  { d: 'Miércoles a domingo', h: '11:00 – 23:00' },
] as const

/** Platos que nombran los clientes en las reseñas de Google. */
export const PLATOS = [
  { name: 'Reineta a la plancha con arroz', price: '$11.000', note: 'precio de una reseña de Google' },
  { name: 'Carbonada con pan amasado y pebre', price: '', note: 'la recomienda CAMPOS & LAMA' },
  { name: 'Chorrillana', price: '', note: '“10 de 10”, dicen los clientes' },
  { name: 'Completos', price: '', note: 'los piden hasta por el día del completo' },
  { name: 'Menú de almuerzo', price: '', note: 'rico y contundente' },
  { name: 'Papaya sour', price: '', note: 'los clientes se repiten la copa' },
  { name: 'Jugos naturales', price: '$3.000', note: 'precio de una reseña de Google' },
] as const

/** Productos de la alacena: conservas, condimentos y barritas de Blanca. */
export const ALACENA = [
  'Frutos en conserva con su etiqueta',
  'Mix de condimentos y merkén de la casa',
  'Barritas de proteína de legumbres',
  'Dulces y tortas de pedido',
] as const

/**
 * Reseñas reales de la ficha de Google, con autor y la respuesta
 * que la dueña publica personalmente (su “abracito” de firma).
 */
export const REVIEWS = [
  {
    text: 'Hoy buscando un restaurante en Llico nos encontramos con la señora Blanca, todo un personaje de la localidad, ella y su marido nos contaron todos sus logros. Si pasan por Llico o Vichuquén no pierdan la oportunidad de conocer a Blanquita y sus riquísimas preparaciones. Su carbonada y chorrillana estuvieron 10 de 10, con su pebrecito y pan amasado de lujo.',
    author: 'CAMPOS & LAMA',
    note: 'reseña de Google · hace un año',
    reply: 'Muchísimas gracias por visitar nuestra hermosa localidad y agradecida de su visita en nuestro local. Que les vaya maravillosamente. ¡Hasta pronto!',
  },
  {
    text: 'Pasamos buscando un completo por el día del completo, estaban exquisitos. Aprovechamos de probar los papaya sour que nos repetimos, y el menú de almuerzo muy rico y contundente. La atención excelente.',
    author: 'Claudia Muñoz',
    note: 'Local Guide · reseña de Google',
    reply: 'Muchísimas gracias corazón. Esperamos su pronto regreso. Un abracito cariñoso.',
  },
  {
    text: 'Comida muy rica y casera, atención por parte de sus dueños. Reineta con arroz a $11.000, jugos a $3.000.',
    author: 'Ximena Rojas',
    note: 'Local Guide · reseña de Google',
    reply: 'Muchísimas gracias por preferirnos, nos sentimos muy complacidos que nuestra comida haya cumplido con sus expectativas. Un abrazo cariñoso.',
  },
  {
    text: 'Maravillosa atención, precios muy buenos y la comida maravillosa. Pet friendly: aceptan perritos y les dan agüita fresca.',
    author: 'Rolando Miranda',
    note: 'reseña de Google · hace 8 meses',
    reply: 'Muchísimas gracias, las mascotas son parte de la familia, por ende siempre serán muy bien recibidas en nuestro local. Un abracito cariñoso y esperamos su pronto regreso.',
  },
  {
    text: 'Atendido por su dueña. Súper rico lugar tranquilo para almorzar.',
    author: 'Karla Daniela Ochoa Romero',
    note: 'Local Guide · reseña de Google',
    reply: 'Mil gracias corazón. Esperamos su pronto regreso, un abracito con cariño.',
  },
] as const
