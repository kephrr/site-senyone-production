import { Carousel, Slide } from "./ui/carousel-full-width";
import marketing from "@/assets/images/marketing.jpg";
import ventes from "@/assets/images/ventes.jpg";


const slides: Slide[] = [
  {
    id:1,
    title: "Pilotez votre croissance en toute sérénité.",
    description:
      "Notre solution allie puissance technologique et expertise comptable. Bénéficiez de clôtures accélérées, de rapprochements automatiques et d'une conformité OHADA garantie pour une direction financière agile et sécurisée.",
    image: marketing,
    buttonText: "En savoir plus",
    buttonLink: "#",
  },
  {
    id:2,
    title: "Optimisez votre supply chain de A à Z",
    description:
      "Grâce à une traçabilité en temps réel et des prévisions pilotées par l'IA, maîtrisez vos coûts et transformez votre gestion des stocks en un avantage compétitif.",
    image: ventes,
    buttonText: "Découvrir",
    buttonLink: "#",
  },
  {
    id:3,
    title: "Libérez le potentiel de vos équipes",
    description:
      "De l'on-boarding digital à la paie automatisée, simplifiez toutes les tâches administratives et offrez à vos collaborateurs un portail dédié pour une expérience de travail modernisée.",
    image: ventes,
    buttonText: "Découvrir",
    buttonLink: "#",
  },
  {
    id:4,
    title: "Donnez du pouvoir à vos équipes techniques.",
    description:
      "Mettez en place des intégrations sans code, assurez une gouvernance data rigoureuse et maximisez le ROI de vos investissements technologiques pour une infrastructure agile et performante",
    image: ventes,
    buttonText: "En savoir plus",
    buttonLink: "#",
  },
  {
    id:5,
    title: "Vendez plus, plus vite et plus intelligemment.",
    description:
      "Générez des devis instantanés, automatisez les relances et utilisez des insights clients propulsés par l'IA pour conclure davantage de ventes et fidéliser votre portefeuille.",
    image: ventes,
    buttonText: "Découvrir",
    buttonLink: "#",
  },
  {
    id:6,
    title: "Exécutez parfaitement votre stratégie",
    description:
      "Pilotez la performance en temps réel, garantissez la qualité et optimisez tous vos processus pour une exécution opérationnelle fluide, efficace et alignée sur vos objectifs",
    image: ventes,
    buttonText: "En savoir plus",
    buttonLink: "#",
  },
];

export default function QuiSommesNousSection() {
  return (
    <section className="py-16">
        <div className="text-start mb-10 flex flex-col mx-28">
          <h1 className="md:min-w-5xl text-4xl md:text-2xl font-bold text-[#000000] mb-2 font-neue-plak">
            Qui aidons-nous ?
          </h1>
          <p className="text-lg text-[#383838] max-w-2xl text-start font-neue-plak-normal">
            Chaque direction a ses défis. Nous avons vos solutions
          </p>
        </div>
      <Carousel slides={slides} height="h-[600px]" />
    </section>
  );
}
