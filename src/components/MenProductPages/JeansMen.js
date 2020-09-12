import React from 'react';
import Title from '../Title/Title';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import { ProductConsumer } from '../../context';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbarpages';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';


class JeansMen extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
					<div className="container products-page">
						<Breadcrumbs />
						<div className='row'>
							<div className='col-12 product-page-title mx-auto text-center'>
							<Title name="Men's" title="Jeans"></Title>
							<div className='col-12 col-md-10 col-lg-8 mx-auto text-center pages-text'>
							Our edit of men’s jeans provides a solid start to any outfit – from Jack & Jones’ everyday black jeans
                             to Levi’s iconic 501s, we’ve got styles to suit every taste. Hit up Gelsy for everything from staple styles in 
                             classic washes that can be worn all day every day to spray-on men's skinny jeans for your weekend wardrobe. 
								</div> 
							</div>
						</div>
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
                                        if (product.sex === 'men' && product.category === 'jeans') {
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

export default JeansMen;