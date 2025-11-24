import { useState } from "react";
import { Quote } from "lucide-react";
import { useScrollAnimation } from "./hook/useScrollAnimation";

export interface CasClient {
  title: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}




const CasClientSection = ({cases}: {cases: CasClient[]}) => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const current = cases[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const imageUrl =
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80";

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full transition-all duration-1000 ${
        sectionVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="rounded-t-[40px] bg-gradient-to-b from-[#ED6E3D] via-[#E44849] to-[#E44849] text-white overflow-hidden px-8 md:px-12 py-10 md:py-14">
        <div className="max-w-5xl px-8 mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Texte */}
          <div className="flex-1">
            <Quote className="w-10 h-10 mb-6" />
            <h3 className="text-lg md:text-xl font-neue-plak font-bold mb-4">
              {current.title}
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              "{current.quote}"
            </p>
            <p className="text-xl font-neue-plak">
              <span className="font-neue-plak-thin">{current.author}</span>, {current.company}
            </p>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="px-5 py-2 rounded-full bg-white text-[#383838] text-sm font-medium shadow-sm hover:bg-[#F5F5F5] transition-colors"
              >
                Précédent
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2 rounded-full bg-white text-[#383838] text-sm font-medium shadow-sm hover:bg-[#F5F5F5] transition-colors"
              >
                Suivant
              </button>
            </div>
          </div>

          {/* Image circulaire, deux cercles empilés */}
          <div className="ml-52 flex flex-1 justify-center">
            <div className="relative w-60 h-60">
              {/* Cercle arrière (blanc) */}
              <div
                className={`absolute inset-0 rounded-full bg-white transition-transform duration-300 ease-in-out ${
                  isHovered
                    ? "translate-x-[20px] translate-y-[20px]"
                    : "translate-x-[10px] translate-y-[10px]"
                }`}
              />

              {/* Cercle avant (image) */}
              <div
                className={`absolute inset-0 rounded-full bg-center bg-cover transition-transform duration-300 ease-in-out ${
                  isHovered
                    ? "-translate-x-[10px] -translate-y-[10px]"
                    : "translate-x-0 translate-y-0"
                }`}
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasClientSection;
