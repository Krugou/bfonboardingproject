import type {Metadata} from 'next';
import Head from 'next/head';
import React from 'react';
import './globals.css';
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
};
console.log('Website rendered in ' + process.env.NODE_ENV);
const RootLayout = ({children}: {children: React.ReactNode}) => (
  <html lang='en'>
    <Head>
      <link rel='icon' href='/icons/favicon-32x32.webp' />
    </Head>
    <body className='font-mainFont'>{children}</body>
  </html>
);

export default RootLayout;
