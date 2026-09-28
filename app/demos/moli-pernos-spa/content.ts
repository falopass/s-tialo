/**
 * app/demos/moli-pernos-spa/content.ts
 *
 * Datos del mockup. REALES y verificados:
 * - Ficha de Google Maps: nombre (MOLI PERNOS SPA), categoría
 *   (ferretería), dirección (Av. Poniente 2050, Molina), teléfono/
 *   WhatsApp, horario (Lu–Vi 9:00–13:00 y 15:00–18:00, sábado
 *   9:00–13:00, domingo cerrado) y nota 4.5 con 24 reseñas.
 * - Instagram oficial @molipernos: «MOLI PERNOS — LA CASA DEL PERNO DE
 *   MOLINA — VEN Y VISÍTANOS EN AV PONIENTE 2050, MOLINA».
 * - Líneas de producto: letrero de la tienda y flyer publicado por el
 *   dueño (pernos inoxidable/metal/concreto/madera/tablería +
 *   herramientas; chavetas, seguros agrícolas, prisioneros, graseras,
 *   pernos de arado; email Molipernos@gmail.com).
 * - Reseñas: citas literales de la ficha de Google.
 */

export const BIZ = {
  name: 'Moli Pernos',
  legal: 'MOLI PERNOS SPA',
  rubro: 'Ferretería · pernos y herramientas',
  claim: 'La casa del perno de Molina',
  address: 'Av. Poniente 2050',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5800 6815',
  whatsapp: '56958006815',
  email: 'Molipernos@gmail.com',
  instagram: '@molipernos',
  rating: '4.5',
  reviews: '24',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Moli Pernos, vi su página y quiero consultar por un producto',
)}`

export const WA_LINK_PERNO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Moli Pernos, necesito pernos y quiero consultar stock',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/place/MOLI+PERNOS+SPA/@-35.1150296,-71.2841269,17z/data=!3m1!4b1!4m6!3m5!1s0x96645589c0ba5e15:0x6848c714533c87f5!8m2!3d-35.1150296!4d-71.2841269!16s%2Fg%2F11j34dr0dm'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'MOLI PERNOS SPA, Av. Poniente 2050, Molina, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/moli-pernos-spa'
