import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "./hook/useScrollAnimation";
import { PropertyDefault } from "./ui/zero-paper-animation";
import { ConnectingTasksAnimation } from "./ui/connecting-tasks-animation";

export default function HomePage() {
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  
  return (
    <div className="min-h-screen bg-[#efefef] py-16 px-4">
      <div ref={heroRef} className={`max-w-5xl mx-auto transition-all duration-1000 delay-200 ${
                        heroVisible ? 'translate-x-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
        {/* Header Section */}
        <div className="text-start mb-10">
          <h1 className="text-4xl md:text-2xl font-bold text-[#000000] mb-2 font-neue-plak">
            Transformez vos défis en opportunités
          </h1>
          <p className="text-lg text-[#383838] max-w-2xl text-start font-neue-plak-normal">
            Pendant que vos concurrents hésitent, transformez radicalement votre organisation avec l'automatisation
            intelligente
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-2 mb-16 font-neue-plak-normal">
          {/* Card 1: Digitalisation Zero Paper */}
          <Card className="p-8 bg-white rounded-2xl shadow-lg border-0">
            <div className="mb-6 mx-auto">
              <PropertyDefault />
            </div>

            <h3 className="text-xl font-semibold text-[#000000] mb-4 font-neue-plak">Digitalisation Zero Paper</h3>

            <p className="text-[#383838] mb-4">Vous croulez sous les documents papier ?</p>

            <div className="mb-4">
              <p className="text-sm font-medium text-[#000000] mb-2 font-neue-plak">Solution :</p>
              <p className="text-sm text-[#383838]">
                Dématérialisation complète, workflows numériques, signatures électroniques
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[#000000] mb-2 font-neue-plak">Résultat :</p>
              <p className="text-sm text-[#383838]">-95% de papier, processus 5x plus rapides</p>
            </div>
          </Card>

          {/* Card 2: Automatisation & processus */}
          <Card className="p-8 bg-white rounded-2xl shadow-lg border-0 font-neue-plak-normal">
            <div className="mb-6">
              <div className="relative w-full h-32 mb-4">
                {/* Connecting tasks mockup */}
                <ConnectingTasksAnimation />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-[#000000] mb-4">Automatisation & processus</h3>

            <p className="text-[#383838] mb-4">Vos équipes perdent du temps sur des tâches répétitives ?</p>

            <div className="mb-4">
              <p className="text-sm font-medium text-[#000000] mb-2 font-neue-plak">Solution :</p>
              <p className="text-sm text-[#383838]">
                Robots logiciels 24/7, intégrations sans code, orchestration intelligente
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[#000000] mb-2 font-neue-plak">Résultat :</p>
              <p className="text-sm text-[#383838]">80% de temps libéré, 0 erreur</p>
            </div>
          </Card>

          {/* Card 3: Intelligence artificielle */}
          <Card className="p-8 bg-white rounded-2xl shadow-lg border-0 font-neue-plak-normal">
            <div className="mb-6">
              <div className="relative w-full h-32 mb-4">
                {/* Chat interface mockup */}
                <div className="bg-[#efefef] rounded-xl p-4 h-full">
                  <div className="space-y-2 mb-4">
                    <div className="h-2 bg-[#d9d9d9] rounded w-3/4"></div>
                    <div className="h-2 bg-[#d9d9d9] rounded w-1/2"></div>
                    <div className="h-2 bg-[#d9d9d9] rounded w-2/3"></div>
                  </div>
                  <div className="bg-[#8f8f8f] rounded-lg px-3 py-2 flex items-center justify-between">
                    <span className="text-xs text-white">Chat with our agent</span>
                    <div className="w-6 h-6 bg-[#33b9cc] rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-[#000000] mb-4 font-neue-plak">Intelligence artificielle</h3>

            <p className="text-[#383838] mb-4">Difficile d'analyser vos données rapidement ?</p>

            <div className="mb-4">
              <p className="text-sm font-medium text-[#000000] mb-2 font-neue-plak">Solution :</p>
              <p className="text-sm text-[#383838]">IA intelligent, Chat Bots métier, analyses prédictives</p>
            </div>

            <div>
              <p className="text-sm font-medium text-[#000000] mb-2 font-neue-plak">Résultat :</p>
              <p className="text-sm text-[#383838]">Décisions 10x plus rapides, précision 98%</p>
            </div>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center font-neue-plak-thin leading-0">
          <Button className="bg-[#00929e] text-white px-8 py-3 rounded-full text-lg transition-colors">
            Nous contacter
          </Button>
        </div>
      </div>
    </div>
  )
}
