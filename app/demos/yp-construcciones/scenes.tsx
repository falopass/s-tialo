/**
 * app/demos/yp-construcciones/scenes.tsx
 *
 * Icono propio: cañería con codo y volante de llave de paso, en línea
 * fina. Solo se usa como ícono en eyebrows y listas.
 */

export function PipeIcon({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M3 9 h10 a4 4 0 0 1 4 4 v8" />
      <path d="M3 15 h4" />
      <circle cx="9" cy="12" r="2.4" />
      <path d="M9 3.5 v3 M9 12 v0" />
    </svg>
  )
}
