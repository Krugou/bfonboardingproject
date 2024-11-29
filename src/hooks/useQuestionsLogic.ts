import {useEffect} from 'react';
import {toast} from 'react-toastify';
import {useUserContext} from '@/context/UserContext';

export const useQuestionsLogic = () => {
  const {userInfo, questions, currentStep, setCurrentStep, language} =
    useUserContext();

  useEffect(() => {
    // Skip if no questions or userInfo
    if (!questions.length || !userInfo) return;

    const currentQuestion = questions[currentStep];
    if (!currentQuestion) return;

    // Check special conditions
    const shouldSkip = (() => {
      const specialCondition = currentQuestion.specialCondition;
      if (!specialCondition) return false;

      // Check company age condition
      if (specialCondition.companyAge) {
        const companyCreatedAt = userInfo.createdAt;
        const ageInYears = (new Date().getTime() - new Date(companyCreatedAt).getTime()) / (1000 * 60 * 60 * 24 * 365);

        if (specialCondition.companyAge.maxYears && ageInYears > specialCondition.companyAge.maxYears) {
          return true;
        }
        if (specialCondition.companyAge.minYears && ageInYears < specialCondition.companyAge.minYears) {
          return true;
        }
      }

      // Check employee count condition
      if (specialCondition.numberOfEmployees?.max) {
        const employeeCount = parseInt(userInfo.questionAnswers['k2.5'] || '0');
        if (employeeCount > specialCondition.numberOfEmployees.max) {
          return true;
        }
      }

      // Check dependent question condition
      if (specialCondition.questionId && specialCondition.allowedAnswers) {
        const dependentAnswer = userInfo.questionAnswers[specialCondition.questionId];
        if (!dependentAnswer || !specialCondition.allowedAnswers.includes(dependentAnswer)) {
          return true;
        }
      }

      return false;
    })();

    // Skip to next question if conditions not met
    if (shouldSkip) {
      setCurrentStep((prev) => Math.min(prev + 1, questions.length));
      toast.info(
        language === 'fi'
          ? 'Siirrytään seuraavaan soveltuvaan kysymykseen'
          : 'Moving to next applicable question'
      );
    }
  }, [
    userInfo?.questionAnswers,
    currentStep,
    questions,
    setCurrentStep,
    language,
    userInfo?.createdAt
  ]);
};
