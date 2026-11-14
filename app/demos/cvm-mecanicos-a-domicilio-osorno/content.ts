/**
 * app/demos/cvm-mecanicos-a-domicilio-osorno/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps del 14-11-2026, afiche
 * del negocio, su logo y su respuesta automática de WhatsApp):
 * - Nombre: Maps lo ficha como "CVM Mecánicos a Domicilio, Asistencia
 *   en Ruta"; el logo y el afiche dicen "CVM Mecánica y Diagnóstico
 *   Automotriz". Marca corta: CVM.
 * - Dirección y horario: Maps (Gómez Carreño 2464, Osorno).
 * - Teléfono/WhatsApp: +56 9 3327 1805, el mismo en afiche, logo y
 *   respuesta de WhatsApp ("Emergencias").
 * - Servicios (diagnóstico avanzado, mantención y reparación, venta
 *   de repuestos), sellos (trabajo garantizado, equipos de última
 *   generación, atención personalizada), lemas y cobertura: textos
 *   tal cual del afiche.
 * - Opiniones: citas textuales de la ficha de Google (3,7 con 22
 *   opiniones; la nota no se muestra por decisión editorial).
 * No hay precios, años de experiencia, marcas atendidas,
 * certificaciones ni servicio "24/7": no se inventan.
 */

export const BIZ = {
  name: 'CVM Mecánicos a Domicilio',
  short: 'CVM',
  rubro: 'Mecánica y diagnóstico automotriz',
  address: 'Gómez Carreño 2464',
  city: 'Osorno',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 3327 1805',
  whatsapp: '56933271805',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola CVM, quiero consultar por un servicio mecánico',
)}`

export const WA_LINK_URGENTE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola CVM, tengo una emergencia con mi vehículo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'CVM Mecánicos a Domicilio, Gómez Carreño 2464, Osorno',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'CVM Mecánicos a Domicilio, Gómez Carreño 2464, Osorno',
)}&output=embed`

export const IMG = '/demos/cvm-mecanicos-a-domicilio-osorno'
