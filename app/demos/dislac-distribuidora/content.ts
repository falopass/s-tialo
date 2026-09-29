/**
 * Dislac Distribuidora — tienda y distribuidora de lácteos en Talca.
 *
 * Datos confirmados en su ficha pública de Google Maps y su antiguo
 * sitio dislac.cl (casa matriz en San Fernando, con sucursal Talca):
 * nombre, rubro, dirección, teléfono fijo, horario, rating y reseñas,
 * y las marcas que distribuyen (listadas en su web). El logo real viene
 * de su página de Facebook; el logo de Surlat de su sitio. Las fotos
 * del mostrador/vitrina son bosquejos: su ficha de Maps no publica
 * fotos y sus redes están tras login — van marcadas en la página.
 * La foto de la cuadra es real: captura de Google Street View del
 * 21 Oriente 1080 (mar 2024).
 */

export const IMG = '/demos/dislac-distribuidora'

export const BIZ = {
  name: 'Dislac Distribuidora',
  short: 'Dislac',
  rubro: 'Distribuidora de lácteos',
  address: '21 Oriente 1080',
  city: 'Talca',
  phoneDisplay: '71 264 3383',
  phoneTel: '+56 71 264 3383',
  rating: 5.0,
  reviews: 2,
}

export const TEL_LINK = `tel:${BIZ.phoneTel.replace(/\s/g, '')}`

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Dislac Distribuidora, 21 Oriente 1080, Talca'
)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Dislac Distribuidora, 21 Oriente 1080, Talca'
)}&z=17&output=embed`
