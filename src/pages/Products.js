import React from "react";
import BannerContent from "../components/BannerContent";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <>
      <BannerContent title="Products" />
      <div className="product">
        <div className="container">
          <div className="allProd">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
