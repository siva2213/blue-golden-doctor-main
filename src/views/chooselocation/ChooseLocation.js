import React, { useState } from "react";
import "./ChooseLocation.css";
import playstore from "../../assets/Playstorelogo.svg";
import apple from "../../assets/Applelogo.svg";
import choosecity from "../../assets/choosecity.png";
import Dropdown from "../../components/Dropdown";
import Scrollbar from "../../components/Scrollbar/Scrollbar";

const ChooseLocation = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // const handleClickisOpen = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  const handleOptionClick = (option) => {
    setSelectedCity(option.text);
    setIsOpen(false);
  };

  const options = [
    { text: "Bangalore" },
    { text: "Delhi" },
    { text: "Trichi" },
    { text: "Delhi" },
    { text: "Delhi" },
    { text: "Mumbai" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="choose-main">
      <button className="Open-offers-button" onClick={toggleDropdown}>
        Choose Location
      </button>
      {isOpen && (
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

                <Dropdown
                  options={options}
                  onSelect={handleOptionClick}
                  defaultText={selectedCity ? selectedCity : "Select City"}
                  dropdownBackground="#2E2756" // Customize the dropdown background color if needed
                  optionDividerColor="#000000" // Customize the option divider color if needed
                  isOpen={isOpen} // Pass the isOpen state to the Dropdown component
                  toggleDropdown={toggleDropdown} // Pass the toggleDropdown function to the Dropdown component
                  showArrow={false}
                  selectFontSize="14px" // Customize arrow font size
                  selectPadding="14px 20px"
                  selectborderRadius="40px"
                  selectboxShadow="rgb(64, 54, 114) -3px -3px 6px 0px inset, rgb(45, 38, 83) 3px 3px 6px 3px inset"
                  scrollbarBackground="#2e2756"
                  scrollbarHeight="180px"
                  optionTextStyle={{
                    background: "#372F62",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "white",
                    width: "50vw",
                  }}
                />
                <div>
                  <button className="choose-done" onClick={toggleDropdown}>
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
