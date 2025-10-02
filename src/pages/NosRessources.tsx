import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import RoiForm from "@/components/RoiForm";
import Guides from "@/components/GuideTelechargeables";
import { Guide } from "@/components/ui/article";


const NosRessources = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection showButtons={false} title="Nos Ressources" />
      <div className="max-w-5xl mx-auto">
        <RoiForm/>
        <Guides/>
      </div>
      <Footer />
    </div>
  );
};

export default NosRessources;
