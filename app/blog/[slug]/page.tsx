import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Dot } from '@/components/ui/Dot'
import { Tag } from '@/components/ui/Tag'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { HairlineDivider } from '@/components/ui/HairlineDivider'

import {
  whatsappLink,
  SITE,
  LEGAL,
  siteUrl,
} from '@/lib/config'
import { posts, getPost } from '@/content/posts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title.replace('.', ''),
    description: post.description,
    alternates: {
      canonical: siteUrl(`/blog/${post.slug}/`),
    },
    openGraph: {
      title: post.title.replace('.', ''),
      description: post.description,
      url: siteUrl(`/blog/${post.slug}/`),
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title.replace('.', ''),
        },
      ],
    },
  }
}

// Contenido completo de cada post
const postContent: Record<string, { sections: { heading?: string; body: string }[] }> = {
  'precios-paginas-web-pymes-chile-2026': {
    sections: [
      {
        heading: 'Introducción',
        body: 'Si estás leyendo esto, probablemente tienes una pyme y estás pensando en hacer una página web. O quizás ya cotizaste y te pasaron un presupuesto que te pareció excesivo. Vamos a hablar de precios reales en Chile, en 2026, sin humo.',
      },
      {
        heading: '¿Por qué los precios varían tanto?',
        body: 'El mercado de diseño web en Chile es amplio y poco transparente. Una agencia grande te puede cobrar $2.000.000 por algo que un freelance hace por $300.000. La diferencia no siempre es calidad: a veces es estructura de costos, overhead y margen.',
      },
      {
        heading: 'Los 3 perfiles de precio en Chile',
        body: 'Perfil 1: Agencia grande ($1.500.000 - $5.000.000+). Incluyen project manager, diseñador senior, desarrollador, SEO specialist. Pagas el equipo completo. Tiene sentido si eres una empresa mediana-grande con presupuesto de marketing.',
      },
      {
        body: 'Perfil 2: Freelance/estudio chico ($79.990 - $199.990). Diseñador + desarrollador en una sola persona. Sin intermediarios, comunicación directa por WhatsApp. Menos overhead = precios más bajos. Ideal para pymes que necesitan presencia online sin gastar millones.',
      },
      {
        body: 'Perfil 3: Plataformas DIY (Wix, Squarespace, Shopify) ($0 - $50.000/mes). Lo armas tú. La curva de aprendizaje es real. El resultado se nota genérico. Pero si tienes tiempo y cero presupuesto, puede funcionar.',
      },
      {
        heading: '¿Qué incluye cada rango de precio?',
        body: 'En Sitiazo trabajamos en el rango estudio chico ($80K-$200K). Por ese precio entregamos: diseño mobile-first, hosting primer año, dominio .cl, SEO local básico, WhatsApp integrado, y manual de uso. Sin costos escondidos, sin mantención obligatoria.',
      },
      {
        heading: 'La trampa del "barato"',
        body: 'Cuidado con ofertas bajo $100.000. Generalmente son templates genéricos mal adaptados, sin SEO, sin responsive real, y desparecen a los 3 meses. Una web mal hecha es peor que no tener web: da mala impresión y aleja clientes.',
      },
      {
        heading: 'Conclusión: cuánto deberías pagar',
        body: 'Si eres una pyme chilena que necesita presencia online profesional, tu rango razonable es $79.990 - $199.990. Menos que eso, desconfía. Más que eso, pregúntate si realmente necesitas todo lo que te están vendiendo. Y siempre, siempre pide ver trabajos anteriores reales (no mockups).',
      },
      {
        heading: '¿Quieres cotizar tu proyecto?',
        body: 'Escríbeme por WhatsApp. Te respondo en horas, sin compromiso, sin venta agresiva. 30 minutos para entender tu negocio y darte un precio claro.',
      },
    ],
  },
  'caso-roma-crochet-amigurumis-curico': {
    sections: [
      {
        heading: 'El punto de partida',
        body: 'Roma Crochet vende amigurumis personalizados hechos a mano en Curicó, Región del Maule. Su negocio funcionaba 100% por Instagram: las clientas veían los muñecos en las historias, mandaban un DM, y coordinaban el pedido por chat. Funcionaba, pero tenía límites claros.',
      },
      {
        heading: 'El problema',
        body: 'Cuando tienes 10 conversaciones de WhatsApp abiertas con clientas que preguntan "¿cuánto sale el zorrito?", "¿tienes el principito?", "¿haces envío a Santiago?", pierdes horas respondiendo lo mismo. Además, Instagram no indexa en Google. Si alguien buscaba "amigurumis personalizados Chile", Roma no aparecía.',
      },
      {
        heading: 'La solución',
        body: 'Diseñamos una web simple, cálida y mobile-first. Cada amigurumi tiene su propia tarjeta con foto grande, nombre, precio y un botón directo de WhatsApp que abre el chat con un mensaje pre-armado: "Hola! Me interesa el [nombre del amigurumi] 🧶". La clienta solo aprieta enviar.',
      },
      {
        heading: 'El resultado',
        body: 'La web se publicó en 7 días. Roma ahora comparte su web en las historias de Instagram y el tráfico se divide entre redes sociales y búsqueda orgánica. Las consultas por WhatsApp llegan con el nombre del producto en el mensaje, lo que reduce el tiempo de respuesta. Y lo mejor: Google ya la indexó para "amigurumis Curicó".',
      },
      {
        heading: 'Lo que aprendimos',
        body: 'No necesitas una web de 20 páginas. Necesitas una web que responda las 3 preguntas que tus clientes siempre hacen: qué vendes, cuánto cuesta, y cómo te compro. Si tu web responde eso en menos de 5 segundos, ya ganaste.',
      },
      {
        body: '¿Quieres un caso así para tu marca? Escríbeme.',
      },
    ],
  },
  'whatsapp-business-pagina-web-pymes': {
    sections: [
      {
        heading: 'Por qué WhatsApp es el mejor canal de venta en Chile',
        body: 'Chile tiene una de las tasas de penetración de WhatsApp más altas del mundo. Según datos de 2025, más del 93% de los chilenos con smartphone usa WhatsApp a diario. Para una pyme, esto significa que tus clientes YA están ahí. No tienes que convencerlos de descargar otra app o crear una cuenta en tu sitio.',
      },
      {
        heading: 'Web + WhatsApp: la combinación ganadora',
        body: 'La web hace el trabajo de "vidriera digital": muestra tus productos, cuenta tu historia, da confianza. WhatsApp hace el trabajo de "vendedor": cierra la venta, responde dudas, coordina entregas. Separadas, cada una funciona. Juntas, se potencian.',
      },
      {
        heading: 'La estrategia de los mensajes pre-armados',
        body: 'El secreto está en los deep links de WhatsApp. Cada botón de tu web puede abrir WhatsApp con un mensaje pre-escrito según el contexto. Por ejemplo, si alguien está viendo un producto específico, el mensaje dice "Hola! Me interesa el [nombre del producto]". Esto reduce la fricción: la persona no tiene que pensar qué escribir.',
      },
      {
        body: 'En Sitiazo implementamos mensajes contextuales para cada plan y cada página. El cliente llega a WhatsApp con el contexto exacto de lo que quiere, y Diego puede responder en segundos con la información correcta.',
      },
      {
        heading: 'WhatsApp Business: las herramientas que necesitas',
        body: 'La app WhatsApp Business (gratis) incluye perfil de empresa, catálogo de productos, mensajes de bienvenida automáticos y respuestas rápidas. Para una pyme que recién empieza, es más que suficiente. Cuando crezcas a 10+ consultas diarias, puedes evaluar la API de WhatsApp (de pago) para automatizar respuestas.',
      },
      {
        heading: '¿Mail o WhatsApp? La respuesta es WhatsApp',
        body: 'En Chile, WhatsApp convierte 5-10 veces más que el email. La cultura de mensajería instantánea es dominante. Un formulario de contacto puede tener 2% de conversión; un botón de WhatsApp puede tener 15-20%. Si tu negocio depende de que la gente te contacte, no hay discusión: WhatsApp primero.',
      },
      {
        heading: '¿Listo para integrar WhatsApp en tu web?',
        body: 'Conversemos. Te ayudo a definir la mejor estrategia para tu negocio. 30 minutos sin compromiso.',
      },
    ],
  },
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  const content = postContent[slug]

  if (!post || !content) {
    notFound()
  }

  const allPosts = posts.filter((p) => p.slug !== slug)

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title.replace('.', ''),
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: LEGAL.ownerName,
    },
    publisher: {
      '@type': 'Organization',
      name: `${SITE.name}.${SITE.domain.split('.')[1]}`,
      url: SITE.url,
    },
    url: siteUrl(`/blog/${post.slug}/`),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <article className="pt-[var(--spacing-7)] md:pt-[var(--spacing-8)] pb-[var(--spacing-6)]">
        <div className="max-w-[var(--prose-max)] mx-auto px-[var(--spacing-5)] md:px-0">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
              {post.date}
            </span>
            <Dot size="xs" variant="solid-yellow" />
            <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
              {post.readTime}
            </span>
            <Dot size="xs" variant="solid-yellow" />
            <div className="flex items-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body text-micro uppercase tracking-ui text-ink-faded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h1 className="font-display font-bold text-display-lg text-ink leading-display tracking-display mb-6">
            {post.title}
            <Dot size="xl" variant="solid-yellow" />
          </h1>

          {/* Content sections */}
          <div className="space-y-6">
            {content.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-display font-bold text-display-sm text-ink mb-3">
                    {section.heading}
                    <Dot
                      size="md"
                      variant="solid-yellow"
                      className="ml-1 inline-block"
                    />
                  </h2>
                )}
                <p className="font-body text-body text-ink-muted leading-body">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-divider">
            <p className="font-display font-bold text-display-sm text-ink mb-4">
              ¿Hablamos de tu proyecto?
              <Dot size="md" variant="solid-yellow" />
            </p>
            <p className="font-body text-body text-ink-muted mb-6">
              30 minutos sin compromiso. Escríbeme por WhatsApp o mándame un
              correo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton href={whatsappLink('contacto')} external>
                Hablemos por WhatsApp
              </PrimaryButton>
            </div>
          </div>
        </div>
      </article>

      <HairlineDivider />

      {/* More posts */}
      {allPosts.length > 0 && (
        <section className="py-[var(--spacing-5)] md:py-[var(--spacing-6)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
            <h2 className="font-display font-bold text-display-md text-ink mb-8">
              Más notas.
              <Dot size="lg" variant="solid-yellow" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="border border-border-subtle bg-cream hover:border-border-strong transition-colors duration-200 group p-[var(--spacing-5)]"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
                      {p.date}
                    </span>
                    <Dot size="xs" variant="solid-ink" />
                    <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
                      {p.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-display-sm text-ink leading-tight mb-2 group-hover:underline decoration-yellow decoration-2 underline-offset-4">
                    {p.title}
                    <Dot
                      size="sm"
                      variant="solid-yellow"
                      className="ml-1 inline-block"
                    />
                  </h3>
                  <p className="font-body text-body-sm text-ink-muted leading-body">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
