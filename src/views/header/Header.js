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
import { FaUser, FaUserDoctor } from "react-icons/fa6";
import { FaCalendarAlt, FaCalendar } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdInsertDriveFile } from "react-icons/md";
import download from "../../assets/hdr_download.png";
import applestore from "../../assets/applestore.png";
import playstore from "../../assets/playstore.png";
import { SiSpringsecurity } from "react-icons/si";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const [cityList, setCityList] = useState([]);
  const [activeMenu, setActiveMenu] = useState("Home");

  const cityListRef = useRef(null);

  const handleButtonClick = (menuTitle) => {
    setActiveMenu(menuTitle);
    setIsOpen(false);
    sessionStorage.setItem("activeMenu", menuTitle);
  };
  useEffect(() => {
    const savedActiveMenu = sessionStorage.getItem("activeMenu");
    if (savedActiveMenu) {
      setActiveMenu(savedActiveMenu);
    }
  }, []);
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
        <div
          className={`hdractive ${
            activeMenu === "Home" ? "divactive" : "divinactive"
          }`}
          onClick={() => handleButtonClick("Home")}
        >
          <Link
            to="/blue-golden-doctor-main"
            style={{ textDecoration: "none" }}
          >
            <button className="hd-btn1">
              <FaUser
                className={`hdr-icon-user ${
                  activeMenu === "Home" ? "active-hdricon" : "inactive-hdricon"
                }`}
              />{" "}
              Home
            </button>
          </Link>
        </div>
        <div
          className={`hdractive ${
            activeMenu === "Upcoming Appointments" ? "divactive" : "divinactive"
          }`}
          onClick={() => handleButtonClick("Upcoming Appointments")}
        >
          <Link to="/invoice" style={{ textDecoration: "none" }}>
            <button className="hd-btn2">
              <FaCalendarAlt
                className={`hdr-icon-cal ${
                  activeMenu === "Upcoming Appointments"
                    ? "active-hdricon"
                    : "inactive-hdricon"
                }`}
              />{" "}
              Upcoming Appointments
            </button>
          </Link>
        </div>
        <div
          className={`hdractive ${
            activeMenu === "Previous Appointments" ? "divactive" : "divinactive"
          }`}
          onClick={() => handleButtonClick("Previous Appointments")}
        >
          <Link to="/paymentScreen" style={{ textDecoration: "none" }}>
            <button className="hd-btn3">
              <FaCalendar
                className={`hdr-icon-cale ${
                  activeMenu === "Previous Appointments"
                    ? "active-hdricon"
                    : "inactive-hdricon"
                }`}
              />{" "}
              Previous Appointments
            </button>
          </Link>
        </div>
        <div
          className={`hdractive ${
            activeMenu === "Our Doctors" ? "divactive" : "divinactive"
          }`}
          onClick={() => handleButtonClick("Our Doctors")}
        >
          <Link to="/paymentSuccess" style={{ textDecoration: "none" }}>
            <button className="hd-btn4">
              <FaUserDoctor
                className={`hdr-icon-doc ${
                  activeMenu === "Our Doctors"
                    ? "active-hdricon"
                    : "inactive-hdricon"
                }`}
              />{" "}
              Our Doctors
            </button>
          </Link>
        </div>
        <div
          className={`hdractive ${
            activeMenu === "Insurance" ? "divactive" : "divinactive"
          }`}
          onClick={() => handleButtonClick("Insurance")}
        >
          <Link to="/otherPayment" style={{ textDecoration: "none" }}>
            <button className="hd-btn5">
              <SiSpringsecurity
                className={`hdr-icon-ins ${
                  activeMenu === "Insurance"
                    ? "active-hdricon"
                    : "inactive-hdricon"
                }`}
              />
              Insurance
            </button>
          </Link>
        </div>
        <div
          className={`hdractive ${
            activeMenu === "Privacy Policy" ? "divactive" : "divinactive"
          }`}
          onClick={() => handleButtonClick("Privacy Policy")}
        >
          <Link to="/chooseLocation" style={{ textDecoration: "none" }}>
            <button className="hd-btn5">
              <IoIosLock
                className={`hdr-icon-pri ${
                  activeMenu === "Privacy Policy"
                    ? "active-hdricon"
                    : "inactive-hdricon"
                }`}
              />
              Privacy Policy
            </button>
          </Link>
        </div>
        <div
          className={`hdractive ${
            activeMenu === "Terms & Conditions" ? "divactive" : "divinactive"
          }`}
          onClick={() => handleButtonClick("Terms & Conditions")}
        >
          <Link to="" style={{ textDecoration: "none" }}>
            <button className="hd-btn5">
              <span className="hdr-icon-wrapper">
                <MdInsertDriveFile
                  className={`hdr-icon-term ${
                    activeMenu === "Terms & Conditions"
                      ? "active-hdricon"
                      : "inactive-hdricon"
                  }`}
                />
              </span>
              Terms & Conditions
            </button>
          </Link>
        </div>
        <div
          className={`hdractive ${
            activeMenu === "Terms & Conditions" ? "divactive" : "divinactive"
          }`}
          onClick={() => handleButtonClick("ConfirmBooking")}
        >
          <Link to="/offer" style={{ textDecoration: "none" }}>
            <button className="hd-btn5">
              <span className="hdr-icon-wrapper">
                <MdInsertDriveFile className="hdr-icon-term" />
              </span>
              Offers
            </button>
          </Link>
        </div>
        <div
          className={`hdractive ${
            activeMenu === "Terms & Conditions" ? "divactive" : "divinactive"
          }`}
          onClick={() => handleButtonClick("ConfirmBooking")}
        >
          <Link to="/chooseLocation" style={{ textDecoration: "none" }}>
            <button className="hd-btn5">
              <span className="hdr-icon-wrapper">
                <MdInsertDriveFile className="hdr-icon-term" />
              </span>
              ChooseLocation
            </button>
          </Link>
        </div>
        <div
          className={`hdractive ${
            activeMenu === "Terms & Conditions" ? "divactive" : "divinactive"
          }`}
          onClick={() => handleButtonClick("ConfirmBooking")}
        >
          <Link to="/confirmBooking" style={{ textDecoration: "none" }}>
            <button className="hd-btn5">
              <span className="hdr-icon-wrapper">
                <MdInsertDriveFile className="hdr-icon-term" />
              </span>
              confirmbooking
            </button>
          </Link>
        </div>
        <div
          className={`hdractive ${
            activeMenu === "Terms & Conditions" ? "divactive" : "divinactive"
          }`}
          onClick={() => handleButtonClick("ConfirmBooking")}
        >
          <Link to="/submitEmail" style={{ textDecoration: "none" }}>
            <button className="hd-btn5">
              <span className="hdr-icon-wrapper">
                <MdInsertDriveFile className="hdr-icon-term" />
              </span>
              submitemail
            </button>
          </Link>
        </div>
        <div
          className={`hdractive ${
            activeMenu === "Terms & Conditions" ? "divactive" : "divinactive"
          }`}
          onClick={() => handleButtonClick("ConfirmBooking")}
        >
          <Link to="/otpVerification" style={{ textDecoration: "none" }}>
            <button className="hd-btn5">
              <span className="hdr-icon-wrapper">
                <MdInsertDriveFile className="hdr-icon-term" />
              </span>
              otp
            </button>
          </Link>
        </div>

        <div className="hdr-download-app">
          <img src={download} alt="download the app" className="hdr-app-dnld" />
          <div className="hdr-dnld-ttls">
            <div className="hdr-titles">
              <span className="hdr-dnld-ttl1">Download Precilo</span>
              <span className="hdr-dnld-ttl2"> App Now!!</span>
              <span className="hdr-dnld-ttl3">
                Enjoy hassle free consultations.
              </span>
            </div>
            <div className="hdr-dnld-icons">
              <img src={playstore} alt="playstore" className="hdr-dnld-play" />
              <img
                src={applestore}
                alt="applestore"
                className="hdr-dnld-apple"
              />
            </div>
          </div>
        </div>
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
