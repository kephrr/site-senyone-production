import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { ValuesSection } from "@/components/ValuesSection";
import { NotreEquipeSection } from "@/components/NotreEquipeSection";
import { MissionsSection } from "@/components/MissionSection";
import { NotreApprocheSection } from "@/components/NotreApprocheSection";
import { NosResultatsChiffres } from "@/components/NosResultatsChiffres";
import Footer from "@/components/Footer";
import { Banniere } from "@/components/Banniere";
import { EngagementRSE } from "@/components/EngagementRSE";
import { Button } from "@/components/ui/button";

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection 
        title="Senyone, votre partenaire de transformation digitale en Afrique de l'Ouest" 
        description="Depuis 2021, SENYONE accompagne les entreprises dans leur révolution numérique. Spécialistes de la digitalisation, de l'automatisation intelligente et de l'IA, nous transformons vos défis opérationnels en avantages concurrentiels durables."
        showButtons={false}
        maxWidth="max-w-8xl"
      />
      
      <MissionsSection />
      <ValuesSection />
      <NotreEquipeSection />
      <NotreApprocheSection />
      <NosResultatsChiffres />
      <EngagementRSE />
      
      <Banniere />
      <Footer />
    </div>
  );
};

export default QuiSommesNous;
