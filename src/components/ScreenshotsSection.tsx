import logo from "@/assets/logo.svg";
import screen1 from "@/assets/screen1.svg";
import screen2 from "@/assets/screen2.svg";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "./hook/useScrollAnimation";

const Screenshots = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);

  return (
<div ref={sectionRef} className="relative w-full flex flex-col items-center justify-center min-h-screen -mt-36 z-10">
      
      {/* Card principale */}
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl px-6 py-20 relative">
        <div className="h-48 rounded-xl"></div>
      </div>

      {/* Logo centré */}
      <div className="absolute top-1/2 transform -translate-y-1/2">
        <img
          src={logo}
          alt="Logo"
          className="w-28 h-28 object-contain"
        />
      </div>

      {/* Cards latérales (images) */}
      <div className="absolute inset-0 flex items-center justify-between px-6 max-w-5xl mx-auto">
        {/* Gauche */}
        <div className={`hidden md:block w-96 leading-tight transition-all duration-1000 delay-500 ${
                        sectionVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                    }`}>
          <img
            src={screen2}
            alt="Follower card"
            className="rounded-xl object-cover"
          />
        </div>

        {/* Droite */}
        <div className={`hidden md:block w-[500px] leading-tight transition-all duration-1000 delay-500 ${
                        sectionVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                    }`}>
          <img
            src={screen1}
            alt="Analitic card"
            className="rounded-xl object-cover mx-40"
          />
        </div>
      </div>

      {/* Version mobile : cards en colonne */}
      <div className="mt-8 flex flex-col gap-4 w-full px-4 md:hidden">
        <img
          src={screen1}
          alt="Follower card"
          className="rounded-xl object-cover"
        />
        <img
          src={screen2}
          alt="Analitic card"
          className="rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Screenshots;
