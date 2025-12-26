import React, { useState, useEffect } from 'react';
import { Calculator, Clock, DollarSign, Percent } from 'lucide-react';
import { ProfessionalSlider } from './roi-calculator';


type QuestionAnswer = number | string | number[];

interface Question {
  id: string;
  libelle: string;
  type: string;
  helper?: string;
  placeholder?: string;
  plage?: number[];
  defaultValue?: QuestionAnswer;
  required?: boolean;
  step?: number;
}

interface QuestionProps {
  question: Question;
  onAnswerChange?: (answer: QuestionAnswer) => void;
  currentAnswer?: QuestionAnswer;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
}

const STEP_COLORS = {
  1: { icon: <Clock className="w-3.5 h-3.5 text-blue-500" />, gradient: 'from-[#00929E] to-[#007A85]' },
  2: { icon: <DollarSign className="w-3.5 h-3.5 text-emerald-500" />, gradient: 'from-[#00929E] to-[#007A85]' },
  3: { icon: <Percent className="w-3.5 h-3.5 text-purple-500" />, gradient: 'from-[#00929E] to-[#007A85]' },
};

const QuestionComponent: React.FC<QuestionProps> = ({
  question,
  onAnswerChange,
  currentAnswer,
  currentStep,
  totalSteps,
}) => {
  const {
    id,
    libelle,
    type,
    placeholder = '',
    plage = [0, 100],
    defaultValue,
    required = false,
  } = question;

  const [inputValue, setInputValue] = useState<QuestionAnswer>(currentAnswer ?? defaultValue ?? '');

  useEffect(() => {
    // Synchronise si un parent modifie la valeur
    setInputValue(currentAnswer ?? defaultValue ?? '');
  }, [currentAnswer, defaultValue]);

  const handleChange = (value: QuestionAnswer) => {
    setInputValue(value);
    onAnswerChange?.(value);
  };

  const min = plage[0];
  const max = plage[1];
  const step = question.step ?? 1;

  const stepColor = STEP_COLORS[currentStep] ?? STEP_COLORS[1];

  const renderInputField = () => {
    if (type === 'slider') {
      return (
        <ProfessionalSlider
          value={(inputValue as number) ?? min}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          label={id === 'volume' ? 'Heures par semaine' : 'Taux d’automatisation'}
          unit={id === 'volume' ? '' : '%'}
        />
      );
    }

    if (type === 'number') {
      return (
        <div className="space-y-3">
          <div className="relative">
            <div className="absolute left-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
              <span className="text-lg font-semibold text-[#00929E]">CFA</span>
              <div className="w-px h-3.5 bg-gray-300/60" />
            </div>

            <input
              type="number"
              placeholder={placeholder}
              className="w-full pl-14 pr-9 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-[#00929E]/40 focus:outline-none"
              min={0}
              value={inputValue as number}
              onChange={(e) => handleChange(parseFloat(e.target.value) || 0)}
            />

            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-500">/h</span>
          </div>

          <div className="p-2.5 bg-blue-50 rounded-lg border border-blue-200/50 text-xs text-blue-700 flex items-center gap-1.5">
            <Calculator className="w-3 h-3" />
            Salaire brut chargé ÷ 1820h
          </div>
        </div>
      );
    }

    // fallback input text
    return (
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-2.5 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-100 focus:outline-none"
        value={(inputValue as string) ?? ''}
        onChange={(e) => handleChange(e.target.value)}
      />
    );
  };

  // titre dynamique pour les questions principales
  const computedTitle =
    id === 'taux'
      ? 'Quelle proportion de ces tâches peut être automatisée ?'
      : id === 'volume'
      ? "Combien d’heures par semaine votre équipe consacre-t-elle aux tâches répétitives ?"
      : libelle;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30">

      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <div className="p-1 rounded-md bg-[#E6F6F7]">{stepColor.icon}</div>
            <span className="text-xs font-medium text-gray-700">
              Question {currentStep}/{totalSteps}
            </span>
          </div>

          <div className="mt-2">
            <div className="flex items-center justify-between mb-1 text-xs text-gray-500">
              <span>Progression</span>
              <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>

            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${stepColor.gradient} transition-all duration-500`}
                style={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CONTENU */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-xl p-5 border border-gray-200 shadow-lg">

          <h2 className="text-base font-bold text-gray-900 mb-4">
            {computedTitle}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </h2>

          {renderInputField()}
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
