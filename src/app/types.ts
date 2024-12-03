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
  en: string;
  fi: string;
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
  errorAnswer?: {
    en: string;
    fi: string;
  };
  locked?: boolean;
  maxLength?: number;
  weight?: number | null;
  validationRegex?: ValidationRegex;
  specialCondition?: SpecialCondition;
  ttsAudio?: boolean;
  originalOrder: number;
}
export interface CompanyInfo {
  businessId: {value: string}; // Unique identifier for the business
  names: {name: string}[]; // Array of names (localized or alternative names)
  addresses: {
    street: string;
    city?: string;
    postalCode?: string;
  }[]; // Address details with optional city and postal code
  website?: {
    url: string;
    description?: string;
  }; // Website URL and optional description
  mainBusinessLine?: {
    type: string; // Business line code

    descriptions: {description: string}[]; // Descriptions of the business line
  }; // Main business line information
  industry?: string; // Industry sector
  numberOfEmployees?: string; // Number of employees, if available
  name: string;
}
/**
 * Interface for Condition with both Finnish and English names
 */
export interface Condition {
  shorthand: string;
  nameFi: string;
  nameEn: string;
}
