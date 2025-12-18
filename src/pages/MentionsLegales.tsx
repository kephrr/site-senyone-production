import HeroSection from "@/components/HeroSection";

/**
 * Cette page est une page de type article. Pas besoin de beaucoup de CSS ou de styles/animation 
 * 
 * Pour les grand titres utilise ce div
 * 
    * <h1 className="text-2xl md:text-2xl font-bold text-[#383838] mb-2 font-neue-plak">
    * Grand titre
    * </h1>
 * 
 * Pour les petits titres utilise : 
 * 
    * <h2 className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak">
    * Petit titre
    * </h2>
 * 
 * Pour les textes utilise des balises html p avec comme classes :  
 * 
    * md:text-lg text-[#383838] text-start font-neue-plak-normal 
 * 
 * Les liens doivent être en couleur bleue #007883ff
 * 
 * Contraintes : 
 * 
 * N'ajoute pas de CSS
 * Ne crée pas de nouveau fichier
 * Ne travail sur aucun autre fichier que ceux-ci 
 * Ne crée pas de nouveau composant dans ceux-ci
 * 
 */

export default function MentionsLegales() {
  return (
    <div className="min-h-screen">
        <HeroSection title="Mentions Legales" 
        description="" showButtons={false}></HeroSection> 
        <div className="text-start mb-10 flex flex-col md:mx-auto max-w-5xl mx-4">
          {/* CONTENU */}
        </div>
    </div>
  );
}