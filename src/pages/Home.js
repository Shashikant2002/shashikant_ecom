import React from "react";
import BannerContent from "../components/BannerContent";
import ProductCard from "../components/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import TreastedCom from "../components/TreastedCom";
import OurServices from "./OurServices";
import { useProductContext } from "../context/productContext";
import FeatureProduct from "../components/FeatureProduct";


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  const { featureProducts, product, isLoading } = useProductContext();
  console.log(featureProducts, product, isLoading)
  return (
    <>
      <BannerContent title="E-Commerce" />

      <div className="category">
        <div className="container">
          <div className="head">
            <h2>Feature Product</h2>
            <Link to="/category">
              <h3 className="borderBtn">View All</h3>
            </Link>
          </div>
          <Carousel
            responsive={responsive}
            draggable={false}
            showDots={true}
            infinite={true}
            autoPlaySpeed={3000}
            autoPlay={true}
          >

            {
              featureProducts.map((curEle, index) => {
                return <FeatureProduct i={index} data={curEle} />
              })
            }

          </Carousel>
        </div>
      </div>

      <div className="product">
        <div className="container">
          <div className="head">
            <h2>All Product</h2>
            <Link to="/product">
              <h3 className="borderBtn">View All</h3>
            </Link>
          </div>
          <div className="allProd">
            <ProductCard />
          </div>
        </div>
      </div>

      <TreastedCom />
      <OurServices />
    </>
  );
};

export default Home;
