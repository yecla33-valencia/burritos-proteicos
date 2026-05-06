import { Trophy, Sparkles } from "lucide-react";
import award2018 from "@/assets/award-2018.jpg";
import award2019 from "@/assets/award-2019.jpg";
import award2021 from "@/assets/award-2021.jpg";
import logo1986 from "@/assets/logo-yecla-1986.jpg";

type Award = {
  image: string;
  year: string;
  title: string;
  description: string;
  highlight: string;
};

const awards: Award[] = [
  {
    image: logo1986,
    year: "1986",
    title: "Nuestros inicios",
    description:
      "Apertura de Yecla 33 en el barrio de Algirós de Valencia, la ubicación actual.",
    highlight: "Origen",
  },
  {
    image: award2018,
    year: "2018",
    title: "Premio nacional",
    description:
      "Mejor restaurante de España de comida a domicilio. Premios Just Eat.",
    highlight: "Just Eat España",
  },
  {
    image: award2019,
    year: "2019",
    title: "Premio Levante",
    description:
      "Mejor restaurante de comida a domicilio de la zona Levante. Premios Just Eat.",
    highlight: "Just Eat Levante",
  },
  {
    image: award2021,
    year: "2021",
    title: "Mejor vegetariano",
    description:
      "Mejor restaurante de España comida vegetariana a domicilio. Premios Just Eat.",
    highlight: "Just Eat Vegetariano",
  },
];

const FeaturesSecondary = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-warm relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 space-y-5 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-[0.2em] uppercase">
            <Trophy className="w-3.5 h-3.5" />
            Premios y Reconocimientos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] text-balance">
            Nuestros burritos proteicos a domicilio están{" "}
            <em className="italic text-primary">espectaculares</em>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-base md:text-lg leading-relaxed">
            y no es porque lo digamos nosotros
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {awards.map((award) => (
              <article
                key={award.year}
                className="group h-full bg-card border border-border/50 rounded-3xl p-4 md:p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-square rounded-2xl bg-muted/40 overflow-hidden mb-5 flex items-center justify-center">
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary text-primary-foreground rounded-full text-[0.65rem] font-semibold tracking-wider z-10">
                    <Sparkles className="w-2.5 h-2.5" />
                    {award.highlight}
                  </div>
                  <img
                    src={award.image}
                    alt={`Premio ${award.year}`}
                    className="w-full h-full object-contain p-4 md:p-6 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-3xl md:text-4xl font-semibold text-primary leading-none">
                      {award.year}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-medium text-foreground">
                    {award.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                    {award.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecondary;
