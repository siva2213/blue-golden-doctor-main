import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import header from "../../assets/header.svg";
import { RiMenu4Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { CgMenuLeft } from "react-icons/cg";
import city from "../../assets/city.svg";
import Pagination from "../../components/Pagination";

import { Link } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const [cityList, setCityList] = useState([]);
  const [activeMenu, setActiveMenu] = useState("Home");
  const cityListRef = useRef(null);
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
    const scrollInterval = setInterval(() => {
      const container = cityListRef.current;
      if (container) {
        const containerWidth = 130;
        const scrollAmount = containerWidth;

        let newScrollLeft = container.scrollLeft + scrollAmount;

        if (newScrollLeft >= container.scrollWidth) {
          newScrollLeft = 0;
          setCurrentPage(1);
        } else {
          const currentPage = Math.floor(newScrollLeft / containerWidth) + 1;
          setCurrentPage(currentPage);
        }

        container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      }
    }, 2000);

    return () => clearInterval(scrollInterval);
  }, []);
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
      </div>
      <div className="hd-citymain">
        <div ref={cityListRef} className="citylist">
          {cityList.map((city, index) => (
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
