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
                                <Link to="/men's-t-shirts"><li>T-shirts</li></Link>
                                <Link to="/men's-polo"><li>Polo</li></Link> 
                                <Link to="/men's-shirts"><li>Shirts</li></Link>
                                <Link to="/men's-sweaters"><li>Sweaters & Cardigans</li></Link>
                                <Link to="/men's-overalls"><li>Overalls & Boiler Suits</li></Link>
                                <Link to="/men's-jackets"><li>Jackets & Coats</li></Link> 
                                <Link to="/men's-hoodies"><li>Hoodies</li></Link>
                                <Link to="/men's-activewear"><li>Activewear</li></Link>

                            </ul>
                        </div>
                        <div className='col-3 mx-auto'>
                            <h3 className='submenu-title'>BOTTOMS</h3>
                            <ul className='menu-column'>
                                <Link to="/men's-jeans"><li>Jeans</li></Link>
                                <Link to="/men's-shorts"><li>Shorts</li></Link> 
                                <Link to="/men's-pants"><li>Pants</li></Link>
                                <Link to="/men's-joggers"><li>Joggers</li></Link>
                            <br/>

                                <Link to="/men's-suites" className='accesories'><li>Suites</li></Link>
                                <Link to="/men's-shoes" className='accesories'><li>Shoes</li></Link>
                                <Link to="/men's-underwear" className='accesories'><li>Underwear</li></Link>
                                </ul>
                            </div>
                            <div className='col-3 mx-auto'>
                                <div className='img-1-box'>
                                <Link to="/men's-new-arrived"><div className='img-arr-men'></div></Link>
                                    </div>
                            </div>
                            <div className='col-3 mx-auto'>
                                <div className='img-2-box'>
                                    <Link to="/men's-sale"><div className='img-sale-men'></div></Link> 
                            </div>
                            </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )

}

export default DropdownMan
