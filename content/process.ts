/**
 * content/process.ts
 *
 * Proceso de trabajo de Sitiazo (4 pasos).
 */

export interface ProcessStep {
  number: string
  title: string
  desc: string
  time: string
  image: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Brief express',
    desc: 'Nos mandas WhatsApp + referencias.',
    time: 'Día 1',
    image: '/images/still-lifes/step-brief-express.webp',
  },
  {
    number: '02',
    title: 'Diseño claro',
    desc: 'Orden, textos y estructura.',
    time: 'Día 2-3',
    image: '/images/still-lifes/step-diseno-claro.webp',
  },
  {
    number: '03',
    title: 'Desarrollo',
    desc: 'Lo armamos y afinamos contigo.',
    time: 'Día 4-7',
    image: '/images/still-lifes/step-desarrollo.webp',
  },
  {
    number: '04',
    title: 'Publicación',
    desc: 'Sale online en 7 días.',
    time: 'Día 7',
    image: '/images/still-lifes/step-publicacion.webp',
  },
]
