/* eslint-disable react-hooks/exhaustive-deps */
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { 
  AlertCircle,
  Send,
  ArrowRight,
  BarChart3,
  Building, 
  Calculator,
  Calendar,
  Check,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cloud,
  DollarSign,
  Download,
  Eye,
  FileDigit,
  FileDown,
  FileText,
  Folder,
  HelpCircle,
  History,
  Home,
  Mail,
  MapPin,
  Percent,
  PieChart,
  Save,
  Shield,
  Sparkles,
  Target,
  Trash2,
  TrendingUp,
  User,
  X,
  Zap,
  Phone
} from "lucide-react";
import React, { useEffect, useState } from 'react';
import logoPng from '@/assets/logo.svg';
import { DetailedAnalysis } from './AnalyseDetailee';
import { calculateSavings as calculateSavingsUtil, type QuestionAnswer } from '@/types/formTypes';

// Utilitaire : charger une image (URL) et la convertir en data-URI (base64)
async function getImageDataUrl(url: string): Promise<string> {
  return await new Promise<string>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject(new Error('Canvas context not available'));
        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        resolve(dataUrl);
      } catch (err) {
        reject(err);
      }
    };
    img.onerror = (ev) => reject(new Error('Failed to load image for logo'));
    img.src = url;
  });
}

declare module 'jspdf' {
  interface jsPDF {
    lastAutoTable?: {
      finalY: number;
    };
  }
}

type Question = {
  id: string;
  titre: string;
  libelle: string;
  type: string;
  helper: string;
  placeholder?: string;
  plage?: number[];
  defaultValue?: QuestionAnswer;
  required?: boolean;
  step: number;
  isAdvanced?: boolean;
  note?: string;
};

interface QuestionProps {
  question: Question;
  onAnswerChange?: (answer: QuestionAnswer) => void;
  currentAnswer?: QuestionAnswer;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
}

// Nouvelle interface pour les informations de l'entreprise
export interface CompanyInfo {
  companyName: string;
  nomCompletPerson: string;
  email: string;
  phone: string;
  address: string;
  position: string;
}

export interface AlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  onConfirm: () => void;
  onEnterCompanyInfo?: () => void;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
  success?: boolean;
  companyInfo?: CompanyInfo;
}

// Nouveau composant pour les informations de l'entreprise
export interface CompanyInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (info: CompanyInfo) => Promise<void>;
  isLoading: boolean;
  defaultInfo?: CompanyInfo;
}

// Styles CSS globaux
const GlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-3px); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(5px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      
      @keyframes glow {
        0%, 100% { }
        50% { }
      }
      
      @keyframes border-glow {
        0%, 100% { border-color: rgba(0, 146, 158, 0.3); }
        50% { border-color: rgba(0, 146, 158, 0.6); }
      }
      
      @keyframes slide-in {
        from { transform: translateX(-20px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      .animate-float { animation: float 3s ease-in-out infinite; }
      .animate-pulse { animation: pulse 2s ease-in-out infinite; }
      .animate-fade-in { animation: fade-in 0.3s ease-out; }
      .animate-shimmer { 
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        background-size: 200% auto;
        animation: shimmer 2s infinite linear;
      }
      .animate-glow { animation: glow 3s ease-in-out infinite; }
      .animate-border-glow { animation: border-glow 2s ease-in-out infinite; }
      .animate-slide-in { animation: slide-in 0.3s ease-out; }
      .animate-rotate { animation: rotate 1s linear infinite; }
      
      /* Effet 3D Glass Morphism */
      .glass-effect {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.18);
      }
      
      .glass-effect-primary {
        background: linear-gradient(135deg, rgba(0, 146, 158, 0.15), rgba(0, 146, 158, 0.05));
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 146, 158, 0.2);
      }
      
      .glass-border {
        position: relative;
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
      
      .glass-border::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 12px;
        padding: 2px;
        background: linear-gradient(135deg, #00929E, #007a85, #e6f7f9, #00929E);
        -webkit-mask: 
          linear-gradient(#fff 0 0) content-box, 
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
        z-index: 1;
      }
      
      .glass-border-hover:hover::before {
        background: linear-gradient(135deg, #00929E, #00a8b5, #007a85, #00929E);
        animation: border-glow 2s ease-in-out infinite;
      }
      
      /* Effet de profondeur 3D */
      .depth-3d {
        transform-style: preserve-3d;
        perspective: 1000px;
      }
      
      .depth-3d-inner {
        transform: translateZ(20px);
      }
      
      /* Button 3D effect */
      .btn-3d {
        position: relative;
        transition: all 0.3s ease;
        transform-style: preserve-3d;
        overflow: hidden;
      }
      
      .btn-3d:active {
        transform: translateY(2px);
      }
      
      .btn-3d::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: inherit;
        background: linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%);
        z-index: 1;
      }
      
      /* Effet de carte 3D */
      .card-3d {
        transform-style: preserve-3d;
        transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      }
      
      .card-3d:hover {
        transform: translateY(-5px) rotateX(5deg);
      }
      
      /* Gradient text */
      .gradient-text {
        background: linear-gradient(135deg, #00929E, #007a85, #00454a);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .gradient-text-secondary {
        background: linear-gradient(135deg, #E44849, #d93c3d, #a32627);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      /* Custom scrollbar */
      .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(0, 146, 158, 0.1);
        border-radius: 10px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #00929E, #007a85);
        border-radius: 10px;
      }
      
      /* Background patterns */
      .bg-grid-pattern {
        background-image: 
          linear-gradient(to right, rgba(0, 146, 158, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 146, 158, 0.05) 1px, transparent 1px);
        background-size: 20px 20px;
      }
      
      /* Floating particles */
      @keyframes float-particle {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(10px, -10px) rotate(90deg); }
        50% { transform: translate(0, -20px) rotate(180deg); }
        75% { transform: translate(-10px, -10px) rotate(270deg); }
      }
      
      .floating-particle {
        animation: float-particle 20s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return null;
};

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

const QuestionComponent: React.FC<QuestionProps> = ({ 
  question, 
  onAnswerChange, 
  currentAnswer,
  currentStep,
  totalSteps,
  onNext,
  onPrev
}) => {
  const {
    id,
    libelle,
    type,
    helper,
    placeholder = "",
    plage = [],
    defaultValue,
    required = false,
    step: questionStep,
    note
  } = question;

  const [inputValue, setInputValue] = useState<QuestionAnswer>(currentAnswer !== undefined ? currentAnswer : defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [weeklyHours, setWeeklyHours] = useState<number>(inputValue as number || 10);
  const [isDragging, setIsDragging] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0.3);
  const [rippleEffect, setRippleEffect] = useState<{x: number, y: number, active: boolean}>({x: 0, y: 0, active: false});

  useEffect(() => {
    const initialValue = currentAnswer !== undefined ? currentAnswer : defaultValue;
    setInputValue(initialValue);
    setWeeklyHours(initialValue as number || 10);
    
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('fr-FR', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      });
      setCurrentTime(timeStr);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, [currentAnswer, defaultValue, currentStep]);

  const handleChange = (value: QuestionAnswer) => {
    setInputValue(value);
    setWeeklyHours(value as number);
    
    if (onAnswerChange) {
      onAnswerChange(value);
    }
    
    setGlowIntensity(1);
    setTimeout(() => setGlowIntensity(0.3), 300);
    
    setIsValid(checkValidity(value));
  };

  const checkValidity = (value: QuestionAnswer): boolean => {
    if (required && (value === undefined || value === null || value === '')) {
      return false;
    }
    if (type === 'number' && typeof value === 'number') {
      return value >= 0;
    }
    return true;
  };

  const getStepColor = (stepNumber: number) => {
    switch (stepNumber) {
      case 1: return { 
        text: 'text-[#00929E]', 
        border: 'border-[#00929E]/20', 
        light: 'bg-gradient-to-br from-[#e6f7f9] to-white',
        icon: 'text-[#00929E]',
        dark: 'bg-[#00929E]',
        gradient: 'from-[#00929E] to-[#007a85]',
        particleColor: '#00929E'
      };
      case 2: return { 
        text: 'text-[#E44849]', 
        border: 'border-[#E44849]/20', 
        light: 'bg-gradient-to-br from-[#fdeaea] to-white',
        icon: 'text-[#E44849]',
        dark: 'bg-[#E44849]',
        gradient: 'from-[#E44849] to-[#d93c3d]',
        particleColor: '#E44849'
      };
      case 3: return { 
        text: 'text-[#1E1E1E]', 
        border: 'border-[#1E1E1E]/20', 
        light: 'bg-gradient-to-br from-[#f0f0f0] to-white',
        icon: 'text-[#1E1E1E]',
        dark: 'bg-[#1E1E1E]',
        gradient: 'from-[#1E1E1E] to-[#2a2a2a]',
        particleColor: '#1E1E1E'
      };
      default: return { 
        text: 'text-[#1E1E1E]', 
        border: 'border-gray-300/50', 
        light: 'bg-gray-100',
        icon: 'text-[#1E1E1E]',
        dark: 'bg-[#00929E]',
        gradient: 'from-[#00929E] to-[#007a85]',
        particleColor: '#00929E'
      };
    }
  };

  const currentStepColors = getStepColor(currentStep);

  const renderInputField = () => {
    switch (type) {
      case 'slider': {
        const min = plage[0] || 0;
        const max = plage[1] || 100;
        const stepSize = id === 'volume' ? 1 : 1;
        const percentage = ((weeklyHours - min) / (max - min)) * 100;
        
        return (
          <div className="space-y-6">
            <div className="glass-border p-4 card-3d">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00929E] to-[#007a85] animate-pulse"></div>
                    </div>
                    <div className="text-xs font-bold gradient-text uppercase tracking-[0.1em]">
                      HEURES PAR SEMAINE
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00929E] to-[#007a85] rounded-full animate-pulse"></div>
                    <span className="text-xs font-mono font-medium text-gray-500">
                      {currentTime}
                    </span>
                  </div>
                </div>
                
                
                <div className="text-center mb-4 relative">
                  <div className="relative w-full">
                    <div className="flex flex-col items-center gap-2 w-full">
                      <div className="relative flex items-center justify-center gap-4 w-full">
                        <button 
                          type="button"
                          onClick={() => {
                            const newValue = Math.max(min, (inputValue as number) - stepSize);
                            handleChange(newValue);
                          }}
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00929E]"
                          aria-label="Diminuer"
                        >
                          <span className="text-xl font-bold text-gray-700">-</span>
                        </button>
                        
                        <div className="text-2xl md:text-3xl font-black gradient-text animate-float min-w-[60px] text-center">
                          {inputValue as number || defaultValue} {id === 'volume' ? 'h' : '%'}
                        </div>
                        
                        <button 
                          type="button"
                          onClick={() => {
                            const newValue = Math.min(max, (inputValue as number) + stepSize);
                            handleChange(newValue);
                          }}
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00929E]"
                          aria-label="Augmenter"
                        >
                          <span className="text-xl font-bold text-gray-700">+</span>
                        </button>
                      </div>
                      
                      {/* <div className="relative">
                        <div className="inline-flex flex-col items-center gap-2">
                          <div className="relative">
                            <div className="text-2xl font-black gradient-text animate-float">
                              {inputValue as number || defaultValue} {id === 'volume' ? 'h' : '%'}
                            </div>
                          </div>
                          
                          
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative px-2">
              <div className="glass-border p-4 rounded-2xl">
                <div className="relative h-2 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 via-gray-300/50 to-gray-200/50 rounded-full"></div>
                  
                  <div 
                    className="absolute h-full bg-gradient-to-r from-[#00929E] via-[#00a8b5] to-[#007a85] rounded-full transition-all duration-300 ease-out overflow-hidden"
                    style={{ width: `${percentage}%` }}
                  >
                    <div className="absolute inset-0 animate-shimmer"></div>
                  </div>
                  
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing transform transition-transform duration-200"
                    style={{ 
                      left: `${percentage}%`,
                      marginLeft: '-12px'
                    }}
                    onMouseDown={(e) => {
                      setIsDragging(true);
                      const slider = e.currentTarget.parentElement?.parentElement;
                      if (!slider) return;
                      
                      const startX = e.clientX;
                      const startValue = weeklyHours;
                      const sliderRect = slider.getBoundingClientRect();
                      const pixelToValue = (max - min) / sliderRect.width;
                      
                      setRippleEffect({
                        x: e.clientX - sliderRect.left,
                        y: e.clientY - sliderRect.top,
                        active: true
                      });
                      
                      const handleMouseMove = (moveEvent: MouseEvent) => {
                        const deltaX = moveEvent.clientX - startX;
                        const deltaValue = deltaX * pixelToValue;
                        const newValue = Math.max(min, Math.min(max, Math.round(startValue + deltaValue)));
                        handleChange(newValue);
                      };
                      
                      const handleMouseUp = () => {
                        setIsDragging(false);
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                      };
                      
                      document.addEventListener('mousemove', handleMouseMove);
                      document.addEventListener('mouseup', handleMouseUp);
                    }}
                    onMouseEnter={() => setGlowIntensity(0.6)}
                    onMouseLeave={() => setGlowIntensity(0.3)}
                  >
                    <div className="relative">
                      <div className="relative w-5 h-5 rounded-full bg-gradient-to-br from-white to-gray-100 border-2 border-[#00929E]">
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-[#00929E] to-[#007a85] animate-pulse">
                          <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white to-white/80"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-5 mt-2">
                    {[min, Math.round((min + max) / 2), max].map((value, index) => {
                      const isActive = Math.abs(weeklyHours - value) < 5;
                      return (
                        <div
                          key={value}
                          className="absolute top-0 transform -translate-x-1/2"
                          style={{
                            left: `${((value - min) / (max - min)) * 100}%`,
                          }}
                        >
                          <div className="flex flex-col items-center">
                            <div className="relative mt-1">
                              <div 
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  isActive 
                                    ? 'bg-gradient-to-br from-[#00929E] to-[#007a85] scale-125' 
                                    : 'bg-gray-400'
                                }`}
                              >
                              </div>
                            </div>
                            
                            <span 
                              className={`text-xs mt-1 transition-all duration-300 ${
                                isActive 
                                  ? 'text-[#00929E] font-bold' 
                                  : 'text-gray-500'
                              }`}
                            >
                              {value}{id === 'volume' ? 'h' : '%'}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      case 'number': {
        return (
          <div className="space-y-3">
            <div className="relative">
              <div className="glass-border">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="flex items-center gap-2">
                      <div className={`text-xs font-bold ${currentStepColors.text} transition-all duration-300 ${isFocused ? 'scale-110' : ''}`}>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#00929E] to-[#007a85] animate-pulse"></div>
                          <span>FCFA</span>
                        </div>
                      </div>
                      <div className="w-px h-3 bg-gradient-to-b from-gray-300/60 to-transparent"></div>
                    </div>
                  </div>
                  <input
                    type="number"
                    placeholder={placeholder || "Exemple : Le coût horaire est environ 35 FCFA"}
                    className={`
                      w-full pl-16 pr-10 py-3 text-xs bg-transparent focus:outline-none 
                      transition-all duration-300 placeholder-gray-400
                      ${!isValid ? 'border-[#E44849]' : ''}
                    `}
                    min="0"
                    step="0.5"
                    value={inputValue !== undefined && inputValue !== null ? inputValue.toString() : ''}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === '') {
                        handleChange('');
                      } else {
                        const numValue = parseFloat(value);
                        if (!isNaN(numValue)) {
                          handleChange(numValue);
                        }
                      }
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                </div>
              </div>
            </div>
            
            {isFocused && (
              <div className="glass-effect-primary rounded-lg p-3 animate-fade-in">
                <div className="flex items-center gap-2 text-xs gradient-text">
                  <div className="glass-border w-6 h-6 flex items-center justify-center bg-gradient-to-br from-[#00929E] to-[#007a85]">
                    <Calculator className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <span className="font-bold">Formule : Salaire brut chargé ÷ 1820 heures</span>
                    <div className="mt-0.5 text-xs text-[#007a85]">
                      Cette formule inclut tous les coûts salariaux
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      }

      default: {
        return (
          <div className="glass-border">
            <input
              type="text"
              placeholder={placeholder}
              className="w-full px-4 py-3 text-xs bg-transparent focus:outline-none 
                transition duration-300 placeholder-gray-400"
              value={typeof inputValue === 'string' ? inputValue : ''}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        );
      }
    }
  };

  const isAnswerValid = () => {
    return isValid;
  };

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-[#f8fdfe] to-[#e6f7f9] relative overflow-hidden depth-3d">
        <div className="absolute inset-0 overflow-hidden bg-grid-pattern">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#00929E]/10 to-[#007a85]/5 rounded-full blur-3xl animate-float floating-particle"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-[#e6f7f9]/20 to-transparent rounded-full blur-3xl animate-float floating-particle" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-bl from-[#E44849]/5 to-transparent rounded-full blur-3xl animate-float floating-particle" style={{animationDelay: '0.5s'}}></div>
        </div>

        <div className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
          <div className="glass-effect-primary">
            <div className="max-w-2xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="glass-border">
                      <div className="w-6 h-6 flex items-center justify-center bg-gradient-to-br from-[#00929E] to-[#007a85] rounded depth-3d-inner">
                        <Zap className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold gradient-text">
                      SENYONE<span className="text-[#00929E]">.</span>
                    </span>
                    <div className="text-[9px] text-gray-600 mt-0.5 font-medium tracking-wider">
                      AUTOMATION SOLUTIONS
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="glass-effect px-2.5 py-1 rounded text-[#1E1E1E] depth-3d-inner">
                      <span className="text-xs font-bold">
                        Question {currentStep}<span className="text-gray-500 font-normal">/{totalSteps}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(totalSteps)].map((_, i) => (
                      <div key={i} className="relative">
                        <div
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            i + 1 === currentStep
                              ? 'bg-gradient-to-br from-[#00929E] to-[#007a85] scale-125 animate-pulse'
                              : i + 1 < currentStep
                              ? 'bg-gradient-to-br from-[#00929E]/60 to-[#007a85]/60'
                              : 'bg-gray-300/50'
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 depth-3d">
          <div className="w-full max-w-2xl transform perspective-1000">
            <div className={`glass-border rounded-lg p-5 bg-white/90 backdrop-blur-sm transition-all duration-300 card-3d ${isFocused ? 'scale-[1.02]' : 'scale-100'} glass-border-hover`}>
              <div className="mb-6 depth-3d-inner">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="glass-border">
                        <div className={`w-3 h-3 rounded-full ${currentStepColors.dark} animate-pulse`}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="text-xs font-bold gradient-text">
                        Question {currentStep}
                      </div>
                      {required && (
                        <span className="relative">
                          <span className="glass-effect px-1.5 py-0.5 text-[9px] font-bold gradient-text-secondary rounded depth-3d-inner">
                            REQUIS
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-xs font-medium text-gray-600 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#00929E] to-[#007a85] animate-pulse"></div>
                    <span>~2 min</span>
                  </div>
                </div>
                
                <h2 className="text-lg font-bold gradient-text leading-tight mb-3">
                  {id === 'taux' 
                    ? 'Définissez votre objectif d\'automatisation'
                    : id === 'volume'
                    ? 'Mesurez le temps consacré aux tâches répétitives'
                    : libelle
                  }
                </h2>
              </div>

              <div className="mb-6 depth-3d-inner">
                {renderInputField()}
              </div>

              <div className="relative rounded-lg p-4 glass-effect-primary depth-3d-inner card-3d">
                <div className="relative flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="glass-border">
                        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-white/80 to-[#e6f7f9]/50 rounded">
                          <HelpCircle className="w-4 h-4 text-[#00929E]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-sm font-bold gradient-text">
                        Conseil d'expert
                      </h3>
                    </div>
                    <p className="text-gray-700 text-xs leading-relaxed">
                      {helper}
                    </p>
                    {note && (
                      <div className="mt-2 p-2 text-xs gradient-text glass-effect rounded-lg">
                        <span className="font-bold text-[#1E1E1E]">Note :</span> {note}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 z-40">
          <div className="glass-effect border-t border-white/20">
            <div className="max-w-2xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between depth-3d-inner">
                <button
                  onClick={onPrev}
                  className="
                    btn-3d flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300
                    text-[#1E1E1E] hover:text-white glass-effect hover:bg-gradient-to-r hover:from-[#00929E] hover:to-[#007a85] 
                    border border-white/20 hover:border-transparent
                  "
                >
                  <ChevronLeft className="w-3 h-3 group-hover:-translate-x-0.5" />
                  <span className="font-semibold">{currentStep === 1? "Acceuil" : "Précédent" } </span>
                </button>
                
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="glass-border">
                      <div className="w-8 h-8 flex items-center justify-center bg-white/80 rounded">
                        <div className="relative w-6 h-6">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="16" fill="none" stroke="url(#gradient)" strokeWidth="2" />
                            <circle 
                              cx="18" cy="18" r="16" 
                              fill="none" 
                              stroke="url(#progress-gradient)"
                              strokeWidth="2" 
                              strokeLinecap="round"
                              strokeDasharray={`${(currentStep / totalSteps) * 100}, 100`}
                              className="transition-all duration-300 ease-out"
                            />
                          </svg>
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#E5E7EB" />
                              <stop offset="100%" stopColor="#D1D5DB" />
                            </linearGradient>
                            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#00929E" />
                              <stop offset="100%" stopColor="#007a85" />
                            </linearGradient>
                          </defs>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold gradient-text">
                              {currentStep}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="glass-border btn-3d">
                      <button
                        onClick={onNext}
                        disabled={required && !isAnswerValid()}
                        className={`
                          flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all duration-300
                          hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
                          ${required && !isAnswerValid()
                            ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-500'
                            : `bg-gradient-to-r ${currentStepColors.gradient} text-white animate-glow`
                          }
                        `}
                      >
                        {currentStep === totalSteps ? (
                          <>
                            <Sparkles className="w-3 h-3" />
                            <span>DÉCOUVRIR LES RÉSULTATS</span>
                          </>
                        ) : (
                          <>
                            <span>SUIVANT</span>
                            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};





const ThreeQuestionCalculator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, QuestionAnswer>>({
    volume: 10,
    cout: 35,
    taux: 70
  });
  const [showResults, setShowResults] = useState(false);
  const [showDetailedAnalysis, setShowDetailedAnalysis] = useState(false);
  const [hasStarted, setHasStarted] = useState(false)  
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | undefined>(() => {
    const saved = localStorage.getItem('senyone_company_info');
    return saved ? JSON.parse(saved) : undefined;
  });

  const questions: Question[] = [
    {
      id: 'volume',
      titre: 'Volume de tâches répétitives',
      libelle: 'Combien d\'heures par semaine votre équipe consacre-t-elle aux tâches répétitives ?',
      type: 'slider',
      helper: 'Estimez le temps consacré aux tâches répétitives comme la saisie manuelle, le copier-coller, la validation de données, les rapports réguliers et autres processus automatisables.',
      plage: [1, 168],
      defaultValue: 10,
      required: true,
      step: 1
    },
    {
      id: 'cout',
      titre: 'Coût horaire moyen',
      libelle: 'Quel est le coût horaire moyen de votre équipe ?',
      type: 'number',
      helper: 'Pour calculer le coût réel, prenez en compte le salaire brut chargé (incluant les charges patronales) divisé par 1820 heures travaillées par an.',
      placeholder: 'Exemple : Le coût horaire est environ 35 FCFA',
      defaultValue: 35,
      required: true,
      step: 2
    },
    {
      id: 'taux',
      titre: 'Taux d\'automatisation estimé',
      libelle: 'Quel pourcentage de ces tâches peut être automatisé ?',
      type: 'slider',
      helper: 'Estimez la proportion de tâches répétitives qui peuvent être automatisées avec les solutions disponibles aujourd\'hui.',
      plage: [30, 90],
      defaultValue: 70,
      note: 'Basé sur des données réelles d\'entreprises similaires',
      isAdvanced: true,
      required: false,
      step: 3
    }
  ];

  const totalSteps = 3;
  const currentQuestion = questions.find(q => q.step === currentStep);

  const navigateToHome = () => {
    window.location.href = '/';
  };
  const generatePDF = async (customAnswers: Record<string, QuestionAnswer>, companyInfo?: CompanyInfo) => {
    const savings = calculateSavingsUtil(customAnswers);
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const colors = {
      primary: '#1E3A8A',    // Bleu foncé professionnel
      primaryLight: '#EFF6FF',
      primaryDark: '#1E40AF',
      secondary: '#F59E0B',  // Orange doré
      secondaryLight: '#FEF3C7',
      secondaryDark: '#D97706',
      accent: '#059669',     // Vert émeraude
      dark: '#111827',
      light: '#FFFFFF',
      gray: '#6B7280',
      grayLight: '#F9FAFB',
      grayBorder: '#E5E7EB',
      success: '#10B981',
      warning: '#F59E0B'
    };

    const currentDate = new Date();
    const dateStr = currentDate.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const timeStr = currentDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    
    // Propriétés du document (métadonnées)
    pdf.setProperties({
      title: `Rapport d'automatisation - ${companyInfo?.companyName || 'Entreprise'}`,
      subject: 'Évaluation du potentiel d\'automatisation et de ROI',
      author: 'SENYONE Automation Solutions',
      keywords: 'automatisation, optimisation, productivité, ROI, analyse, SENYONE',
      creator: 'SENYONE Analytics Platform'
    });

    // En-tête professionnel
    const headerHeight = 40;
    
    // Logo en haut à gauche
    try {
      const logoDataUri = await getImageDataUrl(logoPng);
      pdf.addImage(logoDataUri, 'PNG', 20, 15, 25, 0);
    } catch (e) {
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(parseInt(colors.primary.slice(1, 3), 16), 
                      parseInt(colors.primary.slice(3, 5), 16), 
                      parseInt(colors.primary.slice(5, 7), 16));
      pdf.text('SENYONE', 25, 22);
    }

    // Informations de l'entreprise à droite
    if (companyInfo) {
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(parseInt(colors.dark.slice(1, 3), 16), 
                      parseInt(colors.dark.slice(3, 5), 16), 
                      parseInt(colors.dark.slice(5, 7), 16));
      
      // Nom de l'entreprise
      pdf.setFont('helvetica', 'bold');
      const companyName = companyInfo.companyName;
      pdf.text(companyName, 190, 18, { align: 'right' });
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8);
      
      // Contact
      if (companyInfo.nomCompletPerson) {
        const nomCompletText = `NomComplet: ${companyInfo.nomCompletPerson}${companyInfo.position ? ` (${companyInfo.position})` : ''}`;
        pdf.text(nomCompletText, 190, 22, { align: 'right' });
      }
      
      // Email et téléphone
      const nomCompletLine = `${companyInfo.email}${companyInfo.phone ? ` • ${companyInfo.phone}` : ''}`;
      pdf.text(nomCompletLine, 190, 26, { align: 'right' });
      
      // Adresse
      if (companyInfo.address) {
        const addressLines = pdf.splitTextToSize(companyInfo.address, 50);
        addressLines.forEach((line: string, index: number) => {
          pdf.text(line, 190, 30 + (index * 3), { align: 'right' });
        });
      }
    }

    // Titre principal centré
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(parseInt(colors.dark.slice(1, 3), 16), 
                    parseInt(colors.dark.slice(3, 5), 16), 
                    parseInt(colors.dark.slice(5, 7), 16));
    
    const titleY = companyInfo ? 38 : 22;
    pdf.text('RAPPORT D\'ANALYSE D\'AUTOMATISATION', 105, titleY, { align: 'center' });
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Pour: ${companyInfo?.companyName || 'Votre entreprise'}`, 105, titleY + 6, { align: 'center' });

    // Date et référence
    pdf.setFontSize(9);
    pdf.setTextColor(parseInt(colors.gray.slice(1, 3), 16), 
                    parseInt(colors.gray.slice(3, 5), 16), 
                    parseInt(colors.gray.slice(5, 7), 16));
    
    const infoY = companyInfo ? 48 : 32;
    pdf.text('Réf: S607612', 20, infoY);
    pdf.text(`Émis le: ${dateStr} à ${timeStr}`, 20, infoY + 4);

    // Ligne de séparation
    const separatorY = infoY + 8;
    pdf.setDrawColor(parseInt(colors.primary.slice(1, 3), 16), 
                    parseInt(colors.primary.slice(3, 5), 16), 
                    parseInt(colors.primary.slice(5, 7), 16));
    pdf.setLineWidth(0.5);
    pdf.line(20, separatorY, 190, separatorY);
    
    // Début du contenu après l'en-tête
    let yPos = separatorY + 15;

    // Résumé exécutif
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(parseInt(colors.dark.slice(1, 3), 16), 
                    parseInt(colors.dark.slice(3, 5), 16), 
                    parseInt(colors.dark.slice(5, 7), 16));
    pdf.text('RÉSUMÉ EXÉCUTIF', 105, yPos, { align: 'center' });
    yPos += 5;

    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    const summaryText = companyInfo
      ? `Cette analyse démontre que l'automatisation des processus répétitifs pourrait générer des économies annuelles de ${savings.annualSavings.toLocaleString('fr-FR')} FCFA pour ${companyInfo.companyName}, avec un retour sur investissement de ${savings.roi}% et un délai de rentabilité de ${savings.paybackPeriod} mois.`
      : `Cette analyse démontre que l'automatisation des processus répétitifs pourrait générer des économies annuelles de ${savings.annualSavings.toLocaleString('fr-FR')} FCFA, avec un retour sur investissement de ${savings.roi}% et un délai de rentabilité de ${savings.paybackPeriod} mois.`;
    
    const summaryLines = pdf.splitTextToSize(summaryText, 150);
    summaryLines.forEach((line: string) => {
      pdf.text(line, 105, yPos, { align: 'center' });
      yPos += 5;
    });
    yPos += 10;

    // Vérifier si on doit créer une nouvelle page
    if (yPos > 250) {
      pdf.addPage();
      yPos = 20;
    }

    // Section 1: Données d'entrée avec fond coloré
    pdf.setFillColor(parseInt(colors.primaryLight.slice(1, 3), 16), 
                    parseInt(colors.primaryLight.slice(3, 5), 16), 
                    parseInt(colors.primaryLight.slice(5, 7), 16));
    pdf.roundedRect(20, yPos, 170, 8, 2, 2, 'F');
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(parseInt(colors.primaryDark.slice(1, 3), 16), 
                    parseInt(colors.primaryDark.slice(3, 5), 16), 
                    parseInt(colors.primaryDark.slice(5, 7), 16));
    pdf.text('1. DONNÉES D\'ENTRÉE', 25, yPos + 5.5);
    yPos += 15;

    const inputData = [
      ['Paramètre', 'Valeur', 'Unité', 'Description'],
      ['Volume horaire hebdomadaire', customAnswers.volume.toString(), 'heures', 'Tâches répétitives par semaine'],
      ['Coût horaire moyen', customAnswers.cout.toString(), 'FCFA/h', 'Coût incluant charges sociales'],
      ['Taux d\'automatisation estimé', customAnswers.taux.toString() + '%', '%', 'Potentiel d\'automatisation']
    ];

    // Tableau des données d'entrée avec style amélioré
    autoTable(pdf, {
      startY: yPos,
      margin: { left: 20, right: 20 },
      head: [inputData[0]],
      body: inputData.slice(1),
      theme: 'grid',
      styles: {
        fontSize: 10,
        cellPadding: 5,
        lineColor: [parseInt(colors.grayBorder.slice(1, 3), 16), 
                   parseInt(colors.grayBorder.slice(3, 5), 16), 
                   parseInt(colors.grayBorder.slice(5, 7), 16)],
        lineWidth: 0.1,
        halign: 'center'
      },
      headStyles: {
        fillColor: [parseInt(colors.primary.slice(1, 3), 16), 
                   parseInt(colors.primary.slice(3, 5), 16), 
                   parseInt(colors.primary.slice(5, 7), 16)],
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 10,
        cellPadding: 6
      },
      bodyStyles: {
        textColor: [parseInt(colors.dark.slice(1, 3), 16), 
                   parseInt(colors.dark.slice(3, 5), 16), 
                   parseInt(colors.dark.slice(5, 7), 16)]
      },
      alternateRowStyles: {
        fillColor: [parseInt(colors.grayLight.slice(1, 3), 16), 
                   parseInt(colors.grayLight.slice(3, 5), 16), 
                   parseInt(colors.grayLight.slice(5, 7), 16)]
      },
      columnStyles: {
        0: { 
          fontStyle: 'bold',
          cellWidth: 45,
          halign: 'left'
        },
        1: { 
          fontStyle: 'bold',
          textColor: [parseInt(colors.secondary.slice(1, 3), 16), 
                    parseInt(colors.secondary.slice(3, 5), 16), 
                    parseInt(colors.secondary.slice(5, 7), 16)],
          cellWidth: 30
        },
        2: {
          cellWidth: 25,
          textColor: [parseInt(colors.gray.slice(1, 3), 16), 
                    parseInt(colors.gray.slice(3, 5), 16), 
                    parseInt(colors.gray.slice(5, 7), 16)]
        },
        3: {
          cellWidth: 70,
          textColor: [parseInt(colors.gray.slice(1, 3), 16), 
                     parseInt(colors.gray.slice(3, 5), 16), 
                     parseInt(colors.gray.slice(5, 7), 16)],
          halign: 'left'
        }
      }
    });
      
    yPos = (pdf as any).lastAutoTable?.finalY || yPos;
    yPos += 20;

    // Vérifier si on doit créer une nouvelle page
    if (yPos > 250) {
      pdf.addPage();
      yPos = 20;
    }

    // Section 2: Résultats clés avec graphique visuel
    pdf.setFillColor(parseInt(colors.secondaryLight.slice(1, 3), 16), 
                    parseInt(colors.secondaryLight.slice(3, 5), 16), 
                    parseInt(colors.secondaryLight.slice(5, 7), 16));
    pdf.roundedRect(20, yPos, 170, 8, 2, 2, 'F');
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(parseInt(colors.secondary.slice(1, 3), 16), 
                    parseInt(colors.secondary.slice(3, 5), 16), 
                    parseInt(colors.secondary.slice(5, 7), 16));
    pdf.text('2. RÉSULTATS CLÉS', 25, yPos + 5.5);
    yPos += 15;

    // Métriques principales - CENTRÉES PARFAITEMENT
    const metrics = [
      {
        title: 'ÉCONOMIES ANNUELLES',
        value: savings.annualSavings.toLocaleString('fr-FR').replace(/\s/g, ''),
        unit: 'FCFA',
        color: colors.secondary,
        icon: '💰'
      },
      {
        title: 'TEMPS OPTIMISÉ',
        value: savings.automatableHours.toString(),
        unit: 'h/semaine',
        color: colors.primary,
        icon: '⏱️'
      },
      {
        title: 'RETOUR SUR INVESTISSEMENT',
        value: savings.roi.toString(),
        unit: '% annuel',
        color: colors.success,
        icon: '📈'
      },
      {
        title: 'DÉLAI DE RENTABILITÉ',
        value: savings.paybackPeriod.toString(),
        unit: 'mois',
        color: colors.warning,
        icon: '📅'
      }
    ];

    // Positionnement centré des 4 cartes (2x2) avec centrage parfait
    const cardWidth = 85;
    const cardHeight = 30;
    const horizontalGap = 10;
    const verticalGap = 10;

    // Calculer la position de départ pour centrer le groupe
    const totalWidth = (cardWidth * 2) + horizontalGap;
    const startX = 20 + (170 - totalWidth) / 2;

    for (let i = 0; i < metrics.length; i++) {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = startX + col * (cardWidth + horizontalGap);
      const currentY = yPos + row * (cardHeight + verticalGap);

      // Carte avec ombre légère
      pdf.setDrawColor(220, 220, 220);
      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(x, currentY, cardWidth, cardHeight, 3, 3, 'FD');
      
      // Bordure colorée en haut
      pdf.setFillColor(parseInt(metrics[i].color.slice(1, 3), 16), 
                      parseInt(metrics[i].color.slice(3, 5), 16), 
                      parseInt(metrics[i].color.slice(5, 7), 16));
      pdf.roundedRect(x, currentY, cardWidth, 5, 3, 3, 'F');

      // Titre - Centré PARFAITEMENT avec ligne de séparation
      pdf.setFontSize(7);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(parseInt(colors.dark.slice(1, 3), 16), 
                      parseInt(colors.dark.slice(3, 5), 16), 
                      parseInt(colors.dark.slice(5, 7), 16));
      
      // Diviser le titre en plusieurs lignes si nécessaire
      const title = metrics[i].title;
      const maxCharsPerLine = 20;
      let titleLines: string[] = [];
      
      if (title.length <= maxCharsPerLine) {
        titleLines = [title];
      } else {
        // Diviser les titres longs en deux lignes
        const words = title.split(' ');
        let line1 = '';
        let line2 = '';
        
        for (const word of words) {
          if ((line1 + word).length <= maxCharsPerLine && !line2) {
            line1 += (line1 ? ' ' : '') + word;
          } else {
            line2 += (line2 ? ' ' : '') + word;
          }
        }
        
        titleLines = [line1, line2];
      }
      
      // Ajuster la position Y en fonction du nombre de lignes
      let titleY = currentY + 8;
      if (titleLines.length === 1) {
        titleY = currentY + 10;
      }
      
      // Dessiner chaque ligne du titre
      titleLines.forEach((line, lineIndex) => {
        const lineY = titleY + (lineIndex * 3.5);
        pdf.text(line, x + (cardWidth / 2), lineY, { align: 'center' });
      });

      // Ligne de séparation sous le titre
      pdf.setDrawColor(220, 220, 220);
      pdf.setLineWidth(0.1);
      const separatorY = currentY + (titleLines.length === 1 ? 15 : 18);
      pdf.line(x + 10, separatorY, x + cardWidth - 10, separatorY);

      // Valeur - Centrée PARFAITEMENT
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(parseInt(metrics[i].color.slice(1, 3), 16), 
                      parseInt(metrics[i].color.slice(3, 5), 16), 
                      parseInt(metrics[i].color.slice(5, 7), 16));
      
      const valueText = metrics[i].value;
      const unitText = metrics[i].unit;
      
      // Calculer la largeur totale du texte (valeur + unité)
      pdf.setFontSize(14);
      const valueWidth = pdf.getTextWidth(valueText);
      pdf.setFontSize(8);
      const unitWidth = unitText ? pdf.getTextWidth(` ${unitText}`) : 0;
      const totalTextWidth = valueWidth + unitWidth;
      
      // Position de départ pour centrer
      const textStartX = x + (cardWidth - totalTextWidth) / 2;
      const valueY = separatorY + 10;
      
      // Dessiner la valeur
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(parseInt(metrics[i].color.slice(1, 3), 16), 
                      parseInt(metrics[i].color.slice(3, 5), 16), 
                      parseInt(metrics[i].color.slice(5, 7), 16));
      pdf.text(valueText, textStartX, valueY);
      
      // Dessiner l'unité si elle existe
      if (unitText) {
        pdf.setFontSize(8);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(parseInt(colors.gray.slice(1, 3), 16), 
                        parseInt(colors.gray.slice(3, 5), 16), 
                        parseInt(colors.gray.slice(5, 7), 16));
        pdf.text(` ${unitText}`, textStartX + valueWidth, valueY);
      }
      
      // Réinitialiser la taille de police
      pdf.setFontSize(8);
    }

    yPos += 75; // Ajustement après les cartes

    // Vérifier si on doit créer une nouvelle page
    if (yPos > 250) {
      pdf.addPage();
      yPos = 20;
    }

    // Section 3: Analyse détaillée
    pdf.setFillColor(parseInt(colors.grayLight.slice(1, 3), 16), 
                    parseInt(colors.grayLight.slice(3, 5), 16), 
                    parseInt(colors.grayLight.slice(5, 7), 16));
    pdf.roundedRect(20, yPos, 170, 8, 2, 2, 'F');
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(parseInt(colors.dark.slice(1, 3), 16), 
                    parseInt(colors.dark.slice(3, 5), 16), 
                    parseInt(colors.dark.slice(5, 7), 16));
    pdf.text('3. ANALYSE DÉTAILLÉE', 25, yPos + 5.5);
    yPos += 15;

    const detailedAnalysis = [
      ['Description', 'Hebdomadaire', 'Mensuel', 'Annuel'],
      ['Coût actuel', 
       `${savings.weeklyCost.toLocaleString('fr-FR')} FCFA`, 
       `${Math.round(savings.weeklyCost * 4.33).toLocaleString('fr-FR')} FCFA`, 
       `${savings.annualCost.toLocaleString('fr-FR')} FCFA`],
      ['Économies potentielles', 
       `${savings.weeklySavings.toLocaleString('fr-FR')} FCFA`, 
       `${savings.monthlySavings.toLocaleString('fr-FR')} FCFA`, 
       `${savings.annualSavings.toLocaleString('fr-FR')} FCFA`],
      ['Gain de productivité', 
       `${savings.automatableHours} heures`, 
       `${Math.round(savings.automatableHours * 4.33)} heures`, 
       `${Math.round(savings.automatableHours * 52)} heures`]
    ];

    autoTable(pdf, {
      startY: yPos,
      margin: { left: 20, right: 20 },
      head: [detailedAnalysis[0]],
      body: detailedAnalysis.slice(1),
      theme: 'grid',
      styles: {
        fontSize: 9,
        cellPadding: 5,
        lineColor: [parseInt(colors.grayBorder.slice(1, 3), 16), 
                   parseInt(colors.grayBorder.slice(3, 5), 16), 
                   parseInt(colors.grayBorder.slice(5, 7), 16)],
        lineWidth: 0.1
      },
      headStyles: {
        fillColor: [parseInt(colors.dark.slice(1, 3), 16), 
                   parseInt(colors.dark.slice(3, 5), 16), 
                   parseInt(colors.dark.slice(5, 7), 16)],
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 9,
        cellPadding: 6
      },
      columnStyles: {
        0: { 
          fontStyle: 'bold',
          cellWidth: 55,
          halign: 'left'
        },
        1: { 
          cellWidth: 40,
          halign: 'center',
          fontStyle: 'bold'
        },
        2: {
          cellWidth: 40,
          halign: 'center'
        },
        3: {
          cellWidth: 45,
          halign: 'center',
          fontStyle: 'bold'
        }
      },
      didParseCell: function(data: any) {
        if (data.section === 'body' && data.column.index === 3) {
          data.cell.styles.textColor = [parseInt(colors.success.slice(1, 3), 16), 
                                        parseInt(colors.success.slice(3, 5), 16), 
                                        parseInt(colors.success.slice(5, 7), 16)];
        }
      }
    });

    yPos = (pdf as any).lastAutoTable?.finalY || yPos;
    yPos += 15;

    // Vérifier si on doit créer une nouvelle page pour les recommandations
    if (yPos > 200) {
      pdf.addPage();
      yPos = 20;
    }

    // Section 4: Recommandations
    pdf.setFillColor(parseInt(colors.primary.slice(1, 3), 16), 
                    parseInt(colors.primary.slice(3, 5), 16), 
                    parseInt(colors.primary.slice(5, 7), 16));
    pdf.roundedRect(20, yPos, 170, 8, 2, 2, 'F');
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(255, 255, 255);
    pdf.text('4. RECOMMANDATIONS', 25, yPos + 5.5);
    yPos += 15;

    // Données des recommandations
    const recommendations = [
      {
        phase: 'Phase 1 : Audit & Analyse',
        duration: '2-3 semaines',
        tasks: '• Analyse approfondie des processus\n• Identification des priorités\n• Élaboration du plan d\'action'
      },
      {
        phase: 'Phase 2 : Développement',
        duration: '4-6 semaines',
        tasks: '• Création des automatisations\n• Tests et validation\n• Formation des équipes'
      },
      {
        phase: 'Phase 3 : Déploiement',
        duration: '2-3 semaines',
        tasks: '• Déploiement progressif\n• Monitoring initial\n• Ajustements optimaux'
      },
      {
        phase: 'Phase 4 : Optimisation',
        duration: 'Continue',
        tasks: '• Surveillance des performances\n• Amélioration continue\n• Scaling des solutions'
      }
    ];

    // Création d'un tableau stylé pour les recommandations
    const recommendationData = [
      ['Phase', 'Durée', 'Activités principales']
    ];

    recommendations.forEach(rec => {
      recommendationData.push([
        rec.phase,
        rec.duration,
        rec.tasks
      ]);
    });

    autoTable(pdf, {
      startY: yPos,
      margin: { left: 20, right: 20 },
      head: [recommendationData[0]],
      body: recommendationData.slice(1),
      theme: 'grid',
      styles: {
        fontSize: 9,
        cellPadding: 5,
        lineColor: [parseInt(colors.grayBorder.slice(1, 3), 16), 
                   parseInt(colors.grayBorder.slice(3, 5), 16), 
                   parseInt(colors.grayBorder.slice(5, 7), 16)],
        lineWidth: 0.1,
        halign: 'center'
      },
      headStyles: {
        fillColor: [parseInt(colors.primary.slice(1, 3), 16), 
                   parseInt(colors.primary.slice(3, 5), 16), 
                   parseInt(colors.primary.slice(5, 7), 16)],
        textColor: 255,
        fontStyle: 'bold',
        fontSize: 9,
        cellPadding: 6,
        halign: 'center'
      },
      bodyStyles: {
        textColor: [parseInt(colors.dark.slice(1, 3), 16), 
                   parseInt(colors.dark.slice(3, 5), 16), 
                   parseInt(colors.dark.slice(5, 7), 16)],
        fontSize: 9,
        halign: 'center'
      },
      alternateRowStyles: {
        fillColor: [parseInt(colors.grayLight.slice(1, 3), 16), 
                   parseInt(colors.grayLight.slice(3, 5), 16), 
                   parseInt(colors.grayLight.slice(5, 7), 16)]
      },
      columnStyles: {
        0: { 
          fontStyle: 'bold',
          cellWidth: 50,
          halign: 'center',
          textColor: [parseInt(colors.primary.slice(1, 3), 16), 
                     parseInt(colors.primary.slice(3, 5), 16), 
                     parseInt(colors.primary.slice(5, 7), 16)]
        },
        1: { 
          cellWidth: 30,
          halign: 'center',
          fontStyle: 'bold',
          textColor: [parseInt(colors.secondary.slice(1, 3), 16), 
                     parseInt(colors.secondary.slice(3, 5), 16), 
                     parseInt(colors.secondary.slice(5, 7), 16)]
        },
        2: {
          cellWidth: 90,
          halign: 'left',
          fontStyle: 'normal',
          textColor: [parseInt(colors.dark.slice(1, 3), 16), 
                     parseInt(colors.dark.slice(3, 5), 16), 
                     parseInt(colors.dark.slice(5, 7), 16)]
        }
      }
    });

    yPos = (pdf as any).lastAutoTable?.finalY || yPos;
    yPos += 10;

    // Vérifier l'espace pour la conclusion
    if (yPos > 240) {
      pdf.addPage();
      yPos = 20;
    }

    // Conclusion personnalisée
    yPos += 10;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(parseInt(colors.gray.slice(1, 3), 16), 
                    parseInt(colors.gray.slice(3, 5), 16), 
                    parseInt(colors.gray.slice(5, 7), 16));
    
    const conclusion = companyInfo
      ? `Cette analyse démontre un fort potentiel d'automatisation pour ${companyInfo.companyName} avec un ` +
        `retour sur investissement significatif. Nous recommandons de débuter par une phase pilote pour ` +
        `valider les hypothèses avant un déploiement à plus grande échelle.`
      : "Cette analyse démontre un fort potentiel d'automatisation avec un retour sur investissement " +
        "significatif. Nous recommandons de débuter par une phase pilote pour valider les hypothèses " +
        "avant un déploiement à plus grande échelle.";
    
    const conclusionLines = pdf.splitTextToSize(conclusion, 150);
    conclusionLines.forEach((line: string) => {
      if (yPos > 270) {
        pdf.addPage();
        yPos = 20;
      }
      pdf.text(line, 105, yPos, { align: 'center' });
      yPos += 5;
    });

    // Pied de page professionnel
    const pages = pdf.getNumberOfPages();

    for (let i = 1; i <= pages; i++) {
      pdf.setPage(i);
      
      // Suppression de la ligne de séparation du pied de page

      // Informations de contact
      pdf.setFontSize(8);
      pdf.setTextColor(parseInt(colors.gray.slice(1, 3), 16), 
                      parseInt(colors.gray.slice(3, 5), 16), 
                      parseInt(colors.gray.slice(5, 7), 16));

      // Numéro de page
      pdf.setTextColor(parseInt(colors.primary.slice(1, 3), 16), 
                      parseInt(colors.primary.slice(3, 5), 16), 
                      parseInt(colors.primary.slice(5, 7), 16));
      pdf.text(`Page ${i} / ${pages}`, 105, 295, { align: 'center' });  // Augmenté de 290 à 295
    }

    // Signature sur la dernière page
    const lastPage = pdf.getNumberOfPages();
    pdf.setPage(lastPage);
    
    // Positionner la signature en bas de la dernière page
    const signatureY = Math.min(yPos + 20, 260);
    
    // Ligne de signature
    pdf.setDrawColor(parseInt(colors.grayBorder.slice(1, 3), 16), 
                    parseInt(colors.grayBorder.slice(3, 5), 16), 
                    parseInt(colors.grayBorder.slice(5, 7), 16));
    pdf.setLineWidth(0.3);
    pdf.line(30, signatureY, 80, signatureY);
    
    // Texte de signature
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(parseInt(colors.dark.slice(1, 3), 16), 
                    parseInt(colors.dark.slice(3, 5), 16), 
                    parseInt(colors.dark.slice(5, 7), 16));
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8);
    pdf.setTextColor(parseInt(colors.gray.slice(1, 3), 16), 
                    parseInt(colors.gray.slice(3, 5), 16), 
                    parseInt(colors.gray.slice(5, 7), 16));
    pdf.text('L\'équipe d\'expertise en automatisation', 30, signatureY + 5);

    return pdf;
  };

  const handleDownloadPDF = async (customAnswers?: Record<string, QuestionAnswer>, companyInfoParam?: CompanyInfo) => {
    const answersToUse = customAnswers || answers;
    const companyInfoToUse = companyInfoParam || companyInfo;
    
    if (!companyInfoToUse) {
      // Si pas d'infos entreprise, on ne devrait pas arriver ici normalement
      console.error('Aucune information entreprise disponible');
      return;
    }
    
    try {
      // S'assurer que les valeurs numériques sont bien des nombres
      const processedAnswers: Record<string, number> = {};
      Object.entries(answersToUse).forEach(([key, value]) => {
        processedAnswers[key] = typeof value === 'number' ? value : Number(value) || 0;
      });
      
      // Générer le PDF avec les valeurs numériques
      const pdf = await generatePDF(processedAnswers, companyInfoToUse);
      
      // Créer un nom de fichier avec la date et le nom de l'entreprise
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).replace(/\//g, '-');
      
      const companyName = companyInfoToUse.companyName 
        ? companyInfoToUse.companyName.replace(/[^a-z0-9]/gi, '_').toLowerCase() 
        : 'rapport';
      
      const fileName = `rapport-automatisation_${companyName}_${formattedDate}.pdf`;
      
      // Télécharger le PDF localement
      pdf.save(fileName);
      
      return Promise.resolve();
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
      return Promise.reject(error);
    }
  };

  const handleAnswerChange = (questionId: string, value: QuestionAnswer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (!hasStarted) setHasStarted(true);
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      // Rediriger vers la page d'accueil si on est à la première question
      window.location.href = '/';
    }
  };

  

  if (!hasStarted) {
    return (
      <>
        <GlobalStyles />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6f7f9] via-white to-[#d0f0f3] p-4 pt-16 depth-3d">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#00929E]/10 to-[#007a85]/5 rounded-full blur-3xl animate-float floating-particle"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-[#e6f7f9]/20 to-transparent rounded-full blur-3xl animate-float floating-particle" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="w-full max-w-2xl relative">
            <div className="glass-border p-4 card-3d">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 glass-border bg-gradient-to-br from-[#00929E] to-[#007a85] rounded-full mb-3 mx-auto">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-lg font-bold gradient-text mb-1.5">
                  Calculateur d'Automatisation SENYONE
                </h1>
                <p className="text-[#1E1E1E]/80 text-sm">
                  Découvrez en 3 questions le potentiel d'économies grâce à l'automatisation
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                {questions.map((q, index) => (
                  <div key={q.id} className="glass-border p-3 card-3d hover:border-[#00929E]/30 transition-colors">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className={`glass-border w-6 h-6 flex items-center justify-center ${index === 0 ? 'bg-[#e6f7f9] text-[#00929E]' : index === 1 ? 'bg-[#fdeaea] text-[#E44849]' : 'bg-[#f0f0f0] text-[#1E1E1E]'}`}>
                        {index === 0 ? <Clock className="w-3.5 h-3.5" /> : 
                        index === 1 ? <DollarSign className="w-3.5 h-3.5" /> : 
                        <Percent className="w-3.5 h-3.5" />}
                      </div>
                      <div className="text-xs font-bold gradient-text">Question {index + 1}</div>
                    </div>
                    <h3 className="font-bold gradient-text text-xs mb-0.5">{q.titre}</h3>
                    <p className="text-xs text-gray-600">{q.libelle}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center flex flex-wrap gap-4 justify-center">
               

                <button
                  onClick={navigateToHome}
                  className="relative overflow-hidden group px-4 py-2 
                  bg-white border-gray-500 border text-gray-500 font-bold 
                  rounded-lg text-sm transition-all duration-300 hover:opacity-90"
                >
                  <div className="absolute inset-0 bg-black/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5" />
                    Retour à l'acceuil
                  </span>
                </button>
                 <button
                  onClick={() => setHasStarted(true)}
                  className="relative overflow-hidden group px-4 py-2 bg-gradient-to-r from-[#00929E] to-[#007a85] text-white font-bold rounded-lg text-sm transition-all duration-300 hover:opacity-90 btn-3d animate-glow"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Commencer l'analyse
                  </span>
                </button>
                <p className="text-gray-500 text-xs mt-2">
                  Analyse complète en moins de 2 minutes • Aucune donnée personnelle requise
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (showResults) {
    const savings = calculateSavingsUtil(answers);

    return (
      <>
        <GlobalStyles />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6f7f9] via-white to-[#d0f0f3] p-4 pt-16 depth-3d">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#00929E]/10 to-[#007a85]/5 rounded-full blur-3xl animate-float floating-particle"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-[#e6f7f9]/20 to-transparent rounded-full blur-3xl animate-float floating-particle" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="w-full max-w-4xl relative">
            <div className="glass-border overflow-hidden card-3d">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00929E] to-[#007a85]"></div>
                <div className="relative p-4 text-white">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="glass-border w-10 h-10 flex items-center justify-center bg-white/10">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h1 className="text-base font-bold mb-0.5">Analyse terminée !</h1>
                        <p className="text-white/80 text-xs">Voici votre estimation personnalisée</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/80 mb-0.5">Simulation n°</div>
                      <div className="text-base font-bold glass-effect px-2 py-1 rounded">
                        #{Date.now().toString().slice(-6)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[
                      { label: 'Heures répétitives', value: answers.volume, unit: 'h', color: 'text-white' },
                      { label: 'Coût horaire', value: answers.cout, unit: 'FCFA/h', color: 'text-white' },
                      { label: 'Automatisation', value: answers.taux, unit: '%', color: 'text-white' },
                      { label: 'Économies annuelles', value: savings.annualSavings, unit: 'FCFA', color: 'text-white' }
                    ].map((metric, index) => (
                      <div key={index} className="glass-effect rounded p-2">
                        <div className="text-xs text-white/80 mb-0.5">{metric.label}</div>
                        <div className="flex items-baseline gap-0.5">
                          <div className={`text-sm font-bold ${metric.color}`}>
                            {typeof metric.value === 'number' && metric.value > 1000 
                              ? metric.value.toLocaleString() 
                              : metric.value}
                          </div>
                          <div className="text-xs text-white/90">{metric.unit}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h2 className="text-base font-bold gradient-text mb-3">Synthèse des gains potentiels</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-4">
                  <div className="glass-border p-3 card-3d">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="glass-border p-1.5 bg-[#e6f7f9] rounded">
                        <Clock className="w-3.5 h-3.5 text-[#00929E]" />
                      </div>
                      <div>
                        <h3 className="font-bold gradient-text text-xs">Temps optimisé</h3>
                        <p className="text-xs text-gray-600">Gain de productivité</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold gradient-text mb-0.5">{savings.automatableHours}</div>
                      <div className="text-gray-600 text-xs">Heures de travail par an</div>
                      <div className="text-xs gradient-text mt-0.5">
                        Temps gagné
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-border p-3 card-3d">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="glass-border p-1.5 bg-[#fdeaea] rounded">
                        <DollarSign className="w-3.5 h-3.5 gradient-text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold gradient-text-secondary text-xs">Économies financières</h3>
                        <p className="text-xs text-gray-600">Gains hebdomadaires</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold gradient-text-secondary mb-0.5">
                        {savings.weeklySavings.toLocaleString()}
                      </div>
                      <div className="text-gray-600 text-xs">FCFA par semaine</div>
                      <div className="text-xs gradient-text-secondary mt-0.5">
                        Soit {savings.annualSavings.toLocaleString()} FCFA par an
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-border p-3 card-3d">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="glass-border p-1.5 bg-[#f0f0f0] rounded">
                        <TrendingUp className="w-3.5 h-3.5 text-[#1E1E1E]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1E1E1E] text-xs">Impact annuel</h3>
                        <p className="text-xs text-gray-600">Projection sur 12 mois</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#1E1E1E] mb-0.5">
                        {savings.annualSavings.toLocaleString().split(',')[0]}
                      </div>
                      <div className="text-gray-600 text-xs">FCFA par an</div>
                      <div className="text-xs text-[#2a2a2a] mt-0.5">
                        ROI potentiel &gt; 200%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
                    <button
                      onClick={() => {
                        setShowResults(false);
                        setCurrentStep(1);
                        setHasStarted(false);
                      }}
                      className="glass-effect px-3 py-1.5 text-xs font-medium text-[#1E1E1E] rounded-lg transition-all flex items-center gap-1 btn-3d"
                    >
                      <ArrowRight className="w-2.5 h-2.5 rotate-180" />
                      Recommencer l'analyse
                    </button>
                    
                    <button
                      onClick={() => setShowDetailedAnalysis(true)}
                      className="px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#00929E] to-[#007a85] hover:opacity-90 rounded-lg transition-all flex items-center gap-1 btn-3d animate-glow"
                    >
                      <BarChart3 className="w-2.5 h-2.5" />
                      Voir l'analyse détaillée
                      <ArrowRight className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {showDetailedAnalysis && (
              <DetailedAnalysis 
                answers={answers} 
                onClose={() => setShowDetailedAnalysis(false)}
                onDownloadPDF={handleDownloadPDF}
              />
            )}
          </div>
        </div>
      </>
    );
  }

  if (!currentQuestion) {
    return (
      <>
        <GlobalStyles />
        <div className="min-h-screen flex items-center justify-center">
          <div className="gradient-text-secondary">Erreur : Question non trouvée</div>
        </div>
      </>
    );
  }

  return (
    <QuestionComponent
      question={currentQuestion}
      onAnswerChange={(value) => handleAnswerChange(currentQuestion.id, value)}
      currentAnswer={answers[currentQuestion.id]}
      currentStep={currentStep}
      totalSteps={totalSteps}
      onNext={handleNext}
      onPrev={handlePrev}
    />
  );
};

export default ThreeQuestionCalculator;