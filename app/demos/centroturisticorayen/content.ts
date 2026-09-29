/**
 * app/demos/centroturisticorayen/content.ts
 *
 * Datos verificados de Centro Turístico Rayen (Vilches, San Clemente):
 *
 * - Google Maps: «Centro Turístico Rayen», 4,8 estrellas · 24 reseñas,
 *   categoría estancia en granjas, Ruta K-711, San Clemente.
 * - Sitio oficial centroturisticorayen.cl: 4 cabañas completamente
 *   equipadas para hasta 6 personas, con terraza y zona de parrilla;
 *   hostería; zona de camping con parrillas y mesas rodeada de árboles
 *   nativos; piscina; 2 tinajas privadas de agua caliente con
 *   hidromasaje; sendero de trekking; bosque nativo; se aceptan
 *   mascotas; atención los 365 días; convenios con empresas.
 * - Reserva por WhatsApp +56 9 9199 6293 con el 50% de anticipo;
 *   transferencia y efectivo; check-in 12:00, check-out 14:00; la
 *   administración facilita ropa de cama y toallas si se necesita.
 * - Reseñas citadas abajo son literales de Google Maps
 *   (Luz Dottori, Mariela González Rojas, Nicole Vasquez).
 * - Atractivos cercanos nombrados por el propio sitio: Valle de Los
 *   Cóndores (Alto Maule), Salto Maule, Lago Colbún, Monjes Blancos,
 *   Mirador Valle del Venado, Cascada Invertida.
 * - Fotos y logo: descargadas del sitio oficial y de la ficha de Maps.
 *   Nada en esta página es inventado ni generado.
 */

export const BIZ = {
  name: 'Centro Turístico Rayen',
  short: 'Rayen',
  rubro: 'Cabañas · camping · tinajas',
  address: 'Camino a Vilches km 8',
  city: 'Vilches, San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9199 6293',
  whatsapp: '56991996293',
  rating: 4.8,
  reviews: 24,
  dueno: 'Florentino Vásquez',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Centro Turístico Rayen, vi su página y quiero consultar por cabañas',
)}`

export const WA_LINK_TINAJA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Centro Turístico Rayen, quiero consultar por las tinajas',
)}`

export const MAPS_QUERY = 'Centro Turístico Rayen, K-711, San Clemente, Maule'

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY,
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Centro Turístico Rayen, San Clemente',
)}&output=embed`

export const IMG = '/demos/centroturisticorayen'

export const RESENAS = [
  {
    nombre: 'Luz Dottori',
    texto:
      'Fui a acampar con mi pareja dos noches, hermoso entorno, bien organizado, seguro y limpio. Ideal para vacacionar en familia si se busca un lugar tranquilo y acogedor. Los dueños muy atentos y amables. Lo recomendamos.',
    estrellas: 5,
  },
  {
    nombre: 'Mariela González Rojas',
    texto:
      'Lindo lugar, cabañas cómodas, con todo lo necesario para alojar conectados con la naturaleza. Piscina espaciosa con lugar para niños y adultos, y tinajas para relajarse mirando las estrellas.',
    estrellas: 5,
  },
  {
    nombre: 'Nicole Vasquez',
    texto:
      'Excelente lugar, muy tranquilo. Amabilidad al 100%. Lo usamos para descansar y como punto de llegada después de conocer otros sectores turísticos de la zona. Volveremos a ir.',
    estrellas: 5,
  },
] as const

export const FAQ = [
  {
    q: '¿Cómo reservo?',
    a: 'Por WhatsApp al +56 9 9199 6293 o por correo. Para reservar alojamiento se cancela el 50% del valor de la estadía por adelantado; se acepta transferencia y efectivo.',
  },
  {
    q: '¿A qué hora se entra y se sale?',
    a: 'Check-in a las 12:00 y check-out hasta las 14:00. Cualquier horario especial se coordina por adelantado.',
  },
  {
    q: '¿Hay que llevar ropa de cama?',
    a: 'Pueden traer la suya o pedirla: la administración facilita ropa de cama y toallas a quien lo necesite.',
  },
  {
    q: '¿Se puede ir con mascotas?',
    a: 'Sí. Las cabañas y el camping reciben mascotas — el entorno es campo abierto junto al bosque nativo.',
  },
] as const

export const CERCANIAS = [
  'Valle de Los Cóndores',
  'Salto Maule',
  'Lago Colbún',
  'Monjes Blancos',
  'Mirador Valle del Venado',
  'Cascada Invertida',
] as const
