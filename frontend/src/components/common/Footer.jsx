import React from 'react';
import './footer.css';
import facbook from './images/fac.png';
import twitter from './images/twi.png';
import instagram from './images/in.png';
import youtube from './images/you.png';
import toparrow from './images/topparrow.jpg';
import cloud from './images/map.png';

const Footer = () => {
    return (
        <div>
            <section className="footersec">
                <footer>
                    <div className="container footer-img">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <img src={cloud} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <h4>Company</h4>
                                <ul>
                                    <li><a href="/#">About Us</a></li>
                                    <li><a href="/#">About Us</a></li>
                                    <li><a href="/#">About Us</a></li>
                                    <li><a href="/#">About Us</a></li>
                                    <li><a href="/#">About Us</a></li>
                                    <li><a href="/#">About Us</a></li>
                                    <li><a href="/#">About Us</a></li>
                                    <li><a href="/#">About Us</a></li>
                                    <li><a href="/#">About Us</a></li>
                                    <li><a href="/#">About Us</a></li>
                                    <li><a href="/#">About Us</a></li>
                                    <li><a href="/#">About Us</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h4>Properties</h4>
                                <ul>
                                    <li><a href="/#">Pre Leased</a></li>
                                    <li><a href="/#">Pre Leased</a></li>
                                    <li><a href="/#">Pre Leased</a></li>
                                    <li><a href="/#">Pre Leased</a></li>
                                    <li><a href="/#">Pre Leased</a></li>
                                    <li><a href="/#">Pre Leased</a></li>
                                    <li><a href="/#">Pre Leased</a></li>
                                    <li><a href="/#">Pre Leased</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h4>Featured Projects</h4>
                                <ul>
                                    <li><a href="/#">Tata Eureka Park</a></li>
                                    <li><a href="/#">Tata Eureka Park</a></li>
                                    <li><a href="/#">Tata Eureka Park</a></li>
                                    <li><a href="/#">Tata Eureka Park</a></li>
                                    <li><a href="/#">Tata Eureka Park</a></li>
                                    <li><a href="/#">Tata Eureka Park</a></li>
                                </ul>
                                <h4>Supporting Center</h4>
                                <ul>
                                    <li><a href="/#">+91 9999999999</a></li>
                                    <li><a href="/#">info@toppropmart.com</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h4>Newsletter</h4>
                                <div className="form-group">
                                    <form class="form-inline">
                                        <div class="form-group mx-sm-3 mb-2">
                                            <img src={toparrow} className="form-control" alt="" />
                                            <input type="text" class="form-control" id="email" placeholder="Email"/>
                                            <button type="submit" class=" btn btn-primary mb-2">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <h4>Keep In Touch</h4>
                                <div className="social">
                                    <ul>
                                        <li><a href="/#"><img src={facbook} alt="" /></a></li>
                                        <li><a href="/#"><img src={twitter} alt="" /></a></li>
                                        <li><a href="/#"><img src={instagram} alt="" /></a></li>
                                        <li><a href="/#"><img src={youtube} alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid bottom-footer">
                        <div className="row">
                            <div className="col-md-12"></div>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Footer
