import React from 'react';
import Title from '../Title/Title';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import { ProductConsumer } from '../../context';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbarpages';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';


class SkirtsWomen extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
					<div className="container products-page">
						<Breadcrumbs />
						<div className='row'>
							<div className='col-12 product-page-title mx-auto text-center'>
							<Title name="Women's" title="Skirts"></Title>
							<div className='col-12 col-md-10 col-lg-8 mx-auto text-center pages-text'>
							Give yourself plenty of ways to express your individuality by stocking up on skirts from all of your favorite brands. 
                            Play around with classic denim, sleek leather, or form-fitting pencil skirts from our current new season edit. 
                            From work-friendly bias cuts to form-fitting bodycons with day-to-night potential.
								</div> 
							</div>
						</div>
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
										if (product.sex === 'women' && product.category === 'skirts') {
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

export default SkirtsWomen;