import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const burritos = [
  {
    name: "Burrito Proteico Burger",
    calorias: "~1050 kcal",
    proteinas: "~69 g",
    carbohidratos: "~47 g",
    grasas: "~65 g",
  },
  {
    name: "Burrito Proteico California",
    calorias: "~820 kcal",
    proteinas: "~73 g",
    carbohidratos: "~45 g",
    grasas: "~38 g",
  },
  {
    name: "Burrito Proteico Carnitas",
    calorias: "~950 kcal",
    proteinas: "~65 g",
    carbohidratos: "~50 g",
    grasas: "~55 g",
  },
  {
    name: "Burrito Proteico San Francisco",
    calorias: "~880 kcal",
    proteinas: "~60 g",
    carbohidratos: "~55 g",
    grasas: "~45 g",
  },
  {
    name: "Protein Trufado",
    calorias: "~1050 kcal",
    proteinas: "~60 g",
    carbohidratos: "~50 g",
    grasas: "~70 g",
  },
];

const NutritionDialog = ({
  children,
  open,
  onOpenChange,
}: {
  children?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children ? <DialogTrigger asChild>{children}</DialogTrigger> : null}
      <DialogContent className="w-[calc(100vw-1.5rem)] max-w-3xl max-h-[85vh] overflow-y-auto bg-background rounded-2xl">
        <DialogHeader>
          <span className="inline-block w-fit px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-[0.2em] uppercase">
            Información nutricional
          </span>
          <DialogTitle className="font-display text-2xl md:text-3xl font-medium tracking-tight text-foreground">
            Valores nutricionales de nuestros burritos
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Valores aproximados por unidad. Pueden variar ligeramente según el montaje.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {burritos.map((b) => (
            <article
              key={b.name}
              className="bg-card rounded-2xl border border-border/50 shadow-soft p-5 flex flex-col gap-3"
            >
              <h3 className="font-display font-semibold text-foreground text-lg leading-tight tracking-tight">
                {b.name}
              </h3>
              <ul className="text-muted-foreground text-sm leading-relaxed space-y-1">
                <li><span className="font-medium text-foreground">Calorías:</span> {b.calorias}</li>
                <li><span className="font-medium text-foreground">Proteínas:</span> {b.proteinas}</li>
                <li><span className="font-medium text-foreground">Carbohidratos:</span> {b.carbohidratos}</li>
                <li><span className="font-medium text-foreground">Grasas:</span> {b.grasas}</li>
              </ul>
            </article>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NutritionDialog;
