import React from 'react';
import { ProductPod } from '../ProductPod/ProductPod';
import './ProductGrid.scss';

export const ProductGrid = ({ products,handleClick }) => {
  if (!products?.length) return null;
  return (
    <article className='product-grid'>
    {
      
      products.map((products,index)=>
      {
      return  ( <ProductPod key={index} product={products} handleClick={handleClick} />
      )
    }
      )
    }
    
      {/* TODO: Render a ProductPod for each product */}
    </article>
  );
};
