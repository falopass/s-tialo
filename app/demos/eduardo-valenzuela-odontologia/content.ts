/**
 * app/demos/eduardo-valenzuela-odontologia/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, sept 2026):
 * nombre "Eduardo Alfredo Valenzuela Medina" (categoría Dentist),
 * dirección 1 Ote. 1335, Talca, teléfono fijo +56 71 222 0758 —
 * solo llamadas, no publica WhatsApp — y 5.0★ con 2 reseñas
 * (sin texto público). La razón social registrada es
 * "Sociedad Odontológica Valenzuela Huerta y Compañía Limitada".
 * Las fotos de public/demos/eduardo-valenzuela-odontologia/ son la
 * calle real (Google Street View): 1 Oriente a la altura del 1335.
 * La ficha no publica fotos propias del interior: las prestaciones
 * van en tarjetas de bosquejo marcadas. Horario: no publicado.
 */

export const BIZ = {
  name: 'Odontología Dr. Eduardo Valenzuela',
  short: 'Dr. Valenzuela',
  rubro: 'Odontología',
  legalName: 'Sociedad Odontológica Valenzuela Huerta y Cía. Ltda.',
  address: '1 Oriente 1335',
  postal: '3461901',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 222 0758',
  phoneTel: '+56712220758',
  rating: 5.0,
  reviews: 2,
} as const

// Solo publica teléfono fijo: el CTA de contacto es una llamada.
export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Eduardo Alfredo Valenzuela Medina, 1 Oriente 1335, Talca, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  '1 Oriente 1335, 3461901 Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/eduardo-valenzuela-odontologia'
