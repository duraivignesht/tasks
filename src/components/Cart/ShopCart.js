import React, { useContext } from "react";
import './Cart.scss'
import { context } from '../../App';

export const ShopCart = ({ text }) => {
  const { cart } = useContext(context)
  return (
    <>
       
        <table>
          <tr>
            <th>Product Image</th>
            <th>Product Brand</th>
            <th>Product Description</th>
            <th>Product Price</th>
          </tr>
          
          {cart.map((prod) => 
            { return(   
          <tr key={prod.id}>
            <td><img width="100px" height="100px"
              src={prod.image} 
            /></td>
            <td>{prod.brand}</td>
            <td>{prod.description}</td>
            <td>{prod.price}</td>
          </tr>)
           }) 
         }
          
        </table>
      
     
    </>
  );
};

