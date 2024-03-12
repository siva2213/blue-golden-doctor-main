import React from "react";
import pinkStar from "../../src/assets/pinkstar.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional, for blur-up effect
import "../views/TopAdvertisement.css";
export default function TopAdvertisement() {
  
  return (
    <div className="advertisement-container">
      <div className="advertisement-content">
        <LazyLoadImage
          src={pinkStar}
          alt="My Image"
          className="star-image"
          // effect="blur" // Optional, for blur-up effect
        />
        <p className="advertisement-text">
          Limited-time offer! <span className="text-white">Get 50% off</span> on
          your first treatment and take control of your health today
        </p>
      </div>
    </div>
  );
}
