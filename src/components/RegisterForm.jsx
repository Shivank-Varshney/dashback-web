import React, { useState } from "react";
// import Character from "../assets/Character.svg";

const RegisterForm = () => {
    const [data, setData] = useState(
        {
            name : "",
            email : ""
        }
    );

    const InputEvent = (event) => {
        const {name,value} = event.target;

        setData((preVal) =>{
            return{
                   ...preVal,
                   [name] : value
            };
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your message. We will response you asap ${data.name}`)

    }
    return(
        <>
            {/* <div className="d-flex character">
                <img src={Character} className="img-fluid mx-auto" alt="" />
            </div> */}
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label className="sr-only" htmlFor="InputName">Name</label>
                    <input type="text" className="form-control" name="name" value={data.name} placeholder="Enter your name" onChange={InputEvent} id="InputName" />
                </div>
                <div className="form-group">
                    <label className="sr-only" htmlFor="InputEmail">Email address</label>
                    <input type="email" className="form-control" name="email" value={data.emai} placeholder="Enter your email" onChange={InputEvent} id="InputEmail" />
                </div>
                <button type="submit" className="btn btn-register mx-auto">Submit</button>
            </form>
        </>
    )
}

export default RegisterForm;