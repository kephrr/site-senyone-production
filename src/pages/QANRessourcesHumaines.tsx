import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import {QuiAidonsNous} from "@/pages/interface/QuiAidonsNous";

const QANRessourcesHumaines = () => {
    const heroText:HeroText = {
        title: "Direction Ressources Humaines",
        description: "De la paperasse aux talents : digitalisez vos RH",
    };

    const solutionsCards:SolutionCardProps[] = [
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.3333 33.3333C34.2173 33.3333 35.0652 32.9821 35.6903 32.357C36.3154 31.7319 36.6666 30.8841 36.6666 30V13.3333C36.6666 12.4493 36.3154 11.6014 35.6903 10.9763C35.0652 10.3512 34.2173 10 33.3333 10H20.1666C19.6091 10.0055 19.0592 9.87102 18.5671 9.60897C18.075 9.34691 17.6565 8.96563 17.3499 8.5L15.9999 6.5C15.6964 6.03912 15.2832 5.6608 14.7974 5.39899C14.3116 5.13719 13.7684 5.00009 13.2166 5H6.66659C5.78253 5 4.93468 5.35119 4.30956 5.97631C3.68444 6.60143 3.33325 7.44928 3.33325 8.33333V30C3.33325 30.8841 3.68444 31.7319 4.30956 32.357C4.93468 32.9821 5.78253 33.3333 6.66659 33.3333H33.3333Z" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Dossier RH Zéro papier",
        items: [
            "Numérisation des dossiers des collaborateurs",
            "Gestion des demandes et génération des documents",
            "Signature électronique des contrats",
            "Accès sécurisé et centralisé"
        ],
        badge: "Gain de 60% de temps administratif",
        },
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.0002 3.3335H15.0002C14.0797 3.3335 13.3335 4.07969 13.3335 5.00016V8.3335C13.3335 9.25397 14.0797 10.0002 15.0002 10.0002H25.0002C25.9206 10.0002 26.6668 9.25397 26.6668 8.3335V5.00016C26.6668 4.07969 25.9206 3.3335 25.0002 3.3335Z" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3332 6.6665H9.99984C9.11578 6.6665 8.26794 7.01769 7.64281 7.64281C7.01769 8.26794 6.6665 9.11578 6.6665 9.99984V33.3332C6.6665 34.2172 7.01769 35.0651 7.64281 35.6902C8.26794 36.3153 9.11578 36.6665 9.99984 36.6665H29.9998C30.8839 36.6665 31.7317 36.3153 32.3569 35.6902C32.982 35.0651 33.3332 34.2172 33.3332 33.3332V29.9998" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.6665 6.6665H29.9998C30.8839 6.6665 31.7317 7.01769 32.3569 7.64281C32.982 8.26794 33.3332 9.11578 33.3332 9.99984V16.6665" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.0002 23.3335H18.3335" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.0002 16.6665L18.3335 23.3332L25.0002 29.9998" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Recrutement & onboarding express",
        items: [
            "Workflows de validation automatisés",
            "Notifications IA aux managers",
            "Portails candidats/employés",
        ],
        badge: "Intégration complète en moins de 48h",
        },
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 23.3335C25.3333 21.6668 26.1667 20.5002 27.5 19.1668C29.1667 17.6668 30 15.5002 30 13.3335C30 10.6813 28.9464 8.13779 27.0711 6.26243C25.1957 4.38706 22.6522 3.3335 20 3.3335C17.3478 3.3335 14.8043 4.38706 12.9289 6.26243C11.0536 8.13779 10 10.6813 10 13.3335C10 15.0002 10.3333 17.0002 12.5 19.1668C13.6667 20.3335 14.6667 21.6668 15 23.3335" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 30H25" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.6665 36.6665H23.3332" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Pilotage social intelligent",
        items: [
            "Tableaux de bords RH temps réel",
            "IA pour prévisions d’absentéisme et besoins en formation",
            "Rapports légaux automatisés",
        ],
        badge: "Conformité et anticipation",
        },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client DRH",
      quote:
        "Nous avons réduit de moitié le temps de traitement administratif et augmenté la satisfaction des collaborateurs dès leur arrivée",
      author: "DRH",
      role: "Responsable Production",
      company: "Banque Ouest-Africaine",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Gestion manuelle et dispersée des dossiers du personnel",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Retards dans les recrutements et l’onboarding",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Suivi inefficace des performances et des formations",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Multiplication des outils et absence de données consolidées",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Conformité au Code du travail et obligations légales chronophages",
      color: "#1F8BFF",
      align: "right",
      visible: true,
      delayClass: "delay-1000",
    },
  ];

    return (
        <QuiAidonsNous heroText={heroText} solutionsCards={solutionsCards} cases={cases} cards={cards} />
    );
};

export default QANRessourcesHumaines;