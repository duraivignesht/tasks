import React, { useState } from 'react';
import { ProductPreview } from '../ProductPreview/ProductPreview';
import { Price } from '../Price/Price';
import './ProductPod.scss'


export const ProductPod = ({ product }) => {
   const [productPrev, setproductPrev] = useState();

/*  let a = product.map((product)=>product.brand);
  console.log("Listinf"+a)*/

  if (!product) return null;

  return (
    
    <>
      {/* TODO: make DRY with a ProductImage component */}
          <article className='product-grid'>

    {  
      product.map((product) => 
        <div className='product-pod' onClick={()=>setproductPrev({"image":product.image,"brand":product.brand,"description":product.description,"price":product.price})}>
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
        }<br />
      {product.description && 
        <span>
          {product.description}
        </span>
      }

            <Price product={product} />

</div>
        )

    }
    </article>

    <ProductPreview product={productPrev} />
  
    </>
      );
};