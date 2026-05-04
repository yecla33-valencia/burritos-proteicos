import { Cookie, SprayCan, BadgeEuro, Icon, type LucideProps } from "lucide-react";
import { burger } from "@lucide/lab";
import type { ComponentType } from "react";

const BurgerIcon = (props: LucideProps) => <Icon iconNode={burger} {...props} />;

type Feature = {
  icon: ComponentType<LucideProps>;
  title: string;
  description: string | null;
  list?: string[];
};

const features: Feature[] = [
  {
    icon: BadgeEuro,
    title: "Personalización nutricional",
    description: null,
    list: ["Subir la proteína", "Bajar los carbohidratos", "Modificar las calorías"],
  },
  {
    icon: Cookie,
    title: "4 opciones de pan",
    description: null,
    list: ["Pan brioche", "Pan sin gluten", "Pan integral", "Pan de lechuga"],
  },
  {
    icon: BurgerIcon,
    title: "3 hamburguesas a elegir",
    description: null,
    list: [
      "Patty de alcachofa confitada",
      "Patty proteica de soja y frijoles",
      "Patty de Heura",
    ],
  },
  {
    icon: SprayCan,
    title: "2 tipos de salsas",
    description: null,
    list: ["Salsas clásicas", "Salsas zero azúcar"],
  },
];

const Features = () => {
  return (
    <section id="nosotros" className="py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-5 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-[0.2em] uppercase">
            Por qué elegirnos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] text-balance">
            Tenemos una carta completa de hamburguesas vegetarianas
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            Personalizables según tu estilo de vida y tus opciones nutricionales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-gradient-card rounded-3xl p-8 text-center space-y-4 border border-border/50 shadow-soft hover-lift transition-smooth"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3">
                <feature.icon className="w-7 h-7 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground tracking-tight">
                {feature.title}
              </h3>
              {feature.description && (
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              )}
              {feature.list && (
                <ul className="text-muted-foreground text-sm leading-relaxed space-y-1 text-left inline-block">
                  {feature.list.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
