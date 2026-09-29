/**
 * app/demos/intermedica-imagenes/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + Doctoralia +
 * chilopina.com): nombre "Intermédica" (centro médico e imágenes),
 * dirección 2 Norte 360 esquina en Talca, teléfono fijo (71) 223 1616,
 * nota Google 3,7, especialidades y previsiones publicadas en Doctoralia,
 * reseñas citadas desde Google y chilopina.
 * La fachada de public/demos/intermedica-imagenes/hero.webp es la foto real
 * de la casa esquina (subida a su ficha de Google). El centro no publica
 * fotos de interiores: las 3 imágenes de "adentro" van marcadas como
 * bosquejo. Todo lo demás (textos, orden de secciones) es de muestra.
 */

export const BIZ = {
  name: 'Intermédica',
  full: 'Intermédica Imágenes',
  rubro: 'Centro médico e imágenes',
  address: '2 Norte 360',
  corner: 'la esquina de 2 Norte',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '(71) 223 1616',
  phoneTel: '+56712231616',
  rating: 3.7,
} as const

// El centro solo publica teléfono fijo: el CTA de contacto es una llamada.
export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Intermédica, 2 Norte 360, Talca, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '2 Norte 360, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/intermedica-imagenes'
