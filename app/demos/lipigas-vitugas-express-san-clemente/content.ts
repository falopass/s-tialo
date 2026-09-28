/**
 * app/demos/lipigas-vitugas-express-san-clemente/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Ficha de Google Maps: «LIPIGAS VITUGAS EXPRESS SAN CLEMENTE»,
 *   categoría proveedor de cilindros de gas, Quebrada De Agua S/N
 *   (San Clemente, Maule), nota 4.9 con 14 reseñas, teléfono
 *   9 8198 0590 y horario (Lu–Vi 8:30–21:00, Sá–Do 9:00–20:00).
 * - Facebook oficial «Vitugas Express San Clemente»: ~1.400
 *   seguidores, «distribuidor oficial de Gas Lipigas en la Comuna de
 *   San Clemente», Quebrada de Agua, segundo teléfono +56 9 4194 2320.
 * - Flyers propios de la página: aceptan vales de gas municipales de
 *   Lipigas y el cupón de gas del Gobierno (cilindros de 15 kg, sin
 *   costo adicional); sorteo por el aniversario 102 de San Clemente;
 *   pedidos por WhatsApp +56 9 8198 0590 (icono WhatsApp en el flyer)
 *   y teléfono +56 9 4194 2320; pagan con Webpay/Tarjetas.
 * - Reseñas: citas literales de la ficha de Google.
 */

export const BIZ = {
  name: 'Vitugas Express San Clemente',
  rubro: 'Proveedor de cilindros de gas Lipigas',
  address: 'Quebrada de Agua s/n',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8198 0590',
  phoneAlt: '+56 9 4194 2320',
  whatsapp: '56981980590',
  facebook: 'Vitugas Express San Clemente',
  facebookUrl: 'https://www.facebook.com/VitugasExpressSanClemente/',
  rating: '4.9',
  reviews: '14',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Vitugas, vi su página y quiero pedir un cilindro de gas',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/LIPIGAS+VITUGAS+EXPRESS+SAN+CLEMENTE/@-35.5117683,-71.4711342,17z/data=!3m1!4b1!4m6!3m5!1s0x9665978810d5591d:0xbca0128c053a46b1!8m2!3d-35.5117683!4d-71.4711342!16s%2Fg%2F11s_zpdfxr'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'LIPIGAS VITUGAS EXPRESS SAN CLEMENTE, Quebrada De Agua, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/lipigas-vitugas-express-san-clemente'
