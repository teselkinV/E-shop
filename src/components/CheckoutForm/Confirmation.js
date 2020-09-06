import React, { Component } from 'react';
import Navbar from '../Navbar/Navbarpages';
import {Link} from 'react-router-dom';

export class Confirmation extends Component {


    render() {

        const transactionNumber = Math.floor(Math.random() * 389642) + 285173;

        
        return (
            <React.Fragment>
               <Navbar />

                <div className='container shipping-details'>
                    <div className='row'>
                            <div className="col-10 col-md-10 col-lg-6 mx-auto text-center">
                                <h4 className="title-confirmation-thank">Thank you!</h4>
                                <h2 className="title-confirmation mb-4">Your order has been received.</h2>
                                <h5>Your Transaction number: <span>#{transactionNumber}</span></h5>
                                <p className='keep-transaction-number'>Please keep this transaction number for your records.</p>
                                <p className='confirmation-text'>You will receive a confirmation email with you transaction number 
                                along with information on how to track your order once it has been shipped.</p>
                                <Link to='/'>
                                    <button className='button modal-continue-btn'>Continue</button>
                                </Link>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default Confirmation;
