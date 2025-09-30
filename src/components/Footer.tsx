import { useState } from "react";
import logo from "../assets/images/logosenyone.png"; // Ton logo

const Footer = () => {
  return (
    <footer className="bg-[#383838] text-white py-16"> {/* Fond noir clair */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="SENYONE"
              className="h-20 w-auto object-contain"
            />
          </div>
          </div>

          {/* Nos ressources */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-plus-jakarta font-semibold text-lg mb-6">
              Nos ressources
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-white hover:text-gray-300 transition-colors font-inter text-sm"
                >
                  Nos solutions
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white hover:text-gray-300 transition-colors font-inter text-sm"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Qui sommes-nous ? */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-plus-jakarta font-semibold text-lg mb-6">
              Qui sommes-nous ?
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-inter text-sm">
                  Notre mission
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-inter text-sm">
                  Nos valeurs
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-inter text-sm">
                  Notre équipe
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-inter text-sm">
                  Notre approche
                </a>
              </li>
            </ul>
          </div>

          {/* Qui aidons-nous ? */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-plus-jakarta font-semibold text-lg mb-6">
              Qui aidons-nous ?
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-inter text-sm">
                  Direction financière
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-inter text-sm">
                  Direction des ressources humaines
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-inter text-sm">
                  Direction Informatique
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-inter text-sm">
                  Direction commerciale
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-inter text-sm">
                  Direction Achats/Logistique
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-inter text-sm">
                  Direction Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-inter text-sm">
                  Direction Juridique
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-inter text-sm">
                  Direction des opérations
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-plus-jakarta font-semibold text-lg mb-6">
              Contacts
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-inter text-sm leading-relaxed">
                  50 Cité Panoramique, Liberté 6<br />
                  Extension<br />
                  Dakar, Sénégal
                </p>
              </div>
              <div>
                <a href="tel:+221774592047" className="text-white hover:text-gray-300 transition-colors font-inter text-sm font-medium">
                  +221 77 459 20 47
                </a>
              </div>
              <div>
                <a href="mailto:contact@senyone.sn" className="text-white hover:text-gray-300 transition-colors font-inter text-sm font-medium">
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
