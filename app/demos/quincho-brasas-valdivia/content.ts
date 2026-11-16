/**
 * app/demos/quincho-brasas-valdivia/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps, página de Facebook e
 * Instagram @brasasvaldivia, 16-11-2026): nombre, dirección (Av. Pedro
 * Aguirre Cerda 214, Valdivia. Maps y Facebook; el sector Las Ánimas
 * sale de su Instagram), WhatsApp, Instagram y Facebook como enlaces.
 * De su Facebook, textual: «capacidad para 80 personas, cocina full
 * equipada, equipos de sonido, iluminación, amplio estacionamiento y
 * novedosa parrilla automatizada». El 5,0 con 23 opiniones en Google y
 * las tres citas son textuales. No publica tarifas ni horario (funciona
 * con reserva): la página invita a consultar la fecha por WhatsApp.
 * Sin contenido de ejemplo.
 */

export const BIZ = {
  name: 'Quincho Brasas Valdivia',
  short: 'Quincho Brasas',
  rubro: 'Quincho y centro de eventos',
  address: 'Av. Pedro Aguirre Cerda 214',
  barrio: 'Las Ánimas',
  city: 'Valdivia',
  region: 'Los Ríos',
  phoneDisplay: '+56 9 8896 2345',
  whatsapp: '56988962345',
  instagram: 'https://www.instagram.com/brasasvaldivia/',
  facebook: 'https://www.facebook.com/p/Quincho-Brasas-Valdivia-100057499387295/',
  rating: '5,0',
  ratingValue: 5,
  reviews: 23,
  capacidad: 80,
} as const

/** Los rasgos tal como los describe su propia página de Facebook. */
export const RASGOS = [
  'Capacidad para 80 personas',
  'Cocina full equipada',
  'Equipos de sonido',
  'Iluminación',
  'Amplio estacionamiento',
] as const

/** Citas textuales de Google Maps, con nombre y sin fecha. */
export const RESENAS = [
  {
    quote:
      'Excelente lugar! muy acogedor y bastante amplio. Los dueños son muy amables y ayudan ante cualquier duda o ajuste que necesitábamos dentro del quincho. Muy recomendado.',
    who: 'Gaspar Ulloa',
  },
  {
    quote:
      'Lo sugiero con toda confianza, amplio local, contiene bastante para desarrollar ceremonias. Hasta estacionamiento de vehículos. Los dueños son personas muy afables.',
    who: 'Ana Palma Oliva',
  },
  {
    quote:
      'Muy buen local, excelente ambiente tanto para fiestas, cómo reuniones, finalizar año, entre otras ocasiones. 100 % recomendable.',
    who: 'Patricio Andres Cares Barrientos',
  },
] as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Quincho Brasas, quiero consultar por una fecha',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Quincho Brasas Valdivia, Pedro Aguirre Cerda 214, Valdivia',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Quincho Brasas Valdivia, Pedro Aguirre Cerda 214, Valdivia',
)}&output=embed`

export const IMG = '/demos/quincho-brasas-valdivia'
