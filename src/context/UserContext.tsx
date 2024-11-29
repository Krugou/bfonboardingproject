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
    browserInfo?: {
      platform: string;
      language: string;
    };
    lastName?: string;
    firstName?: string;
    totalScore?: number;
    businessId?: string;
    preferredLanguage?: string;
  } | null;
  setUserInfo: React.Dispatch<
    React.SetStateAction<{
      email: string;
      questionAnswers: Record<string, any>;
      lastLogin?: Date;
      createdAt: Date;
      browserInfo?: {
        platform: string;
        language: string;
      };
      lastName?: string;
      firstName?: string;
      totalScore?: number;
      businessId?: string;
      preferredLanguage?: string;
    } | null>
  >;
  setAnswer: (questionId: string, answer: any) => void;
  language: 'en' | 'fi' | string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  questions: any[];
  setQuestions: React.Dispatch<React.SetStateAction<any[]>>;
  listeningMode: boolean;
  setListeningMode: React.Dispatch<React.SetStateAction<boolean>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  saveDropdownSelection: (
    questionId: string,
    selectedOptions: string[],
  ) => void;
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
    browserInfo?: {
      platform: string;
      language: string;
    };
    lastName?: string;
    firstName?: string;
    totalScore?: number;
    businessId?: string;
    preferredLanguage?: string;
  } | null>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [listeningMode, setListeningMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const accountDoc = await getDoc(doc(db, 'accounts', user.uid));
          if (accountDoc.exists()) {
            const accountData = accountDoc.data();
            if (accountData.preferredLanguage) {
              setLanguage(accountData.preferredLanguage);
            }
            setUserInfo({
              email: accountData.email ?? 'default@example.com',
              questionAnswers: accountData.questionAnswers,
              lastLogin: accountData.lastLogin?.toDate(),
              createdAt: accountData.createdAt.toDate(),
              browserInfo: accountData.browserInfo,
              lastName: accountData.lastName,
              firstName: accountData.firstName,
              totalScore: accountData.totalScore ?? 0,
              businessId: accountData.businessId,
              preferredLanguage: accountData.preferredLanguage,
            });
          }
        } catch (error) {
          console.error('Error fetching user info: ', error);
        }
      } else {
        x;
        setUserInfo(null);
        setLanguage('en');
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userInfo) {
      if (auth.currentUser?.uid) {
        const accountDocRef = doc(db, 'accounts', auth.currentUser.uid);
        const updateData: Partial<UserContextType['userInfo']> = {
          email: userInfo.email,
          questionAnswers: userInfo.questionAnswers,
          lastLogin: userInfo.lastLogin,
          createdAt: userInfo.createdAt,
          browserInfo: userInfo.browserInfo,
          lastName: userInfo.lastName,
          firstName: userInfo.firstName,
          totalScore: userInfo.totalScore ?? 0,
          businessId: userInfo.businessId,
          preferredLanguage: userInfo.preferredLanguage,
        };

        Object.keys(updateData).forEach(
          (key) =>
            updateData[key as keyof typeof updateData] === undefined &&
            delete updateData[key as keyof typeof updateData],
        );

        updateDoc(accountDocRef, updateData).catch((error) => {
          console.error('Error updating user info: ', error);
        });
      }
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

    return () => unsubscribe();
  }, []);

  const setAnswer = async (questionId: string, answer: any) => {
    if (!userInfo) return;

    try {
      const updatedAnswers = {
        ...userInfo.questionAnswers,
        [questionId]: answer,
      };

      // Calculate new total score from all answers
      const newTotalScore = Object.values(updatedAnswers).reduce(
        (total: number, ans: any) => {
          return total + (ans?.score || 0);
        },
        0,
      );

      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo!,
        questionAnswers: updatedAnswers,
        totalScore: newTotalScore,
      }));
    } catch (error) {
      console.error('Error updating answer and total score:', error);
      throw error;
    }
  };

  const saveDropdownSelection = async (
    questionId: string,
    selectedOptions: string[],
  ) => {
    if (!userInfo) return;
    if (auth.currentUser?.uid) {
      const userRef = doc(db, 'accounts', auth.currentUser.uid);
      const updatedAnswers = {
        ...userInfo.questionAnswers,
        [questionId]: selectedOptions.filter(
          (option) => option !== undefined && option !== null,
        ),
      };

      try {
        await updateDoc(userRef, {questionAnswers: updatedAnswers});
        setUserInfo((prev: any) => ({
          ...prev,
          questionAnswers: updatedAnswers,
        }));
      } catch (error) {
        console.error('Error saving dropdown selection:', error);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        setAnswer,
        language,
        setLanguage,
        questions,
        setQuestions,
        listeningMode,
        setListeningMode,
        setCurrentStep,
        currentStep,
        saveDropdownSelection,
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
