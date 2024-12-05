'use client';

import {UserContextState, UserProfile} from '@/types/user';
import {auth, db} from '@/utils/firebase';
import {fetchHealthStatus} from '@/hooks/api';
import {toast} from 'react-toastify';
import {onAuthStateChanged} from 'firebase/auth';
import {doc, getDoc, onSnapshot, updateDoc} from 'firebase/firestore';
import React, {createContext, useContext, useEffect, useState} from 'react';

// Update the context type definition
const UserContext = createContext<UserContextState | undefined>(undefined);

export const UserProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [language, setLanguage] = useState('en');
  const [userInfo, setUserInfo] = useState<UserProfile | null>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [listeningMode, setListeningMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isUnsupportedBusiness, setIsUnsupportedBusiness] = useState(false);
  const updateUser = (updates: Partial<UserProfile>) => {
    if (!userInfo || !auth.currentUser?.uid) return;

    setUserInfo((prev) => ({...prev!, ...updates}));
  };

  // Add health check on mount
  useEffect(() => {
    const checkApiHealth = async () => {
      try {
        setIsLoading(true);
        const health = await fetchHealthStatus();
        if (!health?.status) {
          toast.error(
            'API service is currently unavailable. Some features may not work.',
          );
        }
      } catch (error) {
        toast.error(
          'Unable to connect to the API service. Please try again later.',
        );
        console.error('Health check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkApiHealth();
  }, []);

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
        const updateData: Partial<UserContextState['userInfo']> = {
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
        updateUser,
        isLoading,
        setIsLoading,
        isUnsupportedBusiness,
        setIsUnsupportedBusiness,
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
