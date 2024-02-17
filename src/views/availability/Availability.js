import React, { useState } from "react";
import "./Availability.css";
import kid from "../../assets/kid.png";
import teen from "../../assets/teen.png";
import adult from "../../assets/adult.png";
import teeth from "../../assets/teeth.png";
import { TiLocation } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import applestore from "../../assets/applestore.png";
import playstore from "../../assets/playstore.png";
import phones from "../../assets/phone.png";
import logo from "../../assets/availlogo.png";

const groups = [
  { image: kid, alt: "kids", className: "avail-icon", label: "Kids" },
  { image: teen, alt: "teen", className: "avail-icon", label: "Teenagers" },
  { image: adult, alt: "adult", className: "avail-icon", label: "Adults" },
];

const Availability = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Location:", location);
    console.log("Date:", date);
    console.log("Time:", time);
  };

  return (
    <div className="availability-main">
      <div className="help-main">
        <p className="help-ttl">Who We Help?</p>
        <div className="help-groups">
          {groups.map((group, index) => (
            <div key={index} className="help-ic-main">
              <img
                src={group.image}
                alt={group.alt}
                className={group.className}
              />
              <p className="avail-lbl">{group.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="avail-main">
        <p className="avail-ttl1">
          Nurturing Your Smile With{" "}
          <span className="avail-ttl2">Precision & Care.</span>
        </p>
        <img src={teeth} alt="availability" className="checkavailability"/>
        <form className="avail-form" onSubmit={handleSubmit}>
          <div className="avail-form-cnt">
            <TiLocation className="avail-licicon1" />
            <input
              placeholder="Your Location"
              value={location}
              onChange={handleLocationChange}
            ></input>
            <FaAngleRight className="avail-arrow" />
          </div>
          <div className="avail-form-cnt">
            <SlCalender className="avail-licicon2" />
            <input
              placeholder="Date"
              value={date}
              onChange={handleDateChange}
            ></input>
            <FaAngleRight className="avail-arrow" />
          </div>
          <div className="avail-form-cnt">
            <MdAccessTimeFilled className="avail-licicon3" />
            <input
              placeholder="Time"
              value={time}
              onChange={handleTimeChange}
            ></input>
            <FaAngleRight className="avail-arrow" />
          </div>
          <button className="avail-btn" type="submit">
            Check Availability
          </button>
        </form>
      </div>
      <div className="download-main">
        <div className="download-left">
          <img src={logo} alt="logo" className="download-icon" />
          <p className="download-ttl">Download Our App Now!!</p>
          <div className="download-cnt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus.
          </div>
          <div className="download-icons">
            <img src={playstore} alt="playstore" className="download-play" />
            <img src={applestore} alt="applestore" className="download-apple" />
          </div>
        </div>
        <img src={phones} className="download-right" alt="phone" />
      </div>
    </div>
  );
};

export default Availability;
