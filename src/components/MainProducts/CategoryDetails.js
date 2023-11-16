import React, { useState, useEffect } from "react";
import ProductsPage from "./ProductsPage";

function CategoryDetails({ match }) {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const URL = `https://gastronomia-api.herokuapp.com/categoryShop/${match.params.id}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((error) => console.log(error));
  }, [match]);

  return <div>{category ? <ProductsPage category={category} /> : null}</div>;
}

export default CategoryDetails;
