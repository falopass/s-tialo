import type { Metadata } from 'next'
import Link from 'next/link'
import { Dot } from '@/components/ui/Dot'
import { Tag } from '@/components/ui/Tag'
import { StillLifeImage } from '@/components/ui/StillLifeImage'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { SubmitButton } from '@/components/ui/SubmitButton'
import { posts, type PostMeta } from '@/content/posts'

export const metadata: Metadata = {
  title: 'Notas',
  description:
    'Notas sobre web, pymes y vender en internet. Para emprendedores chilenos que quieren entender su negocio online.',
  alternates: {
    canonical: 'https://sitiazo.cl/blog/',
  },
  openGraph: {
    title: 'Notas | Sitiazo.cl',
    description:
      'Notas sobre web, pymes y vender en internet. Para emprendedores chilenos que quieren entender su negocio online.',
    url: 'https://sitiazo.cl/blog/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Blog — Sitiazo.cl',
      },
    ],
  },
}

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)
  const others = posts.filter((p) => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="pt-[var(--spacing-9)] md:pt-[var(--spacing-10)] pb-[var(--spacing-6)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-5xl mb-8">
            <h1 className="font-display font-bold text-display-lg md:text-display-xl text-ink leading-display tracking-display mb-6">
              Notas sobre web, pymes y<br />
              vender en internet.<Dot size="xl" variant="solid-yellow" />
            </h1>
            <p className="font-body text-lead text-ink-muted leading-body">
              Sin tecnicismos. Para emprendedores y emprendedoras chilenas que quieren
              entender qué pasa con su negocio online.
            </p>
          </div>

          {/* Featured post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="block border border-border-subtle bg-cream hover:border-border-strong transition-colors duration-200 group mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <StillLifeImage
                  src="/images/still-lifes/blog.png"
                  alt="Composición editorial para notas del blog de Sitiazo.cl"
                  aspectRatio="16:10"
                />
                <div className="flex flex-col justify-center px-[var(--spacing-6)] py-[var(--spacing-8)]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display italic text-meta text-ink-faded tracking-ui">
                      fig. 01 — destacado
                    </span>
                    <Dot size="xs" variant="solid-yellow" />
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
                      {featured.date}
                    </span>
                    <Dot size="xs" variant="solid-ink" />
                    <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-display-md text-ink leading-tight mb-3 group-hover:underline decoration-yellow decoration-2 underline-offset-4">
                    {featured.title}
                    <Dot size="md" variant="solid-yellow" className="ml-1 inline-block" />
                  </h2>
                  <p className="font-body text-body text-ink-muted leading-body mb-4">
                    {featured.description}
                  </p>
                  <span className="font-medium text-body text-ink group-hover:text-yellow transition-colors">
                    Leer post →
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Grid of other posts */}
          {others.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <HairlineDivider />

      {/* Newsletter */}
      <section className="py-[var(--spacing-6)] md:py-[var(--spacing-7)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--narrow-max)] mx-auto text-center">
            <h2 className="font-display font-bold text-display-md text-ink leading-display mb-4">
              Suscríbete.<Dot size="lg" variant="solid-yellow" />
            </h2>
            <p className="font-body text-body text-ink-muted leading-body mb-8">
              Una nota por mes. Sobre web, pymes, marketing chileno. Sin spam, sin SEO bullshit.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                aria-label="Email para suscripción"
                className="flex-1 bg-cream border border-border-subtle px-4 py-3 font-body text-body text-ink placeholder:text-ink-faded focus:outline-none focus:border-ink"
                required
              />
              <SubmitButton>Suscribirme</SubmitButton>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

function BlogCard({ post, index }: { post: PostMeta; index: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="border border-border-subtle bg-cream hover:border-border-strong transition-colors duration-200 group"
    >
      <StillLifeImage
        src={post.image ?? '/images/still-lifes/blog.png'}
        alt={`Composición editorial para la nota ${post.title}`}
        aspectRatio="16:10"
      />
      <div className="px-[var(--spacing-5)] py-[var(--spacing-5)]">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
            {post.date}
          </span>
          <Dot size="xs" variant="solid-ink" />
          <span className="font-body text-micro uppercase tracking-ui text-ink-faded font-medium">
            {post.readTime}
          </span>
        </div>
        <h3 className="font-display font-semibold text-display-sm text-ink leading-tight mb-2 group-hover:underline decoration-yellow decoration-2 underline-offset-4">
          {post.title}
          <Dot size="sm" variant="solid-yellow" className="ml-1 inline-block" />
        </h3>
        <p className="font-body text-body-sm text-ink-muted leading-body mb-3">
          {post.description}
        </p>
        <div className="flex items-center gap-2 flex-wrap mb-3">
          {post.tags.map((tag) => (
            <span key={tag} className="font-body text-micro uppercase tracking-ui text-ink-faded">
              {tag}
            </span>
          ))}
        </div>
        <span className="font-medium text-body-sm text-ink group-hover:text-yellow transition-colors">
          Leer post →
        </span>
      </div>
    </Link>
  )
}
