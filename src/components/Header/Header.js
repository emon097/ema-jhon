import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/shop">Shop</a>
        <a href="/order">Order</a>
        <a href="/inventor">Inventor</a>
        <a href="/about">About us</a>
      </div>
    </nav>
  );
};

export default Header;
