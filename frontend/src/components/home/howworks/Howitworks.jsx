import React from 'react';
import './howworks.css';
import Projpic from "./images/image.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Howitworks = () => {
    var settings = {
        dots: false,
        infinite: true,
        breakpoint: 480,
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: false,
                nextArrow: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: false,
                nextArrow: false,
              }
            }
          ]
      };
    return (
        <div>
            <section className="hwoitworks">
                <div className="container">
                    <div className="container-div">
                    <h2>How it Works?</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12 hwoitworks-inner">
                            <div className="how-div">
                                <div className="how-div-inner"></div>
                            </div>
                            <div className="how-div">
                            <div className="how-div-inner"></div> 
                            </div>
                            <div className="how-div">
                               <div className="how-div-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="allprop">
                <div className="container">
                        <h2>ALL PROPERTIES</h2>
                    <div className="row">
                        <div className="col-md-3 allleft">
                            <div>
                                <h2>Best Sellers in City</h2>
                                <p>Latest Properties screened by team of experts</p>
                                <button className="btn btn-success viewmore">View More</button>
                            </div>
                        </div>
                        <div className="col-md-9 allright">
                            <Slider {...settings}>
                                <div className="card allpropcard">
                                    <img  className="card-image" src={Projpic} alt="all properties" width="100%" />
                                    <div className="allprop-tag">
                                        <p>Top Prop Mart</p>
                                    </div>
                                    <div className="card-body allcardbody">
                                        <p>Smart World Orchid</p>
                                        <small>Sector 61, Noida</small>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>&#8377; 1.5 Cr.- 1.75Cr</p></div>
                                            <div><p>New Launch</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>2 BHK Flats</p></div>
                                            <div><p>1000 Sqft.(Salable)</p></div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <button className="btn btn-default allshortlist"><i class="fa fa-heart"></i> Shortlist</button>
                                            </div>
                                            <div>
                                                <button className="btn btn-success alldetails">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card allpropcard">
                                    <img  className="card-image" src={Projpic} alt="all properties" width="100%" />
                                    <div className="allprop-tag">
                                        <p>Top Prop Mart</p>
                                    </div>
                                    <div className="card-body allcardbody">
                                        <p>Smart World Orchid</p>
                                        <small>Sector 61, Noida</small>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>&#8377; 1.5 Cr.- 1.75Cr</p></div>
                                            <div><p>New Launch</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>2 BHK Flats</p></div>
                                            <div><p>1000 Sqft.(Salable)</p></div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <button className="btn btn-default allshortlist"><i class="fa fa-heart"></i> Shortlist</button>
                                            </div>
                                            <div>
                                                <button className="btn btn-success alldetails">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card allpropcard">
                                    <img  className="card-image" src={Projpic} alt="all properties" width="100%" />
                                    <div className="allprop-tag">
                                        <p>Top Prop Mart</p>
                                    </div>
                                    <div className="card-body allcardbody">
                                        <p>Smart World Orchid</p>
                                        <small>Sector 61, Noida</small>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>&#8377; 1.5 Cr.- 1.75Cr</p></div>
                                            <div><p>New Launch</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>2 BHK Flats</p></div>
                                            <div><p>1000 Sqft.(Salable)</p></div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <button className="btn btn-default allshortlist"><i class="fa fa-heart"></i> Shortlist</button>
                                            </div>
                                            <div>
                                                <button className="btn btn-success alldetails">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card allpropcard">
                                    <img  className="card-image" src={Projpic} alt="all properties" width="100%" />
                                    <div className="allprop-tag">
                                        <p>Top Prop Mart</p>
                                    </div>
                                    <div className="card-body allcardbody">
                                        <p>Smart World Orchid</p>
                                        <small>Sector 61, Noida</small>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>&#8377; 1.5 Cr.- 1.75Cr</p></div>
                                            <div><p>New Launch</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>2 BHK Flats</p></div>
                                            <div><p>1000 Sqft.(Salable)</p></div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <button className="btn btn-default allshortlist"><i class="fa fa-heart"></i> Shortlist</button>
                                            </div>
                                            <div>
                                                <button className="btn btn-success alldetails">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card allpropcard">
                                    <img  className="card-image" src={Projpic} alt="all properties" width="100%" />
                                    <div className="allprop-tag">
                                        <p>Top Prop Mart</p>
                                    </div>
                                    <div className="card-body allcardbody">
                                        <p>Smart World Orchid</p>
                                        <small>Sector 61, Noida</small>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>&#8377; 1.5 Cr.- 1.75Cr</p></div>
                                            <div><p>New Launch</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>2 BHK Flats</p></div>
                                            <div><p>1000 Sqft.(Salable)</p></div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <button className="btn btn-default allshortlist"><i class="fa fa-heart"></i> Shortlist</button>
                                            </div>
                                            <div>
                                                <button className="btn btn-success alldetails">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card allpropcard">
                                    <img  className="card-image" src={Projpic} alt="all properties" width="100%" />
                                    <div className="allprop-tag">
                                        <p>Top Prop Mart</p>
                                    </div>
                                    <div className="card-body allcardbody">
                                        <p>Smart World Orchid</p>
                                        <small>Sector 61, Noida</small>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>&#8377; 1.5 Cr.- 1.75Cr</p></div>
                                            <div><p>New Launch</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>2 BHK Flats</p></div>
                                            <div><p>1000 Sqft.(Salable)</p></div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <button className="btn btn-default allshortlist"><i class="fa fa-heart"></i> Shortlist</button>
                                            </div>
                                            <div>
                                                <button className="btn btn-success alldetails">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card allpropcard">
                                    <img  className="card-image" src={Projpic} alt="all properties" width="100%" />
                                    <div className="allprop-tag">
                                        <p>Top Prop Mart</p>
                                    </div>
                                    <div className="card-body allcardbody">
                                        <p>Smart World Orchid</p>
                                        <small>Sector 61, Noida</small>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>&#8377; 1.5 Cr.- 1.75Cr</p></div>
                                            <div><p>New Launch</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>2 BHK Flats</p></div>
                                            <div><p>1000 Sqft.(Salable)</p></div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <button className="btn btn-default allshortlist"><i class="fa fa-heart"></i> Shortlist</button>
                                            </div>
                                            <div>
                                                <button className="btn btn-success alldetails">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Howitworks
