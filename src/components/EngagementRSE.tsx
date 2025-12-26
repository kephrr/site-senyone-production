import { Button } from "@/components/ui/button";
import engagementImg from "@/assets/images/handsahek-blacks.jpg";

export const EngagementRSE = () => {
  const items = [
    {
      title: "Formation & Emploi",
      points: [
        "Professionnels formés aux technologies d'automatisation",
        "Programme de stage pour étudiants en informatique",
        "Partenariat avec universités locales",
      ],
    },
    {
      title: "Développement Durable",
      points: [
        "Réduction de 60% de la consommation papier chez nos clients",
        "Solutions cloud optimisées pour réduire l'empreinte carbone",
        "Télétravail et déplacements minimisés",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-xl md:text-3xl font-neue-plak font-bold text-gray-900 mb-2">
            Engagements RSE
          </h2>
          <p className="text-sm md:text-base text-[#6B6B6B]">Impact Sociétal Positif</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative flex justify-center pb-10"
            >
              <div className="absolute bottom-0 right-0 translate-x-2 translate-y-1 md:translate-x-4 md:translate-y-2 w-[260px] h-[160px] rounded-xl overflow-hidden z-0 pointer-events-none">
                <img
                  src={engagementImg}
                  alt="Engagement RSE"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative bg-white rounded-xl shadow-md px-6 py-6 md:px-8 md:py-8 max-w-md z-10">
                <h3 className="text-base md:text-lg font-neue-plak font-bold text-[#383838] mb-4">
                  {item.title}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-[#383838]">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-8 mt-20">
        <a href="/contacts">

        <Button className="btn-teal flex items-center gap-3 min-w-[200px] rounded-full">
          Nous contacter
        </Button>
        </a>
      </div>
    </section>
  );
};
