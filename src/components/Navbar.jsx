import React from "react";
import {NavHashLink} from "react-router-hash-link";
import MenuIcon from '@material-ui/icons/Menu';
import Logo from "../assets/logo.png";

const Navbar = () => {
    return(
        <>
            <div className="container-fluid" id="navbar">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg py-0">
                            <div className="navbar-brand">
                                <NavHashLink to="/">
                                    <img src={Logo} alt="header logo" className="header-logo" />
                                </NavHashLink>
                                <NavHashLink to ="/" className="text-decoration-none">
                                    <p>dashback</p>
                                </NavHashLink>
                            </div>
                            <button className="navbar-toggler p-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <MenuIcon />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <Navmenu linkaddress="/#" linkname="home" />
                                    <Navmenu linkaddress="/about#" linkname="about" />
                                    <Navmenu linkaddress="/services#" linkname="services" />
                                    <Navmenu linkaddress="/contact#" linkname="contact us" />
                                    <Navmenu linkaddress="/downloadapp#" linkname="download app" />
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

const Navmenu = (props) => {
    return(
        <>
            <li className="nav-item active">
                <NavHashLink exact smooth className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" to={props.linkaddress}>{props.linkname}</NavHashLink>
            </li>
        </>
    );
}

export default Navbar;