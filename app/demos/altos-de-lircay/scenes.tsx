/**
 * app/demos/altos-de-lircay/scenes.tsx
 *
 * Arte SVG del mockup (sin fotos externas): valle del Maule con
 * montañas en verde bosque, sol cobre y un río. Decorativo.
 */

const C = {
  sky: '#F4EFE4',
  skyDeep: '#EADFC9',
  copper: '#B4643C',
  copperSoft: '#D89672',
  forest: '#24503A',
  forestMid: '#3A6B4F',
  forestSoft: '#6E9478',
  forestDeep: '#16342A',
  river: '#8FB4A2',
}

export function ValleyScene({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="al-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.sky} />
          <stop offset="100%" stopColor={C.skyDeep} />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#al-sky)" />
      {/* sol cobre */}
      <circle cx="880" cy="230" r="95" fill={C.copper} opacity="0.9" />
      <circle cx="880" cy="230" r="140" fill={C.copperSoft} opacity="0.25" />
      {/* cordillera lejana */}
      <path
        d="M0 430 L170 260 L320 380 L470 220 L640 400 L800 300 L960 430 L1120 330 L1200 400 L1200 800 L0 800 Z"
        fill={C.forestSoft}
        opacity="0.55"
      />
      {/* cerros medios */}
      <path
        d="M0 540 L220 380 L420 520 L640 360 L860 540 L1040 430 L1200 520 L1200 800 L0 800 Z"
        fill={C.forestMid}
        opacity="0.85"
      />
      {/* primer plano */}
      <path
        d="M0 640 C 200 580 380 690 600 630 C 800 575 1000 680 1200 610 L1200 800 L0 800 Z"
        fill={C.forest}
      />
      <path
        d="M0 730 C 260 690 520 760 780 720 C 980 690 1120 735 1200 715 L1200 800 L0 800 Z"
        fill={C.forestDeep}
      />
      {/* río que serpentea */}
      <path
        d="M560 640 C 540 690 620 720 590 800 L690 800 C 700 740 640 700 660 640 Z"
        fill={C.river}
        opacity="0.85"
      />
      {/* pinos primer plano */}
      <g fill={C.forestDeep}>
        {[
          [140, 690, 34],
          [215, 705, 26],
          [95, 715, 22],
          [1010, 680, 32],
          [1075, 700, 24],
        ].map(([x, y, s], i) => (
          <path key={i} d={`M${x} ${y} l${s * 0.55} -${s} l${s * 0.55} ${s} Z M${x + s * 0.5} ${y} v${s * 0.3}`} stroke={C.forestDeep} strokeWidth="2" />
        ))}
      </g>
    </svg>
  )
}
