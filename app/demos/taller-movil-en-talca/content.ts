/**
 * app/demos/taller-movil-en-talca/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps
 * "Taller movil en talca", verificada 2026-09-28):
 * - Nombre, categoría (taller de reparación de automóviles),
 *   dirección (7 oriente b, C. 22 Nte. 3288, Talca), teléfono/
 *   WhatsApp (+56 9 5721 3971), horario (lun–vie 9:15–15:45,
 *   fin de semana cerrado) y rating 4,8 con 41 reseñas.
 * - El taller va a domicilio: sus clientes cuentan que fue a
 *   buscarlos en ruta, a su casa y al lugar de venta del auto.
 * - Las reseñas citadas son textuales de la ficha. Las fotos son
 *   las publicadas por el taller en su ficha de Maps.
 * - No publica precios ni redes sociales: se omiten.
 */

export const BIZ = {
  name: 'Taller Móvil en Talca',
  short: 'Taller Móvil',
  rubro: 'Taller de reparación de automóviles a domicilio',
  address: '7 Oriente B, 22 Norte 3288',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5721 3971',
  phoneTel: '+56957213971',
  whatsapp: '56957213971',
  rating: '4,8',
  reviews: 41,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Taller Móvil y necesito que revisen mi auto',
)}`

export const WA_LINK_PRECOMPRA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Taller Móvil y quiero agendar una revisión pre-compra',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Taller movil en talca, 22 Norte 3288, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Taller movil en talca, 22 Norte 3288, Talca, Chile',
)}&output=embed`

/** Horario publicado en la ficha: lunes a viernes 9:15–15:45. */
export const HOURS = [
  { days: 'Lunes a viernes', time: '9:15–15:45' },
  { days: 'Sábado y domingo', time: 'Cerrado' },
] as const

export const IMG = '/demos/taller-movil-en-talca'
