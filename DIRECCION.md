# Dirección de experiencia del sitio principal

Tres conceptos completos para el rediseño de sitiazo.cl, y la elección. La identidad (paleta, tipografía, texturas, reglas de copy) es la de `DISENO.md`; aquí se decide cómo se recorre.

Contexto que manda: quien llega es dueño o dueña de una pyme chilena, desde un link de WhatsApp, en un celular de 360 px. La oferta concreta es que le armamos un demo de su web antes de que pague, y que queda publicada en 7 días desde $79.990.

---

## A. El scroll es el proceso

**Idea central.** La home cuenta, de arriba abajo, cómo nace la web de una pyme. Las tres texturas de `DISENO.md` dejan de ser decoración y pasan a ser etapas: ASCII es la estructura, dither es la forma con imagen, color es la web publicada. Un solo objeto (la captura real de un demo nuestro, en formato celular) atraviesa las tres etapas mientras el visitante baja.

**Recorrido.**
1. Hero: titular, bajada con plazo y precio, CTA amarillo a WhatsApp. Al lado (debajo en el celular) el objeto en ASCII, armándose y rotando entre tres rubros reales.
2. Pieza central: el objeto queda fijo mientras pasan tres pasos de texto. "Nos mandas tu Instagram" lo deja en ASCII; "armamos tu demo en 48 horas" lo disuelve en dither; "la publicamos en 7 días" lo revela a color.
3. Rubros: tira de demos reales de otros rubros en dither, que se desliza en horizontal con el scroll (reemplazó a la marquesina de texto el 2026-10-23).
4. Demos por rubro: capturas reales en dither que se revelan a color.
5. Planes, caso Rancho Itahue, proyectos propios y cierre: ya en la etapa "publicada", nítidos, sin texturas sobre el contenido.

**Qué se mueve y por qué.**
- El objeto cambia de textura con el scroll: es el relato del servicio, no un adorno.
- El ASCII se dispersa bajo el cursor o con un toque: la web todavía es materia blanda, se puede tocar.
- Las tarjetas de demos se revelan a color: detrás de cada una hay un negocio real.
- Las páginas cambian con una transición escalonada: pasar de página es pasar de etapa.

**A 360 px.** Primer pantallazo: titular de dos líneas, bajada de 18 palabras, CTA. El objeto asoma debajo. Al bajar, el objeto se fija en la mitad superior de la pantalla y los pasos pasan por la mitad inferior, sobre fondo sólido. Sin scroll horizontal y sin secuestrar el scroll: la velocidad la pone el dedo.

**Riesgos.** El canvas puede pesar en un Android de gama baja: se carga diferido, se pausa fuera de pantalla, DPR máximo 2, celdas más grandes bajo 640 px y dibujo solo cuando cambia el progreso. Con movimiento reducido, cada paso muestra su cuadro estático.

---

## B. Uno como el tuyo

**Idea central.** La home es un selector de rubro. La primera pregunta no es "qué hacemos" sino "qué haces tú": barbería, cafetería, taller, veterinaria, vivero, gimnasio.

**Recorrido.** Hero con el titular y una fila de rubros. Al elegir uno, el visual del hero cambia al demo real de ese rubro (de dither a color), los demos de abajo se reordenan para mostrar primero ese rubro y el botón de WhatsApp precarga un mensaje con el rubro. Después vienen proceso, planes y cierre, sin cambios por rubro.

**Qué se mueve y por qué.** La transición de dither a color al elegir rubro: respuesta a la elección. El reordenamiento de la grilla con una transición de layout: muestra que el sitio entendió.

**A 360 px.** Los rubros son una fila de chips con scroll horizontal y snap bajo el titular. El visual queda bajo el CTA. Cada toque cambia el visual y el mensaje.

**Por qué no.** Convierte bien, pero es un configurador, no una experiencia que se recuerde. Exige demos curados y aprobados para cada rubro, y suma estado en la parte más sensible al LCP. Además obliga a decidir qué pasa cuando el rubro del visitante no está en la lista.

---

## C. Hoja de contactos

**Idea central.** La home es una mesa de luz: cientos de demos reales en dither, en una grilla que se recorre. Comunica volumen y oficio: esto no es una promesa, ya lo hicimos cientos de veces.

**Recorrido.** Hero corto y, debajo, la mesa: en escritorio una grilla que se arrastra; en el celular un masonry vertical. Tocar una captura la revela a color y ofrece abrir el demo. Proceso, planes y cierre al final.

**Qué se mueve y por qué.** El arrastre de la mesa (exploración), la revelación a color (lo real detrás de cada miniatura).

**A 360 px.** Masonry de dos columnas con carga progresiva.

**Por qué no.** Exige capturar cientos de demos y mantener esas capturas al día. Pesa en el celular. Los demos son para negocios que todavía no son clientes, y mostrarlos como muro sin contexto se lee como volumen, no como cuidado. El relato del proceso y el CTA quedan al fondo.

---

## Elección: A, "El scroll es el proceso"

La oferta de Sitiazo es el proceso mismo: te armamos el demo antes de que pagues y en 7 días está publicado. A es el único concepto donde el movimiento cuenta exactamente eso, y lo hace con las tres texturas que la marca ya definió, en vez de agregar una idea nueva encima. Mantiene el precio, el plazo y el CTA en HTML nítido desde el primer pantallazo del celular, funciona sin secuestrar el scroll y se degrada limpio a estático. De B se toma la sección de demos por rubro, para que cada visitante encuentre uno parecido a su negocio. De C solo queda la idea de usar capturas reales de nuestros demos como imagen, no la mesa.

---

## Evolución después de implementar (2026-10-23)

El concepto se mantuvo y se llevó más lejos en tres pasos, todos pedidos por Diego:

1. **La marquesina de texto pasó a ser una tira de demos reales en dither.** Se desliza con el scroll, sin loop. Los rubros se muestran con trabajo real y no con palabras.
2. **El proceso pasa a ser el del visitante.** El hero pregunta "¿Cómo se llama tu negocio?". Ese nombre:
   - se arma en ASCII sobre la captura y sigue en la etapa de dither;
   - aparece en los tres pasos y en el cierre;
   - viaja en todos los mensajes de WhatsApp, también en "Quiero uno así" de cada demo.

   Toma lo mejor del concepto B (personalización por negocio) sin convertir la home en un configurador.
3. **El índice `/demos/` se volvió parte del sitio.** Tiene buscador, familias de rubro y una lista editorial con el total real de demos. Es el lugar donde termina "Ver demos". Los demos en sí no se tocaron.

El detalle de implementación está en `DISENO.md` (secciones 3, 4, 7 y 7b), y el estado y la verificación, en `PLAN-REDISENO.md`.
