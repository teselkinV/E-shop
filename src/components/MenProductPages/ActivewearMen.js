import React from 'react';
import Title from '../Title/Title';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import { ProductConsumer } from '../../context';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbarpages';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';


class ActivewearMen extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
					<div className="container products-page">
						<Breadcrumbs />
						<div className='row'>
							<div className='col-12 product-page-title mx-auto text-center'>
							<Title name="Men's" title="Activewear"></Title>
							<div className='col-12 col-md-10 col-lg-8 mx-auto text-center pages-text'>
							If you want to look fresh when working out, our edit of sports clothing is your go-to. However you decide to move, 
                            we've got the tech that stands up to the most high-impact workouts whilst looking and feeling great. From quick dry t-shirts and tights, 
                            to ski jackets and track tops, we've got your needs covered.
								</div> 
							</div>
						</div>
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
                                        if (product.sex === 'men' && product.category === 'activewear') {
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

export default ActivewearMen;