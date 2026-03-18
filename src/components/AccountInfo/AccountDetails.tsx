'use client';

import React from 'react';
import {UserProfile} from '@/types/user';
import {useUserContext} from '@/context/UserContext';
import LoadingBox from '../LoadingBox';

interface AccountDetailsProps {
  label: string;
  value: string | number;
  className?: string;
}

export const AccountDetailsField: React.FC<AccountDetailsProps> = ({
  label,
  value,
  className = '',
}) => (
  <div className={`mb-4 ${className}`}>
    <label className='block text-bf-brand-primary text-sm font-bold mb-2'>
      {label}
    </label>
    <p className='text-bf-brand-primary'>{value}</p>
  </div>
);

interface UserDetailsProps {
  userInfo: UserProfile;
  language: string;
}

export const UserDetails: React.FC<UserDetailsProps> = ({}) => {
  const {userInfo, language} = useUserContext();
  console.log('🚀 ~ userInfo:', userInfo);

  if (!userInfo) {
    return <LoadingBox />;
  }

  const createdAt = new Date(userInfo.createdAt);
  const lastLogin = userInfo.lastLogin ? new Date(userInfo.lastLogin) : null;

  const answeredQuestionsCount = Array.isArray(userInfo.questionAnswers)
    ? userInfo.questionAnswers.length
    : Object.keys(userInfo.questionAnswers).length;

  return (
    <div className='space-y-4'>
      {userInfo.firstName && userInfo.lastName && (
        <AccountDetailsField
          label={language === 'fi' ? 'Nimi:' : 'Name:'}
          value={`${userInfo.firstName} ${userInfo.lastName}`}
        />
      )}
      <AccountDetailsField
        label={language === 'fi' ? 'Sähköposti:' : 'Email:'}
        value={userInfo.email}
      />
      <div className='flex justify-between '>
        <AccountDetailsField
          label={language === 'fi' ? 'Luotu:' : 'Created At:'}
          value={createdAt.toLocaleDateString()}
        />
        <AccountDetailsField
          label={language === 'fi' ? 'Viimeisin kirjautuminen:' : 'Last Login:'}
          value={
            lastLogin
              ? lastLogin.toLocaleDateString()
              : language === 'fi'
              ? 'Ei tietoja'
              : 'N/A'
          }
        />
      </div>
      <div className='flex justify-between '>
        <AccountDetailsField
          label={
            language === 'fi' ? 'Vastattuja kysymyksiä:' : 'Answered Questions:'
          }
          value={answeredQuestionsCount}
        />
        <AccountDetailsField
          label={language === 'fi' ? 'Kokonaispisteet:' : 'Total Score:'}
          value={
            userInfo.totalScore !== undefined
              ? userInfo.totalScore
              : language === 'fi'
              ? 'Ei tietoja'
              : 'N/A'
          }
        />
      </div>
    </div>
  );
};
