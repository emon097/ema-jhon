import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";
const Product = (props) => {
  console.log(props);
  const { img, name, price, ratings, seller } = props.fullProduct;
  return (
    <div className="product">
      <div className="name-price">
        <img className="img" src={img} alt="" />
        <p className="name">{name}</p>
        <p> price${price} </p>
      </div>
      <div className="product-info">
        <p>seller{seller} </p>
        <p> rating{ratings} </p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.fullProduct)}
        className="btn-cart"
      >
        <strong className="cart-btn">add to cart</strong>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
