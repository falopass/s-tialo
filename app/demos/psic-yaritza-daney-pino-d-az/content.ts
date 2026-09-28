/**
 * app/demos/psic-yaritza-daney-pino-d-az/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Nombre, dirección (Av. Dos Sur 870, of. 505, Talca), teléfono/WhatsApp,
 *   horario (Lun–Vie 9:00–21:00), nota 5,0★ y 13 reseñas: ficha pública
 *   de Google Maps.
 * - Servicios y precios: su perfil público de Encuadrado
 *   (encuadrado.com/p/yaritza-daney-pino-diaz), que es el sitio web que
 *   ella misma publica en su ficha.
 * - Bio: «escritora y psicóloga clínica independiente (magíster,
 *   diplomada)», personas desde los 6 años; enfoque cognitivo
 *   conductual y analítico junguiano; sueños y pesadillas;
 *   instrumentos de evaluación e informes (texto de su perfil).
 * - Reseñas citadas: textos originales en español de su ficha de Google.
 * - Fotos en /demos/psic-yaritza-daney-pino-d-az: subidas por ella a su
 *   ficha de Google (su consulta, su escritorio, sus libros y su retrato).
 */

export const BIZ = {
  name: 'Psic. Yaritza Daney Pino Díaz',
  short: 'Yaritza Pino',
  rubro: 'Psicóloga clínica',
  address: 'Av. Dos Sur 870, of. 505',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3195 1225',
  phoneTel: '+56931951225',
  whatsapp: '56931951225',
  rating: '5,0',
  reviews: 13,
  agenda: 'https://encuadrado.com/p/yaritza-daney-pino-diaz',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Yaritza, vi tu página y quiero agendar una sesión',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Psic. Yaritza Daney Pino Díaz, Av. Dos Sur 870, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Avenida Dos Sur 870, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/psic-yaritza-daney-pino-d-az'
