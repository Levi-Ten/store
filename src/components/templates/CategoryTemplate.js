import React from "react";
import { NavLink, Link } from "react-router-dom";
// import "./category.css";

function CategoryTemplate({ category }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={`/product/${category}`}
      >
        {category}
      </NavLink>
    </li>
  );
}

export default CategoryTemplate;
