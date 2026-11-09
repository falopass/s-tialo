/**
 * app/demos/ferreteria-los-alerces/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, verificada el
 * 9-11-2026): nombre, sector (Alerce Norte, sin numeración de calle),
 * coordenadas, horario, WhatsApp, nota 4,3 con 26 opiniones y las cuatro
 * citas textuales usadas en la página. Las descripciones cortas de cada
 * pasillo salen de las fotos de su ficha; no hay precios ni marcas.
 */

export const BIZ = {
  name: 'Ferretería Los Alerces',
  short: 'Los Alerces',
  rubro: 'Ferretería y materiales',
  address: 'Sector Alerce Norte',
  city: 'Puerto Montt',
  region: 'Región de Los Lagos',
  phoneDisplay: '+56 9 5600 4740',
  whatsapp: '56956004740',
  rating: '4,3',
  reviews: '26',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Ferretería Los Alerces, quiero cotizar',
)}`

// La ficha no publica numeración de calle: el pin exacto son las coordenadas.
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Ferretería Los Alerces, Puerto Montt',
)}`

export const MAPS_DIR =
  'https://www.google.com/maps/dir/?api=1&destination=-41.3806177,-72.9186947'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=-41.3806177,-72.9186947&z=16&output=embed'

export const HORARIO = [
  { dias: 'Lunes a viernes', horas: '9:00 a 19:00' },
  { dias: 'Sábado', horas: '9:00 a 15:00' },
  { dias: 'Domingo', horas: 'Cerrado' },
] as const

// Citas textuales de Google Maps, con nombre e inicial tal como aparecen.
export const CITA_DESTACADA = {
  texto:
    'Rápida atención, y lo mejor, la atención de los vendedores. Se agradece la disposición de los vendedores para explicarle a uno cosas que no sabe, y así compra uno informado.',
  autor: 'UFOS Store',
} as const

export const OPINIONES = [
  {
    texto:
      'Harta variedad de cosas, buena atención, excelente ferretería de Alerce Norte.',
    autor: 'Francisca L.',
  },
  {
    texto:
      'Muy buena atención y está muy surtida... buenos precios y lo mejor, que está cerca.',
    autor: 'Aida S.',
  },
  {
    texto: 'Buena atención y mucha variedad de productos.',
    autor: 'Fabián S.',
  },
] as const

export const IMG = '/demos/ferreteria-los-alerces'
