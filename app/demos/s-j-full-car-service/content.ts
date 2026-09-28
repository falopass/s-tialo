/**
 * app/demos/s-j-full-car-service/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, sep 2026):
 * nombre, dirección, WhatsApp, horario, rating 4.7 con 40 reseñas, los
 * servicios pintados en su letrero (neumáticos, frenos, luces,
 * accesorios, lavado, mantención preventiva) y el uso de aceites Mobil
 * 3000 / Mobil 1 según reseña de cliente. Ficha sin reclamar y sin
 * sitio web propio. Las tres reseñas citadas son reales (Juan Pablo,
 * Nicole, Fabiola Hernandez Toro).
 */

export const BIZ = {
  name: 'S & J Full Car Service',
  short: 'S&J',
  rubro: 'Taller mecánico y serviteca',
  address: 'Colón 3047',
  city: 'Talcahuano',
  region: 'Región del Biobío',
  phoneDisplay: '+56 9 8589 6141',
  phoneTel: '+56985896141',
  whatsapp: '56985896141',
  rating: 4.7,
  reviews: 40,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de S&J Full Car Service y quiero agendar una hora',
)}`

export const WA_LINK_ACEITE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de S&J y quiero agendar un cambio de aceite',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'S & J Full Car Service, Colón 3047, Talcahuano, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'S & J Full Car Service, Colón 3047, Talcahuano, Chile',
)}&output=embed`

export const IMG = '/demos/s-j-full-car-service'

export const HORARIO = [
  { d: 'Lunes a viernes', h: '9:00 – 18:30' },
  { d: 'Sábado', h: '9:00 – 14:00' },
  { d: 'Domingo', h: 'Cerrado' },
] as const

/** Servicios reales del letrero del local + cambio de aceite Mobil (reseñas). */
export const SERVICIOS = [
  { t: 'Neumáticos', d: 'Venta, cambio y reparación. Revisión de desgaste y presiones.' },
  { t: 'Frenos', d: 'Pastillas, discos y sistema completo. Lo revisamos antes de cotizar.' },
  { t: 'Cambio de aceite', d: 'Aceites Mobil 3000 y Mobil 1, filtros y registro de kilometraje.' },
  { t: 'Luces', d: 'Ampolletas, focos y sistema eléctrico de iluminación.' },
  { t: 'Mantención preventiva', d: 'Chequeo por kilometraje para llegar tranquilo al próximo servicio.' },
  { t: 'Lavado de vehículos', d: 'Lavado exterior e interior, según lo que tu auto necesite.' },
  { t: 'Accesorios', d: 'Insumos y accesorios de línea económica, con alternativas de calidad.' },
  { t: 'Diagnóstico honesto', d: 'Te dicen lo que tiene el auto sin inventar pega extra.' },
] as const

export const RESENAS = [
  {
    nombre: 'Juan Pablo',
    cuando: 'hace 1 año',
    texto:
      'El servicio es bueno, rápido y económico; se paga lo justo. Manejan repuestos de línea más económica, salvo el aceite de motor que es de muy buena calidad: Mobil 3000 y Mobil 1.',
  },
  {
    nombre: 'Nicole',
    cuando: 'hace 2 meses',
    texto: 'Excelente servicio, 100% transparencia, muy recomendable.',
  },
  {
    nombre: 'Fabiola Hernandez Toro',
    cuando: 'hace 1 año',
    texto: 'Gran experiencia, servicio honesto y rápido. 100% recomendable.',
  },
] as const
