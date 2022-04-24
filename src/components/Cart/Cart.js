import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);

  const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
  // let total = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   const product = cart[i];
  //   total = total + product.price;
  // }
  return (
    <div>
      <h4>Order Summary</h4>

      <p>Item Ordered:{cart.length}</p>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
};

export default Cart;
