import { Building, X, User, Mail, Phone, MapPin, Shield, Send, FileText, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { CompanyInfoModalProps, CompanyInfo, AlertDialogProps, QuestionAnswer } from "@/types/formTypes";

export const CompanyInfoModal: React.FC<CompanyInfoModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  defaultInfo
}) => {
  const [formData, setFormData] = useState<CompanyInfo>({
    companyName: '',
    nomCompletPerson: '',
    email: '',
    phone: '',
    address: '',
    position: ''
  });

  useEffect(() => {
    if (isOpen) {
      if (defaultInfo) {
        setFormData(defaultInfo);
      } else {
        // Réinitialiser le formulaire
        setFormData({
          companyName: '',
          nomCompletPerson: '',
          email: '',
          phone: '',
          address: '',
          position: ''
        });
      }
    }
  }, [isOpen, defaultInfo]);

  const handleSubmit = async () => {
    if (!formData.companyName.trim()) {
      alert('Veuillez saisir le nom de l\'entreprise');
      return;
    }
    if (!formData.nomCompletPerson.trim()) {
      alert('Veuillez saisir le nom complet');
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Veuillez saisir une adresse email valide');
      return;
    }
    
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[100] backdrop-blur-sm">
      <div className="glass-border w-full max-w-md animate-fade-in">
        <div className="bg-gradient-to-r from-[#00929E] to-[#007a85] text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="glass-effect w-8 h-8 flex items-center justify-center bg-white/10">
                <Building className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold">Informations de l'entreprise</h2>
                <p className="text-xs text-white/80">Ces informations apparaîtront sur le rapport</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-lg transition-all duration-300 btn-3d"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="space-y-2">
            <div>
              <label className="block text-xs font-medium text-[#1E1E1E] mb-1">
                <Building className="inline w-3 h-3 mr-1 text-[#00929E]" />
                Nom de l'entreprise *
              </label>
              <div className="glass-border">
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  placeholder="Entreprise SARL"
                  className="w-full px-3 py-2 text-xs bg-transparent focus:outline-none placeholder-gray-400"
                  maxLength={100}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-medium text-[#1E1E1E] mb-1">
                  <User className="inline w-3 h-3 mr-1 text-[#00929E]" />
                  Nom complet *
                </label>
                <div className="glass-border">
                  <input
                    type="text"
                    value={formData.nomCompletPerson}
                    onChange={(e) => setFormData(prev => ({ ...prev, nomCompletPerson: e.target.value }))}
                    placeholder="Prénom Nom"
                    className="w-full px-3 py-2 text-xs bg-transparent focus:outline-none placeholder-gray-400"
                    maxLength={50}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#1E1E1E] mb-1">
                  <Mail className="inline w-3 h-3 mr-1 text-[#00929E]" />
                  Email *
                </label>
                <div className="glass-border">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="contact@entreprise.com"
                    className="w-full px-3 py-2 text-xs bg-transparent focus:outline-none placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#1E1E1E] mb-1">
                <Phone className="inline w-3 h-3 mr-1 text-[#00929E]" />
                Téléphone
              </label>
              <div className="glass-border">
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+225 XX XX XX XX"
                  className="w-full px-3 py-2 text-xs bg-transparent focus:outline-none placeholder-gray-400"
                  maxLength={20}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#1E1E1E] mb-1">
                <MapPin className="inline w-3 h-3 mr-1 text-[#00929E]" />
                Adresse
              </label>
              <div className="glass-border">
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="Adresse de l'entreprise"
                  className="w-full px-3 py-2 text-xs bg-transparent focus:outline-none placeholder-gray-400"
                  maxLength={200}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#1E1E1E] mb-1">
                <User className="inline w-3 h-3 mr-1 text-[#00929E]" />
                Poste / Fonction
              </label>
              <div className="glass-border">
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                  placeholder="Directeur, Responsable, etc."
                  className="w-full px-3 py-2 text-xs bg-transparent focus:outline-none placeholder-gray-400"
                  maxLength={50}
                />
              </div>
            </div>
          </div>

          <div className="glass-effect-primary rounded-lg p-2">
            <div className="flex items-center gap-1.5 text-xs gradient-text">
              <Shield className="w-3 h-3" />
              <span className="font-medium">Confidentialité</span>
            </div>
            <p className="text-xs text-[#007a85] mt-0.5">
              Ces informations sont uniquement utilisées pour personnaliser votre rapport.
              Elles ne sont pas sauvegardées sur nos serveurs.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 p-3 bg-gradient-to-r from-white/50 to-[#e6f7f9]/30">
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="glass-effect px-3 py-1.5 text-xs font-medium text-[#1E1E1E] rounded-lg transition-colors btn-3d"
            >
              Annuler
            </button>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-[#00929E] to-[#007a85] 
                hover:opacity-90 rounded-lg transition-colors flex items-center gap-1.5 disabled:opacity-50 btn-3d"
            >
              {isLoading ? (
                <>
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-rotate"></div>
                  Génération...
                </>
              ) : (
                <>
                  <Send className="w-3 h-3" />
                  Recevoir le PDF
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AlertDialog: React.FC<AlertDialogProps> = ({
  open,
  onOpenChange,
  title,
  description,
  onConfirm,
  onEnterCompanyInfo,
  confirmText = "Confirmer",
  cancelText = "Annuler",
  isLoading = false,
  success = false,
  companyInfo
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[100] backdrop-blur-sm">
      <div className="glass-border w-full max-w-sm p-4 space-y-3 animate-fade-in">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-gradient-to-br from-[#e6f7f9] to-white rounded-lg border border-[#00929E]/20">
            <FileText className="w-4 h-4 text-[#00929E]" />
          </div>
          <div>
            <h3 className="text-sm font-bold gradient-text">{title}</h3>
            <p className="text-xs text-gray-600 mt-0.5">{description}</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 pt-2">          
          <div className="flex gap-2">
            <button
              onClick={() => onOpenChange(false)}
              className="glass-effect px-3 py-1.5 text-xs font-medium text-[#1E1E1E] rounded-lg transition-colors btn-3d flex-1"
              disabled={isLoading}
            >
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className={`glass-effect px-3 py-1.5 text-xs font-medium text-[#1E1E1E] rounded-lg transition-colors btn-3d flex-1`}
            >
              {isLoading ? (
                <>
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-rotate"></div>
                  Génération...
                </>
              ) : success ? (
                <>
                  <Check className="w-3 h-3" />
                  Téléchargé !
                </>
              ) : (
                confirmText
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export function calculateSavings (answers?: Record<string, QuestionAnswer>) {
    const hoursPerWeek = answers.volume as number || 10;
    const costPerHour = answers.cout as number || 35;
    const automationRate = answers.taux as number || 70;
    const MULTIPLICATEUR_COUT_IMPL = 0.15;

    const annualHours = hoursPerWeek * 52;
    const automatableHours = annualHours * automationRate/100;
    const annualCost = annualHours * costPerHour;
    const weeklyCost = hoursPerWeek * costPerHour;
    const annualSavings = automatableHours * costPerHour;
    const implementationCost = annualCost * MULTIPLICATEUR_COUT_IMPL;
    const roiNet = annualSavings - implementationCost
    const weeklySavings = annualSavings / 52;
    
    const roi = ((roiNet) / implementationCost) * 100;
    const paybackPeriod = implementationCost / (annualSavings / 12);
    const etpLibere = automatableHours / annualHours;

    const productivityRate = ((annualHours - automatableHours) / annualHours) *100
    return {
      hoursPerWeek: hoursPerWeek,
      costPerHour: costPerHour,
      automationRate: automationRate,
      weeklyCost: Math.round(weeklyCost),
      annualCost: Math.round(annualCost),
      automatableHours: Math.round(automatableHours),
      weeklySavings: Math.round(weeklySavings),
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi),
      roiNet: Math.round(roiNet),
      paybackPeriod: Math.round(paybackPeriod),
      monthlySavings: Math.round(weeklySavings * 4.33),
      implementationCost: Math.round(implementationCost),
      etpLibere: Math.round(etpLibere),
      productivityRate: Math.round(productivityRate)
    };
};