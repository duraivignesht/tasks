import React, {useEffect,useState} from 'react';
import './App.css';
import { Home } from './Home'
import { ProductPreviewDetail } from './components/ProductPreview/ProductPreviewDetail';
import {Routes, Route} from "react-router-dom";
import { getProducts } from './api';

export const context = React.createContext();

function App() {

  useEffect(() => {
    getProducts().then(
    	(data)=>setData(data)
    )
},[]);
	
  const [data, setData] = useState();

  return (
    <div className="App">
      <context.Provider value={data}>
      <Routes>
        <Route path="/" exact element={<Home datas={data} />} />
        <Route path="/productdetail/:id" exact element={<ProductPreviewDetail singleProduct={data?.products} />} />
      </Routes>
      </context.Provider>

      
    </div>
  );
}

export default App; 
