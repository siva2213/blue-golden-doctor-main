import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import header from "../../assets/header.svg";
import { RiMenu4Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { CgMenuLeft } from "react-icons/cg";
import city from '../../assets/city.svg';
import Pagination from "../../components/Pagination";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = (event) => {
    const container = event.target;
    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const totalWidth = container.scrollWidth;
    const currentPage = Math.ceil(
      (scrollLeft + containerWidth) / containerWidth
    );
    setCurrentPage(currentPage);
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

      <div className={`hd-menu ${isOpen ? "open" : ""}`}>
        <button className="hd-btn1">Home</button>
        <button className="hd-btn2">Services</button>
        <button className="hd-btn3">Booking</button>
        <button className="hd-btn4">Contact</button>
      </div>
      {/* <div className="hd-citymain">
        <img src={city} />
        <p className="city-txt">50 Cities</p>
        <div className="citypagenum">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}  
          />
        </div>
      </div> */}
    </div>
  );
};

export default Header;
