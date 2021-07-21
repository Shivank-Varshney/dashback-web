import React from "react";
import One from "../assets/D.svg";
import Two from "../assets/A.svg";
import Three from "../assets/S.svg";
import Four from "../assets/H.svg";
import Five from "../assets/B.svg";
import Six from "../assets/A2.svg";
import Seven from "../assets/C.svg";
import Eight from "../assets/K.svg";

const Why = () => {
  return (
    <>
      {CardData.map((val, index) => {
        return (
          <Card
            key={index}
            imgsrc={val.imgsrc}
            capital={val.capital}
            small={val.small}
            desc={val.desc}
          />
        );
      })}
    </>
  );
};

const Card = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 px-4">
        <div className="manual-card mt-4">
          <div className="flip-card">
            <div className="flip-card-front">
              <div className="card-img">
                <img src={props.imgsrc} className="img-fluid" alt="" />
              </div>
              <div className="card-body">
                <h4>
                  <span>{props.capital}</span>
                  {props.small}
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <p>{props.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CardData = [
  {
    imgsrc: One,
    capital: "D",
    small: "edicated Prediction Team",
    desc: "Open a Dashback account and you will be provided with a dedicated and experienced prediction team for easy, secure, and risk-free trading practices.",
  },
  {
    imgsrc: Two,
    capital: "A",
    small: "ll in One Account",
    desc: "Bill Payments, Online Shopping, Gas Booking, Stock Trading, and many more, conveniently manage EVERYTHING from a single Dashback account.",
  },
  {
    imgsrc: Three,
    capital: "S",
    small: "ave 10% Monthly",
    desc: "Receive 10% cashback on every transaction from your Dashback account.",
  },
  {
    imgsrc: Four,
    capital: "H",
    small: "ourly Benifits",
    desc: "Enjoy great hourly benefits and cashbacks, along with extra benefits for our Premium members when you shop with Dashback. ",
  },
  {
    imgsrc: Five,
    capital: "B",
    small: "rokerage Benifits",
    desc: "When you open a Dashback account online, you can buy, sell and manage your stocks, bonds, and even mutual funds with our easy-to-use trading platform.",
  },
  {
    imgsrc: Six,
    capital: "A",
    small: "uthentificated Transparent Platform",
    desc: "Your trust is our priority. Dashbcak brings you the most transparent digital wallet and trading platform.",
  },
  {
    imgsrc: Seven,
    capital: "C",
    small: "ashback",
    desc: "Get guaranteed cashback for all payments through your Dashback account.",
  },
  {
    imgsrc: Eight,
    capital: "K",
    small: "ing of Trading",
    desc: "Manage your trading activities and stocks, enjoy low-risk trading and super-easy-to-use platform which helps you earn more and more every time.",
  },
];

export default Why;
