import React from 'react';
import frame from '../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <main style={{height:'500px'}} className="container">
            <div className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Binance Smart Chain To The <br/>Next Level</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn btn-dark">See More</button>
            </div>
            <div className="col-md-7">
                <img src={frame} alt="" className="img-fluid"/>
            </div>
            </div> 
        </main>
    );
};

export default HeaderMain;