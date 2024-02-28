import React, { useState, useEffect } from "react";
import "./Specialists.css";
import boy from "../../assets/boy.png";
import medicine from "../../assets/medicine.png";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaAward, FaTooth } from "react-icons/fa6";
import { PiHeadsetFill } from "react-icons/pi";
import person from "../../assets/person.png";
import Pagination from "../../components/Pagination";

const Specialists = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [displayedDoctors, setDisplayedDoctors] = useState([]);
  const totalreviewPages = 3;

  useEffect(() => {
    const doctorList = [
      {
        name: "Dr. Julie Smith",
        specialty: "Dental Surgeon",
        image: person,
      },
      {
        name: "Dr. Julie Smith",
        specialty: "Dental Surgeon",
        image: person,
      },
      {
        name: "Dr. Julie Smith",
        specialty: "Dental Surgeon",
        image: person,
      },
      {
        name: "Dr. Julie Smith",
        specialty: "Dental Surgeon",
        image: person,
      },
      {
        name: "Dr. Julie Smith",
        specialty: "Dental Surgeon",
        image: person,
      },
      {
        name: "Dr. Julie Smith",
        specialty: "Dental Surgeon",
        image: person,
      },
      {
        name: "Dr. Julie Smith",
        specialty: "Dental Surgeon",
        image: person,
      },
      {
        name: "Dr. Julie Smith",
        specialty: "Dental Surgeon",
        image: person,
      },
    ];
    setDisplayedDoctors(doctorList);
  }, []);

  // DOCTORS
  useEffect(() => {
    const itemsPerPage = 1;
    const totalItems = displayedDoctors.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(totalPages);
  }, [displayedDoctors]);

  const handleScroll = (event) => {
    const container = event.target;
    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const totalPages = totalreviewPages;
    let currentPage = Math.ceil(
      (scrollLeft + containerWidth) / containerWidth
    );
    currentPage = Math.min(currentPage, totalPages);
    setCurrentPage(currentPage);
  };

  return (
    <div className="spec-main">
      <div className="spec-one">
        <div className="spec-ttl">
          <p className="spec-ttl1">Our Specialists</p>
          <p className="spec-page">
            <Pagination
              currentPage={currentPage}
              totalPages={totalreviewPages}
              // onPageChange={handlePageChange}
              dotActiveColor="#fff"
              dotInactiveColor="#d3b36c"
            />
          </p>
        </div>
        <div className="spec-doclist" onScroll={handleScroll}>
          {displayedDoctors.map((doctor, index) => (
            <div className="spec-doc" key={index}>
              <img
                src={doctor.image}
                className="spec-img"
                alt={`Dr. ${doctor.name}`}
              />
              <p className="spec-docname">{doctor.name}</p>
              <p className="spec-docspec">{doctor.specialty}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="spec-two">
        <div className="spec-two-left">
          <div className="spec-two-ttl">
            <p className="del-ttl1">
              <AiFillThunderbolt /> Lightning Fast Delivery
            </p>
            <p className="del-ttl2">
              Book Medicines <span className="del-ttl3"> From Us.</span>
            </p>
          </div>
          <div className="medicine-abt">
            <img src={medicine} alt="medicine" className="medicine-icon" />
            <div className="del-btn-cnt">
              <p className="del-cnt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim.
              </p>
              <button className="del-btn">Know more</button>
            </div>
          </div>
        </div>
        <img src={boy} alt="boy" className="delivery-boy" />
      </div>
      <div className="spec-three">
        <div className="amnt-icons">
          <div className="amen-icon">
            <FaAward className="amenities-icon" />
            <p className="amenities">Certified Doctors</p>
          </div>
          <div className="amen-icon">
            <FaTooth className="amenities-icon" />
            <p className="amenities">Amenities</p>
          </div>
          <div className="amen-icon">
            <PiHeadsetFill className="amenities-icon" />
            <p className="amenities">24/7 Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialists;
