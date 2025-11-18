import { ReactNode } from 'react';

interface MissionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  variant?: 'white' | 'gradient';
}

export const NotreEquipeCard = ({ 
  icon, 
  title, 
  description, 
  color, 
  variant = 'white' 
}: MissionCardProps) => {
  const isGradient = variant === 'gradient';
  
  return (
    <div 
      className={`relative overflow-hidden rounded-xl px-4 py-8 min-h-80 transition-all duration-300 hover:shadow-lg ${
        isGradient 
          ? 'bg-gradient-to-r from-[#009E7B] to-[#00929E] text-white' 
          : 'bg-white text-[#383838] border-[#BDBDBD] border-[1px]'
      }`}
    >
      <div className="relative z-10">
        <div className="mb-6">
          <div 
            className={`w-16 h-16 rounded-xl flex items-center justify-center ${
              isGradient ? 'bg-white' : 'bg-gradient-to-r from-[#009E7B] to-[#00929E]'
            }`}
          >
            {icon}
          </div>
        </div>
        <h3 className={`text-xl font-bold mb-3 font-neue-plak ${
          isGradient ? 'text-white' : 'text-[#383838]'
        }`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed ${
          isGradient ? 'text-white/90' : 'text-[#383838]'
        }`}>
          {description}
        </p>
      </div>
      {!isGradient && (
        <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-gray-50 -z-0"></div>
      )}
    </div>
  );
};
