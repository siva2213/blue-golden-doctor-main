import React, { useState, useRef, useEffect } from "react";
import "./AboutDoctor.css";
import aboutone from "../../assets/aboutone.svg";
import abouttwo from "../../assets/abouttwo.svg";
import aboutthree from "../../assets/aboutthree.svg";
import aboutfour from "../../assets/aboutfour.svg";
import Pagination from "../../components/Pagination";

const AboutDoctor = () => {
  const [isActiveBiography, setIsActiveBiography] = useState(false);
  const [isActiveEducation, setIsActiveEducation] = useState(false);
  const [isActiveSpec, setIsActiveSpec] = useState(false);
  const [isActiveAwards, setIsActiveAwards] = useState(false);
  const [doctorPage, setDoctorPage] = useState(1);
  const totalaboutDoctorPages = 3;
  const aboutListRef = useRef(null);
  const toggleService = (service) => {
    switch (service) {
      case "biography":
        setIsActiveBiography(!isActiveBiography);
        break;
      case "education":
        setIsActiveEducation(!isActiveEducation);
        break;
      case "specialization":
        setIsActiveSpec(!isActiveSpec);
        break;
      case "awards":
        setIsActiveAwards(!isActiveAwards);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = aboutListRef.current.scrollLeft;
      const scrollWidth = aboutListRef.current.scrollWidth;
      const clientWidth = aboutListRef.current.clientWidth;
      const threshold = scrollWidth - clientWidth - 10;

      if (scrollPosition >= threshold) {
        document.querySelector(".about-paragraphsthree").style.display =
          "block";
        setDoctorPage(3);
      } else if (scrollPosition >= threshold / 2) {
        document.querySelector(".about-paragraphstwo").style.display = "block";
        setDoctorPage(2);
      } else {
        document.querySelector(".about-paragraphsone").style.display = "block";
        setDoctorPage(1);
      }
    };

    aboutListRef.current.addEventListener("scroll", handleScroll);

    // return () => {
    //   aboutListRef.current.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <div className="about-main">
      <div className="about-top">
        <h2 className="about-ttl">About Doctor</h2>
        <div className="about-page">
          <Pagination
            currentPage={doctorPage}
            totalPages={totalaboutDoctorPages}
            dotActiveColor="#E957C9"
            dotInactiveColor="#DDDDDD"
          />
        </div>
      </div>
      <hr style={{ width: "90vw", color: "#615f6f" }} />

      <div className="about-list" ref={aboutListRef}>
        <div className="about-paragraphsone">
          <div
            className="about-paraone"
            //   ref={servicesParaRef}
            //   onScroll={handleScroll}
          >
            <div
              className={`aboutcontainer ${
                isActiveBiography ? "about-active" : ""
              }`}
              onClick={() => toggleService("biography")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Biography</span>
                </div>
                {isActiveBiography && (
                  <div className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={aboutfour}
                alt="Image"
                className={
                  isActiveBiography ? "about-imageenlarge" : "about-image"
                }
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`aboutcontainer ${
                isActiveEducation ? "about-active" : ""
              }`}
              onClick={() => toggleService("education")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Education</span>
                </div>
                {isActiveEducation && (
                  <div className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={abouttwo}
                alt="Image"
                className={
                  isActiveEducation ? "about-imageenlarge" : "about-image"
                }
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`aboutcontainer ${isActiveSpec ? "about-active" : ""}`}
              onClick={() => toggleService("specialization")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Specialization</span>
                </div>
                {isActiveSpec && (
                  <div className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={aboutthree}
                alt="Image"
                className={isActiveSpec ? "about-imageenlarge" : "about-image"}
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`aboutcontainer ${
                isActiveAwards ? "about-active" : ""
              }`}
              onClick={() => toggleService("awards")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Awards</span>
                </div>
                {isActiveAwards && (
                  <div className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              {/* <img src={carbide} alt="Image" className="about-imageservice" /> */}
              <img
                src={aboutfour}
                alt="Dentist Image"
                className={
                  isActiveAwards ? "about-imageenlarge" : "about-image"
                }
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
          </div>
        </div>
        <div className="about-paragraphstwo" style={{ display: "none" }}>
          <div
            className="about-paraone"
            //   ref={servicesParaRef}
            //   onScroll={handleScroll}
          >
            <div
              className={`aboutcontainer ${
                isActiveBiography ? "about-active" : ""
              }`}
              onClick={() => toggleService("biography")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Biography</span>
                </div>
                {isActiveBiography && (
                  <div className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={aboutfour}
                alt="Image"
                className={
                  isActiveBiography ? "about-imageenlarge" : "about-image"
                }
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`aboutcontainer ${
                isActiveEducation ? "about-active" : ""
              }`}
              onClick={() => toggleService("education")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Education</span>
                </div>
                {isActiveEducation && (
                  <div className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={abouttwo}
                alt="Image"
                className={
                  isActiveEducation ? "about-imageenlarge" : "about-image"
                }
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`aboutcontainer ${isActiveSpec ? "about-active" : ""}`}
              onClick={() => toggleService("specialization")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Specialization</span>
                </div>
                {isActiveSpec && (
                  <div className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={aboutthree}
                alt="Image"
                className={isActiveSpec ? "about-imageenlarge" : "about-image"}
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`aboutcontainer ${
                isActiveAwards ? "about-active" : ""
              }`}
              onClick={() => toggleService("awards")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Awards</span>
                </div>
                {isActiveAwards && (
                  <div className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={aboutfour}
                alt="Dentist Image"
                className={
                  isActiveAwards ? "about-imageenlarge" : "about-image"
                }
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
          </div>
        </div>
        <div className="about-paragraphsthree" style={{ display: "none" }}>
          <div
            className="about-paraone"
            //   ref={servicesParaRef}
            //   onScroll={handleScroll}
          >
            <div
              className={`aboutcontainer ${
                isActiveBiography ? "about-active" : ""
              }`}
              onClick={() => toggleService("biography")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Biography</span>
                </div>
                {isActiveBiography && (
                  <div className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={aboutfour}
                alt="Image"
                className={
                  isActiveBiography ? "about-imageenlarge" : "about-image"
                }
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`aboutcontainer ${
                isActiveEducation ? "about-active" : ""
              }`}
              onClick={() => toggleService("education")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Education</span>
                </div>
                {isActiveEducation && (
                  <div className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={abouttwo}
                alt="Image"
                className={
                  isActiveEducation ? "about-imageenlarge" : "about-image"
                }
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`aboutcontainer ${isActiveSpec ? "about-active" : ""}`}
              onClick={() => toggleService("specialization")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Specialization</span>
                </div>
                {isActiveSpec && (
                  <div className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={aboutthree}
                alt="Image"
                className={isActiveSpec ? "about-imageenlarge" : "about-image"}
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`aboutcontainer ${
                isActiveAwards ? "about-active" : ""
              }`}
              onClick={() => toggleService("awards")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Awards</span>
                </div>
                {isActiveAwards && (
                  <div className="about-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis amet molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla egets accumsan, risus sem
                    sollicitudin lacus.
                  </div>
                )}
              </div>
              <img
                src={aboutfour}
                alt="Dentist Image"
                className={
                  isActiveAwards ? "about-imageenlarge" : "about-image"
                }
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;
