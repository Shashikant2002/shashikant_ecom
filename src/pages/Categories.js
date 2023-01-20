import React from "react";
import BannerContent from "../components/BannerContent";
import "react-multi-carousel/lib/styles.css";
import FeatureProduct from "../components/FeatureProduct";
import { useProductContext } from "../context/productContext";
import Loading from "../components/Loading";

const Categories = () => {
  const { featureProducts, isLoading } = useProductContext();
  if(isLoading){
    return <Loading />
  }
  return (
    <>
      <BannerContent title="Categories" />
      <div className="allCategory">
        <div className="container">
          {
            featureProducts.map((curEle, index) => {
              return <FeatureProduct key={index} data={curEle} />
            })
          }
        </div>
      </div>
    </>
  );
};

export default Categories;
