import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../pages/Home";
import SingleProduct from "../components/api/SingleProduct";
import Basket from "../pages/basket/Basket";
// import { Qwerty } from '../components/templates/SingleProductTemplate';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:category" element={<SingleProduct />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      {/* <Qwerty/> */}
    </BrowserRouter>
  );
}

export default App;
