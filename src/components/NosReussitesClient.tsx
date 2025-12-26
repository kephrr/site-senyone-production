import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import webdev from "@/assets/images/web-dev.jpg";
import marketing from "@/assets/images/marketing.jpg";
import ventes from "@/assets/images/ventes.jpg";

type Item = {
  title: string;
  defi: string;
  solution: string;
  impact: string;
  buttonText: string;
  image: string; // image de fond pour l'item
};

// Exemple de data
const items: Item[] = [
  {
    title: "Groupe Bancaire Régional",
    defi: "15 jours pour analyser un dossier crédit",
    solution: "IA d'analyse documentaire + RPA",
    impact: "2 jours | -87% délai | +45% de dossiers traités",
    buttonText: "Lire le cas complet",
    image: webdev,
  },
  {
    title: "Assureur Leader CIMA",
    defi: "5000 réclamations/mois en papier",
    solution: "Portail client + traitement IA",
    impact: "100% digital | 78% traités auto | NPS +32 points",
    buttonText: "Télécharger l’étude",
    image: marketing,
  },
  {
    title: "Distributeur Alimentaire",
    defi: "Commandes WhatsApp & Téléphone",
    solution: "Bot omnicanal",
    impact: "2000 commandes/jour | -15 ETP",
    buttonText: "Voir la démo",
    image: ventes,
  },
  {
    title: "Entreprise Logistique",
    defi: "Suivi manuel des livraisons",
    solution: "Tracking en temps réel",
    impact: "-70% appels au support",
    buttonText: "Voir le cas",
    image: ventes,
  },
  {
    title: "Retailer E-commerce",
    defi: "Emails clients sans réponse",
    solution: "Chatbot intelligent",
    impact: "90% réponses auto",
    buttonText: "Découvrir",
    image: ventes,
  },
  {
    title: "Banque Digitale",
    defi: "Processus d’ouverture de compte lent",
    solution: "KYC automatisé",
    impact: "10 min au lieu de 7 jours",
    buttonText: "Lire le cas complet",
    image: ventes,
  },
  {
    title: "Groupe Assurance",
    defi: "Contrats papier à scanner",
    solution: "OCR + IA",
    impact: "100% digitalisation",
    buttonText: "Télécharger",
    image: ventes,
  },
  {
    title: "Entreprise Telecom",
    defi: "Support saturé par les appels",
    solution: "Bot vocal IA",
    impact: "-40% volume d’appels",
    buttonText: "Voir la démo",
    image: ventes,
  },
];

// Diviser la liste en chunks de 3
const chunkArray = (arr: Item[], size: number): Item[][] => {
  const result: Item[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export default function ClientCarousel() {
  const slides = chunkArray(items, 3); // chaque slide contient 3 items pour desktop
  const mobileSlides = chunkArray(items, 1); // chaque slide contient 1 item pour mobile
  const [current, setCurrent] = useState(0);
  const [mobileCurrent, setMobileCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevMobileSlide = () => {
    setMobileCurrent((prev) => (prev === 0 ? mobileSlides.length - 1 : prev - 1));
  };

  const nextMobileSlide = () => {
    setMobileCurrent((prev) => (prev === mobileSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="md:py-12 py-8 md:px-4">
      <div className="max-w-5xl mx-auto text-start px-4 md:px-0">
        <h2 className="text-2xl font-bold font-neue-plak">Nos réussites clients</h2>
        <p className="text-gray-600 mt-2 font-neue-plak-normal">
          De l'idée à l'impact. Des résultats concrets.
        </p>
      </div>

      {/* Version Desktop - 3 cartes par slide */}
      <div className="hidden md:relative md:mt-10 md:max-w-7xl md:mx-auto md:flex md:items-center font-neue-plak-normal">
        {/* Bouton gauche Desktop */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-gray-300 rounded-full p-2 hover:bg-gray-400"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Slides Desktop */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((group, slideIndex) => (
              <div
                key={slideIndex}
                className="md:w-full flex justify-center 
                md:gap-6 flex-shrink-0 py-10"
              >
                {group.map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-white
                    rounded-2xl shadow md:p-6 p-4
                    md:w-80 flex flex-col justify-between items-start"
                  >
                    {/* Image en arrière-plan */}
                    <div className="absolute inset-0 -z-10 -translate-x-[15px] -translate-y-[15px] rounded-2xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>

                    <h3 className="text-xl font-bold mb-3 font-neue-plak">{item.title}</h3>
                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold">Défi :</span> {item.defi}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold">Solution :</span>{" "}
                      {item.solution}
                    </p>
                    <p className="text-gray-700 mb-4">
                      <span className="font-semibold">Impact :</span>{" "}
                      {item.impact}
                    </p>
                    <button className="border p-2 border-black rounded-lg">
                      {item.buttonText}
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bouton droite Desktop */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-gray-300 rounded-full p-2 hover:bg-gray-400"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Version Mobile - 1 carte par slide */}
      <div className="md:hidden mt-8 px-4">
        <div className="relative">
          {/* Slides Mobile */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${mobileCurrent * 100}%)` }}
            >
              {mobileSlides.map((group, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 py-6"
                >
                  {group.map((item, index) => (
                    <div
                      key={index}
                      className="relative bg-white
                      rounded-2xl shadow p-6 mx-auto"
                      style={{ maxWidth: '320px' }}
                    >
                      {/* Image en arrière-plan */}
                      <div className="absolute inset-0 -z-10 -translate-x-[10px] -translate-y-[10px] rounded-2xl overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover opacity-80"
                        />
                      </div>

                      <h3 className="text-lg font-bold mb-3 font-neue-plak">{item.title}</h3>
                      <p className="text-gray-700 mb-2 text-sm">
                        <span className="font-semibold">Défi :</span> {item.defi}
                      </p>
                      <p className="text-gray-700 mb-2 text-sm">
                        <span className="font-semibold">Solution :</span>{" "}
                        {item.solution}
                      </p>
                      <p className="text-gray-700 mb-4 text-sm">
                        <span className="font-semibold">Impact :</span>{" "}
                        {item.impact}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Mobile */}
          <div className="flex justify-center items-center gap-4 mt-6">
            {/* Bouton gauche Mobile */}
            <button
              onClick={prevMobileSlide}
              className="bg-gray-300 rounded-full p-2 hover:bg-gray-400"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Indicateurs de slide */}
            <div className="flex gap-2">
              {mobileSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setMobileCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === mobileCurrent ? "bg-[#00929E]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Bouton droite Mobile */}
            <button
              onClick={nextMobileSlide}
              className="bg-gray-300 rounded-full p-2 hover:bg-gray-400"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
