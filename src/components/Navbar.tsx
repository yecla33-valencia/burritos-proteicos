import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import AllergensDialog from "@/components/AllergensDialog";
import NutritionDialog from "@/components/NutritionDialog";

type NavLink = {
  label: string;
  href?: string;
  active?: boolean;
  external?: boolean;
  type?: "allergens" | "nutrition";
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: NavLink[] = [
    { label: "Inicio", href: "#", active: true },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Carta", href: "#menu" },
    { label: "Valores nutricionales", type: "nutrition" },
    { label: "Alérgenos", type: "allergens" },
    { label: "Contacto", href: "#contacto" },
  ];

  const linkClass = (active?: boolean) =>
    `relative text-base lg:text-[1.3125rem] font-medium tracking-tight px-4 lg:px-5 py-2 lg:py-2.5 rounded-full transition-all duration-300 ${
      active
        ? "bg-white/20 text-white"
        : "text-white/85 hover:text-white hover:bg-white/10"
    }`;

  const mobileLinkClass = (active?: boolean) =>
    `block w-full text-left py-3 px-4 rounded-xl font-medium transition-colors ${
      active
        ? "bg-white/20 text-white"
        : "text-white/85 hover:text-white hover:bg-white/10"
    }`;

  const renderDesktopLink = (link: NavLink) => {
    if (link.type === "allergens") {
      return (
        <AllergensDialog key={link.label}>
          <button type="button" className={linkClass(link.active)}>
            {link.label}
          </button>
        </AllergensDialog>
      );
    }
    return (
      <a
        key={link.label}
        href={link.href}
        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={linkClass(link.active)}
      >
        {link.label}
      </a>
    );
  };

  const renderMobileLink = (link: NavLink) => {
    if (link.type === "allergens") {
      return (
        <AllergensDialog key={link.label}>
          <button
            type="button"
            className={mobileLinkClass(link.active)}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </button>
        </AllergensDialog>
      );
    }
    return (
      <a
        key={link.label}
        href={link.href}
        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={mobileLinkClass(link.active)}
        onClick={() => setIsOpen(false)}
      >
        {link.label}
      </a>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[hsl(var(--navbar))] text-[hsl(var(--navbar-foreground))] ${
        scrolled ? "shadow-soft border-b border-[hsl(var(--navbar-foreground)/0.15)]" : ""
      }`}
    >
      <div className="container mx-auto grid grid-cols-[auto_1fr_auto] items-center py-4 px-4">
        <a href="#" className="flex items-center transition-transform hover:scale-105">
          <img
            src="https://yecla33.com/wp-content/uploads/2023/05/xlogo-yecla33_2x-removebg-preview.png.pagespeed.ic.OyiqOGOuy6.png"
            alt="Yecla 33"
            className="h-11"
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center gap-2 lg:gap-3">
          {links.map(renderDesktopLink)}
        </div>
        <div className="hidden md:block" />

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[hsl(var(--navbar))] border-t border-white/15 px-4 py-3 animate-fade-in">
          {links.map(renderMobileLink)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
