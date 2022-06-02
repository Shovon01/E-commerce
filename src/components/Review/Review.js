import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import happyimage from "../../images/download.jpg";
import {
  getDatabaseCart,
  getStoredCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
    // console.log("placeed");
  };

  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  useEffect(() => {
    const saveCart = getDatabaseCart();
    console.log(saveCart);
    const productKeys = Object.keys(saveCart);

    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);

  let thankyou;
  if (orderPlaced) {
    thankyou = <img src={happyimage} alt="" />;
  }
  return (
    <div className="shopContainer">
      <div className="productContainer">
        {cart.map((pd) => (
          <ReviewItem
            removeProduct={removeProduct}
            key={pd.key}
            product={pd}
          ></ReviewItem>
        ))}
        {thankyou}
      </div>
      <div className="cartContainer">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="productbtn">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
