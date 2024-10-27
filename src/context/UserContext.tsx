'use client';

import {auth, db} from '@/utils/firebase';
import {onAuthStateChanged} from 'firebase/auth';
import {doc, getDoc, onSnapshot} from 'firebase/firestore';
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
  questions: any[];
  setQuestions: React.Dispatch<React.SetStateAction<any[]>>;
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
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('🚀 ~ unsubscribe ~ auth:', auth);
      if (user) {
        try {
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
        } catch (error) {
          console.error('Error fetching user info: ', error);
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

  useEffect(() => {
    const docRef = doc(db, 'questions', 'questions');

    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          const questionsData: any = data.questions.map(
            (q: any, index: number) => ({
              id: index.toString(),
              ...q,
            }),
          );
          setQuestions(questionsData);
        } else {
          console.error('No such document!');
        }
      },
      (error) => {
        console.error('Error fetching questions: ', error);
      },
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

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
        questions,
        setQuestions,
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
