// Datos confirmados de la corredora de propiedades de 1 Sur 770 (Talca).
//
// Fuentes:
// - Ficha de Google Maps "corredora de propiedades" (ese es literalmente el
//   nombre que publica la ficha — no hay nombre comercial): categoría
//   "Real estate agency", 1 sur 770, departamento 3-C, 3460000 Talca.
//   Tel +56 9 6100 1220. Plus code H83H+QR. Ficha SIN reclamar: sin sitio
//   web, sin horario y sin fotos propias (solo Street View de la cuadra).
// - Rating: 3,7 sobre 6 reseñas (3×5★, 1×4★, 0×3★, 1×2★, 1×1★). Las únicas
//   reseñas con texto son antiguas (2019–2024); las 5★ son de Paula Muñoz
//   y Sara López, sin texto. No se citan textos: los que hay son mixtos.
// - Lista de prospección (WhatsApp): el contacto figura como "Corredora de
//   Propiedades / Corredora de Seguros" → doble giro; la categoría de Maps
//   confirma el inmobiliario. No se encontraron redes sociales del negocio.
// - 1 Sur 770 es dirección de galerías de oficinas en pleno centro de Talca
//   (directorios ubican ahí la Galería Cine Plaza).
// - Esta pyme NO tiene fotos ni logo disponibles: la ficha no tiene fotos
//   propias. El demo usa (a) Street View real de la cuadra de 1 Sur 770
//   (Google) y (b) ilustraciones marcadas visiblemente como BOSQUEJO —
//   se reemplazan por fotos reales al activar el sitio.

export const BIZ = {
  name: 'Corredora de Propiedades',
  rubro: 'Corredora de propiedades y de seguros',
  address: '1 Sur 770, departamento 3-C',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6100 1220',
  phoneIntl: '56961001220',
  rating: '3,7',
  reviews: '6 reseñas',
  plusCode: 'H83H+QR Talca',
}

export const WA_LINK = `https://wa.me/${BIZ.phoneIntl}`
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=corredora+de+propiedades+1+sur+770+Talca'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4455396,-71.6704325&hl=es&z=17&output=embed'
export const IMG = '/demos/corredora-de-propiedades-talca'
