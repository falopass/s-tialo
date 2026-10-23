/** Encabezado de las páginas interiores: titular, bajada y acciones opcionales. */
export function Cabecera({
  titulo,
  bajada,
  children,
}: {
  titulo: React.ReactNode
  bajada?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <header className="s-wrap pt-[calc(var(--s-nav-h)+48px)] pb-16 md:pt-[calc(var(--s-nav-h)+88px)] md:pb-24">
      <h1 className="s-display s-h1 max-w-[16ch]">{titulo}</h1>
      {bajada && <p className="s-lead mt-6">{bajada}</p>}
      {children && <div className="mt-10 flex flex-wrap gap-3">{children}</div>}
    </header>
  )
}
