import type { Metadata } from 'next'
import { CalendarBlank, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { CONTACT, LEGAL, SITE, calLink, siteUrl, whatsappLink } from '@/lib/config'
import { contactFaqs, faqJsonLd } from '@/content/faqs'
import { Cabecera } from '../_components/Cabecera'
import { Preguntas } from '../_components/Preguntas'

const DESCRIPCION =
  'Cotiza la página web de tu negocio: WhatsApp directo o una llamada de 30 minutos por Google Meet. Respondemos en horas hábiles.'

export const metadata: Metadata = {
  title: 'Contacto: cotiza la página web de tu pyme',
  description: DESCRIPCION,
  alternates: { canonical: siteUrl('/contacto/') },
  openGraph: {
    title: 'Contacto | Sitiazo.cl',
    description: DESCRIPCION,
    url: siteUrl('/contacto/'),
    images: [{ url: '/sitio/og/contacto.jpg', width: 1200, height: 630, alt: 'Contacto de Sitiazo.cl' }],
  },
}

const faqJsonLdData = faqJsonLd(contactFaqs)

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: siteUrl('/contacto/'),
  description: 'Contacta a Sitiazo.cl por WhatsApp o agenda una llamada por Google Meet.',
  mainEntity: {
    '@type': 'ProfessionalService',
    name: `${SITE.name}.${SITE.domain.split('.')[1]}`,
    description: SITE.description,
    url: SITE.url,
    telephone: CONTACT.telephone,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'WhatsApp',
        telephone: CONTACT.telephone,
        url: whatsappLink('contacto'),
      },
    ],
  },
}

export default function ContactoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }} />

      <Cabecera
        titulo={
          <>
            Hablemos de <em>tu negocio.</em>
          </>
        }
        bajada="Escríbenos por WhatsApp o agenda 30 minutos por Google Meet. Respondemos en horas hábiles, sin venta agresiva."
      />

      <section className="s-wrap grid gap-5 pb-24 md:grid-cols-[1.2fr_1fr] md:pb-32">
        <a
          href={whatsappLink('contacto')}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between gap-12 rounded-3xl bg-(--s-amarillo) p-7 text-(--s-tinta) md:p-10"
        >
          <WhatsappLogo size={36} weight="regular" aria-hidden="true" />
          <div>
            <p className="s-display text-[clamp(2.25rem,4vw,3.5rem)] leading-none">WhatsApp</p>
            <p className="mt-3 text-lg font-semibold">{CONTACT.whatsappDisplay}</p>
            <p className="mt-1 opacity-80">El camino más rápido. Cuéntanos qué vendes y te respondemos.</p>
          </div>
        </a>
        <a
          href={calLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between gap-12 rounded-3xl border border-(--s-linea) p-7 transition-colors hover:border-(--s-crema-2) md:p-10"
        >
          <CalendarBlank size={36} weight="regular" aria-hidden="true" />
          <div>
            <p className="s-display text-[clamp(2.25rem,4vw,3.5rem)] leading-none">Agenda 30 min</p>
            <p className="mt-3 text-(--s-crema-2)">Una llamada por Google Meet para revisar tu proyecto con calma.</p>
          </div>
        </a>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap grid gap-12 py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
          <div>
            <h2 className="s-display s-h2">Estamos en el Maule.</h2>
            <p className="s-lead mt-5">
              Trabajamos desde {LEGAL.city}, {LEGAL.region}, y atendemos pymes de todo Chile de forma remota.
            </p>
          </div>
          <Preguntas items={contactFaqs} />
        </div>
      </section>
    </>
  )
}
