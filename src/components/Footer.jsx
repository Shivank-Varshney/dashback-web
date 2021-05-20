import React from "react";

const curryear = new Date().getFullYear();

const Footer = () => {
    return(
        <>
            <div className="container-fluid copyright">
                <div className="row">
                    <div className="col">
                        <p>© {curryear} <strong><a href="https://www.hardcipher.io" className="copyright-link">Hardcipher Pvt Ltd</a></strong> | All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;