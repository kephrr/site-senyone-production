import { ValueCard } from './ValueCard';
import { MapPin, Users, Lightbulb, HeartHandshake } from 'lucide-react';
import pattern from '@/assets/images/pattern.png';

export const ValuesSection = () => {
  const values = [
    {
      icon: <MapPin className='w-10 h-10 text-white'/>,
      title: "Expertise Locale & Vision Globale",
      description: "Profondément ancrés en Afrique de l'Ouest, nous comprenons vos contraintes spécifiques tout en appliquant les meilleures pratiques internationales.",
      color: "bg-blue-600"
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-[#E44849]" />,
      title: "Partenaires d'innovation à vos côtés",
      description: "Véritables partenaires dans votre transformation, nous allons proximité et agilité pour concevoir des solutions d'avant-garde. Votre succès est notre motivation : nous partageons vos défis et votre fierté pour une croissance pérenne.",
      color: "bg-green-600"
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      title: "Excellence et pragmatisme",
      description: "Nous privilégions les solutions qui fonctionnent réellement sur le terrain, adaptées à vos exigences et contraintes, avec des bénéfices mesurables dès les premières semaines. Pas de sur-ingénierie, que du concret.",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section
      className="py-16 rounded-b-[50px] relative overflow-hidden"
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 40%, #e4484871 100%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-4">
          <h2 className="text-xl md:text-3xl font-neue-plak font-bold text-gray-900 mb-6">Nos Valeurs</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              color={value.color}
              variant={index === 1 ? 'gradient' : 'white'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
