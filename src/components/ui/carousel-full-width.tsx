import React, { useState, useEffect, useCallback } from "react";
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
  label?: string;
};

type CarouselProps = {
  slides: Slide[];
  height?: string;
  className?: string;
  transitionSpeed?: number;
  colorType?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showNavigation?: boolean;
};

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  height = "md:h-[500px] h-[300px]",
  className,
  transitionSpeed = 0.45,
  colorType = true,
  autoPlay = false,
  autoPlayInterval = 3000,
  showNavigation = true,
}) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("up");

  if (!slides || slides.length === 0) return null;

  const nextSlide = useCallback(() => {
    setDirection("up");
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setDirection("down");
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > current ? "up" : "down");
    setCurrent(index);
  };

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, nextSlide]);

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
      {/* Navigation Labels */}
      {showNavigation && (
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/60 to-transparent">
          <div className="flex items-center justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-10 lg:px-10 py-4 sm:py-6 overflow-x-auto scrollbar-hide">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={cn(
                  "relative whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg font-neue-plak transition-all duration-300 pb-2",
                  current === index
                    ? "text-white font-bold"
                    : "text-gray-400 hover:text-gray-200"
                )}
              >
                {slide.badge}
                {current === index && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

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
            background: colorType
              ? "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,146,158,1) 100%)"
              : "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(228,72,73,1) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full ">
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
              className="absolute inset-0 flex flex-col justify-center px-4 md:px-0 md:p-10 w-full h-full"
            >
              <div className="w-full max-w-5xl mx-auto text-white">
                {/*<div className="flex gap-6">
                {slides.map((slide) => {
                    return (  <span
                        key={slide.id}
                        className="mb-6 text-sm opacity-95 p-2 border-[#00929E] border rounded-md border-white"
                      >
                        {slide.badge}
                      </span>
                    )
                })}
                </div>*/}
                
                
                {/* Titre avec taille fixe 75px */}
                <h2 className="md:text-[75px] text-3xl font-bold mb-4 leading-tight font-neue-plak">
                  {slides[current].title}
                </h2>
                {slides[current].list && (
                  <ul className="mb-6 md:text-lg text-sm opacity-95 list-disc list-inside">
                    {slides[current].list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {slides[current].description && <p className="mb-6 md:text-lg text-sm opacity-95">{slides[current].description}</p>}
                {slides[current].buttonText && (
                  <a
                    href={slides[current].buttonLink}
                    className="inline-block bg-white text-sm md:text-base text-black md:px-12 md:py-2 px-6 py-1 rounded-3xl font-medium hover:bg-gray-200 transition"
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