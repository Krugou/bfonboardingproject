import {useEffect} from 'react';
import {toast} from 'react-toastify';
import {useUserContext} from '@/context/UserContext';

export const useQuestionsLogic = () => {
  const {userInfo, questions, currentStep, setCurrentStep, language} =
    useUserContext();

  useEffect(() => {
    if (
      questions[currentStep]?.id === 'k1.1' &&
      userInfo?.questionAnswers['k1.1'] === 'No'
    ) {
      setCurrentStep(0);

      if (userInfo?.questionAnswers) {
        delete userInfo.questionAnswers['k1.1'];
      }

      toast.info(
        language === 'fi' ? 'Palataan alkuun' : 'Going back to the beginning',
      );
    }
  }, [
    userInfo?.questionAnswers,
    currentStep,
    questions,
    setCurrentStep,
    language,
  ]);
};
