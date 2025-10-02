import { useState, useMemo } from "react";

export default function ROIForm() {
  const [hoursPerWeek, setHoursPerWeek] = useState(1);
  const [hourlyRate, setHourlyRate] = useState(0);
  const [documentsPerMonth, setDocumentsPerMonth] = useState(1);

  // ⚡ Calcul simplifié (exemple : addition)
  const { potentialSavings, freedTime, estimatedROI } = useMemo(() => {
    const sum = hoursPerWeek + hourlyRate + documentsPerMonth;

    return {
      potentialSavings: sum * 1000, // Juste pour donner une valeur "qui ressemble"
      freedTime: sum * 2,
      estimatedROI: sum * 1500,
    };
  }, [hoursPerWeek, hourlyRate, documentsPerMonth]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 ">
      {/* Gauche : formulaire */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-neue-plak font-bold">Estimez votre ROI en un instant !</h2>
        <p className="text-gray-600 text-sm">
          Entrez vos informations afin de calculer le retour sur investissement
          en utilisant nos solutions
        </p>

        {/* Heures/semaines */}
        <div>
          <label className="flex justify-between text-gray-600 text-sm mb-2">
            <span>Heures/semaines sur tâches répétitives</span>
            <span>{hoursPerWeek}</span>
          </label>
          <input
            type="range"
            min="1"
            max="168"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Coût horaire moyen */}
        <div>
          <input
            type="number"
            placeholder="Coût horaire moyen"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full border rounded-lg p-3 text-sm"
          />
        </div>

        {/* Volume de documents */}
        <div>
          <label className="flex justify-between text-gray-600 text-sm mb-2">
            <span>Volume de document par mois</span>
            <span>{documentsPerMonth}</span>
          </label>
          <input
            type="range"
            min="1"
            max="1000"
            value={documentsPerMonth}
            onChange={(e) => setDocumentsPerMonth(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      {/* Droite : résultats */}
      <div className="bg-white border rounded-xl shadow-sm p-6 flex flex-col justify-between">
        <h3 className="text-xl font-bold mb-4">Résultats</h3>

        <div className="space-y-6">
          <div>
            <p className="text-gray-600 text-sm">Économies potentielles par an</p>
            <p className="text-2xl font-bold">
              {potentialSavings.toLocaleString()} F/an
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-sm">Temps libéré</p>
            <p className="text-2xl font-bold">{freedTime} h/an</p>
          </div>

          <div>
            <p className="text-gray-600 text-sm">ROI estimé</p>
            <p className="text-2xl font-bold">
              {estimatedROI.toLocaleString()} F/an
            </p>
          </div>
        </div>

        <button className="mt-6 bg-red-500 text-white rounded-lg py-3 hover:bg-red-600 transition">
          Obtenir un rapport détaillé
        </button>
      </div>
    </div>
  );
}
