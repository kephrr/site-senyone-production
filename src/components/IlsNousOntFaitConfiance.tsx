import uiPathPartner from "@/assets/images/UiPath-Partner.webp";
import cbao from "@/assets/images/cbao-seeklogo.com_.png";
import atos from "@/assets/images/Atos_logo.png";
import orange from "@/assets/images/Orange_logo.svg.png";
import wave from "@/assets/images/wave-photo.png";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function IlsNousOntFaitConfiance() {

  return (
    <div className="md:py-12 px-4 md:px-0">
      <div className="max-w-5xl mx-auto text-start">
        <h2 className="md:text-3xl text-xl font-bold font-neue-plak">Ils nous ont fait confiance</h2>
        <p className="text-gray-600 md:mt-2 font-neue-plak-normal">
          Découvrez quelques-uns de nos clients satisfaits.
        </p>
      </div>
      <div className="max-w-5xl mx-auto flex md:gap-24 gap-12 flex-wrap py-10 overflow-hidden">
        {[uiPathPartner, atos, cbao, orange, wave].map((logo, index) => {
          const altText = [
            'UiPath Partner',
            'Atos',
            'CBAO',
            'Orange',
            'Wave'
          ][index];
          
          return (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-[#00929E] mix-blend-hue transition-opacity duration-300 group-hover:opacity-0 z-10" />
              <img className="md:max-h-[50px] max-h-[30px] w-auto relative z-0" src={logo} alt={altText} />
            </div>
          );
        })}
      </div>
    </div>
  );
}