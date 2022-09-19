import React from 'react';
import Price  from '../Price/Price';
import { ProductImage } from '../ProductImage/ProductImage';
import './ProductPod.scss'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import { CartButton } from '../Cart/CartButton';
import { CartButtonOverlay } from '../Cart/CartButtonOverlay';

export const ProductPod = ({ product }) => {
  
  if (!product) return null;
  return (
    <article className='product-pod' key={product.id}>
      {/* TODO: make DRY with a ProductImage component */}
     
      <Link to={`/productdetail/${product.id}`}>
      <ProductImage img={{url:product.image,title:'Home Depot logo'}} />
      {product.brand && 
        <div data-testid={`brand-${product.id}`}>
          {product.brand}
        </div> 
        }
      {product.description && 
        <div data-testid={`desc-${product.id}`}>
        {product.description}
      </div> 
      } 
      <Price product={product} />
      </Link>
      <CartButtonOverlay product={product} />
      {/* <CartButton product={product} /> */}
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
