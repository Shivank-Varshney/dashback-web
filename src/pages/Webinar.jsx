import React from "react";
import RegisterForm from "../components/RegisterForm";

const Webinar = () => {
    return(
        <>
            <section className="container-fluid pt-md-5" id="webinar">
                <div className="row py-5 px-md-5 px-3">
                    <div className="col-lg-6 mx-auto d-flex justify-content-center flex-column">
                        <h2>How to save while spending ?</h2>
                        <h3>Get registered for APP</h3>
                    </div>
                    <div className="col-lg-6 col-md-10 mx-auto my-5 registration-section">
                        <h4>To register the webinar <br />please fill the details</h4>
                        <RegisterForm />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Webinar;