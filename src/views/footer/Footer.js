import React from "react";
import "./Footer.css";
import footerlogo from "../../assets/ftr_logo.svg";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import line from "../../assets/curves.svg";
import resline from "../../assets/res_curves.svg";
import rescurve from "../../assets/rescurve2.svg";

const footer = () => {
  return (
    <>
      <div className="ft-main">
        <div className="ft-top">
          <div className="ft-left">
            <img src={footerlogo} alt="greoilc" className="ft-logo" />
            <div className="ftr-company-ttl">
              <h3 className="ftr-cpny">Company</h3>
              <p className="ft-det">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus.
              </p>
            </div>
            <div className="ft-scl">
              <img src={line} className="curves" />
              <img src={rescurve} className="res-curves" />
              <FaInstagram className="ins-logo" />
              <FiTwitter className="twt-logo" />
              <FaFacebookF className="fbk-logo" />
            </div>
          </div>
          <div className="ft-right">
            <div className="ft-grid">
              <h2>Home</h2>
              <h2>Booking</h2>
              <h2>Top Doctors</h2>
              <h2>Our Services</h2>
              <h2>Reviews</h2>
              <h2>Insurance</h2>
            </div>
          </div>
          <p className="ft-detail">
            About Us | Privacy Policy | Terms of Conditions
          </p>
        </div>
        <div className="ftr-bottom">
          <p className="ft-cpy">Copywrite 2022. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default footer;
