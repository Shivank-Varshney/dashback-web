import React from "react";
import Timer from "../components/Timer";
import Hourglass from "../assets/Hourglass.svg";
import Phone from "../assets/phone.svg";
import Wave from "../assets/download-app-wave.svg";

const DownloadApp = () => {
    return(
        <>
            <section id="download-app">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 download-app-text-corner">
                            <h3>Get the FREE App</h3>
                            <img src={Hourglass} className="img-fluid Hourglass" alt="Hourglass" />
                            <Timer />
                        </div>
                        <div className="col-md-7 d-md-block d-none">
                            <img src={Phone} className="img-fluid  d-flex justify-content-center vh-100" alt="phone" />
                        </div>
                    </div>
                </div>
                <img src={Wave} className="img-fluid" alt="" />
            </section>
        </>
    );
}

export default DownloadApp