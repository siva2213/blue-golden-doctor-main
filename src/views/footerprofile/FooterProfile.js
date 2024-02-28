import React, { useState } from "react";
import "./FooterProfile.css";
import { RiHome2Fill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { AiOutlineBulb } from "react-icons/ai";
import { FaRegFileLines } from "react-icons/fa6";
import { RiPagesLine } from "react-icons/ri";
const FooterProfile = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="ftr-profile-main">
      <div
        className={`ftr-profile-home ${
          activeButton === "home" ? "profactive" : "profinactive"
        }`}
        onClick={() => handleButtonClick("home")}
      >
        <RiHome2Fill
          className={`ftr-home-icon ${
            activeButton === "home" ? "profactive" : "profinactive"
          }`}
        />
        <span
          className={`ftr-home-text ${
            activeButton === "home" ? "profactive" : "profinactive"
          }`}
        >
          HOME
        </span>
      </div>
      <div
        className={`ftr-profile-home ${
          activeButton === "booking" ? "profactive" : "profinactive"
        }`}
        onClick={() => handleButtonClick("booking")}
      >
        <RiPagesLine
          className={`ftr-home-icon ${
            activeButton === "booking" ? "profactive" : "profinactive"
          }`}
        />
        <span
          className={`ftr-home-text ${
            activeButton === "booking" ? "profactive" : "profinactive"
          }`}
        >
          BOOKING
        </span>
      </div>
      <div
        className={`ftr-profile-mode ${
          darkMode ? "profactive" : "profinactive"
        }`}
        onClick={handleDarkModeToggle}
      >
        <div
          className={`ftr-mode-icon-wrapper ${
            darkMode ? "profactive" : "profinactive"
          }`}
        >
          <AiOutlineBulb
            className={`ftr-mode-icon ${
              activeButton === "darkmode" ? "profactive" : "profinactive"
            }`}
          />
        </div>
        <span
          className={`ftr-home-text ${
            darkMode ? "profactive" : "profinactive"
          }`}
        >
          DARK MODE
        </span>
      </div>
      <div
        className={`ftr-profile-home ${
          activeButton === "call" ? "profactive" : "profinactive"
        }`}
        onClick={() => handleButtonClick("call")}
      >
        <IoMdCall
          className={`ftr-home-icon ${
            activeButton === "call" ? "profactive" : "profinactive"
          }`}
        />
        <span
          className={`ftr-home-text ${
            activeButton === "call" ? "profactive" : "profinactive"
          }`}
        >
          CALL
        </span>
      </div>
      <div
        className={`ftr-profile-home ${
          activeButton === "profile" ? "profactive" : "profinactive"
        }`}
        onClick={() => handleButtonClick("profile")}
      >
        <FaCircleUser
          className={`ftr-home-icon ${
            activeButton === "profile" ? "profactive" : "profinactive"
          }`}
        />
        <span
          className={`ftr-home-text ${
            activeButton === "profile" ? "profactive" : "profinactive"
          }`}
        >
          PROFILE
        </span>
      </div>
    </div>
  );
};

export default FooterProfile;
