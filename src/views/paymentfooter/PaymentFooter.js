import React, { useState } from "react";
import "./PaymentFooter.css";
import { RiHome2Fill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { FaRegFileLines } from "react-icons/fa6";
import { RiPagesLine } from "react-icons/ri";

const PaymentFooter = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="pay-ftr-main">
      <div
        className={`pay-ftr-home ${
          activeButton === "home" ? "payactive" : "payinactive"
        }`}
        onClick={() => handleButtonClick("home")}
      >
        <RiHome2Fill
          className={`pay-ftr-icon ${
            activeButton === "home" ? "profactive" : "profinactive"
          }`}
        />
        <span
          className={`pay-ftr-text ${
            activeButton === "home" ? "profactive" : "profinactive"
          }`}
        >
          HOME
        </span>
      </div>
      <div
        className={`pay-ftr-home ${
          activeButton === "booking" ? "payactive" : "payinactive"
        }`}
        onClick={() => handleButtonClick("booking")}
      >
        <RiPagesLine
          className={`pay-ftr-icon ${
            activeButton === "booking" ? "profactive" : "profinactive"
          }`}
        />
        <span
          className={`pay-ftr-text ${
            activeButton === "booking" ? "profactive" : "profinactive"
          }`}
        >
          BOOKING
        </span>
      </div>
      <div
        className={`pay-ftr-home ${
          activeButton === "profile" ? "payactive" : "payinactive"
        }`}
        onClick={() => handleButtonClick("profile")}
      >
        <FaCircleUser
          className={`pay-ftr-icon ${
            activeButton === "profile" ? "profactive" : "profinactive"
          }`}
        />
        <span
          className={`pay-ftr-text ${
            activeButton === "profile" ? "profactive" : "profinactive"
          }`}
        >
          PROFILE
        </span>
      </div>
      <button className="pay-proceed">PROCEED</button>
    </div>
  );
};

export default PaymentFooter;
