import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/productContext";


const ProductCard = () => {
  const { featureProducts, product, isLoading } = useProductContext();
  console.log(featureProducts, product, isLoading)
  return (
    <>
      <div className="allProd">
        {
          product.map((curEle, index) => {
            return (
              <Link key={index} to="/product">
                <div className="prodCard">
                  <div className="img">
                    <img
                      src={curEle.image}
                      alt={curEle.name}
                    />
                  </div>
                  <div className="content">
                    <h3>{curEle.name}</h3>
                    <div className="star">{"👩🏾‍🤝‍🧑🏾".repeat(4)}</div>
                    <p>
                      <strike>₹{curEle.price + 1000}</strike>
                    </p>
                    <h4>₹{curEle.price}</h4>
                  </div>
                </div>
              </Link>
            )
          })
        }

      </div>
    </>
  );
};

export default ProductCard;
