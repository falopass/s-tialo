/**
 * app/demos/casa-alameda/content.ts
 *
 * Datos del demo, verificados el 2026-09-29 en la ficha de Google Maps
 * de Casa Alameda y su sitio casaalameda.cl:
 *  - Nombre: "Casa Alameda" (bar restaurante), "Food & Music" es su
 *    tagline real — está en su logo y su web
 *  - Dirección: 4 Nte. 1065, Talca (sobre la Alameda)
 *  - WhatsApp: +56 9 3403 4964 (celular entregado por el contacto;
 *    Maps muestra un fijo +56 2 2419 0910 y la web otro fijo)
 *  - Web: casaalameda.cl · IG: @casaalameda__ (perfil entregado; su
 *    sitio enlaza instagram.com/casaalameda)
 *  - Horario publicado: abre en la tarde-noche (mar–dom desde ~17:30)
 *  - Google: 4.3 estrellas, 1.336 reseñas
 * El "setlist" solo nombra lo que la gente destaca en Google (sushi,
 * pizzas, cócteles, tablas, micheladas, happy hour); sin precios
 * porque el local no los publica en línea.
 */

export const BIZ = {
  name: 'Casa Alameda',
  short: 'Casa Alameda',
  rubro: 'Bar restaurante',
  claim: 'Food & Music',
  address: '4 Nte. 1065',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 3403 4964',
  phoneTel: '+56934034964',
  whatsapp: '56934034964',
  site: 'https://casaalameda.cl',
  siteHost: 'casaalameda.cl',
  instagram: 'https://www.instagram.com/casaalameda__',
  igUser: '@casaalameda__',
  rating: 4.3,
  reviews: 1336,
  hours: 'Mar a Dom · desde las 17:30',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Casa Alameda y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero reservar mesa en Casa Alameda',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Casa Alameda, 4 Norte 1065, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Casa Alameda, 4 Norte 1065, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/casa-alameda'
