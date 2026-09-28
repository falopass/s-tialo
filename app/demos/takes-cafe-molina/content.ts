/**
 * Datos reales de Take's (TAKE'S CAFE MOLINA en su ficha de Google Maps;
 * la marca se presenta como "Take's Sushi & Coffee"). Verificado en la
 * ficha (dirección, teléfono, horario, rating) y su Instagram @takesmolina.
 */
export const BIZ = {
  name: "Take's Sushi & Coffee",
  short: "Take's",
  rubro: 'Restaurante, sushi y cafetería',
  address: 'Maipú 1818, frente a la plaza',
  city: 'Molina',
  region: 'Maule',
  phoneDisplay: '+56 9 3332 7395',
  phoneTel: '+56933327395',
  whatsapp: '56933327395',
  rating: 4.1,
  reviews: 115,
  igHandle: '@takesmolina',
  igFollowers: '14 mil',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  "Hola Take's! Quiero consultar por la carta y horarios.",
)}`
export const WA_LINK_RESERVA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  "Hola Take's! Quiero reservar una mesa.",
)}`
export const IG_URL = 'https://www.instagram.com/takesmolina/'
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=TAKES+CAFE+MOLINA+Maipu+1818'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=TAKE%27S+CAFE+MOLINA&ll=-35.113836,-71.2790086&z=16&output=embed'

export const IMG = '/demos/takes-cafe-molina'
