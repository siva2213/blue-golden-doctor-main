import React, { useState, useEffect } from "react";
import "./Specialists.css";
import boy from "../../assets/boy.svg";
import medicine from "../../assets/medicine.svg";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaAward, FaTooth } from "react-icons/fa6";
import { PiHeadsetFill } from "react-icons/pi";
import ReactStars from "react-rating-stars-component";
import person from "../../assets/person.png";
import Pagination from "../../components/Pagination";
import girl from '../../assets/young_woman.png'

const Specialists = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [totalPages2, setTotalPages2] = useState(1);
  const [displayedDoctors, setDisplayedDoctors] = useState([]);

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
    const itemsPerPage = 2;
    const totalItems = displayedDoctors.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(totalPages);
  }, [displayedDoctors]);

  const handleScroll = (event) => {
    const container = event.target;
    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const totalWidth = container.scrollWidth;
    const currentPage = Math.ceil(
      (scrollLeft + containerWidth) / containerWidth
    );
    setCurrentPage(currentPage);
  };

  // REVIEWS
  useEffect(() => {
    const itemsPerPage = 2;
    const totalItems = displayedDoctors.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(totalPages2);
  }, []);
  const handleScroll2 = (event) => {
    const container = event.target;
    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const totalWidth = container.scrollWidth;
    const currentPage = Math.ceil(
      (scrollLeft + containerWidth) / containerWidth
    );
    setCurrentPage2(currentPage2);
  };
  const fetchDoctorsForPage = async (page) => {};

  // const handlePageChange = async (newPage) => {
  //   try {
  //     const data = await fetchDoctorsForPage(newPage);
  //     setDisplayedDoctors(data);
  //     setCurrentPage(newPage);
  //   } catch (error) {
  //     // Handle errors
  //     console.error("Error handling page change:", error);
  //   }
  // };

  return (
    <div className="spec-main">
      <div className="spec-one">
        <div className="spec-ttl">
          <p className="spec-ttl1">Our Specialists</p>
          <p className="spec-page">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
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
            <p className="del-ttl2">Book Medicines</p>
            <span className="del-ttl3"> From Us.</span>
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
        <div className="reviews">
          <div className="rev-ttl">
            <p className="rev-ttl1">1800+ Reviews</p>
            <p className="rev-ttl2">
              <Pagination
                currentPage={currentPage2}
                totalPages={totalPages2}
                // onPageChange={handlePageChange}
                dotActiveColor="#E957C9"
                dotInactiveColor="#DDDDDD"
              />
            </p>
          </div>
          <div className="rev-customers">
            <img className="cus-img" src={person} />
            <div className="cust-detail">
              <p className="cust-name">Melvin Dennis</p>
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={24}
                activeColor="#E957C9"
                value={5}
                color="#E957C9"
              />
              <p className="cust-cnt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis amet molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla egets accumsan, risus sem
                sollicitudin lacus, ut interdum tellus elit sed risus. Est an
                maecenas eget condimentum velit.
              </p>
            </div>
          </div>

          <div className="rev-customers">
            <img className="cus-img" src={person} />
            <div className="cust-detail">
              <p className="cust-name">Melvin Dennis</p>
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={24}
                activeColor="#E957C9"
                value={5}
                color="#E957C9"
              />
              <p className="cust-cnt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis amet molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla egets accumsan, risus sem
                sollicitudin lacus, ut interdum tellus elit sed risus. Est an
                maecenas eget condimentum velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialists;
