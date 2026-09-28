/**
 * app/demos/serviteca-autolisto/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + letreros visibles en
 * sus propias fotos): "Serviteca Autolisto", taller mecánico en Calle 30
 * Ote. 980, Talca (a pasos del Mall Plaza Maule); teléfono +56 9 5750 0053;
 * rating 4,5 con 103 opiniones; horario lun-jue 9-19, vie 9-18,
 * sáb 9-13:30, dom cerrado.
 * Servicios confirmados por los letreros del taller (fotos reales):
 * mantención por catálogo, alineación, balanceo, frenos, tren delantero,
 * rectificado de discos, cambio de aceite y lavado; trabaja con Mobil 1,
 * Valvoline y Pirelli. Reseñas citadas: textos reales de Google.
 */

export const BIZ = {
  name: 'Serviteca Autolisto',
  short: 'Autolisto',
  rubro: 'Taller mecánico y serviteca',
  address: 'Calle 30 Oriente 980',
  referencia: 'a pasos del Mall Plaza Maule',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5750 0053',
  phoneTel: '+56957500053',
  whatsapp: '56957500053',
  rating: 4.5,
  ratingLabel: '4,5',
  reviews: 103,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Serviteca Autolisto y quiero agendar una hora',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Serviteca Autolisto, Calle 30 Oriente 980, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Serviteca Autolisto, Calle 30 Oriente 980, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/serviteca-autolisto'

/** Letreros visibles en las fotos reales del taller */
export const SERVICIOS = [
  { n: '01', nombre: 'Mantención por catálogo', detalle: 'Los kilometrajes del fabricante, con repuestos y aceite de marca' },
  { n: '02', nombre: 'Alineación y balanceo', detalle: 'Rampa de alineación computada y balanceo de ruedas' },
  { n: '03', nombre: 'Frenos', detalle: 'Pastillas, discos y rectificado de discos en la casa' },
  { n: '04', nombre: 'Tren delantero', detalle: 'Terminales, bujes y suspensión' },
  { n: '05', nombre: 'Cambio de aceite', detalle: 'Mobil 1 y Valvoline, con filtro incluido' },
  { n: '06', nombre: 'Neumáticos', detalle: 'Venta y montaje, línea Pirelli en el taller' },
] as const

/** Horario real publicado en Google Maps */
export const HORARIO = [
  { dias: 'Lunes a jueves', horas: '9:00 a 19:00' },
  { dias: 'Viernes', horas: '9:00 a 18:00' },
  { dias: 'Sábado', horas: '9:00 a 13:30' },
  { dias: 'Domingo', horas: 'Cerrado' },
] as const

/** Reseñas reales de Google (nombre y texto de la ficha) */
export const RESENAS = [
  {
    nombre: 'Vale Vilche',
    estrellas: 5,
    texto:
      'Súper profesionales y atentos. Yo fui por una tuerca y me atendieron altiro, me la cambiaron y me la ajustaron. Quedé muy conforme.',
    tema: 'Atención inmediata',
  },
  {
    nombre: 'Cristian Jara',
    estrellas: 4,
    texto: 'Buena experiencia y buena atención.',
    tema: 'Recomendado',
  },
] as const
