import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Drawer from '../Navbar/Drawer';


class Sale extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Drawer />
					<div className="product-page sale-page">
						<div className='row'>
							<div className='col-10 col-md-6 text-center sale-man-btn'>
								<Link to="/men's-sale">
									<button className='button modal-continue-btn'>Men's sale</button>
								</Link>
							</div>
						
						
							<div className='col-10 col-md-6 text-center sale-man-btn'>
								<Link to="/women's-sale">
									<button className='button modal-continue-btn'>Women's sale</button>
								</Link>
							</div>
						</div>
					</div>
		        <Footer />
      		</React.Fragment>

		)
	}
}

export default Sale;