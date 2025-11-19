import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import DefisCardsSection from "@/components/DefisCardsSection";
import SolutionsSurMesureSection from "@/components/SolutionsSurMesureSection";
import CasClientSection, { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";

import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";

const QuiAidonsNous = () => {
  const solutionsCards = [
    {
      icon: <CheckCircle2 className="w-10 h-10 text-[#008D92]" />,
      title: "Clôture Flash",
      items: [
        "Automatisation des écritures",
        "Rapprochements IA",
        "Contrôles automatiques",
      ],
      badge: "J+3 au lieu de J+15",
    },
    {
      icon: <BookOpenCheck className="w-10 h-10 text-[#E44849]" />,
      title: "Conformité garantie",
      items: [
        "Workflows de validation",
        "Piste d'audit complète",
        "Archivage légal 10 ans",
      ],
      badge: "100% OHADA compliant",
    },
    {
      icon: <Timer className="w-10 h-10 text-[#ED6E3D]" />,
      title: "Pilotage temps réel",
      items: [
        "Tableaux de bord dynamiques",
        "Alertes intelligentes",
        "Prévisions IA",
      ],
      badge: "Décisions éclairées quotidiennes",
    },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client Juridique",
      quote:
        "Nous avons sécurisé l'ensemble de nos contrats et gagné en réactivité sur les négociations.",
      author: "Directrice Juridique",
      role: "",
      company: "Holding Financière",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Rapprochements manuels source d'erreurs",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Conformité OHADA/SYSCOHADA complexe",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Clôtures interminables et stressantes",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Reporting chronophage peu valorisant",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Pression sur la réduction des coûts",
      color: "#1F8BFF",
      align: "right",
      visible: true,
      delayClass: "delay-1000",
    },
  ];


  const heroText = {
    title: "Senyone, votre partenaire de transformation digitale en Afrique de l'Ouest",
    description: "Depuis 2021, SENYONE accompagne les entreprises dans leur révolution numérique. Spécialistes de la digitalisation, de l'automatisation intelligente et de l'IA, nous transformons vos défis opérationnels en avantages concurrentiels durables.",
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] max-w-screen overflow-hidden">
      <Navbar />
      <HeroSection 
        title={heroText.title}
        description={heroText.description}
        showButtons={false}
        maxWidth="max-w-8xl"
      />
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">  
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