import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const onScroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.position = "fixed";
  } else {
    document.getElementById("header").style.position = "inherit";
  }
};

window.onscroll = function () {
  onScroll();
};


const Header = () => {

  const openMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('showMenu');
  }
  
  const closeMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.remove('showMenu');
  }
  return (
    <>
      <section id="header" className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/Assets/images/logo.png"}
                alt="LOGO"
              />
            </Link>
          </div>
          <div className="nav">
            <ul id="menu" className="menu">
              <li>
                <NavLink onClick={() => closeMenu()} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink onClick={() => closeMenu()} to="/about">About</NavLink>
              </li>
              <li>
                <NavLink onClick={() => closeMenu()} to="/product">Products</NavLink>
              </li>
              <li>
                <NavLink onClick={() => closeMenu()} to="/contact">Contact</NavLink>
              </li>
            </ul>
            <Link className="globalBtnFill" to="/login">Login</Link>
            <NavLink className="cartHere" to="/cart">
              <span className="after_cart" cart={3}>
                <FaShoppingCart />
              </span>
            </NavLink>
            <div onClick={() => openMenu()} className="mobileMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
