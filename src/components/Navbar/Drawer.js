import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Drawer.css';
import { Link } from 'react-router-dom';


// Import images
import logo from '../../logo.svg';
import cart from '../../cart.svg';
import appstore from '../../images/app-store-badge.png';
import googleplay from '../../images/google-play-badge.png';

import tshirticon from '../../images/tshirts-men-icon.jpeg';
import poloicon from '../../images/polo-men-icon.jpeg';
import shirticon from '../../images/shirts-men-icon.jpeg';
import cardigansticon from '../../images/cardigans-men-icon.jpeg';
import overallsicon from '../../images/overalls-men-icon.jpeg';
import jacketicon from '../../images/jacket-men-icon.jpeg';
import hoodiesicon from '../../images/hoodies-men-icon.jpeg';
import activewearicon from '../../images/activewear-men-icon.jpeg';
import jeansicon from '../../images/jeans-men-icon.jpeg';
import shortsicon from '../../images/shorts-men-icon.jpeg';
import joggersicon from '../../images/joggers-men-icon.jpeg';
import pantsicon from '../../images/pants-men-icon.jpeg';
import suitesicon from '../../images/suites-men-icon.jpeg';
import shoesicon from '../../images/shoes-men-icon.jpeg';
import underwearicon from '../../images/underwear-men-icon.jpeg';

import dressesicon from '../../images/dresses-women-icon.jpeg';
import jumpsuitsicon from '../../images/jumpsuits-women-icon.jpeg';
import tshirtsicon from '../../images/tshirts-women-icon.jpeg';
import loungewearicon from '../../images/loungewear-women-icon.jpeg';
import coatsicon from '../../images/coats-women-icon.jpeg';
import jumpersicon from '../../images/jumpers-women-icon.jpeg';
import hoodieswomenicon from '../../images/hoodies-women-icon.jpeg';
import swimwearicon from '../../images/swimwear-women-icon.jpeg';
import jeanswomenicon from '../../images/jeans-women-icon.jpeg';
import skirtswomenicon from '../../images/skirts-women-icon.jpeg';
import shortswomenicon from '../../images/shorts-women-icon.jpeg';
import legginsicon from '../../images/pants-women-icon.jpeg';
import suiteswomenicon from '../../images/suites-women-icon.jpeg';
import shoeswomenicon from '../../images/shoes-women-icon.jpeg';
import lingerieicon from '../../images/lingerie-women-icon.jpeg';


function Drawer() {
  return (
    <Navbar>
      <NavItem icon={<i className="fas fa-bars"></i>}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
      <Link to='/'><img src={logo} alt='brand' className='brand-logo-mobile' /></Link>
      <Link to='/shoppingcart' className='ml-auto'>
									<img src={cart} alt='cart' className='cart' />
							</Link>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar-mobile d-block d-sm-block d-md-block d-lg-none">
      <ul className="navbar-nav-mobile">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item-mobile">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item-mobile" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown-mobile" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>
            <Link to='/' className='home-page-block mobile-nav-titles'>Home page</Link>
          </DropdownItem>

          <DropdownItem>
            <Link 
              to='/sale' 
              className='sale-block mobile-nav-titles'>
                Sale up to 70%
              </Link>
          </DropdownItem>
          
          <DropdownItem>
            <h5 className='shop-by mobile-nav-titles'> Shop by</h5>
           </DropdownItem>

          <DropdownItem
            goToMenu="men">
              <Link className='men-block mobile-nav-titles'>
                Men
              </Link>
          </DropdownItem>

          <DropdownItem
            goToMenu="women">
              <Link className='women-block mobile-nav-titles'>
                Women
              </Link>
          </DropdownItem>

          <DropdownItem>
            <div className='social-icons'>
              <a href='https://www.facebook.com' target='_blank' className='social-icon'><i class="fab fa-facebook-f"></i></a>
							<a href='https://www.twitter.com' target='_blank' className='social-icon'><i class="fab fa-twitter"></i></a>
							<a href='https://www.linkedin.com' target='_blank' className='social-icon'><i class="fab fa-linkedin"></i></a>
							<a href='https://www.instagram.com' target='_blank' className='social-icon'><i class="fab fa-instagram"></i></a>
							<a href='https://www.pinterest.com' target='_blank' className='social-icon'><i class="fab fa-pinterest"></i></a>
              </div>
          </DropdownItem>

          {/* Footer */}

          <DropdownItem>
            <h5 className='footer-title-about'>
            <i className="fas fa-shipping-fast mr-2 footer-mobile-icon"></i>
              Shopping Online</h5>
            </DropdownItem>

            <DropdownItem>
            <ul className='footer-text-mobile'>
              <li>Order Status</li>
              <li>Shipping and Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us</li>
            </ul>
          </DropdownItem>

          <DropdownItem>
            <h5 className='footer-title-about'>
            <i className="fas fa-info-circle mr-2 footer-mobile-icon"></i>
              Information</h5>
          </DropdownItem>

          <DropdownItem>
            <ul className='footer-text-mobile'>
              <li>Gift Cards</li>
              <li>Find a store</li>
              <li>Newsletter</li>
              <li>Become a member</li>
              <li>Feedback</li>
            </ul>
          </DropdownItem>

          <DropdownItem>
            <h5 className='footer-title-about'>
            <i className="fas fa-building mr-2 footer-mobile-icon"></i>
              Company</h5>
          </DropdownItem>

          <DropdownItem>
            <ul className='footer-text-mobile'>
              <li>Company Overview</li>
              <li>Made in USA</li>
              <li>Careers</li>
              <li>Idea Submission</li>
              <li>Student Discount</li>
            </ul>
          </DropdownItem>

          <DropdownItem>
            <h5 className='footer-title-about'>
            <i className="fas fa-address-book mr-2 footer-mobile-icon"></i>
              Contact</h5>
          </DropdownItem>

          <DropdownItem>
            <ul className='footer-text-mobile'>
              <li>eshop@developer.com</li>
              <li>Hotline: +1 999 138 138</li>
            </ul>
          </DropdownItem>

          <DropdownItem>
            <div className='shop-by mobile-nav-titles shop-by-categories'>
              Download our app
            </div>
          </DropdownItem>

          <DropdownItem>
            <div className='downloads-icon-mobile'>
                  <a href='https://www.apple.com/ios/app-store/' target='_blank'>
                    <img src={appstore} alt='icon' className='mx-1'/>
                  </a>
                  <a href='https://play.google.com/store'>
                    <img src={googleplay} alt='icon' className='mx-1'/>
                  </a>
                </div>
          </DropdownItem>

        </div>
      </CSSTransition>

      {/* -------------------------------------- */}
                    {/* Men navbar */}
      {/* -------------------------------------- */}

      <CSSTransition
        in={activeMenu === 'men'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu-mobile">
          <DropdownItem goToMenu="main">
            <h4 className='nav-category mobile-nav-titles'>
            <i className="fas fa-long-arrow-alt-left mr-2"></i>
              Category
              </h4>
          </DropdownItem>
          <DropdownItem>
            <Link to="/men's-sale"
              className='sale-block mobile-nav-titles'>
              Men's sale
              </Link>
          </DropdownItem>
          <DropdownItem>
          <Link 
            to="/men's-new-arrived"
            className='new-arrival-block mobile-nav-titles men'
            >New arrival
            </Link>
          </DropdownItem>

          <DropdownItem>
            <h5 className='shop-by mobile-nav-titles shop-by-categories'> 
              Shop by product
            </h5>
          </DropdownItem>

       

          <DropdownItem >
            <div className='category-title'>
              <img src={tshirticon} alt='icon' className='icon'></img>
              <Link to="/men's-t-shirts" className='category-item'>T-shirts</Link>
              </div>
          </DropdownItem>
          <DropdownItem>
            <div className='category-title'>
              <img src={poloicon} alt='icon' className='icon'></img>
              <Link to="/men's-polo" className='category-item'>Polo</Link>
              </div>
          </DropdownItem>
          <DropdownItem>
            
            <div className='category-title'>
              <img src={shirticon} alt='icon' className='icon'></img>
              <Link to="/men's-shirts" className='category-item'>Shirts</Link>
              </div>
          </DropdownItem>
          <DropdownItem>
          <div className='category-title'>
              <img src={cardigansticon} alt='icon' className='icon'></img>
              <Link to="/men's-sweaters" className='category-item'>Sweaters & Cardigans</Link>
              </div>
              
          </DropdownItem>
          <DropdownItem>
            <div className='category-title'>
              <img src={overallsicon} alt='icon' className='icon'></img>
              <Link to="/men's-overalls" className='category-item'>Overalls & Boiler Suits</Link>
              </div>
              
          </DropdownItem>
          <DropdownItem>
            <div className='category-title'>
              <img src={jacketicon} alt='icon' className='icon'></img>
              <Link to="/men's-jackets" className='category-item'>Jackets & Coats</Link>
              </div>
              
          </DropdownItem>
          <DropdownItem >
            <div className='category-title'>
              <img src={hoodiesicon} alt='icon' className='icon'></img>
              <Link to="/men's-hoodies" className='category-item'>Hoodies</Link>
              </div>
              
          </DropdownItem>
          <DropdownItem>
            <div className='category-title'>
              <img src={activewearicon} alt='icon' className='icon'></img>
              <Link to="/men's-activewear" className='category-item'>Activewear</Link>
              </div>
              
          </DropdownItem>


          
          <DropdownItem>
            <div className='category-title'>
              <img src={jeansicon} alt='icon' className='icon'></img>
              <Link to="/men's-jeans" className='category-item'>Jeans</Link>
              </div>
              
          </DropdownItem>
          <DropdownItem>
          <div className='category-title'>
              <img src={shortsicon} alt='icon' className='icon'></img>
              <Link to="/men's-shorts" className='category-item'>Shorts</Link>
              </div>
              
          </DropdownItem>
          <DropdownItem>
            <div className='category-title'>
              <img src={joggersicon} alt='icon' className='icon'></img>
              <Link to="/men's-joggers" className='category-item'>Joggers</Link>
              </div>
          
          </DropdownItem>
          <DropdownItem>
            <div className='category-title'>
              <img src={pantsicon} alt='icon' className='icon'></img>
              <Link to="/men's-pants" className='category-item'>Pants</Link>
              </div>
              
          </DropdownItem>
          <br />
          <DropdownItem>
            <div className='category-title'>
              <img src={suitesicon} alt='icon' className='icon'></img>
              <Link to="/men's-suites" className='accesories category-item'>Suites</Link>
              </div>
              
          </DropdownItem>
          <DropdownItem>
            <div className='category-title'>
              <img src={shoesicon} alt='icon' className='icon'></img>
              <Link to="/men's-shoes" className='accesories category-item'>Shoes</Link>
              </div>
              
          </DropdownItem>
          <DropdownItem>
            <div className='category-title'>
              <img src={underwearicon} alt='icon' className='icon'></img>
              <Link to="/men's-underwear" className='accesories category-item'>Underwear</Link>
              </div>
              
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* -------------------------------------- */}
                  {/* Women navbar */}
      {/* -------------------------------------- */}

      <CSSTransition
        in={activeMenu === 'women'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main">
          <h4 className='nav-category mobile-nav-titles'>
          <i className="fas fa-long-arrow-alt-left mr-2"></i>
            Category 
            </h4>
          </DropdownItem>

          <DropdownItem>
            <Link 
              to="/women's-sale"
              className='sale-block mobile-nav-titles'>
                Women's sale
                </Link>
          </DropdownItem>
          <DropdownItem>
          <Link 
            to="/women's-new-arrived"
            className='new-arrival-block mobile-nav-titles women'>
              New arrival
              </Link>
          </DropdownItem>

          <DropdownItem>
          <h5 className='shop-by mobile-nav-titles shop-by-categories'> Shop by product</h5>
          </DropdownItem>

          <DropdownItem>
          <div className='category-title'>
              <img src={dressesicon} alt='icon' className='icon'></img>
              <Link to="/women's-t-dresses" className='category-item'>Dresses</Link>
              </div>
          </DropdownItem>
          <DropdownItem>
          <div className='category-title'>
              <img src={jumpsuitsicon} alt='icon' className='icon'></img>
              <Link to="/women's-t-jumpsuits" className='category-item'>Jumpsuits & Rompers</Link>
              </div>
          </DropdownItem>
          <DropdownItem>
          <div className='category-title'>
              <img src={tshirtsicon} alt='icon' className='icon'></img>
              <Link to="/women's-t-shirts" className='category-item'>T-shirts</Link>
              </div>
          </DropdownItem>
          <DropdownItem>
          <div className='category-title'>
              <img src={loungewearicon} alt='icon' className='icon'></img>
              <Link to="/women's-t-loungewear" className='category-item'>Loungewear</Link>
              </div>
          </DropdownItem>
          <DropdownItem>
          <div className='category-title'>
              <img src={coatsicon} alt='icon' className='icon'></img>
              <Link to="/women's-t-coats" className='category-item'>Coats & Jackets</Link>
              </div>
          </DropdownItem>
          <DropdownItem>
          <div className='category-title'>
              <img src={jumpersicon} alt='icon' className='icon'></img>
              <Link to="/women's-t-cardigans" className='category-item'>Cardigans</Link>
              </div>
          </DropdownItem>
          <DropdownItem>
          <div className='category-title'>
              <img src={hoodieswomenicon} alt='icon' className='icon'></img>
              <Link to="/women's-t-hoodies" className='category-item'>Hoodies & Sweatshirts</Link>
              </div>
          </DropdownItem>
          <DropdownItem>
          <div className='category-title'>
              <img src={swimwearicon} alt='icon' className='icon'></img>
              <Link to="/women's-t-swimwear" className='category-item'>Swimwear & Beachwear</Link>
              </div>
          </DropdownItem>

          
          <DropdownItem>
          <div className='category-title'>
              <img src={jeanswomenicon} alt='icon' className='icon'></img>
              <Link to="/women's-t-jeans" className='category-item'>Jeans</Link>
              </div>
          </DropdownItem>
          <DropdownItem>
          <div className='category-title'>
              <img src={skirtswomenicon} alt='icon' className='icon'></img>
              <Link to="/women's-t-skirts" className='category-item'>Skirts</Link>
              </div>
          </DropdownItem>
          <DropdownItem>
          <div className='category-title'>
              <img src={shortswomenicon} alt='icon' className='icon'></img>
              <Link to="/women's-t-shorts" className='category-item'>Shorts</Link>
              </div>
          </DropdownItem>
          <DropdownItem>
          <div className='category-title'>
              <img src={legginsicon} alt='icon' className='icon'></img>
              <Link to="/women's-t-paints" className='category-item'>Pants & Leggings</Link>
              </div>
          </DropdownItem>

          <br />
          <DropdownItem>
          <div className='category-title'>
              <img src={suiteswomenicon} alt='icon' className='icon'></img>
              <Link to="/women's-suites" className='accesories category-item'>Suits & Tailoring</Link>
              </div>
          </DropdownItem>
          <DropdownItem>
          <div className='category-title'>
              <img src={shoeswomenicon} alt='icon' className='icon'></img>
              <Link to="/women's-shoes" className='accesories category-item'>Shoes</Link>
              </div>
          </DropdownItem>
          <DropdownItem>
          <div className='category-title'>
              <img src={lingerieicon} alt='icon' className='icon'></img>
              <Link to="/women's-lingerie" className='accesories category-item'>Lingerie</Link>
              </div>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Drawer;

