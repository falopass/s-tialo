/**
 * app/demos/muerto-de-hambre/content.ts
 *
 * Datos REALES verificados:
 * - Ficha de Google Maps: "Muerto De Hambre Restaurante", Humberto Silva 356,
 *   San Clemente, Maule. Rating 4,3 con 225 reseñas.
 * - Registro SERNATUR (serviciosturisticos.sernatur.cl/46614): correo
 *   contactomuertodehambre@gmail.com.
 * - Facebook confirmado: facebook.com/muertodehambrerestaurante (~1,2 mil
 *   seguidores). El letrero real dice "Muerto de Hambre Restobar".
 * - Carta y precios: menú real publicado en restaurantemuertodehambre.ola.click.
 * - Horario: 800.cl indica lunes a viernes 11:00–21:00 y fines de semana
 *   12:00–17:00, pero advierte que puede cambiar; la ficha de Maps marca
 *   sábado y domingo cerrados. Se presenta como referencial y se pide
 *   confirmar por WhatsApp.
 * - Reseñas citadas: Juan Aravena, Santiago Vidal Ocampo y Javiera Anabalón,
 *   5 estrellas en Google.
 * - Fotos: reales, de la ficha de Google Maps y su Facebook.
 */

export const BIZ = {
  name: 'Muerto de Hambre',
  sign: 'Muerto de Hambre Restobar',
  rubro: 'Restobar · comida casera',
  address: 'Humberto Silva 356',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9136 6085',
  whatsapp: '56991366085',
  email: 'contactomuertodehambre@gmail.com',
  fb: 'https://www.facebook.com/muertodehambrerestaurante',
  fbSeguidores: '1,2 mil',
  rating: '4,3',
  reviews: 225,
  mapsPlaceUrl:
    'https://www.google.com/maps/place/Muerto+De+Hambre+Restaurante/@-35.5334259,-71.4881759,17z/data=!3m1!4b1!4m6!3m5!1s0x966595dac0ada1b5:0x81c7ba0ed4653d51!8m2!3d-35.5334259!4d-71.4881759!16s%2Fg%2F11c4t592qq',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Muerto de Hambre y quiero consultar',
)}`

export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Muerto de Hambre y quiero reservar mesa',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Humberto Silva 356, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/muerto-de-hambre'

// Precios reales de su carta en ola.click (tal como están publicados).
export const CARTA = [
  { plato: 'Mariscal caliente', precio: '$14.950' },
  { plato: 'Carne al jugo a lo pobre', precio: '$16.200' },
  { plato: 'Lomo vetado a lo pobre', precio: '$22.500' },
  { plato: 'Salmón con agregado', precio: '$20.950' },
  { plato: '1/4 de pollo asado', precio: '$6.750' },
  { plato: 'Cazuela de cerdo', precio: '$6.450' },
  { plato: 'Lentejas con huevo frito', precio: '$6.450' },
  { plato: 'Porción de papas fritas', precio: '$3.000' },
]

export const HORARIO = [
  { d: 'Lunes a viernes', h: '11:00 a 21:00' },
  { d: 'Fin de semana', h: 'Confirma por WhatsApp' },
]

export const RESENAS = [
  {
    autor: 'Juan Aravena',
    estrellas: 5,
    cuando: 'hace un mes',
    texto:
      'Una grata sorpresa este restaurante en San Clemente. Muy rica comida, buena atención y mejores precios. Totalmente recomendable para un rico almuerzo.',
  },
  {
    autor: 'Javiera Anabalón',
    estrellas: 5,
    cuando: 'hace 9 meses',
    texto:
      'Exquisito pastel de choclo y comida en general. Grato ambiente, tienen aire acondicionado y opción de interior o terraza para servirse.',
  },
]
