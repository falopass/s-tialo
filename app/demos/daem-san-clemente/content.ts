// Datos reales de DAEM San Clemente (Departamento de Administración de
// Educación Municipal) — verificados en Google Maps, edusanclemente.cl
// y Censo de Educación Municipal 2022 (Biblioteca del Congreso).
export const BIZ = {
  name: 'DAEM San Clemente',
  legal: 'Departamento de Administración de Educación Municipal de San Clemente',
  rubro: 'Educación municipal',
  address: 'Alejandro Cruz 412',
  city: 'San Clemente',
  region: 'Región del Maule',
  phoneDisplay: '+56 71 262 1310',
  phoneTel: '+56712621310',
  site: 'edusanclemente.cl',
  establecimientos: '34',
  matricula: '5.247',
}

export const CALL_LINK = `tel:${BIZ.phoneTel}`
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('DAEM San Clemente, Alejandro Cruz 412, San Clemente, Chile')
export const MAPS_EMBED =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('DAEM San Clemente, Alejandro Cruz 412, San Clemente, Chile') +
  '&output=embed'
export const SITE_URL = 'https://www.edusanclemente.cl/'

export const IMG = '/demos/daem-san-clemente'
