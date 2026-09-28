/**
 * app/demos/constructora-pehuenche/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Nombre («Constructora Pehuenche Limitada»), dirección
 *   (3 Oriente 1424, Talca) y teléfono FIJO (+56 71 221 8194)
 *   según su ficha pública de Google Maps. Verificado sep. 2026.
 * - Categoría de la ficha: empresa constructora.
 * - El teléfono es fijo: no hay WhatsApp; el contacto del demo es
 *   por llamada (tel:) y visita a la oficina. No se muestra botón
 *   de WhatsApp en ninguna parte.
 * - Las reseñas públicas de la ficha son quejas laborales: NO se
 *   muestra sección de reseñas (no hay contenido de clientes que
 *   usar y nunca se inventan citas).
 * - La ficha no declara horario ni sitio web: se indica «oficina»
 *   y el llamado es a llamar y coordinar visita.
 * - Sin fotos verificables de obras: las ilustraciones del demo
 *   (escena de obra con pehuenes) son SVG propios.
 */

export const BIZ = {
  name: 'Constructora Pehuenche',
  legal: 'Constructora Pehuenche Limitada',
  short: 'Pehuenche',
  rubro: 'Empresa constructora',
  address: '3 Oriente 1424',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 221 8194',
  phoneTel: '+56712218194',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Constructora Pehuenche Limitada, 3 Oriente 1424, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '3 Oriente 1424, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/constructora-pehuenche'
