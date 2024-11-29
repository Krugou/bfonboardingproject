import {ReactNode} from 'react';

export interface BaseAuthFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onClose: () => void;
  error: string | null;
  handleGoogleLogin: () => void;
  language: string;
  toggleAuthMode: () => void;
  firstName: string;
  lastName: string;
  setFirstName: (name: string) => void;
  setLastName: (name: string) => void;
  businessId?: string;
  setBusinessId: (value: string) => void;
  preferredLanguage?: string;
  setPreferredLanguage: (value: string) => void;
}

export interface AccountData {
  email: string;

  firstName: string;

  lastName: string;

  businessId: string;

  preferredLanguage: string;

  questionAnswers: Record<string, string>;

  createdAt: Date;

  lastLogin: Date;

  browserInfo: BrowserInfo;
}

export interface BrowserInfo {
  userAgent: string;
  platform: string;
  language: string;
}

export class AuthError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'AuthError';
  }
}
