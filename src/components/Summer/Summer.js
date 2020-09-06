import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Summer extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className='my-5'>
						<div className='col-12 mx-auto'>
							<div className='summer-img'>
								<div className='summer-box'>
								<div className='summer-content'>
									<h3 className='summer-text'>New summer collection</h3>
									<Link to='/summer-collection'>
										<button className='btn btn-summer'>For man and women</button>
									</Link>
								</div>
								</div>
							</div>
						</div>
				</div>
			</React.Fragment>
		)
	}
}
 
export default Summer;