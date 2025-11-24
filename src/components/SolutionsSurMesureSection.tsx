import { ReactNode } from "react";
import { useScrollAnimation } from "./hook/useScrollAnimation";

export interface SolutionCardProps {
  icon: ReactNode;
  title: string;
  items: string[];
  badge: string;
}

export interface SolutionsSurMesureSectionProps {
  cards: SolutionCardProps[];
}

const SolutionsSurMesureSection = ({ cards }: SolutionsSurMesureSectionProps) => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);

  return (
    <section
      ref={sectionRef}
      className={`py-16  bg-white transition-all duration-1000 rounded-t-[50px] ${
        sectionVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-xl md:text-3xl font-neue-plak font-bold text-gray-900">
            Nos solutions sur mesure concrètes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#E0E0E0] shadow-sm px-6 py-8 flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-[#F5F5F5]">
                  {card.icon}
                </div>
                <h3 className="text-lg font-neue-plak font-bold text-[#383838] h-14 pb-2">
                  {card.title}
                </h3>
                <hr className="border-t border-[#E0E0E0] my-4" />
                <ul className="list-disc list-inside space-y-1 text-xs leading-0 text-[#4F4F4F]">
                  {card.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C4F2E5] text-[#008D92] text-xs font-medium">
                  {card.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSurMesureSection;
