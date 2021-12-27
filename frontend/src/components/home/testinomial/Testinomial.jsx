import React from 'react';
import './testinomial.css';
import video from './images/sample.mp4'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testinomial = () => {
    var testinomial = {
        dots: false,
        infinite: true,
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
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      };
    return (
        <div>
            <section className="testinomial">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center testinomialheading"> Testinomial</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="col-md-12">
                                <Slider {...testinomial}>
                                    <div className="topcityslider">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="newvideo">
                                                    <video width="100%" height="100%" preload="true" autoPlay >
                                                        <source src={video} width="100%" height="100%" type="video/mp4"/>
                                                    </video>
                                                </div>
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
                                                <div className="newvideo">
                                                    <video width="100%" preload="true" autoPlay >
                                                        <source src={video} width="100%" height="100%" type="video/mp4"/>
                                                    </video>
                                                </div>
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
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testinomial
