/**
 * app/demos/cordillera-san-clemente/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps «Cordillera»,
 * San Clemente — cafetería, no el restaurante 5ta Cordillera de Los
 * Andes): dirección (Alejandro Cruz 125, dentro de la Parroquia Entre
 * Ríos), WhatsApp (+56 9 5154 1850), horario, 4.3 estrellas con 6
 * reseñas y precio por persona $1.000–$5.000. Las fotos son las de su
 * propia ficha. El logo de la pared dice «Cordillera — amasandería &
 * repostería»; en la ficha aparecen milkshakes (el flyer de Oreo es
 * suyo), café helado y galletas.
 */

export const BIZ = {
  name: 'Cordillera',
  short: 'Cordillera',
  rubro: 'Cafetería y repostería',
  address: 'Alejandro Cruz 125',
  addressFull: 'Alejandro Cruz 125, dentro de la Parroquia Entre Ríos, San Clemente, Maule',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5154 1850',
  phoneTel: '+56951541850',
  whatsapp: '56951541850',
  rating: 4.3,
  reviews: 6,
  price: '$1.000 – $5.000 por persona',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cordillera y quiero consultar por la carta',
)}`

export const WA_LINK_PEDIDO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Cordillera y quiero hacer un pedido para retirar',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cordillera, Alejandro Cruz 125, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cordillera, Alejandro Cruz 125, San Clemente, Maule, Chile',
)}&output=embed`

// Horario real de la ficha de Google Maps
export const HOURS = [
  { d: 'Lunes a viernes', h: '9:00 – 19:30' },
  { d: 'Sábado', h: '9:00 – 19:00' },
  { d: 'Domingo', h: 'Cerrado' },
]

export const IMG = '/demos/cordillera-san-clemente'
