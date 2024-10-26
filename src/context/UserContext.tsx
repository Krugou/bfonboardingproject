import React, {createContext, useContext, useState} from 'react';

interface UserContextType {
  userInfo: {
    email: string;
    questionAnswers: Record<string, any>;
    lastLogin?: Date;
    createdAt: Date;
  };
  setUserInfo: React.Dispatch<
    React.SetStateAction<{
      email: string;
      questionAnswers: Record<string, any>;
      lastLogin?: Date;
      createdAt: Date;
    }>
  >;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setAnswer: (questionId: string, answer: any) => void;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [language, setLanguage] = useState('en');
  const [userInfo, setUserInfo] = useState<{
    email: string;
    questionAnswers: Record<string, any>;
    lastLogin?: Date;
    createdAt: Date;
  }>({
    email: '',
    questionAnswers: {},
    createdAt: new Date(),
  });
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const setAnswer = (questionId: string, answer: any) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      questionAnswers: {
        ...prevUserInfo.questionAnswers,
        [questionId]: answer,
      },
    }));
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        currentQuestion,
        setCurrentQuestion,
        setAnswer,
        language,
        setLanguage,
      }}>
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
