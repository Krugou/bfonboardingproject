import React, {createContext, useContext, useState} from 'react';

interface UserContextType {
  answers: Record<string, any>;
  // eslint-disable-next-line no-unused-vars
  setAnswer: (questionId: string, answer: any) => void;
  language: string;
  // eslint-disable-next-line no-unused-vars
  setLanguage: (language: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const setAnswer = (questionId: string, answer: any) => {
    console.log('🚀 ~ setAnswer ~ answer:', answer);
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
    console.log(JSON.stringify(answers, null, 2));
  };
  const [language, setLanguage] = useState('en');

  return (
    <UserContext.Provider value={{answers, setAnswer, language, setLanguage}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
