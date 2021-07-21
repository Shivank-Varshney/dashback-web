import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const curryear = new Date().getFullYear();

const Footer = () => {
    return(
        <>
            <div className="container-fluid footer">
                <div className="row">
                    <div className="col-12">
                        <div className="social-links">
                            <a href="https://www.facebook.com/DashBackIndia" className="icon fb" target="_blank"><FacebookIcon /></a>
                            <a href="https://www.instagram.com/dashbackindia" className="icon ig" target="_blank"><InstagramIcon /></a>
                            <a href="https://twitter.com/DashBackIndia" className="icon tw" target="_blank"><TwitterIcon /></a>
                        </div>
                        <p>© {curryear} <strong><a href="https://www.hardcipher.io" className="copyright-link">Hardcipher Pvt Ltd</a></strong> | All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;