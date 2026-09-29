// Datos confirmados de la Cooperativa de Servicio de Riego del Centro Ltda.,
// San Clemente.
//
// Fuentes:
// - Google Maps: Villa Los Aromos Lote 14, San Clemente · tel +56 71 262 0192 ·
//   2.7 (3 reseñas) · Lun a Jue 09:00-18:00, Vie 09:00-15:00, fin de semana
//   cerrado.
// - Registro/DGA y prensa (El Maule Informa, CNR, Minagri): única cooperativa
//   de regantes de Chile, fundada en 1966; agrupa 14 Organizaciones de
//   Usuarios de Agua (OUA), unos 5.500 regantes y 35.000 hectáreas en 7 comunas
//   de la cuenca del Maule (Molina, Río Claro, San Rafael, Pelarco,
//   San Clemente, Talca y Maule). RUT 81.432.100-2.
// - Directiva: presidenta María Olga Carril; gerente general Rodrigo Ugarte.
// - Obras recientes: compuertas del canal Taco General (proyecto ~$875
//   millones con la Comisión Nacional de Riego).
// - La cooperativa no tiene sitio web ni logo publicado: la marca de este demo
//   es tipográfica. Fotos: su directiva en la oficina, la certificación de su
//   equipo, sus compuertas de canal (prensa/CNR) y Street View de Villa Los
//   Aromos (mayo 2024), rotulada como tal.

export const BIZ = {
  name: 'Cooperativa de Servicio de Riego del Centro',
  short: 'Coop. de Riego del Centro',
  razonSocial: 'Cooperativa de Servicio de Riego del Centro Ltda.',
  rut: '81.432.100-2',
  rubro: 'Cooperativa de regantes',
  address: 'Villa Los Aromos, Lote 14',
  city: 'San Clemente',
  region: 'Maule',
  phoneDisplay: '+56 71 262 0192',
  phoneTel: 'tel:+56712620192',
  hours: 'Lun a Jue 09:00 a 18:00 · Vie 09:00 a 15:00',
  rating: 2.7,
  reviews: 3,
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Cooperativa de Servicio de Riego del Centro, San Clemente',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Cooperativa de Servicio de Riego del Centro, Villa Los Aromos Lote 14, San Clemente',
)}&output=embed`

export const IMG = '/demos/cooperativa-riego-del-centro'
