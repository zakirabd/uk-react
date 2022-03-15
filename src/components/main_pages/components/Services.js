import React, { Component } from 'react';
import img1 from '../../../images/logo_1.PNG'
import img2 from '../../../images/logo_2.PNG'
import img3 from '../../../images/logo_3.PNG'
import { Link } from 'react-router-dom';

class Services extends Component {
    render() {
        return (
            <section id='services'>
            <h3 className="section_header">Xidmətlərimiz</h3>
            <div className="container" >
                <div className="grid_container_356">
                    <Link to={'/insurance'}>
                    <div className="card_container_356">
                        <img src={img1} />
                        <div className="card_body">
                            <h3>Siğorta</h3>
                            <p>
                                <b>“Ukrayna Mərkəzi”</b> təhsil və səyahət üçün Ukraynaya üz tutan vətəndaşların…
                            </p>
                        </div>
                    </div>
                    </Link>
                   <Link to={'/tourism'}>
                        <div className="card_container_356">
                            <img className="services_images" id="globus_image" src={img2} />
                            <div className="card_body">
                                <h3>Turizm xidmətləti</h3>
                                <p>
                                <b>“Ukrayna Mərkəzi”</b> təhsil və səyahət üçün Ukraynaya üz tutan vətəndaşların…
                                </p>
                            </div>
                        </div>
                   </Link>
                   <Link to={'/education'}>
                    <div className="card_container_356">
                        <img className="services_images" id="education_image" src={img3} />
                        <div className="card_body">
                            <h3>Təhsil</h3>
                            <p>
                            <b>“Ukrayna Mərkəzi”</b> təhsil və səyahət üçün Ukraynaya üz tutan vətəndaşların…
                            </p>
                        </div>
                    </div>
                   </Link>
                    
                </div>
            </div>
        </section>
        );
    }
}

export default Services;