// Datos verificados: Google Maps "Sushi wey", Molina + IG oficial @sushi.wey.molina
// +56 9 6848 2172 · Dirección actual según su IG: Libertad 1398, Molina
// (la ficha de Maps aún muestra Luis Cruz Martínez 1913, su dirección anterior)
// Horario según su Facebook: Mar 16–23 · Mié–Jue 13–23 · Vie–Sáb 13–23:30 · Dom 14–23 · Lun cerrado
export const BIZ = {
  name: 'Sushi Wey',
  short: 'Sushi Wey',
  rubro: 'Sushi, handrolls y delivery',
  address: 'Libertad 1398',
  city: 'Molina',
  region: 'Región del Maule',
  phoneDisplay: '+56 9 6848 2172',
  phoneTel: '+56968482172',
  whatsapp: '56968482172',
  services: 'Full delivery · Retiro · Servicio en local',
  hours: 'Mar 16:00–23:00 · Mié–Jue 13:00–23:00 · Vie–Sáb 13:00–23:30 · Dom 14:00–23:00 · Lun cerrado',
}

export const WA_LINK = `https://wa.me/${BIZ.whatsapp}?text=Hola%20${encodeURIComponent(BIZ.short)}%2C%20quiero%20pedir%20sushi%20para%20delivery`
export const WA_LINK_PROMO = `https://wa.me/${BIZ.whatsapp}?text=Hola%20${encodeURIComponent(BIZ.short)}%2C%20quiero%20preguntar%20por%20las%20promos%20del%20d%C3%ADa`
export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Sushi+Wey+Molina'
export const MAPS_EMBED = 'https://www.google.com/maps?q=Sushi%20Wey%2C%20Molina&output=embed'
export const IMG = '/demos/sushi-wey'
