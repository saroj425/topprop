import React from 'react';
import './trending.css';
import Projpic from "./images/image2.png";
import Tag from "./images/tag.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tpotrending = () => {
    var toptrending = {
        dots: false,
        infinite: true,
        breakpoint: 480,
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
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      };
    return (
        <div>
            <section className="toptrendingsec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 toptrendingtitle">
                            <h2 className="text-center">Top Trending Properties.</h2>
                        </div>
                    </div>
                    <div className="row toptrendingslider">
                        <div className="col-md-12">
                            <Slider {...toptrending}>
                                <div className="card newpropcard">
                                    <div className="card-header">
                                        <p>Top Prop Mart</p>
                                        <span><a href="/#"><i class="fa fa-map-marker" aria-hidden="true"></i> Outer ring road, noida</a></span>
                                        <div className="tag">
                                            <img src={Tag} alt="" />
                                        </div>
                                    </div>
                                    <img  className="card-image" src={Projpic} alt="all properties" width="100%" />
                                    <div className="card-body allcardbody">
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Area</p></div>
                                            <div><p>1000sqft</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Price(sqft)</p></div>
                                            <div><p>Rs.6000</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Yleid</p></div>
                                            <div><p>9.56%</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Return Target</p></div>
                                            <div><p>20%</p></div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div>
                                                <button className="btn btn-success btnviewopp">View Oppertunity</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card newpropcard">
                                    <div className="card-header">
                                        <p>Top Prop Mart</p>
                                        <span><a href="/#"><i class="fa fa-map-marker" aria-hidden="true"></i> Outer ring road, noida</a></span>
                                        <div className="tag">
                                            <img src={Tag} alt="" />
                                        </div>
                                    </div>
                                    <img  className="card-image" src={Projpic} alt="all properties" width="100%" />
                                    <div className="card-body allcardbody">
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Area</p></div>
                                            <div><p>1000sqft</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Price(sqft)</p></div>
                                            <div><p>Rs.6000</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Yleid</p></div>
                                            <div><p>9.56%</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Return Target</p></div>
                                            <div><p>20%</p></div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div>
                                                <button className="btn btn-success btnviewopp">View Oppertunity</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card newpropcard">
                                    <div className="card-header">
                                        <p>Top Prop Mart</p>
                                        <span><a href="/#"><i class="fa fa-map-marker" aria-hidden="true"></i> Outer ring road, noida</a></span>
                                        <div className="tag">
                                            <img src={Tag} alt="" />
                                        </div>
                                    </div>
                                    <img  className="card-image" src={Projpic} alt="all properties" width="100%" />
                                    <div className="card-body allcardbody">
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Area</p></div>
                                            <div><p>1000sqft</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Price(sqft)</p></div>
                                            <div><p>Rs.6000</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Yleid</p></div>
                                            <div><p>9.56%</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Return Target</p></div>
                                            <div><p>20%</p></div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div>
                                                <button className="btn btn-success btnviewopp">View Oppertunity</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card newpropcard">
                                    <div className="card-header">
                                        <p>Top Prop Mart</p>
                                        <span><a href="/#"><i class="fa fa-map-marker" aria-hidden="true"></i> Outer ring road, noida</a></span>
                                        <div className="tag">
                                            <img src={Tag} alt="" />
                                        </div>
                                    </div>
                                    <img  className="card-image" src={Projpic} alt="all properties" width="100%" />
                                    <div className="card-body allcardbody">
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Area</p></div>
                                            <div><p>1000sqft</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Price(sqft)</p></div>
                                            <div><p>Rs.6000</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Yleid</p></div>
                                            <div><p>9.56%</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Return Target</p></div>
                                            <div><p>20%</p></div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div>
                                                <button className="btn btn-success btnviewopp">View Oppertunity</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card newpropcard">
                                    <div className="card-header">
                                        <p>Top Prop Mart</p>
                                        <span><a href="/#"><i class="fa fa-map-marker" aria-hidden="true"></i> Outer ring road, noida</a></span>
                                        <div className="tag">
                                            <img src={Tag} alt="" />
                                        </div>
                                    </div>
                                    <img  className="card-image" src={Projpic} alt="all properties" width="100%" />
                                    <div className="card-body allcardbody">
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Area</p></div>
                                            <div><p>1000sqft</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Price(sqft)</p></div>
                                            <div><p>Rs.6000</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Yleid</p></div>
                                            <div><p>9.56%</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Return Target</p></div>
                                            <div><p>20%</p></div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div>
                                                <button className="btn btn-success btnviewopp">View Oppertunity</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card newpropcard">
                                    <div className="card-header">
                                        <p>Top Prop Mart</p>
                                        <span><a href="/#"><i class="fa fa-map-marker" aria-hidden="true"></i> Outer ring road, noida</a></span>
                                        <div className="tag">
                                            <img src={Tag} alt="" />
                                        </div>
                                    </div>
                                    <img  className="card-image" src={Projpic} alt="all properties" width="100%" />
                                    <div className="card-body allcardbody">
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Area</p></div>
                                            <div><p>1000sqft</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Price(sqft)</p></div>
                                            <div><p>Rs.6000</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Yleid</p></div>
                                            <div><p>9.56%</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Return Target</p></div>
                                            <div><p>20%</p></div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div>
                                                <button className="btn btn-success btnviewopp">View Oppertunity</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card newpropcard">
                                    <div className="card-header">
                                        <p>Top Prop Mart</p>
                                        <span><a href="/#"><i class="fa fa-map-marker" aria-hidden="true"></i> Outer ring road, noida</a></span>
                                        <div className="tag">
                                            <img src={Tag} alt="" />
                                        </div>
                                    </div>
                                    <img  className="card-image" src={Projpic} alt="all properties" width="100%" />
                                    <div className="card-body allcardbody">
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Area</p></div>
                                            <div><p>1000sqft</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Price(sqft)</p></div>
                                            <div><p>Rs.6000</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Yleid</p></div>
                                            <div><p>9.56%</p></div>
                                        </div>
                                        <div className="allprice d-flex justify-content-between">
                                            <div><p>Return Target</p></div>
                                            <div><p>20%</p></div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <div>
                                                <button className="btn btn-success btnviewopp">View Oppertunity</button>
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

export default Tpotrending
