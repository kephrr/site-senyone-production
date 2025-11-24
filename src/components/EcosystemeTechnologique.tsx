import InfoCards from "./ui/liste-cards";
import outilsDeReparation from "@/assets/images/outils-de-reparation.gif";
import organigramme from "@/assets/images/organigramme.gif";
import paiement from "@/assets/images/paiement.gif";
import { useScrollAnimation } from "./hook/useScrollAnimation";

export default function EcosystemeTechnologique() {
    const [sectionRef, sectionVisible] = useScrollAnimation(0.1);
  return (
    <div  ref={sectionRef} 
        className={`py-12 transition-all duration-1000 delay-200 ${
                        sectionVisible ? 'translate-x-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
      <div className="max-w-5xl mx-auto text-start">
        <h2 className="text-3xl font-bold font-neue-plak">Écosystème Technologique</h2>
        <p className="text-gray-600 mt-2 font-neue-plak-normal">
          Découvrez notre écosystème technologique.
        </p>
        <div className="w-full py-10">
          <InfoCards
            data={[
              {
                icon: <img src={outilsDeReparation} alt="Icon 1" />,
                title: "Technologies leaders",
                items: [
                    "UiPath Gold Partner",
                    "Microsoft Partner",
                    "Google Cloud",
                    "OpenAI",
                    ],
              },
              {
                icon: <img src={organigramme} alt="Icon 2" />,
                title: "Écosystème local",
                items: [
                    "Hub IA Sénégal",
                    "Digital Africa",
                    "DER/FJ",
                    "Orange Digital Center",
                ],
              },
              {
                icon: <img src={paiement} alt="Icon 3" />,
                title: "Certifications",
                items: [
                    "ISO 27001",
                    "Qualiopi",
                    "RGPD Ready",
                ],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}