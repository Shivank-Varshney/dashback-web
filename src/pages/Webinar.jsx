import React from "react";
import Rocket from "../assets/rocket.svg"
import Wave from "../assets/wave.svg";
import Register from "../assets/register.svg"
import Timer from "../components/Timer";

const Webinar = () => {
    return(
        <>
            <section className="container-fluid pt-md-5" id="third-section">
                <div className="row py-5 px-md-5 px-3">
                    <div className="col-md-6 third-section-img">
                        <img src={Rocket} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center flex-column">
                        <h2>sikho, sikhao or kamao</h2>
                        <h3>We are getting <span>Ready !</span> </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-0">
                        <img src={Wave} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 registration-section">
                        <h4>To register the webinar <br />please fill the details</h4>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <img src={Register} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Webinar;