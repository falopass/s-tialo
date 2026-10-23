import type { PlanId } from '@/lib/config'

/**
 * Páginas por rubro (/paginas-web-para/<slug>/). Cada una responde a una búsqueda como
 * "página web para peluquería" con texto propio del rubro y los demos reales que ya armamos.
 *
 * - `claves` se buscan en el rubro de cada demo del catálogo, en minúsculas y sin tildes.
 *   `excluir` descarta demos que calzan por error (por ejemplo, "peluquería canina").
 * - Una página solo se publica si tiene 5 demos reales o más (ver MIN_DEMOS). Así no hay
 *   páginas delgadas que Google trate como páginas puerta.
 * - Nada de cifras de mercado ni promesas fuera de lo que incluye cada plan en lib/config.ts.
 */

export const MIN_DEMOS = 5

export type Rubro = {
  slug: string
  /** En plural y minúsculas, para títulos: "peluquerías y barberías". */
  nombre: string
  /** Para el mensaje de WhatsApp: "quiero una web así para mi peluquería". */
  miNegocio: string
  claves: string[]
  excluir?: string[]
  titulo: string
  descripcion: string
  intro: string
  necesita: { titulo: string; texto: string }[]
  plan: PlanId
  porQue: string
  preguntas: { pregunta: string; respuesta: string }[]
}

export const RUBROS: Rubro[] = [
  {
    slug: 'restaurantes',
    nombre: 'restaurantes y picadas',
    miNegocio: 'mi restaurante',
    claves: ['restaur', 'restobar', 'resto bar', 'picada', 'sangucher', 'comida', 'parrill', 'pizzer', 'sushi', 'marisquer', 'fuente de soda'],
    titulo: 'Página web para restaurantes y picadas',
    descripcion:
      'Página web para tu restaurante o picada: carta, horario, cómo llegar y pedidos por WhatsApp. Mira demos reales de restaurantes de Chile y pide el tuyo gratis.',
    intro:
      'La gente decide dónde comer desde el celular, en pocos segundos: busca tu nombre, mira la carta, revisa si estás abierto y quiere saber cómo llegar. Si eso no aparece rápido, se va al local de al lado.',
    necesita: [
      { titulo: 'La carta a la vista', texto: 'Tus platos y precios ordenados por sección, fáciles de leer en el celular, sin descargar un PDF.' },
      { titulo: 'Horario y dirección claros', texto: 'Si abres hoy, hasta qué hora y un mapa para llegar, arriba y sin buscar.' },
      { titulo: 'Pedidos y reservas por WhatsApp', texto: 'Un botón que abre el chat con el mensaje listo, para pedir para llevar o reservar mesa.' },
      { titulo: 'Fotos reales del local', texto: 'Tus platos y tu salón, sacados de tus redes. Abren el apetito más que cualquier texto.' },
    ],
    plan: 'recomendado',
    porQue:
      'Con hasta 5 secciones caben la carta, el local, el horario y la ubicación, y trae SEO local para aparecer cuando buscan dónde comer en tu comuna.',
    preguntas: [
      { pregunta: '¿Puedo cambiar la carta y los precios después?', respuesta: 'Sí. Nos mandas los cambios por WhatsApp y los subimos. Con el plan Básico mensual, los ajustes de contenido van incluidos.' },
      { pregunta: '¿Sirve si ya tengo Instagram?', respuesta: 'Sí, se complementan. Instagram muestra el día a día; la web responde lo que todos preguntan (carta, horario, dirección) y aparece en Google cuando buscan dónde comer.' },
      { pregunta: '¿Los pedidos llegan a una app?', respuesta: 'No. Llegan a tu WhatsApp con el mensaje armado, sin comisiones de aplicaciones de delivery.' },
      { pregunta: '¿Qué necesitan para armar el demo?', respuesta: 'Tu Instagram o tu ficha de Google. Con tus fotos y tus datos te armamos un demo gratis para que lo veas antes de decidir.' },
    ],
  },
  {
    slug: 'cafeterias',
    nombre: 'cafeterías',
    miNegocio: 'mi cafetería',
    claves: ['cafeter', 'cafe', 'coffee'],
    titulo: 'Página web para cafeterías',
    descripcion:
      'Página web para tu cafetería: lo que preparas, horario, ubicación y pedidos por WhatsApp. Mira demos reales de cafeterías y pide el tuyo gratis.',
    intro:
      'Una cafetería se elige por cómo se ve y por lo cerca que queda. Una web simple, con tus fotos, tu horario y tu ubicación, hace que quien te encuentra en Google llegue a tu puerta.',
    necesita: [
      { titulo: 'Tu estilo en la primera foto', texto: 'El café, el local y lo que te hace distinto, en la parte de arriba de la página.' },
      { titulo: 'Lo que preparas', texto: 'Cafés, dulces y salados destacados, con precios si quieres mostrarlos.' },
      { titulo: 'Horario y mapa', texto: 'Si estás abierto ahora y cómo llegar, sin tener que preguntar.' },
      { titulo: 'Encargos por WhatsApp', texto: 'Tortas, cajas para regalo o pedidos para la oficina, con el mensaje listo para enviar.' },
    ],
    plan: 'basico',
    porQue:
      'Una página bien hecha basta para mostrar tu estilo, lo que preparas, el horario y la ubicación. Si prefieres pagar mes a mes, el Básico también va mensual con hosting y dominio incluidos.',
    preguntas: [
      { pregunta: '¿Puedo mostrar la carta completa?', respuesta: 'Sí. En una página caben tus productos destacados; si quieres la carta completa en secciones, el plan Recomendado tiene espacio para eso.' },
      { pregunta: '¿Me ayudan a aparecer en Google Maps?', respuesta: 'La web enlaza a tu ficha de Google y la refuerza. El plan Recomendado incluye SEO local para tu comuna.' },
      { pregunta: '¿Tengo que tener fotos profesionales?', respuesta: 'No. Armamos el demo con las fotos de tus redes. Si después quieres fotos nuevas, la sesión de fotos está como extra en la Región del Maule.' },
      { pregunta: '¿Cuánto cuesta?', respuesta: 'Depende del plan. Mira los precios y las formas de pago en la página de planes; el demo es gratis.' },
    ],
  },
  {
    slug: 'pastelerias-y-panaderias',
    nombre: 'pastelerías y panaderías',
    miNegocio: 'mi pastelería',
    claves: ['pasteler', 'panader', 'reposter', 'torta', 'dulcer'],
    titulo: 'Página web para pastelerías y panaderías',
    descripcion:
      'Página web para tu pastelería o panadería: tortas con foto y precio, encargos por WhatsApp y horario. Mira demos reales y pide el tuyo gratis.',
    intro:
      'Las tortas y los encargos se venden por foto. Si tu clienta tiene que escribirte para saber qué haces y cuánto cuesta, pierdes la venta en la mitad de la conversación.',
    necesita: [
      { titulo: 'Tus tortas con foto y precio', texto: 'Cada producto con su foto, su descripción y desde cuánto cuesta, para que elijan antes de escribirte.' },
      { titulo: 'Encargos con anticipación', texto: 'Cuántos días antes hay que pedir y cómo se retira o se despacha, explicado una vez y para siempre.' },
      { titulo: 'Pedido por WhatsApp', texto: 'El botón de cada producto abre el chat con el nombre de la torta ya escrito.' },
      { titulo: 'Horario y dirección', texto: 'Para el pan de todos los días y para retirar los encargos.' },
    ],
    plan: 'catalogo',
    porQue:
      'Trae fichas con foto y precio para hasta 10 productos, con búsqueda y filtros. Es la vitrina para que tus clientas elijan solas y te escriban con el pedido claro.',
    preguntas: [
      { pregunta: '¿Puedo vender en línea con pago?', respuesta: 'El plan Catálogo funciona como vitrina con pedido por WhatsApp. Para carrito y pago en línea recomendamos una plataforma de tienda especializada.' },
      { pregunta: '¿Y si tengo más de 10 productos?', respuesta: 'Podemos agrupar por tipo (tortas, kuchenes, dulces) o agregar fichas extra. Lo vemos en el demo.' },
      { pregunta: '¿Puedo cambiar precios en temporada?', respuesta: 'Sí. Nos mandas los cambios por WhatsApp y los actualizamos.' },
      { pregunta: '¿Qué necesitan para el demo?', respuesta: 'Tu Instagram o tu ficha de Google. Con tus fotos te armamos un demo gratis.' },
    ],
  },
  {
    slug: 'cabanas-y-hospedaje',
    nombre: 'cabañas y hospedajes',
    miNegocio: 'mis cabañas',
    claves: ['cabana', 'hostal', 'hotel', 'lodge', 'camping', 'hospedaje', 'alojamiento'],
    titulo: 'Página web para cabañas y hospedajes',
    descripcion:
      'Página web para tus cabañas, hostal o camping: fotos, capacidad, cómo llegar y reservas por WhatsApp, sin comisiones. Mira demos reales y pide el tuyo gratis.',
    intro:
      'Quien arrienda una cabaña quiere ver fotos, saber para cuántos es, qué incluye y cómo llegar. Si además puede reservar directo contigo, te ahorras la comisión de las plataformas.',
    necesita: [
      { titulo: 'Fotos de cada cabaña', texto: 'Interior, exterior y entorno, para que sepan exactamente qué arriendan.' },
      { titulo: 'Capacidad y qué incluye', texto: 'Cuántas personas, camas, cocina, estacionamiento, quincho o piscina, sin tener que preguntar.' },
      { titulo: 'Cómo llegar', texto: 'Mapa y referencias del camino, que en zonas rurales hacen la diferencia.' },
      { titulo: 'Reserva directa por WhatsApp', texto: 'Con fechas y cantidad de personas en el mensaje, sin comisión de intermediarios.' },
    ],
    plan: 'recomendado',
    porQue:
      'Con hasta 5 secciones caben las cabañas, los servicios, el entorno y cómo llegar, con SEO local para aparecer cuando buscan dónde quedarse en la zona.',
    preguntas: [
      { pregunta: '¿Tiene calendario de disponibilidad?', respuesta: 'La reserva se coordina por WhatsApp, donde confirmas fechas directo con el cliente. Si necesitas agenda en línea, el plan Catálogo incluye Cal.com integrado.' },
      { pregunta: '¿Sirve si ya estoy en Booking o Airbnb?', respuesta: 'Sí. Tu web es el canal directo, sin comisión, y la puedes compartir con clientes que repiten.' },
      { pregunta: '¿Puedo mostrar precios por temporada?', respuesta: 'Sí. Los publicamos como tú quieras y los cambiamos cuando nos avises.' },
      { pregunta: '¿Qué necesitan para el demo?', respuesta: 'Tu Instagram, tu ficha de Google o tu perfil en otra plataforma, para usar tus fotos y tus datos.' },
    ],
  },
  {
    slug: 'peluquerias-y-barberias',
    nombre: 'peluquerías y barberías',
    miNegocio: 'mi peluquería',
    claves: ['peluquer', 'barber', 'salon de belleza', 'estilista'],
    excluir: ['canin', 'mascot'],
    titulo: 'Página web para peluquerías y barberías',
    descripcion:
      'Página web para tu peluquería o barbería: servicios, precios, trabajos y hora por WhatsApp. Mira demos reales de peluquerías y pide el tuyo gratis.',
    intro:
      'Antes de pedir hora, la gente quiere ver tus trabajos, saber cuánto cuesta y dónde estás. Una web con eso resuelto hace que el mensaje que te llega ya sea para agendar.',
    necesita: [
      { titulo: 'Tus trabajos en fotos', texto: 'Cortes, color y peinados de tus redes, ordenados para que se vea tu estilo.' },
      { titulo: 'Servicios y precios', texto: 'Qué haces y desde cuánto, para que no tengas que responder lo mismo todos los días.' },
      { titulo: 'Hora por WhatsApp', texto: 'Un botón que abre el chat con el servicio elegido, listo para agendar.' },
      { titulo: 'Dirección y horario', texto: 'Dónde estás y cuándo atiendes, con el mapa a un toque.' },
    ],
    plan: 'basico',
    porQue:
      'En una página caben tus trabajos, tus servicios con precio, el horario y el botón para pedir hora. Se puede pagar mes a mes con hosting y dominio incluidos.',
    preguntas: [
      { pregunta: '¿Puedo tener agenda en línea?', respuesta: 'Con el plan Básico la hora se pide por WhatsApp. Si quieres que agenden solos en un calendario, el plan Catálogo incluye Cal.com integrado.' },
      { pregunta: '¿Puedo mostrar a cada estilista o barbero?', respuesta: 'Sí. Lo armamos en el demo con tus fotos y nombres reales.' },
      { pregunta: '¿Cómo actualizo los precios?', respuesta: 'Nos mandas los cambios por WhatsApp y los subimos.' },
      { pregunta: '¿Qué necesitan para el demo?', respuesta: 'Tu Instagram o tu ficha de Google. Con tus trabajos te armamos un demo gratis.' },
    ],
  },
  {
    slug: 'talleres-mecanicos',
    nombre: 'talleres mecánicos',
    miNegocio: 'mi taller',
    claves: ['mecanic', 'automotr', 'lubric', 'neumat', 'desabollad', 'scanner automotriz'],
    titulo: 'Página web para talleres mecánicos',
    descripcion:
      'Página web para tu taller mecánico: servicios, marcas que atiendes, ubicación y cotización por WhatsApp. Mira demos reales de talleres y pide el tuyo gratis.',
    intro:
      'Cuando el auto falla, la gente busca "taller mecánico" más su comuna y llama al primero que le da confianza. Una web clara, con tus servicios y tu dirección, te pone en esa lista.',
    necesita: [
      { titulo: 'Servicios explicados', texto: 'Mantención, frenos, scanner, suspensión: lo que haces, en palabras que entiende cualquiera.' },
      { titulo: 'Marcas y tipos de vehículo', texto: 'Si atiendes autos, camionetas o maquinaria, dicho de entrada.' },
      { titulo: 'Cotización por WhatsApp', texto: 'El cliente te escribe con el modelo y el problema en el mensaje.' },
      { titulo: 'Ubicación y horario', texto: 'Para que lleguen directo al taller, sin perderse.' },
    ],
    plan: 'recomendado',
    porQue:
      'Con hasta 5 secciones caben tus servicios, las marcas, el taller y la ubicación, y trae SEO local para aparecer cuando buscan un taller en tu comuna.',
    preguntas: [
      { pregunta: '¿Puedo publicar precios de mantención?', respuesta: 'Sí, si quieres. Muchos talleres prefieren cotizar por WhatsApp según el modelo; lo dejamos como te acomode.' },
      { pregunta: '¿Sirve aunque trabaje por recomendación?', respuesta: 'Sí. Quien te recomienda puede mandar el link, y quien te busca en Google te encuentra con tus datos correctos.' },
      { pregunta: '¿Me ayudan con la ficha de Google?', respuesta: 'La web enlaza y refuerza tu ficha de Google. El plan Recomendado incluye SEO local.' },
      { pregunta: '¿Qué necesitan para el demo?', respuesta: 'Tu ficha de Google o tus redes. Con tus fotos y tus datos te armamos un demo gratis.' },
    ],
  },
  {
    slug: 'veterinarias',
    nombre: 'veterinarias',
    miNegocio: 'mi veterinaria',
    claves: ['veterinari'],
    titulo: 'Página web para veterinarias',
    descripcion:
      'Página web para tu veterinaria: servicios, horario, urgencias y hora por WhatsApp. Mira demos reales de clínicas veterinarias y pide el tuyo gratis.',
    intro:
      'Quien tiene una mascota enferma busca rápido y decide por confianza: qué atienden, a qué hora y cómo llegar. Una web clara le da esa respuesta en segundos.',
    necesita: [
      { titulo: 'Servicios y especialidades', texto: 'Consulta, vacunas, cirugía, peluquería: lo que haces, ordenado.' },
      { titulo: 'Horario y urgencias', texto: 'Cuándo atiendes y qué hacer fuera de horario, dicho sin rodeos.' },
      { titulo: 'Hora por WhatsApp', texto: 'Con la mascota y el motivo en el mensaje, para que respondas más rápido.' },
      { titulo: 'El equipo', texto: 'Las personas que atienden, con sus fotos reales. Genera confianza antes de la primera visita.' },
    ],
    plan: 'recomendado',
    porQue:
      'Con hasta 5 secciones caben los servicios, el equipo, el horario y la ubicación, con SEO local para aparecer cuando buscan veterinaria en tu comuna.',
    preguntas: [
      { pregunta: '¿Puedo tener agenda en línea?', respuesta: 'Con el plan Recomendado la hora se pide por WhatsApp. El plan Catálogo incluye Cal.com integrado para agendar en un calendario.' },
      { pregunta: '¿Puedo mostrar precios de vacunas o consultas?', respuesta: 'Sí, si quieres. También se pueden dejar para cotizar por WhatsApp.' },
      { pregunta: '¿Cómo cambio el horario en verano?', respuesta: 'Nos avisas por WhatsApp y lo actualizamos.' },
      { pregunta: '¿Qué necesitan para el demo?', respuesta: 'Tu ficha de Google o tus redes. Con tus fotos y tus datos te armamos un demo gratis.' },
    ],
  },
  {
    slug: 'centros-de-salud',
    nombre: 'centros de salud y consultas',
    miNegocio: 'mi consulta',
    claves: ['kinesi', 'psicolog', 'medic', 'clinica', 'centro de salud', 'nutric', 'fonoaudi', 'oftalm', 'podolog', 'terapia'],
    excluir: ['veterin', 'dental', 'odontol', 'estetic'],
    titulo: 'Página web para centros de salud y consultas',
    descripcion:
      'Página web para tu centro de salud o consulta: especialidades, profesionales, convenios y hora por WhatsApp. Mira demos reales y pide el tuyo gratis.',
    intro:
      'En salud, la gente compara antes de pedir hora: quién atiende, qué especialidad tiene, dónde queda y si acepta su previsión. Una web ordenada responde eso y te ahorra llamadas.',
    necesita: [
      { titulo: 'Profesionales y especialidades', texto: 'Quién atiende y en qué, con foto y título, para elegir con confianza.' },
      { titulo: 'Convenios y previsión', texto: 'Si atiendes Fonasa, isapres o particular, dicho de entrada.' },
      { titulo: 'Hora por WhatsApp', texto: 'Con la especialidad en el mensaje, para coordinar más rápido.' },
      { titulo: 'Ubicación y horario', texto: 'Dónde está la consulta y en qué horario se atiende.' },
    ],
    plan: 'recomendado',
    porQue:
      'Con hasta 5 secciones caben las especialidades, el equipo, los convenios y la ubicación, con SEO local para tu comuna. Si quieres agenda en línea, el Catálogo trae Cal.com.',
    preguntas: [
      { pregunta: '¿Puedo poner información de tratamientos?', respuesta: 'Sí, con el texto que nos entregues. No escribimos indicaciones clínicas por nuestra cuenta.' },
      { pregunta: '¿Se puede agendar en línea?', respuesta: 'El plan Catálogo incluye Cal.com integrado para que los pacientes agenden solos. En los otros planes, la hora se pide por WhatsApp.' },
      { pregunta: '¿Los datos de los pacientes quedan en la web?', respuesta: 'No. La web no guarda datos de pacientes: el contacto llega a tu WhatsApp.' },
      { pregunta: '¿Qué necesitan para el demo?', respuesta: 'Tu ficha de Google o tus redes. Con tus fotos y tus datos te armamos un demo gratis.' },
    ],
  },
  {
    slug: 'dentistas',
    nombre: 'clínicas dentales y dentistas',
    miNegocio: 'mi consulta dental',
    claves: ['dental', 'dentist', 'odontol', 'ortodonc'],
    titulo: 'Página web para dentistas y clínicas dentales',
    descripcion:
      'Página web para tu clínica dental: tratamientos, equipo, convenios y hora por WhatsApp. Mira demos reales de clínicas dentales y pide el tuyo gratis.',
    intro:
      'Elegir dentista es elegir en quién confiar. Antes de pedir hora, la gente quiere ver la clínica, conocer al equipo y saber qué tratamientos haces.',
    necesita: [
      { titulo: 'Tratamientos', texto: 'Limpieza, ortodoncia, implantes, estética: lo que haces, explicado simple.' },
      { titulo: 'El equipo y la clínica', texto: 'Fotos reales de quienes atienden y del lugar.' },
      { titulo: 'Convenios', texto: 'Si atiendes con convenios o solo particular, dicho de entrada.' },
      { titulo: 'Hora por WhatsApp', texto: 'Con el tratamiento en el mensaje, para coordinar la evaluación.' },
    ],
    plan: 'recomendado',
    porQue:
      'Con hasta 5 secciones caben los tratamientos, el equipo, los convenios y la ubicación, con SEO local para aparecer cuando buscan dentista en tu comuna.',
    preguntas: [
      { pregunta: '¿Puedo mostrar precios de tratamientos?', respuesta: 'Sí, si quieres. Muchas clínicas prefieren evaluar primero; lo dejamos como te acomode.' },
      { pregunta: '¿Se puede agendar en línea?', respuesta: 'El plan Catálogo incluye Cal.com integrado. En el Recomendado, la hora se pide por WhatsApp.' },
      { pregunta: '¿Escriben ustedes la información de los tratamientos?', respuesta: 'Usamos el texto que nos entregues. No escribimos indicaciones clínicas por nuestra cuenta.' },
      { pregunta: '¿Qué necesitan para el demo?', respuesta: 'Tu ficha de Google o tus redes. Con tus fotos y tus datos te armamos un demo gratis.' },
    ],
  },
  {
    slug: 'viveros',
    nombre: 'viveros y paisajismo',
    miNegocio: 'mi vivero',
    claves: ['vivero', 'paisaj', 'jardin'],
    excluir: ['infantil'],
    titulo: 'Página web para viveros y paisajismo',
    descripcion:
      'Página web para tu vivero o empresa de paisajismo: plantas con foto y precio, despacho y pedidos por WhatsApp. Mira demos reales y pide el tuyo gratis.',
    intro:
      'Las plantas se eligen mirando. Si tus clientes pueden ver lo que tienes, con precio y tamaño, te escriben sabiendo qué quieren llevar.',
    necesita: [
      { titulo: 'Plantas con foto y precio', texto: 'Lo que tienes, por tipo, con tamaño y desde cuánto cuesta.' },
      { titulo: 'Despacho y retiro', texto: 'A qué comunas despachas y cómo se retira en el vivero.' },
      { titulo: 'Pedido por WhatsApp', texto: 'El nombre de la planta ya escrito en el mensaje.' },
      { titulo: 'Servicios de paisajismo', texto: 'Si diseñas o mantienes jardines, con fotos de trabajos reales.' },
    ],
    plan: 'catalogo',
    porQue:
      'Trae fichas con foto y precio para hasta 10 productos, con búsqueda y filtros: la vitrina para que elijan antes de escribirte.',
    preguntas: [
      { pregunta: '¿Y si tengo cientos de plantas?', respuesta: 'Agrupamos por tipo (árboles, flores, suculentas) y destacamos lo que más vendes. Lo vemos en el demo.' },
      { pregunta: '¿Puedo marcar lo que está agotado?', respuesta: 'Sí. Nos avisas por WhatsApp y lo actualizamos.' },
      { pregunta: '¿Hay pago en línea?', respuesta: 'El Catálogo funciona con pedido por WhatsApp. Para carrito y pago en línea recomendamos una plataforma de tienda especializada.' },
      { pregunta: '¿Qué necesitan para el demo?', respuesta: 'Tu Instagram o tu ficha de Google, con fotos de tus plantas.' },
    ],
  },
  {
    slug: 'gimnasios',
    nombre: 'gimnasios y centros deportivos',
    miNegocio: 'mi gimnasio',
    claves: ['gimnas', 'gym', 'crossfit', 'pilates', 'entrenamiento', 'box '],
    titulo: 'Página web para gimnasios y centros deportivos',
    descripcion:
      'Página web para tu gimnasio: planes, horarios, clases y matrícula por WhatsApp. Mira demos reales de gimnasios y pide el tuyo gratis.',
    intro:
      'Quien busca gimnasio compara tres cosas: cuánto cuesta, qué horario tiene y qué tan cerca queda. Si tu web lo responde, el mensaje que te llega es para inscribirse.',
    necesita: [
      { titulo: 'Planes y precios', texto: 'Mensualidad, trimestral, clases sueltas: claro y sin letra chica.' },
      { titulo: 'Horario y clases', texto: 'Cuándo abres y qué clases hay cada día.' },
      { titulo: 'Fotos del lugar', texto: 'Máquinas, salas y ambiente reales, para que sepan a qué llegan.' },
      { titulo: 'Inscripción por WhatsApp', texto: 'Con el plan elegido en el mensaje.' },
    ],
    plan: 'recomendado',
    porQue:
      'Con hasta 5 secciones caben los planes, las clases, el horario y el lugar, con SEO local para aparecer cuando buscan gimnasio cerca.',
    preguntas: [
      { pregunta: '¿Puedo cambiar el horario de clases seguido?', respuesta: 'Sí. Nos mandas el horario nuevo por WhatsApp y lo actualizamos.' },
      { pregunta: '¿Sirve para promociones de temporada?', respuesta: 'Sí. Publicamos la promoción y la sacamos cuando termine.' },
      { pregunta: '¿Se pueden reservar clases en línea?', respuesta: 'El plan Catálogo incluye Cal.com integrado para reservas. En el Recomendado se coordina por WhatsApp.' },
      { pregunta: '¿Qué necesitan para el demo?', respuesta: 'Tu Instagram o tu ficha de Google, con fotos del gimnasio.' },
    ],
  },
  {
    slug: 'construccion-y-oficios',
    nombre: 'constructoras y oficios',
    miNegocio: 'mi negocio',
    claves: ['construc', 'gasfit', 'electric', 'remodel', 'aluminio', 'vidrio', 'maestro', 'pintor', 'techumbre'],
    titulo: 'Página web para constructoras, maestros y oficios',
    descripcion:
      'Página web para tu constructora o tu oficio: trabajos realizados, servicios, zona que cubres y cotización por WhatsApp. Mira demos reales y pide el tuyo gratis.',
    intro:
      'En construcción y oficios se contrata por confianza: la gente quiere ver trabajos terminados y saber si llegas a su comuna. Una web con fotos reales vale más que cualquier promesa.',
    necesita: [
      { titulo: 'Trabajos realizados', texto: 'Fotos de obras y arreglos terminados, ordenadas por tipo.' },
      { titulo: 'Servicios', texto: 'Qué haces y qué no, para que te escriban por lo que sí resuelves.' },
      { titulo: 'Zona que cubres', texto: 'Las comunas donde trabajas, dicho de entrada.' },
      { titulo: 'Cotización por WhatsApp', texto: 'El cliente te manda el trabajo y fotos del lugar en el mismo chat.' },
    ],
    plan: 'recomendado',
    porQue:
      'Con hasta 5 secciones caben tus servicios, los trabajos realizados y la zona que cubres, con SEO local para aparecer cuando buscan tu oficio en la comuna.',
    preguntas: [
      { pregunta: '¿Puedo agregar trabajos nuevos después?', respuesta: 'Sí. Nos mandas las fotos por WhatsApp y las sumamos.' },
      { pregunta: '¿Sirve si trabajo solo, sin empresa?', respuesta: 'Sí. Muchos maestros trabajan por recomendación; la web hace que quien te recomienda tenga un link para compartir.' },
      { pregunta: '¿Tengo que publicar precios?', respuesta: 'No. En construcción lo normal es cotizar según el trabajo; el botón de WhatsApp es para eso.' },
      { pregunta: '¿Qué necesitan para el demo?', respuesta: 'Tus redes o tu ficha de Google, con fotos de trabajos que hayas hecho.' },
    ],
  },
]

/** Minúsculas y sin tildes, igual que el buscador del catálogo. */
export function normalizar(t: string) {
  return t.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase('es')
}

/** ¿El rubro de un demo pertenece a esta página? */
export function calzaRubro(r: Rubro, rubroDemo: string) {
  const t = normalizar(rubroDemo)
  return r.claves.some((c) => t.includes(c)) && !r.excluir?.some((c) => t.includes(c))
}

/** Los rubros con página publicada: al menos MIN_DEMOS demos reales en el catálogo. */
export function rubrosPublicados(demos: { rubro: string }[]): Rubro[] {
  return RUBROS.filter((r) => demos.filter((d) => calzaRubro(r, d.rubro)).length >= MIN_DEMOS)
}
