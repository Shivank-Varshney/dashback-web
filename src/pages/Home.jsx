import React from "react";
import Why from "../components/Why";
import Account from "../components/Account";
import Banner1 from "../assets/banner-1.svg";
import Card from "../assets/card-illustration.svg"
import Second from "../assets/second.svg";

const Home = () => {
    return(
        <>
            {/* Bannet Section */}
            <section className="container-fluid mb-5" id="home-header">
                <div className="row">
                    <div className="col-md-6 banner-1">
                        <img src={Banner1} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 banner-text">
                        <h1>heading</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt tenetur unde asperiores pariatur! Iste accusamus molestias repellat iusto, numquam officiis incidunt necessitatibus debitis nulla earum cupiditate asperiores.</p>
                        <div className="get-app-btn">get app</div>
                    </div>
                </div>
            </section>


            {/* Second Section */}
            <section className="container-fluid mb-5" id="second-section">
                <div className="row">
                    <div className="col-md-7 order-md-1 order-2 second-section-text">
                        <div>
                        <h2>A wagon to financial research and management decisions.</h2>
                        <p>Life changes the moment you take a new and commited decision.</p>
                        </div>
                        <div className="card">
                            <div className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores dicta nostrum unde nulla. Earum fugit placeat atque aspernatur, enim natus incidunt.</div>
                            <div className="read-more-btn">Read more</div>
                        </div>
                    </div>
                    <div className="col-md-5 order-md-2 order-1 second-section-img">
                        <img src={Card} alt="" className="img-fluid" />
                    </div>
                </div>
            </section>


            {/* Product Section */}
            <section className="container-fluid mb-5 py-5 px-md-5 px-3" id="product-section">
                <div className="row">
                    <div className="col-12">
                        <h3 className="py-5">At 19 Million + <br />stores, apps, websites & more</h3>
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