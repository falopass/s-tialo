/**
 * app/demos/vivero-terraterapia-los-angeles/content.ts
 *
 * Datos del mockup. REALES:
 * - Ficha de Google Maps (11-11-2026): "Vivero urbano Terraterapia", vivero,
 *   Quilaco 1343, Los Ángeles (Biobío), teléfono, 9 opiniones y los textos
 *   citados, atributo "se identifica como mujer empresaria". Fotos: todas de
 *   la ficha de Maps del vivero.
 * - Instagram @terraterapia_la (bio): "Plantas • Insumos • Macetas.
 *   Asesorías a domicilio y online. Atención Lun - Sáb 10 a 19 hrs.
 *   Despacho • Envíos a región". Un post de la marca: "Pasaje Quilaco 1343,
 *   villa Los Ángeles". El horario de la bio coincide con el cierre a las
 *   19:00 que muestra Maps.
 * No se publican precios ni el umbral de envío gratis (aparece en una bio
 * antigua y puede haber cambiado). No se nombran especies: solo lo que se ve.
 */

export const BIZ = {
  name: 'Vivero Urbano Terraterapia',
  short: 'Terraterapia',
  rubro: 'Vivero urbano',
  address: 'Pasaje Quilaco 1343',
  barrio: 'Villa Los Ángeles',
  city: 'Los Ángeles',
  region: 'Región del Biobío',
  phoneDisplay: '+56 9 7466 4463',
  phoneTel: '+56974664463',
  whatsapp: '56974664463',
  instagram: 'https://www.instagram.com/terraterapia_la/',
  reviews: 9,
  horario: 'Lunes a sábado, de 10:00 a 19:00',
} as const

// De la bio de Instagram.
export const OFRECE = [
  { titulo: 'Plantas', texto: 'De interior y de exterior, para cada rincón de la casa.' },
  { titulo: 'Insumos', texto: 'Lo necesario para que tus plantas crezcan sanas.' },
  { titulo: 'Macetas', texto: 'Para trasplantar o regalar la planta lista.' },
  { titulo: 'Asesorías', texto: 'A domicilio y online.' },
] as const

export const OPINIONES = [
  {
    autor: 'Carla Mella',
    texto:
      'Muy amables las muchachas, siempre con disposición en atender. Fui con mi abuelo y lo orientaron mucho en cómo cuidar sus plantas. Las recomiendo totalmente.',
  },
  {
    autor: 'Markyus A. R.',
    texto:
      'Muy lindas plantas y aparte un precio que me parece justo. La señorita es muy buena persona y se asegura de que el cliente sepa todo acerca de la planta que están comprando.',
  },
  {
    autor: 'Antonio Cartes',
    texto: 'Cuenta con plantas de todo tipo, tanto interior como exterior, buena atención.',
  },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Terraterapia y quiero hacer una consulta',
)}`

export const WA_ASESORIA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Terraterapia y quiero una asesoría para mis plantas',
)}`

export const WA_DESPACHO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Terraterapia y quiero consultar por un despacho',
)}`

// URL real de la ficha (leída el 11-11-2026).
export const MAPS_URL =
  'https://www.google.com/maps/place/Vivero+urbano+Terraterapia/@-37.4694872,-72.3703987,17z/data=!4m6!3m5!1s0x966bdd56a272eabd:0x32473b0a93d60606!8m2!3d-37.4694872!4d-72.3703987'

export const MAPS_EMBED = 'https://www.google.com/maps?q=-37.4694872,-72.3703987&z=16&output=embed'

export const IMG = '/demos/vivero-terraterapia-los-angeles'
