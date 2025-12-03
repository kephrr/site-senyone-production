import { useState } from "react";
import { motion } from "framer-motion";
import  heroBg  from "@/assets/hero-bg.jpg"
import  microsoftAzure  from "@/assets/microsoft-azure.png"
import  uiPath  from "@/assets/uipath.png"
import  python  from "@/assets/python.png"
import { Button } from "@/components/ui/button";
import {Map, PenTool, FolderArchive, Cpu, GitPullRequestArrow, ClipboardPlus, Upload, ListRestart, Landmark, Keyboard, ImageUpscale, MessagesSquare} from "lucide-react";

export default function Tabs() {
  const cardsTabOne = [
    {
        id: 1, 
        icon: 
        <svg width="35" height="35" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.5 6.25C43.5629 6.2489 49.4953 8.0115 54.574 11.323C59.6527 14.6345 63.6584 19.3518 66.103 24.9001C68.5476 30.4484 69.3253 36.588 68.3416 42.5706C67.3578 48.5532 64.655 54.1204 60.5625 58.5938" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M50 37.5L37.5 25L25 37.5" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M37.5 50V25" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.8125 27.7344C6.81672 30.7614 6.28979 33.923 6.25 37.1094" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.84375 50C10.5984 54.037 13.1862 57.6577 16.4375 60.625" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.4873 16.3593C15.3593 15.41 16.2892 14.5156 17.2717 13.6812" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.0127 66.9375C34.8055 69.7137 43.3811 69.2866 50.8596 65.75" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>, 
        text: "Entre 50% et 80% de réduction d’utilisation de papier"
    },{
        id: 2, 
        icon: 
        <svg width="35" height="35" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.5 6.25C43.5629 6.2489 49.4953 8.0115 54.574 11.323C59.6527 14.6345 63.6584 19.3518 66.103 24.9001C68.5476 30.4484 69.3253 36.588 68.3416 42.5706C67.3578 48.5532 64.655 54.1204 60.5625 58.5938" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M50 37.5L37.5 25L25 37.5" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M37.5 50V25" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.8125 27.7344C6.81672 30.7614 6.28979 33.923 6.25 37.1094" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.84375 50C10.5984 54.037 13.1862 57.6577 16.4375 60.625" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.4873 16.3593C15.3593 15.41 16.2892 14.5156 17.2717 13.6812" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.0127 66.9375C34.8055 69.7137 43.3811 69.2866 50.8596 65.75" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>, 
        text: "Processus 5x plus rapide"
    },

   

    {
        id: 3, 
        icon: 
        <svg width="35" height="35" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25 37.5H15.625" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M59.375 37.5H68.75" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.5 6.25V15.625" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.5 59.375V68.75" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.5 59.375C49.5812 59.375 59.375 49.5812 59.375 37.5C59.375 25.4188 49.5812 15.625 37.5 15.625C25.4188 15.625 15.625 25.4188 15.625 37.5C15.625 49.5812 25.4188 59.375 37.5 59.375Z" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.5 46.875C42.6777 46.875 46.875 42.6777 46.875 37.5C46.875 32.3223 42.6777 28.125 37.5 28.125C32.3223 28.125 28.125 32.3223 28.125 37.5C28.125 42.6777 32.3223 46.875 37.5 46.875Z" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>, 
        text: "100% de traçabilité"
    },

    {
        id: 4, 
        icon: 
        <svg width="35" height="35" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50 50L59.375 25L68.75 50C66.0312 52.0312 62.75 53.125 59.375 53.125C56 53.125 52.7188 52.0312 50 50Z" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.25 50L15.625 25L25 50C22.2812 52.0312 19 53.125 15.625 53.125C12.25 53.125 8.96875 52.0312 6.25 50Z" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.875 65.625H53.125" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.5 9.375V65.625" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.375 21.875H15.625C21.875 21.875 31.25 18.75 37.5 15.625C43.75 18.75 53.125 21.875 59.375 21.875H65.625" stroke="#009E7B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>, 
        text: "Conformité garantie"
}

  ]

  const cardsTabTwo = [
    {
        id: 1, 
        icon: <img className="h-8 w-auto" src={uiPath} alt="" />, 
        text: "UiPath "
    },
    {
        id: 2, 
        icon: <img className="h-8 w-auto" src={microsoftAzure} alt="" />,  
        text: "Microsoft Power Automate"
    },
    {
        id: 3, 
        icon: <img className="h-8 w-auto" src={python} alt="" />, 
        text: "Solutions sur-mesure Python"
    }
  ]

  const tabs = [
    { id: 1, label: "Digitalisation zero paper", 
    content: (
    <div>
        <div className="text-center">
          <h2 className="text-sm font-neue-plak-normal text-gray-900 py-6">Du papier au digital en 4 semaines</h2>
        </div>
        <TabOne />
        <div className="text-center">
          <h2 className="text-xl md:text-3xl font-neue-plak text-gray-900 py-12">ROI Type</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
            {cardsTabOne.map((card, id)=>{
                return(
                    <div className="flex gap-2 border rounded-lg p-4">
                        {card.icon}
                        <p className="text-gray-700"> {card.text} </p>
                    </div>
                )
            })}
        </div>
    </div> ) },
    { id: 2, label: "Automatisation RPA", content: (
        <div>
            <div className="text-center">
            <h2 className="text-sm font-neue-plak-normal text-gray-900 py-6">Vos premiers robots en production en 14 jours</h2>
            </div>
            <TabTwo />
            <div className="text-center">
                <h2 className="text-xl md:text-3xl font-neue-plak text-gray-900 py-12">Plateformes</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
            {cardsTabTwo.map((card, id)=>{
                return(
                    <div className="flex gap-2 border rounded-lg p-4">
                        {card.icon}
                        <p className="text-gray-700"> {card.text} </p>
                    </div>
                )
            })}
        </div>
        </div>) },
    { id: 3, label: "Intelligence artificielle", content: (
        <div>
            <div className="text-center">
            <h2 className="text-sm font-neue-plak-normal text-gray-900 py-6">Transformez vos données en décisions</h2>
            </div>
            <TabThree />
        </div>) },
  ];

  const [active, setActive] = useState(1);

  return (
    <div className="w-full max-w-5xl mx-auto md:p-6">
      {/* Tab Buttons */}
      <div
      className="flex bg-gray-200 md:p-2 rounded-sm md:justify-between max-w-xl mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2 md:rounded-sm text-xs md:text-sm font-medium transition-all
            ${active === tab.id ? "bg-[#00929E] text-white border-cyan-600" : " text-gray-700 border-gray-300"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Content */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="p-6 text-white">
        {
        tabs.find((t) => t.id === active)?.content
        }
      </motion.div>
    </div>
  );
}

function TabOne() {
  return (
    <div className="rounded-2xl shadow space-y-6 bg-repeat-x bg-cover" 
    style={{ backgroundImage: `url(${heroBg})`}}>
    <h2 className="text-sm md:text-lg font-semibold p-6">Processus en 5 etapes</h2>


{/* Processus en 5 étapes */}
<div className="space-y-6">
    <div className="flex items-start justify-between w-full overflow-x-auto pb-4">
        {[
            { num: 1, label: "Audit : Cartographie de vos flux papier (4 ateliers)" },
            { num: 2, label: "Design : Conception des workflows numériques intégrés à vos outils (5 jours)" },
            { num: 3, label: "Développement : Mise en œuvre (x jours)" },
            { num: 4, label: "Déploiement : Migration progressive (x jours)" },
            { num: 5, label: "Adoption : Formation et accompagnement (continu)" },
        ].map((step, index) => (
        <div key={index} className="flex flex-col items-center 
        text-center md:min-w-[160px] min-w-[100px] px-2">
        <div className="md:w-12 md:h-12 w-8 h-8 rounded-full border-2 border-dashed flex items-center justify-center text-lg font-bold">
        {step.num}
        </div>
            <p className="text-xs md:text-sm mt-2 text-white max-w-[160px]">{step.label}</p>
        </div>
        ))}
    </div>
</div>


{/* Technologies utilisées */}
    <div className="p-6">
        <h3 className="text-sm md:text-xl font-semibold mb-4">Technologies utilisées</h3>
        <ul className="space-y-3 text-white p-4 text-xs md:text-base">
            <li className="flex items-center gap-3"><Map /> Capture intelligente (OCR/ICR)</li>
            <li className="flex items-center gap-3"><PenTool /> Design : Conception des workflows numériques intégrés (5 jours)</li>
            <li className="flex items-center gap-3"><GitPullRequestArrow /> Workflows collaboratifs</li>
            <li className="flex items-center gap-3"><Cpu /> Signature électronique</li>
            <li className="flex items-center gap-3"><FolderArchive />  Archivage légal</li>
        </ul>
    </div>
    
</div>
  );
}

function TabTwo() {
 return (
    <div className="rounded-2xl shadow space-y-6 bg-repeat-x bg-cover" 
    style={{ backgroundImage: `url(${heroBg})`}}>
    <h2 className="text-sm md:text-lg font-semibold p-6">Approche RAPID</h2>


    {/* Processus en 5 étapes */}
    <div className="space-y-6">
        <div className="flex items-start justify-between w-full overflow-x-auto pb-4">
            {[
            { num: "R", label: "Repérage des processus" },
            { num: "A", label: "Analyse du ROI" },
            { num: "P", label: "Prototypage agile" },
            { num: "I", label: "Implémentation" },
            { num: "D", label: "Déploiement & Support" },
            ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center min-w-[160px] px-2">
                <div className="md:w-12 md:h-12 w-8 h-8 rounded-full border-2 border-dashed flex items-center justify-center text-lg font-bold">
                {step.num}
                    </div>
                <p className="text-sm mt-2 text-white max-w-[160px]">{step.label}</p>
            </div>
            ))}
        </div>
    </div>


    {/* Technologies utilisées */}
        <div className="p-6">
            <h3 className="text-sm md:text-xl font-semibold mb-4">Cas d'usage fréquents</h3>
            <ul className="space-y-3 text-white p-4 text-xs md:text-base">
                <li className="flex items-center gap-3"><Keyboard /> Saisie de commandes (2000/jour)</li>
                <li className="flex items-center gap-3"><Landmark /> Rapprochements bancaires (100% auto)</li>
                <li className="flex items-center gap-3"><ListRestart /> Génération de rapports (temps réel)</li>
                <li className="flex items-center gap-3"><Upload /> Relances clients (multi-canal)</li>
                <li className="flex items-center gap-3"><ClipboardPlus /> On-Boarding employés (J+0)</li>
            </ul>
        </div>
        
    </div>
  );
}

function TabThree() {
  return (
    <div className="rounded-2xl shadow space-y-6 bg-repeat-x bg-cover" 
    style={{ backgroundImage: `url(${heroBg})`}}>
    <h2 className="text-sm md:text-lg font-semibold p-6">Traitement documentaire</h2>


    {/* Processus en 5 étapes */}
    <div className="space-y-6">
        <div className="flex items-start justify-between w-full overflow-x-auto pb-4">
            {[
            { num: 1, label: "Extraction des données depuis vos fichiers" },
            { num: 2, label: "Classification automatique" },
            { num: 3, label: "Validation par exceptions" },
            { num: 4, label: "Multi-langues (FR/EN/autre)" }
            ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center min-w-[160px] px-2">
                <div className="md:w-12 md:h-12 w-8 h-8 rounded-full border-2 border-dashed flex items-center justify-center text-lg font-bold">
                {step.num}
                    </div>
                <p className="text-xs md:text-sm mt-2 text-white max-w-[160px]">{step.label}</p>
            </div>
            ))}
        </div>
    </div>


    {/* Technologies utilisées */}
        <div className="p-6">
            <h3 className="text-sm md:text-xl font-semibold mb-4">Cas d'usage fréquents</h3>
            <ul className="space-y-3 text-white p-4 text-xs md:text-base">
                <li className="flex items-center gap-3"><Keyboard /> Support client 24/7</li>
                <li className="flex items-center gap-3"><MessagesSquare /> FAQ intelligente</li>
                <li className="flex items-center gap-3"><ImageUpscale /> Escalade contextuelle</li>
            </ul>
        </div>
        <div className="p-6">
            <Button className="btn-white flex items-center gap-3 min-w-[200px] rounded-full">
                Tester l'IA
        </Button>
        </div>
        
    </div>
  );
}
