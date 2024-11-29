
import { useState, useEffect } from 'react';
import { CompanyInfo } from '@/app/types';
import { useUserContext } from '@/context/UserContext';
import { fetchCompanyInfo } from '@/hooks/api';
import { toast } from 'react-toastify';

export const useCompanyInfo = () => {
  const { language, userInfo, questions, currentStep } = useUserContext();
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCompanyData = async () => {
      const businessId = userInfo?.questionAnswers['k1'];
      if (!businessId) return;

      // Only fetch if we're on the first question (k1.1)
      const currentQuestion = questions[currentStep];
      if (currentQuestion?.id !== 'k1.1') return;

      try {
        setIsLoading(true);
        const data = await fetchCompanyInfo(businessId);

        if (data) {
          setCompanyInfo(data);
          toast.success(
            language === 'fi'
              ? 'Yrityksen tiedot haettu onnistuneesti'
              : 'Company information fetched successfully'
          );
        }
      } catch (error) {
        toast.error(
          language === 'fi'
            ? 'Virhe yritystietojen haussa'
            : 'Error fetching company information'
        );
        console.error('Error fetching company data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompanyData();
  }, [currentStep, questions, userInfo, language]);

  return { companyInfo, isLoading };
};