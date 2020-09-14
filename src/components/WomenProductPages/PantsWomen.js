import React from 'react';
import Title from '../Title/Title';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import { ProductConsumer } from '../../context';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbarpages';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';


class PantsWomen extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
					<div className="container products-page">
						<Breadcrumbs />
						<div className='row'>
							<div className='col-12 product-page-title mx-auto text-center'>
							<Title name="Women's" title="Pants & Leggings"></Title>
							<div className='col-12 col-md-10 col-lg-8 mx-auto text-center pages-text'>
							For those days when jeans don't quite cut it, swap them out for equally as versatile pants and leggings. 
                            From chinos and crops to wide leg and skinny styles, our latest edit of women's pants is full of go-to pieces for work, 
                            the weekend or whenever you feel like it. Embracing your own unique style couldn't be easier
								</div> 
							</div>
						</div>
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
										if (product.sex === 'women' && product.category === 'pants') {
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

export default PantsWomen;