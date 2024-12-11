import {useEffect, useRef} from 'react';
import {toast} from 'react-toastify';
import {useUserContext} from '@/context/UserContext';

export const useQuestionsLogic = () => {
  const {userInfo, questions, currentStep, setCurrentStep, language} =
    useUserContext();
  const previousStep = useRef(currentStep);

  useEffect(() => {
    if (!questions.length || !userInfo) return;

    const currentQuestion = questions[currentStep];
    if (!currentQuestion) return;

    // Determine navigation direction
    const isMovingForward = currentStep > previousStep.current;
    previousStep.current = currentStep;

    const shouldSkip = (() => {
      const specialCondition = currentQuestion.specialCondition;
      if (!specialCondition) return false;

      // Check company age condition
      if (specialCondition.companyAge) {
        const companyCreatedAt = userInfo.createdAt;
        const ageInYears =
          (new Date().getTime() - new Date(companyCreatedAt).getTime()) /
          (1000 * 60 * 60 * 24 * 365);

        if (
          specialCondition.companyAge.maxYears &&
          ageInYears > specialCondition.companyAge.maxYears
        ) {
          console.log('ageInYears', ageInYears);
          return true;
        }
        if (
          specialCondition.companyAge.minYears &&
          ageInYears < specialCondition.companyAge.minYears
        ) {
          console.log('ageInYears', ageInYears);
          return true;
        }
      }

      // Check employee count condition
      if (specialCondition.numberOfEmployees?.max) {
        const employeeCount = parseInt(userInfo.questionAnswers['k2.5'] || '0');
        if (employeeCount > specialCondition.numberOfEmployees.max) {
          console.log('employeeCount', employeeCount);
          return true;
        }
      }

      // Check dependent question condition
      if (specialCondition.questionId && specialCondition.allowedAnswers) {
        const dependentAnswer = Number(
          userInfo.questionAnswers[specialCondition.questionId]
            ?.numberOfEmployees,
        );

        if (!specialCondition.allowedAnswers.includes(dependentAnswer)) {
          return true;
        }
      }

      return false;
    })();

    if (shouldSkip) {
      setCurrentStep((prev) => {
        const nextStep = isMovingForward
          ? Math.min(prev + 1, questions.length)
          : Math.max(prev - 1, 0);
        return nextStep;
      });

      toast.info(
        language === 'fi'
          ? 'Siirrytään seuraavaan soveltuvaan kysymykseen'
          : 'Moving to next applicable question',
      );
    }
  }, [currentStep]);
};
