import React from "react";
import { Link } from "react-router-dom";
import tshirticon from "../../images/tshirts-men-icon.jpeg";

function CategoryTitle({ id, title }) {
  return (
    <div>
      <Link to={`/${id}`}>
        <img
          src={tshirticon}
          alt="icon"
          className="icon d-block d-sm-block d-md-block d-lg-none"
        ></img>
        <ul className="menu-column">
          <li>{title}</li>
        </ul>
      </Link>
    </div>
  );
}

export default CategoryTitle;
