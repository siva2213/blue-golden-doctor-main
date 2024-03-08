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
  scrollbarBackground,
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
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada ligula et faucibus rhoncus. Nulla consequat risus et
              luctus ullamcorper. Nam facilisis at elit id condimentum. Nulla
              luctus tortor at nisl consectetur, in consequat nulla rutrum. Sed
              condimentum ligula non sapien elementum, sed placerat metus
              consequat. Sed sollicitudin sem sit amet venenatis tincidunt. In
              efficitur sed dolor vel consectetur. Mauris convallis pharetra
              risus. Donec pretium erat vel augue consectetur lacinia. Nunc eu
              lobortis risus. Quisque varius erat eget est dignissim vestibulum.
              Suspendisse sagittis dui lorem, sodales mollis mi auctor at. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nam ut commodo
              massa.
            </p> */}
          </Scrollbar>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
