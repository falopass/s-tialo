/**
 * Datos confirmados en fuentes públicas consultadas el 28-09-2026.
 * No se encontraron perfiles sociales inequívocos para descargar fotos reales.
 */
export const BIZ = {
  name: 'Automotriz Tudela',
  short: 'Automotriz Tudela',
  rubro: 'Mecánica y electricidad automotriz',
  address: 'Pje. 6 1/2 Pte. 1243',
  city: 'Talca',
  region: 'Región del Maule',
  whatsapp: '56972547754',
  phoneDisplay: '+56 9 7254 7754',
} as const

export const HOURS = [
  { days: 'Lunes a viernes', time: '09:00–19:00' },
  { days: 'Sábado y domingo', time: 'Cerrado' },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Automotriz Tudela y quiero consultar por mi vehículo',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Automotriz Tudela, Pje. 6 1/2 Pte. 1243, Talca, Chile',
)}`

/** Paleta del demo: azul noche de taller, amarillo de tester eléctrico y gris acero. */
export const C = {
  navy: '#0E1B2E',
  navy2: '#152841',
  volt: '#F5C400',
  voltDeep: '#6B5500',
  steel: '#DCE3EC',
  steel2: '#C4CEDA',
  ink: '#0E1B2E',
  muted: '#4E5B6B',
  mutedOnDark: '#AEBBCB',
  cyan: '#4FD1E0',
  line: 'rgba(14,27,46,0.14)',
  lineOnDark: 'rgba(220,227,236,0.16)',
} as const

/** Las dos áreas del taller, según su rubro publicado. */
export const AREAS = [
  {
    n: '01',
    title: 'Mecánica',
    desc: 'Revisión y reparación mecánica del vehículo. Cuéntanos qué síntoma tiene y se coordina la visita.',
    tag: 'Taller',
  },
  {
    n: '02',
    title: 'Electricidad automotriz',
    desc: 'Diagnóstico y reparación del sistema eléctrico: cuando una luz del tablero no se apaga o algo dejó de funcionar.',
    tag: 'Eléctrico',
  },
] as const

export const SINTOMAS = ['No enciende', 'Luz en el tablero', 'Ruido extraño', 'Batería o alternador', 'Luces o vidrios eléctricos', 'Revisión general'] as const

export const PASOS = [
  { title: 'Escribe por WhatsApp', desc: 'Marca, modelo y qué le pasa al vehículo.' },
  { title: 'Se coordina la revisión', desc: 'Día y hora dentro del horario del taller.' },
  { title: 'Diagnóstico y presupuesto', desc: 'Antes de intervenir, sabes qué se hará y cuánto cuesta.' },
] as const

export const SOURCES = [
  'Google Maps, ficha pública de Taller mecánico y electricidad Automotriz Tudela: nombre, dirección, teléfono y horario.',
  'Chilopina, ficha indexada de Google Maps: Pje. 6 1/2 Pte. 1243, Talca; +56 9 7254 7754; lunes a viernes 09:00–19:00; sábado y domingo cerrado.',
  'Instagram y Facebook: búsquedas por nombre exacto sin perfil oficial inequívoco disponible para reutilizar fotos.',
] as const
