/* Dropdown.js */
import React, { useState } from "react";
import "./Dropdown.css";
import { IoArrowDownOutline } from "react-icons/io5";
import Scrollbar from "./Scrollbar/Scrollbar";

const Dropdown = ({
  options,
  onSelect,
  defaultText,
  arrowColor,
  dropdownBackground,
  optionDividerColor,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" style={{ background: dropdownBackground }}>
      <div
        className="selected-option"
        onClick={toggleDropdown}
        // style={{ color: arrowColor }}
      >
        {selectedOption ? selectedOption.text : defaultText}
        <IoArrowDownOutline
          style={{
            fontSize: "12px",
            color: "white",
            padding: "6px",
            borderRadius: "100px",
            background: "#372f62",
          }}
        />
      </div>
      <div className="dropmain">
        {isOpen && (
          <Scrollbar style={{ maxHeight: "160px" }}>
            {/* <div className="scrollbar-container"> */}
            <ul
              className="drop-options"
              style={{
                backgroundColor: dropdownBackground,
                color: optionDividerColor,
              }}
            >
              {options.map((option, index) => (
                <li key={index} onClick={() => handleOptionClick(option)}>
                  <span className="option-icon">{option.icon}</span>
                  <span className="option-text">{option.text}</span>
                </li>
              ))}
            </ul>
            {/* </div> */}
          </Scrollbar>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
