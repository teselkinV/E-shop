import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

import CategoryTitle from "../MainProducts/CategoryTitle";

const DropdownMan = ({ isVisible }) => {
  const [categories, setCategories] = useState([]);
  const URL = "https://gastronomia-api.herokuapp.com/categoryShop";
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log("DATA", data);
      });
  }, []);

  return (
    <>
      <div className={`${isVisible ? "block" : "hidden"} absolute`}>
        <div className="container-sm dropdown-container">
          <div className="row">
            <div className="col-3 mx-auto">
              <h3 className="submenu-title">TOPS</h3>
              <ul className="menu-column">
                <li>
                  {categories.map((category) => {
                    if (category.sex === "male" && category.section === "top") {
                      return (
                        <CategoryTitle
                          id={category.id}
                          title={category.title}
                          type={category.type}
                          key={category.id}
                        />
                      );
                    }
                  })}
                </li>
              </ul>
            </div>
            <div className="col-3 mx-auto">
              <h3 className="submenu-title">BOTTOMS</h3>
              <ul className="menu-column">
                <li>
                  {categories.map((category) => {
                    if (
                      category.sex === "male" &&
                      category.section === "bottom"
                    ) {
                      return (
                        <CategoryTitle
                          id={category.id}
                          title={category.title}
                          type={category.type}
                          key={category.id}
                        />
                      );
                    }
                  })}
                </li>
                <br />

                <li className="accesories">
                  {categories.map((category) => {
                    if (
                      category.sex === "male" &&
                      category.section === "other"
                    ) {
                      return (
                        <CategoryTitle
                          id={category.id}
                          title={category.title}
                          type={category.type}
                          key={category.id}
                        />
                      );
                    }
                  })}
                </li>
              </ul>
            </div>
            <div className="col-3 mx-auto">
              <div className="img-1-box">
                <Link to="/men's-new-arrived">
                  <div className="img-arr-men"></div>
                </Link>
              </div>
            </div>
            <div className="col-3 mx-auto">
              <div className="img-2-box">
                <Link to="/men's-sale">
                  <div className="img-sale-men"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownMan;
