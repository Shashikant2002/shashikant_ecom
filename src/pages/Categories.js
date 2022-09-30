import React from "react";
import BannerContent from "../components/BannerContent";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <BannerContent title="Categories" />
      <div className="allCategory">
        <div className="container">
          <Link to="/">
            <div className="prod_card">
              <div className="img">
                <img
                  src="https://m.media-amazon.com/images/I/81BxHYjeA2L._SX679_.jpg"
                  alt=""
                />
              </div>
              <h3>Hello This is Category</h3>
            </div>
          </Link>
          <Link to="/">
            <div className="prod_card">
              <div className="img">
                <img
                  src="https://m.media-amazon.com/images/I/81BxHYjeA2L._SX679_.jpg"
                  alt=""
                />
              </div>
              <h3>Hello This is Category</h3>
            </div>
          </Link>
          <Link to="/">
            <div className="prod_card">
              <div className="img">
                <img
                  src="https://m.media-amazon.com/images/I/81BxHYjeA2L._SX679_.jpg"
                  alt=""
                />
              </div>
              <h3>Hello This is Category</h3>
            </div>
          </Link>
          <Link to="/">
            <div className="prod_card">
              <div className="img">
                <img
                  src="https://m.media-amazon.com/images/I/81BxHYjeA2L._SX679_.jpg"
                  alt=""
                />
              </div>
              <h3>Hello This is Category</h3>
            </div>
          </Link>
          <Link to="/">
            <div className="prod_card">
              <div className="img">
                <img
                  src="https://m.media-amazon.com/images/I/81BxHYjeA2L._SX679_.jpg"
                  alt=""
                />
              </div>
              <h3>Hello This is Category</h3>
            </div>
          </Link>
          <Link to="/">
            <div className="prod_card">
              <div className="img">
                <img
                  src="https://m.media-amazon.com/images/I/81BxHYjeA2L._SX679_.jpg"
                  alt=""
                />
              </div>
              <h3>Hello This is Category</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Categories;
