import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ALLERGENS = [
  "Gluten",
  "Huevos",
  "Crustáceos",
  "Pescado",
  "Soja",
  "Moluscos",
  "Lácteos",
  "Cacahuetes",
  "Frutos cáscara",
  "Sulfitos",
  "Apio",
  "Mostaza",
  "Sésamo",
] as const;

// Each row: name + 13 booleans matching ALLERGENS order
type Row = [string, ...boolean[]];

const T = true;
const F = false;

const sections: { title: string; rows: Row[] }[] = [
  {
    title: "Burgers",
    rows: [
      ["Básica", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Clásica", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Cheese", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Pollo", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Cheese & Bacon", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Pollo Suprema", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Sweet Chili", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Completísima", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Crispy Onion", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Grandiosa", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Gourmet", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Queso de Cabra", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Chef", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Cremosa", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["4 Quesos", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Foie", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Thai", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Apple", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Beef and Ribs", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["The Special", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Ribs", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Menphis", T, T, F, F, T, T, T, F, T, T, F, T, T],
      ["Donut", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Chivito", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Mac & Cheese Crispy", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Mac & Cheese", T, T, F, F, T, F, T, F, T, T, F, T, T],
    ],
  },
  {
    title: "Carta para niños",
    rows: [
      ["Hamburguesa con ketchup y patatas", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Hamburguesa pollo empanada y sandwich san jacobo y patatas", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Tortilla de queso, pan de hamburguesa y patatas", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Tortilla de queso con lechuga, tomate y pepinillo en pan", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Hot dog classic y patatas fritas", T, T, F, F, T, F, T, F, T, T, F, T, T],
    ],
  },
  {
    title: "Entrantes",
    rows: [
      ["Nachos Cheese & Bacon", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Nachos con Chili", T, T, F, F, T, F, T, F, T, T, F, T, T],
      ["Fingers de Pollo", T, T, F, F, F, F, T, F, T, T, F, T, T],
      ["Patatas McCain", F, F, F, F, F, F, F, F, F, F, F, F, F],
      ["Patatas Gajos", F, F, F, F, F, F, F, F, F, F, F, F, F],
      ["Patatas Cheese & Bacon", T, T, F, F, F, F, T, F, T, F, T, T, F],
      ["Patatas con Chili", T, T, F, F, F, F, T, F, T, F, T, T, F],
      ["Fingers de Queso", T, T, F, F, T, F, T, T, F, T, F, T, T],
      ["Aros de cebolla", T, T, F, F, T, F, T, T, F, T, F, T, T],
      ["Mexican pizza", T, T, F, F, T, F, T, T, F, T, F, T, T],
    ],
  },
  {
    title: "Burritos",
    rows: [
      ["California", T, F, F, F, F, F, T, F, T, F, T, F, F],
      ["Los Angeles", T, F, F, F, F, F, T, F, T, F, T, F, F],
      ["Sonoma", T, T, F, F, F, F, T, F, T, F, T, F, F],
      ["Texas", T, F, F, F, T, F, T, F, T, F, T, F, F],
      ["San Francisco", T, F, F, F, F, F, T, F, T, F, T, F, F],
      ["Fajita", T, F, F, F, F, F, T, F, T, F, T, F, F],
      ["Carnitas", T, F, F, F, F, F, T, F, T, F, T, F, F],
      ["Fusión", T, F, F, F, F, F, T, F, T, F, T, F, F],
      ["Burger", T, F, F, F, F, F, T, F, T, F, T, F, F],
    ],
  },
  {
    title: "Quesaritos",
    rows: [
      ["Carnitas", T, T, F, F, F, F, T, F, T, F, T, F, F],
      ["San Francisco", T, F, F, F, F, F, T, F, T, F, T, F, F],
      ["California", T, F, F, F, F, F, T, F, T, F, T, F, F],
      ["Los Angeles", T, F, F, F, F, F, T, F, T, F, T, F, F],
      ["Sonoma", T, T, F, F, F, F, T, F, T, F, T, F, F],
      ["Texas", T, F, F, F, F, F, T, F, T, F, T, F, F],
    ],
  },
  {
    title: "Wraps",
    rows: [
      ["Chicken", T, F, F, F, F, F, T, F, T, F, T, F, F],
      ["Chicken Crispy", T, F, F, F, F, F, T, F, T, F, T, F, F],
      ["Vegetal", T, F, F, F, F, F, T, F, T, F, T, F, F],
      ["Queso de Cabra", T, F, F, F, F, F, T, F, T, F, T, F, F],
      ["Crunch", T, F, F, F, F, F, T, F, T, F, T, F, F],
    ],
  },
  {
    title: "Postres",
    rows: [
      ["Carrot Cake", T, T, F, F, F, F, T, T, T, F, F, F, T],
      ["Tarta de Chocolate", T, T, F, F, F, F, T, T, T, F, F, F, T],
      ["Cookie casera", T, T, F, F, F, F, T, T, T, F, F, F, T],
      ["Mousse Chocolate y Oreo", T, T, F, F, F, F, T, T, T, F, F, F, T],
      ["Flautas de Nutella y manzana", T, T, F, F, T, F, T, T, T, F, F, T, T],
    ],
  },
  {
    title: "Salsas",
    rows: [
      ["Kétchup", T, F, F, F, F, F, F, F, F, F, F, F, F],
      ["Mostaza", T, F, F, F, F, F, F, F, F, F, F, T, F],
      ["Barbacoa", T, F, T, F, F, F, F, F, F, F, F, T, F],
      ["Miel y mostaza", T, T, F, F, F, T, F, F, F, F, F, T, F],
      ["Guacamole", T, F, F, F, F, F, F, F, F, F, F, F, F],
      ["Mayonesa", T, F, F, F, F, F, F, F, F, F, F, F, F],
      ["Crema de cheddar", T, F, F, F, F, F, F, F, F, F, F, F, F],
    ],
  },
  {
    title: "Extras",
    rows: [
      ["Bacon", F, F, F, F, F, F, F, F, T, F, F, F, F],
      ["Carne", F, T, F, F, F, T, F, F, T, F, F, F, F],
      ["Patatas Fritas", T, F, F, F, F, F, F, F, F, F, F, F, F],
      ["Queso", F, F, F, F, F, T, F, T, F, F, F, F, F],
      ["Vegetales", T, F, F, F, F, F, F, F, F, F, F, F, F],
    ],
  },
  {
    title: "Burgers veganas",
    rows: [
      ["Vegan Cheese", T, F, F, F, F, F, F, F, F, T, F, T, T],
      ["Vegan Mermelade", T, F, F, F, F, F, F, F, F, T, F, T, T],
      ["Vegan Menphis", T, F, F, F, F, F, F, T, F, T, F, T, T],
      ["Vegan Thai", T, F, F, F, F, F, F, F, F, T, F, T, T],
      ["Vegan Sweet Chilli", T, F, F, F, F, F, F, F, F, T, F, T, T],
      ["Vegan Doble Cheese", T, F, F, F, F, F, F, F, F, T, F, T, T],
      ["Vegan Beijing", T, F, F, F, F, F, F, T, F, T, F, T, T],
      ["Vegan Bangkok", T, F, F, F, F, F, F, T, F, T, F, T, T],
      ["Vegan Tennessee", T, F, F, F, F, F, F, T, F, T, F, T, T],
      ["Vegan Donut", T, F, F, F, F, F, F, T, F, T, F, T, T],
      ["Vegan Crispy Onion", T, F, F, F, F, F, F, T, F, T, F, T, T],
      ["Vegan Mac & Cheese Crispy", T, F, F, F, F, F, F, T, F, T, F, T, T],
      ["Vegan Mac & Cheese", T, F, F, F, F, F, F, T, F, T, F, T, T],
      ["Vegan Crispy Burger de Seitán", T, F, F, F, F, F, F, T, F, T, F, T, T],
      ["Vegan Pulled Ribs", T, F, F, F, F, F, F, T, F, T, F, T, T],
      ["Vegan The Special", T, F, F, F, F, F, F, T, F, T, F, T, T],
      ["Vegan Meat Ribs Burger", T, F, F, F, F, F, F, T, F, T, F, T, T],
      ["Vegan Cheese Bacon", T, F, F, F, F, F, F, T, F, T, F, T, T],
    ],
  },
  {
    title: "Vegan Smash",
    rows: [
      ["Vegan Smash Cheese", T, F, F, F, F, F, F, T, F, T, F, T, T],
      ["Vegan Smash Cheese Bacon", T, F, F, F, F, F, F, T, F, T, F, T, T],
      ["Vegan Smash Hawaiana", T, F, F, F, F, F, F, T, F, T, F, T, T],
      ["Vegan Smash Completa", T, F, F, F, F, F, F, T, F, T, F, T, T],
    ],
  },
  {
    title: "Burritos veganos",
    rows: [
      ["Vegan San Francisco", T, F, F, F, F, F, F, F, T, F, F, F, F],
      ["Vegan Texas", T, F, F, F, F, F, F, F, T, F, F, F, F],
      ["Vegan California", T, F, F, F, F, F, F, F, T, F, F, F, F],
      ["Vegan Fusión", T, F, F, F, F, F, F, F, T, F, F, F, F],
      ["Vegan San Diego", T, F, F, F, F, F, F, F, T, F, F, F, F],
      ["Vegan Fajita", T, F, F, F, F, F, F, F, T, F, F, F, F],
      ["Vegan Teriyaki", T, F, F, T, F, F, F, F, T, F, F, F, F],
      ["Vegan Burger", T, F, F, F, F, F, F, F, T, F, F, F, F],
      ["Vegan Carnitas", T, F, F, F, F, F, F, F, T, F, F, F, F],
      ["Vegan Burrito de Heura", T, F, F, F, F, F, F, F, T, F, F, F, F],
    ],
  },
  {
    title: "Quesaritos veganos",
    rows: [
      ["Vegan Quesarito California", T, F, F, F, F, F, F, F, T, F, F, F, F],
      ["Vegan Quesarito Carnitas", T, F, F, F, F, F, F, F, T, F, F, F, F],
      ["Vegan Quesarito Texas", T, F, F, F, F, F, F, F, T, F, F, F, F],
    ],
  },
  {
    title: "Wraps veganos",
    rows: [
      ["Vegan Wrap", T, F, F, F, T, F, F, F, F, T, F, T, F],
      ["Seitan Wrap", T, F, F, F, T, F, F, F, F, T, F, T, F],
      ["Wrap Vegan Crunch", T, F, F, F, T, F, F, F, F, T, F, T, F],
      ["Vegan Wrap Crispy", T, F, F, F, T, F, F, F, F, T, F, T, F],
    ],
  },
  {
    title: "Entrantes veganos",
    rows: [
      ["Nachos con Chilli", T, F, F, F, F, F, F, F, F, T, F, T, F],
      ["Patatas con Chilli", T, F, F, F, F, F, F, F, F, T, F, T, F],
      ["Fingers de Queso", T, F, F, F, F, F, F, F, F, T, F, T, F],
      ["Vegan Mexican Pizza", T, F, F, F, T, F, F, F, F, T, F, T, F],
      ["Aros de cebolla", T, F, F, F, F, F, F, F, F, T, F, T, F],
      ["Nuggets de Seitán", T, F, F, F, F, F, F, F, F, T, F, T, F],
      ["Nachos 2 salsas", T, F, F, F, F, F, F, F, F, T, F, T, F],
      ["Patatas Cheese & Bacon", T, F, F, F, F, F, F, F, F, T, F, T, F],
    ],
  },
  {
    title: "Otras opciones veganas",
    rows: [
      ["Vegan Fried Chicken", T, F, F, F, T, F, F, F, F, T, F, T, F],
      ["Seitan Ribs", T, F, F, F, T, F, F, F, F, T, F, T, F],
      ["Mac and Cheese", T, F, F, F, T, F, F, F, F, T, F, T, F],
    ],
  },
  {
    title: "Kebaps estilo Berlín vegan",
    rows: [
      ["Classic Kebap", T, F, F, F, T, F, F, F, F, T, F, T, F],
      ["Kebap Gemüse", T, F, F, F, T, F, F, F, F, T, F, T, F],
      ["Kebap Seitán", T, F, F, F, T, F, F, F, F, T, F, T, F],
    ],
  },
  {
    title: "Salsas veganas",
    rows: [
      ["Kétchup", T, F, F, F, F, F, F, F, F, F, F, F, F],
      ["Mostaza", T, F, F, F, F, F, F, F, F, F, F, T, F],
      ["Barbacoa", T, F, F, F, T, F, F, F, F, F, F, T, F],
      ["Miel y mostaza", T, F, F, F, T, F, T, F, F, F, F, T, F],
      ["Guacamole", T, F, F, F, F, F, F, F, F, F, F, F, F],
      ["Veganesa", T, F, F, F, F, T, F, F, F, F, F, F, F],
    ],
  },
];

interface AllergensDialogProps {
  children: ReactNode;
}

const AllergensDialog = ({ children }: AllergensDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/50 sticky top-0 bg-background z-10">
          <DialogTitle className="font-display text-2xl md:text-3xl font-medium tracking-tight">
            Carta de alérgenos
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Información sobre alérgenos presentes en nuestros productos.
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-8 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h3 className="font-display text-lg md:text-xl font-semibold text-primary mb-3 tracking-tight">
                {section.title}
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-border/60">
                <table className="w-full text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-secondary/60">
                      <th className="text-left px-3 py-2 font-semibold text-foreground sticky left-0 bg-secondary/60 min-w-[180px]">
                        Producto
                      </th>
                      {ALLERGENS.map((a) => (
                        <th
                          key={a}
                          className="px-2 py-2 font-medium text-foreground/80 whitespace-nowrap"
                        >
                          <span className="[writing-mode:vertical-rl] [transform:rotate(180deg)] inline-block text-[11px] md:text-xs">
                            {a}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, idx) => {
                      const [name, ...flags] = row;
                      return (
                        <tr
                          key={`${name}-${idx}`}
                          className={idx % 2 === 0 ? "bg-card" : "bg-secondary/20"}
                        >
                          <td className="px-3 py-2 text-foreground font-medium sticky left-0 bg-inherit">
                            {name}
                          </td>
                          {flags.map((present, i) => (
                            <td key={i} className="px-2 py-2 text-center">
                              {present ? (
                                <span
                                  aria-label={`Contiene ${ALLERGENS[i]}`}
                                  className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary font-bold text-[11px]"
                                >
                                  ✓
                                </span>
                              ) : (
                                <span className="text-muted-foreground/40">·</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          <p className="text-xs text-muted-foreground italic">
            Información orientativa. En caso de alergia o intolerancia, consulta con
            nuestro personal antes de realizar tu pedido.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AllergensDialog;
