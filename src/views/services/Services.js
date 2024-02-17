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

const Services = () => {
  const [isActiveDental, setIsActiveDental] = useState(false);
  const [isActiveDecay, setIsActiveDecay] = useState(false);
  const [isActiveBraces, setIsActiveBraces] = useState(false);
  const [isActiveCarbide, setIsActiveCarbide] = useState(false);
  const [servicePage, setServicePage] = useState(1);
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

      if (scrollPosition >= threshold) {
        document.querySelector(".services-parathree").style.display = "block";
        setServicePage(3);
      } else if (scrollPosition >= threshold / 2) {
        document.querySelector(".services-paratwo").style.display = "block";
        setServicePage(2);
      } else {
        document.querySelector(".services-paraone").style.display = "block";
        setServicePage(1);
      }
    };

    const paraRef = servicesParaRef.current; // save a reference

    if (paraRef) {
      paraRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (paraRef) {
        paraRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [servicesParaRef.current]);


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
                <div className="title">Dental Crown</div>
              </div>
              {isActiveDental && (
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
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
                <div className="title">Decayed Tooth</div>
              </div>
              {isActiveDecay && (
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
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
                <div className="title">Dental Braces</div>
              </div>
              {isActiveBraces && (
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
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
                <div className="title">Carbide Finishing Bur</div>
              </div>
              {isActiveCarbide && (
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
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
                <div className="title">Dental Crown</div>
              </div>
              {isActiveDental && (
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
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
                <div className="title">Decayed Tooth</div>
              </div>
              {isActiveDecay && (
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
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
                <div className="title">Dental Braces</div>
              </div>
              {isActiveBraces && (
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
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
                <div className="title">Carbide Finishing Bur</div>
              </div>
              {isActiveCarbide && (
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
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
                <div className="title">Dental Crown</div>
              </div>
              {isActiveDental && (
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
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
                <div className="title">Decayed Tooth</div>
              </div>
              {isActiveDecay && (
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
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
                <div className="title">Dental Braces</div>
              </div>
              {isActiveBraces && (
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
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
                <div className="title">Carbide Finishing Bur</div>
              </div>
              {isActiveCarbide && (
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis amet molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla egets accumsan, risus sem
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
          <button className="bk-btn">Start Booking</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
