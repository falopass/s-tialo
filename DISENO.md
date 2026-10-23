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

| Dónde | Qué se mueve | Qué comunica | Cómo |
|---|---|---|---|
| Hero | ASCII armando la web; titular entra por líneas | La oferta del demo | Canvas + CSS (`@starting-style` o keyframes con `animation-delay` escalonado) |
| Navegación | Al hover, la palabra se "descifra" en caracteres mono antes de asentarse | Respuesta, coherente con el ASCII | Componente cliente pequeño, máximo 300 ms |
| CTA principal | Leve atracción magnética hacia el cursor | Dónde hacer clic | Motion: `useMotionValue` + `useSpring`, nunca `useState` |
| Secciones | Entrada escalonada al hacer scroll | Ritmo de lectura | CSS `animation-timeline: view()` dentro de `@supports`; sin soporte, se muestran directo |
| Demos por rubro | Revelación del dither a color | La foto real del negocio | Ver sección 2 |
| Cómo funciona | Sticky-stack: tres pasos que se apilan al hacer scroll, cada uno con una captura real dithereada | El proceso real: tu negocio en Google Maps, el demo, el mensaje de WhatsApp | Motion `whileInView` o el esqueleto 5.A de la skill |
| Franja de rubros | Una sola marquesina: "barberías · cafeterías · talleres · clínicas · ..." | Amplitud de clientes | CSS puro, máximo una por página |

### Prohibido

- `window.addEventListener('scroll', ...)` y cálculos con `window.scrollY` en estado de React.
- Loops de `requestAnimationFrame` que tocan estado de React.
- Animar `top`, `left`, `width` o `height`. Solo `transform` y `opacity`.
- Animaciones infinitas en secciones informativas (planes, preguntas frecuentes, legal).
- Más de una marquesina por página.
- Scroll-jacking.

### Accesibilidad del movimiento

Todo lo anterior colapsa a estático bajo `prefers-reduced-motion: reduce`. En Motion se usa `useReducedMotion()`; en CSS, las animaciones van dentro de `@media (prefers-reduced-motion: no-preference)`.

---

## 4. Estructura de la home

Cada sección usa una familia de layout distinta; ninguna se repite.

| # | Sección | Familia de layout |
|---|---|---|
| 1 | **Hero:** titular sobre el demo gratis ("Tu web, antes de pagar un peso."), bajada de máximo 20 palabras ("Mándanos tu Instagram y en 48 horas recibes un demo por WhatsApp. Lista en 7 días desde $79.990."), CTA amarillo a WhatsApp, enlace secundario a demos. ASCII a la derecha (debajo en móvil). Un solo texto pequeño en todo el hero: la línea de log bajo los botones, sin eyebrow arriba. | Split texto + visual |
| 2 | **Rubros:** la única marquesina de la página. | Marquesina |
| 3 | **Demos por rubro:** tarjetas con dither y revelación. | Grilla de tarjetas con imagen |
| 4 | **Cómo funciona:** tres pasos con capturas reales. | Sticky-stack |
| 5 | **Planes:** un plan destacado grande y los otros dos más chicos al lado. Sin efectos; el ojo descansa aquí. | Asimétrico destacado |
| 6 | **Caso Rancho Itahue:** captura real de ranchoitahue.cl a todo el ancho, con el texto en una zona limpia (nunca sobre la pantalla de la captura) y enlace al caso. Solo hechos del texto del dueño; sin métricas inventadas. | Imagen a sangre + texto superpuesto en zona limpia |
| 7 | **Proyectos propios:** CalculaChile y CVListo etiquetados como proyectos propios del estudio, no como clientes. | Lista editorial de dos filas grandes |
| 8 | **Cierre:** punto amarillo (opcional en ASCII) + CTA final a WhatsApp. | Centrado de una sola columna |

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
