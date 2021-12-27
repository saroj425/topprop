import React from 'react';
import './location-map.css';

const Locationmap = () => {
    return (
        <div>
            <section className="mapsection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 projdetails">
                            <div className="card">
                                <div className="card-body">
                                    <strong>Sector 150</strong>
                                    <p>Avg Price Rs 6000/sqft.</p>
                                    <span><i className="fa fa-arrow-circle-up"></i>15%<a href="/#">strong In one Year</a></span>
                                </div>
                                <div className="card-footer">
                                    <p>15 Projects</p>
                                    <a href="/#" className="btn">Details</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <strong>Sector 150</strong>
                                    <p>Avg Price Rs 6000/sqft.</p>
                                    <span>15% <a href="/#">strong In one Year</a></span>
                                </div>
                                <div className="card-footer">
                                    <p>15 Projects</p>
                                    <a href="/#" className="btn">Details</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <strong>Sector 150</strong>
                                    <p>Avg Price Rs 6000/sqft.</p>
                                    <span>15% <a>strong In one Year</a></span>
                                </div>
                                <div className="card-footer">
                                    <p>15 Projects</p>
                                    <a href="/#" className="btn">Details</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <strong>Sector 150</strong>
                                    <p>Avg Price Rs 6000/sqft.</p>
                                    <span>15% <a href="/#">strong In one Year</a></span>
                                </div>
                                <div className="card-footer">
                                    <p>15 Projects</p>
                                    <a href="/#" className="btn">Details</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <strong>Sector 150</strong>
                                    <p>Avg Price Rs 6000/sqft.</p>
                                    <span>15% <a>strong In one Year</a></span>
                                </div>
                                <div className="card-footer">
                                    <p>15 Projects</p>
                                    <a href="/#" className="btn">Details</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 mapdiv">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28024.838156878912!2d77.316096!3d28.5966336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1638763778641!5m2!1sen!2sin" className="gmap" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Locationmap
