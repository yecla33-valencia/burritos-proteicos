import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import BurritosHero from "@/components/burritos/BurritosHero";
import BurritosFeatures from "@/components/burritos/BurritosFeatures";
import BurritosMenu from "@/components/burritos/BurritosMenu";
import FeaturesSecondary from "@/components/FeaturesSecondary";
import InfoSection from "@/components/InfoSection";
import BurritosFAQ from "@/components/burritos/BurritosFAQ";
import Footer from "@/components/Footer";

const BURRITOS = [
  { name: "Burrito Proteico Burger", url: "https://yecla33.com/producto/burrito-proteico-burger/" },
  { name: "Burrito Proteico California", url: "https://yecla33.com/producto/burrito-proteico-california/" },
  { name: "Burrito Proteico Carnitas", url: "https://yecla33.com/producto/burrito-proteico-carnitas/" },
  { name: "Burrito Proteico San Francisco", url: "https://yecla33.com/producto/burrito-proteico-san-francisco/" },
  { name: "Protein Trufado", url: "https://yecla33.com/producto/protein-trufado/" },
];

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (!el) {
    if (selector.startsWith("link")) {
      el = document.createElement("link");
      (el as HTMLLinkElement).rel = "canonical";
    } else {
      el = document.createElement("meta");
      const match = selector.match(/\[(name|property)="([^"]+)"\]/);
      if (match) (el as HTMLMetaElement).setAttribute(match[1], match[2]);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const BurritosProtein = () => {
  useEffect(() => {
    const title = "Burritos mejicanos proteicos en Valencia · Burritos Protein by Yecla 33";
    const description = "Burritos mejicanos proteicos en Valencia. 5 recetas alta en proteínas con huevos revueltos en lugar de arroz. Reparto y recogida en Yecla 33.";
    const url = `${window.location.origin}/burritos-protein`;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('link[rel="canonical"]', "href", url);

    // JSON-LD structured data: Restaurant + ItemList
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Burritos Protein by Yecla 33",
        servesCuisine: ["Mexican", "High-protein"],
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C/ Yecla 33",
          addressLocality: "València",
          postalCode: "46021",
          addressCountry: "ES",
        },
        telephone: "+34 963 62 95 98",
        url,
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: BURRITOS.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          url: b.url,
        })),
      },
    ]);
    document.head.appendChild(ld);
    return () => {
      ld.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <BurritosHero />
      <BurritosFeatures />
      <BurritosMenu />
      <FeaturesSecondary />
      <InfoSection />
      <BurritosFAQ />
      <Footer />
    </div>
  );
};

export default BurritosProtein;
