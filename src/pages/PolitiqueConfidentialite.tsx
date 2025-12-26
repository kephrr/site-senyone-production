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

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <HeroSection 
          title="Politique de Confidentialité"
          showButtons={false}
        />
      </div>

      {/* Contenu Principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Section Introduction - Sans numéro */}
          <section id="section-introduction" className="scroll-mt-32">
            <h1 className="text-xl md:text-2xl font-bold text-[#383838] mb-2 font-neue-plak">
              Introduction
            </h1>
            <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
              SENYONE accorde une importance particulière à la protection des données à caractère personnel et au respect de la vie privée des utilisateurs de son site web, conformément aux lois et réglementations en vigueur en Afrique de l'Ouest francophone, notamment la Loi n°2008-12 du 25 janvier 2008 du Sénégal relative à la protection des données à caractère personnel et aux principes reconnus dans l'espace UEMOA.
            </p>
          </section>

          {/* Sections avec Accordéons - Single mode pour fermer automatiquement */}
          <Accordion type="single" collapsible className="space-y-8">
            {/* Section 1 - Responsable du traitement */}
            <section id="section-1" className="scroll-mt-32">
              <AccordionItem value="responsable">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  1. Responsable du traitement
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    SENYONE
                  </p>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Société de conseil en transformation digitale, automatisation et intelligence artificielle
                  </p>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Email : <a href="mailto:contact@senyone.sn" className="text-[#007883]">contact@senyone.sn</a>
                  </p>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 2 - Données collectées */}
            <section id="section-2" className="scroll-mt-32">
              <AccordionItem value="donnees">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  2. Données collectées
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    SENYONE peut collecter :
                  </p>
                  <ul className="md:text-lg text-[#383838] text-start font-neue-plak-normal list-disc pl-5 space-y-1">
                    <li>Données d'identification (nom, prénom, email, téléphone)</li>
                    <li>Données professionnelles (société, fonction)</li>
                    <li>Données techniques (adresse IP, navigation, cookies)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 3 - Finalités */}
            <section id="section-3" className="scroll-mt-32">
              <AccordionItem value="finalites">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  3. Finalités
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Les données sont collectées pour :
                  </p>
                  <ul className="md:text-lg text-[#383838] text-start font-neue-plak-normal list-disc pl-5 space-y-1">
                    <li>Répondre aux demandes des utilisateurs</li>
                    <li>Fournir des services et informations</li>
                    <li>Améliorer le site et la qualité des services</li>
                    <li>Respecter les obligations légales</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 4 - Base légale */}
            <section id="section-4" className="scroll-mt-32">
              <AccordionItem value="base-legale">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  4. Base légale
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Les traitements reposent sur :
                  </p>
                  <ul className="md:text-lg text-[#383838] text-start font-neue-plak-normal list-disc pl-5 space-y-1">
                    <li>Le consentement</li>
                    <li>L'exécution contractuelle ou précontractuelle</li>
                    <li>L'intérêt légitime</li>
                    <li>Les obligations légales</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 5 - Destinataires */}
            <section id="section-5" className="scroll-mt-32">
              <AccordionItem value="destinataires">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  5. Destinataires
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Les données sont destinées à SENYONE et à ses prestataires techniques, dans le respect de la confidentialité.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 6 - Transferts */}
            <section id="section-6" className="scroll-mt-32">
              <AccordionItem value="transferts">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  6. Transferts
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Certaines données peuvent être hébergées hors du Sénégal, avec des garanties de sécurité appropriées.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 7 - Conservation */}
            <section id="section-7" className="scroll-mt-32">
              <AccordionItem value="conservation">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  7. Conservation
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Les données sont conservées pour une durée proportionnée aux finalités poursuivies.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 8 - Sécurité */}
            <section id="section-8" className="scroll-mt-32">
              <AccordionItem value="securite">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  8. Sécurité
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    SENYONE met en œuvre des mesures techniques et organisationnelles pour protéger les données.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 9 - Droits des personnes */}
            <section id="section-9" className="scroll-mt-32">
              <AccordionItem value="droits">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  9. Droits des personnes
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Les utilisateurs disposent de droits d'accès, de rectification, d'opposition et de suppression.
                  </p>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Toute demande peut être adressée à :{" "}
                    <a href="mailto:contact@senyone.com" className="text-[#007883]">contact@senyone.com</a>
                  </p>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 10 - Cookies */}
            <section id="section-10" className="scroll-mt-32">
              <AccordionItem value="cookies">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  10. Cookies
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    Le site utilise des cookies à des fins statistiques et fonctionnelles.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 11 - Modification */}
            <section id="section-11" className="scroll-mt-32">
              <AccordionItem value="modification">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  11. Modification
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg text-[#383838] text-start font-neue-plak-normal">
                    La politique peut être mise à jour à tout moment.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </section>

            {/* Section 12 - Contact */}
            <section id="section-12" className="scroll-mt-32">
              <AccordionItem value="contact">
                <AccordionTrigger className="text-xl md:text-xl font-bold text-[#383838] mb-2 font-neue-plak hover:no-underline">
                  12. Contact
                </AccordionTrigger>
                <AccordionContent>
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