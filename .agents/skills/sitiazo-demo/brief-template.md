# Plantilla de brief para un demo

Copiar y completar. Si falta un dato, se deja dicho "no confirmado" y no se inventa.

## Negocio
- Nombre:
- Rubro:
- Dirección:
- WhatsApp:
- Redes:
- Rating y número de opiniones:
- Rango de precio publicado (si existe):
- Qué NO sabemos (horarios, carta, servicios, precios): dejarlo explícito.

## Fotos
- Lista de URLs o carpeta.
- Nombres exactos que usará la página (`hero.webp`, `mesa.webp`, …).
- Qué se descarta: texto promocional, logos borrosos, capturas.

## Dirección de arte
- Concepto en una frase.
- Paleta (5 colores con hex).
- Tipografía: display + texto, desde `app/fonts/`.
- Motivo gráfico.

## Movimiento
- Una animación propia, distinta a la del demo anterior.
- Dónde se ve (hero, entre secciones, al hacer scroll).
- Solo `transform`, `opacity` y `clip-path`; `prefers-reduced-motion`.

## Estructura
1. Hero
2. …
3. Cierre con CTA y teléfono
4. Footer compacto

## Reglas técnicas
- `next/font/local`, `../blitz-kit`, `../meta`, `../lazy-map`.
- 390 px sin desborde, botones ≤52 px, contraste 4.5:1.
- Español neutro, trato de tú, sin guion largo.

## Entrega
- Archivos exactos.
- Commit en la rama.
- Termina con `LISTO` y qué animación se usó.
