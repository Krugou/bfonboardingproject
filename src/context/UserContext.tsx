'use client';

import {auth, db} from '@/utils/firebase';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {doc, getDoc, onSnapshot, updateDoc} from 'firebase/firestore';
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
  highContrast: boolean;
  setHighContrast: React.Dispatch<React.SetStateAction<boolean>>;
  fontSize: number;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
  questions: any[];
  setQuestions: React.Dispatch<React.SetStateAction<any[]>>;
  lastInteractionTime: number;
  setLastInteractionTime: React.Dispatch<React.SetStateAction<number>>;
  listeningMode: boolean;
  setListeningMode: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStep: (step: number) => void;
  currentStep: number;
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
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [questions, setQuestions] = useState<any[]>([]);
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  const [listeningMode, setListeningMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
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

  const setAnswer = async (questionId: string, answer: any) => {
    // Update local state
    // @ts-expect-error
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      questionAnswers: {
        ...prevUserInfo?.questionAnswers,
        [questionId]: answer,
      },
    }));

    // Save to Firebase
    const user = auth.currentUser;
    if (user) {
      const accountRef = doc(db, 'accounts', user.uid);
      await updateDoc(accountRef, {
        [`questionAnswers.${questionId}`]: answer,
      });
    }
  };

  useEffect(() => {
    const handleUserInteraction = () => {
      setLastInteractionTime(Date.now());
    };

    const events = ['click', 'mousemove', 'keydown', 'scroll', 'touchstart'];

    events.forEach((event) =>
      window.addEventListener(event, handleUserInteraction),
    );

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, handleUserInteraction),
      );
    };
  }, []);

  useEffect(() => {
    const checkInactivity = () => {
      if (Date.now() - lastInteractionTime > 3600000) {
        signOut(auth);
      }
    };

    const interval = setInterval(checkInactivity, 60000);

    return () => clearInterval(interval);
  }, [lastInteractionTime]);
  // console log listeningmode when it changes
  useEffect(() => {
    console.log('listeningMode', listeningMode);
  }, [listeningMode]);
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
        highContrast,
        setHighContrast,
        fontSize,
        setFontSize,
        questions,
        setQuestions,
        lastInteractionTime,
        setLastInteractionTime,
        listeningMode,
        setListeningMode,
        setCurrentStep,
        currentStep,
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
