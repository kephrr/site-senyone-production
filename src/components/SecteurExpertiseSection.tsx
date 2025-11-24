import { Carousel, Slide } from "./ui/carousel-full-width";
import marketing from "@/assets/images/marketing.jpg";
import ventes from "@/assets/images/ventes.jpg";


const slides: Slide[] = [
  {
    id:1,
    title: "Service Financier",
    list: [
      "Banques : automatisation du back-office, conformité réglementaire",
      "Assurances : traitements des sinistres, souscription automatisée",
      "Microfinance : Gestion d’éligibilité au crédit, gestion des risques",
    ],
    image: marketing,
    buttonText: "En savoir plus",
    buttonLink: "#",
    badge: "30% de notre activité"
  },
  {
    id:2,
    title: "Distribution & Commerce ",
    list: [
      "Distribution : gestion de stock, tarification dynamique",
      "Grossistes : automatisation des commandes, facturation",
      "E-commerce : personnalisation, logistique",
    ],
    image: ventes,
    buttonText: "Découvrir",
    buttonLink: "#",
    badge: "25% de notre activité"
  },
  {
    id:3,
    title: "Industrie & Production ",
    list: [
      "Agroalimentaire : traçabilité, contrôle qualité",
      "Textile : planning de production, Suivi de la Supply Chain",
      "Chimie : maintenance prédictive, sécurité",
    ],
    image: ventes,
    buttonText: "Découvrir",
    buttonLink: "#",
    badge: "20% de notre activité"
  },
  {
    id:4,
    title: "Services & Conseil",
    list: [
      "Cabinets comptables : automatisation des saisies, Eloration du Reporting",
      "Études juridiques : gestion documentaire et base de connaissance",
      "Consulting : automatisations administratives, Gestion de la Relation Client",
    ],
    image: ventes,
    buttonText: "En savoir plus",
    buttonLink: "#",
    badge: "25% de notre activité"
  }
];

export function SecteurExpertiseSection() {
  return (
    <section className="">
        <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto text-start mb-10 flex flex-col">
          <h2 className="text-xl md:text-3xl font-neue-plak font-bold text-gray-900 mb-10">
          Secteur d'expertise
            </h2>
        </div>
      <Carousel slides={slides} height="h-[600px]" colorType={false}  />
    </section>
  );
}