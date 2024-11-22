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
}

export interface AccountData {
  email: string;
  questionAnswers: Record<string, any>;
  lastLogin: Date;
  createdAt: Date;
  browserInfo: BrowserInfo;
  firstName: string;
  lastName: string;
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
