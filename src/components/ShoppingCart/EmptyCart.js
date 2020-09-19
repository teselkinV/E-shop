import React, { Component } from 'react';
import Navbar from '../Navbar/Navbarpages';
import Drawer from '../Navbar/Drawer';

class EmptyCart extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Drawer />
                <div className='container empty-cart'>
                    <div className='row'>
                        <div className='col-10 mx-auto text-center text-title'>
                            <h4 className='title-cart'>Your cart is currently empty</h4>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EmptyCart;
