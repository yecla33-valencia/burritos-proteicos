import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MenuSection from "@/components/MenuSection";
import FeaturesSecondary from "@/components/FeaturesSecondary";
import InfoSection from "@/components/InfoSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <MenuSection />
      <FeaturesSecondary />
      <InfoSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
