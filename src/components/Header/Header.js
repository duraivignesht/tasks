import React from 'react';
import { Link } from 'react-router-dom';
export const Header = ({ text }) => {
  return (
    <>
      <h1 data-testid='heading'>
        {text}   
      </h1>
      
    </>
  );
};
