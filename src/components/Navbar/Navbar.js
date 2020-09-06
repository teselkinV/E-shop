import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import cart from '../../cart.svg';
import '../../App.css';

class Navbar extends React.Component {
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<div className="navbar navbar-expand-sm px-sm-5 mt-5 py-0">
							<Link to='/'>
								<img src={logo} alt='brand' className='brand-logo' />
							</Link>
							<ul className='navbar-nav align-items-center mx-auto' >
								<li className="nav-item ml-5">
									<Link to='/man' className='nav-link'>Man</Link>
								</li>
								<li className="nav-item ml-5">
									<Link to='/women' className='nav-link'>Women</Link>
								</li>
								<li className="nav-item ml-5">
									<Link to='/kids' className='nav-link'>Kids</Link>
								</li>
								<li className="nav-item ml-5">
									<Link to='/sale' className='nav-link'>Sale</Link>
								</li>
							</ul>
							<Link to='/shoppingcart' className='ml-auto'>
									<img src={cart} alt='cart' className='cart' />
							</Link>
						</div>
					</div>
				</div>
			</div> 
		)
	}
}



export default Navbar;