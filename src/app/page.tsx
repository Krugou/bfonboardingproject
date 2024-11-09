'use client';
import AnsweredQuestionsModal from '@/components/AnsweredQuestionsModal';
import Header from '@/components/Header';
import LoadingElement from '@/components/LoadingElement';
import MainContent from '@/components/MainContent';
import {useUserContext} from '@/context/UserContext';
import React, {useState, useEffect, useRef} from 'react';
import {Bounce, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {gsap} from 'gsap';

/**
 * Home component that renders the main page of the application.
 * It includes the Header, MainContent, and AnsweredQuestionsModal components.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {userInfo, language} = useUserContext();
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLHeadingElement>(null);
  const loginTextRef = useRef<HTMLParagraphElement>(null);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  useEffect(() => {
    try {
      if (textRef.current && subTextRef.current && loginTextRef.current) {
        const tl = gsap.timeline();
        tl.fromTo(
          textRef.current,
          {opacity: 0, y: -50},
          {opacity: 1, y: 0, duration: 1, ease: 'bounce.out'},
        )
          .fromTo(
            subTextRef.current,
            {opacity: 0, y: -30},
            {opacity: 1, y: 0, duration: 1, ease: 'bounce.out'},
            '-=0.5',
          )
          .fromTo(
            loginTextRef.current,
            {opacity: 0, y: -20},
            {opacity: 1, y: 0, duration: 1, ease: 'bounce.out'},
            '-=0.5',
          );
      }
    } catch (error) {
      console.error('Error animating text:', error);
    }

    // Cleanup function to prevent memory leaks
    return () => {
      if (textRef.current) {
        gsap.killTweensOf(textRef.current);
      }
      if (subTextRef.current) {
        gsap.killTweensOf(subTextRef.current);
      }
      if (loginTextRef.current) {
        gsap.killTweensOf(loginTextRef.current);
      }
    };
  }, []);

  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={'light'}
        transition={Bounce}
      />
      <div className='flex flex-col w-full bg-bf-gray h-screen items-center'>
        <Header />
        {!userInfo && (
          <div className='flex flex-col justify-center items-center h-screen'>
            <h2
              ref={textRef}
              className='text-6xl font-extrabold text-bf-brand-primary'>
              BUSINESS FINLAND
            </h2>
            <h4 ref={subTextRef} className='text-4xl font-bold text-gray-700'>
              {language === 'fi' ? 'Onboarding Portaali' : 'Onboarding Portal'}
            </h4>
            <LoadingElement />
            <p ref={loginTextRef} className='text-2xl font-bold text-gray-700'>
              {language === 'fi'
                ? 'Kirjaudu sisään aloittaaksesi'
                : 'Please login to start'}
            </p>
          </div>
        )}
        {userInfo && (
          <>
            <MainContent handleOpenModal={toggleModal} />
            <AnsweredQuestionsModal open={modalOpen} onClose={toggleModal} />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
