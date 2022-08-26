import React from 'react';

import { Price } from '../Price/Price';
import './ProductPreview.scss'


export const ProductPreview = ({ product }) => {
  if (!product) return null;

  return (
    <article className="product-preview">
      {/* TODO: make DRY with a ProductImage component */}
      <div className="prodimg">

      {product.image && 
        <img
          src={product.image} 
          alt="Home Depot logo"
        />
      } </div>
      <aside className="product-preview-details">
        {product.brand && 
          <p>
            <b>
              {product.brand}
            </b>
          </p>
        }
        {product.description && 
          <p>
            {product.description}
          </p>
        }
        <Price product={product} showSpecialPrice />
      </aside>
    </article>
  )
};