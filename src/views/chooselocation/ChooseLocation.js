import React, { useState } from "react";
import "./ChooseLocation.css";
import playstore from "../../assets/Playstorelogo.svg";
import apple from "../../assets/Applelogo.svg";
import choosecity from "../../assets/choosecity.png";

const ChooseLocation = () => {
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Ensure dropdown is initially closed

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedCity(option.text);
    setOpen(false);
  };

  const options = [
    { text: "Bangalore" },
    { text: "Delhi" },
    { text: "Trichi" },
    { text: "Delhi" },
    { text: "Delhi" },
    { text: "Delhi" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="choose-main">
      <button className="open-offers-button" onClick={handleClickOpen}>
        choosebooking
      </button>
      {open && (
        <div className="choose-dialog">
          <div className="choose-dialog-main">
            <div className="choose-top">
              <div className="choose-cnt-img">
                <div className="choose-top-div">
                  <div className="choose-top-title">
                    <span className="choose-top-ttl">We are at 50 cities </span>
                    <span className="choose-top-ttl">
                      with over 60 clinics.{" "}
                    </span>
                  </div>
                  <p className="choose-para-main">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla.
                  </p>
                  <div className="choose-dnld-main">
                    <img
                      src={playstore}
                      className="app-logos"
                      alt="download on playstore"
                    />
                    <img
                      src={apple}
                      className="app-logos"
                      alt="download on applestore"
                    />
                  </div>
                </div>
                <img
                  src={choosecity}
                  alt="choose city"
                  className="choose-city-img"
                />
              </div>
              <div className="choose-sub-page">
                <span className="choose-choose">Choose City</span>
                <div className="dropdown">
                  <div className="selected-option-loc" onClick={toggleDropdown}>
                    {selectedCity ? selectedCity : "Select City"}
                  </div>
                  <div className="dropmain">
                    {isOpen && (
                      <ul className="drop-options">
                        {options.map((option, index) => (
                          <React.Fragment key={index}>
                            <li
                              key={index}
                              onClick={() => handleOptionClick(option)}
                            >
                              <span className="option-text">{option.text}</span>
                            </li>
                          </React.Fragment>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div>
                  <button className="choose-done" onClick={handleClose}>
                    DONE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseLocation;
