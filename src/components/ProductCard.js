import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <div className="product">
        <div className="container">
          <div className="head">
            <h2>All Product</h2>
            <Link to="/product">
              <h3 className="borderBtn">View All</h3>
            </Link>
          </div>
          <div className="allProd">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
