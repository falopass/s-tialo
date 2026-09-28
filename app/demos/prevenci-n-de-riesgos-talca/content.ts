/**
 * app/demos/prevenci-n-de-riesgos-talca/content.ts
 *
 * Datos del mockup. REALES y verificados el 28-09-2026 en la ficha de
 * Google Maps "Prevención De Riesgos Talca" (categoría ingeniero,
 * 5.0 estrellas, teléfono de ficha 9 9746 7489), el Instagram
 * @prevencionderiesgostalca y la página de Facebook
 * prevencionderiesgostalca.2024 (mismo logo "VTI · Prevención de
 * Riesgos" en ambas redes). Sus propias publicaciones anuncian:
 * carpeta de arranque, reglamento interno, procedimiento de trabajo
 * seguro, plan de emergencia, matriz de riesgos (MIPER), protocolos
 * MINSAL, charlas y asesorías en normativa legal para pymes, con
 * firma digital para atender empresas a distancia; el contacto que
 * publican es WhatsApp +56 9 3683 0015 y el correo
 * prevencionderiesgostalca673@gmail.com. No publica dirección ni
 * precios: el mapa apunta a la ficha y los valores se cotizan.
 */

export const BIZ = {
  name: 'Prevención de Riesgos Talca',
  marca: 'VTI',
  short: 'VTI Prevención',
  tagline: 'tu carpeta de arranque, lista',
  rubro: 'Asesoría en prevención de riesgos',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3683 0015',
  phoneTel: '+56936830015',
  whatsapp: '56936830015',
  email: 'prevencionderiesgostalca673@gmail.com',
  instagram: 'https://www.instagram.com/prevencionderiesgostalca/',
  instagramUser: '@prevencionderiesgostalca',
  facebook: 'https://www.facebook.com/prevencionderiesgostalca.2024',
  rating: '5.0',
  horario: 'Horario de oficina · atención a distancia con firma digital',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Prevención de Riesgos Talca y necesito asesoría',
)}`

export const waDocumento = (doc: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
    `Hola, vi la página de Prevención de Riesgos Talca y necesito cotizar ${doc}`,
  )}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Prevención De Riesgos Talca, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Prevención De Riesgos Talca, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/prevenci-n-de-riesgos-talca'
