import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/banner-1.svg";
import Img2 from "../assets/banner-2.svg";
import Img3 from "../assets/banner-3.svg";
import {NavLink} from "react-router-dom";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        arrows: false,
        autoplay: false,
        className: "slider",
    };

    return(
        <>
            <Slider {...settings}>
                <div className="row">
                    <div className="col-12">
                        <div className="row banner-1">
                            <div className="col-md-6 d-flex banner-1-bg">
                                <img src={Img1} className="img-fluid mx-auto" alt="" />
                            </div>
                            <div className="col-md-6 banner-1-text">
                                <h3>Get upto 100% cash back on all your utility bills</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="row banner-2">
                            <div className="col-md-6 d-flex banner-2-bg">
                                <img src={Img2} className="img-fluid mx-auto" alt="" />
                            </div>
                            <div className="col-md-6 banner-2-text">
                                <h3>Shop on ecommerce brands throgh us and save upto 100% on each transaction</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="row banner-3">
                            <div className="col-md-6 d-flex banner-3-bg">
                                <img src={Img3} className="img-fluid mx-auto" alt="" />
                            </div>
                            <div className="col-md-6 banner-3-text">
                                <h4>dashback presents</h4>
                                <h3>How to Save <br /> while <br /> Spending?</h3>
                                <h5>Fill your DASH with CASH</h5>
                                <NavLink to="/webinar#" className="btn-webinar">live <br /> webinar</NavLink>
                                <p>JUNE 6,2021 <br /> 06:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    );
}


export default Banner;