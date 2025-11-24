import bg from "@/assets/images/bg.svg"

interface OfferCardProps {
  title: string;
  description: string;
  accentColor: string;
}

function OfferCard({ title, description, accentColor }: OfferCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/30">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-blue-100 mb-4">{description}</p>
      <div 
        className="w-12 h-1 mx-auto"
        style={{ backgroundColor: accentColor }}
      ></div>
    </div>
  );
}

export default function TransformationCTA() {
  const offers = [
    {
      title: "PME",
      description: "Diagnostic Gratuit 30 min",
      accentColor: "#60a5fa" // blue-400
    },
    {
      title: "Grandes Entreprises",
      description: "Audit de Processus Offert",
      accentColor: "#34d399" // green-400
    },
    {
      title: "Secteur Public",
      description: "Démo Conforme OHADA",
      accentColor: "#c084fc" // purple-400
    }
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden rounded-t-[50px] font-neue-plak-normal">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${bg})`
        }}
      />
      
        <div className="absolute inset-0 bg-black z-10 mix-blend-color" />

      {/* Overlay gradient par-dessus l'image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/5 to-[#00929E]/90 z-20" />
      
      {/* Contenu */}
      <div className="relative z-20 max-w-5xl mx-auto text-start">
        {/* Titre principal */}
        <h1 className="text-4xl md:text-2xl mb-6 text-white ont-neue-plak-normal">
          Prêt à transformer ?
        </h1>
        
        {/* Sous-titre */}
        <p className="text-xl md:text-5xl text-white font-neue-plak mb-6">
          Votre transformation commence par une conversation stratégique.
        </p>
        
        {/* Description */}
        
        <p className="text-lg md:text-lg text-blue-50 leading-relaxed mb-6">
            Optimisez votre conformité et boostez votre productivité grâce à nos solutions sur-mesure. 
            Quel que soit votre secteur, nous avons une offre dédiée pour évaluer vos besoins et lancer 
            votre mutation en toute sérénité.
        </p>
        
        
        {/* Offres par secteur */}
        <ul className="flex flex-col mb-12">
          {offers.map((offer, index) => (
            <li key={index} className="text-lg text-blue-50 leading-relaxed">
              - {offer.description}
            </li>
          ))}
        </ul>
        
        {/* Séparateur */}
        <div className="border-t border-white/20 my-8"></div>
        
        {/* Bouton d'action */}
        <button className="bg-white text-blue-900 px-8 py-2 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          Choisir mon parcours
        </button>
      </div>
    </section>
  );
}