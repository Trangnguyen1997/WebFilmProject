import React from 'react';
import './App.css';
import Header from './common/components/Headers/Header';
import Carousel from './common/components/Carousel/Carousel';
import ProductList from './common/components/Product/ProductList';

function App() {
  return (
    <div className="App">
     <Header/>
     <Carousel/>
     <br/>
     <ProductList/>
    </div>
  );
}

export default App;
