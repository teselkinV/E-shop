import React from 'react';
import Title from '../Title/Title';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import { ProductConsumer } from '../../context';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbarpages';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';


class JeansWomen extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
					<div className="container products-page">
						<Breadcrumbs />
						<div className='row'>
							<div className='col-12 product-page-title mx-auto text-center'>
							<Title name="Women's" title="Jeans"></Title>
							<div className='col-12 col-md-10 col-lg-8 mx-auto text-center pages-text'>
							Mom or boyfriend? We're talking about jeans, of course, and there's plenty of styles to choose 
                            from in our latest edit. From vintage classics from Urban Bliss through to comfy wide leg styles courtesy 
                            of COLLUSION, finding 'the' pair of jeans has never been easier.
								</div> 
							</div>
						</div>
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
										if (product.sex === 'women' && product.category === 'jeans') {
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

export default JeansWomen;