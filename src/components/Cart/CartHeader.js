import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { context } from '../../App';

export const CartHeader = () => {
  const { cart } = useContext(context);

  return (
     <>
     <Link to={'/cart'}>
      <h4>Cart {cart.length}</h4>
      </Link>
     </>
  );
};
