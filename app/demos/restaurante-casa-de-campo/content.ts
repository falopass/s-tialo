/**
 * app/demos/restaurante-casa-de-campo/content.ts
 *
 * Datos verificados en la ficha de Google Maps de Casa de Campo Talca
 * (Calle 1 Nte. 6, Talca — restaurante chileno, 4,3★ con 1.146
 * opiniones, teléfono fijo (71) 223 0001). El WhatsApp (+56 9 4481
 * 8515) y las promos de empanadas salen del pendón real de la entrada.
 * La pizarra y la carta con precios se transcriben de las fotos de la
 * ficha. Horario: la ficha solo publica martes 12:00–18:00; como no
 * está confirmada la semana completa, no se muestran horarios.
 */

export const BIZ = {
  name: 'Casa de Campo Talca',
  short: 'Casa de Campo',
  rubro: 'Restaurante chileno',
  address: '1 Norte 6',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4481 8515',
  landline: '(71) 223 0001',
  whatsapp: '56944818515',
  rating: 4.3,
  reviews: '1.146',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Casa de Campo Talca y quiero consultar',
)}`

export const WA_LINK_MESA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Casa de Campo Talca y quiero reservar una mesa',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Casa de Campo Talca, Calle 1 Nte. 6, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Casa de Campo Talca, Calle 1 Nte. 6, Talca, Chile',
)}&output=embed`

export const IMG = '/demos/restaurante-casa-de-campo'

/** Pizarra del día, transcrita de la foto de la ficha de Google. */
export const PIZARRA = [
  { name: 'Mechada', price: '$12.000' },
  { name: 'Corvina', price: '$12.000' },
  { name: 'Reineta', price: '$12.000' },
  { name: 'Congrio frito', price: '$12.000' },
  { name: 'Pastel de jaibas', price: '$12.000' },
  { name: 'Chupe de locos', price: '$15.000' },
  { name: 'Lengua nogada', price: '$12.000' },
] as const

/** Sección «Pescados y mariscos» de la carta impresa (foto de la ficha). */
export const CARTA_PESCADOS = [
  { name: 'Merluza frita', price: 'desde $5.500' },
  { name: 'Reineta frita', price: 'desde $7.000' },
  { name: 'Salmón a la mantequilla', price: 'desde $10.000' },
  { name: 'Pastel de jaiba con papas fritas', price: '$9.500' },
  { name: 'Ceviche de salmón', price: '$7.000' },
] as const

/** Reseñas reales de la ficha de Google (1.146 opiniones, 4,3★). */
export const RESENAS = [
  {
    texto:
      'Excelente restaurante, muy acogedor, la comida es realmente rica y platos contundentes servidos calientes. La carne muy blanda y todo muy fresco. La atención fue 10 de 10.',
    autor: 'Patricia Alejandra Díaz Arana',
    estrellas: 5,
  },
  {
    texto:
      'Muy rico, platos contundentes y a buen precio.',
    autor: 'María Jesús Vergara',
    estrellas: 5,
  },
  {
    texto:
      'El lugar es bonito y tienen una carta muy criolla, la comida estaba muy buena.',
    autor: 'Consuelo Manzanares',
    estrellas: 3,
  },
] as const
