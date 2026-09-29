/**
 * app/demos/comercial-servimaule/content.ts
 *
 * Datos REALES verificados (sept 2026). La ficha activa del grupo en
 * Google Maps figura como "Servimak SA" (place
 * 0x966595001c013d33:0xf2de11084d14b1eb), Av. Huamachuco 1360,
 * San Clemente, abre 8:30, rating 3,0 con 2 reseñas. La reseña de
 * Maria Alejandra Gomez Castro la describe como "empresa de
 * servicios agrícolas mecanizados"; la de hormilex confirma venta de
 * maquinaria con garantía.
 *
 * El vínculo Servimak SA ↔ Comercial Servimaule Ltda. se confirma por
 * dominios de correo compartidos en ofertas laborales
 * (rrhh@servimaule.cl / servimaksa.cl) y la misma dirección
 * Huamachuco 1360 listada en directorios como "Servimaule Ltda.".
 * El teléfono +56 71 262 1459 proviene del prospecto y calza con el
 * listado del directorio para Servimaule en esa dirección.
 *
 * Giros registrados del grupo: servicios agrícolas mecanizados,
 * venta y arriendo de maquinaria, transporte de carga.
 *
 * OJO homónimo: "Servimaule" de Curicó (Las Heras 278, limpieza) es
 * OTRA empresa · ningún dato de ella se usa aquí.
 *
 * Fotos: hero.webp (miniexcavadoras) y ferreteria.webp son fotos
 * reales de las fichas de Google del grupo; galpon.webp y
 * avenida.webp son capturas de Street View del sector de
 * Av. Huamachuco 1360.
 */

export const BIZ = {
  name: 'Servimaule',
  legal: 'Comercial Servimaule Ltda.',
  mapsName: 'Servimak S.A.',
  rubro: 'Servicios agrícolas mecanizados',
  address: 'Av. Huamachuco 1360, San Clemente',
  addressShort: 'Av. Huamachuco 1360',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 262 1459',
  phoneTel: '+56712621459',
  rating: 3.0,
  ratingDisplay: '3,0',
  reviews: 2,
  opens: '8:30',
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Servimak SA, Av. Huamachuco 1360, San Clemente, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. Huamachuco 1360, San Clemente, Chile',
)}&output=embed`

export const IMG = '/demos/comercial-servimaule'

/** Giros confirmados del grupo (reseñas + registros públicos). */
export const SERVICIOS = [
  {
    code: 'S-01',
    title: 'Servicios agrícolas mecanizados',
    detail:
      'Labores mecanizadas para el campo: preparación, siembra y apoyo con maquinaria propia.',
  },
  {
    code: 'S-02',
    title: 'Venta de maquinaria y equipos',
    detail: 'Máquinas nuevas y usadas, con garantía según la venta.',
  },
  {
    code: 'S-03',
    title: 'Arriendo de maquinaria',
    detail: 'Arriendo de equipos para faenas agrícolas y de construcción.',
  },
  {
    code: 'S-04',
    title: 'Transporte de carga',
    detail: 'Traslado de carga por carretera desde el Maule.',
  },
] as const

/** Reseñas reales de la ficha (el negativo también existe: 3,0 de media). */
export const REVIEWS = [
  {
    author: 'Maria Alejandra Gomez Castro',
    when: 'hace un año',
    stars: 5,
    text: 'Empresa de servicios agrícolas mecanizados',
  },
] as const
