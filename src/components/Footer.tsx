import { useState } from "react";
import logo from "../assets/SENYONE-09.svg"; // Ton logo

const Footer = () => {
  return (
    <footer className="bg-[#383838] text-white py-16 font-neue-plak-normal"> {/* Fond noir clair */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="SENYONE"
              className="h-24 w-auto object-contain"
            />
          </div>
          </div>

          {/* Nos ressources */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-plus-jakarta font-semibold text-sm mb-6">
              
            </h3>
            <ul className="space-y-3 text-xs">
              <li>
                <a 
                  href="#" 
                  className="text-white hover:text-gray-300 transition-colors "
                >
                  Nos ressources
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white hover:text-gray-300 transition-colors "
                >
                  Nos solutions
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white hover:text-gray-300 transition-colors "
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Qui sommes-nous ? */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-sm mb-6">
              <a href="/Qui-sommes-Nous?">Qui sommes-nous ?</a>
            </h3>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="#mission" className="text-white hover:text-gray-300 transition-colors">
                  Notre mission
                </a>
              </li>
              <li>
                <a href="#valeurs" className="text-white hover:text-gray-300 transition-colors">
                  Nos valeurs
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-white hover:text-gray-300 transition-colors">
                  Notre équipe
                </a>
              </li>
              <li>
                <a href="#approche" className="text-white hover:text-gray-300 transition-colors">
                  Notre approche
                </a>
              </li>
            </ul>
          </div>

          {/* Qui aidons-nous ? */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-sm mb-6">
              Qui aidons-nous ?
            </h3>
            <ul className="space-y-3 font-neue-plak-thin text-xs">
              <li>
                <a href="/financiere" className="text-white hover:text-gray-300 transition-colors">
                  Direction financière
                </a>
              </li>
              <li>
                <a href="juridique" className="text-white hover:text-gray-300 transition-colors">
                  Direction Juridique
                </a>
              </li>
              <li>
                <a href="marketing" className="text-white hover:text-gray-300 transition-colors">
                  Direction Marketing
                </a>
              </li>
              <li>
                <a href="commerciale" className="text-white hover:text-gray-300 transition-colors">
                  Direction commerciale
                </a>
              </li>
              <li>
                <a href="ressources-humaines" className="text-white hover:text-gray-300 transition-colors">
                  Direction des ressources humaines
                </a>
              </li>
              <li>
                <a href="operations-production" className="text-white hover:text-gray-300 transition-colors">
                  Direction des opérations
                </a>
              </li>
              <li>
                <a href="informatique" className="text-white hover:text-gray-300 transition-colors">
                  Direction Informatique
                </a>
              </li>
              
              <li>
                <a href="achats-logistique" className="text-white hover:text-gray-300 transition-colors">
                  Direction Achats/Logistique
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-plus-jakarta font-semibold text-sm mb-6">
              Contacts
            </h3>
            <div className="space-y-4 font-neue-plak-thin text-xs">
              <div>
                <p className="text-white font-inter text-sm leading-relaxed">
                  50 Cité Panoramique, Liberté 6<br />
                  Extension<br />
                  Dakar, Sénégal
                </p>
              </div>
              <div>
                <a href="tel:+221774592047" 
                className="text-[#E44849] hover:text-gray-300 transition-colors font-inter">
                  +221 77 459 20 47
                </a>
              </div>
              <div>
                <a href="mailto:contact@senyone.sn" className="text-[#E44849] hover:text-gray-300 transition-colors font-inter ">
                  contact@senyone.sn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white font-inter text-sm mb-4 md:mb-0">
              © 2025 SENYONE. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-inter text-sm">
                Politique de confidentialité
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-inter text-sm">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
