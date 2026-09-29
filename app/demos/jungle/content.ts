/**
 * app/demos/jungle/content.ts
 *
 * Datos REALES verificados:
 * - Catastro de servicios de la Municipalidad de San Clemente
 *   (sanclemente.cl/turismo/servicios/rest.html): "Jungle" — pub restaurante,
 *   Alejandro Cruz 117, San Clemente, teléfono +56 9 6136 5472.
 * - Sin ficha de Google Maps ni redes sociales localizables: no hay fotos
 *   reales, carta, horarios ni reseñas publicadas que se puedan citar.
 * - Por eso este demo no inventa datos: los visuales son bosquejos marcados
 *   y la ficha muestra solo lo confirmado en el registro municipal.
 */

export const BIZ = {
  name: 'Jungle',
  rubro: 'Pub restaurante',
  address: 'Alejandro Cruz 117',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6136 5472',
  whatsapp: '56961365472',
  fuente: 'Catastro municipal de servicios de San Clemente',
  fuenteUrl: 'https://www.sanclemente.cl/turismo/servicios/rest.html',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Jungle y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Jungle y quiero reservar una mesa',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Alejandro Cruz 117, San Clemente, Maule, Chile',
)}&output=embed`

export const FICHA = [
  { k: 'Nombre', v: 'Jungle' },
  { k: 'Rubro', v: 'Pub restaurante' },
  { k: 'Dirección', v: 'Alejandro Cruz 117' },
  { k: 'Comuna', v: 'San Clemente, Maule' },
  { k: 'Teléfono', v: '+56 9 6136 5472' },
]
