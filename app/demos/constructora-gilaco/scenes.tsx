/**
 * app/demos/constructora-gilaco/scenes.tsx
 *
 * Icono propio: celosía de acero — diagonales cruzadas en perfil fino,
 * como una cercha metálica. Solo se usa como ícono en eyebrows.
 */

export function TrussIcon({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="square" aria-hidden="true">
      <path d="M2 6 H22 M2 18 H22" />
      <path d="M4 6 L10 18 M10 6 L4 18 M12 6 L18 18 M18 6 L12 18 M20 6 L20 18" />
    </svg>
  )
}
