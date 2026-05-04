import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const InfoSection = () => {
  return (
    <section className="py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gradient-primary rounded-3xl p-10 text-center space-y-5 shadow-elegant relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center relative">
              <ShoppingBag className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground leading-tight relative text-balance">
              Recoger no solo es ahorrar el 30% en tu compra
            </h3>
            <p className="text-primary-foreground/85 text-base leading-relaxed relative">
              También es hacer tu compra más sostenible
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-card border border-border/50 rounded-3xl p-5 sm:p-6 flex flex-col justify-center gap-2.5 shadow-soft">
              <Button asChild className="w-full" size="sm">
                <a href="https://yecla33.com/carta-vegana-vegetariana/" target="_blank" rel="noopener noreferrer">Recoger en la tienda -30%</a>
              </Button>
              <Button asChild className="w-full bg-[hsl(var(--yecla-brown))] text-primary-foreground hover:bg-[hsl(var(--yecla-brown))]/90" size="sm">
                <a href="https://yecla33.com/productos/hamburguesas-vegetarianas/" target="_blank" rel="noopener noreferrer">Pedir a domicilio</a>
              </Button>
            </div>

            <div className="bg-card border border-border/50 rounded-3xl p-8 flex flex-col justify-center items-center gap-3 shadow-soft">
              <Button asChild className="w-2/3 bg-[#FF8000] hover:bg-[#FF8000]/90 text-white">
                <a href="https://www.just-eat.es/restaurants-yecla33vegano/menu" target="_blank" rel="noopener noreferrer">Just Eat</a>
              </Button>
              <Button asChild className="w-2/3 bg-black hover:bg-black/90 text-white">
                <a href="https://www.ubereats.com/es/store/vegetarian-%26-vegan-burgers/AtmvyTYeV6-pyOgA5kCtew?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION" target="_blank" rel="noopener noreferrer">Uber Eats</a>
              </Button>
              <Button asChild className="w-2/3 bg-[#FFC244] hover:bg-[#FFC244]/90 text-black">
                <a href="https://glovoapp.com/es/es/valencia/stores/vegetarian-artichoke-burger-valencia" target="_blank" rel="noopener noreferrer">Glovo</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
