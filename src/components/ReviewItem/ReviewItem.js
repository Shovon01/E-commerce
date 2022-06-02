import React from "react";
import "../../index.css";

const ReviewItem = (props) => {
  console.log(props);
  const { name, quantity, key, price } = props.product;
  const ReviewItemStyle = {
    borderBottom: "1px solid lightgray",
    marginBottom: "5px",
    paddingBottom: "5px",
    marginLeft: "200px",
  };
  return (
    <div style={ReviewItemStyle}>
      <h4 className="productName">{name}</h4>
      <h2>Quantity:{quantity}</h2>
      <p>${price}</p>

      <br />
      <button onClick={() => props.removeProduct(key)} className="productbtn">
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
