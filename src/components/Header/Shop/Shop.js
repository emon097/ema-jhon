import React, { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";
import Product from "../../Product/Product";

import "./Shop.css";
const Shop = () => {
  const [products, Products] = useState([]);
  const [cart, UseCrt] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => Products(data));
  }, []);
  const handelAddToCart = (product) => {
    console.log(product.name);
    const newCart = [...cart, product];
    UseCrt(newCart);
  };

  return (
    <div className="shop">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            fullProduct={product}
            handleAddToCart={handelAddToCart}
          ></Product>
        ))}
      </div>
      <div className="summary">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
