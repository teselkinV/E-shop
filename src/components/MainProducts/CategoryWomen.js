import React, { useState, useEffect } from "react";
import CategoryTitle from "./CategoryTitle";

function CategoryWomen() {
  const [categories, setCategories] = useState([]);
  const URL = "https://gastronomia-api.herokuapp.com/categoryShop";
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <li>
      {categories.map((category) => {
        if (category.sex === "female") {
          return (
            <CategoryTitle
              id={category.id}
              title={category.title}
              key={category.id}
            />
          );
        }
      })}
    </li>
  );
}

export default CategoryWomen;
