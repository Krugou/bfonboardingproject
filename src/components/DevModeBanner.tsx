import React from 'react';

const DevModeBanner = () => {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className='fixed top-0 right-0 p-2 bg-red-500 text-white'>
      Development Mode
    </div>
  );
};

export default DevModeBanner;