import React from 'react';
import Title from '../Title/Title';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import { ProductConsumer } from '../../context';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbarpages';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Drawer from '../Navbar/Drawer';


class TshirtsWomen extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Drawer />
					<div className="container products-page">
						<Breadcrumbs />
						<div className='row'>
							<div className='col-12 product-page-title mx-auto text-center'>
							<Title name="Women's" title="T-shirts"></Title>
							<div className='col-12 col-md-10 col-lg-8 mx-auto text-center pages-text'>
							You’ve found your perfect pair of bottoms, now all you need is a top to complete the look. Introducing our 
							edit of tops for women, which features everything from vests and casual T-shirts to smart shirts and blouses. 
							PrettyLittleThing is here to bring some sass to your after-hours wardrobe.
								</div> 
							</div>
						</div>
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
										if (product.sex === 'women' && product.category === 'tshirts') {
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

export default TshirtsWomen;