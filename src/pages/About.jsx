import React from "react";
import Banner from "../assets/About.svg";

const About = ()=>{
    return(
        <>
            <div id="about">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 my-5 pt-4">
                            <img src={Banner} className="img-fluid" alt="" />
                        </div>
                        <div className="col-12">
                            <h2>About Us</h2>
                        </div>
                        <div className="col-12">
                            <p>Dashback is a program initiated by HardCipher Private Limited Company.The word Dash is derived from _ _ _ _ which denotes empty or blank space and the word Back is taken from Cash Back.The combined significance of this service is to enable our users to collect dashes through active trading and online transcations and reddem your dash with real money.</p><br /><br />
                            <p>Dashback is a program initiated by HardCipher Private Limited Company.The word Dash is derived from _ _ _ _ which denotes empty or blank space and the word Back is taken from Cash Back.The combined significance of this service is to enable our users to collect dashes through active trading and online transcations and reddem your dash with real money.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;