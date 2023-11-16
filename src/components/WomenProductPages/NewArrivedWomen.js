import React from 'react';
import Title from '../Title/Title';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import { ProductConsumer } from '../../context';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbarpages';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Drawer from '../Navbar/Drawer';


class NewArrivedWomen extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Drawer />
					<div className="container products-page">
						<Breadcrumbs />
						<div className='row'>
							<div className='col-12 product-page-title mx-auto text-center'>
							<Title name="Women's" title="New arrived"></Title>
							<div className='col-12 col-md-10 col-lg-8 mx-auto text-center pages-text'>
							From work to play, our collection of shirts for men covers all bases. Shop ASOS DESIGN for everything from smart shirts 
                            for your 9-5 to denim shirts and Hawaiian shirts for your summer wardrobe. Browse iconic designs from Polo Ralph Lauren, 
                            with check shirts, preppy hues and logo details featuring heavily.
								</div> 
							</div>
						</div>
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
                                        if (product.sex === 'women' && product.collection === 'new') {
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

export default NewArrivedWomen;
