export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  featured?: boolean
}

export const posts: PostMeta[] = [
  {
    slug: 'precios-paginas-web-pymes-chile-2026',
    title: 'Cuánto cuesta hacer una página web para una pyme en Chile (precios reales 2026).',
    description:
      'Precios transparentes de diseño web para pymes en Chile. Desde $79.990 CLP. Sin humo, sin agencia gigante, sin letras chicas.',
    date: 'Marzo 2026',
    readTime: '8 MIN',
    tags: ['PRECIOS', 'PYMES', 'GUÍA'],
    featured: true,
  },
  {
    slug: 'caso-roma-crochet-amigurumis-curico',
    title: 'Caso real: cómo Roma Crochet pasó de DM a web propia.',
    description:
      'La historia de una marca artesanal del Maule que pasó de vender por mensaje directo en Instagram a tener su propia página web profesional.',
    date: 'Marzo 2026',
    readTime: '6 MIN',
    tags: ['CASOS', 'PYMES', 'RESULTADOS'],
  },
  {
    slug: 'whatsapp-business-pagina-web-pymes',
    title: 'WhatsApp Business + página web: cómo combinarlos para vender más.',
    description:
      'Por qué WhatsApp es el mejor canal de venta para pymes chilenas y cómo integrarlo con tu página web para multiplicar conversiones.',
    date: 'Abril 2026',
    readTime: '7 MIN',
    tags: ['WHATSAPP', 'VENTAS', 'GUÍA'],
  },
]

export function getPost(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug)
}
