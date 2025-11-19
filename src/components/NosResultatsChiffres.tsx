export const NosResultatsChiffres = () => {
  const stats = [
    {
      value: "+100",
      label: "Automatisations Réalisées\nDepuis 2019",
    },
    {
      value: "300%",
      label: "ROI Moyen - Retour sur investissement démontré en moins de 12 mois",
    },
    {
      value: "95%",
      label: "Satisfaction Client | Taux de recommandation de nos clients",
    },
    {
      value: "8M€",
      label: "Économies Générées | Gains cumulés pour nos clients sur 3 ans",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-3xl font-neue-plak font-bold text-gray-900 mb-10">
          Nos résultats chiffrés
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="flex items-start space-x-4">
              <div className="w-2 h-16 bg-[#00929E]" />
              <div>
                <div className="text-3xl md:text-4xl font-neue-plak font-bold text-[#383838] mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-[#6B6B6B] leading-snug whitespace-pre-line">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
