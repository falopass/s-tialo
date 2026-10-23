# Plan: rediseño del sitio principal de Sitiazo (rama `redisenio-sitio`)

## Estado (2026-10-23)

| Fase | Estado |
|---|---|
| 0. Baseline de demos | Hecha. 12 capturas desde producción (5 demos de referencia y el catálogo, a 360 y 1440 px). Ruido de base cero: dos corridas idénticas píxel a píxel. |
| 1. Route group, tokens, fuentes, grano | Hecha y commiteada (`e7be44943f`). |
| 2. Estructura y copy | **En curso.** Listo: capturas reales de 6 demos y su manifiesto. Falta reescribir todas las páginas. |
| 3. Dither en prebuild | Pendiente. |
| 4. Movimiento y transiciones | Pendiente. |
| 5. Hero y pieza central | Pendiente. |
| Verificación final | Pendiente. |

### Dónde está cada cosa

- **Documentos:** `PLAN-REDISENO.md` (este archivo), `DIRECCION.md` (los tres conceptos y la elección), `DISENO.md` (identidad; nueva sección 7 "Límite con los demos" y definición de listo sin comandos locales).
- **Sitio nuevo:** `app/(sitio)/`. Contiene `layout.tsx`, `sitio.css`, `_lib/` (`fonts.ts`, `contacto.ts`, `imagenes.json`) y `_components/` (`Nav`, `Footer`, `CookieConsent`, `Logo`). Las páginas ya están movidas ahí, pero **todavía usan los componentes viejos** de `components/`: hoy se ven con el estilo anterior sobre fondo oscuro. La fase 2 las reescribe.
- **Assets:** `public/sitio/` (`logo.webp`, `grano.png` y `fuentes/*.webp` con las capturas de demos).
- **Scripts:** `scripts/sitio-capturas.mjs` recaptura los demos listados en `app/(sitio)/_lib/imagenes.json`.
- **Baseline para comparar demos** (local, ignorado por git): `tmp/redisenio/baseline-produccion/`, más `tmp/redisenio/capturar.mjs` y `tmp/redisenio/comparar.mjs`. Para comparar contra el preview:
  1. `node tmp/redisenio/capturar.mjs <url-del-preview> tmp/redisenio/despues`
  2. `node tmp/redisenio/comparar.mjs tmp/redisenio/baseline-produccion tmp/redisenio/despues`

### Decisiones tomadas en la ejecución

- Regla del proyecto: en local nunca se corre lint, typecheck, build ni dev. El único chequeo de compilación es el build del preview de Vercel.
- El grano es un PNG estático commiteado (`public/sitio/grano.png`), no se genera en el build.
- Las clases propias del sitio viven en `@layer components`, así que las utilidades de Tailwind pueden ajustarlas.
- **Hero y pieza central:** rotan entre Fran Wartemberg, Los Leones y Servimac.
- **Demos por rubro:** los 6 del manifiesto, todos de la lista de referencia aprobada en `AGENTS.md`.

### TODO de datos (sin resolver, para Diego)

- **Pago y hosting se contradicen:**
  - `content/faqs.ts` dice "pagas una vez" y "hosting en Vercel gratis".
  - Los términos y la FAQ general dicen "50/50".
  - `lib/config` define mensual $12.990 o pago único, más hosting $9.990/mes.
- **Razón social por confirmar:** `LEGAL.legalName` es "Eldrinor y Vaelen".
- **Datos sin fuente:**
  - "desde Arica hasta Punta Arenas" (`content/faqs.ts`);
  - las cifras del post de WhatsApp (`content/blog-posts.ts`);
  - "el 80% de tus clientes" (página Sobre).
- **Newsletter:** el formulario del blog no envía nada.
- **"Demo en 48 horas":** sale de `DISENO.md`, no de `lib/config`. Confirmar que sigue vigente.

---

## Contexto

El sitio principal (home, planes, casos, cómo funciona, sobre, contacto, FAQ, blog, legales) hoy es claro (crema), estático y con copy de plantilla ("Desliza ↓", franja "Trabajamos con", cards de "Para quién", puntos amarillos en cada titular). `DISENO.md` ya define la nueva identidad: tinta oscura, crema, amarillo como único acento, Cormorant + Inter + Geist Mono locales, y tres texturas (ASCII, dither, grano). El objetivo es un sitio que cuente el servicio con movimiento, sin tocar un píxel de los 600+ demos que conviven en el mismo proyecto.

**Design read:** home de estudio creativo para dueños de pymes chilenas que llegan desde WhatsApp en el celular; lenguaje editorial oscuro con texturas digitales que narran el proceso; Tailwind v4 + CSS nativo (scroll-driven, view transitions) + framer-motion 11 ya instalado. Diales de `DISENO.md`: 8 / 7 / 3. `DISENO.md` manda sobre la skill en marca: modo oscuro fijo, serif Cormorant de display, Inter de cuerpo.

## Límite de los demos (hallazgos verificados)

Los demos (`app/demos/**`) y `app/rancho-itahue/**`, que es el sitio final de un cliente, dependen de:
- `app/layout.tsx`: `<html>` con las variables de fuente, `body` con clases, skip link, `<main id="main-content">`, JSON-LD y Analytics.
- `app/globals.css`: tokens `@theme` (`ink`, `cream`, `yellow`, escala `--spacing-N`), `body::before` grano, `.tap-44*`, reglas de reduced motion.
- `lib/config.ts`: `SITE` y `whatsappLink`, en 276 archivos.
- `lib/fonts.ts`: `logoFont`, en `app/demos/kit.tsx`.
- `framer-motion@11.18.2`, usado por un demo. No se actualiza.
- `next.config.ts`, `package.json` y el lockfile, que afectan a todos.

**Congelados** (no se editan): `app/demos/**`, `app/rancho-itahue/**`, `app/globals.css`, `lib/config.ts`, `lib/fonts.ts`, `next.config.ts`, `app/sitemap.ts`, `app/robots.ts`, `mdx-components.tsx`.

**`app/layout.tsx` solo se aligera:** se quitan `SiteChrome`, `Nav`, `Footer` y `CookieConsent`. En demos y en rancho ya renderizan `null`, así que su HTML no cambia. Todo lo demás queda igual.

Excepción mínima en `package.json`:
- script `prebuild` para el dither (corre en el build de Vercel);
- `sharp@0.34.5` como devDependency, la versión que ya está en `node_modules` vía Next;
- `@phosphor-icons/react` fijado a una versión de más de 7 días, para los íconos de WhatsApp, flecha y menú (la skill prohíbe SVG a mano).

Ninguno de estos cambios se ejecuta dentro de los demos.

**Reglas anti-fuga** (el CSS de un layout anidado persiste tras navegar en cliente con React 19):
1. Todo el CSS nuevo vive en `app/(sitio)/sitio.css` y va bajo `[data-sitio]`. Las keyframes llevan prefijo `s-`. No hay reglas sobre `:root`, `html` ni `body`, salvo `body:has([data-sitio])`, que solo aplica mientras el sitio está montado. Esa regla pone fondo tinta, anula el grano viejo y fija `color-scheme: dark`.
2. Los enlaces del sitio hacia `/demos/*` usan `<a>` (carga completa), nunca `<Link>`. El demo siempre carga limpio.
3. Las view transitions solo se disparan desde código del sitio, con tipo `sitio`. Su CSS va bajo `html:active-view-transition-type(sitio)`.
4. Dentro de `[data-sitio]` se restaura la escala de espaciado estándar de Tailwind (igual que hace `app/demos/layout.tsx`), y los tokens propios se definen como variables CSS (`--s-tinta`, etc.) usadas con utilidades arbitrarias (`bg-(--s-tinta)`). No se agregan tokens a `globals.css`.

## Concepto (va a `DIRECCION.md` en la fase 1)

`DIRECCION.md` lleva tres conceptos completos: idea, recorrido, qué se mueve y por qué, y cómo se ve a 360 px.

**A. "El scroll es el proceso"** (elegido). La home narra cómo nace la web de una pyme. Un mismo objeto, la captura real de un demo nuestro en formato celular, acompaña el recorrido:
- **Hero:** el objeto es estructura en ASCII y rota entre tres rubros.
- **Pieza central:** al bajar, queda fijo (sticky) mientras tres pasos de texto pasan al lado. Pasa de ASCII a dither cuando "armamos tu demo en 48 horas" y de dither a color cuando "la publicamos en 7 días".
- **Resto de la página:** sigue la misma progresión. Los demos por rubro van en dither con revelación a color. Planes, el caso Roma Crochet y el cierre van ya "publicados", nítidos y a color, con el CTA de WhatsApp.
- **A 360 px:** primero titular, bajada y CTA. Después el objeto fijo arriba (unos 55svh) con los pasos pasando debajo. Sin scroll horizontal ni scroll-jacking.

**B. "Uno como el tuyo".** La home es un selector de rubro. Elegir "barbería" o "taller" cambia el demo del hero (de dither a color), reordena los demos y precarga el mensaje de WhatsApp con el rubro. Convierte bien, pero es más un configurador que una experiencia memorable, y exige demos curados por rubro.

**C. "Hoja de contactos".** La home es una mesa de luz con cientos de demos en dither, que se recorre arrastrando en escritorio y es un masonry en el celular. Tocar uno lo revela a color. Comunica volumen, pero pesa en el celular, exige cientos de capturas y diluye el relato del proceso y el CTA.

**Por qué A:** la oferta de Sitiazo es el proceso: te armamos el demo antes de que pagues. A convierte las tres texturas de `DISENO.md` en las etapas de ese relato en vez de decoración. Mantiene precio y CTA nítidos fuera del canvas y funciona igual a 360 px. De B toma la sección de demos por rubro.

## Estructura de la home

Cada sección usa una familia de layout distinta.

1. **Hero + pieza central** (un solo bloque, grid de dos columnas en desktop con columna derecha sticky; pila en móvil).
   - Titular: "Tu web, antes de pagar un peso."
   - Bajada (18 palabras): "Mándanos tu Instagram y en 48 horas recibes un demo por WhatsApp. Lista en 7 días desde $79.990."
   - CTA amarillo "Pide tu demo" (WhatsApp) y enlace "Ver demos" (`/demos/`, con `<a>`).
   - Tres pasos que salen de `content/process.ts`, reescritos a tres etapas reales.
2. **Rubros:** la única marquesina, solo CSS.
3. **Demos por rubro:** grilla asimétrica de 5 o 6 capturas reales en dither con revelación a color. Enlazan al demo real.
4. **Planes:** asimétrico, con el destacado grande y dos laterales. Datos de `PLANS` y `FORMAS_PAGO`. Sin efectos.
5. **Caso Roma Crochet:** imagen a sangre y texto en una zona limpia.
6. **Proyectos propios:** CalculaChile y CVListo, como lista editorial de dos filas, etiquetados como proyectos propios del estudio.
7. **Cierre:** punto amarillo y el mismo CTA, "Pide tu demo". Una sola etiqueta por intención en toda la página.

**Nav** (según `DISENO.md`): Cómo funciona, Planes, Casos, Contacto. Blog ("Notas"), Sobre, FAQ, Demos y los legales pasan al footer.

## Fases (un commit por fase, solo con archivos propios)

**Higiene de git:** el árbol tiene cambios ajenos (`AGENTS.md` modificado, `PROXIMOS_PASOS.md` borrado, imágenes y scripts sin trackear). Se agregan solo rutas propias con `git add <ruta>`. Nada de `git add -A`.

**Fase 0, antes de cualquier commit: baseline de demos.** Con Playwright, que es devDependency, usando el Chrome local (`channel: 'chrome'`), se capturan desde producción (`https://sitiazo.cl/demos/<slug>/`, que hoy refleja `main`) 5 demos de referencia a 360×800 y 1440×900, página completa, con `reducedMotion: 'reduce'`:
- `restobar-los-leones`
- `peluqueria-fran-wartemberg`
- `hospital-clinico-veterinario-la-granja-linares`
- `vivero-entre-raices`
- `taller-mecanico-servimac`

Más el catálogo `/demos/`. Se guardan en el scratchpad. Después: `git switch -c redisenio-sitio`.

### Fase 1: route group, tokens, fuentes locales y grano
- `git mv` de cada página a `app/(sitio)/`: `page.tsx`, `planes`, `casos` (con `[slug]` y `roma-crochet`), `como-funciona`, `sobre`, `contacto`, `preguntas-frecuentes`, `blog` (con `[slug]`), `terminos` y `privacidad`. Las URLs no cambian.
- `app/(sitio)/layout.tsx`: wrapper `<div data-sitio>` con las clases de las fuentes propias, Nav, children, Footer y CookieConsent. Importa `sitio.css`.
- `app/(sitio)/_lib/fonts.ts`: `next/font/local` con los mismos archivos de `app/fonts/` (cormorant-garamond, inter, geist-mono), con variables propias `--s-display`, `--s-body` y `--s-mono`.
- `app/(sitio)/sitio.css`: tokens de `DISENO.md` bajo `[data-sitio]`, escala de espaciado estándar, base tipográfica y grano en `[data-sitio]::after` (fijo, `pointer-events-none`, opacidad entre 0,05 y 0,08, PNG de 128 px) con la regla `body:has(...)`.
- `app/layout.tsx`: se aligera (ver arriba).
- `app/not-found.tsx`: envuelto con el shell del sitio e importa `sitio.css`. Corrige el voseo de "Volvé".
- Componentes nuevos en `app/(sitio)/_components/`. Los de `components/` quedan sin uso y se eliminan en la fase 2, ya verificado que ningún demo los importa.
- Escribir `DIRECCION.md` y actualizar `DISENO.md`: grano en el wrapper en vez de `body`, reglas anti-fuga y tradeoff de landmarks. `header` y `footer` quedan dentro del `<main>` raíz, que no se puede mover sin cambiar el DOM de los demos. El landmark `<nav>` se conserva.

### Fase 2: estructura y copy de todas las páginas, sin animaciones
- Home según la estructura de arriba, con el escenario en su estado estático (póster).
- **Planes:** formas de pago, los tres planes asimétricos, la tabla "qué incluye" como bloques agrupados en vez de filas con hairline, extras y FAQ. Se mantiene el JSON-LD.
- **Casos** (índice, `[slug]` y Roma Crochet), **Cómo funciona**, **Sobre**, **Contacto**, **FAQ**, **Blog** e índice de posts: misma metadata, canonical y JSON-LD. Se reemplaza "—" por ":" en los títulos.
- **Legales:** solo estilo nuevo con la clase `s-legal`. El texto no cambia (regla 11.F de la skill).
- **Copy con datos reales:**
  - Se elimina "Arica a Punta Arenas" de `content/faqs.ts`.
  - Se eliminan las cifras sin fuente de `content/blog-posts.ts`.
  - Se elimina el formulario de newsletter que no envía nada.
  - "Agenda una llamada" pasa a apuntar a Cal.com de verdad.
  - Contradicciones de pago y hosting (FAQ "pagas una vez", términos "50/50" contra `FORMAS_PAGO`): `lib/config` es la fuente, así que se alinean las FAQ y queda un **TODO visible** para los términos. Lo legal no se toca sin aprobación.
- Prohibiciones: cero eyebrows numerados, cero "—", cero puntos decorativos, cero indicadores de scroll y cero franjas de texto.

### Fase 3: dither (script en prebuild) e imágenes
- `scripts/sitio-capturas.mjs`, de uso único y commiteado: captura con Playwright y Chrome local 6 demos de referencia (uno por rubro) a 390×844 @2x, desde producción, en `public/sitio/fuentes/<slug>.webp`. Son trabajo propio y real, no maquetas.
- `app/(sitio)/_lib/imagenes.json`: fuente, ancho, alto y alt de cada imagen. Lo leen el script y las páginas.
- `scripts/dither.mjs` (sharp):
  - Bayer 8×8 en dos tonos, tinta y crema, como PNG de paleta.
  - WebP a color en 2 anchos para `srcset`.
  - Mini en escala de grises para el ASCII.
  - PNG de grano de 128 px.
  - Salida en `public/dither/`, que va al `.gitignore`. Salta lo que ya está al día.
- Enganchado solo en `"prebuild"` (Vercel). `sharp` ya quedó en devDependencies en la fase 1.
- Componente `ImagenDither` como `<img>` con `width`/`height` explícitos, aplicado a demos, casos y still-lifes.

### Fase 4: sistema de movimiento y transiciones entre páginas

| Animación | Qué comunica | Técnica |
|---|---|---|
| Entrada escalonada de secciones | El ritmo de lectura, una idea a la vez | CSS `animation-timeline: view()` dentro de `@supports` y `no-preference` |
| Nav: descifrado de la palabra al hover, máximo 300 ms | La respuesta, en el mismo idioma que el ASCII | Cliente pequeño. En táctil no existe. |
| CTA magnético | Dónde hacer clic | framer-motion `useMotionValue` + `useSpring`, solo con `(hover:hover) and (pointer:fine)`. En táctil, `scale(0.98)` al presionar. |
| Revelación de dither a color en las tarjetas de demos | Detrás de cada demo hay un negocio real | Máscara radial con variables CSS en el pointer (desktop) e IntersectionObserver al entrar (móvil) |
| Marquesina de rubros | La amplitud de rubros | CSS puro, una sola. Estática con reduced motion. |
| Transición entre páginas | Cambiar de página es cambiar de etapa; el estudio, representado por la nav, se mantiene | `TransitionLink`: `document.startViewTransition({types:['sitio']})` envolviendo `router.push`, resuelto al cambiar el pathname. Fundido escalonado con `steps()`. La nav tiene `view-transition-name`. Sin API o con reduce, navegación normal. |

### Fase 5: hero y pieza central
- `Escenario.tsx`: cliente, cargado con `next/dynamic` y `ssr:false` desde un wrapper cliente. El póster es una `<img>` del dither, así que el LCP queda en el titular y en una imagen liviana.
- **Un solo canvas `aria-hidden`:**
  - En reposo (hero), ASCII que rota cada ~6 s entre 3 capturas, con la rampa ` .:-=+*#%@`. Se dispersa bajo el cursor y con un toque o al entrar en el viewport en móvil.
  - Con el progreso de la sección (`useScroll` de framer-motion, leído por suscripción y nunca con `useState`): las celdas ASCII se achican, luego hay una disolución Bayer hacia el dither y luego otra hacia el color.
  - Dibuja solo cuando cambia el progreso. Se pausa con IntersectionObserver y con `visibilitychange`. DPR como máximo 2. Celdas más grandes bajo 640 px.
- Los pasos, el precio y el CTA son HTML nítido junto al canvas.
- Con `prefers-reduced-motion`: sin canvas animado. Cada paso cambia de cuadro al instante (ASCII estático, dither, color) y nada se rompe.

## Verificación (al final; en local nunca se corre lint, typecheck, build ni dev)

1. Push de `redisenio-sitio` (nunca a `main`). Se obtiene la URL de preview con `gh api repos/falopass/s-tialo/deployments?ref=redisenio-sitio` y sus statuses. El build de Vercel es el chequeo de compilación.
2. **Demos idénticos:** mismas capturas de la fase 0 contra el preview, con diff de píxeles (buffers raw de sharp) e inspección de cualquier diferencia (mapas, contenido con hora). Si el preview está protegido, se avisa a Diego: en local no se corre build ni dev (regla del proyecto).
3. **Sitio:** capturas a 360, 768 y 1440 con `reducedMotion` en `reduce` y en `no-preference`. LCP móvil con PageSpeed sobre la URL del preview, si es pública.
4. **Auditoría mecánica:**
   - grep de `—` y `–` en `app/(sitio)`;
   - conteo de eyebrows;
   - bajada de 20 palabras o menos;
   - que `git diff main --stat` no toque nada congelado.

**Regla de despliegue:** tu regla global de desplegar a producción choca con `AGENTS.md` y con este encargo ("nunca push a main"). Manda lo específico: queda en preview y tú mergeas.

## Entrega final
- Concepto en dos líneas.
- Páginas rediseñadas.
- Tabla de animaciones con su "qué comunica".
- TODOs: términos de pago y hosting, `legalName` "Eldrinor y Vaelen" por confirmar, fotos reales que falten.
- Resultado del diff de los 5 demos.
