/**
 * app/demos/planificador-tributario/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + registro SII,
 * sep 2026): "Planificador Tributario" — contable / asesoría tributaria,
 * Calle 1 Norte 841 (oficina interior del condominio), Talca,
 * teléfono +56 71 238 4314. La ficha de Google no tiene reseñas
 * publicadas ni horario declarado, y la marca como "cerrada
 * temporalmente" — datos que aquí se omiten en vez de inventarse.
 * Razón social: Planificador Tributario SpA, RUT 77.563.196-1
 * (inicio de actividades 25-04-2022); la firma trabaja al menos
 * desde 2016 según perfiles públicos (LinkedIn). Su sitio anterior,
 * planificadortributario.cl, ya no está en línea.
 * Servicios declarados: planificación tributaria, auditorías
 * externas, evaluación de proyectos y asesoría tributaria.
 * Fotos de public/demos/planificador-tributario/: el condominio del
 * 841, su entrada y la calle son Google Street View; la vista de la
 * Plaza es una foto publicada en su ficha de Google.
 */

export const BIZ = {
  name: 'Planificador Tributario',
  short: 'Planificador',
  rubro: 'Contabilidad · Asesoría tributaria',
  legalName: 'Planificador Tributario SpA',
  rut: '77.563.196-1',
  address: 'Calle 1 Norte 841',
  unidad: 'oficina interior',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 238 4314',
  phoneTel: '+56712384314',
  desde: 2016,
} as const

export const CALL_LINK = `tel:${BIZ.phoneTel}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Planificador Tributario, Calle 1 Norte 841, Talca, Maule, Chile',
)}`

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Calle 1 Norte 841, Talca, Maule, Chile',
)}&output=embed`

export const IMG = '/demos/planificador-tributario'
