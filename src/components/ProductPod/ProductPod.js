import React, { useContext, useReducer } from 'react';
import { Price } from '../Price/Price';
import { ProductImage } from '../ProductImage/ProductImage';
import './ProductPod.scss'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CartButton } from '../Cart/CartButton';

export const ProductPod = ({ product }) => {
  if (!product) return null;
  return (
    <article className='product-pod' key={product.id}>
      {/* TODO: make DRY with a ProductImage component */}
     
      <Link to={`/productdetail/${product.id}`}>
      <ProductImage img={{url:product.image,title:'Home Depot logo'}} />
      {product.brand && 
        <span data-testid="row">
          {product.brand}
        </span> 
        } <br />
      {product.description && 
        <span>
          {product.description}
        </span>
      } 
      <Price product={product} />
      </Link>
      <CartButton product={product} />
    </article>
  );
};

ProductPod.propTypes = {
  product:PropTypes.shape({
    image:PropTypes.string,
    brand:PropTypes.string,
    description:PropTypes.string,
    price:PropTypes.number
  }),
  handleClick:PropTypes.func
}
