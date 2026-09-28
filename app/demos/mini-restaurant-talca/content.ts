/**
 * app/demos/mini-restaurant-talca/content.ts
 *
 * Datos del mockup. REALES (ficha de Google Maps + minirestaurant.cl +
 * su Instagram @minirestaurantoficial): nombre, dirección en Paseo
 * Hacienda Talca, teléfono, horarios, rating 4,8 (115 opiniones) y la
 * historia: sucursal en Talca del tradicional Mini Sheraton de Gultro,
 * Rancagua (más de 50 años), con cocina a cargo del chef ejecutivo
 * Nicolás Carrasco Arellano. Las fotos de public/demos/mini-restaurant-talca/
 * son reales de su ficha y el logo es el oficial. Los platos citados
 * (asado de tira, pulpo, entradas y postres) salen de sus propias
 * publicaciones y reseñas. Todo lo demás es contenido de muestra.
 */

export const BIZ = {
  name: 'Mini Restaurant Talca',
  short: 'Mini Restaurant',
  rubro: 'Restaurante familiar',
  city: 'Talca',
  region: 'Región del Maule',
  address: 'Avda. Pehuenche Norte 1161, Paseo Hacienda, Talca',
  phoneDisplay: '+56 9 9699 5787',
  phoneTel: '+56996995787',
  whatsapp: '56996995787',
  instagram: 'minirestaurantoficial',
  rating: '4,8',
  reviewCount: '115',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Mini Restaurant Talca y quiero reservar una mesa',
)}`

export const INSTAGRAM_URL = `https://www.instagram.com/${BIZ.instagram}/`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Mini Restaurant, Avda. Pehuenche Norte 1161, Talca, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Avda. Pehuenche Norte 1161, Talca, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/mini-restaurant-talca'

export const PLATOS = [
  {
    foto: 'pulpo',
    alt: 'Pulpo dorado sobre crema con papas confitadas',
    nombre: 'Del mar a la mesa',
    detalle: 'Entradas y platos de pescados y mariscos, como este pulpo que ya es sello de la casa.',
  },
  {
    foto: 'entradas-mesa',
    alt: 'Tabla de entradas variadas servidas en la mesa',
    nombre: 'Para compartir',
    detalle: 'Tablas y entradas al centro, pensadas para llegar picando mientras sale el fondo.',
  },
  {
    foto: 'postre',
    alt: 'Postre de la casa con salsa de manjar',
    nombre: 'Final dulce',
    detalle: 'Postres caseros para cerrar la comida como corresponde en un restaurante familiar.',
  },
] as const

export const REVIEWS = [
  {
    nombre: 'Catalina Morales',
    texto:
      'Comida muy rica y porciones contundentes. La atención fue súper rápida, volvería seguro.',
  },
  {
    nombre: 'Carol Arellano',
    texto:
      'Las carnes 10/10, en su punto exacto. Los garzones muy amables y atentos todo el almuerzo.',
  },
  {
    nombre: 'Javi Bello',
    texto:
      'Relación precio/calidad muy buena. El sabor es igualito al Mini de Rancagua, la misma casa.',
  },
] as const
