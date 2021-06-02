import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState(
        {
            fullname : "",
            phone : "",
            email : "",
            subject : "",
            message : ""
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
        alert(`Thank you for your message. We will response you asap ${data.fullname}`)

    }


    return(
        <>
            <div className="container py-5" id="contact-us">
                <div className="row">
                    <div className="col user-select-none">
                        <h1 className="headline text-center py-5">Contact Us</h1>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div class="form-group">
                                    <label for="InputName">Name<span>*</span></label>
                                    <input type="text" class="form-control" id="InputName" name="fullname" value={data.name} onChange={InputEvent} required placeholder="Enter your name" />
                                </div>
                                <div class="form-group">
                                    <label for="InputNumber">Phone No.<span>*</span></label>
                                    <input type="text" class="form-control" id="InputNumber" name="phone" value={data.phone} onChange={InputEvent} required placeholder="Enter your number" />
                                </div>
                                <div class="form-group">
                                    <label for="InputEmail">Email<span>*</span></label>
                                    <input type="email" class="form-control" id="InputEmail" name="email" value={data.email} onChange={InputEvent} required placeholder="Enter your email" />
                                </div>
                                <div class="form-group">
                                    <label for="InputSubject">Subject<span>*</span></label>
                                    <input type="text" class="form-control" id="InputSubject" name="subject" value={data.subject} onChange={InputEvent} required placeholder="Enter your subject" />
                                </div>
                                <div class="form-group">
                                    <label for="InputMessage">Message<span>*</span></label>
                                    <textarea class="form-control" id="InputMessage" rows="3"  name="message" value={data.message} onChange={InputEvent} required placeholder="Enter your message..."></textarea>
                                </div>
                                <button type="submit" class="btn-get-started">Submit</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;