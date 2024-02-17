import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import header from "../../assets/header.svg";
import { RiMenu4Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { CgMenuLeft } from "react-icons/cg";
import city from "../../assets/city.svg";
import Pagination from "../../components/Pagination";

import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const closeMenuAndDoSomething = () => {
    setIsOpen(false);
    // Add additional functionality here when a menu item is chosen
  };
  return (
    <div className="hd-main">
      <div className="hd-hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <CgClose className="ham-cls" />
        ) : (
          <CgMenuLeft className="ham-opn" />
        )}
      </div>
      <img src={logo} alt="greoilc" className="hd-logo" />
      <img src={header} alt="greoilc" className="hd-header" />

      <div className={`hd-menu ${isOpen ? "hd-open" : "hd-close"}`}>
        <Link to="/blue-golden-doctor-main">
          <button className="hd-btn1" onClick={closeMenuAndDoSomething}>
            Home
          </button>
        </Link>

        <Link to="/Invoice">
          <button className="hd-btn4" onClick={closeMenuAndDoSomething}>
            Invoice
          </button>
        </Link>
        <Link to="/PaymentScreen">
          <button className="hd-btn4" onClick={closeMenuAndDoSomething}>
            Payment Screen
          </button>
        </Link>
        <Link to="/PaymentSuccess">
          <button className="hd-btn4" onClick={closeMenuAndDoSomething}>
            Payment Success
          </button>
        </Link>
        <Link to="/OtherPayment">
          <button className="hd-btn4" onClick={closeMenuAndDoSomething}>
            Other Payment
          </button>
        </Link>
        {/* <Link to="/aboutdoctor">
          <button className="hd-btn4">AboutDoctor</button>
        </Link> */}
        {/* <Link to="/services">
          <button className="hd-btn4">Services</button>
        </Link> */}
        <Link to="/specialists">
          <button className="hd-btn4">Specialists</button>
        </Link>
        {/* <Link to="/availability">
          <button className="hd-btn4">Availability</button>
        </Link> */}
        {/* <button className="hd-btn2">Services</button>
          <button className="hd-btn3">Booking</button>
          <button className="hd-btn4">Contact</button> */}
      </div>
      <div className="hd-citymain">
        <img src={city} className="hd-cityimg" />
        <p className="city-txt">50 Cities</p>
        <div className="citypagenum">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            dotActiveColor="#E957C9"
            dotInactiveColor="#C8C8C8"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
