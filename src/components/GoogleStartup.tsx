'use client'
import { initializeAnalytics } from '@/utils/analytics';
import { isSupported } from '@firebase/analytics';
import React, { useEffect } from 'react';
import { useUserContext } from '@/context/UserContext';
const GoogleStartup: React.FC = () => {
  useEffect(() => {
    isSupported().then((supported) => {
      if (supported) {
        initializeAnalytics();
      }
    });
  }, []);
  const { setLastInteractionTime } = useUserContext();

  useEffect(() => {
    const handleUserInteraction = () => {
      setLastInteractionTime(Date.now());
    };

    const events = ['click', 'mousemove', 'keydown', 'scroll', 'touchstart'];

    events.forEach((event) =>
      window.addEventListener(event, handleUserInteraction)
    );

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, handleUserInteraction)
      );
    };
  }, [setLastInteractionTime]);
  return (
    <div>

    </div>
  );
};

export default GoogleStartup;
