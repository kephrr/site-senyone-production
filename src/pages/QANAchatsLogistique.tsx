import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import {QuiAidonsNous} from "@/pages/interface/QuiAidonsNous";

const QANAchatsLogistique = () => {
    const heroText:HeroText = {
        title: "Direction Achats & Logistique",
        description: "De la commande à la livraison, sans rupture ni erreur",
    };

    const solutionsCards:SolutionCardProps[] = [
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.9502 15.5066C29.6528 12.0827 28.0448 8.90585 25.4617 6.63887C22.8786 4.37189 19.5198 3.18992 16.0863 3.33956C12.6527 3.4892 9.40957 4.9589 7.03346 7.44201C4.65735 9.92512 3.33185 13.2298 3.3335 16.6666C3.3335 24.4833 11.4785 32.6033 15.0368 35.78" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.6301 27.71C36.294 27.046 36.667 26.1456 36.667 25.2066C36.667 24.2677 36.294 23.3672 35.6301 22.7033C34.9662 22.0394 34.0657 21.6664 33.1268 21.6664C32.1879 21.6664 31.2874 22.0394 30.6235 22.7033L23.9401 29.39C23.5439 29.786 23.2538 30.2755 23.0968 30.8133L21.7018 35.5966C21.66 35.74 21.6575 35.8921 21.6945 36.0368C21.7316 36.1815 21.8069 36.3136 21.9125 36.4192C22.0182 36.5249 22.1503 36.6001 22.295 36.6372C22.4397 36.6743 22.5917 36.6718 22.7351 36.63L27.5185 35.235C28.0562 35.0779 28.5458 34.7879 28.9418 34.3916L35.6301 27.71Z" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.6665 21.6666C19.4279 21.6666 21.6665 19.428 21.6665 16.6666C21.6665 13.9052 19.4279 11.6666 16.6665 11.6666C13.9051 11.6666 11.6665 13.9052 11.6665 16.6666C11.6665 19.428 13.9051 21.6666 16.6665 21.6666Z" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Approvisionnement automatisé",
        items: [
            "Portails fournisseurs digitalisés",
            "Workflows d’approbation intégrés",
            "Classement et suivi automatisés des contrats",
        ],
        badge: "-30% de temps de traitement",
        },
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.3335 30V9.99996C23.3335 9.1159 22.9823 8.26806 22.3572 7.64294C21.7321 7.01782 20.8842 6.66663 20.0002 6.66663H6.66683C5.78277 6.66663 4.93493 7.01782 4.30981 7.64294C3.68469 8.26806 3.3335 9.1159 3.3335 9.99996V28.3333C3.3335 28.7753 3.50909 29.1992 3.82165 29.5118C4.13421 29.8244 4.55814 30 5.00016 30H8.3335" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 30H15" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.6668 30H35.0002C35.4422 30 35.8661 29.8244 36.1787 29.5119C36.4912 29.1993 36.6668 28.7754 36.6668 28.3334V22.25C36.6662 21.8718 36.5369 21.5051 36.3002 21.21L30.5002 13.96C30.3443 13.7648 30.1465 13.6072 29.9215 13.4987C29.6965 13.3902 29.45 13.3337 29.2002 13.3334H23.3335" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.3333 33.3333C30.1743 33.3333 31.6667 31.8409 31.6667 30C31.6667 28.159 30.1743 26.6666 28.3333 26.6666C26.4924 26.6666 25 28.159 25 30C25 31.8409 26.4924 33.3333 28.3333 33.3333Z" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6668 33.3333C13.5078 33.3333 15.0002 31.8409 15.0002 30C15.0002 28.159 13.5078 26.6666 11.6668 26.6666C9.82588 26.6666 8.3335 28.159 8.3335 30C8.3335 31.8409 9.82588 33.3333 11.6668 33.3333Z" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Gestion logistique en temps réel",
        items: [
            "Traçabilité automatisée des livraisons",
            "Tableaux de bords stocks et flux logistiques",
            "IA pour prévisions d’approvisionnement",
        ],
        badge: "Zéro rupture critique",
        },
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3335 28.3333H23.3335V31.6667C23.3335 32.1087 23.5091 32.5326 23.8217 32.8452C24.1342 33.1577 24.5581 33.3333 25.0002 33.3333H28.3335C28.7755 33.3333 29.1994 33.1577 29.512 32.8452C29.8246 32.5326 30.0002 32.1087 30.0002 31.6667V26.6667C30.7765 26.4082 31.482 25.9724 32.0606 25.3938C32.6392 24.8152 33.075 24.1097 33.3335 23.3333H35.0002C35.4422 23.3333 35.8661 23.1577 36.1787 22.8452C36.4912 22.5326 36.6668 22.1087 36.6668 21.6667V18.3333C36.6668 17.8913 36.4912 17.4674 36.1787 17.1548C35.8661 16.8423 35.4422 16.6667 35.0002 16.6667H33.3335C33.3335 15.373 33.0323 14.097 32.4537 12.9399C31.8752 11.7828 31.0351 10.7762 30.0002 10V5C28.9652 5 27.9444 5.24097 27.0187 5.70382C26.093 6.16667 25.2878 6.83869 24.6668 7.66667L24.1668 8.33333H18.3335C15.6813 8.33333 13.1378 9.3869 11.2624 11.2623C9.38706 13.1376 8.3335 15.6812 8.3335 18.3333V20C8.3335 21.2937 8.63471 22.5697 9.21327 23.7268C9.79183 24.8839 10.6319 25.8904 11.6668 26.6667V31.6667C11.6668 32.1087 11.8424 32.5326 12.155 32.8452C12.4675 33.1577 12.8915 33.3333 13.3335 33.3333H16.6668C17.1089 33.3333 17.5328 33.1577 17.8453 32.8452C18.1579 32.5326 18.3335 32.1087 18.3335 31.6667V28.3333Z" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.6665 16.6666H26.6832" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.3335 13.3334V15C3.3335 15.8841 3.68469 16.7319 4.30981 17.3571C4.93493 17.9822 5.78277 18.3334 6.66683 18.3334H8.3335" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

,
        title: "Optimisation des coûts",
        items: [
            "Analyse comparative des achats via IA",
            "Suivi automatisé des coûts logistiques",
            "Alertes sur anomalies et surcoûts",
        ],
        badge: "économies de 10 à 15%",
        },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client Achat/Logistique",
      quote:
        "Directeur LogistiqueNous avons éliminé les ruptures de stock et réduit nos coûts d’approvisionnement de 12%.",
      author: "Directeur Logistique",
      role: "Directeur Logistique",
      company: "Groupe Agro-industriel",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Saisie manuelle des bons de commande",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Retards et erreurs de livraison",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Stocks mal synchronisés",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Difficultés de suivi des fournisseurs et contrats",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Coûts de transport et d’approvisionnement élevés",
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

export default QANAchatsLogistique;