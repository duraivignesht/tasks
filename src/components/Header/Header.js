import React from 'react';
export const Header = ({ text }) => {
  return (
    <>
      <h1 data-testid='heading'>
        {text}   
      </h1>
      
    </>
  );
};
