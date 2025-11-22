import React, { useEffect } from "react";
import frame23 from "@/assets/document-numeric.svg";
import "./zero-paper-animation.css";

export const PropertyDefault = () => {
  return (
    <div
      className="relative w-[229px] h-[157px] mx-auto"
      role="img"
      aria-label="Card stack illustration"
    >
      <article className="paper-animation paper-left top-[2.55%] left-[2.21%] absolute w-[40.15%] h-[76.43%] bg-white rounded-[10px] border-[0.75px] border-solid border-[#b1b1b1] shadow-[0px_15px_20px_#00000026]">
        <div
          className="w-[76.32%] h-[56.13%] top-[8.18%] left-[11.13%] absolute bg-[#e6e6e6] rounded-[5px]"
          aria-hidden="true"
        />

        <div
          className="w-[73.46%] h-[3.49%] top-[69.24%] left-[13.98%] absolute bg-[#e6e6e6] rounded-[5px]"
          aria-hidden="true"
        />

        <div
          className="w-[73.46%] h-[3.49%] top-[76.31%] left-[14.06%] absolute bg-[#e6e6e6] rounded-[5px]"
          aria-hidden="true"
        />
      </article>

      <article className="paper-animation paper-right top-[2.41%] left-[57.65%] absolute w-[40.15%] h-[76.43%] bg-white rounded-[10px] border-[0.75px] border-solid border-[#b1b1b1] shadow-[0px_15px_20px_#00000026]">
        <div
          className="absolute w-[75.38%] h-[32.11%] top-[9.17%] left-[12.46%] bg-[#e6e6e6] rounded-[5px]"
          aria-hidden="true"
        />

        <div
          className="absolute w-[75.38%] h-[41.62%] top-[48.48%] left-[13.06%] bg-[#e6e6e6] rounded-[5px]"
          aria-hidden="true"
        />
      </article>

        <div className="inline-flex items-center gap-2.5 p-[15px] relative rounded-[12.5px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,159,121,1)_0%,rgba(237,110,61,1)_100%)] 
         w-[28.36%] h-[41.40%] top-[55.41%] left-[35.2%]">
            <img
            alt="Document icon with number 01"
            src={frame23}
        />
        </div>
      
    </div>
  );
};
