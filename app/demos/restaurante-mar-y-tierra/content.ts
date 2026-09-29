/**
 * app/demos/restaurante-mar-y-tierra/content.ts
 *
 * Datos reales de la ficha de Google Maps de Restaurante Mar y Tierra
 * (Miraflores 1271, San Javier): dirección, teléfono, 4,4★, 100 reseñas
 * y horario (L–S 12:00–20:00, D 12:00–18:00). La carta con precios se
 * transcribió de la foto real de la carta del local (Google Maps).
 */

export const BIZ = {
  name: 'Restaurante Mar y Tierra',
  short: 'Mar y Tierra',
  rubro: 'Restaurant de mar y de parrilla',
  address: 'Miraflores 1271',
  city: 'San Javier de Loncomilla',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 7974 6629',
  phoneTel: '+56979746629',
  whatsapp: '56979746629',
  rating: 4.4,
  reviews: 100,
  precio: '$10.000 – $15.000 por persona',
  horarioSemana: 'Lunes a sábado, 12:00 a 20:00',
  horarioDomingo: 'Domingo, 12:00 a 18:00',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Restaurant Mar y Tierra y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página del Restaurant Mar y Tierra y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Restaurante Mar y Tierra, Miraflores 1271, San Javier, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Restaurante Mar y Tierra, Miraflores 1271, San Javier, Chile',
)}&output=embed`

export const IMG = '/demos/restaurante-mar-y-tierra'

/** Carta real, transcrita de la foto de la carta del local. */
export const CARTA = {
  principales: [
    { name: 'Pastel de jaiba', price: '$11.900' },
    { name: 'Salmón a la plancha o mantequilla', price: '$11.900' },
    { name: 'Pechuga de pollo a la plancha o grillada', price: '$7.900' },
    { name: 'Costillar de cerdo', price: '$10.900' },
    { name: 'Costillar a la barbacoa', price: '$11.900' },
    { name: 'Plateada al horno', price: '$10.900' },
    { name: 'Lomo vetado a la parrilla', price: '$12.900' },
    { name: 'Filete de vacuno a la parrilla', price: '$14.500' },
    { name: 'Filete Mar y Tierra (salsa blanca y camarones)', price: '$15.900' },
  ],
  pobres: [
    { name: 'Pechuga a lo pobre', price: '$9.900' },
    { name: 'Costillar de cerdo a lo pobre', price: '$12.900' },
    { name: 'Plateada a lo pobre', price: '$12.900' },
    { name: 'Salmón a lo pobre', price: '$13.900' },
    { name: 'Lomo vetado a lo pobre', price: '$14.900' },
  ],
  acompanamientos: 'Arroz · puré · papas fritas · papas duquesas · ensalada',
} as const
