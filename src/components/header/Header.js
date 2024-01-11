import React from "react";
import Categories from "../api/Categories";
import { NavLink, Link } from "react-router-dom";
// https://www.npmjs.com/package/phosphor-react
import { ShoppingCart } from "phosphor-react";
import "./header.css";

function Header() {
  return (
      <div className="header">
        <div className="header__link">
          <Link to="/">Home</Link>
          <Link to="/basket" className="basket__link">
          <ShoppingCart size={22} /> 
          </Link>
        </div>
        <Categories />
      </div>
  );
}

export default Header;

