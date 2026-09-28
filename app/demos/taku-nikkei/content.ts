/**
 * app/demos/taku-nikkei/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps e Instagram @takunikkei):
 * nombre (TAKU NIKKEI), dirección (Av. 2 Nte. 4715, Local 1, Talca),
 * WhatsApp (+56 9 2246 2970), horario (Lu–Sa 13:00–23:00, Do 12:00–22:00),
 * rating 4,7 con 121 reseñas en Google, cocina fusión nikkei
 * (japonesa-peruana) con delivery y retiro. Los platos y promos citados
 * salen de sus propias publicaciones (Taku Imperial del sábado, domingo
 * de ceviche); el resto de la carta se confirma por WhatsApp.
 */

export const BIZ = {
  name: 'TAKU NIKKEI',
  short: 'Taku',
  rubro: 'Cocina fusión nikkei (japonesa-peruana)',
  address: 'Av. 2 Norte 4715, Local 1',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 2246 2970',
  phoneTel: '+56922462970',
  whatsapp: '56922462970',
  rating: '4,7',
  reviews: 121,
  igHandle: '@takunikkei',
  igFollowers: 4558,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola TAKU NIKKEI, vi su página y quiero reservar mesa',
)}`

export const WA_LINK_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola TAKU NIKKEI, quiero pedir para delivery o retiro',
)}`

export const IG_URL = 'https://instagram.com/takunikkei'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'TAKU NIKKEI, Av. 2 Nte. 4715, Talca, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'TAKU NIKKEI, Av. 2 Nte. 4715, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/taku-nikkei'
