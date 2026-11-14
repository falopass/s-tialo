/**
 * app/demos/ferreteria-el-gaucho-nunez-valdivia/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, verificada el
 * 14-11-2026, y la fachada del local, cuyo teléfono del letrero coincide
 * con el WhatsApp): nombre, dirección (Patricio Lynch 869, Valdivia),
 * horario (lunes a sábado 9:00 a 20:00, domingo cerrado), nota 4,8 con
 * 19 opiniones y las cuatro citas textuales usadas en la página.
 * El surtido (gasfitería y PVC, PPR termofusión, cobre, cañerías,
 * fittings, válvulas, herramientas, pinturas, selladores y materiales
 * de construcción) sale de las fotos de su ficha y del cartel del local.
 * No hay precios, marcas ni catálogo publicados: no se muestran.
 */

export const BIZ = {
  name: 'Ferretería El Gaucho Núñez',
  short: 'El Gaucho Núñez',
  rubro: 'Ferretería',
  address: 'Patricio Lynch 869',
  city: 'Valdivia',
  region: 'Región de Los Ríos',
  phoneDisplay: '+56 9 9805 1445',
  whatsapp: '56998051445',
  rating: '4,8',
  ratingValue: 4.8,
  reviews: '19',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola El Gaucho Núñez, quiero consultar por un producto',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Ferretería El Gaucho Núñez, Patricio Lynch 869, Valdivia',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Ferretería El Gaucho Núñez, Patricio Lynch 869, Valdivia',
)}&output=embed`

export const HORARIO = [
  { dias: 'Lunes a sábado', horas: '9:00 a 20:00' },
  { dias: 'Domingo', horas: 'Cerrado' },
] as const

// Citas textuales de Google Maps, con el nombre tal como aparece.
export const OPINIONES = [
  {
    texto:
      'Precios accesibles, buena atención y personalizada. Buen horario de atención.',
    autor: 'Fabian Silva',
  },
  {
    texto: 'Encuentras de todo y quien atiende es muy amable.',
    autor: 'Marcela Matamala',
  },
  {
    texto: 'Ferretería muy surtida con buenos precios, muy buena atención.',
    autor: 'Gabriel B',
  },
  {
    texto:
      'Muy buena experiencia, hay variedad, buenos precios y sin tanto tiempo de espera, el personal muy entendidos para guiarte a comprar lo más adecuado.',
    autor: 'Marcela Alejandra Urbina Retamal',
  },
] as const

export const IMG = '/demos/ferreteria-el-gaucho-nunez-valdivia'
