export const BIZ = {
  name: 'Lavaseco Flash',
  category: 'Lavandería y lavaseco',
  city: 'Talca',
  phone: '56949674643',
  phoneDisplay: '+56 9 4967 4643',
  source: 'https://lavasecoflash.cl/',
} as const

export const WA_LINK = `https://wa.me/${BIZ.phone}?text=${encodeURIComponent(
  'Hola, vi la página de Lavaseco Flash y quisiera consultar.',
)}`

export const BRANCHES = [
  {
    name: 'Casa Matriz',
    address: '1 Norte esquina 3 Oriente, Talca',
    hours: 'Lunes a viernes: 8:00–13:00 y 15:00–18:00',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1+Norte+esquina+3+Oriente%2C+Talca%2C+Chile',
  },
  {
    name: 'Sucursal Las Rastras',
    address: '2 Norte esquina 24 Oriente, Talca',
    hours: 'Lunes a viernes: 8:00–18:00',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=2+Norte+esquina+24+Oriente%2C+Talca%2C+Chile',
  },
  {
    name: 'Sucursal Industrial',
    address: '2 Sur 2258, Talca',
    hours: 'Lunes a viernes: 9:00–18:00 · Sábado: 9:00–14:00',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=2+Sur+2258%2C+Talca%2C+Chile',
  },
] as const

export const SERVICES = [
  {
    name: 'Lavandería doméstica',
    description: 'Lavado en seco y en agua, y planchado de prendas, ropa de hogar y alfombras.',
  },
  {
    name: 'Lavandería industrial',
    description: 'Servicio para clientes industriales con control de calidad y reparación de prendas.',
  },
  {
    name: 'Renting y transporte',
    description: 'Ropa blanca, mantelería y diseños personalizados. Consulta las condiciones por WhatsApp.',
  },
] as const
