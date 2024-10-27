import type {Metadata} from 'next';
import localFont from 'next/font/local';
import React, { useState, useEffect } from 'react';
import Favicon from './favicon.webp';
import './globals.css';
import { UserProvider, useUserContext } from '@/context/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const finlandica = localFont({
  src: './Finlandica/Finlandica-VariableFont_wght.ttf',
});

export const metadata: Metadata = {
  title: 'Business Finland Onboarding Portal',
  description:
    'Welcome to the Business Finland Onboarding Portal. This is where you complete the onboarding process.',
  openGraph: {
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Business_Finland.jpg/220px-Business_Finland.jpg',
        width: 220,
        height: 124,
        alt: 'Business Finland',
      },
    ],
  },
  icons: [{rel: 'icon', url: Favicon.src}],
};

const RootLayout = ({children}: {children: React.ReactNode}) => {
  const { isDarkmode, setIsDarkmode } = useUserContext();
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--font-size', `${fontSize}px`);
    root.style.setProperty('--high-contrast', highContrast ? 'contrast(2)' : 'contrast(1)');
  }, [fontSize, highContrast]);

  return (
    <html lang='en'>
      <body className={`${finlandica.className} ${isDarkmode ? 'dark' : 'light'}`}>
        <UserProvider>
          <ToastContainer />
          <div>
            <label>
              <input
                type="checkbox"
                checked={highContrast}
                onChange={() => setHighContrast(!highContrast)}
              />
              High Contrast
            </label>
            <label>
              Font Size:
              <input
                type="number"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                min="12"
                max="24"
              />
            </label>
            <label>
              <input
                type="checkbox"
                checked={isDarkmode}
                onChange={() => setIsDarkmode(!isDarkmode)}
              />
              Dark Mode
            </label>
          </div>
          {children}
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
