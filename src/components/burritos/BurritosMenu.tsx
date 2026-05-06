const products = [
  {
    name: "Burrito Proteico Burger",
    price: "11,40 €",
    image: "https://yecla33.com/wp-content/uploads/2024/12/xburrito_partido-400x300.jpg.pagespeed.ic.mGDdGmm3aX.webp",
    description:
      "Huevos revueltos, carne de hamburguesa con queso cheddar y bacon, salsa zero, pico de gallo, lechuga, sour cream y queso fundido. Envuelto en tortilla de trigo.",
    nutrition: {
      calorias: "~1050 kcal",
      proteinas: "~69 g",
      carbohidratos: "~47 g",
      grasas: "~65 g",
    },
  },
  {
    name: "Burrito Proteico California",
    price: "11,40 €",
    image: "https://yecla33.com/wp-content/uploads/2024/12/xburrito_pollo-400x300.jpg.pagespeed.ic.CWY72rOfHI.webp",
    description:
      "Huevos revueltos, pollo al grill, salsa zero, pico de gallo (tomate, cebolla morada, jalapeño y lima), lechuga, sour cream y queso fundido. Sustituimos el arroz por huevos revueltos proteicos.",
    nutrition: {
      calorias: "~820 kcal",
      proteinas: "~73 g",
      carbohidratos: "~45 g",
      grasas: "~38 g",
    },
  },
  {
    name: "Burrito Proteico Carnitas",
    price: "11,40 €",
    image: "https://yecla33.com/wp-content/uploads/2024/12/xburrito_partido-400x300.jpg.pagespeed.ic.mGDdGmm3aX.webp",
    description:
      "Huevos revueltos, costillar a la barbacoa deshebrado, salsa zero, pico de gallo, lechuga, sour cream y queso fundido. Envuelto en tortilla de trigo.",
    nutrition: {
      calorias: "~950 kcal",
      proteinas: "~65 g",
      carbohidratos: "~50 g",
      grasas: "~55 g",
    },
  },
  {
    name: "Burrito Proteico San Francisco",
    price: "11,40 €",
    image: "https://yecla33.com/wp-content/uploads/2024/12/xburrito_partido-400x300.jpg.pagespeed.ic.mGDdGmm3aX.webp",
    description:
      "Huevos revueltos, chilli con carne de elaboración propia, salsa zero, pico de gallo, lechuga, sour cream y queso fundido. Para los que les gusta picantito.",
    nutrition: {
      calorias: "~880 kcal",
      proteinas: "~60 g",
      carbohidratos: "~55 g",
      grasas: "~45 g",
    },
  },
  {
    name: "Protein Trufado",
    price: "11,40 €",
    image: "https://yecla33.com/wp-content/uploads/2024/12/xburrito_trufado_partido-400x300.jpg.pagespeed.ic.qGHmFujoo7.webp",
    description:
      "Huevos revueltos, chilli con carne de elaboración propia, trufa mayo, salsa zero, pico de gallo, lechuga, sour cream y queso fundido. Para los amantes de la trufa.",
    nutrition: {
      calorias: "~1050 kcal",
      proteinas: "~60 g",
      carbohidratos: "~50 g",
      grasas: "~70 g",
    },
  },
];

const BurritosMenu = () => {
  return (
    <section id="menu" className="py-24 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-5 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-[0.2em] uppercase">
            Nuestra Carta
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] text-balance">
            5 burritos proteicos diferentes en el menú
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.name}
              className="group bg-card rounded-3xl overflow-hidden border border-border/50 shadow-soft hover-lift transition-smooth flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-semibold text-foreground text-lg leading-tight tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-primary font-bold text-lg whitespace-nowrap font-sans">
                    {product.price}
                  </p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-2">
                    Valores nutricionales
                  </p>
                  <ul className="text-muted-foreground text-sm leading-relaxed space-y-1">
                    <li><span className="font-medium text-foreground">Calorías:</span> {product.nutrition.calorias}</li>
                    <li><span className="font-medium text-foreground">Proteínas:</span> {product.nutrition.proteinas}</li>
                    <li><span className="font-medium text-foreground">Carbohidratos:</span> {product.nutrition.carbohidratos}</li>
                    <li><span className="font-medium text-foreground">Grasas:</span> {product.nutrition.grasas}</li>
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BurritosMenu;
