const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-warm">
      {/* Decorative blur orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-0 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-6 sm:space-y-8 pt-28 py-16 sm:py-20 md:py-0 md:pt-28 animate-fade-in-up">
          <span className="inline-flex flex-col items-start px-4 sm:px-5 py-2 sm:py-2.5 glass border border-border/60 rounded-full text-[10px] sm:text-[11px] font-medium text-muted-foreground tracking-[0.28em] uppercase shadow-sm">
            <span>VEGETARIAN BURGERS</span>
            <span className="font-semibold text-xs sm:text-sm normal-case tracking-tight text-foreground font-display">by Yecla 33</span>
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-foreground text-balance">
            Las hamburguesas{" "}
            <span className="italic text-primary relative">
              vegetarianas
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full" />
            </span>{" "}
            que faltaban en Valencia
          </h1>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 bg-primary text-primary-foreground rounded-full font-medium text-sm sm:text-base shadow-glow hover:-translate-y-0.5 hover:shadow-elegant transition-all duration-300"
            >
              Ver carta
            </a>
            <a
              href="#nosotros"
              className="inline-flex items-center justify-center px-5 sm:px-7 py-3.5 sm:py-4 rounded-full font-medium text-sm sm:text-base text-foreground/80 hover:text-primary transition-colors"
            >
              Saber más →
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="relative hidden md:block animate-scale-in mr-[-1rem] md:mr-[-3rem] lg:mr-[-5rem] xl:mr-[-8rem]">
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent z-10 pointer-events-none" />
          <img
            src="https://yecla33.com/wp-content/uploads/2023/12/xVegetarian-cabra-p.-_20260406_213617_0000-400x300.jpg.pagespeed.ic.UZcszT1EbQ.jpg"
            alt="Vegetarian Queso de Cabra Burger"
            className="w-full h-[85vh] object-cover rounded-l-[2rem] shadow-elegant"
          />
        </div>
      </div>

      {/* Mobile image */}
      <div className="md:hidden absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95 z-10" />
        <img
          src="https://yecla33.com/wp-content/uploads/2023/12/xVegetarian-cabra-p.-_20260406_213617_0000-400x300.jpg.pagespeed.ic.UZcszT1EbQ.jpg"
          alt="Vegetarian Queso de Cabra Burger"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
