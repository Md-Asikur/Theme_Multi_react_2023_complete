import React from "react";
import Common from "./Common";
import "./contact.css";
const Contact = () => {
  return (
    <>
      {" "}
      <div className="contact" id="contact">
        <div className="container">
          <h1 className="h1">
            Contact<span>|Me</span>
          </h1>
          <div className="contact-main">
            <div className="contact-left">
              <img src="/contact.png" alt="Asikur" />
            </div>
            <div className="contact-right">
              <h1>
                <span>Contact</span>| Me
              </h1>
              <form>
                <div>
                  <label for="Name">Email</label>
                  <input type="email" />
                </div>
                <div>
                  <label for="Name">Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label for="Text">Message</label>
                  <textarea rows="5" cols="20"></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Contact;
