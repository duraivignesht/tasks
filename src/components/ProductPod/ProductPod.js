import React, {useState} from 'react';

import { Price } from '../Price/Price';
import './ProductPod.scss'

export const context = React.createContext();

export const ProductPod = ({ product,handleClick }) => {
  if (!product) return null;
  const getSingleProduct = (product) => {
    let data = {"image":product.image,"brand":product.brand,"description":product.description,"price":product.price};
    handleClick(data);
  };
  return (
    <article className='product-pod' onClick={() => { getSingleProduct(product); }}>
      {/* TODO: make DRY with a ProductImage component */}
      {product.image && 
        <img
          src={product.image} 
          alt="Home Depot logo"
        />
      } 
      {product.brand && 
        <b>
          {product.brand}
        </b> 
        } <br />
      {product.description && 
        <span>
          {product.description}
        </span>
      } 
      <Price product={product} />
    </article>
  );
};
