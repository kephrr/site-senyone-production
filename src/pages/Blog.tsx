import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectItem, SelectValue } from "@/components/ui/select";
import rpaCover from "@/assets/images/rpa2.jpg";
import ArticleCard from "@/components/ui/article";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const Blog = () => {

    const articles = [
    {
      title: "RPA : 10 processus à automatiser immédiatement",
      description: "Document PDF",
      image: rpaCover,
      content: (
        <>
          <p>
            Voici le contenu intégral de l’article sur les processus RPA à
            automatiser.
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Traitement automatique des factures</li>
            <li>Extraction de données depuis des PDF</li>
            <li>Gestion des emails entrants</li>
            <li>Intégration de données entre systèmes</li>
            <li>Suivi des commandes clients</li>
            <li>Reporting et génération d’états</li>
          </ol>
        </>
      ),
    },
    {
      title: "Automatiser la gestion des emails",
      description: "Cas pratique",
      image: rpaCover,
      content: (
        <p>
          Exemple détaillé de comment automatiser la gestion des emails avec RPA
          (classification, réponse automatique, etc.).
        </p>
      ),
    },
    {
      title: "RPA dans les ressources humaines",
      description: "Article complet",
      image: rpaCover,
      content: (
        <p>
          Découvrez comment la RPA peut automatiser le recrutement, la gestion
          des congés et les suivis RH.
        </p>
      ),
    },
    {
      title: "Extraction de données avec RPA",
      description: "Document PDF",
      image: rpaCover,
      content: (
        <p>
          Tutoriel sur l’extraction automatisée de données structurées et non
          structurées.
        </p>
      ),
    },
    {
      title: "Améliorer la productivité avec RPA",
      description: "Étude de cas",
      image: rpaCover,
      content: (
        <p>
          Étude de cas détaillée montrant l’impact positif de la RPA sur la
          productivité.
        </p>
      ),
    },
    {
      title: "RPA et conformité documentaire",
      description: "Article PDF",
      image: rpaCover,
      content: (
        <p>
          Comment la RPA aide à assurer la conformité documentaire et à réduire
          les risques d’erreur.
        </p>
      ),
    },
  ];
  
  return (
    <div className="min-h-screen max-w-screen overflow-hidden bg-[#efefef]">
      <Navbar />
      <div className="relative">
        <HeroSection showButtons={false} title="Suivez notre actualité" />
      </div>
      <div className="max-w-5xl px-8 md:px-0 my-12 mx-auto flex gap-6">
          <Input placeholder="Rechercher parmi les articles..." className="flex-2"/>
          <SelectGroup >
            <Select value="all" onValueChange={(value) => console.log(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent >
                <SelectItem value="all">Toutes catégories</SelectItem>
                <SelectItem value="automation">Automatisation</SelectItem>
                <SelectItem value="roi">Calcul du ROI</SelectItem>
                <SelectItem value="case-studies">Études de cas</SelectItem>
                <SelectItem value="industry-trends">Tendances du secteur</SelectItem>
              </SelectContent>
            </Select>
          </SelectGroup>
          <Input placeholder="Recherchez un article..." />
      </div>
      <div className="px-8 md:px-0 flex flex-col md:flex-row 
      max-w-5xl gap-10 justify-center mx-auto">
        <div className="relative flex-1">
          <img
            src={rpaCover}
            alt="RPA"
            className="w-full h-auto rounded-lg object-cover"
          />
          <span className="absolute bottom-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
            NOUVEAU
          </span>
        </div>
        <div className="flex-1">
          <h1 className="font-neue-plak font-bold text-2xl">Automatisation robotisée des processus (RPA)</h1>
          <p className="mt-4 text-sm text-gray-700">
            La RPA est une technologie permettant aux entreprises d'automatiser des tâches bureautiques répétitives, comme la saisie de données, l'extraction d'informations ou le copier-coller, en utilisant des robots logiciels ou...
          </p>
          <Button className="mt-2 w- bg-[#00929E] text-white">Lire l'article en entier</Button>
        </div>
      </div>
      <div className="px-8 py-8">
        <div className="mx-auto max-w-5xl grid grid-cols-1 
        sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              image={article.image}
              content={article.content}
            />
          ))}
      </div>
    </div>
    <Footer />
    <WhatsAppWidget />
    </div>
  );
};

export default Blog;
