/**
 * app/demos/abastible-de-la-fuente/content.ts
 *
 * Datos del mockup. REALES (verificados en sesión):
 * - Ficha de Google Maps "Distribuidora de Gas Abastible De La Fuente":
 *   Av. Oscar Commentz 68, Molina (Maule), tel. +56 9 9078 0071,
 *   nota 4,9 (9 reseñas), martes 10:00–19:00, plus code WP9Q+Q3.
 *   La ficha NO tiene fotos, ni StreetView con cobertura, ni sitio web
 *   ("Añadir sitio web"); tampoco se encontró Facebook/Instagram del
 *   negocio tras búsqueda en ambas redes y directorios.
 * - Distribuidor oficial listado en abastible.cl ("Distribuidora De La
 *   Fuente — Molina"); los formatos de cilindro (5/11/15/45 kg) son los
 *   que Abastible publica a nivel nacional. La distribuidora no publica
 *   precios: la página indica consultar el precio del día por WhatsApp.
 * - Sin fotos reales disponibles: todas las escenas gráficas de la
 *   página van marcadas visiblemente como bosquejo (regla de Sitiazo).
 */

export const BIZ = {
  name: 'Abastible De La Fuente',
  fullName: 'Distribuidora de Gas Abastible De La Fuente',
  short: 'De La Fuente',
  rubro: 'Distribuidora de gas',
  address: 'Av. Oscar Commentz 68',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 9078 0071',
  phoneTel: '+56990780071',
  whatsapp: '56990780071',
  rating: '4,9',
  reviews: 9,
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, vi la página de Abastible De La Fuente y quiero pedir un cilindro',
)}`

export const WA_LINK_PRECIO = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero consultar el precio del día de un cilindro y la entrega a domicilio',
)}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Distribuidora de Gas Abastible De La Fuente, Avenida Oscar Commentz 68, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Distribuidora de Gas Abastible De La Fuente, Avenida Oscar Commentz 68, Molina, Chile',
)}&output=embed`

/** Formatos de cilindro que Abastible vende en Chile (abastible.cl). */
export const FORMATOS = [
  { kg: '5', uso: 'la cocina de emergencia y la camping' },
  { kg: '11', uso: 'el uso diario de una casa' },
  { kg: '15', uso: 'el formato más pedido para el hogar' },
  { kg: '45', uso: 'calefones y consumo alto' },
] as const

/** Pasos del pedido tal como opera una distribuidora de reparto. */
export const PASOS = [
  { n: '01', t: 'Escríbenos por WhatsApp', d: 'Dices tu dirección en Molina y el formato que necesitas.' },
  { n: '02', t: 'Confirmamos precio y hora', d: 'Te respondemos con el precio del día y cuándo sale el reparto.' },
  { n: '03', t: 'El cilindro llega a tu puerta', d: 'El repartidor cambia el cilindro vacío por el cargado.' },
] as const
