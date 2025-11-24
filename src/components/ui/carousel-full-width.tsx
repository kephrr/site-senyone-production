import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export type Slide = {
  id: number;
  title: string;
  description?: string;
  list?: string[];
  image: string;
  buttonText?: string;
  buttonLink?: string;
  badge?: string;
};

type CarouselProps = {
  slides: Slide[];
  height?: string;
  className?: string;
  transitionSpeed?: number; // en secondes
  colorType?: boolean;
};

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  height = "h-[500px]",
  className,
  transitionSpeed = 0.45,
  colorType = true,
}) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("up");

  if (!slides || slides.length === 0) return null;

  const nextSlide = () => {
    setDirection("up");
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("down");
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variantsBackground = {
    enter: (dir: "up" | "down") => ({ y: dir === "up" ? "100%" : "-100%" }),
    center: { y: "0%" },
    exit: (dir: "up" | "down") => ({ y: dir === "up" ? "-100%" : "100%" }),
  };

  const variantsText = {
    enter: (dir: "up" | "down") => ({ y: dir === "up" ? "-100%" : "100%" }),
    center: { y: "0%" },
    exit: (dir: "up" | "down") => ({ y: dir === "up" ? "100%" : "-100%" }),
  };

  return (
    <div className={cn("relative w-full overflow-hidden rounded-3xl", height, className)}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={`${slides[current].id}-bg`}
            src={slides[current].image}
            alt={slides[current].title}
            custom={direction}
            variants={variantsBackground}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: transitionSpeed, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
          />
        </AnimatePresence>

        {/* Layer noir semi-transparent 60% */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        {/* Gradient overlay #000000 0% → #00929E 100% */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: colorType ? "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,146,158,1) 100%)" : "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(228,72,73,1) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`${slides[current].id}-text`}
              custom={direction}
              variants={variantsText}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: transitionSpeed, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-center p-10 w-full h-full"
            >
              <div className="w-full max-w-5xl mx-auto text-white">
                {slides[current].badge && 
                  <span className="mb-6 text-lg opacity-95 p-2 border-[#00929E] border-2 rounded-md border-white">{slides[current].badge}</span>
                }
                
                {/* Titre avec taille fixe 75px */}
                <h2 className="text-[75px] font-bold mb-4 leading-tight font-neue-plak">
                  {slides[current].title}
                </h2>
                {slides[current].list && (
                  <ul className="mb-6 text-lg opacity-95 list-disc list-inside">
                    {slides[current].list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {slides[current].description && <p className="mb-6 text-lg opacity-95">{slides[current].description}</p>}
                {slides[current].buttonText && (
                  <a
                    href={slides[current].buttonLink}
                    className="inline-block bg-white text-black px-12 py-2 rounded-3xl font-medium hover:bg-gray-200 transition"
                  >
                    {slides[current].buttonText}
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-20">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition"
          aria-label="Précédent"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition"
          aria-label="Suivant"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Carousel;
