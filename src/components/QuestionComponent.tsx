/* eslint-disable react-hooks/exhaustive-deps */

import { 
  ArrowRight,BarChart3,Calculator,ChevronLeft,ChevronRight,Clock,DollarSign,HelpCircle,Home,Percent,
  Sparkles,TrendingUp,Zap
} from "lucide-react";
import React, { useEffect, useState } from 'react';
import logoPng from '@/assets/logo.svg';
import { DetailedAnalysis } from './AnalyseDetailee';
import { CompanyInfo, Question, QuestionProps, type QuestionAnswer } from '@/types/formTypes';
import { formatNumber, formatCurrency } from '@/utils/formatters';
import {calculateSavings as calculateSavingsUtil} from "@/components/helpers/QuestionHelp"
import { generatePDF } from "./helpers/generatePDF";
import { generateUniqueCode } from "./helpers/generateUniCode";

declare module 'jspdf' {
  interface jsPDF {
    lastAutoTable?: {
      finalY: number;
    };
  }
}

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

const QuestionComponent: React.FC<QuestionProps> = ({ 
  question, onAnswerChange, currentAnswer,currentStep,
  totalSteps, onNext, onPrev
}) => {
  const {
    id,libelle,type,helper,
    placeholder = "",plage = [],defaultValue,required = false,step: questionStep,note
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
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative px-2">
              <div className=" p-4 rounded-2xl">
                <div className="relative h-2 mb-6">
                    <div className="w-full">
                      {/* Label */}
                      <div className="flex justify-between mb-2 text-sm text-gray-600">
                        <span>{min} {id === 'volume' ? 'h' : '%'}</span>
                        
                        <span>{max} {id === 'volume' ? 'h' : '%'}</span>
                      </div>

                      {/* Slider */}
                      <input
                        type="range"
                        min={min}
                        max={max}
                        value={weeklyHours}
                        onChange={(e) => handleChange(Number(e.target.value))}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer
                                  bg-gray-200
                                  accent-[#00929E]"
                        style={{
                          background: `linear-gradient(
                            to right,
                            #00929E 0%,
                            #00929E ${percentage}%,
                            #e5e7eb ${percentage}%,
                            #e5e7eb 100%
                          )`
                        }}
                      />
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
                    <div className="">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <img src={logoPng} alt="" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold gradient-text">
                      SENYONE<span className="text-[#00929E]">.</span>
                    </span>
                    <div className="text-[9px] text-gray-600 mt-0.5 font-medium tracking-wider">
                      Think. Automate. Rework.
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
            <div className={`glass-border rounded-lg p-5 bg-white/90 backdrop-blur-sm transition-all duration-300 
              `}>
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

              <div className="relative rounded-lg p-4 glass-effect-primary">
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
      helper: 'Pour calculer le coût réel, prenez en compte le salaire brut chargé (incluant les charges patronales) divisé par 1 820 heures travaillées par an.',
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
      
      const fileName = `SENYONE_Rapport-d-analyse_${companyName}_${formattedDate}.pdf`;
      
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
                <div className="inline-flex items-center justify-center 
                glass-border p-4
                bg-gradient-to-br from-[#00929E] to-[#007a85] rounded-full mb-3 mx-auto">
                  <img src={logoPng} alt="" className='w-12 h-12'/>
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
                        #{generateUniqueCode()}
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
                            {typeof metric.value === 'number' 
                              ? formatNumber(metric.value)
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
                        <h3 className="font-bold text-gray-600 text-xs">Temps optimisé</h3>
                        <p className="text-xs text-gray-600">Gain de productivité</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold gradient-text mb-0.5">{formatNumber(savings.automatableHours)}</div>
                      <div className="text-gray-600 text-xs">Heures de travail par an</div>
                      <div className="text-xs gradient-text mt-0.5">
                        Temps gagné
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-border p-3 card-3d">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="glass-border p-1.5 bg-[#fdeaea] rounded">
                        <DollarSign className="w-3.5 h-3.5 gradient-text" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-600 text-xs">Économies financières</h3>
                        <p className="text-xs text-gray-600">Gains hebdomadaires</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold gradient-text mb-0.5">
                        {formatCurrency(savings.weeklySavings)}
                      </div>
                      <div className="text-gray-600 text-xs">par semaine</div>
                      <div className="text-xs gradient-text mt-0.5">
                        Soit {formatCurrency(savings.annualSavings)} par an
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-border p-3 card-3d">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="glass-border p-1.5 bg-[#f0f0f0] rounded">
                        <TrendingUp className="w-3.5 h-3.5 gradient-text" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-600 text-xs">Impact annuel</h3>
                        <p className="text-xs text-gray-600">Projection sur 12 mois</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold gradient-text mb-0.5">
                        {formatCurrency(savings.annualSavings).split(',')[0]}
                      </div>
                      <div className="text-gray-600 text-xs">FCFA par an</div>
                      <div className="text-xs gradient-text mt-0.5">
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