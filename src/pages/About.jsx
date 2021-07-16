import React from "react";
import Banner from "../assets/About.svg";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row pt-md-0 pt-4 my-5">
            <div className="col-md-5 d-flex justify-content-center align-items-center order-md-2">
              <img src={Banner} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 order-md-1">
              <h2>About Us</h2>
              <p>
                Dashback is a program initiated by HardCipher Private Limited
                Company.The word Dash is derived from _ _ _ _ which denotes
                empty or blank space and the word Back is taken from Cash
                Back.The combined significance of this service is to enable our
                users to collect dashes through active trading and online
                transcations and reddem your dash with real money.
              </p>
              <br />
              <p>
                Dashback is a program initiated by HardCipher Private Limited
                Company.The word Dash is derived from _ _ _ _ which denotes
                empty or blank space and the word Back is taken from Cash
                Back.The combined significance of this service is to enable our
                users to collect dashes through active trading and online
                transcations and reddem your dash with real money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
