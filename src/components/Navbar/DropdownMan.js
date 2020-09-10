import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Dropdown.css';

const DropdownMan = ({isVisible}) => {
        return (
            <React.Fragment>
                <div className={`${isVisible ? 'block' : 'hidden'} absolute`}>
                <div className='container-sm dropdown-container'>
                    <div className='row'>
                        <div className='col-3 mx-auto'>
                            <h3 className='submenu-title'>TOPS</h3>
                            <ul className='menu-column'>
                                <Link to='/man'><li>T-shirts</li></Link>
                                <Link to='/man'><li>Polo</li></Link> 
                                <Link to='/man'><li>Shirts</li></Link>
                                <Link to='/man'><li>Sweaters</li></Link>
                                <Link to='/man'><li>Blazers</li></Link>
                                <Link to='/man'><li>Jackets</li></Link> 
                                <Link to='/man'><li>Hoodies</li></Link>
                                <Link to='/man'><li>Coats</li></Link>

                            </ul>
                        </div>
                        <div className='col-3 mx-auto'>
                            <h3 className='submenu-title'>BOTTOMS</h3>
                            <ul className='menu-column'>
                                <Link to='/man'><li>Jeans</li></Link>
                                <Link to='/man'><li>Shorts</li></Link> 
                                <Link to='/man'><li>Pants</li></Link>
                                <Link to='/man'><li>Joggers</li></Link>
                            <br/>

                                <Link to='/man'className='accesories'><li>Suites</li></Link>
                                <Link to='/man'className='accesories'><li>Bags</li></Link>
                                <Link to='/man'className='accesories'><li>Accesories</li></Link>
                                </ul>
                            </div>
                            <div className='col-3 mx-auto'>
                                <div className='img-1-box'>
                                <Link to='/'><div className='img-1'></div></Link>
                                    </div>
                            </div>
                            <div className='col-3 mx-auto'>
                                <div className='img-2-box'>
                                    <Link to='/'><div className='img-2'></div></Link> 
                            </div>
                            </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )

}

export default DropdownMan
