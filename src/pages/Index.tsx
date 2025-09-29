import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Defis from "@/components/DefisSection";
import { MetricsSection } from "@/components/MetriqueSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MetricsSection />
      <Defis />
      <Footer />
    </div>
  );
};

export default Index;
