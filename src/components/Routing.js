import React from "react";
import { Switch, Route } from "react-router-dom";
// *******
import MainPage from "./MainPage/MainPage";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Details from "./Details/Details";
import Default from "./Default/Default";
import Sale from "./ProductsPages/Sale";
import Modal from "./Modal/Modal";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import TableSize from "./Details/TableSize";
import NewArrival from "./ProductsPages/NewArrival";
import TshirtsMen from "./MenProductPages/TshirtsMen";
import PoloMen from "./MenProductPages/PoloMen";
import ShirtsMen from "./MenProductPages/ShirtsMen";
import SweatersMen from "./MenProductPages/SweatersMen";
import OverallsMen from "./MenProductPages/OverallsMen";
import JacketMen from "./MenProductPages/JacketMen";
import HoodiesMen from "./MenProductPages/HoodiesMen";
import ActivewearMen from "./MenProductPages/ActivewearMen";
import JeansMen from "./MenProductPages/JeansMen";
import ShortsMen from "./MenProductPages/ShortsMen";
import PantsMen from "./MenProductPages/PantsMen";
import JoggersMen from "./MenProductPages/JoggersMen";
import NewArrivedMen from "./MenProductPages/NewArrivedMen";
import SuitesMen from "./MenProductPages/SuitesMen";
import ShoesMen from "./MenProductPages/ShoesMen";
import UnderwearMen from "./MenProductPages/UnderwearMen";
import SaleMen from "./MenProductPages/SaleMen";
import TshirtsWomen from "./WomenProductPages/TshirtsWomen";
import Dresses from "./WomenProductPages/Dresses";
import JumpsuitsWomen from "./WomenProductPages/JumpsuitsWomen";
import LoungewearWomen from "./WomenProductPages/LoungewearWomen";
import CoatsWomen from "./WomenProductPages/CoatsWomen";
import CardigansWomen from "./WomenProductPages/CardigansWomen";
import HoodiesWomen from "./WomenProductPages/HoodiesWomen";
import SwimwearWomen from "./WomenProductPages/SwimwearWomen";
import JeansWomen from "./WomenProductPages/JeansWomen";
import SkirtsWomen from "./WomenProductPages/SkirtsWomen";
import ShortsWomen from "./WomenProductPages/ShortsWomen";
import PantsWomen from "./WomenProductPages/PantsWomen";
import SaleWomen from "./WomenProductPages/SaleWomen";
import NewArrivedWomen from "./WomenProductPages/NewArrivedWomen";
import SuitesWomen from "./WomenProductPages/SuitesWomen";
import ShoesWomen from "./WomenProductPages/ShoesWomen";
import UnderwearWomen from "./WomenProductPages/UnderwearWomen";

function Routing() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={MainPage} />

        {/* Men's Pages */}

        <Route path="/men's-t-shirts" component={TshirtsMen} />
        <Route path="/men's-polo" component={PoloMen} />
        <Route path="/men's-shirts" component={ShirtsMen} />
        <Route path="/men's-sweaters" component={SweatersMen} />
        <Route path="/men's-overalls" component={OverallsMen} />
        <Route path="/men's-jackets" component={JacketMen} />
        <Route path="/men's-hoodies" component={HoodiesMen} />
        <Route path="/men's-activewear" component={ActivewearMen} />
        <Route path="/men's-jeans" component={JeansMen} />
        <Route path="/men's-shorts" component={ShortsMen} />
        <Route path="/men's-pants" component={PantsMen} />
        <Route path="/men's-joggers" component={JoggersMen} />
        <Route path="/men's-suites" component={SuitesMen} />
        <Route path="/men's-shoes" component={ShoesMen} />
        <Route path="/men's-underwear" component={UnderwearMen} />
        <Route path="/men's-sale" component={SaleMen} />
        <Route path="/men's-new-arrived" component={NewArrivedMen} />

        {/* Women's Pages */}

        <Route path="/women's-t-shirts" component={TshirtsWomen} />
        <Route path="/women's-t-dresses" component={Dresses} />
        <Route path="/women's-t-jumpsuits" component={JumpsuitsWomen} />
        <Route path="/women's-t-loungewear" component={LoungewearWomen} />
        <Route path="/women's-t-coats" component={CoatsWomen} />
        <Route path="/women's-t-cardigans" component={CardigansWomen} />
        <Route path="/women's-t-hoodies" component={HoodiesWomen} />
        <Route path="/women's-t-swimwear" component={SwimwearWomen} />
        <Route path="/women's-t-jeans" component={JeansWomen} />
        <Route path="/women's-t-skirts" component={SkirtsWomen} />
        <Route path="/women's-t-shorts" component={ShortsWomen} />
        <Route path="/women's-t-paints" component={PantsWomen} />
        <Route path="/women's-sale" component={SaleWomen} />
        <Route path="/women's-new-arrived" component={NewArrivedWomen} />
        <Route path="/women's-suites" component={SuitesWomen} />
        <Route path="/women's-shoes" component={ShoesWomen} />
        <Route path="/women's-lingerie" component={UnderwearWomen} />

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
