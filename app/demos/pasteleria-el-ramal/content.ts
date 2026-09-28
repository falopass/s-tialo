/**
 * app/demos/pasteleria-el-ramal/content.ts
 *
 * Datos REALES verificados el 2026-09-28 en Google Maps
 * ("Pastelería El Ramal", C. Río Claro 133, Puertas del Sur, Talca):
 * nombre, dirección, teléfono (+56 9 9192 7222), rating 4,6 con
 * 54 reseñas, horario todos los días 8:00 a 22:00 y categoría
 * "Pastelería". Sin sitio web registrado en la ficha.
 * Instagram confirmado: @pasteleriaelramal1.
 * Fotos: ficha de Maps + su Instagram. Los servicios del letrero
 * (banquetería, matrimonios, cumpleaños, fábrica de empanadas,
 * tortas, vinos y licores) y la distribución al por mayor salen
 * del letrero de la fachada y la camioneta de reparto.
 */

export const BIZ = {
  name: 'Pastelería El Ramal',
  short: 'El Ramal',
  rubro: 'Pastelería, botillería y banquetería',
  address: 'Calle Río Claro 133, Puertas del Sur',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9192 7222',
  phoneTel: '+56991927222',
  whatsapp: '56991927222',
  rating: 4.6,
  reviews: 54,
  instagramUrl: 'https://www.instagram.com/pasteleriaelramal1/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Pastelería El Ramal y quiero hacer un pedido',
)}`

export const WA_LINK_MAYOR = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Pastelería El Ramal y quiero consultar por venta al por mayor',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Pastelería El Ramal, C. Río Claro 133, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'C. Río Claro 133, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/pasteleria-el-ramal'
