import React from "react";
import { Switch, Route } from "react-router-dom";
// *******
import MainPage from "./MainPage/MainPage";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Details from "../components/Details/Details";
import Default from "./Default/Default";
import Sale from "./ProductsPages/Sale";
import Modal from "./Modal/Modal";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import TableSize from "./Details/TableSize";
// ********
import NewArrival from "./ProductsPages/NewArrival";
import TshirtsMen from "./MenProductPages/TshirtsMen";
import NewArrivedMen from "./MenProductPages/NewArrivedMen";
import SaleMen from "./MenProductPages/SaleMen";
import SaleWomen from "./WomenProductPages/SaleWomen";
import NewArrivedWomen from "./WomenProductPages/NewArrivedWomen";

import CategoryDetails from "./MainProducts/CategoryDetails";

function Routing() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={MainPage} />

        {/* Men's Pages */}

        <Route path="/men's-t-shirts" component={TshirtsMen} />
        <Route path="/men's-sale" component={SaleMen} />
        <Route path="/men's-new-arrived" component={NewArrivedMen} />

        {/* Women's Pages */}

        <Route path="/women's-sale" component={SaleWomen} />
        <Route path="/women's-new-arrived" component={NewArrivedWomen} />

        <Route path="/products/:id" component={CategoryDetails} />

        <Route path="/shoppingcart" component={ShoppingCart} />
        <Route path="/details" component={Details} />
        <Route path="/sale" component={Sale} />
        <Route path="/checkout-details" component={CheckoutForm} />
        <Route path="/clothing-size-charts" component={TableSize} />
        <Route path="/new-arrival" component={NewArrival} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default Routing;
