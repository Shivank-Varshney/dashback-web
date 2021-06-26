import React from "react";
import Phone from "../assets/phone.svg";
import GooglePlay from "../assets/google-play.svg";
import App from "../assets/Dashback.apk";
import Wave from "../assets/download-app-wave.svg";

const DownloadApp = () => {
    return(
        <>
            <section id="download-app">
                <div className="container">
                    <div className="row">
                        <div className="offset-md-1 col-md-5 download-app-text-corner">
                            <h3>Download the APP now</h3>
                            <div className="circle">
                                <a className="dwnld-btn" href={App} file download="download.apk" >Download App</a>
                                <img src={GooglePlay} className="img-fluid" alt="play store" />
                            </div>
                        </div>
                        <div className="col-md-6 d-md-block d-none">
                            <img src={Phone} className="img-fluid vh-100" alt="phone" />
                        </div>
                    </div>
                </div>
                <img src={Wave} className="img-fluid" alt="" />
            </section>
        </>
    );
}

// backend.dashback.in/download/dashback.apk

export default DownloadApp