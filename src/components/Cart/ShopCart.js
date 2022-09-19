import React, { useContext } from "react";
import './Cart.scss'
import { context } from '../../App';
import { Link } from 'react-router-dom';

export const ShopCart = () => {
  const { cart } = useContext(context)
//  console.log(cart)
  return (
    <>
       <Link to={'/'}><h4>Products</h4></Link>
        <table>
          <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Brand</th>
            <th>Product Description</th>
            <th>Product Price</th>
          </tr>
          </thead>
          <tbody>
          {cart.map((prod,index) => 
            { return(   
          <tr key={"cart"+index}>
            <td><img data-testid={`img-${prod.id}`} width="100px" height="100px"
              src={prod.image} 
            /></td>
            <td data-testid={`brand-${prod.id}`}>{prod.brand}</td>
            <td data-testid={`desc-${prod.id}`}>{prod.description}</td>
            <td data-testid={`price-${prod.id}`}>{prod.price}</td>
          </tr>)
           }) 
         }
         </tbody>          
        </table>
      
     
    </>
  );
};

