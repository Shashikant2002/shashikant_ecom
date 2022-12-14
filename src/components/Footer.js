import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="content">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/Assets/images/logo.png"}
                alt="LOGO"
              />
            </Link>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                porro eaque libero tempora molestias amet repudiandae illum
                atque corrupti ut, sunt eveniet, ducimus voluptatibus aut quia
                ex eum. Molestias, aliquid.
              </p>
            </div>
          </div>
          <div className="quickLinks">
            <h3>Quick Links</h3>
            <ul id="menu" className="menu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/product">Products</NavLink>
              </li>
              <li>
                <NavLink to="/category">Categories</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="subscribe">
            <h3>Subscribe for Update</h3>
            <form action="">
                <input type="email" name="e-mail" placeholder="Your E-Mail" />
                <button type="submit" className="globalBtnFill">Subscribe Now</button>
            </form>
          </div>
          <div className="contact">
            <h3>Follow Now</h3>
            <div className="socal">
              <span>
                <a href="/">
                  <BsInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <BsInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <BsInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <BsInstagram />
                </a>
              </span>
            </div>
            <h3>Call Us</h3>
            <div className="call">
              <MdCall /> <h4>9643510696</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
