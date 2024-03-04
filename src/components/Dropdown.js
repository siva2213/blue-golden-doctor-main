// Dropdown.js
import React, { useState } from "react";
import "./Dropdown.css";
import { IoArrowDownOutline } from "react-icons/io5";

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
    <div className="dropdown">
      <div className="selected-option" onClick={toggleDropdown}>
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
          <ul className="drop-options">
            {options.map((option, index) => (
              <React.Fragment key={index}>
                <li key={index} onClick={() => handleOptionClick(option)}>
                  <span className="option-icon">{option.icon}</span>
                  <span className="option-text">{option.text}</span>
                </li>
                {index !== options.length - 1 && (
                  <hr
                    className="option-divider"
                    style={{
                      margin: "0",
                      border: "none",
                      height: "1px",
                      backgroundColor: optionDividerColor || "#e0e0e0",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
