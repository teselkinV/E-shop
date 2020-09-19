import React, { Component } from 'react';
import Navbar from '../Navbar/Navbarpages';
import {Link} from 'react-router-dom';
import placeOrder from '../../images/place-order-cart.png';
import CartTotals from '../ShoppingCart/CartTotals';
import { ProductConsumer } from '../../context';
import Drawer from '../Navbar/Drawer';

export class SubmitOrder extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

     back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { 
            values: { firstName, lastName, street, apartment, city, 
            state, zipCode, email, phoneNumber, } 
            } = this.props;

        return (
            <ProductConsumer>
                {value => {
                        const { cart } = value;
                        if(cart.length >= 0) {
							return (
            <React.Fragment>
                <Navbar />
                <Drawer />

                <div className='container summary-details'>
                    <div className='row'>
                    <div className="col-10 col-md-5 col-lg-4 mx-auto my-2 text-title text-center">
                            <h4 className="title-summary">Summary</h4>
                        </div>
                        <div className="col-10 col-md-5 col-lg-4 mx-auto my-2 text-left">
                            <img src={placeOrder} alt='image' className='checkout-img' />
                        </div>
                        </div>
                        
                <div className='row'>
                    <div className='col-12 col-md-10 col-lg-8 mx-auto'>

                        <div className='row'>
                            <div className='col-10 col-md-5 col-lg-3 mx-auto'>
                                <div className='title-shipping-info'>Shipping</div>
                                <ul className='shipping-info'>
                                    <li>Standard  home shipping: 3-6 days</li>
                                    <li className='shipping-info-list-name'>{firstName} {lastName}</li>
                                    <li className='shipping-info-list'>{street}</li>
                                    <li className='shipping-info-list'>{apartment}</li>
                                    <li className='shipping-info-list'>{city}</li>
                                    <li className='shipping-info-list'>{state}</li>
                                    <li className='shipping-info-list'>{zipCode}</li>
                                    <li className='shipping-info-list'>{email}</li>
                                    <li className='shipping-info-list'>{phoneNumber}</li>
                                </ul>
                            </div>

                            <div className='col-10 col-md-5 col-lg-3 mx-auto'>
                            <div className='title-total-info'>Payment</div>
                            <ul className='shipping-info'>
                                    <li className='shipping-info-list'>Sub-total: ${value.itemsTotal}</li>
                                    <li className='shipping-info-list'>Sales tax: ${value.salesTax}</li>
                                    <li className='shipping-info-list'>Shipping: $0.00</li>
                                    <li className='shipping-info-list summary-total'>Total: ${value.cartTotal}</li>
                                </ul>
                            </div>
                        </div>




                        <div className='row'>
                            <div className='col-10 col-md-4 mx-auto text-center my-2'>
                                <Link onClick={this.back} className='continue-shopping'>&#8592; Back</Link>
                            </div>

                            <div className='col-10 col-md-4 text-right my-2'>
                                <Link to='/' className='continue-shopping continue-checkout'>Continue shopping</Link>
                            </div>

                        
                            <button 
                                className='button modal-continue-btn' 
                                onClick={this.continue}>
                                Place order
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}}
        </ProductConsumer>
        )
    }
}

export default SubmitOrder;
