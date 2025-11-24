import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import DefisCardsSection from "@/components/DefisCardsSection";
import SolutionsSurMesureSection, { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import CasClientSection, { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";

import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";


export const QuiAidonsNous = ({solutionsCards, cases, cards, heroText}: {solutionsCards: SolutionCardProps[], cases: CasClient[], cards: DefiCardProps[], heroText: HeroText}) => {

  return (
    <div className="min-h-screen bg-[#f3f3f3] max-w-screen overflow-hidden">
      <Navbar />
      <HeroSection 
        title={heroText.title}
        description={heroText.description}
        showButtons={false}
        maxWidth="max-w-8xl"
      />
      <div className="max-w-5xl mx-auto p-4 sm:px-6 lg:px-8">  
        <div className="text-start mb-12 py-8">
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
    </div>
  );
};

export default QuiAidonsNous;