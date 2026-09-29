/**
 * app/demos/completito/content.ts
 *
 * Datos verificados de Comple-Tito (Curicó, Maule) — el clásico
 * "Completito" de Manso de Velasco.
 *
 * Fuentes:
 *  - Ficha Google Maps (place 11c4vmjkgp): nombre Comple-Tito,
 *    categoría Restaurante, Av. Manso de Velasco 556, Curicó;
 *    tel. fijo (75) 232 1697; rating 4,4; horario Lun–Mié 13:30–21:30,
 *    Jue–Vie 12:30–21:30, Sáb–Dom cerrado.
 *  - Directorios históricos (Dateas, Citiservi, CuricoChile) listan el
 *    local como "Completito" en Manso de Velasco 556 — mismo teléfono:
 *    es el mismo negocio; el letrero actual dice COMPLE®TITO.
 *  - Letrero real (foto de su ficha): "COMPLE®TITO — Sandwichs /
 *    Café Express / Shop", navy con logos Pepsi.
 *  - Resumen de opiniones de Google: sandwich se menciona en 65
 *    opiniones, "rico" en 54, completos en 39, churrascos en 20.
 *
 * Omisos: sin WhatsApp confirmado (solo fijo) — CTA por llamada;
 * precios no legibles en la pizarra — no se publican; textos de
 * reseñas no accesibles en vista limitada.
 */

export const BIZ = {
  name: 'Comple-Tito',
  short: 'Comple-Tito',
  rubro: 'Sandwichería · fuente de soda',
  address: 'Av. Manso de Velasco 556',
  city: 'Curicó',
  region: 'Maule',
  phoneDisplay: '(75) 232 1697',
  phoneTel: '+56752321697',
  rating: 4.4,
}

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL =
  'https://www.google.com/maps/place/Comple-Tito/@-34.9848785,-71.2336122,17z'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Comple-Tito, Av. Manso de Velasco 556, Curicó',
)}&output=embed`

const IMG_DIR = '/demos/completito'

export const IMG = {
  logo: `${IMG_DIR}/logo.webp`,
  fachada: `${IMG_DIR}/fachada.webp`,
  italiano: `${IMG_DIR}/italiano.webp`,
  completo: `${IMG_DIR}/completo.webp`,
  churrasco: `${IMG_DIR}/churrasco.webp`,
  mesa: `${IMG_DIR}/mesa.webp`,
  salon: `${IMG_DIR}/salon.webp`,
  barra: `${IMG_DIR}/barra.webp`,
  pisco: `${IMG_DIR}/pisco.webp`,
}

/** Horario completo, verificado en la ficha de Maps. */
export const HORARIO = [
  ['Lunes a miércoles', '13:30 – 21:30'],
  ['Jueves y viernes', '12:30 – 21:30'],
  ['Sábado y domingo', 'Cerrado'],
]

/**
 * Lo que sale del mostrador, según el letrero real (Sandwichs / Café
 * Express) y lo que los clientes más mencionan en las opiniones de
 * Google. Sin precios: la pizarra no se lee en las fotos.
 */
export const PIZARRA = [
  { nombre: 'Churrasco italiano', detalle: 'Palta, tomate y mayo — el clásico de la casa', menciones: 'los churrascos se mencionan en 20 opiniones' },
  { nombre: 'Completo', detalle: 'Vienesa, tomate, palta y mayo americana', menciones: 'los completos se mencionan en 39 opiniones' },
  { nombre: 'Churrasco con queso', detalle: 'Carne a la plancha con queso derretido', menciones: null },
  { nombre: 'Sandwiches de la casa', detalle: 'Del mostrador: los que pide la gente de siempre', menciones: 'sandwich se menciona en 65 opiniones' },
  { nombre: 'Café express', detalle: 'De la cafetería del local', menciones: null },
  { nombre: 'Pisco sour', detalle: 'Bandeja de sour para la mesa', menciones: null },
]

/** Temas más mencionados en las opiniones (resumen de Google). */
export const TEMAS = [
  ['Sandwich', '65 opiniones'],
  ['«Rico»', '54 opiniones'],
  ['Completos', '39 opiniones'],
  ['Churrascos', '20 opiniones'],
]
