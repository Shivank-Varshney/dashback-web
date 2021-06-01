import React from "react";
import {NavLink} from "react-router-dom";
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
                                <img src={Logo} alt="header logo" className="header-logo" />
                                <p>dashback</p>
                            </div>
                            <button className="navbar-toggler p-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <MenuIcon />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <Navmenu linkaddress="/#" linkname="home" />
                                    <Navmenu linkaddress="/web" linkname="about" />
                                    <Navmenu linkaddress="/web" linkname="services" />
                                    <Navmenu linkaddress="/web" linkname="contact us" />
                                    <Navmenu linkaddress="/downloadapp" linkname="download app" />
                                    <Navmenu linkaddress="/webinar#" linkname="login/register" />
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
                <NavLink exact activeClassName="active-nav" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" to={props.linkaddress}>{props.linkname}</NavLink>
            </li>
        </>
    );
}

export default Navbar;