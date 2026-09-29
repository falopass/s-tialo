/**
 * app/demos/la-pica-de-los-tatas/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, página de
 * Facebook y prensa local): nombre, rubro, dirección, comuna, teléfono
 * fijo (75) 255 4076 (SERNATUR y Facebook; atienden por un grupo de
 * WhatsApp, no por un móvil directo), nota 4,6 en 376 reseñas, horario
 * (Lu-Sa 9:30-16:00, domingo cerrado), fotos reales bajadas de la ficha
 * (fachada con murales, puerta con rueda de carreta y pizarrón,
 * empanadas, pastel de choclo, comedor con guirnaldas), el letrero
 * pintado a mano como logo y reseñas citadas. Palmarés real:
 * campeona "Mejor Empanada de Molina 2025" (concurso de la Corporación
 * de Turismo + Agamol, 15 locales; Radio Favorita 18-09-2025) y
 * reconocimiento "relación precio-calidad" 2024 (Municipalidad de
 * Molina / VLN Radio). Los platos salen del pizarrón real de la entrada
 * y de la fachada ("Empanadas de horno · Desayunos · Comidas típicas").
 * No publican precios en línea: la pizarra del sitio muestra platos,
 * no valores.
 */

export const BIZ = {
  name: 'La Picá De Los Tatas',
  short: 'Los Tatas',
  slogan: 'El buen sabor de la comida casera',
  rubro: 'Restaurante · comida casera',
  address: 'Independencia 1843',
  postal: '3380972',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 (75) 255 4076',
  phoneTel: '+56752554076',
  reviews: 376,
  rating: 4.6,
  ratingLabel: '4,6',
  followers: '4.790',
  facebook: 'https://www.facebook.com/LaPicaDeLosTatas/',
} as const

// No publican un móvil con WhatsApp: el CTA de contacto es llamada al fijo.
export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'La Picá De Los Tatas, Independencia 1843, Molina, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'La Picá De Los Tatas, Independencia 1843, Molina, Chile',
)}&output=embed`

export const IMG = '/demos/la-pica-de-los-tatas'
