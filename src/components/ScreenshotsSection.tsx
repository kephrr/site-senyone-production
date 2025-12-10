import logo from "@/assets/logo.svg";
import screen1 from "@/assets/screen1.svg";
import screen2 from "@/assets/screen2.svg";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useVideoModal } from "@/contexts/VideoModalContext";

const Screenshots = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);
  const { isVideoModalOpen } = useVideoModal();

  return (
<div ref={sectionRef} className="relative w-full flex flex-col items-center justify-center h-[400px] md:h-[500px] -mt-24 z-0">
      
      {/* Card principale */}
      <div className={`md:block hidden w-full max-w-xs md:max-w-xl bg-white shadow-xl rounded-2xl px-4 md:px-6 py-8 md:py-20 relative transition-opacity duration-300 ${
        isVideoModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div className="h-32 md:h-48 rounded-xl"></div>
      </div>

      {/* Logo centré */}
      <div className={`md:block hidden absolute top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${
        isVideoModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-20 md:w-28 md:h-28 object-contain"
        />
      </div>

      {/* Cards latérales (images) */}
      <div className="absolute inset-0 flex items-center justify-between px-6 max-w-5xl mx-auto">
        {/* Gauche */}
        <div className={`hidden md:block w-96 leading-tight transition-all duration-1000 delay-500 transition-opacity duration-300 ${
                        sectionVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                    } ${
        isVideoModalOpen ? 'md:hidden pointer-events-none' : ''
      }`}>
          <img
            src={screen2}
            alt="Follower card"
            className="rounded-xl object-cover"
          />
        </div>

        {/* Droite */}
        <div className={`hidden md:block w-[500px] leading-tight transition-all duration-1000 delay-500 transition-opacity duration-300 ${
                        sectionVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                    } ${
        isVideoModalOpen ? 'md:hidden pointer-events-none' : ''
      }`}>
          <img
            src={screen1}
            alt="Analitic card"
            className="rounded-xl object-cover mx-40"
          />
        </div>
      </div>

      {/* Version mobile : cards en colonne */}
      <div className="flex flex-col w-full px-4 md:hidden relative">
        <img
          src={screen1}
          alt="Follower card"
          className={`absolute rounded-xl object-cover w-full max-w-xs mx-auto h-auto z-0 mt-8 transition-opacity duration-300 ${
            isVideoModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />
        <img
          src={screen2}
          alt="Analitic card"
          className={`absolute rounded-xl object-cover w-full max-w-xs mx-auto h-auto -mt-12 ml-28 transition-opacity duration-300 ${
            isVideoModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />
      </div>
    </div>
  );
};

export default Screenshots;
