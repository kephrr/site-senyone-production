import { Calendar, TrendingUp, DollarSign } from "lucide-react"

export function MetricsSection() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-[#00929e] rounded-3xl p-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Automatisations déployées */}
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <Calendar className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium leading-tight">
                Automatisations
                <br />
                déployées
              </h3>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">
                5<span className="text-2xl font-normal"> ANS</span>
              </div>
              <p className="text-base leading-tight">
                d'expertise en
                <br />
                Afrique de l'Ouest
              </p>
            </div>
          </div>

          {/* ROI Moyen */}
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <TrendingUp className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium leading-tight">
                ROI Moyen en 12
                <br />
                mois
              </h3>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">95%</div>
              <p className="text-base leading-tight">
                Satisfaction
                <br />
                client
              </p>
            </div>
          </div>

          {/* Économisés par client */}
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <DollarSign className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium leading-tight">
                Économisés par
                <br />
                client par an
              </h3>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">
                2<span className="text-2xl font-normal"> SEMAINES</span>
              </div>
              <p className="text-base leading-tight">
                Votre première
                <br />
                automatisation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
