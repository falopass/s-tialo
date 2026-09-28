/**
 * app/demos/constructora-pehuenche/scenes.tsx
 *
 * Motivo gráfico propio: el pehuén (araucaria) que da nombre a la
 * empresa. Solo se usa como ícono — las imágenes del demo son fotos
 * reales del archivo público de la empresa.
 */

export function PehuenIcon({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* corona en paraguas del pehuén */}
      <path d="M4 13 C4 8 7.5 4 12 4 C16.5 4 20 8 20 13" />
      <path d="M4 13 H20" />
      <path d="M7.5 13 V8.5 M12 13 V4.8 M16.5 13 V8.5" />
      {/* tronco */}
      <path d="M12 13 V22 M10 17 L12 15.5 L14 17" />
    </svg>
  )
}
