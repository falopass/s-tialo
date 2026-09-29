/**
 * app/demos/restaurant-el-encuentro/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + página de
 * Facebook ElEncuentroPencahue): nombre, "ex La Tortolita", dirección
 * en Pencahue, nota 4,8 con 39 reseñas, rango $5.000-10.000, horario
 * publicado (domingo 13:00-16:00 según la ficha), WhatsApp, los platos
 * del letrero de la fachada, servicios (consumo en el lugar, retiro en
 * puerta, entrega a domicilio), reseñas nombradas, el logo y todas las
 * fotos del salón, la comida y la música en vivo.
 */

export const BIZ = {
  name: 'Restaurant El Encuentro',
  short: 'El Encuentro',
  exName: 'ex La Tortolita',
  rubro: 'Restaurante de comidas típicas',
  address: '3460000 Pencahue, Maule',
  city: 'Pencahue',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8164 2326',
  phoneTel: '+56981642326',
  whatsapp: '56981642326',
  rating: 4.8,
  ratingLabel: '4,8',
  reviews: 39,
  precio: '$5.000 – $10.000 por persona',
  facebook: 'https://www.facebook.com/ElEncuentroPencahue',
  fbFollowers: '408',
} as const

/** Horario publicado en la ficha de Google: solo domingo al mediodía. */
export const HORARIO = {
  publicado: 'Domingo 13:00 – 16:00',
  nota: 'Según su ficha de Google, atiende los domingos al almuerzo. Para eventos y otras fechas, consulta por WhatsApp.',
} as const

/** Servicios publicados en su ficha de Google. */
export const SERVICIOS = [
  'Consumo en el lugar',
  'Retiro en la puerta',
  'Entrega a domicilio',
] as const

/** Del letrero de la fachada, visible en las fotos de su ficha de Google. */
export const LETRERO = [
  'Desayunos',
  'Completos',
  'Churrascos',
  'Churrasco luco',
  'Sopaipillas',
  'Chaparritas',
  'Ave mayo',
  'Papas fritas',
  'Pizzas',
] as const

export const COMBO = {
  name: 'Combo express',
  desc: 'Completo + papas fritas + bebida',
  price: '$4.800',
} as const

/** Reseñas reales con nombre, de su ficha de Google y su página de Facebook. */
export const RESENAS = [
  {
    text: 'Maravillosa comida. Si estás buscando esa picada de comida rica, aquí es: comida riquísima, ambiente grato, familiar y vinito orgánico. La señora cocina todo lo que se sirve.',
    author: 'Yasna Odette Lazo Uribe',
    via: 'Google',
  },
  {
    text: 'Muy buena comida casera, abundante y barata. ¿Qué más se puede pedir?',
    author: 'Juan de Dios Reyes',
    via: 'Google',
  },
  {
    text: 'Rica la comida, muy económica, buena atención.',
    author: 'Ana Paulina Nuñez Rojas',
    via: 'Google',
  },
  {
    text: '100 % recomendado… todo muy exquisito.',
    author: 'Susana Sánchez',
    via: 'Facebook',
  },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurant El Encuentro y quiero consultar',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Restaurant El Encuentro y quiero reservar para un evento',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurant El Encuentro, Pencahue, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurant El Encuentro, Pencahue, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/restaurant-el-encuentro'
