---
name: sitiazo-verificar
description: Verificar cambios de Sitiazo sin cargar el PC. El build del preview de Vercel es el chequeo de compilación, y Playwright revisa contra el deploy (errores, desborde, capturas, LCP, demos idénticos a producción). Lo pesado va al VPS. Úsala cuando haya que confirmar que algo compila, se ve bien, no movió los demos o carga rápido, o cuando dudes en correr dev, build o typecheck en local.
---

# Verificar sin levantar nada pesado en el PC

En este repo no se corre `npm run dev`, `build`, `lint` ni `typecheck` en el PC de Diego: son 600 páginas y se come la RAM. Hay caminos más baratos para cada pregunta:

| Pregunta | Cómo se responde |
|---|---|
| ¿Compila? (tipos, prebuild, export) | Push de la rama y build del preview de Vercel: `scripts/preview.mjs --esperar` |
| ¿Se ve bien, hay errores JS o desborde? | `scripts/revisar.mjs <url-del-preview> --rutas …` |
| ¿Moví algún demo? | `scripts/demos-identicos.mjs <url-del-preview>` |
| ¿Carga rápido en celular? | `scripts/lcp.mjs <url-del-preview> --rutas …` |
| ¿Necesito un build o un servidor completo? | En el VPS (abajo), no en el PC |

Los scripts están en `.agents/skills/sitiazo-verificar/scripts/` y se corren desde la raíz del repo, porque usan el `playwright` y el `sharp` del proyecto. Abren un solo Chromium headless y lo cierran al terminar.

## Flujo normal

1. Commit y push a una rama, nunca a `main`: cada push a `main` despliega a producción.
2. `node .agents/skills/sitiazo-verificar/scripts/preview.mjs --esperar`. Muestra el estado del build del commit y su URL. Si falla, el enlace a los logs de Vercel muestra el error de TypeScript o de build.
3. Con la URL del preview, revisa lo que corresponda.
   - La URL fija de una rama es `https://sitiazo-git-<rama>-falopass-projects.vercel.app`.
   - Si la rama tiene caracteres raros, usa la que entrega `preview.mjs`.

```bash
P=https://sitiazo-git-<rama>-falopass-projects.vercel.app
node .agents/skills/sitiazo-verificar/scripts/revisar.mjs $P --rutas /,/planes/,/demos/ --anchos 360,1440
node .agents/skills/sitiazo-verificar/scripts/revisar.mjs $P --rutas / --reduce          # movimiento reducido
node .agents/skills/sitiazo-verificar/scripts/demos-identicos.mjs $P                      # 5 demos, 360 y 1440
MSYS_NO_PATHCONV=1 node .agents/skills/sitiazo-verificar/scripts/lcp.mjs $P --rutas /,/demos/
```

Las capturas quedan en `tmp/` (ignorado por git). Revísalas con la herramienta de lectura de imágenes: una captura sí muestra la composición, pero no prueba el movimiento.

## Preview protegido (Vercel SSO)

Los previews piden login de Vercel. Para automatizar se usa el secreto de "Protection Bypass for Automation", que está en Vercel → proyecto → Settings → Deployment Protection.
- Pásalo solo como variable de entorno del comando: `BYPASS=<secreto> node …`. Nunca lo escribas en un archivo.
- Los scripts dejan la cookie de bypass solo en el dominio `vercel.app`.
- Sin `BYPASS`, los scripts funcionan contra producción (`https://sitiazo.cl`).

## Cuándo comparar demos

`demos-identicos.mjs` captura producción y preview en la misma corrida y compara cada píxel. Córrelo cuando el cambio toca algo que los demos cargan:
- `app/layout.tsx`, `app/globals.css`, `lib/config.ts`, `lib/fonts.ts`;
- `app/demos/layout.tsx`, `kit.tsx`, `blitz-kit.tsx`, `meta.ts`, `lazy-map.tsx`;
- `next.config.ts`, `package.json`.

Si cambiaste un demo puntual, pásalo en `--slugs`. Un mapa embebido o una fecha pueden variar solos; si ves una diferencia chica, repite la corrida antes de concluir.

Para los demos también sirven los scripts de QA del repo, que revisan contra un deploy y no contra un servidor local:
- `node scripts/qa-movil-cloud.mjs --base https://sitiazo.cl --slugs a,b`: botones de más de 52 px, footer, contraste y desborde.
- `node scripts/qa-desborde.mjs --base https://sitiazo.cl --slugs a,b`: culpables del scroll horizontal.
- `node scripts/shot-movil.mjs <slug>`: captura móvil completa y la de escritorio.

Estos scripts no manejan el bypass, así que úsalos contra producción o adapta su `goto` con `contexto()` de `scripts/lib.mjs`.

## Build, typecheck o servidor completo: en el VPS

Cuando de verdad necesites `next build`, `tsc` o servir el export completo (por ejemplo, el QA de los 600 demos), hazlo en el VPS (`ssh vps`, 6 vCPU y 11 GB, con node 22). Allá se permite instalar y compilar:

```bash
tar czf - --exclude=node_modules --exclude=.next --exclude=out --exclude=.git --exclude=tmp . \
  | ssh vps 'mkdir -p ~/dev/sitiazo && tar xzf - -C ~/dev/sitiazo'
ssh vps 'cd ~/dev/sitiazo && npm ci && nice -n 10 npx tsc --noEmit && nice -n 10 npm run build'
ssh vps 'cd ~/dev/sitiazo && serve 8811 sitiazo -- python3 -m http.server 8811 --directory out'
curl -sS -o /dev/null -w '%{http_code}\n' https://sitiazo.51-79-71-83.sslip.io/
```

- El VPS comparte caja con la producción de QuizVerse: usa `nice -n 10` en los builds y no toques contenedores ajenos.
- Con la URL `sslip.io` sirven los mismos scripts (`revisar.mjs`, `qa-movil-cloud.mjs --base …`) sin bypass.
- Al terminar, `ssh vps serve stop sitiazo`.

## Si igual hay que mirar algo en local

- Para un componente aislado basta leer el código y el diff.
- Para una página, el preview de Vercel cuesta menos RAM que `next dev`. Con un push, en unos 4 minutos hay URL.
- Los scripts de datos que usan el navegador compartido por CDP (puerto 29229) no abren navegadores nuevos: reutiliza ese navegador en vez de lanzar otro (ver la skill `sitiazo-datos`).
