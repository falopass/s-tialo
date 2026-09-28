# s-tialo — notas de proyecto

Sitio de Sitiazo: Next.js 16 + Turbopack, Tailwind v4, export estático (`output: 'export'`).
Las demos de pymes viven en `app/demos/<slug>/`; las reglas de diseño móvil están en
`app/demos/GUIA-MOVIL.md`.

## Comandos

- `npm run dev` — servidor de desarrollo.
- `npm run build` — build de producción (estático, `out/`).
- `npm run lint` — ESLint.
- `npm run typecheck` — TypeScript sin emitir.
- Al agregar un demo nuevo, correr `npm run fechas` antes del commit.

## Deploy

`git push` a `main` dispara el deploy de producción en Vercel; no hay paso manual.

## Build intermitente por fuentes de Google (Next 16 + Turbopack)

`npm run build` (y el deploy de Vercel) puede fallar de forma intermitente con:

```
Module not found: Can't resolve '@vercel/turbopack-next/internal/font/google/font'
```

Es un bug conocido de Next 16 con Turbopack al resolver `next/font/google`: la descarga de un
archivo de fuente falla y el error se reporta como módulo faltante (en cada intento afecta a una
fuente distinta, por ejemplo `manrope_*.module.css`). No lo causa el código de las páginas.

Mitigación: reintentar el build (en local ayuda `rm -rf .next` antes); en Vercel, volver a
empujar un commit para lanzar un build nuevo. Si la frecuencia se vuelve un problema, evaluar
`next build --webpack` como alternativa estable.

## Demos de referencia (los mejores, aprobados por el dueño)

Antes de construir o rediseñar un demo, **estudia al menos 3 de estos** y apunta a ese nivel:

`vivero-entre-raices` · `hospital-clinico-veterinario-la-granja-linares` · `ius-abogados-linares` · `my-fusion-gym` · `ultrasport19` · `cabanas-vista-hermosa` · `entre-lomas` · `a-toda-maquina-ventas-y-servicios` · `agrocesped-del-maule` · `distribuidora-mym-curico` · `distribuidora-renato-molina` · `clinica-prosaluddental` · `clinica-y-farmacia-veterinaria-angel-guardian` · `csf-especialidades-veterinarias-san-francisco` · `muebleria-infinity-muebles-talca` · `vasquez-muebles-linares-spa` · `taller-mecanico-servimac` · `peluqueria-fran-wartemberg` · `nailsyus` · `salon-de-belleza-gabriela-saavedra-talca` · `victoria-nail-school` · `restobar-los-leones` · `san-clemente-heladeria` · `delicias-caseras-fabiana`

Lo que los hace buenos: identidad propia (paleta + tipografía + motivo gráfico), hero con foto real del negocio, secciones con ritmo, datos reales verificados y buen comportamiento en celular. Un demo nuevo que no se vea a ese nivel no está listo.
