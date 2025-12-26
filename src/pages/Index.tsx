import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Defis from "@/components/DefisSection";
import { MetricsSection } from "@/components/MetriqueSection";
import Screenshots from "@/components/ScreenshotsSection";
import QuiAdonsNousSection from "@/components/QuiAdonsNousSection";
import NosReussitesClient from "@/components/NosReussitesClient";
import IlsNousOntFaitConfiance from "@/components/IlsNousOntFaitConfiance";
import EcosystemeTechnologique from "@/components/EcosystemeTechnologique";
import TransformationCTA from "@/components/PretAtransformerCTA";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import AutomationGraphic from "@/components/AutomationGraph";
import VideoModal from "@/components/ui/VideoModal";
import { useVideoModal } from "@/contexts/VideoModalContext";

const Index = () => {
  const { isVideoModalOpen, closeVideoModal } = useVideoModal();

  return (
    <div className="min-h-screen max-w-screen relative overflow-hidden bg-[#efefef]">
      <Navbar />
      <HeroSection  />
      <div className="py-44 z-0 relative">
        <AutomationGraphic/>
      </div>
      <div className="mb-2">
        <MetricsSection />
      </div>
      <Defis />
      <QuiAdonsNousSection />
      <NosReussitesClient />
      <IlsNousOntFaitConfiance />
      <EcosystemeTechnologique />
      <TransformationCTA />
      <Footer />
      <WhatsAppWidget />
      
      {/* VideoModal au niveau racine pour éviter les conflits de z-index */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoSrc="/videos/demo.mp4"
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
    </div>
  );
};

export default Index;
