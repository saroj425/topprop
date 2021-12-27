import React,{useState} from 'react';
import topimg from './images/bannerlogin.png';
import googleimg from './images/googleimg.png';
import facebookimg from './images/facebookimg.png'
import {Link} from 'react-router-dom';



const Regisercopm = () => {
    const [loginotp, setloginotp ] = useState(false);
    const handleClick = ()=>{
        setloginotp(!loginotp);
    }
    return (
        <div>
            <section className="curv-sec">
                <img src={topimg} alt="" />
                <div class="row login-sec">
                    <div class="col-md-6 left">
                        <div class="top-text">
                            <h4>Take control of the service experience during your property search & ownership journey.</h4>
                            <p>Provide more information about your property needs</p>
                            <p>Shortlist more property for site visits & evaluation</p>
                            <p>Rate your experience with us and give a feedback</p>
                            <p>View assigened sales expert's profile & request for change if required</p>
                            <p>Manage your meetings/sitevisits schedule</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="login-div">
                            <div className="text-right">
                                <img src="/public/assets/img/output-onlinepngtools.png" width="50%" alt="" />
                            </div>
                            <div style={{borderRadius:50}}>
                                <div className="inner-login-div">
                                    <form action="" method="post">
                                        <h2 className="text-center">USER REGISTER</h2>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-3 col-sm-3 col-xs-3">
                                                    <select name="countrycode" id="" className="form-control">
                                                        <option value="">+91</option>
                                                        <option value="">+86</option>
                                                        <option value="">+33</option>
                                                        <option value="">+49</option>
                                                        <option value="">+81</option>
                                                        <option value="">+89</option>
                                                        <option value="">+971</option>
                                                        <option value="">+44</option>
                                                        <option value="">+1</option>
                                                        <option value="">+94</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-9 col-sm-9 col-xs-9">
                                                    <input type="text" name="mobileno" className="form-control" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group d-none">
                                            <div className="row otp-div ">
                                                <div className="col-md-3">
                                                    <input type="text" className="form-control otp" minlength="1" maxlength="1" placeholder="" />
                                                </div>
                                                <div className="col-md-3">
                                                    <input type="text" className="form-control otp" minlength="1" maxlength="1" placeholder=""/>
                                                </div>
                                                <div className="col-md-3">
                                                    <input type="text" className="form-control otp" minlength="1" maxlength="1" placeholder=""/>
                                                </div>
                                                <div className="col-md-3">
                                                    <input type="text" className="form-control otp" minlength="1" maxlength="1" placeholder=""/>
                                                </div>
                                            </div>
                                            <p className="text-center ">Validate otp</p>
                                        </div> 
                                        <h2 className="text-center">OR</h2>
                                        <div className="social-login">
                                            <button><img src={googleimg} width="40px" alt="" /></button>
                                            <button><img src={facebookimg} width="40px" alt="" /></button>
                                        </div>
                                        <div className="spanddiv">
                                            <span>Already have an Account yet? <Link to="/login">Login Here.</Link></span>
                                        </div>
                                        <div className="buttondiv">
                                            <button type="submit" className="form-control" onClick={handleClick}>Proceed to Register</button>
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

export default Regisercopm
