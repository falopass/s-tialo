/**
 * app/demos/abuela-coffee-villarrica/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps, verificada
 * 11-11-2026): nombre ("Abuela coffee Villarrica"), rubro (cafetería),
 * dirección (Vicente Reyes 794, Villarrica, La Araucanía), horario
 * (lun a vie 8:30 a 18:30, sáb 10:30 a 16:30, dom cerrado), WhatsApp
 * +56 9 5647 8138, 15 opiniones en Google (sin nota publicada: no se
 * muestran estrellas), las citas textuales de Daniel O., Cristóbal N.
 * y Sebastián C., y las fotos de public/demos/abuela-coffee-villarrica/
 * (todas de su ficha). Lo afirmado sobre la casa (café italiano recién
 * molido, todo casero, opciones veganas, leche sin lactosa) sale de la
 * opinión de Daniel O. y se presenta como "lo que dicen quienes
 * vienen". Los productos nombrados se ven en sus fotos: empanadas,
 * hojaldres, baklava, dulce de nueces, alfajores, cuchuflís, croissant
 * con helado y cheesecake. La terraza (mesas turquesa, sillas
 * amarillas) se ve en la foto de la fachada. Sin precios. Todo lo
 * demás (titulares, invitaciones) es texto de muestra.
 */

export const BIZ = {
  name: 'Abuela Coffee',
  short: 'Abuela Coffee',
  rubro: 'Cafetería',
  city: 'Villarrica',
  region: 'Región de La Araucanía',
  address: 'Vicente Reyes 794',
  phoneDisplay: '+56 9 5647 8138',
  whatsapp: '56956478138',
  reviews: 15,
} as const

export const HOURS = [
  { d: 'Lunes a viernes', h: '8:30 a 18:30' },
  { d: 'Sábado', h: '10:30 a 16:30' },
  { d: 'Domingo', h: 'cerrado' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Abuela Coffee y quiero hacer un pedido',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Abuela+coffee+Villarrica/@-39.2824318,-72.2261857,17z/data=!4m6!3m5!1s0x961463523eaf3edf:0xa6b83aeed4bc023c!8m2!3d-39.2824318!4d-72.2261857'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-39.2824318,-72.2261857&z=16&output=embed'

export const IMG = '/demos/abuela-coffee-villarrica'
