import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import Slider from "react-slick";
import services from "../../assets/services.svg";
import tooth from "../../assets/tooth.png";
import Pagination from "../../components/Pagination";
import Svg from "../Svg";
import dentist from "../../assets/dental.svg";
import decay from "../../assets/decay.svg";
import braces from "../../assets/braces.svg";
import carbide from "../../assets/carbide.svg";
import BookingModal from "../../components/Modal";
import Content from "../content/Content";
import Specialists from "../specialists/Specialists";
import Availability from "../availability/Availability";
import Reviews from "../reviews/Reviews";
import FooterProfile from "../footerprofile/FooterProfile";

const ServiceItem = ({
  title,
  icon,
  image,
  activeService,
  toggleService,
  serviceKey,
  link,
}) => (
  <>
    <div
      className={`container ${
        activeService === serviceKey ? "ser-active" : ""
      }`}
      onClick={() => toggleService(serviceKey)}
    >
      <div className="ser-icttl">
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img src={icon} className="icon" alt="Service Icon" />
          <span className="title">{title}</span>
        </div>
        {activeService === serviceKey && (
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis amet molestie, dictum est a, mattis tellus. Sed dignissim,
            metus nec fringilla egets accumsan, risus sem sollicitudin lacus.
            <Link to={link} className="view-more-link">
              View More
            </Link>
          </div>
        )}
      </div>
      <img
        src={image}
        alt="Service Image"
        className={
          activeService === serviceKey ? "imageenlarge" : "imageservice"
        }
      />
    </div>
    <hr style={{ width: "90vw", color: "#615f6f" }} />
  </>
);

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [servicePage, setServicePage] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const totalServicePages = 3;
  const servicesParaRef = useRef(null);

  const handleServicePageChange = () => {
    if (servicePage < totalServicePages) {
      setServicePage(servicePage + 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = servicesParaRef.current.scrollLeft;
      const scrollWidth = servicesParaRef.current.scrollWidth;
      const clientWidth = servicesParaRef.current.clientWidth;
      const threshold = scrollWidth - clientWidth - 10;
      const halfwayThreshold = threshold / 2;
      if (scrollPosition >= halfwayThreshold && scrollPosition < threshold) {
        setServicePage(2);
      } else if (scrollPosition >= threshold) {
        setServicePage(3);
      } else {
        setServicePage(1);
      }
    };

    const paraRef = servicesParaRef.current;

    if (paraRef) {
      paraRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (paraRef) {
        paraRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const toggleService = (service) => {
    setActiveService(activeService === service ? null : service);
  };

  return (
    <div>
      <Content />
      <div className="ser-main">
        <div className="ser-top">
          <h2 className="ser-ttl">Our Services</h2>
          <div className="ser-page">
            <Pagination
              currentPage={servicePage}
              totalPages={totalServicePages}
              dotActiveColor="#E957C9"
              dotInactiveColor="#DDDDDD"
            />
          </div>
        </div>
        <hr style={{ width: "90vw", border: "0.2px solid #726D8E" }} />
        <div className="services-paragraphs">
          <Slider
            dots={false}
            arrows={false}
            infinite={false}
            beforeChange={(current, next) => {
              if(next > current) {
                setServicePage(servicePage + 1);
              } else if ( next < current) {
                setServicePage(servicePage - 1);
              }
            }}
          >
            <div className="services-paraone">
              <ServiceItem
                title="Dental Crown"
                icon={tooth}
                image={dentist}
                activeService={activeService}
                toggleService={toggleService}
                serviceKey="dental"
                link="/services/dental"
              />
              <ServiceItem
                title="Decayed Tooth"
                icon={tooth}
                image={decay}
                activeService={activeService}
                toggleService={toggleService}
                serviceKey="decay"
                link="/services/decay"
              />
              <ServiceItem
                title="Dental Braces"
                icon={tooth}
                image={braces}
                activeService={activeService}
                toggleService={toggleService}
                serviceKey="braces"
                link="/services/braces"
              />
              <ServiceItem
                title="Carbide Finishing Bur"
                icon={tooth}
                image={carbide}
                activeService={activeService}
                toggleService={toggleService}
                serviceKey="carbide"
                link="/services/carbide"
              />
            </div>
            <div className="services-paratwo">
              <ServiceItem
                title="Dental Crown"
                icon={tooth}
                image={dentist}
                activeService={activeService}
                toggleService={toggleService}
                serviceKey="dental"
                link="/services/dental"
              />
              <ServiceItem
                title="Decayed Tooth"
                icon={tooth}
                image={decay}
                activeService={activeService}
                toggleService={toggleService}
                serviceKey="decay"
                link="/services/decay"
              />
              <ServiceItem
                title="Dental Braces"
                icon={tooth}
                image={braces}
                activeService={activeService}
                toggleService={toggleService}
                serviceKey="braces"
                link="/services/braces"
              />
              <ServiceItem
                title="Carbide Finishing Bur"
                icon={tooth}
                image={carbide}
                activeService={activeService}
                toggleService={toggleService}
                serviceKey="carbide"
                link="/services/carbide"
              />
            </div>
            <div className="services-parathree">
              <ServiceItem
                title="Dental Crown"
                icon={tooth}
                image={dentist}
                activeService={activeService}
                toggleService={toggleService}
                serviceKey="dental"
                link="/services/dental"
              />
              <ServiceItem
                title="Decayed Tooth"
                icon={tooth}
                image={decay}
                activeService={activeService}
                toggleService={toggleService}
                serviceKey="decay"
                link="/services/decay"
              />
              <ServiceItem
                title="Dental Braces"
                icon={tooth}
                image={braces}
                activeService={activeService}
                toggleService={toggleService}
                serviceKey="braces"
                link="/services/braces"
              />
              <ServiceItem
                title="Carbide Finishing Bur"
                icon={tooth}
                image={carbide}
                activeService={activeService}
                toggleService={toggleService}
                serviceKey="carbide"
                link="/services/carbide"
              />
            </div>
          </Slider>
        </div>
        <div className="curve-colorone">
          <div className="curve-colortwo">
            <button className="bk-btn" onClick={() => setModalShow(true)}>
              <span className="bk-btn-bkgrd">Start Booking</span>
            </button>
          </div>
        </div>
        <BookingModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <Specialists />
      <Reviews />
      <Availability />
      <FooterProfile />
    </div>
  );
};

export default Services;
