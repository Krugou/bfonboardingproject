import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface WelcomeMessageProps {
  language: string;
}

/**
 * WelcomeMessage component that displays an animated welcome message
 *
 * @param {WelcomeMessageProps} props - Component props
 * @returns {JSX.Element | null} The welcome message or null
 */
const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ language }) => {
  const welcomeTextRef = useRef<HTMLHeadingElement>(null);
  const chars = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const element = welcomeTextRef.current;
    if (!element) return;

    // Get the welcome message based on language
    const text = language === 'fi'
      ? 'Tervetuloa onboardingin tulevaisuuteen!'
      : 'Welcome to the future of onboarding!';

    // Split text into individual characters wrapped in spans, handling spaces
    element.innerHTML = text.split('').map(char =>
      char === ' '
        ? '<span class="inline-block opacity-0 w-[0.3em]">&nbsp;</span>'
        : `<span class="inline-block opacity-0">${char}</span>`
    ).join('');

    // Get all span elements
    chars.current = Array.from(element.querySelectorAll('span'));

    // Create timeline for character animation
    const tl = gsap.timeline();

    // Animate each character
    chars.current.forEach((char, i) => {
      tl.to(char, {
        opacity: 1,
        duration: 0.1,
        scale: 1.2,
        ease: 'back.out',
        yoyo: true,
      }, i * 0.05); // Stagger the start time
    });

    // Fade out the entire message after animation
    tl.to(element, {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: 'power2.in',
      delay: 2,
    });

    // Cleanup
    return () => {
      tl.kill();
    };
  }, [language]);

  return (
    <h1
      ref={welcomeTextRef}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                text-5xl font-bold text-bf-brand-primary z-50 text-center"
      role="status"
      aria-live="polite"
    />
  );
};

export default WelcomeMessage;
