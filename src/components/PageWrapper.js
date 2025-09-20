import React from 'react';
import bgImage from './bg3.png';

const PageWrapper = ({ children }) => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
