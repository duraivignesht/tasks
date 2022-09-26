import React, { useContext, Suspense } from 'react';
import Price  from '../Price/Price';
import { ProductImage } from '../ProductImage/ProductImage';
import './ProductPod.scss'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { context } from '../../context/context';
import { Product_List } from '../ProductArray';
import { trigger, on } from "../../utils/events";

const Modal = React.lazy(()=>import('../Modal/Modal'))

export const ProductPod = ({ product }) => {
  const {openModal,setOpenModal,prod,setProd} = useContext(context);
  
  // const event = new CustomEvent("start", {
  //   detail: product
  // });
  
    on('start', (e) => {
      if (!Product_List.includes(e.detail.id)) {
        Product_List.push(e.detail.id);
      }
      console.log(
        `Start event triggered ${e.detail.id}`
      );
    })
  

  if (!product) return null;
  return (
    <article className='product-pod' key={product.id} >
      {/* TODO: make DRY with a ProductImage component */}
    
      <Link to={`/productdetail/${product.id}`} onClick={()=>{trigger("start",product)}} >
        <ProductImage img={{url:product.image,title:'Home Depot logo'}} />
        {product.brand && 
          <div data-testid="brand">
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
      <Button onClick={() => {setOpenModal(true); setProd(product);trigger("start",product)}} children="Add TO Cart" className="btn" />
      {
          openModal && (
            <Suspense fallback="Loading...">
              <Modal productDetail={prod} open={openModal} onClose={() => setOpenModal(false)}  />
            </Suspense>
          )
      }
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
