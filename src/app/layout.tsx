import GoogleStartup from '@/components/GoogleStartup';
import { UserProvider } from '@/context/UserContext';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favicon from './favicon.webp';
import './globals.css';

const finlandica = localFont({
  src: './Finlandica/Finlandica-VariableFont_wght.ttf',
});
export const metadata: Metadata = {
  title: 'Business Finland Onboarding Portal',
  description:
    'Welcome to the Business Finland Onboarding Portal. This is where you complete the onboarding process. Get started by logging in.',
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
// console.log('Website rendered in ' + process.env.NODE_ENV);
const RootLayout = ({children}: {children: React.ReactNode}) => {


  return (
    <html lang='en'>
      <body className={finlandica.className}>
        <UserProvider>
          <GoogleStartup />
          <ToastContainer  position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={'light'}
        transition={Bounce} />
          {children}
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
