import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import logo from "../assets/images/logosenyone-copie.png"; // Ton logo

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current !== null) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    if (closeTimeoutRef.current !== null) {
      clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = window.setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 500);
  };

  const menuItems = [
    {
      link: "./Qui-sommes-Nous?",
      label: "Direction Financière",
    },
    {
      link: "./Qui-aidons-nous?",
      label: "Direction Juridique",
    },
    ,
    {
      link: "./Nos-solutions",
      label: "Direction Marketing",
    },
    ,
    {
      link: "./Nos-solutions",
      label: "Direction Commerciale",
    },
    {
      link: "./Nos-solutions",
      label: "Direction des Ressources Humaines",
    },
    {
      link: "./Blog",
      label: "Direction des Opérations/Production",
    },
    {
      link: "./Contact",
      label: "Direction Informatique",
    },
    {
      link: "./Contact",
      label: "Direction Achat/Logistique",
    }
  ]

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-6">
      <div className="navbar-glass px-8 py-4 rounded-2xl">
        <div className="flex items-center justify-between">
          {/* ✅ Logo */}
          <div className="flex items-center space-x-2">
           <a href="/" className="text-white/90 hover:text-white transition-colors font-medium">
            <img
              src={logo}
              alt="SENYONE"
              className="w-32 h-auto"
            />
            </a>
          </div>

          {/* ✅ Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 relative">
            <a href="./Qui-sommes-Nous?" className="text-white/90 hover:text-white transition-colors font-medium">
              Qui sommes-nous ?
            </a>
            <a href="./Qui-aidons-nous?" className="text-white/90 hover:text-white transition-colors font-medium">
              Qui aidons-nous ?
            </a>
            <div className="">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className=" text-white flex items-center justify-between w-full py-2 px-3 rounded-xl font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:p-0">
              Dropdown 
              <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
              </button>

              <div
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
              className={`transition-all duration-300 ease-in-out z-10 absolute ${ isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} 
              bg-neutral-900 border border-neutral-700/50 rounded-sm w-64`}>
                  <ul className="p-2 text-sm text-white text-body font-medium">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <a href={item.link} 
                        className={`inline-flex items-center w-full p-2 
                        hover:bg-neutral-800 hover:text-heading rounded
                          ${ isMobileMenuOpen ? "visible" : "hidden"} `}
                        >{item.label}</a>
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
            <a href="Nos-solutions" 
            className="text-white/90 hover:text-white transition-colors font-medium">
              Nos solutions
            </a>
            <a href="Blog" className="text-white/90 hover:text-white transition-colors font-medium">
              Blog
            </a>
          </div>

          {/* ✅ Contact Button */}
          <Button className="btn-coral hidden md:block rounded-xl">
             <a href="Contact" className="text-white/90 hover:text-white transition-colors font-medium">
              Nous contacter
            </a>
          </Button>

          {/* ✅ Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white transition-transform duration-200 hover:scale-110"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-3 border-t border-white/20 mt-4">
            <a
              href="/Qui-sommes-nous"
              className="block text-white/90 hover:text-white transition-colors font-medium py-2 px-2 rounded-lg hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Qui sommes-nous ?
            </a>
            <a
              href="/Qui-aidons-nous"
              className="block text-white/90 hover:text-white transition-colors font-medium py-2 px-2 rounded-lg hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Qui aidons-nous ?
            </a>
            <a
              href="/Nos-Solutions"
              className="block text-white/90 hover:text-white transition-colors font-medium py-2 px-2 rounded-lg hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nos solutions
            </a>
            <a
              href="/Blog"
              className="block text-white/90 hover:text-white transition-colors font-medium py-2 px-2 rounded-lg hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <div className="pt-2">
              <Button
                className="btn-coral w-full rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                 <a
              href="/Contact"
              
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nous contacter
            </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
