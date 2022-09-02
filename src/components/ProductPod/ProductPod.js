import React from 'react';
import { Price } from '../Price/Price';
import { ProductImage } from '../ProductImage/ProductImage';
import './ProductPod.scss'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ProductPod = ({ product,handleClick }) => {
  if (!product) return null;
  const getSingleProduct = (product) => {
    let data = {"image":product.image,"brand":product.brand,"description":product.description,"price":product.price};
    handleClick(data);
  };
  return (
    <article className='product-pod' onClick={() => { getSingleProduct(product); }}>
      {/* TODO: make DRY with a ProductImage component */}
      <Link to={`/productdetail/${product.id}`}>
      <ProductImage img={{url:product.image,title:'Home Depot logo'}} />
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
      </Link>
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
