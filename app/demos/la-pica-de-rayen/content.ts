/**
 * app/demos/la-pica-de-rayen/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps, verificada el
 * 9-11-2026): nombre "La Pica de Rayen", dirección (General Körner
 * 478, Villarrica, dentro del Mercado We Newenche), horario (todos
 * los días 9:30 a 20:00), WhatsApp, rating 4,7 con 40 opiniones y
 * las tres citas textuales. REALES (fotos y reseñas de Maps): los
 * platos listados en PIZARRA y el acompañamiento de ensalada,
 * sopaipillas caseras y pebre. Sin redes confirmadas: no se
 * muestran. Los textos de sección (titulares, bajadas) son
 * redacción del mockup a partir de esos datos.
 */

export const BIZ = {
  name: 'La Pica de Rayen',
  short: 'La Pica de Rayen',
  rubro: 'Comida casera',
  address: 'General Körner 478',
  lugar: 'Mercado We Newenche',
  city: 'Villarrica',
  region: 'Región de La Araucanía',
  phoneDisplay: '+56 9 9363 3979',
  whatsapp: '56993633979',
  rating: '4,7',
  ratingValue: 4.7,
  reviews: 40,
  horario: 'Todos los días, de 9:30 a 20:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola La Pica de Rayen, quiero consultar el menú de hoy',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'La Pica de Rayen, Mercado We Newenche, General Körner 478, Villarrica, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Mercado We Newenche, General Körner 478, Villarrica, Chile',
)}&output=embed`

export const IMG = '/demos/la-pica-de-rayen'

export const PIZARRA = [
  {
    plato: 'Pastel de choclo',
    nota: 'en paila de greda, dorado al horno',
    foto: 'pastel-de-choclo',
    alt: 'Pastel de choclo recién dorado, servido en paila de greda',
  },
  {
    plato: 'Empanadas de horno y fritas',
    nota: 'las dos versiones, con su repulgue',
    foto: 'empanadas-horno',
    alt: 'Bandeja de empanadas de horno recién salidas',
  },
  {
    plato: 'Cazuela',
    nota: 'con su caldo, su choclo y su papa',
    foto: 'cazuela',
    alt: 'Cazuela servida en plato de loza azul',
  },
  {
    plato: 'Paila marina',
    nota: 'con choritos y camarones',
    foto: 'paila-marina',
    alt: 'Paila marina con choritos, camarones y cilantro',
  },
  {
    plato: 'Lasaña y puré con costillar',
    nota: 'recién salidos del horno',
    foto: 'carne-choclo',
    alt: 'Plato casero de la cocina de La Pica de Rayen',
  },
] as const

export const OPINIONES = [
  {
    nombre: 'Lilianne R.',
    texto:
      'Aunque llegamos cuando estaban casi cerrando, nos atendieron igual, agradecida por eso. Platos muy contundentes, comida casera 100%. Riquísimo todo. Volveré, eso es seguro. Mi familia quedó feliz. La mejor picada.',
  },
  {
    nombre: 'Elías J.',
    texto:
      'Muy buena comida y atención, me pedí una paila marina muy contundente, y si no fuera poco nos sirvieron ensalada con sopaipillas caseras y un pebre exquisito que venía incluido en el plato. Recomendado 100%!',
  },
  {
    nombre: 'Natalia G.',
    texto:
      'Exquisito! Pedí lasaña con miedo de que fuera pura cebolla como en otros lados, pero nada que ver, estaba muy sabrosa y recién salida del horno. Mi familia pidió puré y costillar de cerdo y también quedaron enamorados de la cocina.',
  },
] as const
