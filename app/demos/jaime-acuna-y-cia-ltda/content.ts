/**
 * Datos verificados en la planilla de prospección de Diego
 * (seguimiento-sitiazo-talca.csv, 28-09-2026): "Jaime Acuña Y Cia.
 * Ltda.", estudio de contabilidad y auditoría en Talca, contacto
 * WhatsApp +56 9 9818 5244, correo jaimeacuna77@hotmail.com.
 * No se encontró ficha pública de Google Maps ni redes activas con
 * dirección confirmada, por eso el demo no muestra dirección ni
 * rating y sus bloques visuales son bosquejos CSS marcados como tal.
 */
export const BIZ = {
  name: 'Jaime Acuña y Cía.',
  legalName: 'Jaime Acuña Y Cia. Ltda.',
  category: 'Contabilidad y auditoría',
  city: 'Talca',
  phone: '56998185244',
  phoneDisplay: '+56 9 9818 5244',
  email: 'jaimeacuna77@hotmail.com',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola Jaime, vi la página de Jaime Acuña y Cía. y quisiera hacer una consulta contable.',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Talca, Región del Maule, Chile',
)}&output=embed`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Talca, Región del Maule, Chile',
)}`
