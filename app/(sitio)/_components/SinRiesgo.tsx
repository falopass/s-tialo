const GARANTIAS = [
  'Ver tu demo no cuesta nada.',
  'Con el pago único, pagas la mitad al comenzar y la otra mitad al terminar.',
  'En cuotas o mes a mes, pagas recién cuando te entregamos la web.',
]

/** Las tres condiciones que hacen seguro decidir: nada se paga antes de ver. */
export function SinRiesgo() {
  return (
    <div>
      <h2 className="s-display s-h3">Sin riesgo para ti.</h2>
      <ul className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-3">
        {GARANTIAS.map((g) => (
          <li key={g} className="border-t border-(--s-linea) pt-4 text-(--s-crema-2)">
            {g}
          </li>
        ))}
      </ul>
    </div>
  )
}
