import React from 'react';
import { ProductPod } from '../ProductPod/ProductPod';
import './ProductGrid.scss';

export const ProductGrid = ({ products }) => {
  if (!products?.length) return null;
  /*let a = products.map((e)=>e.brand);
  console.log("List"+a)*/
  return (
    <article className='product-grid1'>
    <ProductPod product={products} />
      {/* TODO: Render a ProductPod for each product */}
    </article>
  );
};