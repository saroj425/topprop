import React from 'react';
import './banner.css';
import Bannerimg from './images/banner.jpg'
import Newprop from './images/new.png'
import Resalepro from './images/resale.png'
import Buyprop from './images/buying.png'
import Investprop from './images/property.png'
import Moreprop from './images/more.png'

const Banner = () => {
    return (
        <div>
            <section className="banner">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-md-12 banner-inner">
                            <img className="w-100" src={Bannerimg} alt="Banner" />
                            <div className="banner-content">
                                <h2 className="text-center">India's 1st and Smartest Tech-enabled Web Plateform Exprience Real Estate differently.</h2>
                                <div className="search-box">
                                    <div className="images-btn">
                                        <div className="imgbtndiv1">
                                            <a href="/#"><img src={Newprop} alt="New Properties" /></a>
                                            <p>New Projects</p>
                                        </div>
                                        <div>
                                            <a href="/#"><img src={Resalepro} alt="New Properties" /></a>
                                            <p>Resale Properties</p>
                                        </div>
                                        <div className="imgbtndiv1">
                                            <a href="/#"><img src={Buyprop} alt="New Properties" /></a>
                                            <p>Buying Properties</p>
                                        </div>
                                        <div>
                                            <a href="/#"><img src={Investprop} alt="New Properties" /></a>
                                            <p>Property Investment</p>
                                        </div>
                                        <div className="imgbtndiv1">
                                            <a href="/#"><img src={Moreprop} alt="New Properties" /></a>
                                            <p>More Services</p>
                                        </div>
                                    </div>
                                    <form className="form-div">
                                        <div className="form-group inline-all" >
                                            <select name="location" className="form-control flex1" id="">
                                                <option value="">Noida</option>
                                                <option value="">Greater Noida</option>
                                                <option value="">Gurugram</option>
                                                <option value="">Faridabad</option>
                                            </select>
                                            <input type="text" className="form-control flex3" placeholder="Type Keyword ..." />
                                            <select name="budget" className="form-control flex1"  id="">
                                                <option value="">Budget</option>
                                                <option value="">5 Lacs - 10 Lacs</option>
                                                <option value="">5 Lacs - 10 Lacs</option>
                                                <option value="">5 Lacs - 10 Lacs</option>
                                                <option value="">5 Lacs - 10 Lacs</option>
                                                <option value="">5 Lacs - 10 Lacs</option>
                                                <option value="">5 Lacs - 10 Lacs</option>
                                                <option value="">5 Lacs - 10 Lacs</option>
                                                <option value="">5 Lacs - 10 Lacs</option>
                                                <option value="">5 Lacs - 10 Lacs</option>
                                                <option value="">5 Lacs - 10 Lacs</option>
                                                <option value="">5 Lacs - 10 Lacs</option>
                                                <option value="">5 Lacs - 10 Lacs</option>
                                                <option value="">5 Lacs - 10 Lacs</option>
                                            </select>
                                            <select name="propertytype" className="form-control flex1" id="">
                                                <option value="">Property type</option>
                                                <option value="">Buy</option>
                                                <option value="">Sale</option>
                                                <option value="">Resale</option>
                                            </select>
                                            <button className="btn btn-success btnsearch flex1">Search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </div>
    )
}

export default Banner
