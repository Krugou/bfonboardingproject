import React, {createContext, useContext, useState} from 'react';

interface UserContextType {
  userInfo: {
    questionAnswers: Record<string, any>;
  };
  // eslint-disable-next-line no-unused-vars
  setAnswer: (questionId: string, answer: any) => void;
  language: string;
  // eslint-disable-next-line no-unused-vars
  setLanguage: (language: string) => void;
  currentQuestion: number;
  // eslint-disable-next-line no-unused-vars
  setCurrentQuestion: (questionId: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [language, setLanguage] = useState('en');
  const [userInfo, setUserInfo] = useState<{
    questionAnswers: Record<string, any>;
  }>({
    questionAnswers: {},
  });
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const setAnswer = (questionId: string, answer: any) => {
    console.log('🚀 ~ setAnswer ~ answer:', answer);
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      questionAnswers: {
        ...prevUserInfo.questionAnswers,
        [questionId]: answer,
      },
    }));
    console.log(JSON.stringify(userInfo, null, 2));
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
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
