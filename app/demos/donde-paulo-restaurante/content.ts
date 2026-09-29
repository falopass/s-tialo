/**
 * app/demos/donde-paulo-restaurante/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + prensa local):
 * "Donde Paulo Restaurant", Calle 9 Oriente 894, Talca. Teléfono/WhatsApp
 * +56 9 5961 9912, 4,3 estrellas con 670 reseñas, CLP 10.000-15.000 por
 * persona. Servicios: consumo en el lugar, drive-through (pedir desde el
 * auto) y entrega sin contacto. Abre al mediodía; según reseñas atienden
 * hasta las 17:00.
 *
 * Historia verificada: el clásico talquino funcionó décadas en el
 * balneario de Río Claro; en enero de 2024 el local sufrió un incendio
 * (Diario Talca) y hoy vuelve a operar en el mismo lugar, con fotos y
 * reseñas recientes que lo muestran en marcha. Especialidad mencionada
 * por sus clientes: las parrilladas, contundentes. También nombran el
 * pollo mariscal, el chancho en piedra, la paila marina, la plateada,
 * el pan y las sopaipillas ("exquisitos"), y el estacionamiento acotado.
 * Las reseñas citadas son reales, con su autor (texto original en español).
 */

export const BIZ = {
  name: 'Donde Paulo',
  mapsName: 'Donde Paulo Restaurant',
  short: 'Donde Paulo',
  rubro: 'Restaurant y parrilladas',
  address: 'Calle 9 Oriente 894',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 5961 9912',
  phoneTel: '+56959619912',
  whatsapp: '56959619912',
  rating: '4,3',
  reviews: 670,
  ticket: '$10.000 a $15.000 por persona (según Google)',
  plusCode: 'H89W+QC Talca',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Donde Paulo y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Donde Paulo Restaurant, 9 Oriente 894, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Donde Paulo Restaurant, 9 Oriente 894, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/donde-paulo-restaurante'

/** Reseñas reales de la ficha de Google (autor + fecha). */
export const REVIEWS = [
  {
    author: 'Eghon Nicolas',
    when: 'hace 6 meses',
    text: 'Un clásico talquino que no debe morir. Platos calientes y con la sazón casera que se extraña en otros lados. Puro sabor chileno.',
    stars: 5,
  },
  {
    author: 'Scarleth R. Bravo',
    when: 'hace 1 mes',
    text: 'Las parrilladas son su especialidad, muy buenas y contundentes. Buen local para almorzar en familia, con precios razonables.',
    stars: 5,
  },
  {
    author: 'Natalia de los Ángeles',
    when: 'hace 2 años',
    text: 'Siempre pedimos parrillada y chancho en piedra, el pan y las sopaipillas son exquisitos, el precio razonable y los dependientes muy amables.',
    stars: 5,
  },
  {
    author: 'Solange Parada',
    when: 'hace 2 meses',
    text: 'El pollo mariscal 10/10 y buena atención.',
    stars: 5,
  },
] as const
