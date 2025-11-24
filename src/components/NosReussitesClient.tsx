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
  const slides = chunkArray(items, 3); // chaque slide contient 3 items
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className=" py-12 px-4">
      <div className="max-w-5xl mx-auto text-start">
        <h2 className="text-3xl font-bold font-neue-plak">Nos réussites clients</h2>
        <p className="text-gray-600 mt-2 font-neue-plak-normal">
          De l’idée à l’impact. Des résultats concrets.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mt-10 max-w-7xl mx-auto flex items-center font-neue-plak-normal">
        {/* Bouton gauche */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-gray-300 rounded-full p-2 hover:bg-gray-400"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Slides */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((group, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full flex justify-center gap-6 flex-shrink-0 py-10"
              >
                {group.map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-2xl shadow p-6 w-80"
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
                    <button className="border border-gray-400 rounded-md px-4 py-2 text-sm hover:bg-gray-100">
                      {item.buttonText}
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bouton droite */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-gray-300 rounded-full p-2 hover:bg-gray-400"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
