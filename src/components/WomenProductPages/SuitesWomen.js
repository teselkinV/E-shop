import React from 'react';
import Title from '../Title/Title';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import { ProductConsumer } from '../../context';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbarpages';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';


class SuitesWomen extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
					<div className="container products-page">
						<Breadcrumbs />
						<div className='row'>
							<div className='col-12 product-page-title mx-auto text-center'>
							<Title name="Women's" title="Suits & Tailoring"></Title>
							<div className='col-12 col-md-10 col-lg-8 mx-auto text-center pages-text'>
							Finding the perfect two-piece has never been easier thanks to our edit of suits for women. Whether you’re 
                            shopping for cool, casual tailoring or something a little bit smarter, ASOS DESIGN has a wide a range of 
                            women's trouser suits to discover. Play by your own rules with our collection of suit shorts.
								</div> 
							</div>
						</div>
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
										if (product.sex === 'women' && product.category === 'suites') {
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

export default SuitesWomen;