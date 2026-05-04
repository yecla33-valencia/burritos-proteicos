const products = [
  {
    name: "Vegetarian Búfalo Burger",
    price: "12,95 €",
    image: "https://yecla33.com/wp-content/uploads/2023/12/xVegetarian-bufalo-p.-_20260406_213515_0000-400x300.jpg.pagespeed.ic.zCObooT6K1.jpg",
  },
  {
    name: "Vegetarian Burger Bangkok",
    price: "12,95 €",
    image: "https://yecla33.com/wp-content/uploads/2024/02/xVegetarian-Bangkok-p.-_20260406_213528_0000-400x300.jpg.pagespeed.ic.JY6lVsY9yH.jpg",
  },
  {
    name: "Vegetarian Burger Trufada",
    price: "12,95 €",
    image: "https://yecla33.com/wp-content/uploads/2023/12/xVegetarian-trufa-p.-_20260406_213544_0000-400x300.jpg.pagespeed.ic.2YR7Mw0UlQ.jpg",
  },
  {
    name: "Vegetarian Classic Burger",
    price: "12,95 €",
    image: "https://yecla33.com/wp-content/uploads/2023/12/xVegetarian-Classic-p.-_20260406_213630_0000-400x300.jpg.pagespeed.ic.HwNpqI_e0e.jpg",
  },
  {
    name: "Vegetarian Mex Burger",
    price: "12,95 €",
    image: "https://yecla33.com/wp-content/uploads/2023/12/xVegetarian-Mex-p.-_20260406_213452_0000-400x300.jpg.pagespeed.ic.gs3SQg6a0E.jpg",
  },
  {
    name: "Vegetarian Queso de Cabra Burger",
    price: "12,95 €",
    image: "https://yecla33.com/wp-content/uploads/2023/12/xVegetarian-cabra-p.-_20260406_213617_0000-400x300.jpg.pagespeed.ic.UZcszT1EbQ.jpg",
  },
  {
    name: "Vegetarian Tennesse Burger",
    price: "12,95 €",
    image: "https://yecla33.com/wp-content/uploads/2024/02/xVegetarian-Tennessee-p.-_20260406_213602_0000-400x300.jpg.pagespeed.ic.umbOSrjzeJ.jpg",
  },
  {
    name: "Vegetarian Burger Keto Mex",
    price: "12,95 €",
    image: "https://yecla33.com/wp-content/uploads/2023/05/xBurger-keto-mex-p-400x300.jpg.pagespeed.ic.EMvKIxZCcQ.webp",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-5 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-[0.2em] uppercase">
            Nuestra Carta
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] text-balance">
            8 hamburguesas diferentes en el menú
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base md:text-lg leading-relaxed">
            Cada hamburguesa está pensada para sorprenderte.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-card rounded-3xl overflow-hidden border border-border/50 shadow-soft hover-lift transition-smooth"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 flex items-center justify-between gap-3">
                <h3 className="font-display font-semibold text-foreground text-lg leading-tight tracking-tight">
                  {product.name}
                </h3>
                <p className="text-primary font-bold text-lg whitespace-nowrap font-sans">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
