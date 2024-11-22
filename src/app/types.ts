/**
 * Interface for AnswerOption with both Finnish and English texts
 */
export interface AnswerOption {
  key: string;
  score: number;
  text: {
    en: string;
    fi: string;
  };
}
export interface SpecialCondition {
  allowedAnswers?: string[] | number[];
  questionId?: string;
  numberOfEmployees?: {
    min?: number;
    max?: number;
  };
  companyAge?: {
    minYears?: number;
    maxYears?: number;
  };
  companyType?: string;
}
/**
 * Interface for Question with both Finnish and English texts
 */
export interface Question {
  [key: string]: string;
}

/**
 * Interface for Tooltip with both Finnish and English texts
 */
export interface Tooltip {
  [key: string]: string;
}

/**
 * Interface for SyntaxPlaceholder with both Finnish and English texts
 */
export interface SyntaxPlaceholder {
  [key: string]: string;
}

/**
 * Interface for ErrorAnswer with both Finnish and English texts
 */
export interface ErrorAnswer {
  [key: string]: string;
}

/**
 * Interface for ValidationRegex with both Finnish and English texts
 */
export interface ValidationRegex {
  [key: string]: string;
}

/**
 * Interface for QuestionItem with both Finnish and English texts and conditions
 */
export interface QuestionItem {
  id: string;
  question: {
    en: string;
    fi: string;
  };
  conditions: string[];
  tooltip: {
    en: string;
    fi: string;
  };
  syntaxPlaceholder: {
    en: string;
    fi: string;
  };
  answerType: string;
  answerOptions?: AnswerOption[];
  errorAnswer: {
    en: string;
    fi: string;
  };
  locked?: boolean;
  maxLength?: number;
  weight?: number;
  validationRegex?: ValidationRegex;
  specialCondition?: SpecialCondition;
}

/**
 * Interface for Condition with both Finnish and English names
 */
export interface Condition {
  shorthand: string;
  nameFi: string;
  nameEn: string;
}
