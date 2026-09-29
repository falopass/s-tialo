/**
 * app/demos/optica-del-maule/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + listado de
 * convenios PDI): Óptica del Maule Ltda., 6 Oriente 1132 Local 1, Talca,
 * teléfono fijo (71) 222 1169, nota Google 5,0, horario publicado
 * 10:00–18:30. La fachada de public/demos/optica-del-maule/fachada.webp es
 * la vista real del local en Street View (letrero de madera sobre la
 * puerta, junto al acceso de la galería) y calle.webp la calle arbolada de
 * 6 Oriente. La óptica no publica fotos de su interior: las imágenes de
 * "la vitrina" van marcadas como bosquejo. Todo lo demás (textos, secciones)
 * es de muestra.
 */

export const BIZ = {
  name: 'Óptica del Maule',
  rubro: 'Óptica',
  address: '6 Oriente 1132, Local 1',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '(71) 222 1169',
  phoneTel: '+56712221169',
  rating: 5.0,
} as const

// La óptica solo publica teléfono fijo: el CTA de contacto es una llamada.
export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Óptica del Maule, 6 Oriente 1132, Talca, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '6 Oriente 1132, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/optica-del-maule'
