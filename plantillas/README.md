# Plantillas para demos de prospectos

Sistema para armar, rápido, la demo gratis de un prospecto **que ya la pidió**,
con sus fotos y sus servicios reales. No confundir con las «plantillas» de
`DISENO.md`, que son secciones del sitio de Sitiazo.

**Esta corrida no armó ninguna demo real.** Las demos reales se arman solo
cuando el prospecto las pide; aquí queda la herramienta y un ejemplo ficticio.

## Qué hay

```
plantillas/
  contrato.ts            tipos de la ficha del negocio (FichaNegocio)
  armar.mjs              arma el árbol de la demo (ensayo por defecto)
  comprobar.mjs          chequeo local sin red ni node_modules
  familias/
    servicio/            esqueleto editorial: servicios, horas, talleres
    comida/              esqueleto carta: restaurantes, cafés, pastelerías
    catalogo/            esqueleto grilla: tiendas, distribuidoras, mueblerías
    blitz-kit.tsx        puente '../blitz-kit' para typecheck (no se copia)
    meta.ts              puente '../meta' para typecheck (no se copia)
  ejemplo/
    ficha.json           negocio ficticio «Ejemplo Norte»
    fotos/               SVGs de muestra (ninguna foto de clientes)
```

Cada familia es `page.tsx` + `content.ts` con la forma de los demos reales de
`app/demos/`: nav con WhatsApp, hero con foto, sección de servicios o carta o
grilla, galería, datos de contacto y footer. Lo que la ficha no trae aparece
como `Falta: horario`, `Falta: dirección`, `Falta: foto`: nunca se inventa un
dato. Las reglas móviles de `app/demos/GUIA-MOVIL.md` ya vienen aplicadas
(botones ≤ 52 px, footer compacto, velo oscuro sobre fotos).

## Cómo se usa el día que un prospecto pida su demo

1. **Juntar los datos reales** del negocio (ficha de Google Maps, redes,
   la conversación de WhatsApp; la skill `sitiazo-datos` ayuda) y sus fotos.
2. **Llenar una ficha** `ficha.json` siguiendo `contrato.ts`: nombre, rubro,
   ciudad, WhatsApp, al menos un servicio con su línea real y al menos una
   foto. `direccion` y `horario` son opcionales; lo que no esté confirmado
   se omite. Guardar la ficha junto a las fotos fuera de `app/` (por ejemplo
   en una carpeta del prospecto) mientras se arma.
3. **Ensayar:**
   ```bash
   node plantillas/armar.mjs --ficha ruta/ficha.json --slug nombre-del-negocio
   ```
   Imprime el árbol que copiaría y los huecos que quedarán marcados.
4. **Escribir** (solo cuando el ensayo se vea bien):
   ```bash
   node plantillas/armar.mjs --ficha ruta/ficha.json --slug nombre-del-negocio --escribir
   ```
   Crea `app/demos/<slug>/page.tsx` + `content.ts` y copia las fotos a
   `public/demos/<slug>/`.
5. **Terminar a mano, como cualquier demo:** completar los `Falta: ...` con
   datos reales verificados o decidir quitar esas secciones, ajustar paleta y
   textos al negocio, revisar en 390 × 844, registrar el slug en el catálogo
   (`app/demos/catalogo.ts`) y correr `npm run fechas` antes del commit.

## Validaciones de armar.mjs

Rechaza la ficha (código distinto de 0) si falta `nombre`, `rubro`, `ciudad`,
`whatsapp`, al menos un servicio con `nombre` + `linea`, o al menos una foto
con `ruta` y `alt`. Cada `ruta` de foto debe existir en disco (relativa al
JSON). La `familia` debe ser `servicio`, `comida` o `catalogo` (campo
`familia` de la ficha o `--familia`). Rechaza slugs que ya existan en
`app/demos/`, `public/demos/` o registrados en `data.ts`/`catalogo.ts`.

Sin `--escribir` no toca `app/` ni `public/`: es solo un ensayo en stdout.

## Chequeo local

```bash
node plantillas/comprobar.mjs
```

Corre el ensayo contra la ficha ficticia de `ejemplo/` y confirma que las
fichas incompletas fallan. No necesita `node_modules` ni red.
