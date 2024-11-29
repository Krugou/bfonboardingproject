'use client';
import {initializeAnalytics} from '@/utils/analytics';
import {isSupported} from '@firebase/analytics';
import React, {useEffect} from 'react';
import {useUserContext} from '@/context/UserContext';
const GoogleStartup: React.FC = () => {
  useEffect(() => {
    isSupported().then((supported) => {
      if (supported) {
        initializeAnalytics();
      }
    });
  }, []);
  return <div></div>;
};

export default GoogleStartup;
