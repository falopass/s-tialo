/**
 * app/demos/raices-villalegrinas/content.ts
 *
 * Datos del mockup. REALES (ficha pública de Google Maps + sus redes):
 * Raices villalegrinas — licorería artesanal de la familia Villena en
 * Avda. Abate Molina N° 98, Villa Alegre (la casa antigua de las fotos),
 * fono/WhatsApp +56 9 8918 2572, 4.6 estrellas con 30 reseñas. En su ficha
 * ellos mismos precisan: "sólo tenemos licores artesanales" (no vino/chicha).
 * De la etiqueta real fotografiada se lee la variedad "Canelita"
 * (licor de canela, 16°). Las reseñas citadas son reales, con su autor;
 * otras variedades no se nombran porque no están publicadas.
 * El teléfono de la nota original traía un dígito de más; el correcto
 * es el de la ficha: 9 8918 2572.
 */

export const BIZ = {
  name: 'Raíces Villalegrinas',
  short: 'Raíces',
  rubro: 'Licorería artesanal',
  address: 'Avda. Abate Molina N° 98',
  city: 'Villa Alegre',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 8918 2572',
  phoneTel: '+56989182572',
  whatsapp: '56989182572',
  instagram: 'https://www.instagram.com/raicesvillalegrinas/',
  facebook: 'https://www.facebook.com/raices.villalegrinas',
  igUser: '@raicesvillalegrinas',
  rating: '4,6',
  reviews: 30,
  familia: 'la familia Villena',
} as const

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola Raíces Villalegrinas, vi su página y quiero consultar por sus licores artesanales',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Raices+villalegrinas+Villa+Alegre'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Avda. Abate Molina 98, Villa Alegre, Chile',
)}&output=embed`

export const IMG = '/demos/raices-villalegrinas'

/** Reseñas reales de la ficha de Google (autor + fecha). */
export const REVIEWS = [
  {
    author: 'Jonathan Eduardo Döll Larenas',
    when: 'hace 2 años',
    text: 'Los licores verdaderamente son excelentes, con preparación artesanal y recetas propias. Si visitan Villa Alegre no pueden dejar de pasar por Raíces Villalegrinas.',
    stars: 5,
  },
  {
    author: 'María Magdalena Durán Merino',
    when: 'hace 3 años',
    text: 'Señora Tita, mil gracias por la cordial atención. Amé infinitamente la historia de su casa tan antigua.',
    stars: 5,
  },
  {
    author: 'Jorge Luis Sagredo Quezada',
    when: 'hace 8 años',
    text: 'Una hermosa y artesanal bodega dirigida por la familia Villena.',
    stars: 5,
  },
  {
    author: 'José Arturo Valenzuela',
    when: 'hace 2 años',
    text: 'Muy ricos licores y excelente atención.',
    stars: 5,
  },
] as const
