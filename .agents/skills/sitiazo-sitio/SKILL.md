---
name: sitiazo-sitio
description: Mapa y recetas del sitio principal de Sitiazo (sitiazo.cl, fuera de /demos/<slug>): dónde vive cada pieza, cómo agregar páginas, secciones, imágenes, mensajes de WhatsApp, movimiento e imágenes para compartir, y cómo no filtrar estilos a los 600 demos. Úsala para cualquier cambio en home, planes, casos, cómo funciona, sobre, contacto, blog, legales o el índice /demos/.
---

# Sitio principal de Sitiazo

Next.js 16 con export estático, Tailwind v4 y framer-motion 11. El sitio vive en el route group
`app/(sitio)/`, y el índice `/demos/` (`app/demos/page.tsx`) usa el mismo layout. La marca y el
movimiento están en `DISENO.md`. El porqué del concepto ("El scroll es el proceso") está en
`DIRECCION.md`, y el historial y lo pendiente, en `PLAN-REDISENO.md`.

Para verificar sin levantar `dev` ni `build` en el PC, usa la skill `sitiazo-verificar`.

## Dónde está cada cosa

| Necesito… | Archivo |
|---|---|
| Layout, nav, footer, cookies | `app/(sitio)/layout.tsx`, `_components/Nav.tsx`, `Footer.tsx`, `CookieConsent.tsx` |
| Estilos y tokens (`--s-tinta`, `--s-crema`, `--s-amarillo`…) | `app/(sitio)/sitio.css` |
| Fuentes (Cormorant, Inter, Geist Mono, locales) | `app/(sitio)/_lib/fonts.ts` |
| Mensajes y enlaces de WhatsApp | `_lib/contacto.ts`: `linkDemo({ negocio, demo })`, `mensajeDemo`, `CTA_DEMO` |
| Nombre del negocio que escribe el visitante | `_lib/negocio.ts`: `useNegocio()`, `guardarNegocio()`, `suscribirNegocio()` |
| Imágenes del sitio (capturas reales) | `_lib/imagenes.json` (manifiesto) y `_lib/imagenes.ts` (rutas, anchos, srcset) |
| Transiciones entre páginas | `_lib/transiciones.ts` y `_components/Enlace.tsx` |
| Datos del catálogo de demos y totales | `app/demos/catalogo.ts`: `catalogo()`, `familias()` |
| Precios, planes, contacto, legal | `lib/config.ts` (también lo importan los demos: ver "Límite con los demos") |
| Casos, posts, FAQ | `content/cases.ts`, `content/posts.ts`, `content/blog-posts.ts`, `content/faqs.ts` |
| Caso Rancho Itahue (datos del cliente) | `app/rancho-itahue/content.ts` (solo lectura; es la web del cliente) |

Componentes reutilizables (`app/(sitio)/_components/`):

- **Encabezados y cierres:** `Cabecera` (h1, bajada y acciones) y `Cierre` (punto amarillo, titular y CTA; sin `titulo`, nombra el negocio del visitante).
- **Llamados a WhatsApp:** `BotonDemo` (CTA principal, con atracción magnética) y `QuieroUnoAsi` (WhatsApp con un demo de referencia).
- **Imágenes:** `Captura` (color con srcset), `CapturaDither` y `CapturaRevela` (dither que pasa a color).
- **Demos:** `TarjetaDemo`, `TiraRubros` (`ids` y `etiqueta` configurables) y `CatalogoDemos`.
- **Personalización:** `ConNegocio` (texto con el nombre del visitante) y `ConfirmaNegocio`.
- **Hero:** `Escenario`, que carga `EscenarioCanvas` diferido (ASCII, dither y color con scroll), y `TuNegocio`.
- **Interacción:** `Descifra`, `Magnetico`, `Preguntas` y `Planes`.
- **Enlaces:** `Enlace`, para links internos con view transition.

## Recetas

**Página nueva.**
1. Crea `app/(sitio)/<ruta>/page.tsx` y exporta `metadata` con `alternates.canonical: siteUrl('/<ruta>/')` y `openGraph.images`.
2. Arma el cuerpo con `Cabecera` + secciones `s-wrap` + `Cierre`.
3. Si debe estar en el sitemap, agrégala en `app/sitemap.ts`. Si va en la nav, edita `LINKS` en `Nav.tsx`; si va en el footer, `Footer.tsx`.

**Imagen real nueva (captura de un demo o de un sitio).**
1. Agrega una entrada a `_lib/imagenes.json`: `id`, `demo` o `url`, `src: public/sitio/fuentes/<id>.webp`, `ancho`, `alto`, `nombre`, `rubro`, `ciudad` y `alt`.
2. Captura desde producción: `node scripts/sitio-capturas.mjs https://sitiazo.cl <id1,id2>`.
3. El dither y el srcset los genera `prebuild` en el build de Workers Builds (`scripts/dither.mjs`). En local solo hace falta correr `node scripts/dither.mjs` si vas a generar imágenes para compartir.
4. Úsala con `<Captura id>`, `<CapturaRevela id>` o `<TarjetaDemo id>`. Para la candidata a LCP, pasa `prioridad`.

**Imágenes para compartir (Open Graph).** Los titulares están escritos dentro de `scripts/sitio-og.mjs`. Edítalos ahí y corre `node scripts/dither.mjs && node scripts/sitio-og.mjs`. El resultado queda en `public/sitio/og/<id>.jpg`; enlázalo desde `openGraph.images`. Usa JPG, porque WhatsApp no siempre muestra WebP.

**Mensaje de WhatsApp nuevo.** Agrégalo en `_lib/contacto.ts`, dentro de `mensajeDemo`, y no armes `wa.me` a mano en la página. En componentes cliente, pasa `negocio` desde `useNegocio()` para que el mensaje lleve el nombre del visitante.

**Texto que nombra el negocio del visitante.** `<ConNegocio sin="Texto genérico" antes="… de " despues=" …" />`. En el servidor siempre se pinta `sin`.

**Total de demos o cifras del catálogo.** Usa `catalogo().length` en un server component. Nunca escribas el número a mano.

**Sección con movimiento.** Escribe una frase de "qué comunica" en el comentario del componente o del CSS y agrégala a la tabla de la sección 3 de `DISENO.md`.
- La animación va en CSS dentro de `@media (prefers-reduced-motion: no-preference)`.
- Para scroll, usa `animation-timeline: view()` o `view-timeline` dentro de `@supports`.
- Para lo continuo en JS, usa `scroll()`, `useMotionValue` o `useSpring` de framer-motion, nunca `useState`.

## Límite con los demos (lo único que de verdad rompe cosas)

Los demos comparten el layout raíz, `app/globals.css`, `lib/config.ts`, `lib/fonts.ts`, `next.config.ts` y `package.json`. Un cambio ahí puede mover 600 sitios de clientes. Sí puedes cambiarlos, pero hay que comparar demos antes de mergear (`sitiazo-verificar`, `demos-identicos.mjs`).

Dentro del sitio, para no filtrar estilos al navegar:
- Todo el CSS va bajo `[data-sitio]` y las keyframes llevan prefijo `s-`. Lo que toca `body` usa `body:has([data-sitio])`.
- Los links hacia `/demos/<slug>/` son `<a>` y no `<Link>`: así el demo carga en un documento limpio.
- Los tokens son variables CSS que se usan con utilidades arbitrarias: `bg-(--s-tinta)`, `text-(--s-crema-2)`.

## Trucos de CSS de este repo

- Las clases propias (`s-wrap`, `s-display`, `s-h1`…`s-h3`, `s-lead`, `s-mono`, `s-btn`, `s-btn-primario`, `s-btn-secundario`, `s-link`, `s-campo`) viven en `@layer components`, así que una utilidad de Tailwind las pisa sin `!important`. Si una regla tiene que ganarle a las utilidades, déjala fuera del layer.
- `globals.css` redefine la escala de espaciado. `[data-sitio]` la restaura a la estándar (n × 4 px), así que `p-10` vale 40 px dentro del sitio.
- Las unidades `ch` se miden con la fuente del elemento: pon `max-w-[20ch]` en el `h1`, no en su contenedor.
- La tira de rubros usa `view-timeline` con `overflow-x: clip`. `hidden` la convertiría en contenedor de scroll y rompería el timeline.

## Rendimiento (lo medido y cómo mantenerlo)

LCP de laboratorio en celular (CPU 4x, 4G lento): home 2,22 s, planes 2,21 s, casos 2,40 s, caso Rancho 2,42 s y `/demos/` 2,48 s, con CLS 0. Para mantenerlo:
- **Imágenes:** la candidata a LCP lleva `prioridad` (`fetchPriority=high`, eager). El resto, lazy con `width` y `height`.
- **Canvas y cosas pesadas:** se cargan con `next/dynamic` y `ssr:false` desde un wrapper cliente. Se pausan fuera de pantalla con IntersectionObserver y `visibilitychange`, y el DPR va a 2 como máximo.
- **`/demos/`:** manda las 624 filas en el HTML. Si crece mucho, pagina o carga las filas después del primer pintado.

## Diseño

`DISENO.md` manda en la marca: tinta, crema y amarillo como único acento; Cormorant, Inter y Geist Mono; texturas ASCII, dither y grano.

La skill global `design-taste-frontend` sirve para dirección y critique. La tasteskill v2 de `.agents/skills/design-taste-frontend` es opcional: sus scripts (`draw`, `lint`, `inspect`) sirven como herramienta, pero sus reglas de estilo (sin mono, sin líneas finas, sin crema) no aplican aquí, porque la marca de Sitiazo las usa a propósito.

Copy: español neutro con tú, sin guion largo en texto visible y solo datos reales. Si falta un dato, deja un TODO visible.
