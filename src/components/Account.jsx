import React from "react";
import One from "../assets/9.png";
import Two from "../assets/10.png";
import Three from "../assets/11.png";
import Four from "../assets/12.png";

const Account = () => {
    return(
        <>
            <Card 
                imgsrc = {One}
                text = "Fill up the registration form and registered with us now."
            />
            <Card 
                imgsrc = {Two}
                text = "Fill up the paperless form and submit for verification."
            />
            <Card 
                imgsrc = {Three}
                text = "All your details are scanned and verified for opening your account."
            />
            <Card 
                imgsrc = {Four}
                text = "Once verified you recive a unique ID, you are ready to trade 'N' earn."
            />
        </>
    );
}

const Card = (props) => {
    return(
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 px-4">
                <div className="card mt-4">
                    <img src={props.imgsrc} alt="" />
                    <h4>{props.text}</h4>
                </div>
            </div>
        </>
    );
}

export default Account;