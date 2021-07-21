import React from "react";
import Banner from "../assets/About.svg";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const About = () => {
  return (
    <>
      <div id="about" className="py-5 mt-3">
        <div className="container">
          <div className="row pt-md-0 pt-4 my-5">
            <div className="col-12">
              <h2>About Us</h2>
            </div>
            <div className="col-12  d-flex justify-content-center">
              <img
                src={Banner}
                className="img-fluid abt-banner"
                alt="about banner"
              />
            </div>
            <div className="about-text">
              <h5 className="my-4">
                Hi! Welcome to Dashback! We’re glad you’re here.
              </h5>
              <p>
                Dashback is a program initiated by
                <a href="https://hardcipher.io" target="_blank">
                  HardCipher Private Limited Company
                </a>
                . The word ‘Dash’ is derived from ‘_ _ _ _’ which denotes an
                empty or blank space and the word ‘Back’ is taken from
                ‘Cashback’. The combined significance of this service is to
                enable our users to collect dashes through active trading and
                online transactions and redeem their dash with real money. We
                provide cashback on every mobile recharge, bill payment, online
                shopping, and many more.
              </p>
              <div className="separate"></div>
              <h5>Our Story:</h5>
              <p>
                The idea for this program came from just one problem: Unusable
                cashback. <br />
                Most of the cashback offers that we get from various brands
                today are either of no use to most of us or we have to spend
                even more to make use of those offers. Riddled with a million
                terms and conditions, cashback is just another way to bring in
                more money to the brands, and not the customers.
              </p>
              <div className="separate"></div>
              <h5>We wanted to change that:</h5>
              <p>
                That’s when Mr. Anmol, Mr. Anand, and Mr. Narendra came up with
                a solution: <br />
                Why not give the customers real cash as cashback (it is
                literally in the name) that has no extra strings attached to it?
                The plan was simple: To reward our customers with cashback on
                every mobile recharge, DTH recharge, online shopping, and
                everything in-between. The customer gets the cashback directly
                into their bank account and they can spend it anywhere and
                whenever they want just by opening a Dashback account online.
                It’d be way easier than the cashback reward systems we see in
                most brands today. <br />
                And why not make it more convenient for the users and help them
                make even more money by assisting them with their investments?
                There are endless possibilities. <br />
                That was the birth of Dashback, a digital wallet that makes you
                money.
              </p>
              <div className="separate"></div>
              <h5>Our Work:</h5>
              <p>
                Dashback works to give its customers the most unique user
                experience yet. Our never-before-seen cashback reward system is
                what we pride ourselves on. We believe in giving cashback
                rewards to our users on every transaction they make through us.
                From a simple mobile recharge to online shopping, from paying
                your electricity bill to making a Savings Bank Account, we give
                you a platform to do all of that and earn cash back on each and
                every transaction. <br />
                All you need is to open a Dashback account online and you’re set
                to save on anything and everything. All your cashback money goes
                directly to your bank account. How, when or where you spend it…
                don’t know, don’t care. It’s your money, spend it as you wish!
                <br />
                Don’t worry, this is not an “offer” that will end after a few
                weeks. You will receive cashback on all your spendings for as
                long as you live. <br />
                What’s more? Demat accounts! <br />
                You can manage your stocks right here too. With our dedicated
                and experienced prediction team and our secure and easy-to-use
                platform, managing your passive income has never been easier.
                Our experienced prediction team helps you sell and buy stocks
                with low to no risk and in turn, makes your passive income grow
                with time.
              </p>
              <div className="separate"></div>
              <h5>Our Goal:</h5>
              <p>
                Dashback being brand new, our goal is to reach out to as many
                users as possible and give out as much cashback as we can. We
                aim to give our users cashback on every mobile recharge, all
                bill payments, gas booking, savings account, and every online
                payment possible. <br />
                We are already tied up with many brands, but we want to be
                associated with even more brands for our customers to have all
                the options in the world when they shop through us.
              </p>
              <div className="separate"></div>
              <h5>Our Socials:</h5>
              <p>
                Have any questions? You can reach out to us through our website
                or visit us on all social media platforms. We’d be more than
                happy to talk to you anytime. <br />
                <a
                  href="https://www.facebook.com/DashBackIndia"
                  className="mr-2"
                  target="_blank"
                >
                  <FacebookIcon /> DashbackIndia
                </a>
                <a
                  href="https://www.instagram.com/dashbackindia"
                  className="ml-2"
                  target="_blank"
                >
                  <InstagramIcon /> DashbackIndia
                </a>
                <br /> Dashback aims to give you a convenient and rewarding
                platform for all your online spendings and we hope you join us
                in our journey to give online shopping a whole new image. So
                what are you waiting for?
                <br />
                Open Dashback account online today and enjoy several benefits
                and cashbacks! <br />
                And that’s about it. Thank you for being a part of Dashback.
                <br />
                <strong>Happy shopping and happy earning!</strong>
              </p>
              <div className="separate"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
