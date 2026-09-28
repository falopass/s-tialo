/**
 * app/demos/repuestos-14-oriente-talca/content.ts
 *
 * Datos REALES verificados el 2026-09-28 en Google Maps
 * ("Repuestos 14 Oriente Talca", 14 Oriente esq. Calle 6 Sur
 * 580, Talca): nombre, dirección, teléfono (+56 9 4665 0534),
 * rating 4,4 con 29 reseñas, horario (lun-vie 9:00 a 13:30 y
 * 15:00 a 19:00, sáb 9:00 a 14:00) y categoría "Proveedor de
 * repuestos de carrocería de automóviles". Sin sitio web ni
 * redes publicadas.
 * Fotos: la promoción de su ficha de Maps + Street View de la
 * esquina real (marzo 2024). El muro pintado de la fachada
 * anuncia las marcas que trabajan.
 */

export const BIZ = {
  name: 'Repuestos 14 Oriente',
  short: 'Repuestos 14 Oriente',
  rubro: 'Repuestos de carrocería',
  address: '14 Oriente esquina 6 Sur 580',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4665 0534',
  phoneTel: '+56946650534',
  whatsapp: '56946650534',
  rating: 4.4,
  reviews: 29,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Repuestos 14 Oriente y quiero consultar por un repuesto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Repuestos 14 Oriente Talca, 14 Oriente 580, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '14 Oriente esquina 6 Sur, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/repuestos-14-oriente-talca'
