import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; 
import MainPage from './components/MainPage/MainPage';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Details from './components/Details/Details';
import Default from './components/Default/Default';
import Sale from './components/ProductsPages/Sale';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from './components/Modal/Modal';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import TableSize from './components/Details/TableSize';
import NewArrival from './components/ProductsPages/NewArrival';
import TshirtsMen from './components/MenProductPages/TshirtsMen';
import PoloMen from './components/MenProductPages/PoloMen';
import ShirtsMen from './components/MenProductPages/ShirtsMen';
import SweatersMen from './components/MenProductPages/SweatersMen';
import OverallsMen from './components/MenProductPages/OverallsMen';
import JacketMen from './components/MenProductPages/JacketMen';
import HoodiesMen from './components/MenProductPages/HoodiesMen';
import ActivewearMen from './components/MenProductPages/ActivewearMen';
import JeansMen from './components/MenProductPages/JeansMen';
import ShortsMen from './components/MenProductPages/ShortsMen';
import PantsMen from './components/MenProductPages/PantsMen';
import JoggersMen from './components/MenProductPages/JoggersMen';
import NewArrivedMen from './components/MenProductPages/NewArrivedMen';
import SuitesMen from './components/MenProductPages/SuitesMen';
import ShoesMen from './components/MenProductPages/ShoesMen';
import UnderwearMen from './components/MenProductPages/UnderwearMen';
import SaleMen from './components/MenProductPages/SaleMen';
import TshirtsWomen from './components/WomenProductPages/TshirtsWomen';
import Dresses from './components/WomenProductPages/Dresses';
import JumpsuitsWomen from './components/WomenProductPages/JumpsuitsWomen';
import LoungewearWomen from './components/WomenProductPages/LoungewearWomen';
import CoatsWomen from './components/WomenProductPages/CoatsWomen';
import CardigansWomen from './components/WomenProductPages/CardigansWomen';
import HoodiesWomen from './components/WomenProductPages/HoodiesWomen';
import SwimwearWomen from './components/WomenProductPages/SwimwearWomen';
import JeansWomen from './components/WomenProductPages/JeansWomen';
import SkirtsWomen from './components/WomenProductPages/SkirtsWomen';
import ShortsWomen from './components/WomenProductPages/ShortsWomen';
import PantsWomen from './components/WomenProductPages/PantsWomen';
import SaleWomen from './components/WomenProductPages/SaleWomen';
import NewArrivedWomen from './components/WomenProductPages/NewArrivedWomen';
import SuitesWomen from './components/WomenProductPages/SuitesWomen';
import ShoesWomen from './components/WomenProductPages/ShoesWomen';
import UnderwearWomen from './components/WomenProductPages/UnderwearWomen';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={MainPage} />

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

          <Route path='/shoppingcart' component={ShoppingCart} />
          <Route path='/details' component={Details} />
          <Route path='/sale' component={Sale} />
          <Route path='/checkout-details' component={CheckoutForm} />
          <Route path='/clothing-size-charts' component={TableSize} />
          <Route path='/new-arrival' component={NewArrival} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}

export default App;
