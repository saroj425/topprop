import React from 'react';
import './newsupdate.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imag1 from './images/banner5.jpg';
import Imag2 from './images/banner6.jpg';
import Imag3 from './images/banner7.jpg';
import Imag4 from './images/banner8.jpg';

const Newsupdate = () => {
    var testinomial = {
        dots: false,
        infinite: true,
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
          ]
      };

        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return (
        <div>
            <section className="blognews">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center blogheading">News & Updates</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Slider {...testinomial}>
                                <div className="blogcard">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={Imag3} width="100%" alt="" />
                                        </div>
                                        <div className="card-body">
                                            <strong>{date}</strong>
                                            <h4>What is Lorem Ipsum?</h4>
                                            <div className="blogdesc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                            <div className="text-right">
                                                <a href="/#" className="text-right">Read Article</a>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="blogcard">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={Imag4}width="100%"  alt="" />
                                        </div>
                                        <div className="card-body">
                                            <strong>{date}</strong>
                                            <h4>What is Lorem Ipsum?</h4>
                                            <div className="blogdesc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                            <div className="text-right">
                                                <a href="/#" className="text-right">Read Article</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blogcard">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={Imag1} width="100%" alt="" />
                                        </div>
                                        <div className="card-body">
                                            <strong>{date}</strong>
                                            <h4>What is Lorem Ipsum?</h4>
                                            <div className="blogdesc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                            <div className="text-right">
                                                <a href="/#" className="text-right">Read Article</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blogcard">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={Imag2} width="100%" alt="" />
                                        </div>
                                        <div className="card-body">
                                            <strong>{date}</strong>
                                            <h4>What is Lorem Ipsum?</h4>
                                            <div className="blogdesc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                            <div className="text-right">
                                                <a href="/#" className="text-right">Read Article</a>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="blogcard">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={Imag3} width="100%" alt="" />
                                        </div>
                                        <div className="card-body">
                                            <strong>{date}</strong>
                                            <h4>What is Lorem Ipsum?</h4>
                                            <div className="blogdesc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                            <div className="text-right">
                                                <a href="/#" className="text-right">Read Article</a>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                                <div className="blogcard">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={Imag4} width="100%" alt="" />
                                        </div>
                                        <div className="card-body">
                                            <strong>{date}</strong>
                                            <h4>What is Lorem Ipsum?</h4>
                                            <div className="blogdesc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                            <div className="text-right">
                                                <a href="/#" className="text-right">Read Article</a>
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

export default Newsupdate
