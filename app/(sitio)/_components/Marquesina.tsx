const RUBROS = ['peluquerías', 'restobares', 'talleres', 'veterinarias', 'viveros', 'gimnasios', 'mueblerías', 'cafeterías', 'clínicas', 'distribuidoras']

/**
 * La única marquesina del sitio: la amplitud de rubros con los que trabajamos.
 * Solo CSS; con movimiento reducido queda quieta y se puede leer completa.
 */
export function Marquesina() {
  const fila = RUBROS.map((r, i) => (
    <span key={r} className={i % 2 ? 'italic text-(--s-crema-2)' : 'text-(--s-crema)'}>
      {r}
    </span>
  ))
  return (
    <div className="s-marquesina border-y border-(--s-linea) py-6 md:py-8">
      <p className="sr-only">Hacemos webs para {RUBROS.join(', ')}.</p>
      <div aria-hidden="true" className="s-marquesina-pista s-display text-[clamp(2.1rem,4.4vw,3.75rem)] leading-none">
        <div className="s-marquesina-grupo">{fila}</div>
        <div className="s-marquesina-grupo">{fila}</div>
      </div>
    </div>
  )
}
