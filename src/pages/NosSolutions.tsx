import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Tabs from "@/components/ParTechnologie";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";


const NosSolutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection title="Nos solutions" description="Découvrez nos solutions" showButtons={false}></HeroSection>
      <div className="text-center my-4">
          <h2 className="text-xl md:text-3xl font-neue-plak font-bold text-gray-900 mb-4">Par technologies</h2>
      </div>
      <Tabs />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default NosSolutions;