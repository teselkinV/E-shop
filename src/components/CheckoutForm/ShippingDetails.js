import React, { Component } from 'react';
import Navbar from '../Navbar/Navbarpages';
import {Link} from 'react-router-dom';
import shipping from '../../images/shipping-cart.png';
import Drawer from '../Navbar/Drawer';

export class ShippingDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

    render() {
        const { values, handleChange } = this.props;

        return (
            <React.Fragment>
                <Navbar />
                <Drawer />
                <div className='container shipping-details'>
                <div className='row'>
                        <div className="col-10 col-md-5 col-lg-4 mx-auto my-2 text-title text-center">
                            <h4 className="title-shipping">Shipping details</h4>
                        </div>
                        <div className="col-10 col-md-5 col-lg-4 mx-auto my-2 text-left">
                            <img src={shipping} alt='image' className='checkout-img' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 col-md-10 col-lg-8 mx-auto'>
                            <form>
                                <div className="form-row">
                                    <div className="col-6 form-group col-md-6">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="inputName1" 
                                            placeholder="First Name" 
                                            required
                                            onChange={handleChange('firstName')}
                                            defaultValue={values.firstName}
                                        />
                                    </div>
                                    <div className=" col-6 form-group col-md-6">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="inputName2" 
                                            placeholder="Last name"
                                            onChange={handleChange('lastName')}
                                            defaultValue={values.lastName}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input 
                                        required="true"
                                        type="text" 
                                        className="form-control" 
                                        id="inputAddress" 
                                        placeholder="1234 Main St"
                                        onChange={handleChange('street')}
                                        defaultValue={values.street}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="inputAddress2" 
                                        placeholder="Apartment, studio, or floor"
                                        onChange={handleChange('apartment')}
                                        defaultValue={values.apartment}
                                        />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="inputCity" 
                                            placeholder="City"
                                            onChange={handleChange('city')}
                                            defaultValue={values.city}
                                            />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="inputState" 
                                            placeholder="State"
                                            onChange={handleChange('state')}
                                            defaultValue={values.state}
                                            />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="inputZip" 
                                            placeholder="Zip code"
                                            onChange={handleChange('zipCode')}
                                            defaultValue={values.zipCode}
                                            />
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="inputEmail4" 
                                            placeholder="Email"
                                            onChange={handleChange('email')}
                                            defaultValue={values.email}
                                            />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input 
                                            type="phone" 
                                            className="form-control" 
                                            id="inputPhone" 
                                            placeholder="Phone number"
                                            onChange={handleChange('phoneNumber')}
                                            defaultValue={values.phoneNumber}
                                            />
                                    </div>
                                </div>
                                
                                <div className='row'>
                                    <div className='col-4 col-md-4 col-lg-4 mx-auto m-2'>
                                        <Link to='/shoppingcart' className='continue-shopping'>&#8592; Back</Link>
                                    </div>

                                    <div className='col-12 col-md-6 col-lg-4 text-center m-2'>
                                        <Link to='/' className='continue-shopping continue-checkout'>Continue shopping</Link>
                                    </div>

                                    
                                    <button className='button modal-continue-btn' onClick={this.continue}>
                                        Next
                                    </button>
                                    
                                    
                                </div>

                            </form>
                            <p className='paymet-text'>* This form doesn't collect address information. Build for example purpose.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ShippingDetails;
