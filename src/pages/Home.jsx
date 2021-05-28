import React from "react";
// import AssociateCarousel from "../components/AssociateCarousel";
import Why from "../components/Why";
import Banner from "../components/Banner";
import Card from "../assets/card-illustration.svg"
import RewareIllustration from "../assets/reward-illustration.svg";
import UpperTick from "../assets/upper-tick.svg";
import LowerTick from "../assets/lower-tick.svg";

const Home = () => {
    return(
        <>
            {/* Bannet Section */}
            <section className="container-fluid mb-5" id="home-header">
                <Banner />
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
            <section className="container-fluid mb-5 py-5" id="product-section">
                <div className="row">
                    {/* <div className="col-12">
                        <h3 className="py-5">At 19 Million + <br />stores, apps, websites & more</h3>
                    </div>
                    <div className="col-12 d-flex">
                        <div className="associated-btn mx-auto">Associated With ➔</div>
                    </div>
                    <div className="col-12">
                        <AssociateCarousel />
                    </div> */}
                </div>
                <section className="container-fluid my-5" id="home-why">
                    <img src={UpperTick} className="img-fluid" alt="" />
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
                            {/* <div className="btn btn-know my-5">know more</div> */}
                        </div>
                    </div>
                    <img src={LowerTick} className="img-fluid" alt="" />
                </section>
            </section>


            <section className="container-fluid px-sm-5 my-5" id="reward">
                <div className="row">
                    <div className="col-md-6 my-auto">
                        <h2>Win Reward worth Rs 1 Cr.</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                    </div>
                    <div className="col-md-6">
                        <img src={RewareIllustration} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        {/* <div className="btn btn-register my-5">Register Now</div> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;