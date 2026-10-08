/**
 * app/demos/hasbu-motos/art.ts
 *
 * Siluetas de moto dibujadas a mano (vista lateral, viewBox 480×280, suelo en y=250).
 * No son fotos ni modelos reales: son ilustraciones de referencia por TIPO de moto.
 * Cada moto devuelve primitivas (ruedas, rellenos, trazos) que el componente pinta
 * con la paleta que le toque (sobre claro o sobre carbón).
 */

export type Tone = 'ink' | 'accent' | 'steel'
export type MotoKind = 'scooter' | 'naked' | 'enduro' | 'trail' | 'custom' | 'deportiva'

export type Wheel = { cx: number; cy: number; r: number; spokes: number }
export type Fill = { d: string; tone: Tone; opacity?: number }
export type Stroke = { d: string; w: number; tone: Tone }
export type MotoParts = { wheels: Wheel[]; fills: Fill[]; strokes: Stroke[] }

export const VIEW = '0 0 480 280'

/** Rayos de una rueda como un solo path (líneas desde el cubo hasta el aro). */
export function spokePath({ cx, cy, r, spokes }: Wheel): string {
  const inner = r * 0.22
  const outer = r - 11
  let d = ''
  for (let i = 0; i < spokes; i++) {
    const a = (Math.PI * 2 * i) / spokes
    const c = Math.cos(a)
    const s = Math.sin(a)
    d += `M${(cx + c * inner).toFixed(1)} ${(cy + s * inner).toFixed(1)}L${(cx + c * outer).toFixed(1)} ${(cy + s * outer).toFixed(1)}`
  }
  return d
}

const MOTOS: Record<MotoKind, MotoParts> = {
  naked: {
    wheels: [
      { cx: 104, cy: 202, r: 48, spokes: 10 },
      { cx: 382, cy: 202, r: 48, spokes: 10 },
    ],
    fills: [
      { tone: 'ink', d: 'M226 134 L304 138 L316 182 L296 200 L232 200 L214 172 Z' },
      { tone: 'steel', d: 'M236 146 L296 150 L300 160 L234 156 Z' },
      { tone: 'ink', d: 'M214 104 L156 108 C128 110 106 104 90 94 L84 106 C102 120 150 128 214 130 Z' },
      { tone: 'accent', d: 'M318 98 C304 84 262 84 232 98 C220 104 214 114 212 128 L300 132 C312 120 320 108 318 98 Z' },
      { tone: 'accent', d: 'M160 100 C132 102 108 96 88 86 L96 80 C118 90 140 92 160 90 Z' },
      { tone: 'ink', d: 'M324 90 L350 98 L346 116 L322 112 Z' },
      { tone: 'steel', d: 'M214 216 L130 214 L126 200 L214 202 Z' },
    ],
    strokes: [
      { tone: 'ink', w: 7, d: 'M326 98 L378 198' },
      { tone: 'steel', w: 11, d: 'M358 150 L383 200' },
      { tone: 'ink', w: 5, d: 'M322 94 L308 76 L292 78' },
      { tone: 'ink', w: 9, d: 'M226 178 L104 202' },
      { tone: 'accent', w: 6, d: 'M200 128 L190 180' },
      { tone: 'steel', w: 8, d: 'M300 196 C280 216 240 222 214 210' },
      { tone: 'ink', w: 5, d: 'M332 173 A58 58 0 0 1 411 152' },
    ],
  },

  scooter: {
    wheels: [
      { cx: 108, cy: 216, r: 34, spokes: 6 },
      { cx: 386, cy: 216, r: 34, spokes: 6 },
    ],
    fills: [
      { tone: 'accent', d: 'M138 108 C170 114 188 150 192 206 L160 208 C152 168 142 140 124 124 Z' },
      { tone: 'ink', d: 'M160 206 L294 206 L302 222 L168 224 Z' },
      { tone: 'accent', d: 'M290 206 C284 164 296 126 336 116 C382 106 426 128 430 176 L424 206 Z' },
      { tone: 'ink', d: 'M196 150 C236 142 296 134 350 116 L342 100 C300 98 246 112 212 128 C200 134 192 142 196 150 Z' },
      { tone: 'ink', d: 'M116 104 L146 98 L152 120 L124 128 Z' },
      { tone: 'steel', d: 'M312 222 L424 230 L424 218 L324 208 Z' },
      { tone: 'steel', d: 'M404 120 L430 124 L432 136 L406 134 Z' },
    ],
    strokes: [
      { tone: 'ink', w: 7, d: 'M138 110 L112 212' },
      { tone: 'ink', w: 6, d: 'M136 106 L128 88 L104 92' },
      { tone: 'ink', w: 14, d: 'M304 204 L384 214' },
    ],
  },

  enduro: {
    wheels: [
      { cx: 98, cy: 194, r: 56, spokes: 14 },
      { cx: 394, cy: 188, r: 62, spokes: 14 },
    ],
    fills: [
      { tone: 'accent', d: 'M356 110 C380 98 424 102 442 120 L432 130 C412 118 380 116 360 124 Z' },
      { tone: 'ink', d: 'M232 116 L300 120 L308 176 L288 196 L236 196 L220 166 Z' },
      { tone: 'steel', d: 'M240 128 L296 130 L298 142 L238 140 Z' },
      { tone: 'ink', d: 'M230 86 L132 94 C102 96 78 90 60 80 L56 92 C78 106 120 112 230 112 Z' },
      { tone: 'accent', d: 'M322 80 C300 66 262 68 236 84 C224 92 216 104 214 116 L296 120 C316 108 328 92 322 80 Z' },
      { tone: 'accent', d: 'M120 86 C96 88 74 82 58 74 L66 66 C84 74 104 76 124 74 Z' },
      { tone: 'ink', d: 'M328 70 L368 78 L362 112 L334 106 Z' },
      { tone: 'steel', d: 'M164 134 L108 112 L104 98 L164 120 Z' },
    ],
    strokes: [
      { tone: 'ink', w: 7, d: 'M334 78 L388 184' },
      { tone: 'steel', w: 10, d: 'M364 134 L390 188' },
      { tone: 'ink', w: 5, d: 'M330 74 L322 56 L304 58' },
      { tone: 'ink', w: 10, d: 'M232 174 L100 194' },
      { tone: 'accent', w: 7, d: 'M206 108 L192 176' },
      { tone: 'steel', w: 8, d: 'M296 186 C262 212 214 206 196 182 L160 136' },
    ],
  },

  trail: {
    wheels: [
      { cx: 102, cy: 194, r: 56, spokes: 14 },
      { cx: 392, cy: 194, r: 56, spokes: 14 },
    ],
    fills: [
      { tone: 'accent', d: 'M364 130 C384 118 420 122 436 140 L426 146 C410 136 386 134 372 142 Z' },
      { tone: 'ink', d: 'M230 128 L302 132 L312 180 L292 198 L236 198 L222 170 Z' },
      { tone: 'steel', d: 'M234 198 L300 198 L302 208 L232 208 Z' },
      { tone: 'ink', d: 'M212 100 L150 102 C128 102 112 96 96 86 L90 102 C106 120 150 128 212 130 Z' },
      { tone: 'accent', d: 'M314 100 C298 82 250 82 222 96 C210 104 204 116 204 130 L302 134 C318 122 322 112 314 100 Z' },
      { tone: 'accent', d: 'M310 98 C326 82 352 82 364 94 L368 122 L328 126 Z' },
      { tone: 'steel', opacity: 0.55, d: 'M316 92 L300 50 L330 54 L338 88 Z' },
      { tone: 'ink', d: 'M134 78 L64 78 L60 88 L130 92 Z' },
      { tone: 'accent', d: 'M134 54 L70 54 L64 80 L130 84 Z' },
    ],
    strokes: [
      { tone: 'ink', w: 7, d: 'M330 100 L386 190' },
      { tone: 'steel', w: 10, d: 'M360 140 L388 190' },
      { tone: 'ink', w: 5, d: 'M326 92 L314 74 L298 76' },
      { tone: 'ink', w: 10, d: 'M232 176 L104 194' },
      { tone: 'accent', w: 7, d: 'M196 134 L188 180' },
      { tone: 'steel', w: 8, d: 'M296 192 C266 214 220 210 204 190 L170 150' },
      { tone: 'steel', w: 16, d: 'M170 150 L126 120' },
    ],
  },

  custom: {
    wheels: [
      { cx: 90, cy: 202, r: 48, spokes: 12 },
      { cx: 418, cy: 202, r: 48, spokes: 12 },
    ],
    fills: [
      { tone: 'ink', d: 'M240 134 L330 134 L340 168 L322 196 L252 196 L236 168 Z' },
      { tone: 'steel', d: 'M252 138 L234 164 L252 172 L270 144 Z' },
      { tone: 'steel', d: 'M322 138 L342 164 L324 172 L306 144 Z' },
      { tone: 'accent', d: 'M352 102 C332 82 282 84 250 102 C234 112 230 126 240 134 L318 134 C342 128 360 116 352 102 Z' },
      { tone: 'ink', d: 'M240 114 L192 126 C166 132 142 132 120 124 L116 138 C142 150 192 150 246 140 Z' },
      { tone: 'accent', d: 'M96 156 C84 132 112 118 150 122 L146 134 C122 134 112 144 114 158 Z' },
      { tone: 'ink', d: 'M378 158 C398 142 438 146 462 168 L456 178 C434 162 406 160 388 172 Z' },
      { tone: 'ink', d: 'M350 102 a15 15 0 1 1 30 0 a15 15 0 1 1 -30 0 Z' },
    ],
    strokes: [
      { tone: 'ink', w: 7, d: 'M358 110 L414 198' },
      { tone: 'steel', w: 11, d: 'M392 160 L416 200' },
      { tone: 'ink', w: 5, d: 'M354 96 C342 80 328 66 308 68' },
      { tone: 'ink', w: 9, d: 'M242 182 L94 202' },
      { tone: 'steel', w: 9, d: 'M332 192 C300 214 200 218 122 206' },
      { tone: 'steel', w: 9, d: 'M322 178 C294 200 210 204 134 194' },
      { tone: 'accent', w: 5, d: 'M178 140 L168 186' },
    ],
  },

  deportiva: {
    wheels: [
      { cx: 108, cy: 204, r: 46, spokes: 10 },
      { cx: 388, cy: 204, r: 46, spokes: 10 },
    ],
    fills: [
      { tone: 'ink', d: 'M250 150 L320 172 L330 198 L300 206 L250 206 L236 180 Z' },
      { tone: 'ink', d: 'M268 102 C244 94 214 98 196 108 L170 114 C140 114 106 106 66 88 L60 100 C100 124 170 130 262 136 Z' },
      { tone: 'accent', d: 'M192 110 C150 116 100 104 62 86 L70 76 C100 82 150 90 192 94 Z' },
      { tone: 'accent', d: 'M270 102 C246 92 214 96 196 108 C192 118 194 128 202 132 L262 136 Z' },
      { tone: 'accent', d: 'M408 154 C390 124 354 98 324 72 L302 74 C298 86 290 96 272 102 L264 150 C292 178 342 188 384 178 Z' },
      { tone: 'steel', opacity: 0.55, d: 'M324 72 L302 74 C298 82 292 90 284 94 L312 96 C324 88 328 80 324 72 Z' },
      { tone: 'ink', d: 'M300 206 L212 198 L132 178 L128 168 L214 184 L300 196 Z' },
    ],
    strokes: [
      { tone: 'steel', w: 9, d: 'M368 180 L388 203' },
      { tone: 'ink', w: 9, d: 'M244 186 L110 204' },
      { tone: 'accent', w: 6, d: 'M204 120 L192 182' },
      { tone: 'ink', w: 5, d: 'M360 160 A52 52 0 0 1 430 176' },
    ],
  },
}

export function motoParts(kind: MotoKind): MotoParts {
  return MOTOS[kind]
}
