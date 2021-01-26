import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact';
import HeaderMain from '../HeaderMain';
import buyImg from '../../images/icons/service1.png';
import sellImg from '../../images/icons/service2.png';

const Home = () => {
    return (
        <div className="container">
            <HeaderMain />
            <div className="text-center">
                <h2>Our <span style={{ color: '#7AB259' }}>Services</span></h2>
            </div>
            <div class="row d-flex mt-5">
                <div class="col-md-6">
                    <div class="card p-5">
                        <div class="card-body text-center">
                            <img className="service-logo" style={{ height: '50px' }} src={buyImg} alt="" />
                            <h5 class="card-title mt-2">Buy Coin</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link class="btn btn-primary" to={`/buy`}>Proceed </Link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card p-5">
                        <div class="card-body text-center">
                            <img className="service-logo" style={{ height: '50px' }} src={sellImg} alt="" />
                            <h5 class="card-title mt-2">Sell Coin</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link class="btn btn-primary" to={`/sell`}>Proceed </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default Home;