import React, { useContext } from "react";
import './Cart.scss'
import { context } from '../../App';

export const ShopCart = ({ text }) => {
  const { cart } = useContext(context)
  return (
    <>     
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
            <td><img width="100px" height="100px"
              src={prod.image} 
            /></td>
            <td>{prod.brand}</td>
            <td>{prod.description}</td>
            <td>{prod.price}</td>
          </tr>)
           }) 
         }
         </tbody>          
        </table>   
    </>
  );
};

