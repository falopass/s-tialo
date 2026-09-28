// Datos verificados: Google Maps "Gasfiter - Tecnifem", 3 Norte 10, Talca
// +56 9 4521 3431 · 5.0★ (18 reseñas) · IG @tecnifem.cl "GASFITERIA TECNIFEM"
// Horario ficha: Lun 10–17 · Mar–Sáb 10–22 · Dom 10–17
export const BIZ = {
  name: 'Gasfitería Tecnifem',
  short: 'Tecnifem',
  rubro: 'Gasfitería a domicilio',
  address: '3 Norte 10',
  city: 'Talca',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 4521 3431',
  phoneTel: '+56945213431',
  whatsapp: '56945213431',
  rating: '5.0',
  ratingCount: '18 reseñas',
  hours: 'Lun 10:00–17:00 · Mar–Sáb 10:00–22:00 · Dom 10:00–17:00',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=Hola%20${encodeURIComponent(BIZ.short)}%2C%20necesito%20un%20trabajo%20de%20gasfiter%C3%ADa%20en%20Talca`
export const WA_LINK_CALEFONT = `https://wa.me/${BIZ.whatsapp}?text=Hola%20${encodeURIComponent(BIZ.short)}%2C%20necesito%20ayuda%20con%20mi%20calefont`
export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Gasfiter+Tecnifem+3+Norte+10+Talca'
export const MAPS_EMBED = 'https://www.google.com/maps?q=Gasfiter%20Tecnifem%2C%203%20Norte%2010%2C%20Talca&output=embed'
export const IMG = '/demos/gasfiteria-tecnifem'
