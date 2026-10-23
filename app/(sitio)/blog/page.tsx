import type { Metadata } from 'next'
import { siteUrl } from '@/lib/config'
import { posts } from '@/content/posts'
import { Cabecera } from '../_components/Cabecera'
import { Cierre } from '../_components/Cierre'
import { Enlace } from '../_components/Enlace'

const DESCRIPCION =
  'Notas sobre diseño web, pymes y vender en internet. Para emprendedores chilenos que quieren entender su negocio online.'

export const metadata: Metadata = {
  title: 'Blog: diseño web y ventas online para pymes',
  description: DESCRIPCION,
  alternates: { canonical: siteUrl('/blog/') },
  openGraph: {
    title: 'Notas | Sitiazo.cl',
    description: DESCRIPCION,
    url: siteUrl('/blog/'),
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Notas de Sitiazo.cl' }],
  },
}

/** "8 MIN" → "8 min de lectura" */
const lectura = (t: string) => `${t.toLowerCase()} de lectura`

export default function BlogPage() {
  return (
    <>
      <Cabecera
        titulo={
          <>
            Notas sobre web, pymes y <em>vender por internet.</em>
          </>
        }
        bajada="Lo que aprendemos armando webs para negocios chilenos, escrito para dueños, no para programadores."
      />

      <section className="s-wrap pb-24 md:pb-32">
        <div className="border-b border-(--s-linea)">
          {posts.map((p) => (
            <Enlace
              key={p.slug}
              href={`/blog/${p.slug}/`}
              className="group grid gap-4 border-t border-(--s-linea) py-10 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <p className="s-mono text-(--s-ceniza)">
                {p.date}
                <br />
                {lectura(p.readTime)}
              </p>
              <div>
                <h2 className="s-display text-[clamp(1.85rem,3.4vw,3rem)] leading-[1.08] group-hover:italic">
                  {p.title.replace(/\.$/, '')}
                </h2>
                <p className="mt-3 max-w-[62ch] text-(--s-crema-2)">{p.description}</p>
              </div>
            </Enlace>
          ))}
        </div>
      </section>

      <Cierre />
    </>
  )
}
