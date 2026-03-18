import React from 'react';
import {CompanyInfo} from '@/app/types';

interface CompanyInfoDisplayProps {
  isLoading: boolean;
  companyInfo: CompanyInfo | null;
  language: 'fi' | 'en';
}

const CompanyInfoDisplay: React.FC<CompanyInfoDisplayProps> = ({
  isLoading,
  companyInfo,
  language,
}) => {
  if (isLoading) {
    return (
      <div
        role='status'
        aria-label={language === 'fi' ? 'Ladataan...' : 'Loading...'}
        className='mt-2 text-sm font-bold text-bf-brand-primary'>
        {language === 'fi'
          ? 'Ladataan yritystietoja...'
          : 'Loading company information...'}
      </div>
    );
  }

  if (!companyInfo) {
    return null;
  }

  const translations = {
    businessId: language === 'fi' ? 'Y-tunnus: ' : 'Business ID: ',
    name: language === 'fi' ? 'Nimi: ' : 'Name: ',
    address: language === 'fi' ? 'Osoite: ' : 'Address: ',
    website: language === 'fi' ? 'Verkkosivusto: ' : 'Website: ',
    mainBusinessLine:
      language === 'fi' ? 'Päätoimiala: ' : 'Main Business Line: ',
  };

  return (
    <div className='mt-2 text-sm font-bold text-bf-brand-primary'>
      <div className='space-y-1'>
        {companyInfo.businessId?.value && (
          <p>
            {translations.businessId}
            {companyInfo.businessId.value}
          </p>
        )}
        {companyInfo.names?.[0]?.name && (
          <p>
            {translations.name}
            {companyInfo.names[0].name}
          </p>
        )}
        {companyInfo.addresses?.[0]?.street && (
          <p>
            {translations.address}
            {companyInfo.addresses[0].street}
          </p>
        )}
        {companyInfo.website?.url && (
          <p>
            {translations.website}
            {companyInfo.website.url}
          </p>
        )}
        {companyInfo.mainBusinessLine?.descriptions?.[0]?.description && (
          <p>
            {translations.mainBusinessLine}
            {companyInfo.mainBusinessLine.descriptions[0].description}
          </p>
        )}
      </div>
    </div>
  );
};

export default CompanyInfoDisplay;
