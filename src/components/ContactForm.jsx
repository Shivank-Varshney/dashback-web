import React, { useState } from "react";
import Button from "@material-ui/core/Button";

function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you for your message. We will response you asap ${data.name}`
    );
  };
  return (
    <>
      <section id="contact-form" className="pb-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h3>Contact Us</h3>
            </div>
          </div>
          <form onSubmit={formSubmit} className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="InputName">
                  Name<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputName"
                  name="name"
                  required
                  value={data.name}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="InputEmail">
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  name="email"
                  required
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="InputSubject">
                  Subject<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputSubject"
                  name="subject"
                  required
                  value={data.subject}
                  onChange={InputEvent}
                  placeholder="Enter your subject"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="InputMessage">
                  Message<span>*</span>
                </label>
                <textarea
                  className="form-control"
                  id="InputMessage"
                  rows="5"
                  name="message"
                  required
                  value={data.message}
                  onChange={InputEvent}
                  placeholder="Enter your message..."
                ></textarea>
              </div>
            </div>
            <div className="col-12">
              <Button type="submit" className="btn">Submit</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
