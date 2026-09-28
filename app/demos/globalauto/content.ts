/**
 * app/demos/globalauto/content.ts
 *
 * Datos del mockup. REALES, verificados en la ficha pública de Google Maps
 * y en el sitio propio del taller (globalauto.cl): nombre, dirección,
 * comuna, teléfonos, horarios, correo, lista de servicios, la alineadora
 * John Bean V3D Full HD, que es empresa familiar, los precios especiales
 * para transporte y clientes frecuentes, el rating (4,8 con 22 reseñas)
 * y las reseñas citadas (de la ficha de Google).
 */
export const BIZ = {
  name: 'GlobalAuto',
  short: 'GlobalAuto',
  rubro: 'Servicio automotriz',
  city: 'San Clemente',
  region: 'Región del Maule',
  address: 'Luis Humberto Silva 461',
  phoneDisplay: '+56 9 7732 7769',
  whatsapp: '56977327769',
  phoneFijo: '+56 71 247 3470',
  email: 'contacto@globalauto.cl',
  rating: 4.8,
  reviews: 22,
  schedule: 'Lun a vie 09:00–18:00 · sábado 09:00–13:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola GlobalAuto, quiero agendar un servicio para mi vehículo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'GlobalAuto, Luis Humberto Silva 461, San Clemente, Región del Maule',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Luis Humberto Silva 461, San Clemente, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/globalauto'
