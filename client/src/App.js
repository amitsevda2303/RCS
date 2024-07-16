import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import ProductInfo from "./Pages/Product/ProductInfo";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop/Shop";

function App() {
  return (
    <div className="">
     
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/product/:productId" element={<ProductInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
