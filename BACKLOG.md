# Backlog

Cosas vistas sin arreglar. Cada ítem: archivo, una frase, y si bloquea algo.

## Documentos desactualizados

- `DIRECCION.md:5` y `PLAN-REDISENO.md:134,228`: hablan de "desde $79.990" y del mensual de $12.990, el modelo de precios anterior. No bloquea nada, pero confunde al leerlos junto a `lib/config.ts`.
- `MEJORAS-SITIO.md` sección 2: describe las formas de pago antiguas (50/50, cuotas, mensual $12.990). Queda como registro histórico con aviso al inicio; si se reescribe, que sea desde `lib/config.ts`.

## Decisiones pendientes de Diego (ya listadas en `MEJORAS-SITIO.md` §9)

- `lib/config.ts`: el plan Recomendado dice `pages: '5 páginas'` pero su feature dice `'Hasta 5 secciones'`; falta decidir la palabra correcta. No bloquea.
- `public/og-image-planes.png`: sin referencias en el código; candidato a borrar cuando se confirme. No bloquea.

## Dependencias revisadas y conservadas

- `@mdx-js/loader` y `@mdx-js/react`: ningún archivo las importa directo (`grep -r`), pero son peer dependencies de `@next/mdx`, que sí se usa en `next.config.ts` para `content/blog/*.mdx`. Se quedan.
- `wrangler`: ningún script lo importa, pero `wrangler.jsonc` usa su schema y es la herramienta del deploy a Cloudflare Workers. Se queda.
