import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import {QuiAidonsNous} from "@/pages/interface/QuiAidonsNous";

const QANJuridique = () => {
    const heroText:HeroText = {
        title: "Direction Juridique",
        description: "De la gestion manuelle à la conformité digitale continue",
    };

    const solutionsCards:SolutionCardProps[] = [
        {
        icon: (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35 20C35 16.0218 33.4196 12.2064 30.6066 9.3934C27.7936 6.58035 23.9782 5 20 5C15.8066 5.01578 11.7816 6.65204 8.76667 9.56667L5 13.3333" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5V13.3333H13.3333" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 20C5 23.9782 6.58035 27.7936 9.3934 30.6066C12.2064 33.4196 16.0218 35 20 35C24.1934 34.9842 28.2184 33.348 31.2333 30.4333L35 26.6667" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.6667 26.6666H35.0001V35" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>),

        title: "Gestion du cycle de vie des contrats",
        items: [
            "•	Automatisation du cycle de vie des contrats",
            "Signatures électroniques certifiées",
            "Alertes d’échéance",
        ],
        badge: "-50% de délai de traitement",
        },
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 35V11.6666" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.6665 20L29.9998 23.3333L36.6665 16.6666" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.6668 10V6.66667C36.6668 6.22464 36.4912 5.80072 36.1787 5.48816C35.8661 5.17559 35.4422 5 35.0002 5H26.6668C24.8987 5 23.203 5.70238 21.9528 6.95262C20.7025 8.20286 20.0002 9.89856 20.0002 11.6667C20.0002 9.89856 19.2978 8.20286 18.0475 6.95262C16.7973 5.70238 15.1016 5 13.3335 5H5.00016C4.55814 5 4.13421 5.17559 3.82165 5.48816C3.50909 5.80072 3.3335 6.22464 3.3335 6.66667V28.3333C3.3335 28.7754 3.50909 29.1993 3.82165 29.5118C4.13421 29.8244 4.55814 30 5.00016 30H15.0002C16.3262 30 17.598 30.5268 18.5357 31.4645C19.4734 32.4021 20.0002 33.6739 20.0002 35C20.0002 33.6739 20.5269 32.4021 21.4646 31.4645C22.4023 30.5268 23.6741 30 25.0002 30H35.0002C35.4422 30 35.8661 29.8244 36.1787 29.5118C36.4912 29.1993 36.6668 28.7754 36.6668 28.3333V26.1667" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Conformité automatisée",
        items: [
            "Archivage numérique sécuris",
            "Contrôles de conformité intégrés (OHADA, RGPD, etc.)",
            "Historique et piste d’audit",
        ],
        badge: "100% conformité en continu",
        },
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.6668 20H32.5335C31.8051 19.9985 31.0963 20.2355 30.5154 20.675C29.9345 21.1144 29.5135 21.732 29.3168 22.4334L25.4002 36.3667C25.3749 36.4533 25.3223 36.5293 25.2502 36.5834C25.178 36.6375 25.0903 36.6667 25.0002 36.6667C24.91 36.6667 24.8223 36.6375 24.7502 36.5834C24.678 36.5293 24.6254 36.4533 24.6002 36.3667L15.4002 3.63337C15.3749 3.54683 15.3223 3.4708 15.2502 3.41671C15.178 3.36261 15.0903 3.33337 15.0002 3.33337C14.91 3.33337 14.8223 3.36261 14.7502 3.41671C14.678 3.4708 14.6254 3.54683 14.6002 3.63337L10.6835 17.5667C10.4876 18.2653 10.0691 18.8809 9.4916 19.3201C8.91407 19.7592 8.20903 19.998 7.4835 20H3.3335" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Pilotage des risques",
        items: [
            "Tableau de bord litiges et contentieux",
            "IA pour analyser clauses & risques juridiques",
            "Reporting automatisé",
        ],
        badge: "Réduction des litiges récurrents",
        },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client Juridique",
      quote:
        "“Nous avons sécurisé l’ensemble de nos contrats et gagné en réactivité sur les négociations.”",
      author: "Directrice Juridique",
      role: "",
      company: "Holding Financière",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Contrats dispersés, difficilement traçables",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Manque de visibilité sur les litiges et échéances",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Délais de validation et de signature",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Risque de non-conformité aux normes OHADA/Locales",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Charges administratives lourdes liées à l’archivage légal",
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

export default QANJuridique;