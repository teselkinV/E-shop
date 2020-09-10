import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo-color.svg';
import cart from '../../cart-pages.svg';
import '../../App.css';
import DropdownMan from './DropdownMan';
import DropdownWomen from './DropdownWomen';

const Navbarpages = () => {
	const [visible, setVisible,] = useState(false)
	const [vis, setVis,] = useState(false)

    const displayMenu = () => {
        setVisible(true)
    }
    const hideMenu = () => {
        setVisible(false)
	}
	const display = () => {
        setVis(true)
    }
    const hide = () => {
        setVis(false)
	}
		return (
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<div className="navbar navbar-expand-sm px-sm-5 mt-5 pt-0 navbar-pages">
							<Link to='/'>
								<img src={logo} alt='brand' className='brand-logo' />
							</Link>
							<ul className='navbar-nav align-items-center mx-auto' >
								<li 
									className="nav-item ml-5"
									onMouseLeave={hideMenu}>
									<Link to='/man' 
										className='nav-link pages'
										onMouseOver={displayMenu}
										>Man</Link>
										<DropdownMan isVisible={visible} />
								</li>
								<li 
									className="nav-item ml-5"
									onMouseLeave={hide}>
									<Link to='/women' 
										className='nav-link pages'
										onMouseOver={display}
										>Women</Link>
										<DropdownWomen isVisible={vis} />
								</li>
							
								<li className="nav-item ml-5">
									<Link to='/sale' className='nav-link pages'>Sale</Link>
								</li>
							</ul>
							<Link to='/shoppingcart' className='ml-auto'>
									<img src={cart} alt='cart' className='cart' />
							</Link>
						</div>
					</div>
				</div>
			</div> 
		)
	}




export default Navbarpages;