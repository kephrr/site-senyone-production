import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#efefef] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6 text-balance">
            Transformez vos défis en opportunités
          </h1>
          <p className="text-lg text-[#383838] max-w-2xl mx-auto text-pretty">
            Pendant que vos concurrents hésitent, transformez radicalement votre organisation avec l'automatisation
            intelligente
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Digitalisation Zero Paper */}
          <Card className="p-8 bg-white rounded-2xl shadow-lg border-0">
            <div className="mb-6">
              <div className="relative w-full h-32 mb-4">
                {/* Document mockups */}
                <div className="absolute left-4 top-0 w-16 h-20 bg-[#e6e6e6] rounded border-2 border-[#d9d9d9]"></div>
                <div className="absolute left-12 top-2 w-16 h-20 bg-[#e6e6e6] rounded border-2 border-[#d9d9d9]"></div>
                <div className="absolute left-20 top-4 w-16 h-20 bg-[#e6e6e6] rounded border-2 border-[#d9d9d9]"></div>
                {/* Orange icon */}
                <div className="absolute left-8 bottom-0 w-12 h-12 bg-[#ed6e3d] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-[#000000] mb-4">Digitalisation Zero Paper</h3>

            <p className="text-[#383838] mb-4">Vous croulez sous les documents papier ?</p>

            <div className="mb-4">
              <p className="text-sm font-medium text-[#000000] mb-2">Solution :</p>
              <p className="text-sm text-[#383838]">
                Dématérialisation complète, workflows numériques, signatures électroniques
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[#000000] mb-2">Résultat :</p>
              <p className="text-sm text-[#383838]">-95% de papier, processus 5x plus rapides</p>
            </div>
          </Card>

          {/* Card 2: Automatisation & processus */}
          <Card className="p-8 bg-white rounded-2xl shadow-lg border-0">
            <div className="mb-6">
              <div className="relative w-full h-32 mb-4">
                {/* Connecting tasks mockup */}
                <div className="bg-white rounded-xl border border-[#e6e6e6] p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#f5387f] rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3.9,19 5,19 5,19H19C20.1,19 21,18.1 21,17V5C21,3.9 20.1,3 19,3M19,17H5V5H19V17Z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-[#000000]">Connecting tasks</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-8 h-2 bg-[#54df09] rounded-full"></div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-[#000000] mb-4">Automatisation & processus</h3>

            <p className="text-[#383838] mb-4">Vos équipes perdent du temps sur des tâches répétitives ?</p>

            <div className="mb-4">
              <p className="text-sm font-medium text-[#000000] mb-2">Solution :</p>
              <p className="text-sm text-[#383838]">
                Robots logiciels 24/7, intégrations sans code, orchestration intelligente
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[#000000] mb-2">Résultat :</p>
              <p className="text-sm text-[#383838]">80% de temps libéré, 0 erreur</p>
            </div>
          </Card>

          {/* Card 3: Intelligence artificielle */}
          <Card className="p-8 bg-white rounded-2xl shadow-lg border-0">
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

            <h3 className="text-xl font-semibold text-[#000000] mb-4">Intelligence artificielle</h3>

            <p className="text-[#383838] mb-4">Difficile d'analyser vos données rapidement ?</p>

            <div className="mb-4">
              <p className="text-sm font-medium text-[#000000] mb-2">Solution :</p>
              <p className="text-sm text-[#383838]">IA intelligent, Chat Bots métier, analyses prédictives</p>
            </div>

            <div>
              <p className="text-sm font-medium text-[#000000] mb-2">Résultat :</p>
              <p className="text-sm text-[#383838]">Décisions 10x plus rapides, précision 98%</p>
            </div>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-[#33b9cc] hover:bg-[#00929e] text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
            Nous contacter
          </Button>
        </div>
      </div>
    </div>
  )
}
