import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import RoiForm from "@/components/RoiForm";
import Guides from "@/components/GuideTelechargeables";
import { Guide } from "@/components/ui/article";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";


const NosRessources = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection showButtons={false} title="Nos Ressources" />
      <div className="max-w-5xl mx-auto px-8 md:px-0">
        <Guides/>
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default NosRessources;