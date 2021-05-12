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
        <li>{title}</li>
      </Link>
    </div>
  );
}

export default CategoryTitle;
