import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt=""></img>
      </div>
      <div>
        <h4 className="productName">{name}</h4>
        <br />
        <p>
          <small>by: {seller}</small>{" "}
        </p>
        <p>${price}</p>

        <p>
          <small>only {stock} left in the stock - order soon</small>
        </p>
        <button
          className="productbtn"
          onClick={() => props.handelAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
