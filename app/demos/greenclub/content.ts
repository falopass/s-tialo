/**
 * Greenclub — complejo deportivo en 29 Sur, Talca.
 *
 * Ficha Google Maps: «Greenclub», categoría «Centro deportivo», 4,5★
 * (472 reseñas), Veintiocho Sur, Talca, +56 9 4293 2659.
 * Facebook/Instagram: greenclubtalca (IG 7,2 mil seguidores).
 * De sus fotos y posts reales: canchas de futbolito con pasto sintético
 * y focos nocturnos, canchas techadas de pádel, escuela de fútbol
 * infantil (junto a Colo-Colo Talca), torneos GreenCup y veladas de
 * boxeo/kickboxing. Arriendo de canchas con ofertas de fin de semana.
 */

export const BIZ = {
  name: 'Greenclub',
  rubro: 'Complejo deportivo',
  address: 'Veintiocho Sur',
  city: 'Talca, Maule',
  phoneDisplay: '+56 9 4293 2659',
  whatsapp: '56942932659',
  rating: 4.5,
  reviews: 472,
  instagram: '@greenclubtalca',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, quiero arrendar una cancha en Greenclub',
)}`

export const IG_URL = 'https://www.instagram.com/greenclubtalca'
export const FB_URL = 'https://www.facebook.com/greenclubtalca'

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Greenclub+29+Sur+Talca'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=Greenclub+Talca+29+Sur&output=embed'

export const IMG = '/demos/greenclub'
