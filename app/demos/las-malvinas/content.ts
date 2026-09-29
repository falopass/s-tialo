/**
 * app/demos/las-malvinas/content.ts
 *
 * Datos del mockup. REALES (verificados en Google Maps y en su sitio
 * restaurantlasmalvinas.webnode.cl): nombre completo «Las Malvinas —
 * Restaurant y Residencial», dirección (2 Norte N° 20, Longaví, a la
 * entrada de la comuna), teléfonos fijos (073) 2 411 076 y 2 411 956,
 * rating 4,6 con ~2.000 opiniones, horario (lunes a viernes
 * 8:30–22:00, sábado 8:30–17:00, domingo 12:00–17:00), servicio de
 * banquetes con capacidad para 50 personas (a la carta o menú
 * predefinido), catering para eventos fuera del local y alimentación
 * para empresas (equipo con nutricionista), «Domingos Familiares»
 * con descuento para familias, y su lema «El sabor criollo del Maule
 * Sur». Las reseñas citadas son textos reales de su ficha. Las fotos
 * son reales: su ficha de Google y la galería de su propio sitio.
 */

export const BIZ = {
  name: 'Las Malvinas',
  full: 'Las Malvinas — Restaurant y Residencial',
  rubro: 'Restaurant · Residencial · Banquetes',
  lema: 'El sabor criollo del Maule Sur',
  address: '2 Norte N° 20',
  city: 'Longaví',
  region: 'Región del Maule',
  phoneDisplay: '(73) 2 411 076',
  phoneAlt: '2 411 956',
  tel: 'tel:+56732411076',
  rating: '4,6',
  reviews: '2.000',
  site: 'restaurantlasmalvinas.webnode.cl',
  horarioSemana: 'Lunes a viernes · 8:30 a 22:00',
  horarioSabado: 'Sábado · 8:30 a 17:00',
  horarioDomingo: 'Domingo · 12:00 a 17:00',
} as const

export const SITE_URL = `https://${BIZ.site}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Las Malvinas Restaurant y Residencial, 2 Norte 20, Longaví, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Las Malvinas Restaurant y Residencial, 2 Norte 20, Longaví, Chile',
)}&output=embed`

export const IMG = '/demos/las-malvinas'
