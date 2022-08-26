import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header'
import { ProductGrid } from './components/ProductGrid/ProductGrid';
import { ProductPreview } from './components/ProductPreview/ProductPreview';
import { getProducts } from './api';

function App() {
 useEffect(() => {
    getProducts().then(
    	(data)=>setData(data)
    )
},[]);
	
  const [data, setData] = useState();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="App">
      <Header text={data?.headerText} />
      <ProductGrid products={data?.products} />
      <ProductPreview key={selectedProduct?.description} product={selectedProduct} />
    </div>
  );
}

export default App; 
