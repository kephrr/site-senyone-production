import { Quote } from "lucide-react";
import { useScrollAnimation } from "./hook/useScrollAnimation";

export interface DefiCardProps {
  title: string;
  color: string;
  align: "left" | "right";
  visible: boolean;
  delayClass: string;
}

const DefiCard = ({ title, color, align, visible, delayClass }: DefiCardProps) => {
  const isLeft = align === "left";

  const baseClasses =
    "relative bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-xl";

  return (
    <div
      className={`flex ${
        isLeft ? "justify-start" : "justify-end"
      } w-full transition-all duration-700 ${
        visible
          ? "translate-x-0 opacity-100"
          : isLeft
          ? "-translate-x-40 opacity-0"
          : "translate-x-40 opacity-0"
      } ${delayClass}`}
    >
      <div className={baseClasses}>
        <div className="flex">
          <div
            className="w-3 rounded-r-2xl"
            style={{ backgroundColor: color }}
          />
          <div className="flex-1 px-6 py-6 bg-white">
            <p className="text-base md:text-xl text-[#383838] mb-6 font-neue-plak-thin">
              {title}
            </p>
            <Quote className="w-8 h-8" style={{ color }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const DefisCardsSection = ({ cards }: { cards: DefiCardProps[] }) => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);

  const leftCards = cards.filter((card) => card.align === "left");
  const rightCards = cards.filter((card) => card.align === "right");
  const leftDelays = ["delay-300", "delay-700"];
  const rightDelays = ["delay-100", "delay-500", "delay-1000"];

  return (
    <section
      ref={sectionRef}
      className={`bg-[#f3f3f3] py-10 transition-all duration-1000 ${
        sectionVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
          <div className="space-y-10 mt-8">
            {leftCards.map((card, index) => (
              <DefiCard
                key={index}
                title={card.title}
                color={card.color}
                align="left"
                visible={sectionVisible}
                delayClass={leftDelays[index]}
              />
            ))}
          </div>
          <div className="space-y-10">
            {rightCards.map((card, index) => (
              <DefiCard
                key={index}
                title={card.title}
                color={card.color}
                align="right"
                visible={sectionVisible}
                delayClass={rightDelays[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefisCardsSection;
