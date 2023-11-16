import React from "react";
import Title from "../Title/Title";
import Summer from "../Summer/Summer";
import Footer from "../Footer/Footer";
import { ProductConsumer } from "../../context";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbarpages";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Drawer from "../Navbar/Drawer";

function ProductsPage({ category }) {
  return (
    <div>
      <Navbar />
      <Drawer />
      <div className="container products-page">
        <Breadcrumbs />
        <div className="row">
          <div className="col-12 product-page-title mx-auto text-center">
            <Title title={category.subtitle}></Title>
            <div className="col-12 col-md-10 col-lg-8 mx-auto text-center pages-text">
              {category.description}
            </div>
          </div>
        </div>
        <div className="row">
          <ProductConsumer>
            {(value) => {
              return value.products.map((product) => {
                if (category.type === product.type) {
                  return <Card key={product.id} product={product} />;
                }
              });
            }}
          </ProductConsumer>
        </div>
      </div>

      <Summer />
      <Footer />
    </div>
  );
}

export default ProductsPage;
