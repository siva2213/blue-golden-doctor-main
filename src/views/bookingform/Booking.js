import React, { useState } from "react";
import "./Booking.css";
import { FaCircleArrowRight } from "react-icons/fa6";
import { BiClinic } from "react-icons/bi";
import { MdOutlinePhone } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { RiHome2Line } from "react-icons/ri";
import formimage from "../../assets/formimage2.png";

const Booking = () => {
  const [inputs, setInputs] = useState({});
  const [activeButton, setActiveButton] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const function1 = () => {
    console.log("Clinic Visit");
  };

  const function2 = () => {
    console.log("Voice call");
  };

  const function3 = () => {
    console.log("Video Call");
  };

  const function4 = () => {
    console.log("Home Call");
  };

  const buttons = [
    { name: "Clinic Visit", icon: <BiClinic />, onClick: function1 },
    { name: "Voice call", icon: <MdOutlinePhone />, onClick: function2 },
    { name: "Video Call", icon: <BsCameraVideo />, onClick: function3 },
    { name: "Home Call", icon: <RiHome2Line />, onClick: function4 },
  ];

  const handleButtonClick = (buttonName, onClickFunction) => {
    setActiveButton(buttonName);
    onClickFunction();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(inputs));
    console.log(inputs);
  };

  return (
    <div className="book-main">
      <h4 className="book-ttl">Make An Appointment</h4>

      <div className="buttons-and-image-container">
        <div className="book-btn">
          {buttons.map((button, i) => (
            <div className="book-item" key={button.name + i}>
              <button
                
                className={activeButton === button.name ? "active" : "inactive"}
                onClick={() => handleButtonClick(button.name, button.onClick)}
              >
                {button.icon}
              </button>
              <label
                className={
                  activeButton === button.name ? "lblactive" : "lblinactive"
                }
              >
                {button.name}
              </label>
            </div>
          ))}
        </div>
        <img src={formimage} alt="formImage" className="custom-image" />
      </div>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-input1">
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
            placeholder="Enter Name"
            className="input-val"
          />
        </div>

        <div className="form-input2">
          <input
            type="datetimelocal"
            name="date"
            value={inputs.date || ""}
            onChange={handleChange}
            placeholder="Choose Date and Time"
            className="input-val"
          />
          <FaCircleArrowRight style={{ fontSize: "22px", color: "#372F62" }} />
        </div>
        <div className="form-input3">
          <input
            type="text"
            name="service"
            value={inputs.service || ""}
            onChange={handleChange}
            placeholder="Choose Service"
            className="input-val"
          />
          <FaCircleArrowRight style={{ fontSize: "22px", color: "#372F62" }} />
        </div>
        <div className="form-input4">
          <input
            type="text"
            name="testAndMedicine"
            value={inputs.testAndMedicine || ""}
            onChange={handleChange}
            placeholder="Choose Test & Medicine"
            className="input-val"
          />
          <FaCircleArrowRight style={{ fontSize: "22px", color: "#372F62" }} />
        </div>
        <input type="submit" value="BOOK NOW" className="form-submit" />
      </form>
    </div>
  );
};

export default Booking;
