/**
 * app/demos/agricola-y-forestal-don-rafael/content.ts
 *
 * Datos del mockup. REALES y verificados (28-09-2026):
 * - Ficha de Google Maps «Agrícola y forestal Don Rafael» (Oficinas de
 *   empresa): Las Mercedez s/n, Molina — teléfono +56 9 9825 8074,
 *   4.3 estrellas con 10 reseñas. Una reseña describe la sala de ventas:
 *   «al estar en la sala de ventas puede ver las instalaciones a través
 *   de ventanales». La ficha no publica horarios.
 * - donrafael.cl está aparcado hoy, pero su sitio archivado
 *   (web.archive.org, 2013–2015) conserva el logo «Don Rafael Olives»,
 *   las botellas de sus líneas 8 Olivos / Alto Lontué / Monjes de Lontué,
 *   fotos del fundo y el diploma «8 Olivos Blend — EVOO of the Year 2014»
 *   del WREVOO. Esos son los activos visuales del demo.
 * - Línea saborizada real (su sitio): Ají Verde, Ají Cacho de Cabra,
 *   Merkén, Rocoto, Laurel, Tomillo, Romero, Orégano, Naranja, Limón y
 *   Jengibre — «mezclados con la fruta durante el proceso, sin
 *   saborizantes ni aromatizantes artificiales».
 * - Premios publicados por la propia marca: EVOO of the Year 2014
 *   (WREVOO), NYIOOC 2014 Best in Class, Sol d'Oro 2010 (fruttato
 *   leggero), Terraolivo Prestige Gold (2014–2016), Olivinus.
 */
export const BIZ = {
  name: 'Agrícola y Forestal Don Rafael',
  short: 'Don Rafael',
  rubro: 'Aceite de oliva y sala de ventas',
  address: 'Camino Las Mercedes s/n',
  addressFull: 'Las Mercedes s/n, Molina, Maule',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9825 8074',
  whatsapp: '56998258074',
  rating: 4.3,
  reviews: 10,
} as const

export const waLink = (msg: string) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(msg)}`

export const WA_LINK = waLink(
  'Hola, vi la página de Agrícola y Forestal Don Rafael y quiero consultar por el aceite de oliva y la sala de ventas',
)

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Agrícola y forestal Don Rafael, Las Mercedes s/n, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Agrícola y forestal Don Rafael, Las Mercedes s/n, Molina, Maule, Chile',
)}&output=embed`

// La ficha no publica horarios — se omite la tabla
export const HOURS: { d: string; h: string }[] = []

export const IMG = '/demos/agricola-y-forestal-don-rafael'
