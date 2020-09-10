import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Dropdown.css';

const DropdownWomen = ({isVisible}) => {
  
        return (
            <React.Fragment>
                <div className={`${isVisible ? 'block' : 'hidden'} absolute`}>
                <div className='container-sm dropdown-container'>
                    <div className='row'>
                        <div className='col-3 mx-auto'>
                            <h3 className='submenu-title'>TOPS</h3>
                            <ul className='menu-column'>
                                <Link to='/'><li>Dresses</li></Link>
                                <Link to='/'><li>Jumpsuits & Rompers</li></Link> 
                                <Link to='/'><li>T-shirts</li></Link>
                                <Link to='/'><li>Loungewear</li></Link>
                                <Link to='/'><li>Coats & Jackets</li></Link>
                                <Link to='/'><li>Cardigans</li></Link> 
                                <Link to='/'><li>Hoodies & Sweatshirts</li></Link>
                                <Link to='/'><li>Swimwear & Beachwear</li></Link>

                            </ul>
                        </div>
                        <div className='col-3 mx-auto'>
                            <h3 className='submenu-title'>BOTTOMS</h3>
                            <ul className='menu-column'>
                                <Link to='/'><li>Jeans</li></Link>
                                <Link to='/'><li>Skirts</li></Link> 
                                <Link to='/'><li>Shorts</li></Link>
                                <Link to='/'><li>Pants & Leggings</li></Link>
                            <br/>

                            
                                <Link to='/'className='accesories'><li>Suits & Tailoring</li></Link> 
                                <Link to='/'className='accesories'><li>Bags</li></Link>
                                <Link to='/'className='accesories'><li>Accesories</li></Link>
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

export default DropdownWomen
