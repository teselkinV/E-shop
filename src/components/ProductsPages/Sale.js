import React from 'react';
import Title from '../Title/Title';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import { ProductConsumer } from '../../context';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbarpages';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router-dom';


class Sale extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
					<div className="container products-page">
						<div className='row'>
							<div className='col-10 col-md-6 text-center mx-auto mt-4'>
								<Link to="/women's-sale">
									<button className='button modal-continue-btn'>Women's sale</button>
								</Link>
							</div>
						
						
							<div className='col-10 col-md-6 text-center mx-auto mt-4'>
								<Link to="/men's-sale">
									<button className='button modal-continue-btn'>Men's sale</button>
								</Link>
							</div>
						</div>
					</div>
		        <Summer />
		        <Footer />
      		</React.Fragment>

		)
	}
}

export default Sale;