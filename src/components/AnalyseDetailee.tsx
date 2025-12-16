import { BarChart3, X, PieChart, TrendingUp, Target, Clock, DollarSign, Calculator, Shield, Check, FileDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { CompanyInfo, AlertDialog, CompanyInfoModal } from "./QuestionComponent";
import {calculateSavings} from "@/types/formTypes";
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

export type QuestionAnswer = number | string | number[];

export interface DetailedAnalysisProps {
  answers: Record<string, QuestionAnswer>;
  onClose: () => void;
  onDownloadPDF: (answers: Record<string, QuestionAnswer>, companyInfo?: CompanyInfo) => Promise<void>;
}

export const DetailedAnalysis: React.FC<DetailedAnalysisProps> = ({ 
  answers, 
  onClose,
  onDownloadPDF
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'roi' | 'timeline'>('overview');
  const [emailSending, setEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showCompanyInfoModal, setShowCompanyInfoModal] = useState(false);
  const [alertType, setAlertType] = useState<'download'>('download');
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | undefined>(null);


  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const { toast } = useToast();

  // Récupération des variables d'environnement
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ROI_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    setIsVisible(true);
  }, []);



  const savings = calculateSavings(answers);
  console.log(savings)

  useEffect(() => {
    if (!PUBLIC_KEY) {
      console.error('La clé publique EmailJS est manquante');
      return;
    }
    emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  // Mettre à jour la fonction handleSaveCompanyInfo
  const handleSendCompanyInfo = async (info: CompanyInfo) => {
    setCompanyInfo(info);
    setIsDownloading(true);

    
    try {
      const dateAujourdhui = new Date().toLocaleString('fr-FR', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false 
      }).replace(/\//g, '-').replace(',', ' ');
        // Envoyer l'email via EmailJS
        let automatableHoursPerWeek = Math.round(savings.hoursPerWeek * savings.automationRate)
        const templateParams = {
          to_email: info.email,
          to_name: info.nomCompletPerson,
          company_name: info.companyName,
          phone: info.phone,
          roi: savings.roi,
          message: `Nouvelle demande de rapport d'analyse d'automatisation de la part de ${info.nomCompletPerson} - ${info.companyName}`,
          from_name: "Senyone Automatisation",
          reply_to: info.email,
          volume: savings.hoursPerWeek,
          cout: savings.costPerHour,
          taux: savings.automationRate,
          date_simulation: dateAujourdhui,
          economiesPotentielles: savings.annualSavings,
          heuresAutomatisables: savings.automatableHours,
          etpLibere: savings.etpLibere,
          roiNet: savings.roiNet,
          pourcentageROI: savings.roi,
          periodeRetour: savings.paybackPeriod,
          productivityRate: savings.productivityRate,
          automatableHoursPerWeek: automatableHoursPerWeek
        };

        console.log(templateParams)
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY
        );
        // Télécharger le PDF après l'envoi de l'email
        setIsDownloading(true);
        await onDownloadPDF(answers, info);
        setDownloadSuccess(true);
        
        // Afficher un message de succès
        toast({
            title: "Succès",
            description: "Votre rapport a été envoyé par email avec succès ! Vous serez renvoyés à l'acceuil dans 3 secondes",
            variant: "default",
        });
        setShowCompanyInfoModal(false)
        setTimeout(()=>{
          window.location.href = '/';
        }, 3000)

        
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de l'email. Veuillez réessayer.",
        variant: "destructive",
        });
    } finally {
        setIsDownloading(false);
    }
    };

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('fr-FR') + ' FCFA';
  };

  return (
    <>
      <div className="fixed inset-0 bg-white/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
        <div className={`w-full max-w-4xl bg-white shadow-xl rounded-xl max-h-[85vh] overflow-y-auto transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} custom-scrollbar`}>
          <div className="bg-gradient-to-r from-[#00929E] to-[#007a85] text-white p-4 rounded-t-lg">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="glass-effect w-8 h-8 flex items-center justify-center bg-white/10">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold mb-0.5">Analyse détaillée</h2>
                  <p className="text-white/80 text-xs">Voici votre estimation personnalisée</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1 hover:bg-white/20 rounded-lg transition-all hover:rotate-90 duration-300 btn-3d"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <div className="flex gap-0.5 bg-white/10 rounded-lg p-0.5">
              {[
                { id: 'overview', label: 'Vue d\'ensemble', icon: PieChart },
                { id: 'roi', label: 'Analyse ROI', icon: TrendingUp },
                { id: 'timeline', label: 'Plan d\'action', icon: Target }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`
                      flex items-center gap-1.5 px-2 py-1.5 rounded text-xs font-medium transition-all duration-200
                      ${activeTab === tab.id
                        ? 'glass-effect text-[#ffffff]'
                        : 'text-white/90 hover:bg-white/10'
                      }
                    `}
                  >
                    <Icon className="w-3 h-3" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 space-y-4">
            {activeTab === 'overview' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="glass-border p-4 card-3d">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="glass-border w-6 h-6 flex items-center justify-center bg-[#e6f7f9]">
                        <Clock className="w-3.5 h-3.5 text-[#00929E]" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold gradient-text">Temps automatisable</div>
                        <div className="text-[10px] text-[#007a85]">Gain de productivité</div>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold gradient-text">
                        {savings.automatableHours}
                      </span>
                      <span className="text-sm text-[#007a85]">heures</span>
                    </div>
                    <div className="mt-2 text-xs gradient-text">
                      Heures par année
                    </div>
                  </div>
                  
                  <div className="glass-border p-4 card-3d">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="glass-border w-6 h-6 flex items-center justify-center bg-[#fdeaea]">
                        <DollarSign className="w-3.5 h-3.5 gradient-text-secondary" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold gradient-text-secondary">Économies annuelles</div>
                        <div className="text-[10px] text-[#d93c3d]">Projection sur 12 mois</div>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold gradient-text-secondary">
                        {formatCurrency(savings.annualSavings).split('.')[0]}
                      </span>
                      <span className="text-sm text-[#d93c3d]">FCFA/an</span>
                    </div>
                  </div>
                  
                  <div className="glass-border p-4 card-3d">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="glass-border w-6 h-6 flex items-center justify-center bg-[#f0f0f0]">
                        <TrendingUp className="w-3.5 h-3.5 text-[#1E1E1E]" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#2a2a2a]">ROI Net estimé</div>
                        <div className="text-[10px] text-[#363636]">Retour sur investissement</div>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-[#1E1E1E]">
                        {formatCurrency(savings.roiNet)}
                      </span>
                      <span className="text-sm text-[#363636]">annuel</span>
                    </div>
                    <div className="mt-2 text-xs text-[#2a2a2a]">
                      Rentable en <span className="font-bold">{savings.paybackPeriod} mois</span>
                    </div>
                  </div>
                </div>

                <div className="glass-border p-4">
                  <h3 className="text-sm font-bold gradient-text mb-3 flex items-center gap-1.5">
                    <div className="glass-border w-5 h-5 flex items-center justify-center bg-[#00929E]/10">
                      <BarChart3 className="w-2.5 h-2.5 text-[#00929E]" />
                    </div>
                    Visualisation des gains potentiels
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-medium text-gray-700">Taux d'automatisation réalisable</span>
                        <span className="font-bold gradient-text">{answers.taux}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#00929E] to-[#007a85] rounded-full transition-all duration-300 ease-out"
                          style={{ width: `${answers.taux as number}%` }}
                        >
                          <div className="absolute inset-0"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-medium text-gray-700">Retour sur investissement (ROI)</span>
                        <span className="font-bold gradient-text-secondary">{savings.roi}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#E44849] to-[#d93c3d] rounded-full transition-all duration-300 ease-out"
                          style={{ width: `${Math.min(savings.roi, 100)}%` }}
                        >
                          <div className="absolute inset-0"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'roi' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="glass-border p-4 card-3d">
                    <h4 className="text-xs font-bold gradient-text mb-3 flex items-center gap-1.5">
                      <Calculator className="w-3.5 h-3.5 text-[#00929E]" />
                      Coûts actuels
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 glass-effect rounded">
                        <span className="text-xs text-gray-600">Coût hebdomadaire actuel</span>
                        <span className="text-xs font-bold gradient-text">{formatCurrency(savings.weeklyCost)}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 glass-effect rounded">
                        <span className="text-xs text-gray-600">Coût annuel actuel</span>
                        <span className="text-xs font-bold gradient-text">{formatCurrency(savings.annualCost)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-border p-4 card-3d">
                    <h4 className="text-xs font-bold gradient-text-secondary mb-3 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#E44849]" />
                      Gains potentiels
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 glass-effect rounded">
                        <span className="text-xs text-gray-600">Économies hebdomadaires</span>
                        <span className="text-xs font-bold gradient-text-secondary">{formatCurrency(savings.weeklySavings)}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 glass-effect rounded">
                        <span className="text-xs text-gray-600">Économies mensuelles</span>
                        <span className="text-xs font-bold gradient-text-secondary">{formatCurrency(savings.monthlySavings)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-border p-4 card-3d">
                  <h4 className="text-xs font-bold text-[#1E1E1E] mb-3 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-[#1E1E1E]" />
                    Analyse du retour sur investissement
                  </h4>
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="text-center p-3 glass-effect rounded">
                        <div className="text-lg font-bold gradient-text mb-1">{savings.paybackPeriod}</div>
                        <div className="text-xs text-gray-600">Mois pour ROI positif</div>
                      </div>
                      <div className="text-center p-3 glass-effect rounded">
                        <div className="text-lg font-bold gradient-text mb-1">{formatCurrency(savings.implementationCost).split(' ')[0]}</div>
                        <div className="text-xs text-gray-600">Investissement initial</div>
                      </div>
                      <div className="text-center p-3 glass-effect rounded">
                        <div className="text-lg font-bold gradient-text mb-1">{Math.round(savings.roi / savings.paybackPeriod)}%</div>
                        <div className="text-xs text-gray-600">ROI mensuel moyen</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="space-y-4">
                <div className="glass-border p-4 card-3d">
                  <h4 className="text-xs font-bold gradient-text mb-3 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#00929E]" />
                    Plan d'implémentation recommandé
                  </h4>
                  <div className="space-y-3">
                    {[
                      { 
                        phase: 'Phase 1 - Audit', 
                        duration: '2 semaines', 
                        tasks: ['Analyse des processus', 'Identification des priorités'],
                        color: 'bg-[#00929E]/10',
                        border: 'border-[#00929E]/20',
                        text: 'text-[#00929E]',
                        numberBg: 'bg-[#00929E]',
                        numberText: 'text-white',
                        dotColor: 'bg-[#00929E]'
                      },
                      { 
                        phase: 'Phase 2 - Développement', 
                        duration: '4 semaines', 
                        tasks: ['Création des automatisations', 'Tests unitaires'],
                        color: 'bg-[#E44849]/10',
                        border: 'border-[#E44849]/20',
                        text: 'text-[#E44849]',
                        numberBg: 'bg-[#E44849]',
                        numberText: 'text-white',
                        dotColor: 'bg-[#E44849]'
                      },
                      { 
                        phase: 'Phase 3 - Déploiement', 
                        duration: '3 semaines', 
                        tasks: ['Formation des équipes', 'Déploiement progressif'],
                        color: 'bg-[#1E1E1E]/10',
                        border: 'border-[#1E1E1E]/20',
                        text: 'text-[#1E1E1E]',
                        numberBg: 'bg-[#1E1E1E]',
                        numberText: 'text-white',
                        dotColor: 'bg-[#1E1E1E]'
                      },
                      { 
                        phase: 'Phase 4 - Optimisation', 
                        duration: '3 semaines', 
                        tasks: ['Surveillance des performances', 'Ajustements finaux'],
                        color: 'bg-[#10B981]/10',
                        border: 'border-[#10B981]/20',
                        text: 'text-[#10B981]',
                        numberBg: 'bg-[#10B981]',
                        numberText: 'text-white',
                        dotColor: 'bg-[#10B981]'
                      }
                    ].map((phase, index) => (
                      <div key={index} className="flex gap-2 p-3 glass-effect rounded-lg transition-all card-3d">
                        <div className="flex-shrink-0">
                          <div className={`glass-border w-6 h-6 flex items-center justify-center ${phase.numberBg}`}>
                            <span className={`text-xs font-bold ${phase.numberText}`}>{index + 1}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <h5 className={`text-xs font-bold ${phase.text}`}>{phase.phase}</h5>
                            <span className={`px-1.5 py-0.5 ${phase.color} ${phase.text} text-xs font-medium rounded`}>
                              {phase.duration}
                            </span>
                          </div>
                          <ul className="space-y-0.5">
                            {phase.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="flex items-center gap-1 text-xs text-gray-600">
                                <div className={`w-1.5 h-1.5 ${phase.dotColor} rounded-full`}></div>
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="glass-border p-4 card-3d">
                    <h5 className="text-xs font-bold gradient-text mb-2 flex items-center gap-1.5">
                      <Shield className="w-3 h-3 text-[#00929E]" />
                      Ressources nécessaires
                    </h5>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1 text-xs text-gray-600">
                        <Check className="w-3 h-3 text-[#00929E]" />
                        1 développeur à temps partiel
                      </li>
                      <li className="flex items-center gap-1 text-xs text-gray-600">
                        <Check className="w-3 h-3 text-[#00929E]" />
                        Outils d'automatisation (existants)
                      </li>
                      <li className="flex items-center gap-1 text-xs text-gray-600">
                        <Check className="w-3 h-3 text-[#00929E]" />
                        Budget initial : {formatCurrency(savings.implementationCost)}
                      </li>
                    </ul>
                  </div>
                  
                  <div className="glass-border p-4 card-3d">
                    <h5 className="text-xs font-bold gradient-text-secondary mb-2 flex items-center gap-1.5">
                      <Target className="w-3 h-3 text-[#E44849]" />
                      Objectifs clés
                    </h5>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#E44849] rounded-full"></div>
                        ROI positif en {savings.paybackPeriod} mois
                      </li>
                      <li className="flex items-center gap-1 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#E44849] rounded-full"></div>
                        {savings.automatableHours}h automatisées/semaine
                      </li>
                      <li className="flex items-center gap-1 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#E44849] rounded-full"></div>
                        Productivité augmentée de {savings.productivityRate}%
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2 justify-between pt-4 border-t border-white/20">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={onClose}
                  className="glass-effect px-2 py-1 text-xs font-medium text-[#1E1E1E] rounded-lg transition-all btn-3d"
                >
                  Fermer
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setAlertType('download');
                    setShowAlert(true);
                  }}
                  disabled={emailSending || emailSent}
                  className={`px-2 py-1 text-xs font-medium text-white rounded-lg transition-all flex items-center gap-1 btn-3d ${
                    emailSending 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : emailSent 
                        ? 'bg-green-500' 
                        : 'bg-gradient-to-r from-[#E44849] to-[#d93c3d] hover:opacity-90 animate-glow'
                  }`}
                >
                  {emailSent ? (
                    <>
                      <Check className="w-3 h-3" />
                      Envoyé !
                    </>
                  ) : (
                    <>
                      <FileDown className="w-3 h-3" />
                      Obtenir le rapport en PDF
                      {companyInfo && (
                        <span className="ml-1 px-1 py-0.5 bg-white/20 rounded text-[10px]">
                          ✓
                        </span>
                      )}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompanyInfoModal
        isOpen={showCompanyInfoModal}
        onClose={() => setShowCompanyInfoModal(false)}
        onSubmit={handleSendCompanyInfo}
        isLoading={isDownloading}
        defaultInfo={companyInfo}
      />

      <AlertDialog
        open={showAlert}
        onOpenChange={(open) => {
          setShowAlert(open);
          if (!open) {
            setEmailSent(false);
                }
        }}
        title={emailSent ? "Rapport envoyé !" : "Générer le rapport"}
        description="Pour obtenir votre rapport par mail vous devez entrez les informations de votre entreprise"
        onConfirm={() => {
          setShowCompanyInfoModal(true)
          setAlertType('download');
          setShowAlert(false);
        }}
        confirmText={emailSent ? "Compris" : "Saisir les informations"}
        cancelText={emailSent ? "Fermer" : "Annuler"}
        isLoading={emailSending}
        success={emailSent}
      />
    </>
  );
};
function navigateToHome() {
  throw new Error("Function not implemented.");
}

