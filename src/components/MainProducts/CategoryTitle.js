import React from "react";
import { Link } from "react-router-dom";
import tshirticon from "../../images/tshirts-men-icon.jpeg";

function CategoryTitle({ id, title, image }) {
  return (
    <div>
      <Link to={`/${id}`}>
        <ul>
          <li className=" d-none d-sm-none d-md-none d-lg-block">{title}</li>
          <li className="category-title d-block d-sm-block d-md-block d-lg-none">
            <span className="category-item">{title}</span>
          </li>
        </ul>
      </Link>
    </div>
  );
}

export default CategoryTitle;
