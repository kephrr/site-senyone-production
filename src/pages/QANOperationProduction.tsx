import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import {QuiAidonsNous} from "@/pages/interface/QuiAidonsNous";

const QANOperationProduction = () => {
    const heroText:HeroText = {
        title: "Direction des Opérations/Production",
        description: "Du pilotage à la production en temps réel",
    };

    const solutionsCards:SolutionCardProps[] = [
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6499 11.2334L24.8666 16.9667" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.8934 20C30.342 21.5801 28.4913 22.8351 26.4494 23.6919C24.4074 24.5487 22.2153 24.9899 20.0009 24.9899C17.7865 24.9899 15.5943 24.5487 13.5524 23.6919C11.5105 22.8351 9.6598 21.5801 8.1084 20" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.9999 35.0001L31.3999 28.6001" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 35.0001L18.3667 11.2334" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.9998 11.6667C21.8408 11.6667 23.3332 10.1743 23.3332 8.33333C23.3332 6.49238 21.8408 5 19.9998 5C18.1589 5 16.6665 6.49238 16.6665 8.33333C16.6665 10.1743 18.1589 11.6667 19.9998 11.6667Z" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

,
        title: "Production connectée",
        items: [
            "Internet des Objets et capteurs connectés",
            "Collecte automatique des données machine",
            "Alertes en cas de dérive",
        ],
        badge: "-30% d’arrêts non planifiés",
        },
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.51 9.25511C23.9727 9.4863 24.4828 9.60666 25 9.60666C25.5172 9.60666 26.0273 9.4863 26.49 9.25511L32.5883 6.20511C32.8426 6.07804 33.1252 6.01812 33.4092 6.03106C33.6931 6.04399 33.9691 6.12934 34.2108 6.27899C34.4525 6.42865 34.6518 6.63763 34.79 6.88608C34.9281 7.13452 35.0004 7.41417 35 7.69844V28.9718C34.9998 29.2812 34.9135 29.5845 34.7508 29.8477C34.588 30.1108 34.3551 30.3235 34.0783 30.4618L26.49 34.2568C26.0273 34.488 25.5172 34.6083 25 34.6083C24.4828 34.6083 23.9727 34.488 23.51 34.2568L16.49 30.7468C16.0273 30.5156 15.5172 30.3952 15 30.3952C14.4828 30.3952 13.9727 30.5156 13.51 30.7468L7.41167 33.7968C7.15726 33.9239 6.87454 33.9838 6.59043 33.9708C6.30632 33.9578 6.03026 33.8723 5.78853 33.7225C5.5468 33.5726 5.34744 33.3634 5.20942 33.1147C5.07139 32.866 4.9993 32.5862 5.00001 32.3018V11.0301C5.00017 10.7207 5.08648 10.4174 5.24926 10.1542C5.41204 9.89107 5.64487 9.67843 5.92167 9.54011L13.51 5.74511C13.9727 5.51391 14.4828 5.39355 15 5.39355C15.5172 5.39355 16.0273 5.51391 16.49 5.74511L23.51 9.25511Z" stroke="#E44849" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 9.60645V34.6064" stroke="#E44849" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 5.39355V30.3936" stroke="#E44849" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Plannification intelligente",
        items: [
            "Optimisation de la planification",
            "Synchronisation avec la chaine d’approvisionnement",
            "Simulation de scénarios",
        ],
        badge: "Gains de productivité de 15%",
        },
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.3332 21.6666C33.3332 29.9999 27.4998 34.1666 20.5665 36.5833C20.2034 36.7063 19.8091 36.7004 19.4498 36.5666C12.4998 34.1666 6.6665 29.9999 6.6665 21.6666V9.99994C6.6665 9.55791 6.8421 9.13399 7.15466 8.82142C7.46722 8.50886 7.89114 8.33327 8.33317 8.33327C11.6665 8.33327 15.8332 6.33327 18.7332 3.79994C19.0863 3.49827 19.5354 3.33252 19.9998 3.33252C20.4642 3.33252 20.9134 3.49827 21.2665 3.79994C24.1832 6.34994 28.3332 8.33327 31.6665 8.33327C32.1085 8.33327 32.5325 8.50886 32.845 8.82142C33.1576 9.13399 33.3332 9.55791 33.3332 9.99994V21.6666Z" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 19.9998L18.3333 23.3332L25 16.6665" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Qualité garantie",
        items: [
            "Workflows de validation qualité automatisés",
            "Traçabilité complète des lots",
            "Reporting réglementaire automatisé",
        ],
        badge: "Conformité ISO & industrie",
        },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client Production",
      quote:
        "Nous avons gagné en visibilité et réduit drastiquement nos coûts liés aux arrêts machines.",
      author: "Responsable Production",
      role: "Responsable Production",
      company: "Industrie Textile",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Saisie manuelle de données de production",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Retards dans la planification et la logistique",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Manque de visibilité sur les goulots d’étranglement",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Coûts élevés liés aux arrêts de production",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Difficulté à assurer la traçabilité et la qualité",
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

export default QANOperationProduction;