export const BIZ = {
  name: 'Comida al Paso Donde Jaqueline',
  short: 'Donde Jaqueline',
  category: 'Comida al paso — picada campestre',
  address: 'Cruce La Raya, camino a la cordillera',
  city: 'San Clemente',
  region: 'Región del Maule',
  phone: '56993726009',
  phoneDisplay: '+56 9 9372 6009',
  extraPhoneDisplay: '+56 9 5347 3968',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Donde Jaqueline y quiero preguntar qué están sirviendo.',
)}`

// Ficha "Donde Jacqueline Pollo A Las Brasas", Cruce La Raya
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.5739486,-71.4265721&z=15&output=embed'

export const MAPS_URL =
  'https://www.google.com/maps/place/Donde+Jacqueline+Pollo+A+Las+Brasas/@-35.5739486,-71.4265721,17z/data=!4m6!3m5!1s0x9665972bc9fb3d63:0xcf70ee6ccdc53909!8m2!3d-35.5739486!4d-71.4265721!16s%2Fg%2F11cnbmz4h9'

export const IMG = '/demos/comida-al-paso-donde-jaqueline'
