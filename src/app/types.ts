export interface Question {
  [key: string]: string;
}

export interface Tooltip {
  [key: string]: string;
}

export interface SyntaxPlaceholder {
  [key: string]: string;
}

export interface ErrorAnswer {
  [key: string]: string;
}

export interface QuestionItem {
  id: string;
  question: Question;
  condition: string;
  tooltip: Tooltip;
  syntaxPlaceholder: SyntaxPlaceholder;
  answerType: string;
  answerOptions?: {[key: string]: string};
  targetAudience: string;
  errorAnswer: ErrorAnswer;
  optionalStepAnswer?: {[key: string]: string};
  unit?: string;
}
