import React from "react";
import Rocket from "../assets/rocket.svg"
import Wave from "../assets/wave.svg";
// import Register from "../assets/register.png";
import Timer from "../components/Timer";
import RegisterForm from "../components/RegisterForm";

const Webinar = () => {
    return(
        <>
            <section className="container-fluid pt-md-5" id="webinar-section">
                <div className="row py-5 px-md-5 px-3">
                    <div className="col-md-6 webinar-section-img">
                        <img src={Rocket} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center flex-column">
                        <h2>How to save while spending ?</h2>
                        <h3>Webinar in</h3>
                        <Timer />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-0">
                        <img src={Wave} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="row mt-n2">
                    <div className="col-12 registration-section d-flex flex-column">
                        <h4>To register the webinar <br />please fill the details</h4>
                        {/* <img src={Register} className="img-fluid mx-auto" alt="" /> */}
                        <div className="row">
                            <div className="col-md-6 col-sm-8 mx-auto my-5">
                                <RegisterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Webinar;