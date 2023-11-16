import React, { useState, useEffect } from "react";
import CategoryTitle from "./CategoryTitle";

function CategoryMen() {
  const [categories, setCategories] = useState([]);
  const URL = "https://gastronomia-api.herokuapp.com/categoryShop";
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      });
  }, []);
  return (
    <li>
      {categories.map((category) => {
        if (category.sex === "male") {
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
  );
}

export default CategoryMen;
