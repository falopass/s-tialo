/**
 * app/demos/hotelera-somontur/content.ts
 *
 * El lote pedía «hotelera-somontur». En Google Maps hay dos fichas
 * corporativas de «Hotelera Somontur» en Chillán (Av. Libertad 1042 y
 * 18 de Septiembre 746), ambas sin reseñas ni fotos: son la razón social,
 * no el negocio de cara al público. El hotel que la hotelera opera en el
 * centro de Chillán es el Gran Hotel Isabel Riquelme (Constitución 576,
 * frente a la Plaza de Armas) y es ahí donde están los datos verificables.
 *
 * Fuentes:
 * - Ficha Maps «Gran Hotel Isabel Riquelme»: 4,3 estrellas, 1.009 reseñas,
 *   coords -36.6075843,-72.1031229, link hotelisabelriquelme.cl
 * - Sitio oficial hotelisabelriquelme.cl: tarifas 2026 con IVA, 70
 *   habitaciones, 6 salones, servicios, teléfonos y correos, IG/FB
 * - Convenio Colegio Médico: check-in 15:30 / check-out 12:00,
 *   desayuno buffet 7:00-10:00, estacionamiento custodiado 24 h
 * - Reseñas citadas: reseñas reales de Google (vía chilopina.com)
 */

export const BIZ = {
  name: 'Gran Hotel Isabel Riquelme',
  short: 'Isabel Riquelme',
  rubro: 'Hotel',
  address: 'Constitución 576, frente a la Plaza de Armas',
  city: 'Chillán',
  region: 'Región de Ñuble',
  phoneDisplay: '+56 42 243 4404',
  phoneTel: '+56422434404',
  movilDisplay: '+56 9 8649 6848',
  whatsapp: '56986496848',
  email: 'recepcion@hotelisabelriquelme.cl',
  web: 'https://www.hotelisabelriquelme.cl',
  instagram: 'https://www.instagram.com/granhotelisabelriquelme/',
  facebook: 'https://www.facebook.com/HotelIsabelRiquleme/',
  rating: 4.3,
  reviews: '1.009',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar una habitación en el Gran Hotel Isabel Riquelme.',
)}`

export const WA_LINK_EVENTO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero cotizar un salón para un evento en el Gran Hotel Isabel Riquelme.',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Gran+Hotel+Isabel+Riquelme/@-36.6075843,-72.1031229,17z/data=!4m6!3m5!1s0x9668d7d6340a2169:0x63aa2ad7f3bd1e6!8m2!3d-36.6075843!4d-72.1031229'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Gran+Hotel+Isabel+Riquelme,+Constituci%C3%B3n+576,+Chill%C3%A1n&output=embed'

export const IMG = '/demos/hotelera-somontur'

export const C = {
  cream: '#f3ecdd',
  cream2: '#ece2cd',
  ink: '#221c15',
  muted: '#6b6151',
  line: '#d9cdb4',
  claret: '#6e1f2b',
  claretDeep: '#571720',
  brass: '#a37e3e',
  brassSoft: '#c9ab6e',
  mutedOnDark: '#d9cbb0',
  lineOnDark: 'rgba(243,236,221,0.22)',
}

/** Tarifas publicadas en hotelisabelriquelme.cl (Tarifas 2026, IVA incluido). */
export const TARIFAS = [
  { tipo: 'Single cama americana', detalle: 'Cama americana', precio: 75565 },
  { tipo: 'Single cama king', detalle: 'Cama king', precio: 83181 },
  { tipo: 'Doble 2 camas', detalle: 'Dos camas de plaza y media', precio: 98770 },
  { tipo: 'Doble matrimonial', detalle: 'Cama matrimonial', precio: 102340 },
  { tipo: 'Triple 3 camas', detalle: 'Tres camas de plaza y media', precio: 135660 },
  { tipo: 'Triple matrimonial', detalle: 'Matrimonial + cama de plaza y media', precio: 135660 },
  { tipo: 'Suite', detalle: 'Cama king, estar y comedor separados', precio: 158270 },
  { tipo: 'Cuádruple', detalle: 'Matrimonial + dos camas de plaza y media', precio: 171360 },
]

export const HABITACIONES = [
  { src: 'hab-matrimonial', alt: 'Habitación matrimonial del Gran Hotel Isabel Riquelme con cortinaje oscuro y veladores encendidos', nombre: 'Matrimonial' },
  { src: 'hab-doble', alt: 'Habitación doble con cama blanca, escritorio de madera y ventanal con cortinas', nombre: 'Doble' },
  { src: 'hab-single', alt: 'Habitación single con cama, escritorio y aire acondicionado junto a la ventana', nombre: 'Single' },
  { src: 'hab-cuadruple', alt: 'Habitación cuádruple amplia para familias en el Gran Hotel Isabel Riquelme', nombre: 'Cuádruple' },
  { src: 'suite', alt: 'Living de la suite con sofá, mesa de centro y vista a la catedral de Chillán', nombre: 'Suite' },
]

/** Salones reales del hotel (nombres de su sitio oficial). */
export const SALONES = [
  { src: 'salon-quinto', alt: 'Salón del quinto piso montado con mesas redondas de mantel blanco para una cena', nombre: 'Salón Quinto Piso' },
  { src: 'salon-quinto-conferencia', alt: 'Salón Quinto Piso en montaje auditorio con pantalla y mesas de trabajo', nombre: 'Montaje conferencia' },
  { src: 'salon-arauco', alt: 'Salón Arauco, comedor privado con mesa redonda y cuadro de paisaje', nombre: 'Salón Arauco' },
  { src: 'salon-libertador', alt: 'Salón Libertador preparado para reunión o banquete', nombre: 'Salón Libertador' },
  { src: 'salon-vinay', alt: 'Salón Ramón Vinay para eventos y reuniones', nombre: 'Salón Ramón Vinay' },
]

/** Reseñas reales de Google (texto fiel, solo tildes/puntuación normalizadas). */
export const RESENAS = [
  {
    texto: 'Un hotel con historia, de esos que quedan pocos. Está ligado al crecimiento del turismo de Chillán: valoro su permanencia, su arraigo y fortaleza frente a las dificultades. Chillán debe sentirse orgulloso de su Gran Hotel.',
    autor: 'J. A. R.',
  },
  {
    texto: 'Excelente ubicación, cercano a bancos, museo, teatro, restaurantes y mall. Linda vista, personal amable, desayuno súper rico, habitaciones cómodas.',
    autor: 'R. C. B. R.',
  },
  {
    texto: 'Estuvimos en una habitación cuádruple que nos permitió tener a los niños cerca, en dos espacios unidos y muy amplios. El restorán exquisito, todas las dependencias impecables y el personal muy amable.',
    autor: 'C. T.',
  },
  {
    texto: 'La cocina es realmente espectacular: los platos y preparaciones son exquisitas. El aseo de las habitaciones impecable, y la recepción junto a todo su personal, muy acogedores y amables.',
    autor: 'C. G.',
  },
]

export const SERVICIOS = [
  'Restaurant internacional (cap. 100 personas)',
  'Bar y cafetería',
  'Room service',
  'Estacionamiento custodiado 24 h',
  'Wi-Fi en todo el hotel',
  'Lavandería',
  'Sala de negocios',
  'Convenios con empresas',
]
