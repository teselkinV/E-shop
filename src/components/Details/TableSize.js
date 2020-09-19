import React, { Component } from 'react';
import Title from '../Title/Title';
import Navbar from '../Navbar/Navbarpages';
import Footer from '../Footer/Footer';
import Drawer from '../Navbar/Drawer';

export class TableSize extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Drawer />
                <div className='container table-size-page'>

                    <div className='row'>
                        <div className='col-10 col-md-4 mx-auto text-center'>
                        <h5 className='table-size-title'>Men's size charts <i class="fas fa-male"></i></h5>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-10 col-md-10 col-lg-5 mx-auto'>
                            <div className='table table-bordered table-striped fluid'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Size</th>
                                        <th scope='col'>Neck</th>
                                        <th scope='col'>Chest</th>
                                        <th scope='col'>Waist</th>
                                        <th scope='col'>Sleeve</th>
                                        <th scope='col'>Inseam</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope='row'>S</th>
                                        <td>14-14½″</td>
                                        <td>34-36″</td>
                                        <td>28-30″</td>
                                        <td>32-33″</td>
                                        <td>31″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>M</th>
                                        <td>15-15½″</td>
                                        <td>38-40″</td>
                                        <td>32-34″</td>
                                        <td>33-34″</td>
                                        <td>31″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>L</th>
                                        <td>16-16½″</td>
                                        <td>42-44″</td>
                                        <td>36-38″</td>
                                        <td>34-35″</td>
                                        <td>31″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>XL</th>
                                        <td>17-17½″</td>
                                        <td>46-48″</td>
                                        <td>40-42″</td>
                                        <td>35-36″</td>
                                        <td>31″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>2XL</th>
                                        <td>18-18½″</td>
                                        <td>50-52″</td>
                                        <td>44-46″</td>
                                        <td>36-37″</td>
                                        <td>31″</td>
                                    </tr>
                                </tbody>
                            </div>
                        </div>
                        <div className='col-10 col-md-10 col-lg-5 mx-auto'>
                            <div className='table table-bordered table-striped'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Size</th>
                                        <th scope='col'>Neck</th>
                                        <th scope='col'>Chest</th>
                                        <th scope='col'>Waist</th>
                                        <th scope='col'>Sleeve</th>
                                        <th scope='col'>Inseam</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope='row'>LT</th>
                                        <td>16-16½″</td>
                                        <td>42-44″</td>
                                        <td>36-38″</td>
                                        <td>35½-36½″</td>
                                        <td>31″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>XLT</th>
                                        <td>17-17½″</td>
                                        <td>46-48″</td>
                                        <td>40-42″</td>
                                        <td>36½-37½″</td>
                                        <td>31″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>2XT</th>
                                        <td>18-18½″</td>
                                        <td>50-52″</td>
                                        <td>44-46″</td>
                                        <td>37½-38½″</td>
                                        <td>31″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>3XT</th>
                                        <td>19-19½″</td>
                                        <td>54-56″</td>
                                        <td>48-50″</td>
                                        <td>38½-39½″</td>
                                        <td>31″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>4XT</th>
                                        <td>20-21½″</td>
                                        <td>58-60″</td>
                                        <td>53-55″</td>
                                        <td>39½-40″</td>
                                        <td>31″</td>
                                    </tr>
                                </tbody>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-10 mx-auto mb-4'>
                            <h6>Size Instructions:</h6>
                            <ul>
                                <li className='footer-text'>Neck: Measure around the base of your neck, one to two fingers inserted for comfort.</li>
                                <li className='footer-text'>Chest: Measure around the fullest part of your chest, keeping the tape parallel to the floor.</li>
                                <li className='footer-text'>Waist: Bend to the side to find your natural waist. Measure keeping the tape slightly loose.</li>
                                <li className='footer-text'>Sleeve length: Bend your elbow 90 degrees and place your hand on your hip. 
                                    Start at the center back of your neck with a friend's help. Measure across your shoulder to your elbow and down to your wrist. 
                                    Round up to the nearest half inch.</li>
                                <li className='footer-text'>Inseam: Measure a similar garment that fits you well. Lay them flat, with the front and back folded on top of each other. 
                                    Measure the inseam from the crotch to the bottom of the leg hem.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-10 col-md-4 mx-auto text-center'>
                        <h5 className='table-size-title'>Women's size charts <i class="fas fa-female"></i></h5>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-10 col-md-10 col-lg-5 mx-auto'>
                            <div className='table table-bordered table-striped fluid'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Size</th>
                                        <th scope='col'>Bust</th>
                                        <th scope='col'>Waist</th>
                                        <th scope='col'>Hip</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope='row'>XS (0-2)</th>
                                        <td>32-33″</td>
                                        <td>26½-27″</td>
                                        <td>34½-35½″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>S (4-6)</th>
                                        <td>34-35″</td>
                                        <td>27½-28½″</td>
                                        <td>36½-37½″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>M (8-10)</th>
                                        <td>36-37″</td>
                                        <td>29½-30½″</td>
                                        <td>38½-39½″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>L (12-14)</th>
                                        <td>38½-40″</td>
                                        <td>32-33½″</td>
                                        <td>441-42½″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>XL (16-18)</th>
                                        <td>42-43½″</td>
                                        <td>34-36″</td>
                                        <td>44-46″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>XXL (20-22)</th>
                                        <td>45-46½″</td>
                                        <td>38-40″</td>
                                        <td>48-50″</td>
                                    </tr>
                                </tbody>
                            </div>
                        </div>
                        <div className='col-10 col-md-10 col-lg-5 mx-auto'>
                            <div className='table table-bordered table-striped'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Size</th>
                                        <th scope='col'>Bust</th>
                                        <th scope='col'>Waist</th>
                                        <th scope='col'>Hip</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope='row'>0X (12W)</th>
                                        <td>38½-40″</td>
                                        <td>32-33″</td>
                                        <td>41-42½″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>1X (14W-16W)</th>
                                        <td>43-45″</td>
                                        <td>36-38″</td>
                                        <td>46-48″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>2X (18W-20W)</th>
                                        <td>47-49″</td>
                                        <td>40-42″</td>
                                        <td>50-52″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>3X (22W-24W)</th>
                                        <td>50-52”</td>
                                        <td>43-45″</td>
                                        <td>52-54”</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>4X (26W-28W)</th>
                                        <td>54-56″</td>
                                        <td>47-49″</td>
                                        <td>56-58″</td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>5X (30W-32W)</th>
                                        <td>58-60″</td>
                                        <td>51-53″</td>
                                        <td>60-62″</td>
                                    </tr>
                                </tbody>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-10 mx-auto mb-4'>
                            <h6>Size Instructions:</h6>
                            <ul>
                                <li className='footer-text'>Bust: Measure around the fullest part of your chest, keeping the tape parallel to the floor.</li>
                                <li className='footer-text'>Waist: Bend to the side to find your natural waist. Measure keeping the tape slightly loose.</li>
                                <li className='footer-text'>Hips: Measure around fullest part of hips while standing.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <Footer />
            </React.Fragment>
        )
    }
}

export default TableSize;
