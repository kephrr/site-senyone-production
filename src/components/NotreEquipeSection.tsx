import { NotreEquipeCard } from './NotreEquipeCard';
import { Target, BarChart2, Users as TeamIcon } from 'lucide-react';
import pattern from '@/assets/images/pattern.png';

export const NotreEquipeSection = () => {
  const missions = [
    {
      icon: <Target className='w-10 h-10 text-white'/>,
      title: "Pôle Conseil & Stratégie",
      description: "Consultants seniors en transformation digitale \nExpertise sectorielle : Finance, Supply Chain, Ressources Humaines, Expérience Client, Distribution, Industrie, etc. \n40+ années d'expérience cumulée en Afrique",
      color: "bg-purple-600"
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-[#00929E]" />,
      title: "Pôle Technique & Développement",
      description: "5 développeurs expérimentés & certifiés UiPath\n1 Product Owner ayant une expertise avérée dans les projets SI et IA\n2 Data Scientists modélisation et entraînements IA\n 1 architecte technique expert (serveurs, BDD, etc.)\nDéveloppeurs Data\nDéveloppeurs Automation certifiés sur Microsoft Power Platform.\nDéveloppeurs Automation maîtrisant divers outils comme N8N, Make, etc.",
      color: "bg-indigo-600"
    },
    {
      icon: <TeamIcon className="w-10 h-10 text-white" />,
      title: "Pôle Accompagnement & Formation",
      description: "Experts en conduite du changement\nFormateurs certifiés sur les outils d'automatisation\nSpécialistes de l'adoption utilisateur",
      color: "bg-blue-600"
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
          background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 40%, #00919e67 100%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-4">
          <h2 className="text-xl md:text-3xl font-neue-plak font-bold text-gray-900 mb-4">Notre Equipe</h2>
          <p>Expertise multidisciplinaire au service de votre transformation</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {missions.map((mission, index) => (
            <NotreEquipeCard
              key={index}
              icon={mission.icon}
              title={mission.title}
              description={mission.description}
              color={mission.color}
              variant={index % 2 !== 0 ? 'gradient' : 'white'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
