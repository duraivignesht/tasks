import React, {useEffect,useState, useReducer} from 'react';
import './App.css';
import { Home } from './Home'
import { ProductPreviewDetail } from './components/ProductPreview/ProductPreviewDetail';
import {Routes, Route} from "react-router-dom";
import { getProducts } from './api';
import { ShopCart } from './components/Cart/ShopCart';


export const context = React.createContext("");

export const ADD_PRODUCT = "ADD_PRODUCT";

const addProductToCarts = (product, state) => {
  const updatedCart = [...state.cart];
  updatedCart.push({ ...product});
  console.log("up",updatedCart)
  return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCarts(action.product, state);
    default:
      return state;
  }
};

function App() {

  useEffect(() => {
    getProducts().then(
    	(data)=>setData(data)
    )
},[]);
	

  const [data, setData] = useState();

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };
  return (
    <div className="App">
      <context.Provider value={{
        products: data?.products,
        cart: cartState.cart,
        addProductToCart: addProductToCart
      }
        }>
      <Routes>
        <Route path="/" exact element={<Home datas={data} />} />
        <Route path="/productdetail/:id" exact element={<ProductPreviewDetail singleProduct={data?.products} />} />
        <Route path="/cart" exact element={<ShopCart />} />
      </Routes>
      </context.Provider>

      
    </div>
  );
}

export default App; 
