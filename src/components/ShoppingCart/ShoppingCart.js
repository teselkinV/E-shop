import React from 'react';
import Selected from '../Selected/Selected';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
import Navbar from '../Navbar/Navbarpages';
import Drawer from '../Navbar/Drawer';

class ShoppingCart extends React.Component {
	render() {
		return (
			<section>
				<ProductConsumer>
					{value => {
						const { cart } = value;
						if(cart.length > 0) {
							return (
								<React.Fragment>
									<Navbar />
									<Drawer />
									<div className='container shopping-cart'>
										<div className='row'>
											<div className="col-10 mx-auto my-2 text-title">
												<h4 className="title-cart">Shopping cart</h4>
											</div>
										</div>
									</div>
									<CartList value ={value}/>
									<CartTotals value={value}/>
								</React.Fragment>
							);
						} else {
							return <EmptyCart />
						}
					}}
				</ProductConsumer>
		        <Selected />
		        <Summer />
		        <Footer />
      		
			  </section>
		)
	}
}

export default ShoppingCart;