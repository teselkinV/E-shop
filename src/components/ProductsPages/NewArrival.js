import React from 'react';
import Title from '../Title/Title';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import { ProductConsumer } from '../../context';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbarpages';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Drawer from '../Navbar/Drawer';


class NewArrival extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Drawer />
					<div className="container products-page">
						<Breadcrumbs />
						<div className='row'>
							<div className='col 12 product-page-title'>
							<Title name="New" title="arrival"></Title>
							</div>
						</div>
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
										return <Card key={product.id} product ={product} />;
									});
								}}
							</ProductConsumer>
						</div>
					</div>

		        <Summer />
		        <Footer />
      		</React.Fragment>

		)
	}
}

export default NewArrival;