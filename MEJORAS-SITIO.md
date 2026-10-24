# Mejoras del sitio principal (2026-10-23)

Registro de todo lo hecho en esta sesión sobre el sitio de Sitiazo, del rediseño revisado a producción. El detalle del rediseño previo está en `PLAN-REDISENO.md`, y las reglas de diseño en `DISENO.md`.

## Estado

Todo está publicado en `sitiazo.cl` (`main`), a través de 3 PR mergeados:

| PR | Rama | Contenido | Merge |
|---|---|---|---|
| #1 | `mejoras-sitio` | Rediseño completo, términos y pagos, conversión, SEO/GEO, limpieza de código | `75ad79b` |
| #2 | `ficha-resumen` | El bloque "En resumen" pasa a ser una ficha editorial | `65cc382` |
| #3 | `menos-scroll` | Menos scroll, sin CTAs repetidos, planes en tres columnas | `6f6ea19` |

Cada deploy de producción quedó en READY en Vercel, con el control `verificar-sitio` en verde. Si algo sale mal, se vuelve al deploy anterior con Instant Rollback.

---

## 1. Revisión del rediseño hecho por la sesión de Claude CLI

Se revisó la rama `redisenio-sitio`: 17 commits y 125 archivos.

- **Lo que estaba bien:** el límite con los demos (CSS bajo `[data-sitio]`, enlaces a demos con `<a>`), el catálogo que solo lista demos con página, el nombre del negocio bien codificado en WhatsApp, el canvas que se pausa fuera de pantalla y que no quedaran secretos en el diff.
- **Hallazgos:**
  - los términos decían "50/50" y contradecían las preguntas frecuentes;
  - había precios escritos a mano en la home;
  - el registro del catálogo no estaba documentado;
  - la privacidad hablaba de una newsletter y de formularios que no existen.

## 2. Formas de pago y contacto (decisiones de Diego)

- **Formas de pago:**
  - **Pago único:** 50% al comenzar y 50% al terminar.
  - **Hasta 3 cuotas sin interés:** con tarjeta por MercadoPago o directo a Sitiazo. La primera cuota se paga al entregar la web.
  - **Mensual de $12.990:** solo para el plan Básico. El primer mes se paga al entregar, y el sitio queda publicado mientras se pague.
- **Devoluciones:** la escala 80% / 50% / sin devolución se calcula sobre lo pagado.
- **Contacto:** solo por WhatsApp. Cal.com salió como canal de contacto (sigue como función del plan Catálogo para la web del cliente).
- **Archivos tocados:** términos, preguntas frecuentes, `FORMAS_PAGO`, home, planes y contacto. De la privacidad salieron la newsletter, los formularios y Cal.com.

## 3. Código ordenado (fase 1)

- **`lib/config.ts`:**
  - sin exports muertos (`BRAND`, `BUSINESS_HOURS`, `getPlan`, `STARTING_PRICE_SHORT`, `priceShort`);
  - sin restos de Roma Crochet, voseo ni emojis;
  - funciones nuevas `MARCA`, `cuotas()` y `PLAN_MENSUAL`.
- **`lib/seo.tsx`:** un solo componente `<JsonLd>` que escapa `<`. Se borraron 7 funciones sin uso.
- **Precios desde la config:** los términos y la home leen precios y plazos de `lib/config.ts`.
- **`app/demos/catalogo.ts`:** 1.252 líneas menos (los campos `tagline` y `gradient`, que nadie usaba).
- **Blog:** los cuerpos de las notas pasaron a `content/blog/*.mdx`.
- **Control automático:** `scripts/verificar-sitio.mjs` corre en el `postbuild`. Revisa el sitemap, que cada página tenga un solo `h1`, title, description, canonical, `og:image` y JSON-LD válido, que no haya guion largo y que la home tenga el `@id` de la organización. Si algo falla, frena el deploy.

## 4. SEO y GEO (fase 3)

- **Datos de Sitiazo para Google:** salieron de los 624 demos y quedaron solo en las páginas del sitio, con un `@id` estable. El `legalName` no se publica hasta que se confirme.
- **Demos:** tienen canonical propio.
- **X (Twitter):** usa la imagen para compartir de cada página.
- **Verificación de Search Console y Bing:** se hace con las variables `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` y `NEXT_PUBLIC_BING_SITE_VERIFICATION`. Search Console ya está conectado.
- **`/llms.txt`:** se genera en el build con planes, formas de pago, demos por familia, páginas y contacto.

## 5. Conversión (fase 2)

- **Planes:** cada uno muestra sus cuotas y el Básico su mensual. "Quiero este plan" tiene un selector de forma de pago y arma el WhatsApp con plan, pago y nombre del negocio.
- **"¿Cuál te conviene?":** tres preguntas y un plan recomendado. Está solo en `/planes/`, y su lógica tiene un test de node.
- **Barra fija en el celular:** muestra "Pide tu demo" y se esconde cuando hay otro botón principal a la vista o el aviso de cookies está abierto.
- **"Sin riesgo para ti":** en `/planes/`, `/como-funciona/` y las páginas por rubro.
- **Medición:** cada clic a WhatsApp registra el evento `whatsapp` en Vercel Analytics, con `origen`, `plan`, `pago` y `conNegocio`.

## 6. Contenido para Google (fase 4)

- **12 páginas por rubro en `/paginas-web-para/<rubro>/`:** restaurantes, cafeterías, pastelerías, cabañas, peluquerías, talleres, veterinarias, centros de salud, dentistas, viveros, gimnasios y construcción.
  - Cada una tiene texto propio del rubro, sus demos reales, el plan sugerido, preguntas frecuentes con su schema y migas de pan.
  - Solo se publican rubros con 5 demos o más.
  - Hay un índice en `/paginas-web-para/`, enlazado desde el footer, `/demos/`, la home y `llms.txt`.
- **4 notas nuevas:** página web o Instagram, cómo aparecer en Google Maps, dominio .cl (con la tarifa de NIC Chile citada) y qué debe tener la web de un restaurante.

## 7. Ajustes visuales posteriores

- **Ficha:** "En resumen" pasó a llamarse "Lo esencial, en una ficha.". Son cuatro celdas (precio, pago, plazo y demo), con el dato grande en la serif. Se quitaron las filas Dónde y Contacto y su botón.
- **Menos repetición:**
  - fuera el botón "¿Prefieres ver tu demo?" bajo los planes y la frase duplicada del mensual;
  - en la home salieron "¿Cuál te conviene?" y los proyectos propios;
  - en `/planes/` salieron "Elige cómo pagar" y la ficha.
- **Planes:** tres columnas iguales con la misma estructura y los botones a la misma altura. El Recomendado tiene borde amarillo y va primero en el celular.
- **Menos alto:**

  | Página | Celular | Escritorio |
  |---|---|---|
  | Home | −22 % | −24 % |
  | `/planes/` | −25 % | −31 % |

## 8. Verificación hecha

Todo se midió en los previews de Vercel. En el PC no se corrieron build, lint ni typecheck, porque es una regla del proyecto.

- **Páginas:** a 360, 1024 y 1440 px, sin errores de JavaScript ni scroll horizontal. Botones entre 44 y 52 px.
- **Demos:** los 5 de referencia salen idénticos a producción, píxel a píxel (10 de 10).
- **Mensajes de WhatsApp:** comprobados para cada plan y forma de pago.
- **LCP de laboratorio:** home 2,35 s, planes 2,14 s, rubro 2,17 s. CLS 0.
- **Producción:** después de cada merge se revisó que las páginas clave respondan bien, que `/casos/roma-crochet/` redirija y que el JSON-LD y el sitemap estén correctos.

## 9. Pendientes para Diego

- Enviar `https://sitiazo.cl/sitemap.xml` en Search Console.
- Confirmar la razón social ("Eldrinor y Vaelen" o Diego Bravo).
- Definir si los planes son "páginas" o "secciones": la config dice "5 páginas", pero la lista de lo que incluye dice "Hasta 5 secciones".
- Confirmar que el demo sigue llegando en 48 horas.
- Perfiles reales de Sitiazo (Instagram, ficha de Google) para `sameAs`.
- Un testimonio real de Rancho Itahue sobre Sitiazo, con su permiso.
- Crear la ficha de Google Business de Sitiazo en Curicó y pedir reseñas.
- Decidir qué hacer con los 2 demos del catálogo sin página (`cabanas-rocas-de-pellines`, `el-rincon-de-faby`).
- Borrar `public/og-image-planes.png`, que quedó sin uso.
- Revocar los links compartidos y el token de bypass de Vercel cuando termines de revisar. Los links vencen solos en 23 horas.

## 10. Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Páginas del sitio | `app/(sitio)/` |
| Componentes nuevos | `_components/AccionPlan.tsx`, `CualTeConviene.tsx`, `BarraMovil.tsx`, `SinRiesgo.tsx`, `DatosClaros.tsx` |
| Lógica de mensajes, recomendación y medición | `_lib/contacto.ts`, `_lib/recomendar.ts` (+ test), `_lib/medir.ts` |
| Páginas por rubro | `content/rubros.ts`, `app/(sitio)/paginas-web-para/` |
| Notas del blog | `content/posts.ts` (metadatos), `content/blog/*.mdx` (texto) |
| llms.txt | `app/llms.txt/route.ts` |
| Control del build | `scripts/verificar-sitio.mjs` (postbuild) |
| Scripts y capturas de verificación | `tmp/fase5/`, `tmp/ficha/`, `tmp/menos/` (fuera de git) |
