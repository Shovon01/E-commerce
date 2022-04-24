import React from "react";
import fakeData from "../../fakeData";
import { useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handelAddProduct = (singleproduct) => {
    const newCart = [...cart, singleproduct];
    setCart(newCart);
  };

  return (
    <div className="shopContainer">
      <div className="productContainer">
        {products.map((pd, index) => (
          <Product
            handelAddProduct={handelAddProduct}
            product={pd}
            key={index}
          ></Product>
        ))}
      </div>
      <div className="cartConatainer">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
