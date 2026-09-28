/**
 * app/demos/maderas-caceres-e-hijos/content.ts
 *
 * Datos del demo. REALES (ficha pública de Google Maps, hl=es, y registro
 * mercantil público): nombre "Sociedad Cáceres e hijos maderas limitada",
 * rubro (ferretería), dirección en Carlos Silva Renard, San Clemente,
 * teléfono/WhatsApp y horario publicado. Giros confirmados en el
 * registro (RUT 76.523.267-8, desde 2015): venta de artículos de
 * ferretería y materiales de construcción, servicios de corta de
 * madera y transporte de carga por carretera; sucursal en Mariposas.
 * La ficha no tiene reseñas: por eso este demo no muestra sección de
 * reseñas. Fotos: la ficha solo tiene Street View (mayo 2024); se usan
 * esas tomas reales del local, etiquetadas con su fuente.
 */

export const BIZ = {
  name: 'Sociedad Cáceres e Hijos Maderas Ltda.',
  short: 'Maderas Cáceres',
  rubro: 'Ferretería y maderas',
  address: 'Carlos Silva Renard 792',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4207 9107',
  phoneTel: '+56942079107',
  whatsapp: '56942079107',
  since: '2015',
  branches: ['Local central · Carlos Silva Renard, San Clemente', 'Sucursal · Mariposas, San Clemente'],
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Maderas Cáceres y quiero cotizar',
)}`

export const WA_LINK_COTIZA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Maderas Cáceres y quiero cotizar materiales',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Sociedad Cáceres e hijos maderas limitada, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Sociedad Cáceres e hijos maderas limitada, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/maderas-caceres-e-hijos'

export const HORAS = [
  { d: 'Lunes a miércoles', h: '8:30 a 13:00 · 14:30 a 18:00' },
  { d: 'Jueves', h: '14:30 a 18:00' },
  { d: 'Viernes', h: '8:30 a 13:00 · 14:30 a 18:00' },
  { d: 'Sábado', h: '8:30 a 13:00' },
  { d: 'Domingo', h: 'Cerrado' },
]
