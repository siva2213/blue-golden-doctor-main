import React, { useState, useRef } from "react";
import "./AboutDoctor.css";
import Slider from "react-slick";
import aboutone from "../../assets/aboutone.svg";
import abouttwo from "../../assets/abouttwo.svg";
import aboutthree from "../../assets/aboutthree.svg";
import aboutfour from "../../assets/aboutfour.svg";
import Pagination from "../../components/Pagination";

const AboutDoctor = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [doctorPage, setDoctorPage] = useState(1);
  const totalaboutDoctorPages = 3;
  const aboutListRef = useRef(null);

  const toggleService = (service) => {
    setActiveSection((prev) => (prev === service ? null : service));
  };

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

      <div className="about-list">
        <Slider
          dots={false}
          arrows={false}
          infinite={false}
          beforeChange={(current, next) => {
            if (next > current) {
              setDoctorPage(doctorPage + 1);
            } else if (next < current) {
              setDoctorPage(doctorPage - 1);
            }
          }}
        >
          <div className="about-paragraphsone">
            <div
              className={`aboutcontainer ${
                activeSection === "biography" ? "about-active" : ""
              }`}
              onClick={() => toggleService("biography")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Biography</span>
                </div>
                {activeSection === "biography" && (
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
                  activeSection === "biography"
                    ? "about-imageenlarge"
                    : "about-image"
                }
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`aboutcontainer ${
                activeSection === "education" ? "about-active" : ""
              }`}
              onClick={() => toggleService("education")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Education</span>
                </div>
                {activeSection === "education" && (
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
                  activeSection === "education"
                    ? "about-imageenlarge"
                    : "about-image"
                }
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`aboutcontainer ${
                activeSection === "specialization" ? "about-active" : ""
              }`}
              onClick={() => toggleService("specialization")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Specialization</span>
                </div>
                {activeSection === "specialization" && (
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
                className={
                  activeSection === "specialization"
                    ? "about-imageenlarge"
                    : "about-image"
                }
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
            <div
              className={`aboutcontainer ${
                activeSection === "awards" ? "about-active" : ""
              }`}
              onClick={() => toggleService("awards")}
            >
              <div className="about-icttl">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <span className="about-title">Awards</span>
                </div>
                {activeSection === "awards" && (
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
                  activeSection === "awards"
                    ? "about-imageenlarge"
                    : "about-image"
                }
              />
            </div>
            <hr style={{ width: "90vw", color: "#615f6f" }} />
          </div>
          <div className="about-paragraphstwo" style={{ display: "none" }}>
            <div className="about-paraone">
              <div
                className={`aboutcontainer ${
                  activeSection === "biography" ? "about-active" : ""
                }`}
                onClick={() => toggleService("biography")}
              >
                <div className="about-icttl">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <span className="about-title">Biography</span>
                  </div>
                  {activeSection === "biography" && (
                    <div className="about-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis amet molestie, dictum est a, mattis
                      tellus. Sed dignissim, metus nec fringilla egets accumsan,
                      risus sem sollicitudin lacus.
                    </div>
                  )}
                </div>
                <img
                  src={aboutfour}
                  alt="Image"
                  className={
                    activeSection === "biography"
                      ? "about-imageenlarge"
                      : "about-image"
                  }
                />
              </div>
              <hr style={{ width: "90vw", color: "#615f6f" }} />
              <div
                className={`aboutcontainer ${
                  activeSection === "education" ? "about-active" : ""
                }`}
                onClick={() => toggleService("education")}
              >
                <div className="about-icttl">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <span className="about-title">Education</span>
                  </div>
                  {activeSection === "education" && (
                    <div className="about-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis amet molestie, dictum est a, mattis
                      tellus. Sed dignissim, metus nec fringilla egets accumsan,
                      risus sem sollicitudin lacus.
                    </div>
                  )}
                </div>
                <img
                  src={abouttwo}
                  alt="Image"
                  className={
                    activeSection === "education"
                      ? "about-imageenlarge"
                      : "about-image"
                  }
                />
              </div>
              <hr style={{ width: "90vw", color: "#615f6f" }} />
              <div
                className={`aboutcontainer ${
                  activeSection === "specialization" ? "about-active" : ""
                }`}
                onClick={() => toggleService("specialization")}
              >
                <div className="about-icttl">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <span className="about-title">Specialization</span>
                  </div>
                  {activeSection === "specialization" && (
                    <div className="about-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis amet molestie, dictum est a, mattis
                      tellus. Sed dignissim, metus nec fringilla egets accumsan,
                      risus sem sollicitudin lacus.
                    </div>
                  )}
                </div>
                <img
                  src={aboutthree}
                  alt="Image"
                  className={
                    activeSection === "specialization"
                      ? "about-imageenlarge"
                      : "about-image"
                  }
                />
              </div>
              <hr style={{ width: "90vw", color: "#615f6f" }} />
              <div
                className={`aboutcontainer ${
                  activeSection === "awards" ? "about-active" : ""
                }`}
                onClick={() => toggleService("awards")}
              >
                <div className="about-icttl">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <span className="about-title">Awards</span>
                  </div>
                  {activeSection === "awards" && (
                    <div className="about-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis amet molestie, dictum est a, mattis
                      tellus. Sed dignissim, metus nec fringilla egets accumsan,
                      risus sem sollicitudin lacus.
                    </div>
                  )}
                </div>
                <img
                  src={aboutfour}
                  alt="Dentist Image"
                  className={
                    activeSection === "awards"
                      ? "about-imageenlarge"
                      : "about-image"
                  }
                />
              </div>
              <hr style={{ width: "90vw", color: "#615f6f" }} />
            </div>
          </div>
          <div className="about-paragraphstwo" style={{ display: "none" }}>
            <div className="about-paraone">
              <div
                className={`aboutcontainer ${
                  activeSection === "biography" ? "about-active" : ""
                }`}
                onClick={() => toggleService("biography")}
              >
                <div className="about-icttl">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <span className="about-title">Biography</span>
                  </div>
                  {activeSection === "biography" && (
                    <div className="about-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis amet molestie, dictum est a, mattis
                      tellus. Sed dignissim, metus nec fringilla egets accumsan,
                      risus sem sollicitudin lacus.
                    </div>
                  )}
                </div>
                <img
                  src={aboutfour}
                  alt="Image"
                  className={
                    activeSection === "biography"
                      ? "about-imageenlarge"
                      : "about-image"
                  }
                />
              </div>
              <hr style={{ width: "90vw", color: "#615f6f" }} />
              <div
                className={`aboutcontainer ${
                  activeSection === "education" ? "about-active" : ""
                }`}
                onClick={() => toggleService("education")}
              >
                <div className="about-icttl">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <span className="about-title">Education</span>
                  </div>
                  {activeSection === "education" && (
                    <div className="about-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis amet molestie, dictum est a, mattis
                      tellus. Sed dignissim, metus nec fringilla egets accumsan,
                      risus sem sollicitudin lacus.
                    </div>
                  )}
                </div>
                <img
                  src={abouttwo}
                  alt="Image"
                  className={
                    activeSection === "education"
                      ? "about-imageenlarge"
                      : "about-image"
                  }
                />
              </div>
              <hr style={{ width: "90vw", color: "#615f6f" }} />
              <div
                className={`aboutcontainer ${
                  activeSection === "specialization" ? "about-active" : ""
                }`}
                onClick={() => toggleService("specialization")}
              >
                <div className="about-icttl">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <span className="about-title">Specialization</span>
                  </div>
                  {activeSection === "specialization" && (
                    <div className="about-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis amet molestie, dictum est a, mattis
                      tellus. Sed dignissim, metus nec fringilla egets accumsan,
                      risus sem sollicitudin lacus.
                    </div>
                  )}
                </div>
                <img
                  src={aboutthree}
                  alt="Image"
                  className={
                    activeSection === "specialization"
                      ? "about-imageenlarge"
                      : "about-image"
                  }
                />
              </div>
              <hr style={{ width: "90vw", color: "#615f6f" }} />
              <div
                className={`aboutcontainer ${
                  activeSection === "awards" ? "about-active" : ""
                }`}
                onClick={() => toggleService("awards")}
              >
                <div className="about-icttl">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <span className="about-title">Awards</span>
                  </div>
                  {activeSection === "awards" && (
                    <div className="about-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis amet molestie, dictum est a, mattis
                      tellus. Sed dignissim, metus nec fringilla egets accumsan,
                      risus sem sollicitudin lacus.
                    </div>
                  )}
                </div>
                <img
                  src={aboutfour}
                  alt="Dentist Image"
                  className={
                    activeSection === "awards"
                      ? "about-imageenlarge"
                      : "about-image"
                  }
                />
              </div>
              <hr style={{ width: "90vw", color: "#615f6f" }} />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AboutDoctor;
