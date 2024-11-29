import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';

const LoadingBox: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const loadingText = 'BUSINESS FINLAND ONBOARDING LOADING...';

  useEffect(() => {
    // Clear any existing animations
    gsap.context(() => {
      // Reset visibility
      gsap.set(letterRefs.current, {opacity: 0});

      // Create stagger animation for letters
      gsap.to(letterRefs.current, {
        opacity: 1,
        duration: 0.1,
        stagger: {
          each: 0.1,
          repeat: -1,
          yoyo: true,
          repeatDelay: 0.5,
        },
        ease: 'power1.inOut',
      });
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf(letterRefs.current);
    };
  }, []);

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50'>
      <div
        ref={textRef}
        className='text-bf-brand-primary text-2xl font-bold tracking-wider'
        role='status'
        aria-label='Loading'>
        {loadingText.split('').map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            ref={(el) => {
              letterRefs.current[index] = el;
            }}
            className='inline-block'
            aria-hidden='true'>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoadingBox;
