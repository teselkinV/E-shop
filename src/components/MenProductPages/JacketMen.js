import React from 'react';
import Title from '../Title/Title';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import { ProductConsumer } from '../../context';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbarpages';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';


class JacketMen extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
					<div className="container products-page">
						<Breadcrumbs />
						<div className='row'>
							<div className='col-12 product-page-title mx-auto text-center'>
							<Title name="Men's" title="Jackets & Coats"></Title>
							<div className='col-12 col-md-10 col-lg-8 mx-auto text-center pages-text'>
							Staying warm never looked so good thanks to our edit of men’s coats and jackets. Check out design for all 
                            the latest trends, and discover new-season men's trench coats and men's gilets. Browse Only & Sons for men's 
                            bomber jackets and overcoats, or for something fresh and experimental.
								</div> 
							</div>
						</div>
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
                                        if (product.sex === 'men' && product.category === 'jacket') {
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

export default JacketMen;