import React from 'react';
import './topcity.css';
import Slider from "react-slick";
import DelhiImage from './images/delhi.png';
import MumbaiImage from './images/mumbai.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Topcity = () => {
    var topcity = {
        dots: false,
        infinite: true,
        breakpoint: 480,
        speed: 500,
        slidesToShow: 2,
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
            
          ]
      };
    return (
        <div>
            <section className="topcitysec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 topcitytitle">
                            <h2 className="text-center">Find your dream property in your prefered city.</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Slider {...topcity}>
                                <div className="topcityslider">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={DelhiImage} alt="" width="100%"/>
                                        </div>
                                        <div className="col-md-8 citydetails">
                                            <h4>Delhi</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="topcityslider">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={MumbaiImage} alt="" width="100%" />
                                        </div>
                                        <div className="col-md-8 citydetails">
                                            <h4>Delhi</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="topcityslider">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={MumbaiImage} alt="" width="100%" />
                                        </div>
                                        <div className="col-md-8 citydetails">
                                            <h4>Delhi</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <a href="/#" className="btn btnshowmore">Show More</a>
                        </div>
                    </div>
                </div>
            </section>  
        </div>
    )
}

export default Topcity
