import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import {WhatsAppWidget} from "@/components/WhatsAppWidget";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <HeroSection 
          title="Mentions Legales"
          showButtons={false}
        />
      </div>

      {/* Contenu Principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="space-y-8">
          {/* Introduction */}
          <section id="section-introduction" className="scroll-mt-32">
            <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
              Conformément aux dispositions légales et réglementaires applicables en Afrique de l'Ouest francophone, notamment au Sénégal, les présentes mentions légales ont pour objet d'informer les utilisateurs du site www.senyone.sn sur l'identité des différents intervenants.
            </p>
          </section>

          {/* Sections avec Accordéons */}
          <Accordion type="single" collapsible className="space-y-8">
            {/* Section 1 - Éditeur du site */}
            <section id="section-1" className="scroll-mt-32">
              <AccordionItem value="editeur">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  1. Éditeur du site
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                      Le site www.senyone.sn est édité par :
                    </p>
                    <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                      SENYONE
                    </p>
                    <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                      Société par Actions Simplifiée (SAS)
                    </p>
                    <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                      Activité : Conseil, transformation digitale, automatisation, intelligence artificielle
                    </p>
                    <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                      Siège social : Villa 50, Cité Panoramique, Liberté 6 Extensions, Dakar - SENEGAL
                    </p>
                    <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                      Capital social : 10.600.000 FCFA
                    </p>
                    <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                      RCCM : SN DKR 2021 B 39620
                    </p>
                    <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                      NINEA : 00903421 2V5
                    </p>
                    <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                      Email : <a href="mailto:contact@senyone.sn" className="text-[#007883]">contact@senyone.sn</a>
                    </p>
                    <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                      Téléphone : <a href="tel:+221774718080" className="text-[#007883]">+221 77 471 80 80</a>
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 2 - Propriété intellectuelle */}
            <section id="section-2" className="scroll-mt-32">
              <AccordionItem value="propriete-intellectuelle">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  2. Propriété intellectuelle
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    L'ensemble des contenus présents sur le site www.senyone.sn (textes, images, logos, graphismes, documents, vidéos, etc.) est protégé par les lois en vigueur relatives à la propriété intellectuelle.
                  </p>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, des éléments du site est interdite sans l'autorisation écrite préalable de SENYONE.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 3 - Responsabilité */}
            <section id="section-3" className="scroll-mt-32">
              <AccordionItem value="responsabilite">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  3. Responsabilité
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    SENYONE s'efforce de fournir sur le site des informations aussi exactes et à jour que possible. Toutefois, SENYONE ne saurait être tenue responsable des omissions, inexactitudes ou carences dans la mise à jour des informations.
                  </p>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    L'utilisateur est seul responsable de l'utilisation qu'il fait des informations disponibles sur le site.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 4 - Liens hypertextes */}
            <section id="section-4" className="scroll-mt-32">
              <AccordionItem value="liens-hypertextes">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  4. Liens hypertextes
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Le site www.senyone.sn peut contenir des liens vers des sites tiers. SENYONE n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 5 - Protection des données personnelles */}
            <section id="section-5" className="scroll-mt-32">
              <AccordionItem value="protection-donnees">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  5. Protection des données personnelles
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Le traitement des données personnelles est régi par la Politique de confidentialité accessible sur le site.
                  </p>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Conformément à la loi sénégalaise n°2008-12 du 25 janvier 2008, l'utilisateur dispose de droits sur ses données personnelles.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 6 - Cookies */}
            <section id="section-6" className="scroll-mt-32">
              <AccordionItem value="cookies">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  6. Cookies
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Le site peut utiliser des cookies à des fins de navigation, de mesure d'audience et d'amélioration de l'expérience utilisateur.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 7 - Droit applicable */}
            <section id="section-7" className="scroll-mt-32">
              <AccordionItem value="droit-applicable">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  7. Droit applicable
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Les présentes mentions légales sont soumises au droit sénégalais.
                  </p>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Tout litige relatif à l'utilisation du site relève de la compétence des juridictions sénégalaises.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 8 - Contact */}
            <section id="section-8" className="scroll-mt-32">
              <AccordionItem value="contact">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  8. Contact
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Pour toute question relative au site ou à son contenu :
                  </p>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Email : <a href="mailto:contact@senyone.sn" className="text-[#007883]">contact@senyone.sn</a>
                  </p>
                </AccordionContent>
              </AccordionItem>
            </section>
          </Accordion>
        </div>
      </div>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}