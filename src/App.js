// import { useState } from "react";
import React from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header/Header";
import Shop from "./components/shop/Shop";
import { Routes, Route, Link } from "react-router-dom";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetails from "./components/ProductDetail/ProductDetails";
// import fakeData from "./fakeData";

function App() {
  return (
    <div>
      <Header />
   
        <Routes>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/review" element={<Review />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route exact path="/" element={<Shop />}></Route>
          <Route
            path="/product/:productKey"
            element={<ProductDetails />}
          ></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
   
    </div>
  );
}

export default App;
