import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div class="row d-flex">
                <div class="col-md-6">
                    <div class="card p-5">
                        <div class="card-body text-center">
                            <h5 class="card-title">Buy Coin</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>                          
                            <Link class="btn btn-primary" to={`/buy`}>Proceed </Link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card p-5">
                        <div class="card-body text-center">
                            <h5 class="card-title">Sell Coin</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link class="btn btn-primary" to={`/sell`}>Proceed </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;