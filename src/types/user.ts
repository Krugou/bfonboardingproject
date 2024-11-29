
export interface BrowserInfo {
  platform: string;
  language: string;
}

export interface UserProfile {
  email: string;
  questionAnswers: Record<string, any>;
  lastLogin?: Date;
  createdAt: Date;
  browserInfo?: BrowserInfo;
  lastName?: string;
  firstName?: string;
  totalScore?: number;
  businessId?: string;
  preferredLanguage?: string;
}

export interface UserContextState {
  userInfo: UserProfile | null;
  setUserInfo: React.Dispatch<React.SetStateAction<UserProfile | null>>;
  setAnswer: (questionId: string, answer: any) => void;
  language: 'en' | 'fi' | string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  questions: any[];
  setQuestions: React.Dispatch<React.SetStateAction<any[]>>;
  listeningMode: boolean;
  setListeningMode: React.Dispatch<React.SetStateAction<boolean>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  saveDropdownSelection: (questionId: string, selectedOptions: string[]) => void;
}