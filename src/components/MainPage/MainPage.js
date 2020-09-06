import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../Slideshow/Slideshow';
import Newproducts from '../Newproducts/Newproducts';
import Selected from '../Selected/Selected';
import Service from '../Service/Service';
import Todayproducts from '../Todayproducts/Todayproducts';
import Summer from '../Summer/Summer';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

class MainPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
		        <Slideshow />
		        <Newproducts />
		        <Selected />
		        <Service />
		        <Todayproducts />
		        <Summer />
		        <Footer />
      		</React.Fragment>
		)
	}
}

export default MainPage;