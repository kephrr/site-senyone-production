import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import logo from "../assets/images/logosenyone-copie.png"; // Ton logo

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      link: "./financiere",
      label: "Direction Financière",
    },
    {
      link: "./juridique",
      label: "Direction Juridique",
    },
    ,
    {
      link: "./marketing",
      label: "Direction Marketing",
    },
    ,
    {
      link: "./commerciale",
      label: "Direction Commerciale",
    },
    {
      link: "./ressources-humaines",
      label: "Direction des Ressources Humaines",
    },
    {
      link: "./operations-production",
      label: "Direction des Opérations/Production",
    },
    {
      link: "./informatique",
      label: "Direction Informatique",
    },
    {
      link: "./achats-logistique",
      label: "Direction Achat/Logistique",
    }
  ]

  return (
    <nav className={`fixed top-5 left-0 w-full z-50 transition-all duration-300`}>
      <div className={`max-w-4xl mx-auto px-6`}>
        <div className={`shadow-xl ${isScrolled ? 'bg-white text-gray-900' : 'navbar-glass text-white'} 
        px-4 py-4 rounded-2xl transition-all duration-300`}>
        <div className="flex items-center justify-between ">
          {/* ✅ Logo */}
          <div className="flex items-center space-x-2">
           <a href="/" className={`${isScrolled ? 'text-gray-900' : 'text-white/90 hover:text-white'} transition-colors font-medium`}>
            <img
              src={logo}
              alt="SENYONE"
              className={`h-auto w-24 transition-all duration-300`}
            />
            </a>
          </div>

          {/* ✅ Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 relative">
            <a href="./Qui-sommes-Nous?" 
            className={`${isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white/90 hover:text-white'} 
            transition-colors font-medium text-xs`}>
              Qui sommes-nous ?
            </a>
            <div className="">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className={`${isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-white/80'} 
              flex items-center justify-between w-full py-2 px-3 rounded-xl text-xs
              font-medium text-heading md:w-auto md:hover:bg-transparent md:border-0 md:p-0`}>
              Qui aidons-nous ? 
              <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke={isScrolled ? '#1f2937' : 'currentColor'} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
              </button>

              <div
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
              className={`transition-all duration-300 ease-in-out z-10 absolute ${ isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} 
              ${isScrolled ? 'bg-white border border-gray-200' : 'bg-neutral-900 border-neutral-700/50'} rounded-sm w-64`}>
                  <ul className="p-2 text-sm text-body font-medium">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <a href={item.link} 
                        className={`inline-flex items-center w-full p-2 text-xs
                        ${isScrolled 
                          ? 'hover:bg-gray-100 text-gray-700' 
                          : 'hover:bg-neutral-800 text-white hover:text-heading'} 
                        rounded ${isMobileMenuOpen ? "visible" : "hidden"}`}
                        >{item.label}</a>
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
            <a href="Nos-solutions" 
            className={`${isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white/90 hover:text-white'} 
            transition-colors font-medium text-xs`}>
              Nos solutions
            </a>
            <a href="Blog" className={`${isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white/90 hover:text-white'} 
            transition-colors font-medium text-xs`}>
              Blog
            </a>
          </div>

          {/* ✅ Contact Button */}
          <Button className="btn-coral md:block rounded-xl text-xs">
             <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
              Nous contacter
            </a>
          </Button>

          {/* ✅ Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'} transition-all duration-200 hover:scale-110`}
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
          <div className={`pt-4 pb-2 space-y-3 border-t ${isScrolled ? 'border-gray-200' : 'border-white/20'} mt-4`}>
            <a
              href="/Qui-sommes-nous"
              className={`block ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:text-white hover:bg-white/10'} transition-colors font-medium py-2 px-2 rounded-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Qui sommes-nous ?
            </a>
            <a
              href="/Qui-aidons-nous"
              className={`block ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:text-white hover:bg-white/10'} transition-colors font-medium py-2 px-2 rounded-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Qui aidons-nous ?
            </a>
            <a
              href="/Nos-Solutions"
              className={`block ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:text-white hover:bg-white/10'} transition-colors font-medium py-2 px-2 rounded-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nos solutions
            </a>
            <a
              href="/Blog"
              className={`block ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:text-white hover:bg-white/10'} transition-colors font-medium py-2 px-2 rounded-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <div className="pt-2">
              <Button
                className={`${isScrolled ? 'bg-blue-600 hover:bg-blue-700' : 'btn-coral'} w-full rounded-xl`}
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
      </div>
    </nav>
  );
};

export default Navbar;
