/**
 * app/demos/la-surena-de-molina/content.ts
 *
 * Datos del mockup. REALES y verificados en su ficha pública de Google Maps
 * (La Sureña de Molina):
 * - Nombre, rubro (restaurante), dirección (Entrada Sur Molina, sitio 1),
 *   teléfono +56 9 6785 5832, nota 4,4★ y 352 reseñas.
 * - Horario publicado: lunes a viernes 10:30–23:00, sábado 10:30–17:00,
 *   domingo cerrado.
 * - Carta: texto de los letreros reales del local (fotos de su ficha):
 *   «colaciones $3.000 · almuerzos · cazuelas · extras · completos ·
 *   bebidas · té y café» y «completos, churrascos, café, bebidas, confites».
 * - Reseñas citadas: textos de su ficha de Google (traducción fiel al
 *   español; los originales los publican personas reales). «Nancy» es la
 *   dueña nombrada por clientes; la ficha se identifica como mujer empresaria.
 * - Fotos en /demos/la-surena-de-molina: su fachada, el letrero tallado en
 *   madera, el interior tipo cabaña sureña, sus platos y sus clientes —
 *   todas subidas por ellos y sus clientes a la ficha.
 */

export const BIZ = {
  name: 'La Sureña de Molina',
  short: 'La Sureña',
  rubro: 'Restaurante de comida casera',
  address: 'Entrada Sur Molina, sitio 1',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6785 5832',
  phoneTel: '+56967855832',
  whatsapp: '56967855832',
  rating: '4,4',
  reviews: 352,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de La Sureña y quiero consultar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'La Sureña de Molina, Entrada Sur Molina',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'La Sureña de Molina, Entrada Sur Molina, Chile',
)}&output=embed`

export const IMG = '/demos/la-surena-de-molina'
