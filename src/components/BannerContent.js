import React from "react";
import { Link } from "react-router-dom";

const BannerContent = ({ title }) => {
  return (
    <>
      <div className="banner_content">
        <div className="container">
          <div className="content">
            <h3>Welcome to Our</h3>
            <h1>{title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              culpa, optio nihil quisquam, quo ab similique numquam, nobis porro
              omnis sit error aliquam totam vel! Nobis incidunt autem laudantium
              minima.
            </p>
            <Link to="/product" className="shopnow globalBtnFill">
              Shop Now
            </Link>
          </div>
          <div className="image">
            <img
              src={`${process.env.PUBLIC_URL}/Assets/images/banner.jpg`}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerContent;
