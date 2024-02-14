import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import header from "../../assets/header.svg";
import { RiMenu4Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { CgMenuLeft } from "react-icons/cg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
      {/* <div className="flex items-center justify-between w-[177px] h-[42px] rounded-[50px] bg-white">
        <div className="w-[52px] h-[32px] ml-[0.45em]">
          <LazyLoadImage src="/cityImage1.svg" className="rounded-3xl" />
        </div>
        <p className="text-[14px] font-black text-transparent bg-gradient-to-r from-[#E4C17F]  to-[#E48E51] bg-clip-text">
          50 Cities
        </p>
        <div className="mr-4">
          <p className="text-[#E957C9] font-black text-[12px]">1/3</p>
          <div className="flex gap-0.5">
            {" "}
            <p className="w-[3px] h-[3px] rounded-full bg-[#E957C9]"></p>
            <p className="bg-[#C8C8C8] rounded-full  w-[3px] h-[3px]"></p>
            <p className="bg-[#C8C8C8] rounded-full  w-[3px] h-[3px]"></p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
