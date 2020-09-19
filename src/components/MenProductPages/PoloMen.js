import React from 'react';
import Title from '../Title/Title';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import { ProductConsumer } from '../../context';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbarpages';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Drawer from '../Navbar/Drawer';


class PoloMen extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Drawer />
					<div className="container products-page">
						<Breadcrumbs />
						<div className='row'>
							<div className='col-12 product-page-title mx-auto text-center'>
							<Title name="Men's" title="Polo"></Title>
							<div className='col-12 col-md-10 col-lg-8 mx-auto text-center pages-text'>
							For the right balance of smart and casual, check out our edit of men’s polo shirts. 
                            Polo Ralph Lauren brings you branded classics you’ll love, while heritage label Fred Perry’s black polo 
                            shirts – complete with the brand’s signature embroidered logo – are an easy win for when you’re in-between dress codes
								</div> 
							</div>
						</div>
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
                                        if (product.sex === 'men' && product.category === 'polo') {
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

export default PoloMen;