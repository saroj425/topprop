import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import Logo from './images/logo.png';

const Header = () => {
    return (
        <div>
           <section>
                <div className="container">
                    <header>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <Link to="/" className="navbar-brand"><img src={Logo} alt="Logo" /></Link>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                        <li class="nav-item">
                                            <select className="header-select" name=""  id="">
                                                <option value="">Select City</option>
                                                <option value="">Noida</option>
                                                <option value="">Delhi</option>
                                                <option value="">Greater Noida</option>
                                                <option value="">Gurugram</option>
                                                <option value="">Ghaziabad</option>
                                                <option value="">Lucknow</option>
                                                <option value="">Faridabad</option>
                                            </select>
                                        </li> 
                                        <li className="nav-item">
                                            <Link to="/machenism" className="nav-link">Machanism</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/properties" className="nav-link" >Properties</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/aboutus" className="nav-link" >About us</Link>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                        <li className="nav-item active">
                                            <Link to="/payrent" className="nav-link" >Pay Rent</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Login" className="nav-link login-btn" >Login</Link>
                                        </li>
                                    </ul>
                                </div>
                        </nav>
                    </header>
                </div>    
           </section>
        </div>
    )
}

export default Header
