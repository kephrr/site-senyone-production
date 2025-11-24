import React, { useEffect, useState } from "react";
import automationIcons2 from "@/assets/connect-1.png";
import automationIcons from "@/assets/connect-2.png";
import automationIcons3 from "@/assets/connect-3.png";

export const ConnectingTasksAnimation = () => {
  const [mid, setMid] = useState(0);
  const [back, setBack] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Descente
      setMid(20);
      setBack(40);

      // Retour à 0 après 1s
      setTimeout(() => {
        setMid(0);
        setBack(0);
      }, 3000);
    }, 4000); // 1s mouvement + 1s pause

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[235px] h-[95px] mx-auto">
      {/* TOP */}
      <div
        className={`flex w-[77.01%] h-[62.96%] left-[11.64%] bg-white border border-solid border-[#b1b1b1]
                opacity-50 items-center gap-5 pl-2.5 pr-[50px] py-2.5 absolute rounded-[15px]`}>
        <img className="w-8 h-8" alt="Automation icons" src={automationIcons} />
        <div>Connecting tasks</div>
      </div>

      {/* MID */}
      <div
        style={{ transform: `translateY(${mid}px)` }}
        className={`transition-all duration-700 flex w-[89.25%] h-[62.22%] left-[5.97%] 
        items-center gap-5 pl-2.5 pr-[50px] py-2.5 absolute rounded-[15px] bg-white
        border border-solid border-[#b1b1b1]`}
      >
        <img className="w-8 h-8" src={automationIcons2} alt="Connecting tasks" />
        <div>Connecting tasks</div>
      </div>

      {/* BACK */}
      <div
        style={{ transform: `translateY(${back}px)` }}
        className={`transition-all duration-700 inline-flex w-full h-[62.96%] left-0 bg-white
        border border-solid border-[#b1b1b1] items-center gap-5 pl-2.5 pr-[50px] py-2.5 
        shadow-lg
        absolute rounded-[15px]`}
      >
        <img className="w-8 h-8" src={automationIcons3} alt="Connecting tasks" />
        <div>Connecting tasks</div>
      </div>
    </div>
  );
};
