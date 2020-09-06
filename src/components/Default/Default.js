import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

class Cart extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar/>
					<div className='back-img'>
						<div className='box'>
						<div className='default-content'>
							<h1 className='title-default'>404</h1>
							<h2 className='text-default'>Page not found</h2>
							<h3 className='some-text-default'>Some interesting text here, and here</h3>
							<Link to='/'>
							<button className='btn btn-default'>Back to home</button>
							</Link>
						</div>
					</div>
				</div>
			</React.Fragment>	
		)
	}
}

export default Cart;