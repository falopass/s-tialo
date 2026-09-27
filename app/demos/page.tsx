import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, whatsappLink } from '@/lib/config'
import { DEMOS } from './data'
import { Motif, headingFont } from './kit'

// Mockups personalizados para leads reales (carpeta propia en /demos).
const BLITZ = [
  {
    slug: 'triadent',
    name: 'Clínica Dental Triadent',
    rubro: 'Clínica dental',
    city: 'Talca',
    tagline: 'Clínico premium y luminoso: menta y azul profundo.',
    gradient: 'linear-gradient(135deg, #0F3B57 0%, #1D9E8E 140%)',
  },
  {
    slug: 'one-health',
    name: 'One Health',
    rubro: 'Centro veterinario',
    city: 'Maule',
    tagline: 'Amable y moderno: salvia, durazno y crema.',
    gradient: 'linear-gradient(135deg, #4E6B50 0%, #F2B48C 140%)',
  },
  {
    slug: 'homyvet',
    name: 'Clínica Veterinaria Homyvet',
    rubro: 'Clínica veterinaria',
    city: 'Talca',
    tagline: 'Hogar y cuidado: mostaza, azul marino y hueso.',
    gradient: 'linear-gradient(135deg, #1E2C4E 0%, #D9A02B 140%)',
  },
  {
    slug: 'altos-de-lircay',
    name: 'Altos de Lircay',
    rubro: 'Clínica dental',
    city: 'San Clemente',
    tagline: 'Cercano y natural: verde bosque y cobre.',
    gradient: 'linear-gradient(135deg, #16342A 0%, #B4643C 140%)',
  },
  {
    slug: 'jd-abogados',
    name: 'J&D Abogados',
    rubro: 'Estudio jurídico',
    city: 'Talca',
    tagline: 'Serio y elegante: grafito y dorado apagado.',
    gradient: 'linear-gradient(135deg, #1B1E22 0%, #A5885A 140%)',
  },
  {
    slug: 'santa-fe',
    name: 'Ingeniería y Construcciones Santa Fe',
    rubro: 'Constructora',
    city: 'Talca',
    tagline: 'Industrial sólido: acero y naranjo de seguridad.',
    gradient: 'linear-gradient(135deg, #16191D 0%, #E8631A 140%)',
  },
  {
    slug: 'rancho-itahue',
    name: 'Rancho Itahue',
    rubro: 'Agroturismo y eventos',
    city: 'Molina',
    tagline: 'Editorial de campo: verde bosque, hueso y ámbar, con fotos.',
    gradient: 'linear-gradient(135deg, #12231A 0%, #B97E33 140%)',
  },
  {
    slug: 'panaderia-bravo',
    name: 'Panadería Bravo',
    rubro: 'Panadería y pastelería',
    city: 'Molina',
    tagline: 'Pan de verdad: crema de masa, chocolate y dorado de horno.',
    gradient: 'linear-gradient(135deg, #2E1C0E 0%, #D59A33 140%)',
  },
  {
    slug: 'vivero-dona-ines',
    name: 'Vivero Doña Inés',
    rubro: 'Vivero y plantas',
    city: 'Molina',
    tagline: 'El vivero de siempre: verde hoja, terracota y crema, con fotos.',
    gradient: 'linear-gradient(135deg, #24381F 0%, #C1663F 140%)',
  },
  {
    slug: 'barberia-rulos-style-barberia-curico',
    name: 'Barbería Rulos Style',
    rubro: 'Barbería',
    city: 'Curicó',
    tagline: 'Bento industrial y directo: naranja construcción, hormigón y arena, con fotos.',
    gradient: 'linear-gradient(135deg, #26292D 0%, #E4572E 140%)',
  },
  {
    slug: 'lua-nails',
    name: 'Lua Nails Home',
    rubro: 'Manicure y uñas',
    city: 'Talca',
    tagline: 'Delicado y premium: rosa empolvado, berenjena y dorado suave.',
    gradient: 'linear-gradient(135deg, #4A1F33 0%, #C9A227 140%)',
  },
  {
    slug: 'wow-park',
    name: 'Wow Park Talca',
    rubro: 'Parque infantil y cumpleaños',
    city: 'Talca',
    tagline: 'Juguetón y familiar: azul confiable, amarillo festivo y coral.',
    gradient: 'linear-gradient(135deg, #0E2F5E 0%, #1E6FD9 55%, #FF6B4A 140%)',
  },
  {
    slug: 'matrokin',
    name: 'Matrokin SPA',
    rubro: 'Spa y terapias',
    city: 'Molina',
    tagline: 'Calmo y natural: verde salvia, arena y carbón.',
    gradient: 'linear-gradient(135deg, #2B2B27 0%, #7C8F7B 140%)',
  },
  {
    slug: 'sigel',
    name: 'Eléctrico Domiciliario Sigel',
    rubro: 'Electricista a domicilio',
    city: 'Talca',
    tagline: 'Técnico y directo: azul eléctrico, grafito y amarillo de seguridad.',
    gradient: 'linear-gradient(135deg, #15171C 0%, #1B4DFF 140%)',
  },
  {
    slug: 'zamono',
    name: 'Lubricentro Zamono',
    rubro: 'Lavado y lubricentro',
    city: 'Molina',
    tagline: 'Limpio y rápido: azul agua, grafito y blanco.',
    gradient: 'linear-gradient(135deg, #1C1F22 0%, #00A6C4 140%)',
  },
  {
    slug: 'salon-de-belleza-gabriela-saavedra-talca',
    name: 'Salón de Belleza Gabriela Saavedra',
    rubro: 'Centro de estética',
    city: 'Talca',
    tagline: 'Sobrio y de confianza: verde bosque, crema y latón, en bloques partidos.',
    gradient: 'linear-gradient(135deg, #1E3D2F 0%, #C8A24B 140%)',
  },
  {
    slug: 'centro-spa-roxana',
    name: 'Centro Spa Roxana',
    rubro: 'Centro de estética',
    city: 'Curicó',
    tagline: 'Editorial de revista: petróleo, menta y blanco roto, con fotos.',
    gradient: 'linear-gradient(135deg, #0A3742 0%, #0E4C5C 55%, #9FD8CB 140%)',
  },
  {
    slug: 'clinica-y-farmacia-veterinaria-angel-guardian',
    name: 'Clínica y Farmacia Veterinaria Ángel Guardián',
    rubro: 'Clínica y farmacia veterinaria',
    city: 'Linares',
    tagline: 'Inmersivo y cálido: vino, hueso y oro viejo, con fotos a sangre.',
    gradient: 'linear-gradient(135deg, #4A1A26 0%, #B98B4E 140%)',
  },
  {
    slug: 'las-viejas-cochinas',
    name: 'Las Viejas Cochinas',
    rubro: 'Restaurante',
    city: 'Talca',
    tagline: 'Panel de datos cumplidor: rojo, gris flota y naranja señal, con fotos.',
    gradient: 'linear-gradient(135deg, #4A4E52 0%, #C1272D 140%)',
  },
  {
    slug: 'csf-especialidades-veterinarias-san-francisco',
    name: 'CSF Especialidades Veterinarias',
    rubro: 'Clínica veterinaria',
    city: 'Talca',
    tagline: 'Brutalista industrial: azul eléctrico, lima y negro, retícula de obra con fotos.',
    gradient: 'linear-gradient(135deg, #0E0E0E 0%, #2251FF 55%, #C6F24E 140%)',
  },
  {
    slug: 'emporio-vintage-cafe',
    name: 'Emporio Vintage Café',
    rubro: 'Cafetería',
    city: 'Talca',
    tagline: 'Carta tipográfica de cafetería: verde emporio, crema y ámbar, con puntos guía.',
    gradient: 'linear-gradient(135deg, #173E32 0%, #2A7F62 55%, #E8A33D 140%)',
  },
  {
    slug: 'plantitas-ya-vivero-romeral-ventas-de-plantas-y-',
    name: 'Plantitas Yá! & Vivero Romeral',
    rubro: 'Vivero y venta de plantas',
    city: 'Romeral',
    tagline: 'Directorio funcional: azul petróleo, menta y blanco roto, con fotos.',
    gradient: 'linear-gradient(135deg, #093341 0%, #0E4C5C 55%, #9FD8CB 140%)',
  },
]

export const metadata: Metadata = {
  title: 'Demos por rubro — ejemplos de sitios para pymes',
  description:
    'Ejemplos de páginas web para pymes por rubro: escuela de conductores, veterinaria, vivero, óptica, cabañas, ferretería, dental, gasfitería, agencia de publicidad, contador, grúas y vidriería.',
}

export default function DemosIndex() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-4">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-ui text-ink-muted hover:text-ink transition-colors"
        >
          ← sitiazo.cl
        </Link>
      </header>

      <main className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <div className="py-10 md:py-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-ui text-ink-muted mb-4">
            Ejemplos listos para enviar
          </p>
          <h1 className="font-display text-display-md md:text-display-lg font-bold leading-display tracking-display mb-5">
            Demos por rubro
          </h1>
          <p className="text-body text-ink-muted leading-body">
            {DEMOS.length} mini-sitios de ejemplo, cada uno pensado como un
            negocio real del Maule. Cuando una pyme pregunte «¿me mandas un
            ejemplo de mi rubro?», este es el link.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEMOS.map((d) => (
            <li key={d.slug}>
              <Link
                href={`/demos/${d.slug}`}
                className="group block border border-divider bg-white overflow-hidden h-full transition-shadow hover:shadow-md focus-visible:shadow-md"
              >
                <div
                  className="relative h-[112px] flex items-end p-4"
                  style={{
                    background: `linear-gradient(135deg, ${d.theme.accent} 0%, ${d.theme.soft} 140%)`,
                  }}
                >
                  <Motif
                    motif={d.motif}
                    className="absolute top-3 right-3 w-[40px] opacity-30"
                  />
                  <span
                    className={`${headingFont(d.theme)} text-lg leading-tight drop-shadow-sm`}
                    style={{ color: '#fff' }}
                  >
                    {d.name}
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-ui text-ink-muted mb-1">
                    {d.rubro} · {d.city}
                  </p>
                  <p className="text-body-sm text-ink-muted leading-snug mb-3">
                    {d.tagline}
                  </p>
                  <span className="font-body text-body-sm font-medium text-ink underline decoration-yellow decoration-2 underline-offset-4">
                    Ver demo →
                  </span>
                </div>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/demos/cabanas-la-quebrada"
              className="group block border border-divider bg-white overflow-hidden h-full transition-shadow hover:shadow-md focus-visible:shadow-md"
            >
              <div
                className="relative h-[112px] flex items-end p-4"
                style={{
                  background:
                    'linear-gradient(135deg, #0E241B 0%, #173A2B 55%, #C4704B 140%)',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="absolute top-3 right-3 w-[40px] opacity-30"
                  fill="none"
                  stroke="#FAF7F0"
                  strokeWidth="1.4"
                  aria-hidden="true"
                >
                  <path d="M3 19 L9 7 L13 14 L16 9 L21 19 Z" />
                  <circle cx="17.5" cy="5" r="1.8" />
                </svg>
                <span className="font-display font-bold tracking-display text-lg leading-tight text-[#FAF7F0] drop-shadow-sm">
                  Cabañas La Quebrada
                </span>
              </div>
              <div className="p-4">
                <p className="font-mono text-[10px] uppercase tracking-ui text-ink-muted mb-1">
                  Cabañas · Talca · lead real
                </p>
                <p className="text-body-sm text-ink-muted leading-snug mb-3">
                  Mockup premium con identidad propia: refugio natural del Maule.
                </p>
                <span className="font-body text-body-sm font-medium text-ink underline decoration-yellow decoration-2 underline-offset-4">
                  Ver demo →
                </span>
              </div>
            </Link>
          </li>
        </ul>

        <div className="mt-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-display tracking-display mb-2">
            Mockups para leads reales
          </h2>
          <p className="text-body-sm text-ink-muted leading-snug mb-6 max-w-xl">
            Muestras personalizadas con identidad propia, armadas solo con
            datos públicos de cada ficha de Google.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLITZ.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/demos/${d.slug}`}
                  className="group block border border-divider bg-white overflow-hidden h-full transition-shadow hover:shadow-md focus-visible:shadow-md"
                >
                  <div
                    className="relative h-[112px] flex items-end p-4"
                    style={{ background: d.gradient }}
                  >
                    <span className="font-display font-bold tracking-display text-lg leading-tight text-white drop-shadow-sm">
                      {d.name}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="font-mono text-[10px] uppercase tracking-ui text-ink-muted mb-1">
                      {d.rubro} · {d.city} · lead real
                    </p>
                    <p className="text-body-sm text-ink-muted leading-snug mb-3">
                      {d.tagline}
                    </p>
                    <span className="font-body text-body-sm font-medium text-ink underline decoration-yellow decoration-2 underline-offset-4">
                      Ver demo →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 pt-8 border-t border-divider flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <p className="text-body-sm text-ink-muted">
            ¿Quieres una así para tu negocio? Escríbenos y la conversamos.
          </p>
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-body text-body-sm font-semibold bg-ink text-cream px-5 py-2.5 transition-transform active:scale-95"
          >
            Hablar con {SITE.name} →
          </a>
        </div>
      </main>
    </div>
  )
}
