import React, { useEffect } from "react";
import fakeData from "../../fakeData";
import { useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { Link, Route } from "react-router-dom";

import {
  addToDatabaseCart,
  addToDb,
  getDatabaseCart,
} from "../../utilities/fakedb";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const previousCart = productKeys.map((existingKey) => {
      const product = fakeData.find((pd) => pd.key === existingKey);
      product.quantity = saveCart[existingKey];
      // console.log(existingKey, saveCart[existingKey]);
      return product;
    });
    setCart(previousCart);

    console.log(saveCart);
  }, []);

  const handelAddProduct = (singleproduct) => {
    const toBeAddedKey = singleproduct.key;

    const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      const count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      singleproduct.quantity = 1;
      newCart = [...cart, singleproduct];
    }

    setCart(newCart);
    addToDatabaseCart(singleproduct.key, count);
  };

  return (
    <div className="shopContainer">
      <div className="productContainer">
        {products.map((pd) => (
          <Product
            key={pd.key}
            showAddToCart={true}
            handelAddProduct={handelAddProduct}
            product={pd}
          ></Product>
        ))}
      </div>
      <div className="cartConatainer">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="productbtn">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
