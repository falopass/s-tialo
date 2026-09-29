/**
 * app/demos/donde-alex/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + su propio local):
 * "Donde Alex", fuente de soda en 1 Oriente Nº 0112, Talca (SERNATUR).
 * Teléfono/WhatsApp +56 9 8250 9977, 4,6 estrellas con 1.422 reseñas,
 * CLP 5.000-10.000 por persona, consumo en el lugar / para llevar /
 * delivery / pedidos en línea. Marca: "DONDE" en verde + "ALEX" en rojo
 * con chef mascota, lema "Tradición de Calidad y Sabor", "Receta de la
 * Abuela" en sus afiches. Su sitio declarado es solo su Facebook.
 *
 * Horario REAL del letrero de su puerta (desde el 12 de enero de 2026):
 * Lun a Jue 12:00 a 15:00 y 17:00 a 22:00, Vie y Sáb 12:00 a 22:00.
 * Precios REALES de su carta mural: completos clásico (vienesa
 * tradicional) desde $1.350 y premium (salchicha asada) desde $1.500;
 * sándwich de pechuga de pollo XL: Solo $5.800, Chacarero $7.900,
 * Queso $8.000, Italiano $8.500, Completo $8.800, Alex $10.000,
 * Paltón $10.500. Las reseñas citadas son reales, con su autor.
 */

export const BIZ = {
  name: 'Donde Alex',
  mapsName: 'Donde Alex',
  short: 'Donde Alex',
  rubro: 'Fuente de soda y completos',
  address: '1 Oriente Nº 0112',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8250 9977',
  phoneTel: '+56982509977',
  whatsapp: '56982509977',
  rating: '4,6',
  reviews: '1.422',
  ticket: '$5.000 a $10.000 por persona (según Google)',
  plusCode: 'H84M+G5 Talca',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Donde Alex y quiero hacer un pedido',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Donde Alex, 1 Oriente 0112, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Donde Alex, 1 Oriente 0112, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/donde-alex'

/** Horario real del letrero de la puerta (desde el 12-01-2026). */
export const HORARIO = [
  { dias: 'Lunes a Jueves', horas: '12:00 a 15:00 · 17:00 a 22:00' },
  { dias: 'Viernes y Sábado', horas: '12:00 a 22:00' },
] as const

/** Precios reales de su carta mural. */
export const COMPLETOS = [
  { name: 'Clásico · vienesa tradicional', price: 'desde $1.350' },
  { name: 'Premium · salchicha asada', price: 'desde $1.500' },
] as const

export const SANDWICHES = [
  { name: 'Solo', price: '$5.800' },
  { name: 'Chacarero', price: '$7.900' },
  { name: 'Queso', price: '$8.000' },
  { name: 'Italiano', price: '$8.500' },
  { name: 'Completo', price: '$8.800' },
  { name: 'Alex', price: '$10.000' },
  { name: 'Paltón', price: '$10.500' },
] as const

/** Reseñas reales de la ficha de Google (autor + fecha). */
export const REVIEWS = [
  {
    author: 'Karim',
    when: 'hace 7 meses',
    text: 'Pedí un chacarero y un italiano con retiro en tienda: por lejos los mejores churrascos de la zona, carne de verdad y en buena cantidad. La mayonesa casera muy rica y el pancito fresco y calentito, 10/10.',
    stars: 5,
  },
  {
    author: 'Danitza Veloso',
    when: 'hace 1 mes',
    text: 'Lugar limpio y acogedor para la familia, los completos exquisitos y con harta palta y mayo a tu elección. Un imperdible en Talca.',
    stars: 5,
  },
  {
    author: 'Ammy Noemí Urzua Campos',
    when: 'hace 5 meses',
    text: 'Exquisitos y tremendos completos, muy barato. Tienen diferentes tipos de vienesas y el local es muy cómodo para ir a comer.',
    stars: 5,
  },
] as const
