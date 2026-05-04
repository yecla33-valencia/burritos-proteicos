import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Dónde pedir hamburguesas vegetarianas en Valencia?",
    a: "En Vegetarian Burgers by Yecla 33 puedes pedir hamburguesas vegetarianas en Valencia tanto a domicilio como para recoger en nuestra tienda de Calle Yecla 33, en Algirós.",
  },
  {
    q: "¿Repartís hamburguesas vegetarianas en todos los barrios de Valencia capital?",
    a: "Sí. Repartimos nuestras hamburguesas vegetarianas en todos los barrios de Valencia capital, para que puedas pedir comida vegetariana de forma cómoda estés donde estés.",
  },
  {
    q: "¿También puedo pedir para recoger en Yecla 33?",
    a: "Sí. Puedes hacer tu pedido para recoger en Calle Yecla 33 y llevártelo directamente desde nuestra cocina abierta.",
  },
  {
    q: "¿Qué ahorro tengo si elijo recoger mi pedido?",
    a: "Si eliges recogida en local, ahorras un 30%. Además de ser una opción más económica, también es una forma más sostenible de pedir.",
  },
  {
    q: "¿Cuánto tarda un pedido de hamburguesas vegetarianas en Valencia?",
    a: "El tiempo estimado es de unos 45 minutos a domicilio y de unos 25 minutos para recogida.",
  },
  {
    q: "¿Qué hace diferentes a vuestras hamburguesas vegetarianas?",
    a: "Nuestra propuesta combina sabor, personalización y una forma más clara de elegir. Puedes escoger entre 5 tipos de pan, 4 patties vegetarianas, cambiar la salsa y consultar la información nutricional de los ingredientes por separado.",
  },
  {
    q: "¿Qué tipos de pan puedo elegir?",
    a: "Puedes elegir entre pan brioche, pan integral, pan sin gluten, pan de lechuga y gofre proteico vegetariano.",
  },
  {
    q: "¿Qué patties vegetarianas tenéis?",
    a: "Trabajamos con hamburguesa de alcachofas confitadas, hamburguesa proteica de frijoles y soja, hamburguesa de Heura y hamburguesa de seitán crispy.",
  },
  {
    q: "¿Puedo personalizar mi hamburguesa según mis macros?",
    a: "Sí. Puedes cambiar el pan, elegir la patty y ajustar la salsa para montar una hamburguesa vegetariana más alineada con tu forma de comer.",
  },
  {
    q: "¿Mostráis calorías y macros de los ingredientes?",
    a: "Sí. Informamos nutricionalmente los ingredientes por separado para que puedas combinar mejor tus opciones.",
  },
  {
    q: "¿Cómo puedo hacer mi hamburguesa vegetariana más proteica?",
    a: "La forma más directa es elegir una patty con mayor aporte proteico y combinarla con el pan que mejor encaje contigo.",
  },
  {
    q: "¿Cómo puedo reducir carbohidratos en mi burger vegetariana?",
    a: "Puedes reducir carbohidratos cambiando el tipo de pan. Por ejemplo, puedes elegir una opción como pan de lechuga.",
  },
  {
    q: "¿Tenéis hamburguesas vegetarianas sin gluten en Valencia?",
    a: "Sí, disponemos de pan sin gluten, aunque en cocina puede haber trazas de gluten.",
  },
  {
    q: "¿Puedo pedir mi hamburguesa sin lactosa?",
    a: "Sí. Todas nuestras hamburguesas vegetarianas se pueden customizar en versión lactosa free.",
  },
  {
    q: "¿Puedo elegir la salsa de la hamburguesa?",
    a: "Sí. Puedes elegir entre salsa clásica o salsa Zero Azúcar.",
  },
  {
    q: "¿Cuál es vuestro horario?",
    a: "Abrimos de lunes a domingo de 19:30 a 23:00. Además, los domingos también abrimos de 12:30 a 15:30.",
  },
  {
    q: "¿Puedo pedir por plataformas o preferís pedido directo?",
    a: "Trabajamos con plataformas, pero nuestra opción preferente es recogida en local y reparto propio.",
  },
  {
    q: "¿Por qué elegir Yecla 33 si busco comida vegetariana en Valencia?",
    a: "Porque unimos tres cosas importantes: hamburguesas vegetarianas con personalidad, reparto o recogida en Valencia y personalización real según tus preferencias.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-5 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-[0.2em] uppercase">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] text-balance">
            Preguntas frecuentes sobre hamburguesas vegetarianas en Valencia
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto space-y-3"
        >
          {faqs.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-card rounded-2xl border border-border/50 px-6 shadow-sm hover:shadow-soft transition-all duration-300 data-[state=open]:shadow-soft data-[state=open]:border-primary/20"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:no-underline hover:text-primary transition-colors py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
