export type QuestionAnswer = number | string | number[];

export type Question = {
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

export interface QuestionProps {
  question: Question;
  onAnswerChange?: (answer: QuestionAnswer) => void;
  currentAnswer?: QuestionAnswer;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
}

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

export interface CompanyInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (info: CompanyInfo) => Promise<void>;
  isLoading: boolean;
  defaultInfo?: CompanyInfo;
}

