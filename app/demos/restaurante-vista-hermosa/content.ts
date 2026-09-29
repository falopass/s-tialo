/**
 * Datos reales verificados de Restaurant Vista Hermosa.
 *
 * Fuentes:
 * - Ficha de Google Maps "Restaurant Vista Hermosa", CMG9+J6,
 *   Bajos de Lircay, San Clemente (4,5★ · 66 opiniones, categoría
 *   cafetería/restaurante; reseñas extraídas de la ficha).
 * - Teléfono +56 9 6709 7866: registro SERNATUR y listado de
 *   turismo de la Municipalidad de San Clemente (la ficha de Maps
 *   no publica teléfono).
 * - Menú "Vista Hermosa" fotografiado en el local (foto real).
 * - Sin horario publicado en la ficha: se omite.
 */

export const BIZ = {
  name: 'Restaurant Vista Hermosa',
  short: 'Vista Hermosa',
  rubro: 'Comedor familiar · comida casera',
  address: 'Ruta CH-115 — Bajos de Lircay, cruce de Vilches',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6709 7866',
  phoneTel: '+56967097866',
  whatsapp: '56967097866',
  rating: '4,5',
  reviews: '66',
}

const MSG = encodeURIComponent(
  'Hola, vi su página y quiero consultar por mesa para almorzar en Vista Hermosa.',
)
export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${MSG}`
export const WA_LINK_MESA = WA_LINK

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Restaurant%20Vista%20Hermosa%20Bajos%20de%20Lircay%20San%20Clemente'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=Restaurant+Vista+Hermosa,+Bajos+de+Lircay,+San+Clemente,+Maule&output=embed'

export const IMG = '/demos/restaurante-vista-hermosa'

// Platos que los clientes nombran en las reseñas de Google.
export const PLATOS = [
  {
    src: `${IMG}/hero.webp`,
    nombre: 'Cazuela de vacuno',
    detalle: 'Con choclo, arroz y cilantro fresco — la que más se repite en las reseñas.',
  },
  {
    src: `${IMG}/cazuela-pava.webp`,
    nombre: 'Cazuela de pava',
    detalle: 'Con chuchoca, según las clientas «riquísima». Plato de casa.',
  },
  {
    src: `${IMG}/pescado.webp`,
    nombre: 'Pescado frito',
    detalle: 'Entero y crocante, con papas fritas naturales.',
  },
  {
    src: `${IMG}/carta.webp`,
    nombre: 'Empanadas de queso',
    detalle: '«De buen tamaño y deliciosas», y la carta del día a mano.',
  },
]

// Reseñas reales de la ficha de Google (textos de clientes).
export const RESENAS = [
  {
    nombre: 'Rocío G.',
    texto:
      'Pedimos cazuela de vacuno y estaba maravillosa: incluía ensalada, pancito amasado, pebre y sandía de postre. Las empanadas de queso, de buen tamaño y deliciosas.',
  },
  {
    nombre: 'Rodrigo R.',
    texto:
      'Un muy buen restaurante, precio muy accesible y la comida muy casera y sabrosa. Un almuerzo con mi familia de 5 personas nos salió $33.000 con una bebida.',
  },
  {
    nombre: 'Rocío M.',
    texto:
      'Las 3B. Comí una rica cazuela de pava con chuchoca, riquísima. Buena atención.',
  },
  {
    nombre: 'Ámbar L.',
    texto:
      'Muy ricas las empanadas, excelente lugar y buenos precios.',
  },
]
