'use client';

import {UserContextState, UserProfile} from '@/types/user';
import {auth, db} from '@/utils/firebase';
import {fetchHealthStatus} from '@/hooks/api';
import {toast} from 'react-toastify';
import {onAuthStateChanged} from 'firebase/auth';
import {doc, getDoc, onSnapshot, updateDoc} from 'firebase/firestore';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {fetchCompanyInfo} from '@/hooks/api';
import {notAcceptedBusinessLines, BusinessLine} from '@/data/noBusinessLines';

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
  const [isUnsupportedReason, setIsUnsupportedReason] = useState<string | null>(
    null,
  );
  const [companyInfo, setCompanyInfo] = useState<
    UserProfile['companyInfo'] | null
  >(null);

  const updateUser = (updates: Partial<UserProfile>) => {
    if (!userInfo || !auth.currentUser?.uid) return;

    setUserInfo((prev) => ({...prev!, ...updates}));
  };

  const validateBusinessLine = (
    data: any,
  ): {isUnsupported: boolean; reason: string | null} => {
    try {
      if (!data?.mainBusinessLine?.type) {
        console.warn('Business line type is missing from company data');
        return {isUnsupported: false, reason: null};
      }

      const businessLineCode = data.mainBusinessLine.type;
      const unsupportedLine = notAcceptedBusinessLines.find(
        (line: BusinessLine) => line.code === businessLineCode,
      );

      return {
        isUnsupported: !!unsupportedLine,
        // @ts-expect-error
        reason: unsupportedLine
          ? {
              fi: unsupportedLine.descriptionFi,
              en: unsupportedLine.descriptionEn,
            }
          : null,
      };
    } catch (error) {
      console.error('Error validating business line:', error);
      return {isUnsupported: false, reason: null};
    }
  };
  const businessTypes = [
    {code: 'AOY', id: 2, name: 'Asunto-osakeyhtiö', additionalInfo: 'housing'},
    {code: 'ASH', id: 3, name: 'Asukashallintoalue'},
    {code: 'ASY', id: 4, name: 'Asumisoikeusyhdistys'},
    {code: 'AY', id: 5, name: 'Avoin yhtiö'},
    {code: 'AYH', id: 6, name: 'Aatteellinen yhdistys'},
    {code: 'ETS', id: 7, name: 'Euroopp.taloudell.etuyht.sivutoimipaikka'},
    {code: 'ETY', id: 8, name: 'Eurooppalainen taloudellinen etuyhtymä'},
    {code: 'SCE', id: 83, name: 'Eurooppaosuuskunta'},
    {code: 'SCP', id: 84, name: 'Eurooppaosuuspankki'},
    {code: 'HY', id: 9, name: 'Hypoteekkiyhdistys'},
    {code: 'KOY', id: 10, name: 'Keskinäinen kiinteistöosakeyhtiö'},
    {code: 'KVJ', id: 11, name: 'Julkinen keskinäinen vakuutusyhtiö'},
    {code: 'KVY', id: 12, name: 'Keskinäinen vakuutusyhtiö'},
    {code: 'KY', id: 13, name: 'Kommandiittiyhtiö'},
    {code: 'OK', id: 14, name: 'Osuuskunta'},
    {code: 'OP', id: 15, name: 'Osuuspankki'},
    {code: 'OY', id: 16, name: 'Osakeyhtiö'},
    {code: 'OYJ', id: 17, name: 'Julkinen osakeyhtiö'},
    {code: 'SE', id: 80, name: 'Eurooppayhtiö'},
    {code: 'SL', id: 19, name: 'Sivuliike'},
    {code: 'SP', id: 20, name: 'Säästöpankki'},
    {code: 'SÄÄ', id: 18, name: 'Säätiö'},
    {code: 'TYH', id: 21, name: 'Taloudellinen yhdistys'},
    {code: 'VOJ', id: 23, name: 'Julkinen vakuutusosakeyhtiö'},
    {code: 'VOY', id: 24, name: 'Vakuutusosakeyhtiö'},
    {code: 'VY', id: 25, name: 'Vakuutusyhdistys'},
    {code: 'VALTLL', id: 22, name: 'Valtion liikelaitos'},
  ];
  const fetchCompanyData = async () => {
    const businessId = userInfo?.questionAnswers['k1'];
    if (!businessId) return;

    try {
      setIsLoading(true);
      const companyInfoResult = await fetchCompanyInfo(businessId);
      if (!companyInfoResult) throw new Error('Company information not found');
      // @ts-expect-error
      const type = companyInfoResult.mainBusinessLine?.type;
      const {isUnsupported, reason} = validateBusinessLine(companyInfoResult);
      if (isUnsupported) {
        setIsUnsupportedBusiness(isUnsupported);
        setIsUnsupportedReason(reason);
        // @ts-expect-error
        setUserInfo((prev) => ({
          ...prev!,
          isUnsupportedBusiness,
          isUnsupportedReason: reason,
          isUnsupportedBusinessLine: type,
          companyInfo: companyInfoResult,
        }));
        return;
      }
      // @ts-expect-error
      const updatedCompanyForms = companyInfoResult.companyForms.map(
        (form: any) => {
          const matchedType = businessTypes.find(
            (type) => type.id === parseInt(form.type),
          );
          return matchedType
            ? {...form, additionalInfo: matchedType.additionalInfo}
            : form;
        },
      );
      if (updatedCompanyForms.additionalInfo) {
        setUserInfo((prev) => ({
          ...prev!,
          companyForms: updatedCompanyForms.additionalInfo,
        }));
      }

      // @ts-expect-error
      setCompanyInfo(companyInfoResult);
      // @ts-expect-error
      setUserInfo((prev) => ({
        ...prev!,
        companyInfo: companyInfoResult,
      }));

      toast.success(
        language === 'fi'
          ? 'Yrityksen tiedot haettu onnistuneesti'
          : 'Company information fetched successfully',
      );
    } catch (error) {
      console.error('Error fetching company data:', error);
      toast.error(
        language === 'fi'
          ? 'Virhe yritystietojen haussa'
          : 'Error fetching company information',
      );
    } finally {
      setIsLoading(false);
    }
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
            console.log('🚀 ~ unsubscribe ~ accountData:', accountData);
            // @ts-expect-error
            setUserInfo({...accountData, uid: user.uid});
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
    const updateUserInfo = async () => {
      if (userInfo && auth.currentUser?.uid) {
        const accountDocRef = doc(db, 'accounts', auth.currentUser.uid);
        try {
          // @ts-expect-error
          await updateDoc(accountDocRef, userInfo);
        } catch (error) {
          console.error('Error updating user info: ', error);
        }
      }
    };

    updateUserInfo();
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
        setIsUnsupportedReason,
        isUnsupportedReason,
        companyInfo,
        setCompanyInfo,
        fetchCompanyData,
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
