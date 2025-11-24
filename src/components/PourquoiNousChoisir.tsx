import { ValueCard } from './ValueCard';
import { BadgeCheck } from 'lucide-react';
import pattern from '@/assets/images/pattern.png';

export const PourquoiNousChoisir = () => {
  const values = [
    {
      title: "Track Record Prouvé ",
      description: "Plus de 50 projets réussis avec des gains mesurables et documentés",
    },
    {
      title: "Time-to-Market Réduit",
      description: "Réalisation de POC en 2 semaines, déploiement MVP en 6-8 semaines maximum",
    },
    {
      title: "Expertise Sectorielle ",
      description: "Connaissance approfondie des enjeux et réglementations locales",
    },
    {
      title: "Accompagnement 360° ",
      description: "De l'audit initial au support post-déploiement, nous restons à vos côtés",
    },
    {
      title: "Innovation Continue ",
      description: "Veille technologique permanente et intégration des dernières innovations IA",
    },
    {
      title: "ROI Garanti",
      description: "Engagement sur les résultats avec métriques de performance transparentes",
    }
  ];

  return (
    <section
      className="py-16 rounded-b-[50px] relative overflow-hidden"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 40%, #e4484871 100%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-4">
          <h2 className="text-xl md:text-3xl font-neue-plak font-bold text-gray-900 mb-6">Nos Valeurs</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {values.map((value, index) => (
            <div 
              className='relative overflow-hidden rounded-xl px-4 py-4 min-h-36 transition-all duration-300 hover:shadow-lg ${
                 bg-white text-[#383838] border-[#BDBDBD] border-[1px]'
            >
              <div className="relative z-10 flex gap-4">
                <div className="mb-6">
                  <div 
                    className="rounded-xl flex items-center justify-center bg--[#ED6E3D]"
                  >
                    <BadgeCheck className='w-10 h-10 text-[#00929E]'/>
                  </div>
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-3 font-neue-plak ${
                    'text-[#383838]'
                  }`}>
                    {value.title}
                  </h3>
                  <p className="text-xl  leading-relaxed text-[#383838]">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
