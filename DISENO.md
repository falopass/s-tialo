# Sitiazo: dirección visual del sitio principal

Esta guía aplica al sitio principal (home, planes, casos, cómo funciona, contacto).
Los demos de pymes siguen `app/demos/GUIA-MOVIL.md` y la lista de demos de referencia en `AGENTS.md`.

**Design read:** landing de estudio creativo para dueños de pymes chilenas que llegan desde un link de WhatsApp en el celular, con lenguaje editorial oscuro + texturas digitales (ASCII, dither, grano), sobre Tailwind v4 + CSS nativo + Motion en hojas cliente aisladas.

**Diales:** `DESIGN_VARIANCE: 8` · `MOTION_INTENSITY: 7` · `VISUAL_DENSITY: 3`

Esta guía se apoya en taste-skill v2 (`design-taste-frontend`). Las decisiones de marca salen de aquí; las prohibiciones generales (sección 9 de la skill) aplican siempre.

El problema que esta guía corrige: el sitio anterior era correcto pero estático y sin nada memorable. La página tiene que moverse, pero cada movimiento debe contar algo sobre el servicio.

---

## 1. Identidad

### Paleta (tokens en `@theme` de Tailwind v4)

| Token | Valor | Uso |
|---|---|---|
| `--color-tinta` | `#0E0E0C` | Fondo base |
| `--color-tinta-2` | `#181815` | Superficies elevadas, tarjetas |
| `--color-crema` | `#F2EFE6` | Texto principal, segundo tono del dither |
| `--color-crema-2` | `#B9B5AA` | Texto secundario |
| `--color-ceniza` | `#8A867C` | Metadatos, etiquetas mono |
| `--color-amarillo` | `#F5C400` | Único acento: CTA, foco, punto de marca |

- El amarillo es el único color "limpio" del sitio. Marca dónde hacer clic. No se usa en fondos grandes ni decorativos, y nunca se dithera ni se le pone grano encima.
- Modo de color fijo en oscuro por decisión de marca. Si en el futuro se agrega modo claro, se invierte tinta/crema y el amarillo se mantiene.
- Contraste mínimo WCAG AA en todo texto; AAA en cuerpo de texto.

### Tipografía

- **Display:** la serif actual del sitio, en tamaños grandes, peso regular, interlineado apretado (`leading-[1.02]`).
- **Cuerpo:** sans actual, 16 a 18 px.
- **Mono:** una monoespaciada (JetBrains Mono, IBM Plex Mono o Geist Mono) para etiquetas, numeración de secciones (`01 · estudio`), logs y el ASCII.
- Todas las fuentes se sirven con `next/font/local` desde `app/fonts/`. No usar `next/font/google`: además de ser más lento, es la causa del build intermitente documentado en `AGENTS.md`.

### Motivo gráfico

El punto amarillo como firma y las tres texturas digitales de la sección 2. La mono se usa en etiquetas funcionales, no como decoración.

- Nada de eyebrows numerados (`01 · estudio`, `02 · demos`). Máximo un eyebrow cada 3 secciones; el hero cuenta como uno. Lo normal es que el titular vaya solo.

---

## 2. Las tres texturas: una función cada una

Usarlas todas en todas partes produce otro template. Cada una tiene un solo trabajo.

### ASCII = movimiento y relato (solo hero y, opcional, cierre)

- Concepto: los caracteres arman frente al visitante la web de una pyme (barbería, cafetería, crochet), rotando cada ~6 s, y se dispersan bajo el cursor. Cuenta la oferta: "te armamos tu web antes de que pagues".
- Técnica: canvas oculto donde se dibuja el layout, muestreo de brillo por celda, rampa ` .:-=+*#%@`. Implementación propia: el repo `stackedlol/ascii-sharks` no tiene licencia, así que no se copia código de ahí.
- Componente cliente aislado (`'use client'`), cargado con `next/dynamic` desde otro componente cliente para no bloquear el LCP.
- Pausar el loop con IntersectionObserver cuando no está en pantalla y con `visibilitychange` cuando la pestaña está oculta.
- `devicePixelRatio` limitado a 2. En pantallas menores a 640 px, celdas más grandes (menos caracteres).
- En móvil no hay hover: la dispersión se dispara al entrar en el viewport y con un toque.
- Bajo `prefers-reduced-motion: reduce`, se muestra el layout ya armado, estático.
- El canvas lleva `aria-hidden="true"`. Ningún texto importante vive dentro del canvas.

### Dither = tratamiento de imágenes (demos, casos, fotos)

- Todas las capturas y fotos del sitio se muestran en dither ordenado (Bayer 4x4 u 8x8) de dos tonos: tinta y crema.
- La versión a color aparece al interactuar: con el mouse, una máscara circular que sigue el cursor; en móvil, una revelación al entrar en el viewport.
- Las versiones dithereadas se generan en el build, no en el navegador: `scripts/dither.mjs` con `sharp`, salida en `public/dither/`, enganchado como `prebuild` en `package.json`. Exportar como PNG de paleta de 2 colores (pesa muy poco).
- Ambas versiones con `width` y `height` explícitos para no generar CLS. Como el sitio es `output: 'export'`, las imágenes van con `unoptimized` o como `<img>` con `srcset` generado por el mismo script.

### Grano = textura global, casi invisible

- Un solo pseudo-elemento en `[data-sitio]::after` (no en `body`: el body es compartido con los demos, ver sección 7): `fixed inset-0 pointer-events-none`, PNG de ruido de 128 px en mosaico (`public/sitio/grano.png`), `opacity` 0.06.
- Va estático: animar un pseudo-elemento de pantalla completa repinta en cada paso y no comunica nada. Si algún día se anima, solo con `background-position` y `steps()` en CSS, nunca con JavaScript.
- Nunca sobre contenedores que hacen scroll, nunca como filtro en elementos individuales.
- Bajo `prefers-reduced-motion`, el grano queda fijo.

### Reglas comunes

- Nunca dither, grano ni ASCII sobre texto. Titulares, precios y CTA siempre nítidos.
- Nunca dither ni grano sobre el amarillo.

---

## 3. Sistema de movimiento

Toda animación tiene que responder "¿qué comunica?" en una frase: jerarquía, relato, respuesta a una acción o cambio de estado. Si no hay respuesta, se elimina.

Implementado así (concepto "El scroll es el proceso", ver `DIRECCION.md`):

| Dónde | Qué se mueve | Qué comunica | Cómo |
|---|---|---|---|
| Hero | Titular, bajada y CTA entran en orden | Jerarquía: la promesa, cómo, dónde hacer clic | Keyframes `s-entra` con `--i`; parte en opacidad 0.2 para no retrasar el LCP |
| Hero | Los caracteres arman en ASCII la captura real de un demo y rotan entre tres rubros cada ~6 s | Te armamos tu web antes de que pagues | `EscenarioCanvas` (canvas, diferido con `next/dynamic`) |
| Hero | El ASCII se dispersa bajo el cursor; en el celular, con un toque o al entrar en pantalla | La web todavía es materia blanda, se puede tocar | Mismo canvas, solo mientras el objeto está en ASCII |
| Pieza central | El objeto queda fijo mientras pasan tres pasos; una disolución Bayer lo lleva de ASCII a dither y de dither a color | El proceso real: estructura, forma, publicada | `scroll()` de framer-motion sobre la lista de pasos; el paso activo queda en crema |
| Hero | Lo que el visitante escribe en "¿Cómo se llama tu negocio?" se arma letra a letra en ASCII amarillo sobre la captura, sigue en la etapa de dither y se disuelve recién con el color (nunca se pega sobre la captura a color de un demo real) | Tu web empieza aquí: el visitante ve su propio nombre en la estructura | Mismo canvas (`_lib/negocio.ts` lo comunica sin estado de React); con reduce aparece sin descifrado |
| Navegación | Al hover, la palabra se descifra en caracteres de la rampa ASCII | Respuesta, en el idioma del hero | `Descifra`, 280 ms, sin salto de ancho; solo con mouse |
| CTA principal | Leve atracción magnética hacia el cursor | Dónde hacer clic | `useMotionValue` + `useSpring`; solo con mouse fino |
| Secciones | Entrada al aparecer en pantalla | Ritmo de lectura | `animation-timeline: view()` dentro de `@supports`; sin soporte, se muestran directo |
| Demos por rubro | Revelación del dither a color | Detrás de cada demo hay un negocio real | Máscara circular que sigue al cursor; en el celular, al entrar en pantalla, en pasos |
| Rubros | Tira de 8 demos de otros rubros en dither que se desliza en horizontal según el scroll (sin loop); cada captura pasa a color al entrar o con el cursor | Amplitud de rubros, con demos reales en vez de palabras | `TiraRubros`: CSS `view-timeline` dentro de `@supports`; sin soporte o con reduce, fila que se desliza con el dedo |
| Entre páginas | La página que sale se apaga en pasos y la nueva sube en pasos; la nav no se mueve | Cambiar de página es cambiar de etapa; el estudio se mantiene | View Transitions con tipo `sitio` (`Enlace` + `_lib/transiciones.ts`); sin soporte de tipos, navegación normal |

### Prohibido

- `window.addEventListener('scroll', ...)` y cálculos con `window.scrollY` en estado de React.
- Loops de `requestAnimationFrame` que tocan estado de React.
- Animar `top`, `left`, `width` o `height`. Solo `transform` y `opacity`.
- Animaciones infinitas en secciones informativas (planes, preguntas frecuentes, legal).
- Marquesinas de texto en loop infinito. Los rubros se muestran con demos reales (tira de rubros).
- Scroll-jacking.

### Accesibilidad del movimiento

Todo lo anterior colapsa a estático bajo `prefers-reduced-motion: reduce`. En Motion se usa `useReducedMotion()`; en CSS, las animaciones van dentro de `@media (prefers-reduced-motion: no-preference)`.

---

## 4. Estructura de la home

Cada sección usa una familia de layout distinta; ninguna se repite.

| # | Sección | Familia de layout |
|---|---|---|
| 1 | **Hero + pieza central (un solo bloque):** titular "Tu web, antes de pagar un peso.", bajada de 18 palabras, campo opcional "¿Cómo se llama tu negocio?" (ver 7b), CTA "Pide tu demo" (WhatsApp) y "Ver {total} demos" con el total real del catálogo. El escenario (captura real en formato celular) a la derecha y fijo en escritorio; en el celular queda fijo arriba y los tres pasos (Estructura, Forma, Publicada) pasan debajo. Sin eyebrow ni texto chico en el hero. | Split con columna fija (sticky) |
| 2 | **Rubros:** tira de 8 demos publicados de otros rubros (manicura, heladería, mueblería, hogar, abogados, cabañas, dental, pastelería), en dither, con rubro y ciudad. Se desliza con el scroll; no repite los demos de la sección 3. | Tira horizontal ligada al scroll |
| 3 | **Demos por rubro:** 6 capturas reales de demos de referencia en dither, con revelación a color; cada una con "Quiero uno así" (WhatsApp con ese demo de referencia) y, al final, el enlace "Busca el tuyo entre los {total} demos". | Grilla asimétrica de 12 columnas (2 en el celular) |
| 4 | **Planes:** el Recomendado grande y los otros dos más chicos al lado. Sin efectos; el ojo descansa aquí. Cada plan muestra sus cuotas (y el Básico su mensual) y su propio "Quiero este plan" (ver 7c). | Asimétrico destacado |
| 4b | **¿Cuál te conviene?:** tres preguntas de un toque y un plan recomendado con su botón. | Fieldsets en columna + tarjeta de resultado |
| 5 | **Caso Rancho Itahue:** texto a la izquierda, captura de escritorio y de celular superpuestas a la derecha, cita textual del dueño. Solo hechos de su texto; sin métricas inventadas. | Split texto + capturas superpuestas |
| 6 | **Proyectos propios:** CalculaChile y CVListo, etiquetados como productos propios del estudio, no como clientes. | Lista editorial de dos filas grandes |
| 6b | **Lo esencial, en una ficha:** titular y CTA fijos a la izquierda; a la derecha, una ficha con precio, pago, plazo, demo, dónde y contacto, con el dato grande en la serif y su explicación al lado. Todo en texto real desde `lib/config`, para que lo citen Google y los asistentes de IA. | Split con columna fija + ficha de filas |
| 7 | **Cierre:** punto amarillo y el mismo CTA "Pide tu demo". Si el visitante escribió su negocio, el titular lo nombra. | Centrado de una sola columna |

Las texturas siguen el relato de arriba abajo: ASCII en el hero, dither en el proceso y los demos, color de los planes hacia abajo ("publicada").

Sin franja de "Trabajamos con" mientras haya un solo cliente. Los hechos (demo gratis, 7 días, precio) ya van en el hero.

---

## 5. Copy

- Español neutro con trato de tú. Nada de voseo.
- Sin guion largo (—) en ningún texto visible, incluido alt text: usar punto, coma, dos puntos o reestructurar la frase.
- Prohibidos los adornos de texto que tenía el sitio anterior: pies de foto decorativos (`fig. 01 — sitiazo home`), indicadores de scroll (`Desliza ↓`), franjas de texto al pie del hero, puntos decorativos de estado y franjas de ubicación. "Desde el Maule" vive dentro del copy, no como franja suelta.
- Solo datos reales y verificables: nada de testimonios, cifras ni logos inventados.
- Navegación en español y coherente con el destino: Cómo funciona, Planes, Casos, Contacto.
- Si se muestran dos modelos de precio, el hero muestra uno; la página de planes explica ambos y qué incluye la mensualidad.

---

## 6. Celular primero

- Los prospectos abren el sitio desde WhatsApp. Diseñar y revisar primero a 360 px de ancho.
- En el primer pantallazo del celular se ven: titular, precio o plazo y el CTA. El ASCII puede quedar debajo.
- Todo hover tiene equivalente táctil o simplemente no existe en móvil.
- Áreas táctiles de al menos 44 px.

---

## 7. Límite con los demos

El sitio principal vive en el route group `app/(sitio)/` con su propio `layout.tsx`, fuentes (`app/(sitio)/_lib/fonts.ts`) y estilos (`app/(sitio)/sitio.css`). Los demos comparten el layout raíz, `app/globals.css`, `lib/config.ts` y `lib/fonts.ts`: esos archivos no se tocan para el sitio (el layout raíz solo puede quedar más liviano).

- Todo el CSS del sitio va bajo `[data-sitio]`; las keyframes llevan prefijo `s-`. Con React 19, una hoja cargada por un layout anidado sigue en el documento tras navegar en cliente, así que una regla sin scope llegaría a un demo.
- Lo único que toca `body` usa `body:has([data-sitio])` (fondo tinta, `color-scheme: dark`, apaga el grano viejo de `globals.css`): deja de aplicar en cuanto el sitio no está montado.
- Los tokens del sitio son variables CSS (`--s-tinta`, `--s-crema`, `--s-crema-2`, `--s-ceniza`, `--s-amarillo`) usadas con utilidades arbitrarias de Tailwind (`bg-(--s-tinta)`). No se agregan tokens a `@theme` en `globals.css`.
- Dentro de `[data-sitio]` la escala de espaciado vuelve a la estándar de Tailwind (n × 4 px), igual que en los demos.
- Las clases propias (`s-wrap`, `s-display`, `s-btn`, ...) viven en `@layer components`, así las utilidades pueden ajustarlas sin `!important`.
- Los enlaces del sitio hacia `/demos/*` son `<a>` (carga completa), nunca `<Link>`: el demo siempre carga en un documento limpio.
- Landmarks: el `<main id="main-content">` es del layout raíz y envuelve también a los demos, así que el `header` y el `footer` del sitio quedan dentro de él. Moverlo cambiaría el DOM de 600 demos; se acepta el costo. El landmark `<nav>` se conserva.
- Antes de mergear, se comparan capturas de 5 demos de referencia contra producción: tienen que ser idénticas píxel a píxel.
- **El índice `/demos/` es una página del sitio** (decisión de Diego, 2026-10-23): `app/demos/page.tsx` envuelve su contenido en el layout del sitio y sus datos viven en `app/demos/catalogo.ts`. Ningún demo importa esos archivos. `app/demos/layout.tsx`, `kit.tsx`, `data.ts` y las carpetas de cada demo no se tocan. Cada fila del catálogo enlaza con `<a>`. Solo se listan los demos que tienen página (se comprueba en el build).

## 7b. WhatsApp con contexto e imágenes para compartir

- El hero pregunta "¿Cómo se llama tu negocio?" (opcional). El nombre acompaña el recorrido como texto real, no solo en el canvas:
  - bajo los botones aparece "Listo: tu mensaje de WhatsApp ya dice “…”";
  - los tres pasos de la home pasan a hablar de ese negocio ("En 48 horas te llega el demo de … por WhatsApp");
  - el cierre por defecto dice "El demo de … puede estar listo pasado mañana".

  Sin nombre, todo queda igual que antes (`ConNegocio`). Ese nombre vive en `sessionStorage` mientras dura la visita, y todos los botones de WhatsApp del sitio (nav, hero, planes, cierre) lo llevan en el mensaje. Enter en el campo abre WhatsApp.
- Cada demo con captura (grilla, tira y catálogo destacado) tiene "Quiero uno así", que abre WhatsApp con ese demo como referencia. Los mensajes se arman en `_lib/contacto.ts` (`mensajeDemo`).
- Las imágenes para compartir (Open Graph, 1200×630) salen de `scripts/sitio-og.mjs`: titular de la página en Cormorant y una captura real en dither detrás de la misma captura a color. Están en `public/sitio/og/` y se regeneran a mano cuando cambia un titular. Formato JPG, porque WhatsApp no siempre muestra WebP.
- Las cifras del sitio se calculan en el build. El total de demos sale de `catalogo()` y nunca se escribe a mano.

## 7c. Elegir plan en la primera visita (decisión de Diego, 2026-10-23)

- Dos intenciones, dos etiquetas: "Pide tu demo" (ver antes de decidir) y "Quiero este plan" (ya decidió). El mensaje de "Quiero este plan" lleva plan, forma de pago y nombre del negocio (`mensajeDemo` con `plan` y `pago`).
- Formas de pago: pago único 50% y 50%, hasta 3 cuotas sin interés, o mensual solo en el plan Básico. Los montos de las cuotas salen de `cuotas()` en `lib/config.ts`.
- "Sin riesgo para ti" repite solo lo que dicen los términos: el demo es gratis y en cuotas o mensual se paga al entregar.
- Barra fija con "Pide tu demo" en el celular (`BarraMovil`). Qué comunica: pedir el demo siempre está a un toque. Aparece cuando ya bajaste y ningún CTA principal (`[data-cta-principal]`) está a la vista, y nunca con el aviso de cookies abierto. Con movimiento reducido no se anima.
- Cada clic a WhatsApp registra el evento `whatsapp` en Vercel Analytics, con `origen`, `plan`, `pago` y `conNegocio`.
- Páginas por rubro en `/paginas-web-para/<rubro>/`, con datos en `content/rubros.ts`. Solo se publican rubros con 5 demos reales o más, y su texto es propio de cada rubro, sin cifras de mercado.

---

## 8. Definición de listo

Un cambio al sitio principal no está listo hasta que:

- [ ] El build del preview de Vercel pasa. En local no se corre `lint`, `typecheck`, `build` ni `dev`.
- [ ] Lighthouse móvil: LCP < 2.5 s, CLS < 0.1, INP < 200 ms (medido, no supuesto).
- [ ] Revisado a 360 px, 768 px y 1440 px.
- [ ] Revisado con `prefers-reduced-motion: reduce` activado: nada se mueve y nada queda roto.
- [ ] Ningún texto importante está dentro de un canvas o una imagen.
- [ ] Ninguna maqueta falsa hecha con `<div>` (terminales, dashboards, capturas): solo imágenes reales.
- [ ] Revisión final de copy: cero guiones largos, cero eyebrows de más, bajada del hero en 20 palabras o menos.
- [ ] Pasa la sección 14 (pre-flight) de taste-skill v2.
- [ ] Cada animación nueva tiene su "qué comunica" en una frase en el PR.
