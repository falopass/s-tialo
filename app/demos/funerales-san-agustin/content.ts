// Datos confirmados de Funerales San Agustín (Funerales San Agustín Ltda.),
// casa funeraria de 7 Norte, Talca.
//
// Fuentes:
// - Google Maps ficha "Funerales San Agustín" (place 11hcfqykxq): Funeral home,
//   5.0 (1 reseña), Siete Nte. 1218, 3461407 Talca, abierto 24 horas,
//   tel +56 71 221 8091, plus code H8JR+JF.
// - Letrero de la fachada (foto real): "San Agustín Servicios Funerarios —
//   Fono 71 2 218091 (cel) +56 9 9349 3124".
// - mundochileno.com: razón social "Funerales San Agustín Ltda.",
//   Siete Norte 1218, Talca.
// - Reseña única en Maps: Gustavo Avendaño, 5 estrellas (sin texto).
// - Sin sitio web ni redes sociales confirmadas (funeralessanagustin.cl no
//   responde); no se encontró página de Facebook del negocio.
// - Fotos: solo existen 2 fotos reales de la ficha (fachada con letrero y
//   vista de calle). El interior no tiene foto pública: va como bosquejo.

export const BIZ = {
  name: 'Funerales San Agustín',
  legal: 'Funerales San Agustín Ltda.',
  rubro: 'Servicios funerarios',
  address: 'Siete Norte 1218',
  city: 'Talca',
  region: 'Maule',
  phoneDisplay: '71 221 8091',
  phoneTel: '+56712218091',
  celDisplay: '+56 9 9349 3124',
  celTel: '+56993493124',
  rating: 5.0,
  reviews: '1',
  hours: 'Abierto las 24 horas',
  plusCode: 'H8JR+JF Talca',
}

export const CALL_LINK = `tel:${BIZ.phoneTel}`
export const CEL_LINK = `tel:${BIZ.celTel}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Funerales+San+Agust%C3%ADn+Talca'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Funerales+San+Agustin,+Siete+Norte+1218,+Talca&z=16&output=embed'

export const IMG = '/demos/funerales-san-agustin'
