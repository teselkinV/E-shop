import React from 'react';
import Title from '../Title/Title';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import { ProductConsumer } from '../../context';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbarpages';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Drawer from '../Navbar/Drawer';


class Dresses extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Drawer />
					<div className="container products-page">
						<Breadcrumbs />
						<div className='row'>
							<div className='col-12 product-page-title mx-auto text-center'>
							<Title name="Women's" title="Dresses"></Title>
							<div className='col-12 col-md-10 col-lg-8 mx-auto text-center pages-text'>
							From minis to maxi dresses, bodycons and smocks, our collection of dresses has something for everyone, 
                            whatever your style. ASOS DESIGN has hundreds of dresses to choose from to help you feel yourself, while & Other 
                            Stories is the go-to for romantic florals and understated design.
								</div> 
							</div>
						</div>
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
										if (product.sex === 'women' && product.category === 'dresses') {
											return <Card key={product.id} product ={product} />;
										}
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

export default Dresses;