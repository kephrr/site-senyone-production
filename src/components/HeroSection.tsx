import { Button } from "@/components/ui/button";
import { Calculator, Play, Settings } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useScrollAnimation } from "./hook/useScrollAnimation";

interface HeroSectionProps {
  showButtons?: boolean;
  title?: string;
  description?: string;
  maxWidth?: string;
}

export interface HeroText {
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  showButtons = true,
  title = "Libérez 80% de votre temps opérationnel",
  description = "SENYONE, Leader de la Smart Automation en Afrique de l'Ouest",
  maxWidth = "max-w-5xl",
}) => {
  const [heroRef, heroVisible] = useScrollAnimation(0.1);

  return (
    <section id="hero-section" className="relative flex items-center justify-center overflow-hidden z-0">
      <div className="relative w-full overflow-hidden rounded-b-[50px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 hero-gradient opacity-50" />

        {/* Pattern supplémentaire */}
        <div className="absolute inset-0 z-20 hero-bg-pattern opacity-70" />

        {/* ✅ Contenu */}
        <div
          ref={heroRef}
          className={`relative z-30 text-center px-6 ${maxWidth} mx-auto pt-28 pb-12 leading-tight transition-all duration-1000 delay-200 ${
            heroVisible ? "translate-x-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="hero-title text-white mb-6 md:text-5xl md:mx-52 font-neue-plak">
            {title}
          </h1>

          <p className="hero-subtitle text-white mb-12 max-w-2xl mx-auto">
            {description}
          </p>

          {/* Boutons d’action */}
          {showButtons && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Button className="btn-coral flex items-center gap-3 min-w-[200px] rounded-full">
                <Calculator className="w-5 h-5" />
                Calculer mon ROI
              </Button>

              <Button className="btn-teal flex items-center gap-3 min-w-[200px] rounded-full">
                <Play className="w-5 h-5" />
                Voir la démo
              </Button>

              <Button className="btn-white flex items-center gap-3 min-w-[200px] rounded-full">
                <Settings className="w-5 h-5" />
                Diagnostic gratuit
              </Button>
            </div>
          )}
        </div>

        {/* ✅ Petits éléments décoratifs flottants */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-brand-orange rounded-full animate-pulse opacity-60 blur-xl"></div>
        <div className="absolute top-40 right-32 w-60 h-60 bg-brand-cyan rounded-full animate-pulse opacity-40 animation-delay-1000 blur-2xl"></div>
        <div className="absolute bottom-32 left-16 w-10 h-10 bg-brand-green rounded-full animate-pulse opacity-50 animation-delay-2000 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-brand-pink rounded-full animate-pulse opacity-0 animation-delay-500 blur-xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
