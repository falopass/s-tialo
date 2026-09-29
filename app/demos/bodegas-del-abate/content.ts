// Datos confirmados de Vinícola Las Bodegas del Abate (Talca).
//
// Fuentes:
// - Google Maps ficha "Vinicola las Bodegas del Abate": categoría Winery /
//   bodega, Calle Camino Las Rastras Km 8, Talca. Tel +56 71 226 5767.
//   Plus code H97Q+JR. Sin reseñas ni rating. Coordenadas -35.4359,-71.6104.
// - Sitio propio archivado (bodegasdelabate.cl, wayback 2007–2011):
//   "Camino Las Rastras Km. 8, Fundo Santa Teresa - Lote 7", Casilla 462,
//   Talca. Fono 56/71/265767.
// - Registros mercantiles (chilepymes/eldirectorio): VINICOLA A LAS BODEGAS
//   DEL ABATE LTDA, giro elaboración de bebidas; ImportGenius la lista como
//   importadora/exportadora → viñas agroexportadora.
// - Esta pyme NO tiene fotos reales disponibles: su ficha de Maps solo tiene
//   una foto ajena mal asociada, su sitio web murió y no tiene redes
//   encontradas. Por eso el demo usa: (a) Street View real del sector de
//   Camino Las Rastras (Google, abr 2024) y (b) escenas generadas marcadas
//   visiblemente como BOSQUEJO. Al activar el sitio se reemplazan por fotos
//   reales del fundo.
// - No hay reseñas: en su lugar va una sección "ficha técnica" con solo
//   datos verificados. No se inventan cepas, premios ni capacidades.

export const BIZ = {
  name: 'Las Bodegas del Abate',
  legal: 'Vinícola Las Bodegas del Abate Ltda.',
  rubro: 'Viñas y agroexportación',
  fundo: 'Fundo Santa Teresa, Lote 7',
  address: 'Camino Las Rastras, km 8',
  city: 'Talca',
  region: 'Valle del Maule',
  phoneDisplay: '+56 71 226 5767',
  phoneHref: 'tel:+56712265767',
  plusCode: 'H97Q+JR Talca',
}

export const CALL_LINK = BIZ.phoneHref
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Vinicola+las+Bodegas+del+Abate+Talca'
export const MAPS_EMBED =
  'https://www.google.com/maps?q=-35.4358884,-71.610394&hl=es&z=16&output=embed'
export const IMG = '/demos/bodegas-del-abate'
