import React from 'react';
import CardBlock from '../Card/CardBlock';
import { ProductConsumer } from '../../context';

class SelectedWomen extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className='container selected'>
					<div className='row'>
						<div className='col-12 text-left'>
							<h2 className='selected-title'>Selected just for you</h2>
						</div>
					</div>
					<div className='row'>
						<div className='col-6 col-md-3'>
							<ProductConsumer>
								{value => {
									return value.products.map(product => { 
										if (product.block === 'selected-11') {
											return <CardBlock key={product.id} product ={product} />;
										}
									});
								}}
							</ProductConsumer>
							</div>
						<div className='col-6 col-md-3'>
						<ProductConsumer>
								{value => {
									return value.products.map(product => { 
										if (product.block === 'selected-12') {
											return <CardBlock key={product.id} product ={product} />;
										}
									});
								}}
							</ProductConsumer>
						</div>
						<div className='col-6 col-md-3'>
						<ProductConsumer>
								{value => {
									return value.products.map(product => { 
										if (product.block === 'selected-13') {
											return <CardBlock key={product.id} product ={product} />;
										}
									});
								}}
							</ProductConsumer>
						</div>
						<div className='col-6 col-md-3'>
						<ProductConsumer>
								{value => {
									return value.products.map(product => { 
										if (product.block === 'selected-14') {
											return <CardBlock key={product.id} product ={product} />;
										}
									});
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default SelectedWomen;