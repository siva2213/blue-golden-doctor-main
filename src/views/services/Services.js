import React, { useState } from "react";
import "./Services.css";
import services from "../../assets/services.svg";
import tooth from "../../assets/tooth.png";
import Pagination from "../../components/Pagination";

const Services = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleContent = () => {
    setIsActive(!isActive);
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
        className={`container ${isActive ? "ser-active" : ""}`}
        onClick={toggleContent}
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
        <img src={services} alt="Image" className="image" />
      </div>
      <hr style={{ width: "90vw", color: "#615f6f" }} />
      <div className={`container ${isActive ? "ser-active" : ""}`}>
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
        <img src={services} alt="Image" className="image1" />
      </div>
      <hr style={{ width: "90vw", color: "#615f6f"}} />

      <button className="bk-btn">Start Booking</button>
    </div>
  );
};

export default Services;
