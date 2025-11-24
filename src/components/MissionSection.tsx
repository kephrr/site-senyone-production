import mission from "@/assets/images/mission.jpg";
import screen1 from "@/assets/screen1.svg";
import screen2 from "@/assets/screen2.svg";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "./hook/useScrollAnimation";
import { Quote } from "lucide-react";

export const MissionsSection = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);

  return (
    <section id="mission" ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-12">
          <h2 className="text-xl md:text-3xl font-neue-plak font-bold text-gray-900">Notre Mission</h2>
        </div>

        <div className="relative w-full flex flex-col items-center justify-center z-10">
          {/* Card principale */}
          <div className="hidden md:block w-full max-w-5xl px-6">
            <div className="relative w-full h-[380px] flex items-center">
              <img
                src={mission}
                className="absolute left-0 top-1/2 -translate-y-1/2 h-[450px] w-auto rounded-2xl object-cover"
              ></img>

              {/* Cards latérales (images) */}
              <div
                className={`absolute left-[340px] top-56 -translate-y-1/2 w-[640px] max-w-[640px] shadow-2xl rounded-2xl p-6 leading-tight bg-white transition-all duration-1000 delay-500 ${
                  sectionVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
              >
                {/* Droite */}
                <h3 className="text-2xl font-semibold mb-4">
                  Démocratiser l'excellence opérationnelle par la technologie
                </h3>
                <Quote className="w-12 h-12 mb-4" color="#E44849" />
                <p className="text-sm text-gray-700">
                  Nous croyons que chaque entreprise, quelle que soit sa taille, mérite d'accéder aux bénéfices de
                  l'automatisation et de l'intelligence artificielle. Notre mission est de rendre ces technologies
                  accessibles, mesurables et rentables pour toutes les organisations ouest-africaines.
                </p>
              </div>
            </div>
          </div>

          {/* Version mobile : cards en colonne */}
          <div className="mt-8 flex flex-col gap-4 w-full px-4 md:hidden">
            <img src={mission} className="h-96 w-auto rounded-xl"></img>
            <img
              src={screen2}
              alt="Analitic card"
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionsSection;
