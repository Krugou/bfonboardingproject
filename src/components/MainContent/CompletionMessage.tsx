import React from 'react';
import {useUserContext} from '@/context/UserContext';
interface CompletionMessageProps {
  profileAnalysis: string | null;
}

const CompletionMessage: React.FC<CompletionMessageProps> = ({
  profileAnalysis,
}) => {
  const {language, userInfo} = useUserContext();
  return (
    <div className='flex flex-col m-2 p-2'>
      <h2 className='text-center text-bf-brand-primary font-bold text-base sm:text-lg md:text-xl lg:text-2xl'>
        {language === 'fi'
          ? 'Kiitos vastauksistasi!'
          : 'Thank you for your answers!'}
      </h2>
      <p className='text-center text-bf-brand-primary  text-sm'>
        {profileAnalysis} Total score: {userInfo ? userInfo.totalScore : 'N/A'}
      </p>
    </div>
  );
};

export default CompletionMessage;
