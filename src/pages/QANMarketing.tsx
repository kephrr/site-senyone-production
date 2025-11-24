import { CheckCircle2, Timer, BookOpenCheck } from "lucide-react";
import { SolutionCardProps } from "@/components/SolutionsSurMesureSection";
import { CasClient } from "@/components/CasClientSection";
import { DefiCardProps } from "@/components/DefisCardsSection";
import { HeroText } from "@/components/HeroSection";
import {QuiAidonsNous} from "@/pages/interface/QuiAidonsNous";

const QANMarketing = () => {
    const heroText:HeroText = {
        title: "Direction Marketing",
        description: "De la donnée brute à des campagnes ciblées et performantes",
    };

    const solutionsCards:SolutionCardProps[] = [
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.9497 15.5069C29.6523 12.083 28.0443 8.90609 25.4612 6.63912C22.8781 4.37214 19.5194 3.19016 16.0858 3.3398C12.6522 3.48944 9.40908 4.95914 7.03297 7.44225C4.65687 9.92536 3.33136 13.2301 3.33301 16.6669C3.33301 24.4836 11.478 32.6036 15.0363 35.7802" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.6296 27.7101C36.2936 27.0462 36.6666 26.1457 36.6666 25.2068C36.6666 24.2678 36.2936 23.3673 35.6296 22.7034C34.9657 22.0395 34.0652 21.6665 33.1263 21.6665C32.1874 21.6665 31.2869 22.0395 30.623 22.7034L23.9396 29.3901C23.5434 29.7861 23.2533 30.2756 23.0963 30.8134L21.7013 35.5968C21.6595 35.7402 21.657 35.8922 21.694 36.0369C21.7311 36.1816 21.8064 36.3137 21.912 36.4193C22.0177 36.525 22.1498 36.6003 22.2945 36.6373C22.4392 36.6744 22.5912 36.6719 22.7346 36.6301L27.518 35.2351C28.0557 35.0781 28.5453 34.788 28.9413 34.3918L35.6296 27.7101Z" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.667 21.6665C19.4284 21.6665 21.667 19.4279 21.667 16.6665C21.667 13.9051 19.4284 11.6665 16.667 11.6665C13.9056 11.6665 11.667 13.9051 11.667 16.6665C11.667 19.4279 13.9056 21.6665 16.667 21.6665Z" stroke="#00929E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Automatisaiton du Marketing",
        items: [
            "Segmentation dynamique des clients par IA",
            "Campagnes multicanales automatisées",
            "Personnalisation en temps réel",
        ],
        badge: "+40% d’engagement client",
        },
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.333 11.6665V23.3332" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 11.6665V18.3332" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.667 11.6665V26.6665" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.33333 5C7.44928 5 6.60143 5.35119 5.97631 5.97631C5.35119 6.60143 5 7.44928 5 8.33333" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 5H16.6667" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.333 5H24.9997" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.667 5C32.551 5 33.3989 5.35119 34.024 5.97631C34.6491 6.60143 35.0003 7.44928 35.0003 8.33333" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35 15V16.6667" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35 23.3335V25.0002" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.0003 31.6665C35.0003 32.5506 34.6491 33.3984 34.024 34.0235C33.3989 34.6486 32.551 34.9998 31.667 34.9998" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.333 35H24.9997" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 35H16.6667" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.33333 34.9998C7.44928 34.9998 6.60143 34.6486 5.97631 34.0235C5.35119 33.3984 5 32.5506 5 31.6665" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 23.3335V25.0002" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 15V16.6667" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Tableaux de bords Marketing",
        items: [
            "KPIs consolidés en temps réel",
            "Analyse ROI par campagne",
            "Scoring de performance",
        ],
        badge: "Allocation optimale du budget marketing",
        },
        {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 11.6667V8.33333C5 7.44928 5.35119 6.60143 5.97631 5.97631C6.60143 5.35119 7.44928 5 8.33333 5H11.6667" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.333 5H31.6663C32.5504 5 33.3982 5.35119 34.0234 5.97631C34.6485 6.60143 34.9997 7.44928 34.9997 8.33333V11.6667" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.9997 28.3335V31.6668C34.9997 32.5509 34.6485 33.3987 34.0234 34.0239C33.3982 34.649 32.5504 35.0002 31.6663 35.0002H28.333" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6667 35.0002H8.33333C7.44928 35.0002 6.60143 34.649 5.97631 34.0239C5.35119 33.3987 5 32.5509 5 31.6668V28.3335" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.9997 21.6668C20.9201 21.6668 21.6663 20.9206 21.6663 20.0002C21.6663 19.0797 20.9201 18.3335 19.9997 18.3335C19.0792 18.3335 18.333 19.0797 18.333 20.0002C18.333 20.9206 19.0792 21.6668 19.9997 21.6668Z" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.573 20.5502C31.6975 20.1941 31.6975 19.8063 31.573 19.4502C30.6347 17.1509 29.0327 15.1832 26.9715 13.7981C24.9102 12.4131 22.4831 11.6733 19.9997 11.6733C17.5163 11.6733 15.0892 12.4131 13.0279 13.7981C10.9667 15.1832 9.36472 17.1509 8.42637 19.4502C8.30189 19.8063 8.30189 20.1941 8.42637 20.5502C9.36472 22.8495 10.9667 24.8172 13.0279 26.2023C15.0892 27.5874 17.5163 28.3271 19.9997 28.3271C22.4831 28.3271 24.9102 27.5874 26.9715 26.2023C29.0327 24.8172 30.6347 22.8495 31.573 20.5502Z" stroke="#E44849" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
,
        title: "Vue 360° du client et KYC",
        items: [
            "Enrichissement des profils clients",
            "Tracking du parcours client",
            "Intégration CRM/ERP",
        ],
        badge: "Meilleure expérience et fidélisation",
        },
  ];

  const cases: CasClient[] = [
    {
      title: "Cas client Marketing",
      quote:
        "Nous avons doublé notre taux de conversion en quelques mois grâce aux campagnes automatisées.",
      author: "Directrice Marketing",
      role: "Directeur Logistique",
      company: "Retail Ouest-Africain",
    },
  ];

  const cards: DefiCardProps[] = [
    {
      title: "Données des clients éparpillées et non exploitables",
      color: "#008D92",
      align: "left",
      visible: true,
      delayClass: "delay-300",
    },
    {
      title: "Campagnes massives peu personnalisées",
      color: "#F7A500",
      align: "left",
      visible: true,
      delayClass: "delay-700",
    },
    {
      title: "Mesure difficile du ROI marketing et du revenu influencé",
      color: "#E44849",
      align: "right",
      visible: true,
      delayClass: "delay-100",
    },
    {
      title: "Multiplicité des canaux digitaux (WhatsApp, email, réseaux sociaux…)",
      color: "#8B3CF4",
      align: "right",
      visible: true,
      delayClass: "delay-500",
    },
    {
      title: "Besoin de réactivité face aux concurrents",
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

export default QANMarketing;