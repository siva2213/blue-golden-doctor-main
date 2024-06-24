import React, { useState, useRef, useEffect } from "react";
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
  onToggle,
  selectedCity
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        if (onToggle) {
          onToggle(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onToggle]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (onToggle) {
      onToggle(!isOpen);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
    if (onToggle) {
      onToggle(false);
    }
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div
        className="selected-option"
        onClick={toggleDropdown}
        style={{
          fontSize: selectFontSize,
          padding: selectPadding,
          background: selectBackground,
          borderRadius: selectborderRadius,
          boxShadow: selectboxShadow,
        }}
      >
        <div>{selectedOption ? <span style={{color: '#fff',fontSize: '14px', fontWeight: 'bold'}}>{selectedOption.text}</span> : defaultText}</div>
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
              {options.map((option, index) => {
                debugger
                return (
                <li key={index} onClick={() => handleOptionClick(option)}>
                  {option.icon && <span className="option-icon">{option.icon}</span>}
                  <span className="option-text" style={optionTextStyle}>
                    {(selectedOption && selectedOption.text === option.text) ? <span style={{color:"#E7BE7C"}}>{option.text}</span> : option.text}
                  </span>
                  {option.fee && <span className="option-fee">{option.fee}</span>}
                </li>
              )})}
            </ul>
          </Scrollbar>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
