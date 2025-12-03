import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import DefisCardsSection from "@/components/DefisCardsSection";
import SolutionsSurMesureSection, { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import CasClientSection, { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import { useScrollAnimation } from "@/components/hook/useScrollAnimation";
import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export const QuiAidonsNous = ({solutionsCards, cases, cards, heroText}: {solutionsCards: SolutionCardProps[], cases: CasClient[], cards: DefiCardProps[], heroText: HeroText}) => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);
  return (
    <div className="min-h-screen bg-[#f3f3f3] max-w-screen overflow-hidden">
      <Navbar />
      <HeroSection 
        title={heroText.title}
        description={heroText.description}
        showButtons={false}
        maxWidth="max-w-8xl"
      />
      <div ref={sectionRef} className={` max-w-5xl mx-auto p-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        sectionVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}>  
        <div className="text-start md:mb-12 md:py-8">
            <h2 className="text-xl md:text-4xl font-neue-plak font-bold text-gray-900">Vos défis</h2>
            <p className="text-sm md:text-xl max-w-xl text-[#6B6B6B]">Nous sommes ravis de vous apporter notre aide dans le surpassement de vos défis quotidiens</p>
        </div>
      </div>
      <DefisCardsSection cards={cards} />
      <div className="bg-white rounded-t-[50px] w-full">
        <SolutionsSurMesureSection cards={solutionsCards} />
        <CasClientSection cases={cases} />
      </div>
      
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default QuiAidonsNous;