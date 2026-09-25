/**
 * app/demos/homyvet/scenes.tsx
 *
 * Arte SVG del mockup (sin fotos externas): collage de tres paneles
 * ilustrados en la paleta hueso, mostaza y azul marino. Decorativo.
 */

const C = {
  bone: '#F7F2E7',
  boneDeep: '#EDE4D2',
  mustard: '#D9A02B',
  mustardSoft: '#F0D9A8',
  navy: '#1E2C4E',
  navySoft: '#2C3E66',
  cream: '#FCFAF4',
}

/** Panel 1: casa con mascota (escena hogar) */
export function HomePanel({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 380"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="300" height="380" fill={C.boneDeep} />
      <circle cx="230" cy="80" r="42" fill={C.mustard} opacity="0.85" />
      {/* casa */}
      <g transform="translate(70 150)">
        <path d="M-20 60 L80 -30 L180 60 Z" fill={C.navy} />
        <rect x="0" y="60" width="160" height="110" fill={C.cream} />
        <rect x="18" y="90" width="34" height="34" rx="4" fill={C.mustardSoft} />
        <rect x="108" y="90" width="34" height="34" rx="4" fill={C.mustardSoft} />
        <rect x="64" y="96" width="32" height="74" rx="4" fill={C.navySoft} />
      </g>
      {/* perro sentado, silueta */}
      <g transform="translate(212 300)" fill={C.navy}>
        <ellipse cx="0" cy="14" rx="26" ry="22" />
        <circle cx="14" cy="-14" r="15" />
        <path d="M4 -22 l-8 -12 12 5 Z" />
        <path d="M22 -24 l4 -13 7 11 Z" />
        <path d="M-24 22 q-16 2 -14 -14" fill="none" stroke={C.navy} strokeWidth="6" strokeLinecap="round" />
      </g>
      {/* pasto */}
      <path d="M0 340 C 80 322 190 356 300 334 L300 380 L0 380 Z" fill={C.mustardSoft} />
    </svg>
  )
}

/** Panel 2: huella sobre arco mostaza */
export function PawPanel({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 190"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="300" height="190" fill={C.mustard} />
      <path d="M0 190 A150 150 0 0 1 300 190 Z" fill={C.mustardSoft} opacity="0.55" />
      <g transform="translate(150 108) scale(4.6)" fill={C.navy}>
        <ellipse cx="0" cy="3.5" rx="4.6" ry="3.6" />
        <circle cx="-5.6" cy="-2.4" r="1.7" />
        <circle cx="0" cy="-4.6" r="1.7" />
        <circle cx="5.6" cy="-2.4" r="1.7" />
      </g>
    </svg>
  )
}

/** Panel 3: corazón navy */
export function HeartPanel({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 190"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="300" height="190" fill={C.navy} />
      <g fill="none" stroke={C.bone} strokeOpacity="0.25" strokeWidth="1.2">
        <circle cx="150" cy="95" r="70" />
        <circle cx="150" cy="95" r="46" />
      </g>
      <path
        d="M150 128 C118 104 108 88 108 72 C108 58 119 50 131 50 C140 50 147 55 150 62 C153 55 160 50 169 50 C181 50 192 58 192 72 C192 88 182 104 150 128 Z"
        fill={C.mustard}
      />
      <path
        d="M126 84 h12 l5 -10 6 18 5 -8 h14"
        fill="none"
        stroke={C.navy}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
