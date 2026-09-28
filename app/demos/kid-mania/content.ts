/**
 * app/demos/kid-mania/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, sep-2026):
 * nombre "KID MANIA" — centro de entretención infantil en
 * 2 Ote. 382-322, Talca; teléfono/WhatsApp +56 9 5898 2572;
 * 4,7★ / 16 reseñas; horario Lun–Vie 8:00–21:00 y Sáb–Dom 8:00–22:00.
 * Las fotos son las reales publicadas en su ficha de Google Maps y las
 * reseñas citadas son textos reales de esa ficha. No se encontraron
 * redes sociales ni sitio web del negocio: los servicios descritos son
 * los que se ven en las fotos (juegos inflables, decoración temática,
 * mesa dulce, animación).
 */

export const BIZ = {
  name: 'Kid Mania',
  rubro: 'Centro de entretención y cumpleaños infantiles',
  address: '2 Ote. 382-322',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5898 2572',
  phoneTel: '+56958982572',
  whatsapp: '56958982572',
  rating: '4,7',
  reviews: 16,
} as const

export const HOURS = [
  { days: 'Lunes a viernes', time: '8:00 – 21:00' },
  { days: 'Sábado y domingo', time: '8:00 – 22:00' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Kid Mania y quiero consultar',
)}`

export const WA_LINK_CUMPLE = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Kid Mania y quiero reservar un cumpleaños',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Kid Mania, 2 Ote. 382, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Kid Mania, 2 Oriente 382, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/kid-mania'
