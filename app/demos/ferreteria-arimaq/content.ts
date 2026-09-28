/**
 * app/demos/ferreteria-arimaq/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps e Instagram
 * @ferreteria_arimaq): nombre (arimaq ferreteria), dirección (Sector La
 * Estrella, San Clemente), teléfono (+56 9 3760 4424), horario
 * (Lu–Vi 8:00–19:00, Sa 8:00–17:00, Do cerrado) y rating 4,4 con 21
 * reseñas en Google. El rubro "maquinarias y ferretería, empresa
 * familiar" y el alcance "desde los cimientos hasta el término de su
 * obra" salen de su página de Facebook; los productos, de las fotos
 * reales de su ficha e Instagram (tejas, mallas, ladrillos, alambre,
 * herramientas, arriendo de maquinaria, despacho a domicilio).
 */

export const BIZ = {
  name: 'Arimaq Ferretería',
  short: 'Arimaq',
  rubro: 'Ferretería, materiales y maquinarias',
  address: 'Sector La Estrella',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3760 4424',
  phoneTel: '+56937604424',
  whatsapp: '56937604424',
  rating: '4,4',
  reviews: 21,
  igHandle: '@ferreteria_arimaq',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Arimaq, vi su página y quiero cotizar materiales',
)}`

export const WA_LINK_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Arimaq, quiero cotizar herramientas o materiales',
)}`

export const IG_URL = 'https://instagram.com/ferreteria_arimaq'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'arimaq ferreteria, Sector La Estrella, San Clemente, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'arimaq ferreteria, Sector La Estrella, San Clemente, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/ferreteria-arimaq'
