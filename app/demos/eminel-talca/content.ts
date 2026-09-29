/**
 * app/demos/eminel-talca/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps, sep 2026):
 * "Empresa de Ingenieria Electrica Talca" — firma de ingeniería
 * eléctrica en Calle 2 Oriente 1625, Talca, teléfono +56 71 222 3172,
 * 5.0★ con 1 opinión. El nombre comercial EMINEL aparece en directorios
 * locales (infoisinfo) registrado en la misma dirección — se usa como
 * marca corta del mockup y al publicar se valida con la empresa.
 * No publica horario ni sitio web; no tiene fotos propias en su ficha,
 * así que las imágenes son de su cuadra (Google Street View: red
 * aérea del barrio, la misma infraestructura con la que trabaja una
 * ingeniería eléctrica) y el esquema unifilar es un bosquejo de
 * muestra, marcado como tal.
 */

export const BIZ = {
  name: 'EMINEL',
  nameFull: 'Empresa de Ingeniería Eléctrica Talca',
  rubro: 'Ingeniería eléctrica',
  legalName: 'Empresa de Ingeniería Eléctrica Talca (EMINEL)',
  address: 'Calle 2 Oriente 1625',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 222 3172',
  phoneTel: '+56712223172',
  rating: 5.0,
  reviews: 1,
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Empresa de Ingenieria Electrica Talca, Calle 2 Oriente 1625, Talca, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Calle 2 Oriente 1625, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/eminel-talca'
