'use client'
import { initializeAnalytics } from '@/utils/analytics';
import React, { useEffect } from 'react';
const GoogleStartup: React.FC = () => {
  useEffect(() => {
    initializeAnalytics();
  }, []);



  return (
    <div>

    </div>
  );
};

export default GoogleStartup;
