import type { Metadata } from 'next'
import { LEGAL, TEAM, siteUrl } from '@/lib/config'
import { Cabecera } from '../_components/Cabecera'
import { Cierre } from '../_components/Cierre'

const DESCRIPCION =
  'Sitiazo es un estudio independiente de diseño web basado en el Maule que atiende pymes de todo Chile de forma remota. Hacemos páginas que venden, no que impresionan.'

export const metadata: Metadata = {
  title: 'Sobre Sitiazo: estudio de diseño web en el Maule',
  description: DESCRIPCION,
  alternates: { canonical: siteUrl('/sobre/') },
  openGraph: {
    title: 'Sobre Sitiazo | Sitiazo.cl',
    description: DESCRIPCION,
    url: siteUrl('/sobre/'),
    images: [{ url: '/sitio/og/sobre.jpg', width: 1200, height: 630, alt: 'Sobre Sitiazo.cl' }],
  },
}

// La bio vive aquí y no en TEAM.bio (lib/config) para no tocar un archivo que importan los demos.
const BIO_FUNDADOR =
  'Estudiante de Ingeniería Civil en Computación en la Universidad de Talca y CEO de Sitiazo. Construyo webs como hobby y sustento para mis estudios. Hice la web de Rancho Itahue (ranchoitahue.cl) y productos propios como CVListo (cvlisto.cl) y CalculaChile. Vivo en el Maule. Disfruto de la computación, el diseño y resolver problemas con el mínimo de código posible.'

const CREENCIAS = [
  'Las pymes merecen webs profesionales sin pagar precios de agencia grande.',
  'Primero el celular: tus clientes te van a abrir desde un link de WhatsApp.',
  'WhatsApp es el mejor checkout para Chile.',
  'Una web rápida y clara vende más que una llena de adornos.',
]

const STACK = [
  { area: 'Frontend', tools: 'Next.js, React y Tailwind' },
  { area: 'Hosting', tools: 'Vercel y Cloudflare, sin sorpresas en la cuenta' },
  { area: 'Integraciones', tools: 'WhatsApp Business, Cal.com, Mercado Pago y Schema.org' },
]

export default function SobrePage() {
  const fundador = TEAM[0]
  return (
    <>
      <Cabecera
        titulo={
          <>
            Un estudio chico que diseña para <em>pymes chilenas.</em>
          </>
        }
        bajada="Estudio independiente de diseño web con base en el Maule. Atendemos pymes de todo Chile de forma remota. Hacemos páginas que venden, no que impresionan."
      />

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-24 md:py-32">
          <h2 className="s-display s-h2 mb-12">Lo que creemos.</h2>
          <ul className="grid gap-y-10 md:grid-cols-2 md:gap-x-16">
            {CREENCIAS.map((c) => (
              <li key={c} className="s-revela s-display text-[clamp(1.6rem,2.6vw,2.25rem)] leading-[1.15]">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap grid gap-10 py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
          <div>
            <h2 className="s-display s-h2">{fundador.name}.</h2>
            <p className="mt-3 text-(--s-ceniza)">
              Fundador. {LEGAL.city}, {LEGAL.region}.
            </p>
          </div>
          <p className="s-lead max-w-[60ch]">{BIO_FUNDADOR}</p>
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap grid gap-10 py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
          <h2 className="s-display s-h2">Cómo construimos.</h2>
          <dl className="grid gap-8">
            {STACK.map((s) => (
              <div key={s.area}>
                <dt className="s-mono text-(--s-ceniza)">{s.area}</dt>
                <dd className="mt-1 text-xl">{s.tools}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-24 md:py-32">
          <h2 className="s-display s-h2 max-w-[18ch]">Por qué nos llamamos así.</h2>
          <p className="s-lead mt-6 max-w-[62ch]">
            “Sitiazo” es la versión chilena de “sitio” más “azo”, como partidazo, asadazo o golazo. Un sitiazo es una
            web que la rompe: bien hecha, sin enredos, que cumple lo que promete. Eso es lo que entregamos.
          </p>
        </div>
      </section>

      <Cierre />
    </>
  )
}
