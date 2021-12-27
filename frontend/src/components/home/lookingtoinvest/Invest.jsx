import React from 'react';
import './invest.css';
import image1 from './images/assets.png';
import Highest from './images/highest.png';
import Most from './images/most.png';
import Recent from './images/recent.png';

const Invest = () => {
    return (
        <div className="post-relative">
            <section className="lookingtoinvest">
                <div className="container">
                    <div className="row investment">
                        <div className="col-md-12 d-flex flex-wrap align-items-center">
                            <img src={image1} alt=" investment" width="100" />
                            <div>
                                <h2>Are you looking to invest?</h2>
                                <p>Explore Project option to invest.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="investmost-div">
                <div className="container investmost">
                    <div className="row">
                        <div className="col-md-4 d-flex flex-wrap align-items-center">
                            <img src={Most} alt="Most" />
                            <div>
                                <h4>Most Appropriate Projects</h4>
                                <p>Upto 17% YOY price growth.</p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex flex-wrap align-items-center">
                            <img src={Recent} alt="Recent" />
                            <div>
                                <h4>Recent Price drop</h4>
                                <p>Upto 17% YOY price growth.</p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex flex-wrap align-items-center">
                            <img src={Highest} alt="Highest" />
                            <div>
                                <h4>Heighest rental income.</h4>
                                <p>Upto 17% YOY price growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </div>
    )
}

export default Invest
