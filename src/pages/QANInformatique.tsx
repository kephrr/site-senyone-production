import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import {QuiAidonsNous} from "@/pages/interface/QuiAidonsNous";

const QANInformatique = () => {
    const heroText:HeroText = {
        title: "Direction Informatique",
        description: "Réduisez vos tickets, augmentez vos performances",
    };

    const solutionsCards:SolutionCardProps[] = [
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.8418 32.55L25.3801 31.9133" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.3801 28.0867L23.8418 27.4484" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.0866 25.38L27.4482 23.8417" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.0866 34.62L27.4482 36.16" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.9131 25.38L32.5514 23.8417" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.5498 36.16L31.9131 34.62" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33301 35C3.3332 32.9016 3.82866 30.8328 4.7791 28.962C5.72954 27.0912 7.10812 25.4712 8.80271 24.2336C10.4973 22.996 12.4601 22.1759 14.5314 21.8399C16.6027 21.5039 18.7241 21.6615 20.723 22.3" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.6201 28.0867L36.1601 27.4484" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.6201 31.9133L36.1601 32.5517" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.6663 21.6667C21.2687 21.6667 24.9997 17.9357 24.9997 13.3333C24.9997 8.73096 21.2687 5 16.6663 5C12.064 5 8.33301 8.73096 8.33301 13.3333C8.33301 17.9357 12.064 21.6667 16.6663 21.6667Z" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30 35C32.7614 35 35 32.7614 35 30C35 27.2386 32.7614 25 30 25C27.2386 25 25 27.2386 25 30C25 32.7614 27.2386 35 30 35Z" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Support IT automatisé",
        items: [
            "Automatisation du cycle de vie des contrats",
            "Réduction des délais de résolution "
        ],
        badge: "-60% de charge helodesk",
        },
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 10V30C25 30.9889 25.2932 31.9556 25.8427 32.7779C26.3921 33.6001 27.173 34.241 28.0866 34.6194C29.0002 34.9978 30.0055 35.0969 30.9755 34.9039C31.9454 34.711 32.8363 34.2348 33.5355 33.5355C34.2348 32.8363 34.711 31.9454 34.9039 30.9755C35.0969 30.0055 34.9978 29.0002 34.6194 28.0866C34.241 27.173 33.6001 26.3921 32.7779 25.8427C31.9556 25.2932 30.9889 25 30 25H10C9.0111 25 8.0444 25.2932 7.22215 25.8427C6.39991 26.3921 5.75904 27.173 5.3806 28.0866C5.00217 29.0002 4.90315 30.0055 5.09608 30.9755C5.289 31.9454 5.76521 32.8363 6.46447 33.5355C7.16373 34.2348 8.05465 34.711 9.02455 34.9039C9.99446 35.0969 10.9998 34.9978 11.9134 34.6194C12.827 34.241 13.6079 33.6001 14.1573 32.7779C14.7068 31.9556 15 30.9889 15 30V10C15 9.0111 14.7068 8.0444 14.1573 7.22215C13.6079 6.39991 12.827 5.75904 11.9134 5.3806C10.9998 5.00217 9.99446 4.90315 9.02455 5.09608C8.05465 5.289 7.16373 5.76521 6.46447 6.46447C5.76521 7.16373 5.289 8.05465 5.09608 9.02455C4.90315 9.99446 5.00217 10.9998 5.3806 11.9134C5.75904 12.827 6.39991 13.6079 7.22215 14.1573C8.0444 14.7068 9.0111 15 10 15H30C30.9889 15 31.9556 14.7068 32.7779 14.1573C33.6001 13.6079 34.241 12.827 34.6194 11.9134C34.9978 10.9998 35.0969 9.99446 34.9039 9.02455C34.711 8.05465 34.2348 7.16373 33.5355 6.46447C32.8363 5.76521 31.9454 5.289 30.9755 5.09608C30.0055 4.90315 29.0002 5.00217 28.0866 5.3806C27.173 5.75904 26.3921 6.39991 25.8427 7.22215C25.2932 8.0444 25 9.0111 25 10Z" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Environnement intégré",
        items: [
            "Connecteurs ERP/CRM/Cloud",
            "API & middleware automatisés",
            "Gouvernance des données",
        ],
        badge: "Système unifié et cohérent",
        },
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.1436 25C25.2168 29.3832 23.0898 33.4224 20.0002 36.6667C15.7206 32.1731 13.3336 26.2055 13.3336 20C13.3336 13.7946 15.7206 7.82696 20.0002 3.33337C16.92 3.33418 13.9003 4.18856 11.2762 5.80168C8.65216 7.41479 6.52647 9.72353 5.13512 12.4716C3.74376 15.2197 3.14117 18.2996 3.39425 21.3694C3.64732 24.4392 4.74615 27.3788 6.56875 29.8619C8.39136 32.345 10.8664 34.2745 13.7192 35.4361C16.572 36.5977 19.6909 36.946 22.7297 36.4424C25.7685 35.9388 28.6082 34.6029 30.9337 32.583C33.2592 30.5632 34.9795 27.9384 35.9036 25" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33301 20H17.4997" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.3337 10V6.66671C33.3337 5.78265 32.9825 4.93481 32.3573 4.30968C31.7322 3.68456 30.8844 3.33337 30.0003 3.33337C29.1163 3.33337 28.2684 3.68456 27.6433 4.30968C27.0182 4.93481 26.667 5.78265 26.667 6.66671V10" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.9997 10H24.9997C24.0792 10 23.333 10.7462 23.333 11.6667V16.6667C23.333 17.5871 24.0792 18.3333 24.9997 18.3333H34.9997C35.9201 18.3333 36.6663 17.5871 36.6663 16.6667V11.6667C36.6663 10.7462 35.9201 10 34.9997 10Z" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Sécurité et surveillance proactive",
        items: [
            "Détection d’anomalies via IA ",
            "Alertes temps réel sur menaces",
            "Reporting cybersécurité",
        ],
        badge: "Incidents divisés par 3",
        },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client IT",
      quote:
        "Nous avons automatisé 70% des tickets de support et recentré l’IT sur l’innovation.",
      author: "DSI",
      role: "DSI",
      company: "Société de Services",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Trop de tickets répétitifs et chronophages",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Systèmes hétérogènes peu intégrés",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Manque de visibilité sur les performances IT",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Projets retardés par les tâches de support",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Cybersécurité sous pression constante",
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

export default QANInformatique;