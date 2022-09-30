import React from "react";
import { GiSpeedBoat } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";

const OurServices = () => {
  return (
    <>
      <div className="ourServices">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services">
            <div className="serve">
              <GiSpeedBoat />
              <h5>Super Fast and Free Delivery</h5>
            </div>
            <div className="center">
              <div className="center_serve">
                <GiSpeedBoat />
                <h5>Non-Contact Shipping</h5>
              </div>
              <div className="center_serve">
                <FaMoneyCheckAlt />
                <h5>Money Back Gurenty</h5>
              </div>
            </div>
            <div className="serve">
              <MdSecurity />
              <h5>Super Secure Payment System</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
