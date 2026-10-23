/**
 * content/blog-posts.ts
 *
 * Contenido completo de los posts del blog.
 * Separado de content/posts.ts (metadatos) para mantener el componente de ruta limpio.
 */

export interface BlogPostSection {
  heading?: string
  body: string
}

export interface BlogPostContent {
  sections: BlogPostSection[]
}

export const blogPostContent: Record<string, BlogPostContent> = {
  'precios-paginas-web-pymes-chile-2026': {
    sections: [
      {
        heading: 'Introducción',
        body: 'Si estás leyendo esto, probablemente tienes una pyme y estás pensando en hacer una página web. O quizás ya cotizaste y te pasaron un presupuesto que te pareció excesivo. Vamos a hablar de precios reales en Chile, en 2026, sin humo.',
      },
      {
        heading: '¿Por qué los precios varían tanto?',
        body: 'El mercado de diseño web en Chile es amplio y poco transparente. Por un sitio parecido puedes recibir presupuestos muy distintos, y la diferencia no siempre es calidad: a veces es estructura de costos, overhead y margen.',
      },
      {
        heading: 'Los 3 perfiles de precio en Chile',
        body: 'Perfil 1: Agencia grande. Incluyen project manager, diseñador senior, desarrollador y especialista SEO. Pagas el equipo completo. Tiene sentido si eres una empresa mediana o grande con presupuesto de marketing.',
      },
      {
        body: 'Perfil 2: Freelance/estudio chico ($79.990 - $199.990). Diseñador + desarrollador en una sola persona. Sin intermediarios, comunicación directa por WhatsApp. Menos overhead = precios más bajos. Ideal para pymes que necesitan presencia online sin gastar millones.',
      },
      {
        body: 'Perfil 3: Plataformas para armarla tú (Wix, Squarespace, Shopify), con plan mensual. La curva de aprendizaje es real y el resultado suele verse genérico. Pero si tienes tiempo y poco presupuesto, puede funcionar.',
      },
      {
        heading: '¿Qué incluye cada rango de precio?',
        body: 'En Sitiazo trabajamos en el rango estudio chico ($79.990 a $199.990, pago único). Por ese precio entregamos diseño primero para celular, SEO local básico, WhatsApp integrado y manual de uso. El hosting va aparte por $9.990 al mes, o puedes elegir el plan mensual de $12.990, que incluye hosting y dominio. Sin costos escondidos.',
      },
      {
        heading: 'La trampa del "barato"',
        body: 'Cuidado con las ofertas que no muestran trabajos reales. A veces son plantillas genéricas mal adaptadas, sin SEO y sin una versión para celular de verdad. Una web mal hecha es peor que no tener web: da mala impresión y aleja clientes.',
      },
      {
        heading: 'Conclusión: cuánto deberías pagar',
        body: 'Si eres una pyme chilena que necesita presencia online profesional, un rango razonable para empezar es $79.990 a $199.990. Si te cotizan mucho más, pregúntate si realmente necesitas todo lo que te están vendiendo. Y siempre pide ver trabajos anteriores reales, no maquetas.',
      },
      {
        heading: '¿Quieres cotizar tu proyecto?',
        body: 'Escríbeme por WhatsApp. Te respondo en horas, sin compromiso, sin venta agresiva. 30 minutos para entender tu negocio y darte un precio claro.',
      },
    ],
  },
  'whatsapp-business-pagina-web-pymes': {
    sections: [
      {
        heading: 'Por qué WhatsApp es el mejor canal de venta en Chile',
        body: 'En Chile, WhatsApp es la forma en que la gente le escribe a un negocio. Para una pyme, esto significa que tus clientes ya están ahí. No tienes que convencerlos de descargar otra app ni de crear una cuenta en tu sitio.',
      },
      {
        heading: 'Web + WhatsApp: la combinación ganadora',
        body: 'La web hace el trabajo de "vidriera digital": muestra tus productos, cuenta tu historia, da confianza. WhatsApp hace el trabajo de "vendedor": cierra la venta, responde dudas, coordina entregas. Separadas, cada una funciona. Juntas, se potencian.',
      },
      {
        heading: 'La estrategia de los mensajes pre-armados',
        body: 'El secreto está en los deep links de WhatsApp. Cada botón de tu web puede abrir WhatsApp con un mensaje pre-escrito según el contexto. Por ejemplo, si alguien está viendo un producto específico, el mensaje dice "Hola! Me interesa el [nombre del producto]". Esto reduce la fricción: la persona no tiene que pensar qué escribir.',
      },
      {
        body: 'En Sitiazo implementamos mensajes contextuales para cada plan y cada página. El cliente llega a WhatsApp con el contexto exacto de lo que quiere, y Diego puede responder en segundos con la información correcta.',
      },
      {
        heading: 'WhatsApp Business: las herramientas que necesitas',
        body: 'La app WhatsApp Business (gratis) incluye perfil de empresa, catálogo de productos, mensajes de bienvenida automáticos y respuestas rápidas. Para una pyme que recién empieza, es más que suficiente. Cuando crezcas a 10+ consultas diarias, puedes evaluar la API de WhatsApp (de pago) para automatizar respuestas.',
      },
      {
        heading: '¿Mail o WhatsApp? La respuesta es WhatsApp',
        body: 'Un formulario de contacto le pide a la persona que escriba un correo y espere. Un botón de WhatsApp la deja conversando contigo en el mismo momento, en la app que ya usa. Si tu negocio depende de que la gente te contacte, WhatsApp primero.',
      },
      {
        heading: '¿Listo para integrar WhatsApp en tu web?',
        body: 'Conversemos. Te ayudo a definir la mejor estrategia para tu negocio. 30 minutos sin compromiso.',
      },
    ],
  },
}

export function getPostContent(slug: string): BlogPostContent | undefined {
  return blogPostContent[slug]
}
