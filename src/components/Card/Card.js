import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../context';
import PropTypes from 'prop-types';

class Card extends React.Component {
	render() {
		const {id, sign, title, img, price} = this.props.product;
		return (
			<React.Fragment>
			   <div className='col-11 mx-auto col-md-5 col-lg-3 my-3 card-wrapper'>
					<div className="card">
						<ProductConsumer>
							{(value) => (
							<div className="img-container" 
							onClick={() => value.handleDetail(id)}>
							 <Link to='/details'> {/* <Link to={`/details/${sign}`}></Link> */}
								<img src={img} alt='product' className='card-image-top img-fluid'/>
							</Link>
						</div>
						)}
						</ProductConsumer>

						<div className='card footer d-flex justify-content-left'>
							<p className='m-0 mt-4 card-title'>{title}</p>
							<div className='m-0 mt-1 card-price'>${price}</div>
						</div>	
					</div>
			   </div>
      		</React.Fragment>
		)
	}
}

ProductConsumer.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		category: PropTypes.string,
		sign: PropTypes.string,
		inCart: PropTypes.bool
	}).isRequired
};

export default Card;