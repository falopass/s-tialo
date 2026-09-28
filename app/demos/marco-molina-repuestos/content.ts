/**
 * app/demos/marco-molina-repuestos/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + su Facebook
 * verificado como sitio enlazado en Maps): nombre, dirección, teléfonos,
 * horario, calificación y las reseñas citadas (Carolina, las dos Catalina,
 * Juan Pablo). El segundo teléfono sale de un aviso publicado por el
 * propio negocio en Facebook. Las fotos son de su ficha de Maps y de su
 * página de Facebook.
 */

export const BIZ = {
  name: 'Marco Molina Repuestos',
  short: 'Marco Molina',
  rubro: 'Tienda de repuestos para automóviles',
  address: 'Av. Brasil 201',
  city: 'Linares',
  region: 'Región del Maule',
  hours: 'Lunes a viernes 9:00 a 18:00 · sábado 9:00 a 13:00',
  phoneDisplay: '9 6206 4676',
  phoneAlt: '9 7818 1095',
  whatsapp: '56962064676',
  rating: 4.2,
  reviews: 136,
  facebook: 'https://web.facebook.com/profile.php?id=61562981955982',
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Marco Molina Repuestos, Av. Brasil 201, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Marco Molina Repuestos, Av. Brasil 201, Linares, Chile',
)}&output=embed`

export const IMG = '/demos/marco-molina-repuestos'

const wa = (text: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(text)}`

export const WA_LINK = wa(
  'Hola, busco un repuesto para mi auto. ¿Me pueden ayudar?',
)

export const WA_LINK_ENCARGO = wa(
  'Hola, necesito encargar un repuesto que no encuentro:',
)
