import React from 'react';
import analyseROI from "../assets/images/graphique-en-ligne.gif"
import chemin from "../assets/images/chemin.gif"
import ordinateur from "../assets/images/ordinateur.gif"
import pirate from "../assets/images/pirate.gif"
import supportTechnique from "../assets/images/support-technique.gif"

export interface EtapeProcessus {
  id: number;
  titre: string;
  description: string;
  icone: React.ReactNode;
}

const CarteEtape: React.FC<{ etape: EtapeProcessus; estDerniere: boolean; pos: boolean }> = ({ etape, estDerniere, pos }) => (
  <div className="relative">
    <div className={
      pos?
      "ml-80 bg-white rounded-l-[150px] rounded-r-[25px] py-4 px-6 border border-gray-300":
      "mr-80 bg-white rounded-r-[150px] rounded-l-[25px] py-4 px-6 border border-gray-300"
      }>
      <div className="flex items-start justify-center gap-6">
        {pos?
          <div className="flex-shrink-0 h-full">
            <div className="h-full rounded-full bg-teal-50 flex items-center justify-center">
              {etape.icone}
            </div>
          </div>
          :null}
        <div className='max-w-[450px]'>
          <h3 className="text-xl text-gray-900 font-neue-plak">{etape.titre}</h3>
          <p className="text-gray-600 leading-relaxed font-neue-plak-thin text-xs">{etape.description}</p>
        </div>
        {!pos?
          <div className="flex-shrink-0 h-full">
            <div className="rounded-full bg-teal-50 flex items-center justify-center">
              {etape.icone}
            </div>
          </div>:null}
      </div>
    </div>
    
    {!estDerniere && (
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    )}
  </div>
);


export const ProcessusSection = () => {

  const className = "h-16 w-auto";
  const etapesProcessus: EtapeProcessus[] = [
      {
        id: 1,
        titre: "Repérage des processus",
        description: "Analyser le flux de travail actuel de bout en bout, en identifiant toutes les tâches, les décisions, les applications utilisées et les personnes impliquées. Un processus idéal est répétitif, basé sur des règles claires, stable et à volume élevé. Cette phase permet de définir clairement le périmètre du projet et d'estimer le potentiel de gain, posant ainsi les bases solides pour les étapes suivantes.",
        icone: (
          <img className={className} src={chemin} alt="" />
        )
      },
      {
        id: 2,
        titre: "Analyse du ROI",
        description: "Évaluer la viabilité économique en comparant les coûts de développement (ressources, licences) aux bénéfices attendus (gain de temps, réduction d'erreurs). Ce calcul permet de prioriser les projets et de justifier l'investissement par un retour sur investissement mesurable. Des objectifs de performance mesurables pour le projet.",
        icone: (
          <img className={className} src={analyseROI} alt="" />
        )
      },
      {
        id: 3,
        titre: "Prototype agile",
        description: "Développer rapidement un automate de base fonctionnel pour valider le concept auprès des utilisateurs. Cette approche itérative, centrée sur le feedback, permet d'ajuster la solution en temps réel et de s'assurer qu'elle répond parfaitement aux besoins métier avant le développement complet.",
        icone: (
          <img className={className} src={ordinateur} alt="" />
        )
      },
      {
        id: 4,
        titre: "Implémentation",
        description: "Finaliser le développement du robot en gérant tous les scénarios, y compris les exceptions. Des tests rigoureux (intégration, performance, acceptation utilisateur) sont menés pour garantir une solution robuste, sécurisée et prête pour un déploiement en production sans risque.",
        icone: (
          <img className={className} src={pirate} alt="" />
        )
      },
      {
        id: 5,
        titre: "Déploiement et support",
        description: "Mettre l'automate en service de manière contrôlée. Assurer ensuite son monitoring continu, son maintien en condition opérationnelle et son évolution face aux changements du processus. Le support garantit la réalisation des bénéfices sur le long terme.",
        icone: (
          <img className={className} src={supportTechnique} alt="" />
        )
      }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {etapesProcessus.map((etape, index) => (
          <CarteEtape 
            key={etape.id} 
            etape={etape} 
            estDerniere={index === etapesProcessus.length - 1}
            pos={etape.id%2==0}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessusSection;
