import React, {forwardRef} from 'react';
import './LoadingElement.css';

const LoadingElement = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  return (
    <div className='container' ref={ref}>
      <div className='cloud front'>
        <span className='left-front'></span>
        <span className='right-front'></span>
      </div>
      <span className='sun sunshine'></span>
      <span className='sun'></span>
      <div className='cloud back'>
        <span className='left-back'></span>
        <span className='right-back'></span>
      </div>
    </div>
  );
});

LoadingElement.displayName = 'LoadingElement';

export default LoadingElement;
