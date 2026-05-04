import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Dónde pedir burritos mejicanos proteicos en Valencia?",
    a: "En Burritos Protein by Yecla 33 puedes pedir burritos mejicanos proteicos en Valencia tanto a domicilio como para recoger en nuestra tienda de Calle Yecla 33, en Algirós.",
  },
  {
    q: "¿Repartís burritos en todos los barrios de Valencia capital?",
    a: "Sí. Repartimos nuestros burritos proteicos en todos los barrios de Valencia capital, para que puedas pedir comida mexicana de forma cómoda estés donde estés.",
  },
  {
    q: "¿Qué hace proteicos a vuestros burritos?",
    a: "Sustituimos el arroz tradicional por huevos revueltos proteicos y combinamos carnes de calidad como pollo al grill, costillar deshebrado, chilli con carne o carne de hamburguesa para conseguir un alto aporte de proteína.",
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
    q: "¿Cuánto tarda un pedido de burritos en Valencia?",
    a: "El tiempo estimado es de unos 45 minutos a domicilio y de unos 25 minutos para recogida.",
  },
  {
    q: "¿Cuántos burritos proteicos tenéis en la carta?",
    a: "Tenemos 5 burritos mejicanos proteicos: Burger, California, Carnitas, San Francisco y Protein Trufado.",
  },
  {
    q: "¿Lleva picante alguno de los burritos?",
    a: "El Burrito Proteico San Francisco y el Protein Trufado llevan chilli con carne, así que son los más picantitos. El resto son suaves.",
  },
  {
    q: "¿Qué salsa lleva el burrito?",
    a: "Llevan nuestra salsa zero azúcar para burritos, además de pico de gallo fresco, sour cream y queso fundido.",
  },
  {
    q: "¿Cuál es vuestro horario?",
    a: "Abrimos de lunes a domingo de 19:30 a 23:00. Además, los domingos también abrimos de 12:30 a 15:30.",
  },
  {
    q: "¿Por qué elegir Yecla 33 si busco burritos proteicos en Valencia?",
    a: "Porque unimos comida mexicana auténtica, alto aporte de proteína sustituyendo el arroz por huevos revueltos, y reparto o recogida en toda Valencia.",
  },
];

const BurritosFAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-5 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-[0.2em] uppercase">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] text-balance">
            Preguntas frecuentes sobre burritos mejicanos proteicos en Valencia
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

export default BurritosFAQ;
