/**
 * app/demos/vivero-jardin-eben-ezer/content.ts
 *
 * Datos del demo. REALES:
 * - Ficha de Google Maps: 'Vivero Jardin Eben-Ezer', vivero en Talca
 *   (norte, Plus Code J92C+22 — la ficha no publica calle), 4,5★,
 *   horario del día: 8:30–19:30, teléfono +56 9 7723 2848.
 * - Facebook @Vivero-Jardín-Eben-Ezer-623640581372074 (enlazado desde
 *   la propia ficha): su carta real muestra un segundo teléfono,
 *   +56 9 9762 6800.
 * - Fotos: la carta/logo real del vivero + 6 fotos de sus plantas
 *   publicadas en su Facebook (anémonas, pradera fucsia, margaritas,
 *   dimorfoteca, suculentas, maceteros con jacinto). La ficha de Maps
 *   solo tiene una foto; el material fuerte es lo que ellos publican.
 *   Nada inventado ni generado.
 */

export const BIZ = {
  name: 'Vivero Jardín Eben-Ezer',
  short: 'Eben-Ezer',
  rubro: 'Vivero',
  city: 'Talca',
  region: 'Región del Maule',
  plusCode: 'J92C+22 Talca',
  phoneDisplay: '+56 9 7723 2848',
  phone2Display: '+56 9 9762 6800',
  wa: '56977232848',
  rating: '4,5',
  fb: 'https://www.facebook.com/Vivero-Jard%C3%ADn-Eben-Ezer-623640581372074/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.wa}?text=${encodeURIComponent(
  'Hola, vi la página del Vivero Jardín Eben-Ezer y quiero consultar por plantas',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Vivero Jardin Eben-Ezer, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Vivero Jardin Eben-Ezer, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/vivero-jardin-eben-ezer'

// Lo que se ve en sus propias fotos de Facebook
export const ESPECIES = [
  { f: 'anemonas', t: 'Anémonas', d: 'Rosadas, rojas y moradas — la foto de portada de su temporada.' },
  { f: 'margaritas', t: 'Margaritas amarillas', d: 'Floración abierta sobre follaje fino, en maceta de exhibición.' },
  { f: 'dimorfoteca', t: 'Dimorfoteca', d: 'Blancas y moradas: las “estrellas del patio” del vivero.' },
  { f: 'suculentas', t: 'Suculentas y camelias', d: 'La mesa de trabajo: suculentas, cactus y camelias en capullo.' },
  { f: 'maceteros', t: 'Jacintos y maceteros', d: 'Bulbos en flor y la línea de maceteros lista para llevar.' },
  { f: 'pradera-fucsia', t: 'La pradera fucsia', d: 'El sector de floración masiva que se abre al sol.' },
] as const
