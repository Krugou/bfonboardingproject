import type {Metadata} from 'next';
import React from 'react';
import './globals.css';
import Favicon from './public/favicon.webp';
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
console.log('Website rendered in ' + process.env.NODE_ENV);
const RootLayout = ({children}: {children: React.ReactNode}) => (
  <html lang='en'>
    <body className='font-mainFont'>{children}</body>
  </html>
);

export default RootLayout;
