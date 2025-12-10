/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { usePDFGenerator } from '@/components/hook/usePDFGenerator';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock,
  DollarSign,
  Percent,
  Sparkles,
  HelpCircle,
  Zap,
  Calculator,
  ChevronUp,
  ChevronDown,
  Download,
  BarChart3,
  TrendingUp,
  Save,
  X,
  Calendar,
  Users,
  Target,
  Shield,
  ArrowRight,
  GripVertical,
  Maximize2,
  Check,
  Activity,
  DollarSign as Dollar,
  Zap as ZapIcon,
  FileText,
  Minus,
  Plus,
  Home,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  MoveHorizontal
} from "lucide-react";

type QuestionAnswer = number | string | number[];

type Question = {
  id: string;
  libelle: string;
  type: string;
  helper: string;
  placeholder?: string;
  plage?: number[];
  defaultValue?: QuestionAnswer;
  required?: boolean;
  step: number;
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

type ThumbValue = {
  id: string;
  value: number;
  min?: number;
  max?: number;
};

interface ProfessionalSliderProps {
  value: number | number[];
  onChange: (value: number | number[]) => void;
  min: number;
  max: number;
  step?: number;
  label: string;
  unit: string;
  disabled?: boolean;
  direction?: 'ltr' | 'rtl';
  minDistance?: number;
}

export const ProfessionalSlider: React.FC<ProfessionalSliderProps> = ({
  value,
  onChange,
  min,
  max,
  step = 1,
  label,
  unit,
  disabled = false,
  direction = 'ltr',
  minDistance = 0
}) => {
  const mode = 'single';
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeThumb, setActiveThumb] = useState<string | null>(null);
  const [thumbValues, setThumbValues] = useState<ThumbValue[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [focusedThumb, setFocusedThumb] = useState<string | null>(null);
  const [glowEffect, setGlowEffect] = useState(false);
  const [isTrackActive, setIsTrackActive] = useState(false);

  // Gestion du mode uncontrolled
  const [localValue, setLocalValue] = useState<number | number[]>(value);
  const currentValue = value;

  useEffect(() => {
    const initializeThumbs = () => {
      if (mode === 'single') {
        const singleValue = Array.isArray(currentValue) ? currentValue[0] : currentValue;
        setThumbValues([{ id: 'thumb-0', value: singleValue }]);
      } else if (mode === 'range') {
        const values = Array.isArray(currentValue) ? currentValue : [min, max];
        setThumbValues([
          { id: 'thumb-0', value: values[0], max: values[1] - minDistance },
          { id: 'thumb-1', value: values[1], min: values[0] + minDistance }
        ]);
      } else if (mode === 'multiple') {
        const values = Array.isArray(currentValue) ? currentValue : [min];
        setThumbValues(
          values.map((val, index) => ({
            id: `thumb-${index}`,
            value: val,
            min: index > 0 ? values[index - 1] + minDistance : min,
            max: index < values.length - 1 ? values[index + 1] - minDistance : max
          }))
        );
      }
    };

    initializeThumbs();
    setGlowEffect(true);
    const timer = setTimeout(() => setGlowEffect(false), 300);
    return () => clearTimeout(timer);
  }, [currentValue, mode, min, max, minDistance]);

  const currentColor = {
    bg: 'bg-gradient-to-r from-[#00929E] to-[#007A85]',
    thumb: 'bg-[#00929E]',
    track: 'bg-[#E6F6F7]',
    text: 'text-[#00929E]',
    light: 'bg-[#E6F6F7]',
    glow: 'shadow-[0_0_15px_rgba(0,146,158,0.5)]',
    hover: 'bg-[#B3E5E9]'
  };

  const getPercentage = (val: number) => ((val - min) / (max - min)) * 100;

  const updateThumbValue = (thumbId: string, newValue: number) => {
    setThumbValues(prev => {
      const newThumbValues = prev.map(thumb => {
        if (thumb.id === thumbId) {
          let constrainedValue = Math.max(min, Math.min(max, newValue));
          
          if (thumb.min !== undefined) {
            constrainedValue = Math.max(constrainedValue, thumb.min);
          }
          if (thumb.max !== undefined) {
            constrainedValue = Math.min(constrainedValue, thumb.max);
          }
          
          const steppedValue = Math.round(constrainedValue / step) * step;
          
          return { ...thumb, value: steppedValue };
        }
        return thumb;
      });

      const sortedValues = [...newThumbValues].sort((a, b) => a.value - b.value);
      
      const updatedValues = sortedValues.map((thumb, index) => ({
        ...thumb,
        min: index > 0 ? sortedValues[index - 1].value + minDistance : min,
        max: index < sortedValues.length - 1 ? sortedValues[index + 1].value - minDistance : max
      }));

      const newValues = updatedValues.map(v => v.value);
      
      if (mode === 'single') {
        const singleValue = newValues[0];
        onChange(singleValue);
      } else {
        onChange(newValues);
      }

      return updatedValues;
    });
  };

  const handleTrackClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current || disabled) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    let clientX;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    
    const x = direction === 'rtl' ? rect.right - clientX : clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const newValue = min + percentage * (max - min);
    const steppedValue = Math.round(newValue / step) * step;

    if (mode === 'single') {
      updateThumbValue('thumb-0', steppedValue);
    } else {
      const closestThumb = thumbValues.reduce((closest, thumb) => {
        const currentDiff = Math.abs(thumb.value - steppedValue);
        const closestDiff = Math.abs(closest.value - steppedValue);
        return currentDiff < closestDiff ? thumb : closest;
      });
      updateThumbValue(closestThumb.id, steppedValue);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (disabled) return;
    const touch = e.touches[0];
    
    const target = e.target as HTMLElement;
    const isThumb = target.closest('[role="slider"]');
    
    if (!isThumb) {
      handleTrackClick(e);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current || disabled) return;
    
    const touch = e.touches[0];
    const rect = sliderRef.current.getBoundingClientRect();
    const x = direction === 'rtl' ? rect.right - touch.clientX : touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const newValue = min + percentage * (max - min);
    const steppedValue = Math.round(newValue / step) * step;

    if (activeThumb) {
      updateThumbValue(activeThumb, steppedValue);
    }
  };

  const handleDragStart = (thumbId: string) => {
    if (disabled) return;
    setActiveThumb(thumbId);
    setIsDragging(true);
    
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleDragMove as any);
    document.addEventListener('touchend', handleDragEnd);
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging || !sliderRef.current || !activeThumb || disabled) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    let clientX;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    
    const x = direction === 'rtl' ? rect.right - clientX : clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const newValue = min + percentage * (max - min);
    const steppedValue = Math.round(newValue / step) * step;

    updateThumbValue(activeThumb, steppedValue);
  }, [isDragging, activeThumb, sliderRef, min, max, step, direction]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setActiveThumb(null);
    
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);
    document.removeEventListener('touchmove', handleDragMove as any);
    document.removeEventListener('touchend', handleDragEnd);
  }, [handleDragMove]);

  const handleWheel = (e: React.WheelEvent) => {
    if (disabled) return;
    e.preventDefault();
    
    const delta = e.deltaY > 0 ? -step : step;
    const currentValue = thumbValues[0]?.value || min;
    const newValue = Math.max(min, Math.min(max, currentValue + delta));
    
    updateThumbValue('thumb-0', newValue);
  };



  const renderThumb = (thumb: ThumbValue, index: number) => {
    const percentage = getPercentage(thumb.value);
    const isActive = activeThumb === thumb.id;
    const isFocused = focusedThumb === thumb.id;

    return (
      <div
        key={thumb.id}
        className={`
          absolute top-1/2 
          w-6 h-6 rounded-full ${currentColor.thumb} border-3 border-white 
          shadow-lg transform -translate-x-1/2 -translate-y-1/2
          cursor-grab active:cursor-grabbing transition-all duration-200
          ${isActive ? 'scale-125 z-20 ' + currentColor.glow : ''}
          ${isFocused ? 'ring-3 ring-blue-300 ring-opacity-60' : ''}
          ${disabled ? 'cursor-not-allowed opacity-50' : ''}
        `}
        style={{ left: direction === 'rtl' ? `${100 - percentage}%` : `${percentage}%` }}
        tabIndex={disabled ? -1 : 0}
        onFocus={() => !disabled && setFocusedThumb(thumb.id)}
        onBlur={() => setFocusedThumb(null)}
        onMouseDown={() => !disabled && handleDragStart(thumb.id)}
        onTouchStart={() => !disabled && handleDragStart(thumb.id)}
        role="slider"
      >
        <div className={`
          absolute -top-8 left-1/2 transform -translate-x-1/2
          whitespace-nowrap transition-all duration-300
          opacity-0 scale-95
        `}>
        </div>
      </div>
    );
  };

  const renderFilledTrack = () => {
    if (thumbValues.length === 0) return null;

    const sortedValues = [...thumbValues].sort((a, b) => a.value - b.value);
    
    if (mode === 'single') {
      const percentage = getPercentage(sortedValues[0].value);
      return (
        <div
          className={`absolute top-1/2 left-0 h-2 
            bg-gradient-to-r ${currentColor.bg} rounded-full 
            transform -translate-y-1/2
            transition-all duration-300 ${glowEffect ? currentColor.glow : ''}
          `}
          style={{ width: `${percentage}%` }}
        />
      );
    }

    return sortedValues.map((thumb, index, array) => {
      if (index === 0) return null;
      
      const prevValue = array[index - 1].value;
      const currentValue = thumb.value;
      
      const startPercentage = getPercentage(prevValue);
      const endPercentage = getPercentage(currentValue);
      const widthPercentage = endPercentage - startPercentage;

      return (
        <div
          key={`segment-${index}`}
          className={`absolute top-1/2 left-0 h-2 
            bg-gradient-to-r ${currentColor.bg} rounded-full 
            transform -translate-y-1/2
          `}
          style={{
            left: `${startPercentage}%`,
            width: `${widthPercentage}%`
          }}
        />
      );
    });
  };

  return (
    <div className="space-y-4 animate-fade-in-up" onWheel={handleWheel}>
      <div className="text-center">
        <div className="inline-flex items-baseline justify-center gap-1.5 mb-1">
              <span className={`text-4xl font-bold ${currentColor.text} transition-all duration-300 ${glowEffect ? 'scale-105' : ''}`}>
                {thumbValues[0]?.value || 0}
              </span>
              <span className="text-base text-gray-500">{unit}</span>
        </div>
        <div className="text-xs text-gray-500 animate-pulse">
          {label} 
        </div>
      </div>
      <div 
        ref={containerRef}
        className="relative py-6"
      >
        <div 
          ref={sliderRef}
          className={`
            absolute top-1/2 left-0 right-0 h-2 
            bg-gray-200 rounded-full cursor-pointer group
            transform -translate-y-1/2
            ${disabled ? 'cursor-not-allowed' : ''}
          `}
          onClick={disabled ? undefined : handleTrackClick}
          onTouchStart={disabled ? undefined : handleTouchStart}
          onTouchMove={disabled ? undefined : handleTouchMove}
          onTouchEnd={disabled ? undefined : () => {
            if (isDragging) {
              handleDragEnd();
            }
          }}
          aria-label={`Piste de réglage de ${label}`}
        >
          {renderFilledTrack()}
          {thumbValues.map(renderThumb)}
        </div>

        <div className={`
          absolute top-full left-0 right-0 mt-2 flex justify-between text-xs text-gray-500 my-20
        `}>
          <span className="opacity-70">{min}{unit}</span>
          <span className="opacity-70">{max}{unit}</span>
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
    step
  } = question;

  const [inputValue, setInputValue] = useState<QuestionAnswer>(currentAnswer !== undefined ? currentAnswer : defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const initialValue = currentAnswer !== undefined ? currentAnswer : defaultValue;
    setInputValue(initialValue);
  }, [currentAnswer, defaultValue]);

  const handleChange = (value: QuestionAnswer) => {
    setInputValue(value);
    if (onAnswerChange) {
      onAnswerChange(value);
    }
  };

  const getStepColor = (stepNumber: number) => {
    return { 
      bg: 'bg-[#E6F6F7]', 
      text: 'text-[#00929E]', 
      border: 'border-[#00929E]/30', 
      gradient: 'from-[#00929E] to-[#007A85]',
      light: 'bg-[#E6F6F7]',
      icon: 'text-[#00929E]',
      color: 'teal',
      shadow: 'shadow-[#00929E]/20'
    };
  };

  const currentStepColors = getStepColor(currentStep);

  const renderInputField = () => {
    switch (type) {
      case 'slider': {
        const min = plage[0] || 0;
        const max = plage[1] || 100;
        const stepSize = id === 'volume' ? 1 : 1;
        
        return (
          <ProfessionalSlider
            value={inputValue !== undefined ? inputValue as number : defaultValue as number || min}
            onChange={handleChange}
            min={min}
            max={max}
            step={stepSize}
            label={id === 'volume' ? 'Heures par semaine' : 'Taux d\'automatisation'}
            unit={id === 'volume' ? '' : '%'}
            minDistance={0}
            direction="ltr"
          />
        );
      }

      case 'number': {
        return (
          <div className="space-y-3 animate-fade-in-up">
            <div 
              className={`relative group transition-all duration-300`}
            >
              <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2">
                <div className="flex items-center gap-1.5">
                  <div className={`text-lg font-semibold ${currentStepColors.icon} transition-all duration-300 ${isFocused ? 'scale-110' : ''}`}>
                    CFA
                  </div>
                  <div className="w-px h-3.5 bg-gray-300/60"></div>
                </div>
              </div>
              <input
                type="number"
                placeholder={placeholder}
                className={`w-full pl-14 pr-9 py-2.5 text-sm border rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300
                  ${isFocused 
                    ? `border-${currentStepColors.color}-400 ring-${currentStepColors.color}-100 bg-white shadow-md` 
                    : 'border-gray-300 bg-white'
                  }`}
                min="0"
                step="0.5"
                value={typeof inputValue === 'number' ? inputValue : (typeof inputValue === 'string' ? inputValue : '')}
                onChange={(e) => handleChange(parseFloat(e.target.value) || 0)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <div className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 font-medium">
                /h
              </div>
              
              {/* Animation de focus */}
              {isFocused && (
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
              )}
            </div>
            
            {isFocused && (
              <div className="p-2.5 bg-gradient-to-r from-blue-50/80 to-blue-100/50 rounded-lg border border-blue-200/50 animate-fade-in">
                <div className="flex items-center gap-1.5 text-xs text-blue-700">
                  <Calculator className="w-3 h-3" />
                  <span>Salaire brut chargé ÷ 1820h</span>
                </div>
              </div>
            )}
          </div>
        );
      }

      default: {
        return (
          <input
            type="text"
            placeholder={placeholder}
            className="w-full px-2.5 py-2 text-sm border border-gray-300 rounded-lg 
              focus:border-blue-400 focus:ring-1 focus:ring-blue-100 focus:outline-none 
              transition duration-200 bg-white"
            value={inputValue as string || ''}
            onChange={(e) => handleChange(e.target.value)}
          />
        );
      }
    }
  };

  const isAnswerValid = () => {
    if (required && (inputValue === undefined || inputValue === null || inputValue === '')) {
      return false;
    }
    return true;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30">
      {/* Header avec animations */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className={`p-1 rounded-md ${currentStepColors.light} transition-all duration-300`}>
                {currentStep === 1 ? <Clock className="w-3.5 h-3.5 text-blue-500" /> :
                 currentStep === 2 ? <DollarSign className="w-3.5 h-3.5 text-emerald-500" /> :
                 <Percent className="w-3.5 h-3.5 text-purple-500" />}
              </div>
              <span className="text-xs font-medium text-gray-700">
                Question {currentStep}/{totalSteps}
              </span>
            </div>
            
          </div>
          
          <div className="mt-2">
            <div className="flex items-center justify-between mb-1">
              <div className="text-xs text-gray-500">Progression</div>
              <div className="text-xs font-medium text-gray-700">{Math.round((currentStep / totalSteps) * 100)}%</div>
            </div>
            <div className="h-1 bg-gray-200/60 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${currentStepColors.gradient} rounded-full transition-all duration-1000 ease-out ${currentStepColors.shadow}`}
                style={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal avec animations */}
      <div className="flex-1 flex items-center justify-center p-4 animate-fade-in">
        <div className="w-full max-w-2xl">
          <div className={`bg-white rounded-xl p-5 border ${currentStepColors.border} shadow-lg transition-all duration-500`}>
            
            {/* En-tête de la question */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-gray-100/80 rounded text-xs text-gray-600 mb-2 animate-slide-in">
                Question {currentStep}
              </div>
              <h2 className="text-base font-bold text-gray-900 leading-snug animate-fade-in-up">
                {id === 'taux' 
                  ? 'Quelle proportion de ces tâches peut être automatisée ?'
                  : id === 'volume'
                  ? 'Combien d\'heures par semaine votre équipe consacre-t-elle aux tâches répétitives ?'
                  : libelle
                }
                {required && <span className="text-red-500 ml-0.5">*</span>}
              </h2>
            </div>

            {/* Zone de saisie */}
            <div className="mb-4">
              {renderInputField()}
            </div>

            {/* Section d'aide avec animation */}
            <div className="mt-8 bg-gradient-to-r from-gray-50/80 to-blue-50/60 rounded-lg p-3 border border-gray-200/50 animate-fade-in-up">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <div className="p-1 bg-white/80 rounded border border-gray-200/50 transition-transform">
                    <HelpCircle className="w-3.5 h-3.5 text-gray-600" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {helper}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation avec animations */}
      <div className="sticky bottom-0 bg-white/90 backdrop-blur-sm border-t border-gray-200/50 py-2.5">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onPrev}
              disabled={currentStep === 1}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg transition-all duration-300
                ${currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : `text-gray-700 text-gray-900 bg-gray-50 border border-gray-300 
                     shadow-md active:scale-95`
                }
              `}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              Retour
            </button>
            
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 animate-rotate-slow">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={currentStep === 1 ? '#3B82F6' : currentStep === 2 ? '#10B981' : '#8B5CF6'}
                    strokeWidth="2.5"
                    strokeDasharray={`${(currentStep / totalSteps) * 100}, 100`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-700">
                    {currentStep}/{totalSteps}
                  </span>
                </div>
              </div>
              
              <button
                onClick={onNext}
                disabled={required && !isAnswerValid()}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg transition-all duration-300
                  transform active:scale-95
                  ${required && !isAnswerValid()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : `bg-gradient-to-r ${currentStepColors.gradient} text-white 
                       shadow-lg animate-pulse-slow`
                  }
                `}
              >
                {currentStep === totalSteps ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Voir les résultats</span>
                  </>
                ) : (
                  <>
                    <span>Continuer</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DetailedAnalysisProps {
  answers: Record<string, QuestionAnswer>;
  onClose: () => void;
}

const DetailedAnalysis: React.FC<DetailedAnalysisProps> = ({ answers, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { generatePDFReport } = usePDFGenerator();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const calculateSavings = () => {
    const hoursPerWeek = answers.volume as number || 10;
    const costPerHour = answers.cout as number || 35;
    const automationRate = answers.taux as number || 70;
    
    const weeklyCost = hoursPerWeek * costPerHour;
    const annualCost = weeklyCost * 52;
    const automatableHours = hoursPerWeek * (automationRate / 100);
    const weeklySavings = automatableHours * costPerHour;
    const monthlySavings = automatableHours * 4.5;
    const annualSavings = weeklySavings * 52;
    const roi = ((annualSavings - (annualSavings * 0.3)) / (annualSavings * 0.3)) * 100;
    
    return {
      weeklyCost: Math.round(weeklyCost),
      annualCost: Math.round(annualCost),
      automatableHours: Math.round(automatableHours),
      weeklySavings: Math.round(weeklySavings),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round((annualSavings * 0.3) / weeklySavings * 12)
    };
  };

  const savings = calculateSavings();

  const handleDownloadReport = () => {
    setIsDownloading(true);
    
    setTimeout(() => {
      try {
        const adaptedAnswers = {
          volume: answers.volume,
          cout: answers.cout,
          taux: answers.taux
        };
        generatePDFReport(adaptedAnswers, savings);
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 3000);
      } catch (error) {
        console.error('Erreur lors de la génération du PDF:', error);
      } finally {
        setIsDownloading(false);
      }
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-3 z-50 animate-fade-in">
      <div className={`bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <div className="sticky top-0 bg-gradient-to-r from-[#00929E] to-[#007A85] text-white p-5 rounded-t-2xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-white/20 rounded-xl backdrop-blur-sm animate-pulse-slow">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Analyse détaillée</h2>
                <p className="text-blue-100 text-xs">Rapport complet généré le {new Date().toLocaleDateString('fr-FR')}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 bg-white/20 rounded-lg transition-all duration-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gradient-to-br from-[#E6F6F7] to-[#B3E5E9] border border-[#00929E]/30 rounded-xl p-4 transition-all duration-300 animate-fade-in-up">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="p-1.5 bg-[#E6F6F7] rounded-lg">
                  <Clock className="w-4 h-4 text-[#00929E]" />
                </div>
                <div>
                  <div className="text-xs text-[#00929E]">Temps automatisable</div>
                  <div className="text-xl font-bold">{savings.automatableHours}h/semaine</div>
                </div>
              </div>
              <div className="text-xs text-[#00929E]">
                Équivalent à {Math.round(savings.automatableHours * 4.33)}h/mois
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-4 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="p-1.5 bg-emerald-100 rounded-lg">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs text-emerald-700">Économies annuelles</div>
                  <div className="text-xl font-bold text-emerald-900">{savings.annualSavings.toLocaleString()} FCFA</div>
                </div>
              </div>
              <div className="text-xs text-emerald-600">
                Soit {savings.weeklySavings.toLocaleString()} FCFA par semaine
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="p-1.5 bg-purple-100 rounded-lg">
                  <Dollar className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-xs text-purple-700">ROI estimé</div>
                  <div className="text-xl font-bold text-purple-900">{savings.roi}%</div>
                </div>
              </div>
              <div className="text-xs text-purple-600">
                Retour sur investissement en {savings.paybackPeriod} mois
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-blue-600" />
              Visualisation des gains
            </h3>
            
            <div className="space-y-3">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-700">Retour sur investissement</span>
                  <span className="font-semibold text-emerald-600">{savings.roi}%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${Math.min(savings.roi, 100)}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-700">Taux d'automatisation réalisé</span>
                  <span className="font-semibold text-[#00929E]">{answers.taux}%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#00929E] to-[#007A85] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${answers.taux as number}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-gray-600" />
              Recommandations stratégiques
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white border border-gray-200 rounded-xl p-4 transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-1.5 bg-gradient-to-r from-[#E6F6F7] to-[#B3E5E9] rounded-lg">
                    <Users className="w-4 h-4 text-[#00929E]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Optimisation des ressources</h4>
                </div>
                <p className="text-xs text-gray-600 mb-2.5">
                  En automatisant {savings.automatableHours}h par semaine, votre équipe peut se concentrer sur des tâches à plus haute valeur ajoutée, augmentant ainsi la productivité globale.
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#00929E] font-medium">
                  <Check className="w-3 h-3" />
                  Impact immédiat sur la productivité
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-4 transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-1.5 bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-lg">
                    <Target className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Plan d'implémentation</h4>
                </div>
                <p className="text-xs text-gray-600 mb-2.5">
                  Commencez par automatiser les processus les plus répétitifs dans un délai de 30 jours pour un retour sur investissement rapide.
                </p>
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                  <ZapIcon className="w-3 h-3" />
                  Délai de mise en œuvre : 1-3 mois
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-end pt-4 border-t animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-200 rounded-lg transition-all active:scale-95 flex items-center justify-center gap-1.5"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              Fermer
            </button>
            
            <button
              onClick={handleDownloadReport}
              disabled={isDownloading}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5
                ${isDownloading 
                  ? 'bg-blue-400 cursor-wait' 
                  : downloadSuccess
                  ? 'bg-emerald-500'
                  : 'bg-gradient-to-r from-[#00929E] to-[#007A85]'
                } text-white shadow-md`}
            >
              {isDownloading ? (
                <>
                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Génération...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <Check className="w-3 h-3" />
                  <span>Téléchargé !</span>
                </>
              ) : (
                <>
                  <Download className="w-3 h-3" />
                  <span>Télécharger le rapport</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
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

  const questions: Question[] = [
    {
      id: 'volume',
      libelle: 'Combien d\'heures par semaine votre équipe consacre-t-elle aux tâches répétitives ?',
      type: 'slider',
      helper: 'Estimez le temps consacré aux tâches répétitives : saisie de données, copier-coller, validation manuelle, etc.',
      plage: [1, 168],
      defaultValue: 10,
      required: true,
      step: 1
    },
    {
      id: 'cout',
      libelle: 'Quel est le coût horaire moyen de votre équipe ?',
      type: 'number',
      helper: 'Calculez le coût réel en incluant les salaires bruts chargés et les heures travaillées annuelles.',
      placeholder: 'FCFA',
      defaultValue: 35,
      required: true,
      step: 2
    },
    {
      id: 'taux',
      libelle: 'Quel pourcentage de ces tâches peut être automatisé ?',
      type: 'slider',
      helper: 'Estimez la proportion de tâches répétitives pouvant être automatisées avec des solutions adaptées.',
      plage: [30, 90],
      defaultValue: 70,
      required: false,
      step: 3
    }
  ];

  const totalSteps = 3;
  const currentQuestion = questions.find(q => q.step === currentStep);

  const handleAnswerChange = (value: QuestionAnswer) => {
    if (currentQuestion) {
      setAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: value
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  if (showResults) {
    const calculateSavings = () => {
      const hoursPerWeek = answers.volume as number || 10;
      const costPerHour = answers.cout as number || 35;
      const automationRate = answers.taux as number || 70;
      
      const weeklyCost = hoursPerWeek * costPerHour;
      const automatableHours = hoursPerWeek * (automationRate / 100);
      const weeklySavings = automatableHours * costPerHour;
      const annualSavings = weeklySavings * 52;
      
      return {
        weeklyCost: Math.round(weeklyCost),
        automatableHours: Math.round(automatableHours),
        weeklySavings: Math.round(weeklySavings),
        annualSavings: Math.round(annualSavings)
      };
    };

    const savings = calculateSavings();

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30 p-3 animate-fade-in">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-scale-in">
            <div className="bg-gradient-to-r from-[#00929E] to-[#007A85] p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm animate-pulse-slow">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">Analyse terminée</h1>
                    <p className="text-[#E6F6F7] text-xs">Voici votre estimation personnalisée</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#B3E5E9]">Simulation n°</div>
                  <div className="text-base font-bold">#{Date.now().toString().slice(-6)}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="text-center p-2 bg-white/10 rounded-lg backdrop-blur-sm transition-all duration-300">
                  <div className="text-xs text-blue-200">Heures répétitives</div>
                  <div className="text-base font-bold">{answers.volume}</div>
                </div>
                <div className="text-center p-2 bg-white/10 rounded-lg backdrop-blur-sm transition-all duration-300">
                  <div className="text-xs text-blue-200">Coût horaire</div>
                  <div className="text-base font-bold">{answers.cout}FCFA/h</div>
                </div>
                <div className="text-center p-2 bg-white/10 rounded-lg backdrop-blur-sm transition-all duration-300">
                  <div className="text-xs text-blue-200">Automatisation</div>
                  <div className="text-base font-bold">{answers.taux}%</div>
                </div>
                <div className="text-center p-2 bg-white/10 rounded-lg backdrop-blur-sm transition-all duration-300">
                  <div className="text-xs text-blue-200">Économies</div>
                  <div className="text-base font-bold">{savings.annualSavings.toLocaleString()}FCFA/an</div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-base font-bold text-gray-900 mb-3">Récapitulatif des gains</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl border border-blue-200 transition-all duration-300 animate-fade-in-up">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Temps automatisable</div>
                      <div className="text-xs text-gray-600">Équivalent à {savings.automatableHours} heures par semaine</div>
                    </div>
                    <div className="text-xl font-bold text-blue-700">{savings.automatableHours}h</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl border border-emerald-200 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Économies hebdomadaires</div>
                      <div className="text-xs text-gray-600">Coût actuel : {savings.weeklyCost} FCFA/semaine</div>
                    </div>
                    <div className="text-xl font-bold text-emerald-700">{savings.weeklySavings} FCFA</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl border border-purple-200 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">Économies annuelles</div>
                      <div className="text-xs text-gray-600">Projection sur 12 mois</div>
                    </div>
                    <div className="text-xl font-bold text-purple-700">{savings.annualSavings.toLocaleString()} FCFA</div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => {
                      setShowResults(false);
                      setCurrentStep(1);
                    }}
                    className="px-4 py-2 text-xs font-medium text-gray-700 bg-gray-200 rounded-lg transition-all active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                    Recommencer
                  </button>
                  
                  <button
                    onClick={() => setShowDetailedAnalysis(true)}
                    className="px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-[#00929E] to-[#007A85] rounded-lg transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    Obtenir l'analyse détaillée
                  </button>
                </div>
              </div>
            </div>
          </div>

          {showDetailedAnalysis && (
            <DetailedAnalysis 
              answers={answers} 
              onClose={() => setShowDetailedAnalysis(false)} 
            />
          )}
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Erreur : Question non trouvée</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30">
      <QuestionComponent
        question={currentQuestion}
        onAnswerChange={handleAnswerChange}
        currentAnswer={answers[currentQuestion.id]}
        currentStep={currentStep}
        totalSteps={totalSteps}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export { QuestionComponent };
export default ThreeQuestionCalculator;