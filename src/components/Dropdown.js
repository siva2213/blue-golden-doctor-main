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
  showArrow,
  selectFontSize,
  selectPadding,
  selectBackground,
  selectborderRadius,
  selectboxShadow,
  scrollbarHeight,
  scrollbarBackground,
  scrollcontentHeight,
  scrollWidth,
  optionTextStyle,
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
    <div
      className="dropdown"
      style={
        {
          // background: dropdownBackground,
          // borderRadius: selectborderRadius,
          // boxShadow: selectboxShadow,
        }
      }
    >
      <div
        className="selected-option"
        onClick={toggleDropdown}
        style={{
          fontSize: selectFontSize,
          padding: selectPadding,
          background: selectBackground,
          boxShadow: selectboxShadow,
        }}
      >
        <div>{selectedOption ? selectedOption.text : defaultText}</div>
        {showArrow && (
          <IoArrowDownOutline
            style={{
              fontSize: "12px",
              color: arrowColor,
              padding: "6px",
              borderRadius: "100px",
              background: "#372f62",
            }}
          />
        )}
      </div>
      {isOpen && (
        <div className="dropmain">
          <Scrollbar
            thumbcolor="#E957C9"
            trackcolor="#372F62"
            scrollbarBackground={scrollbarBackground}
            scrollWidth={scrollWidth}
            scrollbarHeight={scrollbarHeight}
            scrollcontentHeight={scrollcontentHeight}
          >
            <ul
              className="drop-options"
              style={{
                // backgroundColor: dropdownBackground,
                color: optionDividerColor,
              }}
            >
              {options.map((option, index) => (
                <li key={index} onClick={() => handleOptionClick(option)}>
                  {option.icon && (
                    <span className="option-icon">{option.icon}</span>
                  )}
                  <span className="option-text" style={optionTextStyle}>
                    {option.text}
                  </span>
                </li>
              ))}
            </ul>
          </Scrollbar>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
