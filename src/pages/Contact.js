import React from "react";
import BannerContent from "../components/BannerContent";

const Contact = () => {
  return (
    <>
      <BannerContent title="Contact Us" />
      <div className="map">
        <iframe
          title="Shashikant"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5913674469016!2d77.24974385045905!3d28.73175568229227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfe8fd894ee2d%3A0xce54e82d05580e75!2s4th%20Pusta%2C%20Sonia%20Vihar%2C%20Delhi%2C%20110094!5e0!3m2!1sen!2sin!4v1664567153653!5m2!1sen!2sin"
          width="100%"
          style={{ border: "none" }}
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contactForm">
        <div className="container">
          <h2>Contact From Here</h2>
          <form method="POST" action="">
            <input type="text" placeholder="User Name" name="userName" autoComplete="off" required />
            <input type="email" placeholder="User E-Mail" name="userMail" autoComplete="off" required />
            <textarea name="message" placeholder="Enter Your Message" cols="30" rows="7" autoComplete="off" required></textarea>
            <button className="globalBtnFill" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
