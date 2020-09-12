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
import SummerCollection from './components/ProductsPages/SummerCollection';
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
import Women from './components/Women/Women';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={MainPage} />
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
          <Route path='/women' component={Women} />
          <Route path='/shoppingcart' component={ShoppingCart} />
          <Route path='/details' component={Details} />
          <Route path='/sale' component={Sale} />
          <Route path='/checkout-details' component={CheckoutForm} />
          <Route path='/clothing-size-charts' component={TableSize} />
          <Route path='/summer-collection' component={SummerCollection} />
          <Route path='/new-arrival' component={NewArrival} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}

export default App;
