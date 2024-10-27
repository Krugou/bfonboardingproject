'use client';

import {auth, db} from '@/utils/firebase';
import {onAuthStateChanged} from 'firebase/auth';
import {doc, getDoc} from 'firebase/firestore';
import React, {createContext, useContext, useEffect, useState} from 'react';

interface UserContextType {
  userInfo: {
    email: string;
    questionAnswers: Record<string, any>;
    lastLogin?: Date;
    createdAt: Date;
  } | null;
  setUserInfo: React.Dispatch<
    React.SetStateAction<{
      email: string;
      questionAnswers: Record<string, any>;
      lastLogin?: Date;
      createdAt: Date;
    } | null>
  >;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setAnswer: (questionId: string, answer: any) => void;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  isDarkmode: boolean;
  setIsDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
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
  } | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isDarkmode, setIsDarkmode] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('🚀 ~ unsubscribe ~ auth:', auth);
      if (user) {
        // User is signed in, fetch user info from Firestore
        const accountDoc = await getDoc(doc(db, 'accounts', user.uid));
        if (accountDoc.exists()) {
          const accountData = accountDoc.data();
          setUserInfo({
            email: accountData.email ?? 'default@example.com',
            questionAnswers: accountData.questionAnswers,
            lastLogin: accountData.lastLogin?.toDate(),
            createdAt: accountData.createdAt.toDate(),
          });
        }
      } else {
        // User is signed out, clear user info
        setUserInfo(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    if (userInfo) {
      console.log('userInfo', userInfo);
    }
  }, [userInfo]);
  const setAnswer = (questionId: string, answer: any) => {
    // @ts-expect-error
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      questionAnswers: {
        ...prevUserInfo?.questionAnswers,
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
        isDarkmode,
        setIsDarkmode,
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
