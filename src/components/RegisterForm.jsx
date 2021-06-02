import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BASE_URL } from "../config/Env";

const RegisterForm = () => {
    const [data, setData] = useState(
        {
            name: "",
            email: ""
        }
    );

    const [isLoading, setisLoading] = useState(false);

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            };
        })
    }

    const RegisterWebinar = async (fdata) => {
        try {
            const { data } = await axios.post(`${BASE_URL}/api/registerwebinar`, fdata);
            toast.success(data.message)
            setisLoading(false);
        } catch (error) {
            setisLoading(false);
            // console.log(error.response.data.message);
            toast.error(error.response.data.message)
        }
    }
    
    const formSubmit = (e) => {
        e.preventDefault();
        setisLoading(true)
        if (data.name && data.email) {
            RegisterWebinar(data);
        } else {
            setisLoading(false);
            toast.error("All Field requitred")
        }
    }
    return (
        <>
            <form onSubmit={formSubmit}>
                <ToastContainer />

                {
                    isLoading ? (<Loader
                        type="Bars"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        className="text-center"
                        timeout={300000} //3 secs
                    />) : (
                        <>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="InputName">Name</label>
                                <input type="text" className="form-control" name="name" value={data.name} placeholder="Enter your name" onChange={InputEvent} id="InputName" />
                            </div>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="InputEmail">Email address</label>
                                <input type="email" className="form-control" name="email" value={data.emai} placeholder="Enter your email" onChange={InputEvent} id="InputEmail" />
                            </div>
                            <button type="submit" className="btn btn-register mx-auto">Submit</button>
                        </>
                    )
                }
           
            </form>
        </>
    )
}

export default RegisterForm;