import React from "react";
import One from "../assets/1.png";
import Two from "../assets/2.png";
import Three from "../assets/3.png";
import Four from "../assets/4.png";
import Five from "../assets/5.png";
import Six from "../assets/6.png";
import Seven from "../assets/7.png";
import Eight from "../assets/8.png";

const Why = () => {
    return(
        <>
            <Card 
                imgsrc = {One}
                capital = "D"
                small = "edicated Prediction Team"
            />
            <Card 
                imgsrc = {Two}
                capital = "A"
                small = "ll in One Account"
            />
            <Card 
                imgsrc = {Three}
                capital = "S"
                small = "ave 10% Monthly"
            />
            <Card 
                imgsrc = {Four}
                capital = "H"
                small = "ourly Benifits"
            />
            <Card 
                imgsrc = {Five}
                capital = "B"
                small = "rokerage Benifits"
            />
            <Card 
                imgsrc = {Six}
                capital = "A"
                small = "uthentificated Transparent Platform"
            />
            <Card 
                imgsrc = {Seven}
                capital = "C"
                small = "ashback"
            />
            <Card 
                imgsrc = {Eight}
                capital = "K"
                small = "ing of Trading"
            />
        </>
    );
}

const Card = (props) => {
    return(
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 px-4">
                <div className="card mt-4">
                    <img src={props.imgsrc} className="img-fluid" alt="" />
                    <h4><span>{props.capital}</span>{props.small}</h4>
                </div>
            </div>
        </>
    );
}

export default Why;