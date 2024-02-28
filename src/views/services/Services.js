import React, { useState, useRef, useEffect } from "react";
import "./Services.css";
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
const Services = () => {
  const [isActiveDental, setIsActiveDental] = useState(false);
  const [isActiveDecay, setIsActiveDecay] = useState(false);
  const [isActiveBraces, setIsActiveBraces] = useState(false);
  const [isActiveCarbide, setIsActiveCarbide] = useState(false);
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
        // document.querySelector(".services-parathree").style.display = "block";
        setServicePage(2);
      } else if (scrollPosition >= threshold) {
        // document.querySelector(".services-paratwo").style.display = "block";
        setServicePage(3);
      } else {
        // document.querySelector(".services-paraone").style.display = "block";
        setServicePage(1);
      }
    };

    const paraRef = servicesParaRef.current;

    if (paraRef) {
      paraRef.addEventListener("scroll", handleScroll);
    }
  }, []);

  const toggleService = (service) => {
    switch (service) {
      case "dental":
        setIsActiveDental(!isActiveDental);
        break;
      case "decay":
        setIsActiveDecay(!isActiveDecay);
        break;
      case "braces":
        setIsActiveBraces(!isActiveBraces);
        break;
      case "carbide":
        setIsActiveCarbide(!isActiveCarbide);
        break;
      default:
        break;
    }
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

        <div className="services-paragraphs" ref={servicesParaRef}>
          <div className="services-paraone">
            <div
              className={`container ${isActiveDental ? "ser-active" : ""}`}
              onClick={() => toggleService("dental")}
            >
              <div className="ser-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <img src={tooth} className="icon" />
                  <span className="title">Dental Crown</span>
                </div>
                {isActiveDental && (
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={dentist}
                alt="Image"
                className={isActiveDental ? "imageenlarge" : "imageservice"}
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`container ${isActiveDecay ? "ser-active" : ""}`}
              onClick={() => toggleService("decay")}
            >
              <div className="ser-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <img src={tooth} className="icon" />
                  <span className="title">Decayed Tooth</span>
                </div>
                {isActiveDecay && (
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={decay}
                alt="Image"
                className={isActiveDecay ? "imageenlarge" : "imageservice"}
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`container ${isActiveBraces ? "ser-active" : ""}`}
              onClick={() => toggleService("braces")}
            >
              <div className="ser-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <img src={tooth} className="icon" />
                  <span className="title">Dental Braces</span>
                </div>
                {isActiveBraces && (
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={braces}
                alt="Image"
                className={isActiveBraces ? "imageenlarge" : "imageservice"}
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`container ${isActiveCarbide ? "ser-active" : ""}`}
              onClick={() => toggleService("carbide")}
            >
              <div className="ser-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <img src={tooth} className="icon" />
                  <span className="title">Carbide Finishing Bur</span>
                </div>
                {isActiveCarbide && (
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              {/* <img src={carbide} alt="Image" className="imageservice" /> */}
              <img
                src={carbide}
                alt="Dentist Image"
                className={isActiveCarbide ? "imageenlarge" : "imageservice"}
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
          </div>
          <div className="services-paratwo">
            <div
              className={`container ${isActiveDental ? "ser-active" : ""}`}
              onClick={() => toggleService("dental")}
            >
              <div className="ser-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <img src={tooth} className="icon" />
                  <span className="title">Dental Crown</span>
                </div>
                {isActiveDental && (
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={dentist}
                alt="Image"
                className={isActiveDental ? "imageenlarge" : "imageservice"}
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`container ${isActiveDecay ? "ser-active" : ""}`}
              onClick={() => toggleService("decay")}
            >
              <div className="ser-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <img src={tooth} className="icon" />
                  <span className="title">Decayed Tooth</span>
                </div>
                {isActiveDecay && (
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={decay}
                alt="Image"
                className={isActiveDecay ? "imageenlarge" : "imageservice"}
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`container ${isActiveBraces ? "ser-active" : ""}`}
              onClick={() => toggleService("braces")}
            >
              <div className="ser-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <img src={tooth} className="icon" />
                  <span className="title">Dental Braces</span>
                </div>
                {isActiveBraces && (
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={braces}
                alt="Image"
                className={isActiveBraces ? "imageenlarge" : "imageservice"}
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`container ${isActiveCarbide ? "ser-active" : ""}`}
              onClick={() => toggleService("carbide")}
            >
              <div className="ser-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <img src={tooth} className="icon" />
                  <span className="title">Carbide Finishing Bur</span>
                </div>
                {isActiveCarbide && (
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={carbide}
                alt="Dentist Image"
                className={isActiveCarbide ? "imageenlarge" : "imageservice"}
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
          </div>
          <div className="services-parathree">
            <div
              className={`container ${isActiveDental ? "ser-active" : ""}`}
              onClick={() => toggleService("dental")}
            >
              <div className="ser-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <img src={tooth} className="icon" />
                  <span className="title">Dental Crown</span>
                </div>
                {isActiveDental && (
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={dentist}
                alt="Image"
                className={isActiveDental ? "imageenlarge" : "imageservice"}
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`container ${isActiveDecay ? "ser-active" : ""}`}
              onClick={() => toggleService("decay")}
            >
              <div className="ser-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <img src={tooth} className="icon" />
                  <span className="title">Decayed Tooth</span>
                </div>
                {isActiveDecay && (
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={decay}
                alt="Image"
                className={isActiveDecay ? "imageenlarge" : "imageservice"}
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`container ${isActiveBraces ? "ser-active" : ""}`}
              onClick={() => toggleService("braces")}
            >
              <div className="ser-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <img src={tooth} className="icon" />
                  <span className="title">Dental Braces</span>
                </div>
                {isActiveBraces && (
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={braces}
                alt="Image"
                className={isActiveBraces ? "imageenlarge" : "imageservice"}
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`container ${isActiveCarbide ? "ser-active" : ""}`}
              onClick={() => toggleService("carbide")}
            >
              <div className="ser-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <img src={tooth} className="icon" />
                  <span className="title">Carbide Finishing Bur</span>
                </div>
                {isActiveCarbide && (
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              {/* <img src={carbide} alt="Image" className="imageservice" /> */}
              <img
                src={carbide}
                alt="Dentist Image"
                className={isActiveCarbide ? "imageenlarge" : "imageservice"}
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
          </div>
        </div>

        <div className="curve-colorone">
          <div className="curve-colortwo">
            <button className="bk-btn" onClick={() => setModalShow(true)}>
              <span className="bk-btn-bkgrd">Start Booking</span>
            </button>
          </div>
        </div>
        <div style={{ borderRadius: "35px" }}>
          <BookingModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
      <Specialists />
      <Reviews />
      <Availability />
      <FooterProfile />
    </div>
  );
};

export default Services;
