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
  let shipping = 0;
  if (totalPrice > 35) {
    shipping = 0;
  } else if (totalPrice > 15) {
    shipping = 4.99;
  } else if (totalPrice > 0) {
    shipping = 12.99;
  }

  const tax = totalPrice / 10;
  const grandTotal = totalPrice + shipping + Number(tax);

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  return (
    <div>
      <h4>Order Summary</h4>

      <p>Item Ordered:{cart.length}</p>
      <p>Product Price: {formatNumber(totalPrice)}</p>
      <p>
        <small>Shipping Cost: {shipping}</small>
      </p>
      <p>
        <small>Tax + VAT: {formatNumber(tax)}</small>
      </p>
      <p>Total Price: {formatNumber(grandTotal)}</p>
    </div>
  );
};

export default Cart;
