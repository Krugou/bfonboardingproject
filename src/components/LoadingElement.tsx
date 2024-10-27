import React from 'react';
import './LoadingElement.css'; // Assuming you have a CSS file for styles

const LoadingElement = () => {
  return (
    <div className="">
      <div className="cloud front">
        <span className="left-front"></span>
        <span className="right-front"></span>
      </div>
      <span className="sun sunshine"></span>
      <span className="sun"></span>
      <div className="cloud back">
        <span className="left-back"></span>
        <span className="right-back"></span>
      </div>
    </div>
  );
};

export default LoadingElement;
