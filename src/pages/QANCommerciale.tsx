import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import {QuiAidonsNous} from "@/pages/interface/QuiAidonsNous";

const QANCommerciale = () => {
    const heroText:HeroText = {
        title: "Direction Commerciale",
        description: "Transformez vos leads en chiffre d’affaires avec l’IA",
    };

    const solutionsCards:SolutionCardProps[] = [
        {
                icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.9497 15.5069C29.6523 12.083 28.0443 8.90609 25.4612 6.63912C22.8781 4.37214 19.5194 3.19016 16.0858 3.3398C12.6522 3.48944 9.40908 4.95914 7.03297 7.44225C4.65687 9.92536 3.33136 13.2301 3.33301 16.6669C3.33301 24.4836 11.478 32.6036 15.0363 35.7802" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.6296 27.7101C36.2936 27.0462 36.6666 26.1457 36.6666 25.2068C36.6666 24.2678 36.2936 23.3673 35.6296 22.7034C34.9657 22.0395 34.0652 21.6665 33.1263 21.6665C32.1874 21.6665 31.2869 22.0395 30.623 22.7034L23.9396 29.3901C23.5434 29.7861 23.2533 30.2756 23.0963 30.8134L21.7013 35.5968C21.6595 35.7402 21.657 35.8922 21.694 36.0369C21.7311 36.1816 21.8064 36.3137 21.912 36.4193C22.0177 36.525 22.1498 36.6003 22.2945 36.6373C22.4392 36.6744 22.5912 36.6719 22.7346 36.6301L27.518 35.2351C28.0557 35.0781 28.5453 34.788 28.9413 34.3918L35.6296 27.7101Z" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.667 21.6665C19.4284 21.6665 21.667 19.4279 21.667 16.6665C21.667 13.9051 19.4284 11.6665 16.667 11.6665C13.9056 11.6665 11.667 13.9051 11.667 16.6665C11.667 19.4279 13.9056 21.6665 16.667 21.6665Z" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>,
        title: "CRM Augmenté",
        items: [
            "Intégration Salesforce/ERP",
            "Enrichissement automatique des leads (IA)",
            "Scoring prédictif",
        ],
        badge: "+30% de taux de conversion",
        },
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.6668 12.8335C36.6668 11.8335 36.0002 10.8335 35.3335 10.3335L24.8335 3.8335C24.4017 3.58804 23.9135 3.45898 23.4168 3.45898C22.9201 3.45898 22.432 3.58804 22.0002 3.8335L4.8335 13.8335C4.00016 14.1668 3.3335 15.1668 3.3335 16.1668V27.1668C3.3335 28.0002 4.00016 29.1668 4.66683 29.6668L15.1668 36.1668C15.5986 36.4123 16.0868 36.5413 16.5835 36.5413C17.0802 36.5413 17.5684 36.4123 18.0002 36.1668L35.1668 26.1668C36.0002 25.6668 36.6668 24.5002 36.6668 23.6668V12.8335Z" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.6667 36.4998V23.3332L3.5 15.1665" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.6665 23.3335L36.4998 11.8335" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.3335 33V19.5" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30 29.1665V15.6665" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Commande Zero erreur",
        items: [
            "Portail B2B digitalisé",
            "Validation automatique selon règles commerciales",
            "Facturation et relance automatisées",
        ],
        badge: "-70% d’erreurs et retards",
        },
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.3332 31.6668C27.8911 31.6668 27.4672 31.4912 27.1547 31.1787C26.8421 30.8661 26.6665 30.4422 26.6665 30.0002V26.6668C26.6665 25.7828 27.0177 24.9349 27.6428 24.3098C28.2679 23.6847 29.1158 23.3335 29.9998 23.3335H33.3332C34.2172 23.3335 35.0651 23.6847 35.6902 24.3098C36.3153 24.9349 36.6665 25.7828 36.6665 26.6668V30.0002C36.6665 30.4422 36.4909 30.8661 36.1783 31.1787C35.8658 31.4912 35.4419 31.6668 34.9998 31.6668H28.3332Z" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.3335 34.9998V31.6665" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.6668 23.3333V10.8333C31.6668 9.28624 31.0523 7.80251 29.9583 6.70854C28.8643 5.61458 27.3806 5 25.8335 5C24.2864 5 22.8027 5.61458 21.7087 6.70854C20.6147 7.80251 20.0002 9.28624 20.0002 10.8333V29.1667C20.0002 30.7138 19.3856 32.1975 18.2916 33.2915C17.1977 34.3854 15.7139 35 14.1668 35C12.6197 35 11.136 34.3854 10.042 33.2915C8.94808 32.1975 8.3335 30.7138 8.3335 29.1667V16.6667" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35 34.9998V31.6665" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 8.33333V5" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66683 16.6668C5.78277 16.6668 4.93493 16.3156 4.30981 15.6905C3.68469 15.0654 3.3335 14.2176 3.3335 13.3335V10.0002C3.3335 9.55814 3.50909 9.13421 3.82165 8.82165C4.13421 8.50909 4.55814 8.3335 5.00016 8.3335H11.6668C12.1089 8.3335 12.5328 8.50909 12.8453 8.82165C13.1579 9.13421 13.3335 9.55814 13.3335 10.0002V13.3335C13.3335 14.2176 12.9823 15.0654 12.3572 15.6905C11.7321 16.3156 10.8842 16.6668 10.0002 16.6668H6.66683Z" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6665 8.33333V5" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Pilotage Commercial en direct",
        items: [
            "Tableaux de bord multicanal",
            "IA pour prévisions de ventes",
            "Alertes sur opportunités prioritaires",
        ],
        badge: "Meilleure allocation des ressources",
        },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client D. Commerciale",
      quote:
        "Avec SENYONE, nos commerciaux passent moins de temps à saisir et plus de temps à vendre.",
      author: "Directeur Commercial",
      role: "Responsable Production",
      company: "Groupe Agroalimentaire",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Prospection chronophage et peu qualifiée",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Saisie manuelle des commandes → erreurs et retards",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Suivi insuffisant des performances par canal",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Difficulté à prévoir les ventes et gérer les stocks associés",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Pression concurrentielle accrue",
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

export default QANCommerciale;