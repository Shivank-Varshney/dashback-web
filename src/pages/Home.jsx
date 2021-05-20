import React from "react";
import Why from "../components/Why";
import Account from "../components/Account";
import First from "../assets/first.png";
import Second from "../assets/second.png";

const Home = () => {
    return(
        <>
            <section className="container-fluid px-sm-5 my-5" id="home-header">
                <div className="row">
                    <div className="col-md-6 my-auto">
                        <h2>A wagon to financial research and management decisions.</h2>
                        <p>Life changes the moment you take a new and commited decision.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={First} alt="" className="img-fluid" />
                    </div>
                </div>
            </section>


            <section className="container-fluid px-sm-5 my-5" id="home-why">
                <div className="row">
                    <div className="col">
                        <h2>why us ?</h2>
                    </div>
                </div>
                <div className="row">
                    <Why />
                </div>
                <div className="row">
                    <div className="col text-center">
                        <div className="btn btn-know my-5">know more</div>
                    </div>
                </div>
            </section>


            <section className="container-fluid px-sm-5 my-5" id="reward">
                <div className="row">
                    <div className="col-md-6">
                        <img src={Second} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 my-auto">
                        <h2>Win Reward worth Rs 1 Cr.</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </section>


            <section className="container-fluid px-sm-5 my-5" id="home-account">
                <div className="row">
                    <div className="col">
                        <h2>how to open account ?</h2>
                        <p>It's ok please feel free to <br />contact us we'd be happy to help.</p>
                    </div>
                </div>
                <div className="row">
                    <Account />
                </div>
                <div className="row">
                    <div className="col text-center">
                        <div className="btn btn-register my-5">Register Now</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;