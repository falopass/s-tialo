/**
 * app/demos/portones-automaticos-valdivia/content.ts
 *
 * Datos del mockup. REALES (verificados el 5-11-2026 en sus propias fuentes):
 * - Marca: «Portones Automáticos Valdivia», razón social PAV SpA. En Google
 *   Maps figura como «Pav Spa», categoría Electricista. (Maps, Facebook)
 * - Presentación textual: «Técnicos calificados para instalación, reparación
 *   y mantención de tus motores de corredera.» Categoría: Servicio de
 *   automatización. (Facebook @PAV2022)
 * - Ubicación: Las Gaviotas, Valdivia, Región de Los Ríos («Las Gaviotas
 *   Poste 23 / P11B»). Atienden en terreno: la visita se coordina por
 *   WhatsApp. No hay dirección de calle con pin. (Facebook)
 * - Horario: abierto las 24 horas, todos los días. (Google Maps)
 * - WhatsApp +56 9 4557 9607. Facebook facebook.com/PAV2022 (más de 4 mil
 *   seguidores). Instagram @portonesautomaticosvaldivia.
 * - Servicios reales de sus publicaciones: instalación de motores de
 *   corredera; reparación y mantención; automatización de portones
 *   existentes; construcción y montaje de portones de fierro, reja y
 *   madera («Construcción, montaje y automatización portón fierro 5
 *   metros con motor rápido»); controles y receptores («Revisamos la
 *   compatibilidad del receptor y ofrecemos una solución»); revisión
 *   técnica de fallas («No siempre es necesario cambiar todo el
 *   sistema»); criterios para elegir el motor (peso, largo, frecuencia
 *   de uso, roce y pendiente). (Facebook)
 * - Fotos: ocho fotos reales de sus trabajos y su logo, en
 *   public/demos/portones-automaticos-valdivia/.
 *
 * TEXTO DE EJEMPLO: titulares, bajadas, descripciones de servicios
 * (inspiradas en sus publicaciones) y rótulos gráficos. Sin precios,
 * plazos, marcas de motores, años de experiencia ni reseñas: no hay
 * fuentes suficientes.
 */

export const BIZ = {
  name: 'Portones Automáticos Valdivia',
  short: 'Portones Automáticos Valdivia',
  legal: 'PAV SpA',
  rubro: 'Servicio de automatización',
  city: 'Valdivia',
  sector: 'Las Gaviotas',
  region: 'Región de Los Ríos',
  phoneDisplay: '+56 9 4557 9607',
  phoneTel: '+56945579607',
  whatsapp: '56945579607',
  facebook: 'https://www.facebook.com/PAV2022',
  instagram: 'https://www.instagram.com/portonesautomaticosvaldivia/',
  instagramUser: '@portonesautomaticosvaldivia',
} as const

export const WA_LINK =
  'https://wa.me/56945579607?text=Hola%2C%20vi%20su%20p%C3%A1gina%20y%20necesito%20ayuda%20con%20mi%20port%C3%B3n'

export const WA_FALLA = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
  'Hola, mi portón está fallando y necesito una revisión técnica',
)}`

export const IMG = '/demos/portones-automaticos-valdivia'
