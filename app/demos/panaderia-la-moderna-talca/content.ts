export const BIZ = {
  name: 'Panadería La Moderna',
  category: 'Panadería, pastelería y heladería',
  address: 'Av. Duao 0108',
  city: 'Talca',
  phone: '56933952827',
  phoneDisplay: '+56 9 3395 2827',
  rating: '4,8',
  reviews: '71',
  horarioSemana: 'Lun–Vie 7:30–20:30 · Sáb 8:00–20:00',
}

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, quiero consultar por pan y pasteles en Panadería La Moderna de Av. Duao, Talca.',
)}`

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Sociedad+comercial+La+Moderna+Limitada+Av.+Duao+Talca'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Av. Duao 0108, Talca, Región del Maule',
)}&output=embed`

export const RESENAS = [
  {
    autor: 'Mario Moya',
    estrellas: 5,
    texto:
      'Tienen dulces y tortas muy ricos, pero sin duda lo mejor es la marraqueta, lejos la mejor de Talca. Siempre fresca y crujiente. Totalmente recomendado.',
  },
  {
    autor: 'Melissa Neris Calfin',
    estrellas: 5,
    texto:
      'Variado, rápido y eficiente. En una zona donde las panaderías suelen ser lentas y con poca variedad, este local destaca. Rico olor a panadería y rapidez en la atención.',
  },
  {
    autor: 'Insumos San José Talca',
    estrellas: 5,
    texto:
      'Excelente atención, ricos helados, los sandwich en marraqueta de la casa espectacular.',
  },
]

export const HORARIO = [
  ['Lunes a viernes', '7:30–20:30'],
  ['Sábado', '8:00–20:00'],
  ['Domingo', 'Cerrado'],
]
