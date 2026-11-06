/**
 * app/demos/servicio-automotriz-rf/content.ts
 *
 * Datos del mockup. REALES (verificados el 5-11-2026 en sus propias
 * fuentes):
 * - Nombre y categoría: «Servicio Automotriz RF», taller de reparación
 *   de automóviles. (ficha de Google Maps)
 * - Bio del taller: «Electromecánica y Diagnóstico Automotriz
 *   Multimarca», «Diagnóstico electrónico, scanner y fallas
 *   eléctricas», «Especialistas en vehículos diésel y bencina»,
 *   «Mecánica general, suspensión, frenos y mantenciones».
 *   Formación declarada: Instituto Profesional INACAP. (Facebook)
 * - Dirección: Azapa 1624, Osorno, Región de Los Lagos. (Maps)
 * - Horario: lunes a viernes 9:00 a 18:00; sábado y domingo cerrado.
 *   (Google Maps)
 * - WhatsApp +56 9 7821 3813; correo s.automotrizrf@gmail.com;
 *   Facebook e Instagram @servicio_automotriz.rf.
 * - Reputación: 5,0 con 19 opiniones en Google. Las tres citas de
 *   REVIEWS son textuales de su ficha (con su ortografía original).
 * - BITACORA: los siete trabajos son textuales de las publicaciones
 *   del taller en sus redes. Las fotos son reales de su taller, en
 *   public/demos/servicio-automotriz-rf/.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas, descripciones de servicios,
 * rótulos del «scanner» (ilustrativo: no son códigos ni resultados de
 * un auto real) y textos de sección. Sin precios, plazos, garantías
 * ni años de experiencia: el taller no los publica.
 */

export const BIZ = {
  name: 'Servicio Automotriz RF',
  short: 'Automotriz RF',
  rubro: 'Taller de reparación de automóviles',
  especialidad: 'Electromecánica y diagnóstico automotriz multimarca',
  address: 'Azapa 1624',
  city: 'Osorno',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 7821 3813',
  phoneTel: '+56978213813',
  whatsapp: '56978213813',
  email: 's.automotrizrf@gmail.com',
  instagram: 'https://www.instagram.com/servicio_automotriz.rf/',
  instagramUser: '@servicio_automotriz.rf',
  facebook: 'https://www.facebook.com/profile.php?id=100068728607784',
  formacion: 'Instituto Profesional INACAP',
  rating: '5,0',
  ratingValue: 5.0,
  reviews: 19,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi su página y quiero agendar un diagnóstico',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Servicio Automotriz RF, Azapa 1624, Osorno, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Azapa 1624, Osorno, Chile',
)}&output=embed`

/** Opiniones textuales de su ficha de Google (ortografía original). */
export const REVIEWS = [
  {
    text: 'Buenas tardes, análisis y rapidez en la reparación del trabajo realizado a mi gran i10.',
    author: 'Raul S.',
  },
  {
    text: 'Excelente Servicio, proactivo y demuestra conocimientos, cumple con plazos.',
    author: 'David C.',
  },
  {
    text: 'Exelente servicio, recomendado.',
    author: 'Jorge A.',
  },
] as const

/**
 * Registro textual de trabajos publicados por el taller en sus redes.
 * `foto` apunta a una foto real de su taller; algunas entradas del
 * registro no tienen foto y quedan como línea de texto, como en un
 * libro de órdenes de trabajo.
 */
export const BITACORA = [
  {
    n: 'ENT-01',
    vehiculo: 'Toyota Hilux 2023',
    trabajo: 'Problemas en el sistema de frenado ABS',
    area: 'FRENOS / ABS',
    foto: 'hilux.webp',
    fotoAlt: 'Toyota Hilux gris dentro del galpón del taller',
  },
  {
    n: 'ENT-02',
    vehiculo: 'Mitsubishi Montero 2.4 diésel 2021',
    trabajo: 'Cambio de aceite y reset',
    area: 'MANTENCIÓN',
    foto: 'tablero.webp',
    fotoAlt: 'Tablero del Mitsubishi Montero encendido, con el aviso de servicio en la pantalla',
  },
  {
    n: 'ENT-03',
    vehiculo: 'Mitsubishi L200',
    trabajo: 'Cambio de amortiguadores y bujes del paquete de resorte',
    area: 'SUSPENSIÓN',
    foto: 'l200.webp',
    fotoAlt: 'Mitsubishi L200 blanca de frente, en el taller',
  },
  {
    n: 'ENT-04',
    vehiculo: 'Hyundai Elantra',
    trabajo: 'Mantenimiento correctivo',
    area: 'MANTENCIÓN',
    foto: 'elantra.webp',
    fotoAlt: 'Hyundai Elantra azul con el capó abierto en el taller',
  },
  {
    n: 'ENT-05',
    vehiculo: 'Mahindra pick up 2.2 diésel',
    trabajo: 'Armado de motor',
    area: 'MOTOR',
    foto: 'motor-armado.webp',
    fotoAlt: 'Cigüeñal y block de motor sobre el banco del taller',
  },
  {
    n: 'ENT-06',
    vehiculo: 'Mahindra pick up 2.2 4x4 2019',
    trabajo: 'Diagnóstico y mantenimiento correctivo',
    area: 'DIAGNÓSTICO',
  },
  {
    n: 'ENT-07',
    vehiculo: 'Hyundai Porter 2.5 turbo diésel',
    trabajo: 'Mal funcionamiento de motor',
    area: 'MOTOR',
  },
] as const

export const HORARIO = [
  { dias: 'Lunes a viernes', horas: '9:00 – 18:00' },
  { dias: 'Sábado y domingo', horas: 'Cerrado' },
] as const

export const IMG = '/demos/servicio-automotriz-rf'
