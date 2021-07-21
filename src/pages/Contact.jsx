import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <section id="contact-page" className="">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>
                Have any questions for us? Write to us and we’ll get back to you
                as soon as possible. You can also contact us through all social
                media platforms. We’re always ready to assist our customers and
                we’re up for a chat 24*7.
              </h3>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
