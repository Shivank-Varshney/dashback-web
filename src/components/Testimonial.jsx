import React from "react";
import Button from "@material-ui/core/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/profile.svg";
import Img2 from "../assets/premium-profile.svg";
import { NavHashLink } from "react-router-hash-link";

function Testimonial() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    className: "slider",
    responsive: [
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <>
      <section id="testimonial">
        <div className="container">
          <div className="row p-1">
            <div className="col-md-4">
              <h3>Testimonials</h3>
              <h4>Hundereds of Happy Clients</h4>
              <p>
                We, in Dashback, believe in rewarding our customers every chance
                we get. Your happiness is our priority and we like to keep you
                satisfied and smiling with our services. We always love it when
                our customers come to us with praising comments, it fills us
                with joy and enthusiasm to be even better for you. Here is what
                some of the Dashback users had to say about their experience
                with us:
              </p>
              <NavHashLink to="/contact#">
                <Button className="btn">Want to become our client?</Button>
              </NavHashLink>
            </div>
            <div className="col-md-8">
              <Slider {...settings}>
                {TestData.map((val, index) => {
                  return (
                    <TestCard
                      key={index}
                      imgsrc={val.imgsrc}
                      name={val.name}
                      desc={val.desc}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const TestCard = (props) => {
  return (
    <>
      <div className="testi mt-md-4 mt-5">
        <div className="testi-card mx-2">
          <img src={props.imgsrc} alt="user profile" />
          <div className="name">{props.name}</div>
          <div className="desc">{props.desc}</div>
        </div>
      </div>
    </>
  );
};

const TestData = [
  {
    imgsrc: Img1,
    name: "Shivank Varshney",
    desc: "I was tired of companies sending me cashback that I would never be able to use. Searching for a better alternative, I came across Dashback and I wasn’t disappointed. Not only do I get cash back on every single transaction, but I can actually use those cashbacks without spending any more money. Thank you, Dashback!",
  },
  {
    imgsrc: Img2,
    name: "Tarun Aggarwal",
    desc: "I don’t have a huge experience in stock trading and I was looking for a safe platform where I can continue my tradings as a beginner. Dashback gave me a safe and easy way to manage my stocks and the prediction team helped me make better and low-risk decisions. Along with that, I even saved so much money by transactions as simple as mobile recharge online! I will recommend Dashback to everyone I know.",
  },
  {
    imgsrc: Img1,
    name: "Akhshat Aggarwal",
    desc: "When a friend told me about Dashback and their cashback reward system, I didn’t believe her. Cashback on mobile recharge, online shopping, even gas booking? It sounded too good to be true. But to my surprise, Dashback does exactly that. I’ve already saved so much just by using Dashback rather than any other digital wallet. It's safe, convenient and so rewarding. ",
  },
  {
    imgsrc: Img2,
    name: "Sagar Dhama",
    desc: "Dashback is an awesome app to manage all my online payment needs and even online shopping, which you don’t get in most digital wallets out there. Along with cashback on all possible transactions, I got to open a Savings Account, and to my surprise, I got cashback on that too. This is truly the best digital wallet out there.",
  },
];

export default Testimonial;
