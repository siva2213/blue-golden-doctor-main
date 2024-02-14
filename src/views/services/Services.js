import React, { useState } from "react";
import "./Services.css";
import services from "../../assets/services.svg";
import tooth from "../../assets/tooth.png";
import Pagination from "../../components/Pagination";
import Svg from "../Svg";
import dentist from "../../assets/dental.svg";
import decay from "../../assets/decay.svg";
import braces from "../../assets/braces.svg";
import carbide from "../../assets/carbide.svg";

const Services = () => {
  const [isActiveDental, setIsActiveDental] = useState(false);
  const [isActiveDecay, setIsActiveDecay] = useState(false);
  const [isActiveBraces, setIsActiveBraces] = useState(false);
  const [isActiveCarbide, setIsActiveCarbide] = useState(false);

  const toggleDental = () => {
    setIsActiveDental(!isActiveDental);
  };
  const toggleDecay = () => {
    setIsActiveDecay(!isActiveDecay);
  };
  const toggleBraces = () => {
    setIsActiveBraces(!isActiveBraces);
  };
  const toggleCarbide = () => {
    setIsActiveCarbide(!isActiveCarbide);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [displayedDoctors, setDisplayedDoctors] = useState([]);

  return (
    <div className="ser-main">
      <div className="ser-top">
        <h2 className="ser-ttl">Our Services</h2>
        <div className="ser-page">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            // onPageChange={handlePageChange}
            dotActiveColor="#E957C9"
            dotInactiveColor="#DDDDDD"
          />
        </div>
      </div>
      <hr style={{ width: "90vw", color: "#615f6f" }} />

      <div
        className="container"
        // className={`container ${isActiveDental ? "ser-active" : ""}`}
        // onClick={toggleDental}
      >
        <div className="ser-icttl">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={tooth} className="icon" />
            <div className="title">Dental Crown</div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis amet molestie, dictum est a, mattis tellus. Sed dignissim,
            metus nec fringilla egets accumsan, risus sem sollicitudin lacus.
          </div>
        </div>
        <img src={dentist} alt="Image" className="image" />
        {/* <Svg /> */}
      </div>
      <hr style={{ width: "90vw", color: "#615f6f" }} />
      <div
        className={`container ${isActiveDecay ? "ser-active" : ""}`}
        // onClick={toggleDecay}
      >
        <div className="ser-icttl">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={tooth} className="icon" />
            <div className="title">Decayed Tooth</div>
          </div>
          {/* <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis amet molestie, dictum est a, mattis tellus. Sed dignissim,
            metus nec fringilla egets accumsan, risus sem sollicitudin lacus.
          </div> */}
        </div>
        <img src={decay} alt="Image" className="imageservice" />
      </div>
      <hr style={{ width: "90vw", color: "#615f6f" }} />
      <div
        className={`container ${isActiveBraces ? "ser-active" : ""}`}
        // onClick={toggleBraces}
      >
        <div className="ser-icttl">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={tooth} className="icon" />
            <div className="title">Dental Braces</div>
          </div>
          {/* <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis amet molestie, dictum est a, mattis tellus. Sed dignissim,
            metus nec fringilla egets accumsan, risus sem sollicitudin lacus.
          </div> */}
        </div>
        <img src={braces} alt="Image" className="imageservice" />
      </div>
      <hr style={{ width: "90vw", color: "#615f6f" }} />
      <div
        className={`container ${isActiveCarbide ? "ser-active" : ""}`}
        // onClick={toggleCarbide}
      >
        <div className="ser-icttl">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={tooth} className="icon" />
            <div className="title">Carbide Finishing Bur</div>
          </div>
          {/* <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis amet molestie, dictum est a, mattis tellus. Sed dignissim,
            metus nec fringilla egets accumsan, risus sem sollicitudin lacus.
          </div> */}
        </div>
        <img src={carbide} alt="Image" className="imageservice" />
      </div>
      <hr style={{ width: "90vw", color: "#615f6f" }} />
      <div className="curve-colorone">
        <div className="curve-colortwo">
          <button className="bk-btn">Start Booking</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
