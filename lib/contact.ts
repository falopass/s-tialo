const messages: Record<string, string> = {
  home: 'Hola Sitiazo! Vi su web y me interesa cotizar para mi pyme 🟡',
  basico: 'Hola! Me interesa el plan Básico ($80K). ¿Podemos conversar? 🟡',
  recomendado: 'Hola! Me interesa el plan Recomendado ($130K). ¿Podemos conversar? 🟡',
  catalogo: 'Hola! Me interesa el plan Catálogo ($200K). Quisiera más detalles 🟡',
  contacto: 'Hola Sitiazo! Quiero conversar sobre un proyecto web 🟡',
}

export function whatsappLink(context: keyof typeof messages = 'contacto'): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '56900000000'
  return `https://wa.me/${number}?text=${encodeURIComponent(messages[context])}`
}

export function emailLink(subject?: string): string {
  const email = process.env.NEXT_PUBLIC_EMAIL || 'soporte@cvlisto.cl'
  const s = subject ? `?subject=${encodeURIComponent(subject)}` : ''
  return `mailto:${email}${s}`
}

export function calLink(): string {
  return process.env.NEXT_PUBLIC_CALCOM_URL || 'https://cal.com/diego-sitiazo'
}

export function siteUrl(path = ''): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://sitiazo.cl'
  return `${base}${path}`
}
