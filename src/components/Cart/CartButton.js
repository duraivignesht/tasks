import React, { useContext } from "react";
import { context } from '../../App';

export const CartButton = ({ product }) => {
  const { addProductToCart } = useContext(context);
  return (
    <>
    <button onClick={() => addProductToCart(product)}>Add to cart</button>
    </>
  );
};

