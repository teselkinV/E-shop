import React, { Component } from 'react'
import Navbar from '../Navbar/Navbarpages';
import {Link} from 'react-router-dom';
import PaymentForm from './PaymentForm';

export class Delivery extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className='container shipping-details'>
                    <div className='row'>
                        <div className="col-10 col-md-10 col-lg-8 mx-auto my-2 text-title">
                            <h4 className="title-shipping">Shipping details</h4>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-12 col-md-10 col-lg-8 mx-auto'>
                            <form>
                                <div className="form-row">
                                    <div className="col-6 form-group col-md-6">
                                        <input type="text" className="form-control" id="inputName1"placeholder="First Name"/>
                                    </div>
                                    <div className=" col-6 form-group col-md-6">
                                        <input type="text" className="form-control" id="inputName2" placeholder="Last name"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" id="inputCity"placeholder="City"/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control" id="inputState"placeholder="State"/>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <input type="text" className="form-control" id="inputZip"placeholder="Zip code"/>
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="phone" className="form-control" id="inputPhone"placeholder="Phone number"/>
                                    </div>
                                </div>

                                {/* <Link to='/shipping-details'>
                                <button className='button modal-continue-btn'>Continue</button>
                                </Link> */}
                            </form>
                            <p className='paymet-text'>* This form doesn't collect address information. Build for example purpose.</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-10 col-md-10 col-lg-8 mx-auto my-2 text-title">
                            <h4 className="title-delivery-method">Delivery method</h4>
                        </div>
                    </div>

                    <PaymentForm />
                    <div className='row'>
                        <div className='col-11 col-md-8 mx-auto text-center'>
                            <button className='button modal-continue-btn' type='submit'>Place order</button>
                        </div>
                    </div>
                      

                    
                </div>
            </React.Fragment>
        )
    }
}

export default Delivery
