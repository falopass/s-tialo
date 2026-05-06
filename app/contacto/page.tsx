import type { Metadata } from 'next'
import { Dot } from '@/components/ui/Dot'
import { Tag } from '@/components/ui/Tag'
import { SecondaryButton } from '@/components/ui/SecondaryButton'
import { StillLifeImage } from '@/components/ui/StillLifeImage'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { whatsappLink, emailLink, calLink } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Hablemos sobre tu proyecto web. Respondemos en 24 horas. WhatsApp, Email o agenda una llamada por Google Meet.',
  alternates: {
    canonical: 'https://sitiazo.cl/contacto/',
  },
  openGraph: {
    title: 'Contacto | Sitiazo.cl',
    description:
      'Hablemos sobre tu proyecto web. Respondemos en 24 horas. WhatsApp, Email o agenda una llamada por Google Meet.',
    url: 'https://sitiazo.cl/contacto/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contacto — Sitiazo.cl',
      },
    ],
  },
}

const faqRapido = [
  {
    question: '¿Cuánto demora la respuesta?',
    answer:
      'WhatsApp: en horas. Email: en 24 horas laborales. Llamada por Cal.com: agenda directo según disponibilidad.',
  },
  {
    question: '¿Atienden fuera del Maule?',
    answer:
      'Sí, todo Chile. El proceso es 100% online. Hemos trabajado con clientes desde Arica hasta Punta Arenas.',
  },
  {
    question: '¿Hacen presupuesto sin compromiso?',
    answer:
      'Sí. Conversamos 30 min, te mando propuesta clara en 24 hrs. Si no te tinca, todo bien. Sin venta agresiva, sin follow-ups molestos.',
  },
]

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[var(--spacing-9)] md:pt-[var(--spacing-10)] pb-[var(--spacing-6)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="max-w-[var(--prose-max)] mb-8">
            <h1 className="font-display font-bold text-hero text-ink leading-display tracking-display mb-6">
              Hablemos.<Dot size="hero" variant="solid-yellow" />
            </h1>
            <p className="font-body text-lead text-ink-muted leading-body">
              Cuéntanos sobre tu negocio. Te respondemos en 24 horas (laborales).
              Sin formularios eternos, sin venta agresiva.
            </p>
          </div>

          {/* 3 contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card A — WhatsApp (highlighted) */}
            <div className="bg-yellow border-2 border-ink px-[var(--spacing-6)] py-[var(--spacing-7)] flex flex-col">
              <Dot size="lg" variant="solid-ink" className="mb-4" />
              <h2 className="font-display font-bold text-display-sm text-ink leading-display mb-3">
                WhatsApp.
              </h2>
              <p className="font-body text-body text-ink mb-1">
                {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+56 9 0000 0000'}
              </p>
              <p className="font-body text-body-sm text-ink-muted mb-6">
                Lo más rápido. Respuesta en horas.
              </p>
              <div className="mt-auto">
                <a
                  href={whatsappLink('contacto')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ink text-cream font-medium text-body px-8 py-4 hover:bg-ink-soft transition-colors duration-200 group"
                >
                  Abrir WhatsApp
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Card B — Email */}
            <div className="bg-cream border border-border-subtle px-[var(--spacing-6)] py-[var(--spacing-7)] flex flex-col">
              <Dot size="lg" variant="solid-yellow" className="mb-4" />
              <h2 className="font-display font-bold text-display-sm text-ink leading-display mb-3">
                Email.
              </h2>
              <p className="font-body text-body text-ink mb-1">
                hola@sitiazo.cl
              </p>
              <p className="font-body text-body-sm text-ink-muted mb-6">
                Para propuestas detalladas o brief largo.
              </p>
              <div className="mt-auto">
                <SecondaryButton href={emailLink('Proyecto web')} external>
                  Mandar correo
                </SecondaryButton>
              </div>
            </div>

            {/* Card C — Cal.com */}
            <div className="bg-cream border border-border-subtle px-[var(--spacing-6)] py-[var(--spacing-7)] flex flex-col">
              <Dot size="lg" variant="solid-yellow" className="mb-4" />
              <h2 className="font-display font-bold text-display-sm text-ink leading-display mb-3">
                Agenda 30 min.
              </h2>
              <p className="font-body text-body-sm text-ink-muted mb-6">
                Llamada por Google Meet. Sin costo, sin compromiso.
              </p>
              <div className="mt-auto">
                <SecondaryButton href={calLink()} external>
                  Ver disponibilidad
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HairlineDivider />

      {/* Estamos en el Maule */}
      <section className="py-[var(--spacing-6)] md:py-[var(--spacing-7)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-9)]">
            <div>
              <h2 className="font-display font-bold text-display-lg text-ink leading-display tracking-display mb-6">
                Estamos en<br />el Maule.<Dot size="lg" variant="solid-yellow" />
              </h2>
              <p className="font-body text-body text-ink-muted leading-body max-w-[var(--prose-max)]">
                Trabajamos desde Curicó y Talca, pero atendemos proyectos en todo Chile.
                El proceso es 100% online: WhatsApp + Google Meet. Si estás en el Maule
                y quieres juntarte cara a cara, dale, te invito un café.
              </p>

              <StillLifeImage
                src="/images/still-lifes/contacto.png"
                alt="Composición editorial de contacto con smartphone, tarjeta y punto amarillo"
                aspectRatio="1:1"
                figLabel="fig. 01 — contacto"
                className="mt-8 max-w-sm"
              />
            </div>

            <div>
              <h3 className="font-display font-bold text-display-sm text-ink mb-6">
                FAQ rápido.
              </h3>
              <div className="space-y-4">
                {faqRapido.map((faq, i) => (
                  <div key={i} className="border-b border-divider pb-4">
                    <p className="font-body text-body-sm font-medium text-ink mb-1">
                      {faq.question}
                    </p>
                    <p className="font-body text-body-sm text-ink-muted leading-body">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
