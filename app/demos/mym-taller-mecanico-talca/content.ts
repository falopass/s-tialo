export const BIZ = {
  name: 'MyM Taller mecánico y mecánica a domicilio',
  corto: 'MyM Mecánica',
  address: '44 y medio oriente y 6 y medio sur, 477, 3460000 Talca, Maule, Chile',
  addressCorto: '44 oriente y 6 sur 477, Talca',
  cobertura: 'Talca y alrededores',
  phone: '+56 9 7545 0216',
  rating: 5.0,
  hours: [
    { days: 'Lunes a jueves', time: '09:00–18:00' },
    { days: 'Viernes', time: '09:00–19:00' },
    { days: 'Sábado', time: '09:00–14:00' },
    { days: 'Domingo', time: 'Cerrado' },
  ],
}

export const WA_LINK =
  'https://wa.me/56975450216?text=Hola%2C%20quiero%20agendar%20una%20hora%20en%20MyM%20Mec%C3%A1nica.'

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=MyM+Taller+mec%C3%A1nico+y+mec%C3%A1nica+a+domicilio,+44+y+medio+oriente+y+6+y+medio+sur+477,+Talca'

// Coordenadas exactas de la ficha: la búsqueda por nombre+dirección resolvía
// el pin a otro taller del sector.
export const MAPS_EMBED = 'https://www.google.com/maps?q=-35.4468923,-71.6133344&z=16&output=embed'

// Servicios tal como los lista el afiche publicado por MyM en Facebook.
export const SERVICIOS = [
  {
    nombre: 'Diagnóstico y escáner',
    detalle: 'Lectura de testigos del tablero y fallas electrónicas.',
    icono: 'scan',
  },
  {
    nombre: 'Mantenciones preventivas',
    detalle: 'Aceite, filtros y revisión general por kilometraje.',
    icono: 'wrench',
  },
  {
    nombre: 'Frenos y suspensión',
    detalle: 'Pastillas, discos y tren delantero.',
    icono: 'disc',
  },
  {
    nombre: 'Sistema eléctrico y baterías',
    detalle: 'Luces, alternador, arranque y batería.',
    icono: 'battery',
  },
  {
    nombre: 'Sistema de refrigeración',
    detalle: 'Radiador, bomba de agua y temperatura del motor.',
    icono: 'fan',
  },
  {
    nombre: 'Y más…',
    detalle: 'Cuenta la falla o el ruido y te dicen si conviene taller o domicilio.',
    icono: 'plus',
  },
]

// Fotos reales publicadas por MyM en su página de Facebook.
export const FOTOS = [
  {
    src: '/demos/mym-taller-mecanico-talca/rio.webp',
    alt: 'Auto con el capó abierto atendido en una casa, publicado por MyM en Facebook',
    pie: 'Servicio a domicilio publicado por MyM',
  },
  {
    src: '/demos/mym-taller-mecanico-talca/motor.webp',
    alt: 'Motor con el capó levantado durante un servicio de MyM',
    pie: 'Motor en servicio · foto publicada por MyM',
  },
]

export const PROMESAS = [
  'Vamos a tu casa, trabajo o donde estés',
  'Trabajo responsable y garantizado',
  'Precios justos y transparentes',
]

// Fuentes: ficha de Google Maps “MyM Taller mecánico y mecánica a domicilio”
// (nombre, dirección, teléfono, horario y nota 5,0 — la ficha no muestra el
// número de opiniones, por eso no se cita un conteo); página de Facebook
// “Mym Mecánica a domicilio | Talca” (afiche con servicios, eslogan
// “vamos a tu casa, trabajo o donde estés” y fotos de trabajos).
