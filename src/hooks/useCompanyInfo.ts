import {useState, useEffect} from 'react';
import {CompanyInfo} from '@/app/types';
import {useUserContext} from '@/context/UserContext';
import {fetchCompanyInfo} from '@/hooks/api';
import {toast} from 'react-toastify';
import {notAcceptedBusinessLines} from '@/data/noBusinessLines';

export const useCompanyInfo = () => {
  const {
    language,
    userInfo,
    questions,
    currentStep,
    isLoading,
    setIsLoading,
    setUserInfo,
  } = useUserContext();
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [isUnsupportedBusiness, setIsUnsupportedBusiness] = useState(false);
  const [unsupportedReason, setUnsupportedReason] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const fetchCompanyData = async () => {
      const businessId = userInfo?.questionAnswers['k1'];
      if (!businessId) return;
      setIsLoading(true);

      const currentQuestion = questions[currentStep];
      if (currentQuestion?.id !== 'k1.1') {
        setCompanyInfo(null);
        setIsUnsupportedBusiness(false);
        return;
      }

      try {
        const data = await fetchCompanyInfo(businessId);

        if (!data) {
          throw new Error('Company information not found');
        }

        // Check if business line is not supported
        const businessLineCode = data.mainBusinessLine;
        const unsupportedLine = notAcceptedBusinessLines.find(
          (line) => line.code === businessLineCode,
        );

        setIsUnsupportedBusiness(!!unsupportedLine);
        setUnsupportedReason(
          unsupportedLine
            ? language === 'fi'
              ? unsupportedLine.descriptionFi
              : unsupportedLine.descriptionEn
            : null,
        );
        //@ts-ignore
        setCompanyInfo(data);
        //@ts-ignore
        setUserInfo((prev) => ({
          ...prev!,
          companyInfoResult: data,
        }));

        toast.success(
          language === 'fi'
            ? 'Yrityksen tiedot haettu onnistuneesti'
            : 'Company information fetched successfully',
        );
      } catch (error) {
        toast.error(
          language === 'fi'
            ? 'Virhe yritystietojen haussa'
            : 'Error fetching company information',
        );
        console.error('Error fetching company data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompanyData();
  }, [currentStep, questions, userInfo, language, setUserInfo]);

  return {
    companyInfo,
    isLoading,
    isUnsupportedBusiness,
    unsupportedReason,
  };
};
