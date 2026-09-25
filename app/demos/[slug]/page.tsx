import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DEMOS, getDemo } from '../data'
import {
  DemoHeader,
  DemoHero,
  InfoStrip,
  DemoSections,
  Testimonials,
  Faq,
  DemoFooter,
  DemoBand,
  WhatsAppFab,
  themeStyle,
  headingFont,
  waLink,
} from '../kit'
import { DemoForm } from '../form'

// Export estático: solo los slugs conocidos.
export const dynamicParams = false

export function generateStaticParams() {
  return DEMOS.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const demo = getDemo(slug)
  if (!demo) return {}
  return {
    title: demo.meta.title,
    description: demo.meta.description,
  }
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const demo = getDemo(slug)
  if (!demo) notFound()

  const t = demo.theme

  return (
    <div
      className="min-h-screen font-body"
      style={themeStyle(t)}
    >
      <DemoHeader demo={demo} />
      <DemoHero demo={demo} />
      <InfoStrip demo={demo} />
      <DemoSections demo={demo} />
      <Testimonials demo={demo} />
      <Faq demo={demo} />

      {/* Contacto */}
      <section
        id="contacto"
        className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20"
      >
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2
              className={`${headingFont(t)} text-2xl md:text-4xl leading-tight mb-3`}
            >
              Hablemos
            </h2>
            <p
              className="text-sm md:text-base mb-8 leading-relaxed"
              style={{ color: t.muted }}
            >
              Escríbenos y te respondemos el mismo día. También puedes llamar o
              visitarnos directamente.
            </p>
            <DemoForm demo={demo} />
          </div>
          <aside
            className="p-6 md:p-8 border self-start"
            style={{
              backgroundColor: t.soft,
              borderColor: t.line,
              borderRadius: t.radius,
            }}
          >
            <p
              className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4"
              style={{ color: t.muted }}
            >
              Datos de contacto
            </p>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold mb-0.5">Dirección</dt>
                <dd style={{ color: t.muted }}>
                  {demo.address === demo.city
                    ? demo.city
                    : `${demo.address}, ${demo.city}`}
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-0.5">Teléfono</dt>
                <dd>
                  <a
                    href={`tel:${demo.phone.replace(/\s/g, '')}`}
                    className="underline underline-offset-2"
                  >
                    {demo.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-0.5">Horario</dt>
                <dd>
                  <ul className="space-y-1" style={{ color: t.muted }}>
                    {demo.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-6">
                        <span>{h.days}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            <a
              href={waLink(demo)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center font-semibold text-sm px-6 py-3 transition-transform active:scale-[0.98]"
              style={{
                backgroundColor: t.accent,
                color: t.accentInk,
                borderRadius: t.radius,
              }}
            >
              WhatsApp directo
            </a>
          </aside>
        </div>
      </section>

      <DemoFooter demo={demo} />
      <WhatsAppFab demo={demo} />
      <DemoBand demo={demo} />
    </div>
  )
}
