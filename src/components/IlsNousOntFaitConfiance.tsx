import uiPathPartner from "@/assets/images/UiPath-Partner.webp";
import cbao from "@/assets/images/cbao-seeklogo.com_.png";
import atos from "@/assets/images/Atos_logo.png";
import orange from "@/assets/images/Orange_logo.svg.png";
import wave from "@/assets/images/wave-photo.png";
import { useScrollAnimation } from "./hook/useScrollAnimation";

export default function IlsNousOntFaitConfiance() {

  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto text-start">
        <h2 className="text-3xl font-bold font-neue-plak">Ils nous ont fait confiance</h2>
        <p className="text-gray-600 mt-2 font-neue-plak-normal">
          Découvrez quelques-uns de nos clients satisfaits.
        </p>
      </div>
      <div className="max-w-5xl mx-auto flex gap-24 flex-wrap py-10 overflow-hidden">
        {[uiPathPartner, cbao, atos, orange, wave].map((logo, index) => {
          const altText = [
            'UiPath Partner',
            'CBAO',
            'Atos',
            'Orange',
            'Wave'
          ][index];
          
          return (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-[#00929E] mix-blend-hue transition-opacity duration-300 group-hover:opacity-0 z-10" />
              <img className="max-h-[50px] w-auto relative z-0" src={logo} alt={altText} />
            </div>
          );
        })}
      </div>
    </div>
  );
}