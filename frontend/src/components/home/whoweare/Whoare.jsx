import React from 'react';
import './whoweare.css';
import Backgroundimg from './images/banner3.jpg'

function Whoare() {
    return (
        <div>
            <section className="whoweare">
                <img src={Backgroundimg} alt="" />
                <div className="container whowearecontent">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>who we are</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <a href="/#" className="btnviewmore">View More</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Whoare
