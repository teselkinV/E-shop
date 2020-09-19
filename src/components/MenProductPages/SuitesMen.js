import React from 'react';
import Title from '../Title/Title';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import { ProductConsumer } from '../../context';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbarpages';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Drawer from '../Navbar/Drawer';


class SuitesMen extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Drawer/>
					<div className="container products-page">
						<Breadcrumbs />
						<div className='row'>
							<div className='col-12 product-page-title mx-auto text-center'>
							<Title name="Men's" title="Suites"></Title>
							<div className='col-12 col-md-10 col-lg-8 mx-auto text-center pages-text'>
							It's time to get suited and booted with our versatile collection of men's suits. Whether you're looking 
                            for a tuxedo to wear to a wedding or just want to elevate your daytime look with a casual suit, we've got what you're 
                            looking for. Shop brands like Burton Menswear and Selected Homme.
								</div> 
							</div>
						</div>
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
                                        if (product.sex === 'men' && product.category === 'suites') {
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

export default SuitesMen;