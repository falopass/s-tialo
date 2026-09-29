/**
 * app/demos/outlet-neira-talca/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps y
 * directorios públicos): nombre "Outlet Neira", 3 1/2 Sur 2490,
 * Talca, WhatsApp (+56 9 5394 2381), nota 4,3 con 6 reseñas
 * (cita textual de Carina Cancino en la página), horario
 * Lun–Vie 9:00–19:00 y sábado 9:00–16:00. Su lema "su mejor
 * opción" y el rubro "muebles & textil" salen del letrero de
 * la fachada. Las fotos son reales de la ficha del negocio.
 * El despacho existe — lo confirma la reseña de Carina y la
 * foto de la camioneta repartiendo.
 */

export const BIZ = {
  name: 'Outlet Neira Talca',
  short: 'Outlet Neira',
  rubro: 'Mueblería outlet',
  lema: 'Su mejor opción',
  address: '3 1/2 Sur 2490',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5394 2381',
  phoneTel: '+56953942381',
  whatsapp: '56953942381',
  reviews: 6,
  rating: '4,3',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Outlet Neira y quiero consultar por un mueble',
)}`

export const WA_LINK_PRECIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Outlet Neira y quiero preguntar qué precio tiene',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Outlet Neira Talca, 3 1/2 Sur 2490, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Outlet Neira Talca, 3 y media Sur 2490, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/outlet-neira-talca'
