import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import header from "../../assets/header.svg";
import { RiMenu4Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { CgMenuLeft } from "react-icons/cg";
import city from "../../assets/city.svg";
import Pagination from "../../components/Pagination";

import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const [cityList, setCityList] = useState([]);
  const [activeMenu, setActiveMenu] = useState("Home");

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  const closeMenuAndDoSomething = (menuTitle) => {
    setIsOpen(false);
    setActiveMenu(menuTitle);
  };

  useEffect(() => {
    const citylist = [
      { name: "50 Cities", image: city },
      { name: "25 Cities", image: city },
      { name: "40 Cities", image: city },
    ];
    setCityList(citylist);
    // setTotalPages(Math.ceil(citylist.length / itemsPerPage));

  }, []);

  useEffect(() => {
    const itemsPerPage = 1;
    const totalItems = cityList.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(totalPages);
  }, [cityList]);

  const handleScroll = (event) => {
    const container = event.target;
    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    // const currentPage = Math.ceil(
    //   (scrollLeft + containerWidth) / containerWidth
    // );
    const currentPage = Math.floor(scrollLeft / containerWidth) + 1;
    setCurrentPage(currentPage);

  };
  return (
    <div className="hd-main">
      <div className="hd-hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <CgClose className="ham-cls" />
        ) : (
          <CgMenuLeft className="ham-opn" />
        )}
      </div>
      <img src={logo} alt="greoilc" className="hd-logo" />
      <img src={header} alt="greoilc" className="hd-header" />

      <div className={`hd-menu ${isOpen ? "hd-open" : "hd-close"}`}>
        <Link to="/blue-golden-doctor-main">
          <button className="hd-btn1" onClick={closeMenuAndDoSomething}>
            Home
          </button>
        </Link>

        <Link to="/Invoice">
          <button className="hd-btn2" onClick={closeMenuAndDoSomething}>
            Invoice
          </button>
        </Link>
        <Link to="/PaymentScreen">
          <button className="hd-btn3" onClick={closeMenuAndDoSomething}>
            Payment Screen
          </button>
        </Link>
        <Link to="/PaymentSuccess">
          <button className="hd-btn4" onClick={closeMenuAndDoSomething}>
            Payment Success
          </button>
        </Link>
        <Link to="/OtherPayment">
          <button className="hd-btn5" onClick={closeMenuAndDoSomething}>
            Other Payment
          </button>
        </Link>
        <Link to="/aboutdoctor">
          <button className="hd-btn6" onClick={closeMenuAndDoSomething}>
            AboutDoctor
          </button>
        </Link>
        <Link to="/services">
          <button className="hd-btn7" onClick={closeMenuAndDoSomething}>
            Services
          </button>
        </Link>
        <Link to="/specialists">
          <button className="hd-btn8" onClick={closeMenuAndDoSomething}>
            Specialists
          </button>
        </Link>
        <Link to="/availability">
          <button className="hd-btn9" onClick={closeMenuAndDoSomething}>
            Availability
          </button>
        </Link>
        {/* <button className="hd-btn2">Services</button>
          <button className="hd-btn3">Booking</button>
          <button className="hd-btn4">Contact</button> */}
      </div>
      <div className="hd-citymain">
        <div onScroll={handleScroll} className="citylist">
          {cityList
            // .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((city, index) => (
              <div key={index} className="cityitem">
                <img src={city.image} className="hd-cityimg" alt={city.name} />
                <p className="city-txt">{city.name}</p>
              </div>
            ))}
        </div>
        <div className="citypagenum">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            dotActiveColor="#E957C9"
            dotInactiveColor="#C8C8C8"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
