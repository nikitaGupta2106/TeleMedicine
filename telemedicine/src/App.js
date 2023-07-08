import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Product from "./Pages/ProductPage/Product";
import ProductDetails from "./Pages/ProductPage/ProductDetails";
import Cart from "./Pages/Cart";
import Favourites from "./Pages/Favourites";
import Address from "./Pages/Address";
import Payment from "./Pages/Payment";
import Thankyou from "./Pages/Thankyou";

import NavHeader from "./Components/Navbar/NavHeader";
import NavFooter from "./Components/Navbar/NavFooter";
import Signup from "./Pages/SignUp";

function App() {
  return (
    <div className="App">
      <NavHeader />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route
            path="/products/productdetails/:id"
            element={<ProductDetails />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route path="/address" element={<Address />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/thankyou" element={<Thankyou />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          
        </Routes>
      </div>
      <NavFooter />
    </div>
  );
}

export default App;
