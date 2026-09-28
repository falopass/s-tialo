/**
 * app/demos/clinica-y-farmacia-veterinaria-angel-guardian/content.ts
 *
 * Datos del mockup. REALES y verificados el 28-09-2026: ficha pública
 * de Google Maps (nombre, categoría veterinario, Maipú 774 en Linares,
 * fijo (73) 221 4790 — solo llamadas, la clínica no publica WhatsApp —,
 * 4.4 estrellas con 237 reseñas y horario lun-vie 9:30-19:00, sáb
 * 10:00-17:00, dom cerrado) y página de Facebook @VETERINARIAANGELGUARDIAN
 * (servicios de su flyer "su salud es nuestra misión": consulta general
 * y de especialidades, consulta de alimentación, vacunación, cirugía de
 * tejidos blandos, farmacia, alimentos, accesorios y boutique; médico
 * titular Hartmut A. Alvear Henríquez). Precios: muestra.
 */

export const BIZ = {
  name: 'Clínica y Farmacia Veterinaria Ángel Guardián',
  short: 'Ángel Guardián',
  rubro: 'Clínica y farmacia veterinaria',
  address: 'Maipú 774',
  city: 'Linares',
  region: 'Región del Maule',
  phoneDisplay: '+56 (73) 221 4790',
  phoneTel: '+56732214790',
  rating: '4.4',
  reviews: 237,
  medico: 'Hartmut A. Alvear Henríquez',
  instagram: 'https://www.instagram.com/veterinariaangelguardian',
  facebook:
    'https://www.facebook.com/Clinica-Veterinaria-Angel-Guardian-de-Linares-1734252833471432',
} as const

// La clínica solo publica teléfono fijo: el CTA de contacto es una llamada.
export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Clínica y Farmacia Veterinaria Ángel Guardián, Maipú 774, Linares, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Maipú 774, Linares, Región del Maule, Chile',
)}&output=embed`

export const IMG = '/demos/clinica-y-farmacia-veterinaria-angel-guardian'
