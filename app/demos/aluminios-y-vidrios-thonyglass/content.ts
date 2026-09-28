/**
 * app/demos/aluminios-y-vidrios-thonyglass/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Nombre (Aluminios y vidrios thonyglass), rubro (glass shop),
 *   dirección (13 1/2 Oriente B 14, Talca — en su letrero figura el
 *   #2353), teléfono (+56 9 6706 4441, coincide con su propio letrero),
 *   nota 3,4★ y 10 reseñas: ficha pública de Google Maps.
 * - Horario (lun–vie 9:00–19:00; sábado 9:00–14:00; domingo cerrado):
 *   ficha de Google.
 * - Servicios: el letrero del propio local, visible en las fotos de su
 *   ficha («Ventana de aluminio · Venta de termopanel · Ventanas PVC ·
 *   Vidrios dimensionados · Shower door»).
 * - Correo de contacto (thonycamargo2626@gmail.com) y marca «ATG —
 *   Aluminios Thonyglass»: el mismo letrero.
 * - Reseñas citadas: textos originales en español de su ficha de Google.
 * - Fotos en /demos/aluminios-y-vidrios-thonyglass: instalaciones en
 *   terreno subidas por el negocio y sus clientes a la ficha.
 * Textos de descripción de secciones son de muestra, basados en las
 * fotos, los servicios del letrero y las reseñas.
 */

export const BIZ = {
  name: 'Aluminios y Vidrios Thonyglass',
  short: 'Thonyglass',
  marca: 'ATG · Aluminios Thonyglass',
  rubro: 'Vidriería y ventanas a medida',
  address: '13 1/2 Oriente B 14 #2353',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6706 4441',
  phoneTel: '+56967064441',
  whatsapp: '56967064441',
  email: 'thonycamargo2626@gmail.com',
  rating: '3,4',
  reviews: 10,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Thonyglass y quiero cotizar ventanas a medida',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Aluminios y vidrios thonyglass, 13 1/2 Oriente, Talca',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Aluminios y vidrios thonyglass, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/aluminios-y-vidrios-thonyglass'
