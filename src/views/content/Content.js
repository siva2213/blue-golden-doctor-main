import React from "react";
import "./Content.css";
import Statchart from "../../components/statsChart";
import { IoSearch } from "react-icons/io5";
import Background from "../../assets/background.svg";
import cards from "../../assets/cards.svg";
import graphs from "../../assets/graphs.svg";
import { FaUserDoctor } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import responsive from "../../assets/cardsresponsive.svg";
import reslogo from "../../assets/reslogo.svg";
import { FaLocationCrosshairs } from "react-icons/fa6";

const Content = () => {
  return (
    <>
      <div className="cnt-main">
        <div className="cnt-left">
          <div class="search-container">
            <input
              type="text"
              placeholder="Search doctor"
              name="search"
              className="src-input"
            />
            <IoSearch className="src-icon" />
          </div>

          <div className="text-paragraph">
            <div className="src-paragraph">
              <p className="src-text1">
                The Countdown is on{" "}
                <span className="src-text2">
                  - get Ready for our app launch.
                </span>
              </p>
              <p className="src-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus.
              </p>
            </div>

            <div className="cnt-display">
              <div className="cnt-doc">
                <FaUserDoctor className="docs-icon1" />
                <div className="cnt-count">
                  <p className="cnt-ttl">Total Doctors</p>
                  <p className="cnt-num">15,000+</p>
                </div>
              </div>
              <div className="cnt-pat">
                <BsFillPersonFill className="docs-icon2" />
                <div className="cnt-count">
                  <p className="cnt-ttl">Total Patients</p>
                  <p className="cnt-num">15+ Lakh</p>
                </div>
              </div>
            </div>

            <div className="graphdiv">
              {/* <img src={graphs} alt="graphs" className="cnt-graphs" /> */}
              <Statchart />
            </div>
          </div>
        </div>
        <img src={cards} alt="notifications" className="cnt-card cnt-right" />
        <img
          src={responsive}
          alt="notifications"
          className="cnt-card cnt-right-res"
        />
      </div>

      <div className="cnt-main-res">
        <div className="cnt-left-res">
          <div className="loc-search">
            <div className="res-loc">
              <FaLocationCrosshairs
                className="loc-icon"
                style={{ color: "E4C17F", fontSize: "20px" }}
              />
              <h4 style={{ color: "#ffff", margin: "0px" }}>Delhi</h4>
              <i class="arrow down"></i>
            </div>
            <div class="search-container-res">
              <input
                type="text"
                placeholder="Search doctor"
                name="search"
                className="src-input"
              />
              <IoSearch className="src-icon-res" />
            </div>
          </div>
          <div className="graphs-data-res">
            <div className="cnt-display-res">
              <div className="cnt-doc-res">
                <FaUserDoctor
                  className="doc-icon1"
                  style={{ color: "E957C9", fontSize: "24px" }}
                />
                <div className="cnt-count-res">
                  <p className="cnt-ttl-res">Total Doctors</p>
                  <p className="cnt-num-res">15,000+</p>
                </div>
              </div>
              <div className="cnt-pat-res">
                <BsFillPersonFill
                  className="doc-icon2"
                  style={{ color: "E957C9", fontSize: "28px" }}
                />
                <div className="cnt-count-res">
                  <p className="cnt-ttl-res">Total Patients</p>
                  <p className="cnt-num-res">15+ Lakh</p>
                </div>
              </div>
            </div>
            <div className="graphdiv-res">
              {/* <img src={graphs} alt="graphs" className="cnt-graphs-res" /> */}
              <Statchart />
            </div>
          </div>
        </div>
        <div className="cnt-right-res">
          <img alt="logo" src={reslogo} className="reslogo" />
          <div className="launch">
            <hr
              style={{
                height: "1%",
                borderColor: "#E48E51",
                width: "100%",
                color: "black",
              }}
            />
            <div className="launch-soon">Launching soon</div>
          </div>
          <div className="src-paragraph-res">
            <p className="src-text1-res">
              The Countdown is on{" "}
              <span className="src-text2-res">
                - get Ready for our app launch.
              </span>
            </p>
            <p className="src-para-res">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus.
            </p>
          </div>
          <img
            src={responsive}
            alt="notifications"
            className="cnt-card cnt-right-res-img"
          />
        </div>
      </div>
    </>
  );
};

export default Content;
