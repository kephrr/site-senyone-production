import webDev from '@/assets/images/virtual-reality.png';
import { useState } from 'react';

export const Banniere = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section
      className="relative overflow-hidden rounded-t-[25px]"
      style={{
        backgroundImage: `url(${webDev})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`absolute inset-0 mix-blend-color transition-colors duration-500 ${
          isHovered ? 'bg-[#E44849]' : 'bg-[#00929E]'
        }`}  />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/10 to-[#00929E]/0" />
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/10 to-[#00929E]/0" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 
      flex flex-col md:flex-row gap-4 md:gap-10 md:gap-16 items-center md:items-start">
        <div className="w-full md:w-1/3 text-left">
          <p className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-neue-plak font-bold leading-tight text-white">
            <span className="block">Think.</span>
            <span className="block text-[#E44849]">Automate.</span>
            <span className="block">Rework.</span>
          </p>
          <div className="md:hidden flex gap-2 text-2xl md:text-4xl lg:text-5xl 
                          font-neue-plak font-bold leading-tight text-white">
            <span className="block">Think.</span>
            <span className="block text-[#E44849]">Automate.</span>
            <span className="block">Rework.</span>
          </div>
        </div>

        <div className="w-full md:w-2/3 text-xs text-white leading-relaxed space-y-4">
          <p>
            SENYONE conseille et supporte les entreprises dans la transformation digitale, l'innovation et
            l'automatisation de leurs procédures. Notre équipe d'experts est forte d'une vaste expérience
            de projets menés à travers l'Europe, l'Afrique et le Moyen-Orient.
          </p>
          <p>
            Nous sommes un collectif de collaborateurs travaillant chaque jour pour vous apporter les meilleurs
            conseils et les meilleures idées pour vos projets. Notre objectif est de mettre notre expertise,
            notre énergie et notre état d'esprit au service de la réussite de votre transformation.
          </p>
        </div>
      </div>
    </section>
  );
};
