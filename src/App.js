import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; 
import MainPage from './components/MainPage/MainPage';
import Man from './components/Man/Man';
import Women from './components/Women/Women';
import Kids from './components/Kids/Kids';
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


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/man' component={Man} />
          <Route path='/women' component={Women} />
          <Route path='/kids' component={Kids} />
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
