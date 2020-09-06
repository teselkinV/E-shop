import React, { Component } from 'react';
import Navbar from '../Navbar/Navbarpages';
import {Link} from 'react-router-dom';
import payment from '../../images/payment-cart.png';

export class PaymentDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

     back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <React.Fragment>
                <Navbar />
                <div className='container payment-details'>
                    <div className='row'>
                    <div className="col-10 col-md-5 col-lg-4 mx-auto my-2 text-title text-center">
                            <h4 className="title-payment">Payment*</h4>
                        </div>
                        <div className="col-10 col-md-5 col-lg-4 mx-auto my-2 text-left">
                            <img src={payment} alt='image' className='checkout-img' />
                        </div>
                    </div>

                <div className='row'>
                        <div className='col-12 col-md-10 col-lg-8 mx-auto'>
                            <form>
                                <div className="form-row">
                                    <div className="col-6 form-group col-md-6">
                                        <input type="number" 
                                            className="form-control" 
                                            id="inputNumber"
                                            aria-required="true" 
                                            placeholder="Card number"
                                            onChange={handleChange('cardNumber')}
                                            defaultValue={values.cardNumber}
                                        />
                                    </div>

                                   {/* Years */}
                                    <div className=" col-3 form-group col-md-3">
                                        <select className="form-control"
                                            name="year" 
                                            type="select" placeholder="Year" 
                                            aria-labelledby="form-input__label-year" 
                                            aria-required="true" 
                                            onChange={handleChange('year')}
                                            defaultValue={values.year}>
                                                <option value="" disabled="">Year</option>
                                                <option value="2020">2020</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                            </select>
                                    </div>

                                    {/* Month */}
                                    <div className=" col-3 form-group col-md-3">
                                        <select className="form-control"
                                            name="month" 
                                            type="select" placeholder="Month" 
                                            aria-labelledby="form-input__label-month" 
                                            aria-required="true" 
                                            onChange={handleChange('month')}
                                            defaultValue={values.month}>
                                                <option value="" disabled="">Month</option>
                                                <option value="January">January</option>
                                                <option value="February">February</option>
                                                <option value="March">March</option>
                                                <option value="April">April</option>
                                                <option value="June">June</option>
                                                <option value="July">July</option>
                                                <option value="August">August</option>
                                                <option value="September">September</option>
                                                <option value="October">October</option>
                                                <option value="November">November</option>
                                                <option value="December">December</option>
                                            </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-6 form-group col-md-6">
                                        <input type="text" 
                                                className="form-control" 
                                                id="inputName" 
                                                aria-required="true" 
                                                placeholder="Cardholder name"
                                                onChange={handleChange('cardholderName')}
                                                defaultValue={values.cardholderName}
                                                />
                                    </div>

                                    <div className=" col-4 form-group col-md-3">
                                        <input type="number" 
                                            className="form-control" 
                                            id="inputCvv" 
                                            aria-required="true" 
                                            placeholder="CVV code"
                                            onChange={handleChange('cvc')}
                                            defaultValue={values.cvc}
                                            />
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
                                Next
                            </button>
                    </div>

                            </form>
                            <p className='paymet-text'>* This form doesn't collect card information. Build for example purpose.</p>
                        </div>        
                    </div>
                    
                </div>

            </React.Fragment>
        )
    }
}

export default PaymentDetails;
