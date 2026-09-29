/**
 * app/demos/ingenieria-san-clemente-ltda/content.ts
 *
 * Datos del mockup. ESTADO DE VERIFICACIÓN (29-09-2026):
 * - No existe ficha pública en Google Maps para «Ingeniería San
 *   Clemente Ltda.» — se probó con 5 variantes de búsqueda en Maps
 *   y en chilepymes/registro sin hallar la empresa con ese nombre.
 *   (Homónimos descartados: Agrícola San Clemente, San Clemente
 *   Foods, Sociedad de Ingeniería y Construcción I&L SpA.)
 * - Único registro verificable: LinkedIn — «Ingenieria San Clemente
 *   Ltda.» operó en Talca ~2012–2014; el cargo publicado («encargado
 *   de gestión y evaluación de proyectos») describe una empresa de
 *   proyectos/obras, con contexto de montajes electromecánicos y
 *   líneas de transmisión.
 * - Sin teléfono, dirección, sitio web, reseñas ni fotos reales:
 *   la página no muestra datos de contacto de la empresa, declara
 *   la capacidad como muestra y marca TODAS las imágenes como
 *   «bosquejo» (generadas), pendientes de reemplazo por material real.
 */

export const BIZ = {
  name: 'Ingeniería San Clemente',
  short: 'Ing. San Clemente',
  legalName: 'Ingeniería San Clemente Ltda.',
  rubro: 'Proyectos de ingeniería y obras',
  city: 'San Clemente',
  region: 'Región del Maule',
} as const

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'San Clemente, Talca, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'San Clemente, Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/ingenieria-san-clemente-ltda'

export const SOURCES = [
  'Google Maps (sept 2026): sin ficha con ese nombre en San Clemente ni Talca',
  'LinkedIn (perfil laboral, 2012–2014): «Ingenieria San Clemente Ltda.», Talca — gestión y evaluación de proyectos',
  'chilepymes / registro comercial Maule: sin empresa con esa razón social vigente',
]
